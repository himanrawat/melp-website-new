"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const DEFAULT_CHARSET =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset: string): string {
	const index = Math.floor(Math.random() * charset.length);
	return charset.charAt(index);
}

function generateGibberishPreservingSpaces(
	original: string,
	charset: string
): string {
	if (!original) return "";
	let result = "";
	for (let i = 0; i < original.length; i += 1) {
		const ch = original[i];
		result += ch === " " ? " " : generateRandomCharacter(charset);
	}
	return result;
}

type EncryptedStyleHeadingProps = {
	/** Static text displayed before the rotating encrypted word */
	staticText?: string;
	/** Array of words/phrases that rotate with encryption effect */
	rotatingWords: string[];
	/** Time in milliseconds between revealing each character. Defaults to 50ms */
	revealDelayMs?: number;
	/** Custom character set for the gibberish effect */
	charset?: string;
	/** Time in milliseconds between gibberish flips. Defaults to 50ms */
	flipDelayMs?: number;
	/** Time in milliseconds to display each word before rotating. Defaults to 3000ms */
	displayDurationMs?: number;
	/** Optional className for the container */
	className?: string;
	/** Optional className for the static text */
	staticTextClassName?: string;
	/** CSS class for styling the encrypted/scrambled characters */
	encryptedClassName?: string;
	/** CSS class for styling the revealed characters */
	revealedClassName?: string;
};

// Inner component that handles the encryption animation
const EncryptedTextInner: React.FC<{
	text: string;
	revealDelayMs: number;
	charset: string;
	flipDelayMs: number;
	encryptedClassName?: string;
	revealedClassName?: string;
}> = ({
	text,
	revealDelayMs,
	charset,
	flipDelayMs,
	encryptedClassName,
	revealedClassName,
}) => {
	const [revealCount, setRevealCount] = useState<number>(0);
	const [isMounted, setIsMounted] = useState(false);
	const animationFrameRef = useRef<number | null>(null);
	const startTimeRef = useRef<number>(0);
	const lastFlipTimeRef = useRef<number>(0);
	const scrambleCharsRef = useRef<string[]>(text ? text.split("") : []);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (!isMounted) return;

		const initial = text
			? generateGibberishPreservingSpaces(text, charset)
			: "";
		scrambleCharsRef.current = initial.split("");
		startTimeRef.current = performance.now();
		lastFlipTimeRef.current = startTimeRef.current;
		setRevealCount(0);

		let isCancelled = false;

		const update = (now: number) => {
			if (isCancelled) return;

			const elapsedMs = now - startTimeRef.current;
			const totalLength = text.length;
			const currentRevealCount = Math.min(
				totalLength,
				Math.floor(elapsedMs / Math.max(1, revealDelayMs))
			);

			setRevealCount(currentRevealCount);

			if (currentRevealCount >= totalLength) {
				return;
			}

			const timeSinceLastFlip = now - lastFlipTimeRef.current;
			if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
				for (let index = 0; index < totalLength; index += 1) {
					if (index >= currentRevealCount) {
						if (text[index] !== " ") {
							scrambleCharsRef.current[index] =
								generateRandomCharacter(charset);
						} else {
							scrambleCharsRef.current[index] = " ";
						}
					}
				}
				lastFlipTimeRef.current = now;
			}

			animationFrameRef.current = requestAnimationFrame(update);
		};

		animationFrameRef.current = requestAnimationFrame(update);

		return () => {
			isCancelled = true;
			if (animationFrameRef.current !== null) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [isMounted, text, revealDelayMs, charset, flipDelayMs]);

	if (!text) return null;

	if (!isMounted) {
		return (
			<>
				{text.split("").map((char, index) => (
					<span key={index} className={cn(revealedClassName)}>
						{char}
					</span>
				))}
			</>
		);
	}

	return (
		<>
			{text.split("").map((char, index) => {
				const isRevealed = index < revealCount;
				const displayChar = isRevealed
					? char
					: char === " "
					? " "
					: scrambleCharsRef.current[index] || char;

				return (
					<span
						key={index}
						className={cn(isRevealed ? revealedClassName : encryptedClassName)}
					>
						{displayChar}
					</span>
				);
			})}
		</>
	);
};

export const EncryptedStyleHeading: React.FC<EncryptedStyleHeadingProps> = ({
	staticText,
	rotatingWords,
	revealDelayMs = 50,
	charset = DEFAULT_CHARSET,
	flipDelayMs = 50,
	displayDurationMs = 3000,
	className,
	staticTextClassName,
	encryptedClassName,
	revealedClassName,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [key, setKey] = useState(0);
	const [textWidths, setTextWidths] = useState<number[]>([]);
	const [isMounted, setIsMounted] = useState(false);
	const ref = useRef<HTMLHeadingElement>(null);
	const measureRef = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	// Measure actual text widths on mount
	useEffect(() => {
		setIsMounted(true);
		if (measureRef.current) {
			const widths = rotatingWords.map((text) => {
				if (measureRef.current) {
					measureRef.current.textContent = text;
					return measureRef.current.offsetWidth;
				}
				return 0;
			});
			setTextWidths(widths);
		}
	}, [rotatingWords]);

	useEffect(() => {
		if (!isInView || rotatingWords.length <= 1) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
			setKey((prev) => prev + 1);
		}, displayDurationMs);

		return () => clearInterval(interval);
	}, [isInView, rotatingWords.length, displayDurationMs]);

	const currentText = rotatingWords[currentIndex];
	const currentWidth = textWidths[currentIndex] || 0;
	const longestText = rotatingWords.reduce(
		(a, b) => (a.length > b.length ? a : b),
		""
	);

	return (
		<h1 ref={ref} className={cn(className)}>
			{/* Hidden element to measure text widths */}
			<span
				ref={measureRef}
				className={cn(
					"absolute opacity-0 pointer-events-none whitespace-nowrap",
					revealedClassName
				)}
				style={{ visibility: "hidden", position: "absolute", left: -9999 }}
				aria-hidden="true"
			/>

			{/* Static text */}
			{staticText && (
				<span className={staticTextClassName}>{staticText} </span>
			)}

			{/* Rotating encrypted word */}
			<motion.span
				className="relative inline-block"
				animate={{
					width: isMounted && currentWidth > 0 ? currentWidth : "auto",
				}}
				transition={{
					width: {
						type: "spring",
						stiffness: 300,
						damping: 30,
						mass: 0.8,
					},
				}}
				style={{
					minWidth: !isMounted ? `${longestText.length}ch` : undefined,
				}}
			>
				<AnimatePresence mode="wait">
					<motion.span
						key={key}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="inline-block whitespace-nowrap"
					>
						<EncryptedTextInner
							text={currentText}
							revealDelayMs={revealDelayMs}
							charset={charset}
							flipDelayMs={flipDelayMs}
							encryptedClassName={encryptedClassName}
							revealedClassName={revealedClassName}
						/>
					</motion.span>
				</AnimatePresence>
			</motion.span>
		</h1>
	);
};

export default EncryptedStyleHeading;
