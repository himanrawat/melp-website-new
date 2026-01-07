"use client";

import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type SlackStyleHeadingProps = {
	/** Static text displayed before the rotating word */
	prefix?: string;
	/** Static text displayed after the rotating word */
	suffix?: string;
	/** The word that appears first and last (e.g., "work") */
	highlightWord: string;
	/** Array of words that cycle in between (e.g., ["collaboration", "teamwork"]) */
	cycleWords: string[];
	/** Time in milliseconds for each word to be visible. Defaults to 400ms */
	wordDuration?: number;
	/** Time in milliseconds to wait before looping again. Defaults to 5000ms */
	loopDelay?: number;
	/** Optional className for the container */
	className?: string;
	/** Optional className for the rotating word */
	rotatingClassName?: string;
	/** Optional className for the prefix text */
	prefixClassName?: string;
	/** Optional className for the suffix text */
	suffixClassName?: string;
};

export const SlackStyleHeading: React.FC<SlackStyleHeadingProps> = ({
	prefix,
	suffix,
	highlightWord,
	cycleWords,
	wordDuration = 400,
	loopDelay = 5000,
	className,
	rotatingClassName,
	prefixClassName,
	suffixClassName,
}) => {
	// Build full sequence: highlightWord -> cycleWords -> highlightWord
	const allWords = useMemo(
		() => [highlightWord, ...cycleWords, highlightWord],
		[highlightWord, cycleWords]
	);

	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [containerWidth, setContainerWidth] = useState<number>(0);
	const [maxWidth, setMaxWidth] = useState<number>(0);
	const [isMounted, setIsMounted] = useState(false);

	const measureRef = useRef<HTMLSpanElement>(null);
	const wordWidths = useRef<Map<number, number>>(new Map());
	const hasMeasured = useRef(false);

	// Measure all word widths on mount using useLayoutEffect for synchronous measurement
	useLayoutEffect(() => {
		// Only measure once to prevent scroll-triggered re-measurements
		if (hasMeasured.current || !measureRef.current) return;

		let max = 0;
		allWords.forEach((word, index) => {
			if (measureRef.current) {
				measureRef.current.textContent = word;
				// Use getBoundingClientRect for more reliable measurements
				const width = measureRef.current.getBoundingClientRect().width;
				// Only store valid measurements
				if (width > 0) {
					wordWidths.current.set(index, width);
					if (width > max) max = width;
				}
			}
		});

		// Only proceed if we got valid measurements
		if (max > 0) {
			setMaxWidth(max);
			const initialWidth = wordWidths.current.get(0) || 0;
			if (initialWidth > 0) {
				setContainerWidth(initialWidth);
			}
			hasMeasured.current = true;
			setIsMounted(true);
		}
	}, [allWords]);

	// Animation cycle
	useEffect(() => {
		if (!isMounted || maxWidth === 0) return;

		let rollTimeout: NodeJS.Timeout;
		let wordIndex = 0;
		let isFirstRun = true;

		const rollNextWord = () => {
			wordIndex++;
			if (wordIndex >= allWords.length) {
				// Animation complete - shrink back to initial width
				setTimeout(() => {
					const initialWidth = wordWidths.current.get(0);
					// Only update if we have a valid cached width
					if (initialWidth && initialWidth > 0) {
						setContainerWidth(initialWidth);
					}
				}, 300);
				return;
			}
			setCurrentWordIndex(wordIndex);
			rollTimeout = setTimeout(rollNextWord, wordDuration);
		};

		const startAnimation = () => {
			// First expand to max width, then start rolling
			setContainerWidth(maxWidth);

			// Wait for container expansion to complete before rolling
			rollTimeout = setTimeout(() => {
				if (isFirstRun) {
					// First run: start from index 0 (work), roll through all
					wordIndex = 0;
					setCurrentWordIndex(0);
					rollTimeout = setTimeout(rollNextWord, wordDuration);
					isFirstRun = false;
				} else {
					// Subsequent loops: skip "work" roll-out, start from index 1
					wordIndex = 1;
					setCurrentWordIndex(1);
					rollTimeout = setTimeout(rollNextWord, wordDuration);
				}
			}, 400); // Wait for width expansion animation to complete
		};

		// Initial animation after 1s
		const initialTimeout = setTimeout(startAnimation, 1000);

		// Loop animation
		const totalAnimationTime = allWords.length * wordDuration + 1500;
		const loopInterval = setInterval(() => {
			startAnimation();
		}, loopDelay + totalAnimationTime);

		return () => {
			clearTimeout(initialTimeout);
			clearTimeout(rollTimeout);
			clearInterval(loopInterval);
		};
	}, [isMounted, maxWidth, allWords.length, wordDuration, loopDelay]);

	const currentWord = allWords[currentWordIndex];

	return (
		<h1
			className={cn(
				"flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4",
				className
			)}
		>
			{/* Hidden element to measure text width */}
			<span
				ref={measureRef}
				className={cn(
					"absolute opacity-0 pointer-events-none whitespace-nowrap",
					rotatingClassName
				)}
				style={{ visibility: "hidden", position: "absolute", left: -9999 }}
				aria-hidden="true"
			/>

			{/* Prefix */}
			{prefix && (
				<span className={cn("shrink-0", prefixClassName)}>{prefix}</span>
			)}

			{/* Rotating word container */}
			<motion.span
				className="relative inline-flex items-center justify-center overflow-hidden"
				animate={{ width: containerWidth }}
				transition={{
					duration: 0.4,
					ease: [0.25, 0.1, 0.25, 1],
				}}
				style={{ height: "1.15em" }}
			>
				<AnimatePresence mode="wait" initial={false}>
					<motion.span
						key={currentWordIndex}
						className={cn(
							"absolute inset-0 flex items-center justify-center whitespace-nowrap",
							rotatingClassName
						)}
						initial={{ y: "100%" }}
						animate={{ y: "0%" }}
						exit={{ y: "-100%" }}
						transition={{
							duration: 0.35,
							ease: [0.33, 1, 0.68, 1],
						}}
					>
						{currentWord}
					</motion.span>
				</AnimatePresence>
			</motion.span>

			{/* Suffix */}
			{suffix && (
				<span className={cn("shrink-0", suffixClassName)}>{suffix}</span>
			)}
		</h1>
	);
};

export default SlackStyleHeading;
