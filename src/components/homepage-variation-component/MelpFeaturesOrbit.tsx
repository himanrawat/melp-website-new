"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

// Tool logos arranged around Melp - better spaced positions
const toolLogos = [
	{ src: "/melp/google-drive.svg", alt: "Google Drive", x: -200, y: -80 },
	{ src: "/melp/office.svg", alt: "Microsoft Office", x: -80, y: -160 },
	{ src: "/melp/salesforce.svg", alt: "Salesforce", x: 80, y: -160 },
	{ src: "/melp/teams.svg", alt: "Microsoft Teams", x: 200, y: -80 },
	{ src: "/melp/linkedin.svg", alt: "LinkedIn", x: 220, y: 40 },
	{ src: "/melp/hubspot.svg", alt: "HubSpot", x: -220, y: 40 },
	{ src: "/melp/slack.svg", alt: "Slack", x: -180, y: 140 },
	{ src: "/melp/zoom.svg", alt: "Zoom", x: -60, y: 180 },
	{ src: "/melp/onedrive.svg", alt: "OneDrive", x: 60, y: 180 },
	{ src: "/melp/asana-logo.svg", alt: "Asana", x: 180, y: 140 },
];

// Component for individual logo with animation
function AnimatedLogo({
	logo,
	animationProgress,
}: {
	logo: (typeof toolLogos)[0];
	animationProgress: MotionValue<number>;
}) {
	const x = useTransform(animationProgress, [0, 1], [0, logo.x]);
	const y = useTransform(animationProgress, [0, 1], [0, logo.y]);
	const scale = useTransform(animationProgress, [0, 0.5, 1], [0, 0.8, 1]);
	const opacity = useTransform(animationProgress, [0, 0.3, 1], [0, 0.5, 1]);

	return (
		<motion.div
			className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white shadow-lg border border-neutral-200 flex items-center justify-center overflow-hidden p-2"
			style={{ x, y, scale, opacity, zIndex: 10 }}
		>
			<Image
				src={logo.src}
				alt={logo.alt}
				width={40}
				height={40}
				className="w-full h-full object-contain"
			/>
		</motion.div>
	);
}

// Component for hand-drawn style arrow line
function ArrowLine({
	logo,
	animationProgress,
	index,
}: {
	logo: (typeof toolLogos)[0];
	animationProgress: MotionValue<number>;
	index: number;
}) {
	// Calculate positions
	const angle = Math.atan2(-logo.y, -logo.x);
	const startX = logo.x * 0.72;
	const startY = logo.y * 0.72;
	const endX = logo.x * 0.28;
	const endY = logo.y * 0.28;

	// Create slight curve offset for hand-drawn look (alternating direction)
	const curveOffset = (index % 2 === 0 ? 1 : -1) * 15;
	const midX = (startX + endX) / 2 + curveOffset * Math.cos(angle + Math.PI / 2);
	const midY = (startY + endY) / 2 + curveOffset * Math.sin(angle + Math.PI / 2);

	// Hand-drawn style arrow head (V-shape, not filled)
	const arrowSize = 10;
	const arrowAngle1 = angle + 2.6;
	const arrowAngle2 = angle - 2.6;
	const arrowX1 = endX + arrowSize * Math.cos(arrowAngle1);
	const arrowY1 = endY + arrowSize * Math.sin(arrowAngle1);
	const arrowX2 = endX + arrowSize * Math.cos(arrowAngle2);
	const arrowY2 = endY + arrowSize * Math.sin(arrowAngle2);

	const lineOpacity = useTransform(animationProgress, [0, 1], [0, 0.8]);

	// Hand-drawn curved path
	const curvePath = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
	
	// Hand-drawn arrow head (two lines forming a V)
	const arrowPath = `M ${arrowX1} ${arrowY1} L ${endX} ${endY} L ${arrowX2} ${arrowY2}`;

	return (
		<g>
			{/* Curved line with sketchy style */}
			<motion.path
				d={curvePath}
				stroke="#9ca3af"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
				style={{ opacity: lineOpacity }}
			/>
			{/* Hand-drawn V-shaped arrow head */}
			<motion.path
				d={arrowPath}
				stroke="#9ca3af"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
				style={{ opacity: lineOpacity }}
			/>
		</g>
	);
}

export function MelpFeaturesOrbit() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	// Animation progress for logos emerging from center
	const animationProgress = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
	const centerScale = useTransform(animationProgress, [0, 0.3, 0.5], [1.2, 1, 1]);
	const glowScale = useTransform(animationProgress, [0, 1], [0.5, 1.2]);
	const glowOpacity = useTransform(animationProgress, [0, 1], [0.3, 0.6]);

	return (
		<div
			ref={containerRef}
			className="relative w-full max-w-xl aspect-square flex items-center justify-center"
		>
			{/* Arrow lines pointing towards center */}
			<svg
				className="absolute inset-0 w-full h-full"
				viewBox="-280 -220 560 440"
				fill="none"
			>
				{toolLogos.map((logo, index) => (
					<ArrowLine
						key={`arrow-${index}`}
						logo={logo}
						animationProgress={animationProgress}
						index={index}
					/>
				))}
			</svg>

			{/* Tool logos - emerge from behind Melp */}
			{toolLogos.map((logo, index) => (
				<AnimatedLogo
					key={index}
					logo={logo}
					animationProgress={animationProgress}
				/>
			))}

			{/* Central Melp Logo */}
			<motion.div
				className="relative z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white shadow-2xl border-2 border-neutral-100 flex items-center justify-center"
				style={{ scale: centerScale }}
			>
				<Image
					src="/logo-short.svg"
					alt="Melp"
					width={60}
					height={60}
					className="w-12 h-12 sm:w-16 sm:h-16"
				/>
			</motion.div>

			{/* Decorative glow behind Melp logo */}
			<motion.div
				className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-blue-500/10 blur-2xl z-10"
				style={{ scale: glowScale, opacity: glowOpacity }}
			/>
		</div>
	);
}
