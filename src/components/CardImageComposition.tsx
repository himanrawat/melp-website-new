"use client";

import { motion, MotionValue, useTransform } from "motion/react";

type AccentPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface AccentImage {
	src: string;
	position: AccentPosition;
	size: "sm" | "md" | "lg";
}

interface CardImageCompositionProps {
	baseImage: string;
	accents: AccentImage[];
	progress: MotionValue<number>;
	entryStart: number;
	entryEnd: number;
	exitStart: number;
	exitEnd: number;
}

// Size mapping as scale factors (multiplier of actual image size)
const sizeMap = {
	sm: 0.8, // 80% of actual size
	md: 1, // 100% of actual size
	lg: 1.2, // 120% of actual size
};

// Position offsets in pixels - places accents at/beyond base image edges
const positionOffsets = {
	"top-left": { x: -120, y: -100 },
	"top-right": { x: 120, y: -100 },
	"bottom-left": { x: -120, y: 100 },
	"bottom-right": { x: 120, y: 100 },
};

interface FloatingAccentProps {
	accent: AccentImage;
	index: number;
	totalAccents: number;
	progress: MotionValue<number>;
	entryStart: number;
	entryEnd: number;
	exitStart: number;
	exitEnd: number;
}

function FloatingAccent({
	accent,
	index,
	totalAccents,
	progress,
	entryStart,
	entryEnd,
	exitStart,
	exitEnd,
}: FloatingAccentProps) {
	const scaleFactor = sizeMap[accent.size];
	const targetOffset = positionOffsets[accent.position];

	// Calculate stagger for sequential animation
	const staggerDelay = 0.025; // 2.5% progress delay between each accent
	const entryDuration = entryEnd - entryStart;
	const exitDuration = exitEnd - exitStart;

	// Each accent gets its own delayed entry timing
	const accentEntryStart = entryStart + index * staggerDelay;
	const accentEntryEnd = Math.min(
		accentEntryStart + entryDuration / totalAccents + staggerDelay,
		entryEnd
	);

	// Exit animation - reverse order (last accent exits first)
	const reverseIndex = totalAccents - 1 - index;
	const accentExitStart = exitStart + reverseIndex * staggerDelay;
	const accentExitEnd = Math.min(
		accentExitStart + exitDuration / totalAccents + staggerDelay,
		exitEnd
	);

	// Scale animation: 0 -> scaleFactor (entry) -> scaleFactor (hold) -> 0 (exit)
	const scale = useTransform(
		progress,
		[accentEntryStart, accentEntryEnd, accentExitStart, accentExitEnd],
		[0, scaleFactor, scaleFactor, 0]
	);

	// X position animation: 0 -> targetX (entry) -> targetX (hold) -> 0 (exit)
	const x = useTransform(
		progress,
		[accentEntryStart, accentEntryEnd, accentExitStart, accentExitEnd],
		[0, targetOffset.x, targetOffset.x, 0]
	);

	// Y position animation: 0 -> targetY (entry) -> targetY (hold) -> 0 (exit)
	const y = useTransform(
		progress,
		[accentEntryStart, accentEntryEnd, accentExitStart, accentExitEnd],
		[0, targetOffset.y, targetOffset.y, 0]
	);

	return (
		<motion.div
			className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
			style={{
				x,
				y,
				scale,
			}}
		>
			<img src={accent.src} alt="" className="drop-shadow-lg" />
		</motion.div>
	);
}

export default function CardImageComposition({
	baseImage,
	accents,
	progress,
	entryStart,
	entryEnd,
	exitStart,
	exitEnd,
}: CardImageCompositionProps) {
	return (
		<div className="relative aspect-square max-w-[400px] mx-auto">
			{/* Base image */}
			<img
				src={baseImage}
				alt="Feature visual"
				className="w-full h-full object-contain"
			/>

			{/* Floating accent images */}
			{accents.map((accent, index) => (
				<FloatingAccent
					key={`${accent.src}-${accent.position}`}
					accent={accent}
					index={index}
					totalAccents={accents.length}
					progress={progress}
					entryStart={entryStart}
					entryEnd={entryEnd}
					exitStart={exitStart}
					exitEnd={exitEnd}
				/>
			))}
		</div>
	);
}

// Export types for use in StackingCardsSection
export type { AccentImage, AccentPosition };
