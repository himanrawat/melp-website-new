"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";

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

// Component for individual logo with viewport-triggered animation
function AnimatedLogo({
	logo,
	index,
	isInView,
}: {
	logo: (typeof toolLogos)[0];
	index: number;
	isInView: boolean;
}) {
	return (
		<motion.div
			className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white shadow-lg border border-neutral-200 flex items-center justify-center overflow-hidden p-2"
			initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
			animate={
				isInView
					? { x: logo.x, y: logo.y, scale: 1, opacity: 1 }
					: { x: 0, y: 0, scale: 0, opacity: 0 }
			}
			transition={{
				duration: 0.6,
				delay: index * 0.08,
				ease: [0.34, 1.56, 0.64, 1], // Spring-like bounce
			}}
			style={{ zIndex: 10 }}
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
	index,
	isInView,
}: {
	logo: (typeof toolLogos)[0];
	index: number;
	isInView: boolean;
}) {
	// Helper to round values for consistent SSR/client rendering
	const r = (n: number) => Math.round(n * 100) / 100;

	// Calculate positions
	const angle = Math.atan2(-logo.y, -logo.x);
	const startX = r(logo.x * 0.72);
	const startY = r(logo.y * 0.72);
	const endX = r(logo.x * 0.28);
	const endY = r(logo.y * 0.28);

	// Create slight curve offset for hand-drawn look
	const curveOffset = (index % 2 === 0 ? 1 : -1) * 15;
	const midX = r((startX + endX) / 2 + curveOffset * Math.cos(angle + Math.PI / 2));
	const midY = r((startY + endY) / 2 + curveOffset * Math.sin(angle + Math.PI / 2));

	// Hand-drawn style arrow head
	const arrowSize = 10;
	const arrowAngle1 = angle + 2.6;
	const arrowAngle2 = angle - 2.6;
	const arrowX1 = r(endX + arrowSize * Math.cos(arrowAngle1));
	const arrowY1 = r(endY + arrowSize * Math.sin(arrowAngle1));
	const arrowX2 = r(endX + arrowSize * Math.cos(arrowAngle2));
	const arrowY2 = r(endY + arrowSize * Math.sin(arrowAngle2));

	const curvePath = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
	const arrowPath = `M ${arrowX1} ${arrowY1} L ${endX} ${endY} L ${arrowX2} ${arrowY2}`;

	return (
		<g>
			<motion.path
				d={curvePath}
				stroke="#9ca3af"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
				initial={{ opacity: 0, pathLength: 0 }}
				animate={isInView ? { opacity: 0.8, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
				transition={{ duration: 0.5, delay: index * 0.08 + 0.2 }}
			/>
			<motion.path
				d={arrowPath}
				stroke="#9ca3af"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
				transition={{ duration: 0.3, delay: index * 0.08 + 0.4 }}
			/>
		</g>
	);
}

export function MelpFeaturesOrbit() {
	const containerRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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
						index={index}
						isInView={isInView}
					/>
				))}
			</svg>

			{/* Tool logos - burst out when in view */}
			{toolLogos.map((logo, index) => (
				<AnimatedLogo
					key={index}
					logo={logo}
					index={index}
					isInView={isInView}
				/>
			))}

			{/* Central Melp Logo */}
			<motion.div
				className="relative z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center"
				initial={{ scale: 1.2 }}
				animate={isInView ? { scale: 1 } : { scale: 1.2 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
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
				initial={{ scale: 0.5, opacity: 0.3 }}
				animate={isInView ? { scale: 1.2, opacity: 0.6 } : { scale: 0.5, opacity: 0.3 }}
				transition={{ duration: 0.8 }}
			/>
		</div>
	);
}
