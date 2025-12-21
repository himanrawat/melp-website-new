"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface SpotlightCardProps {
	children: React.ReactNode;
	className?: string;
	spotlightColor?: string;
}

export function SpotlightCard({
	children,
	className = "",
	spotlightColor = "rgba(34, 32, 32, 0.15)",
}: SpotlightCardProps) {
	const divRef = useRef<HTMLDivElement>(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
		if (!divRef.current) return;
		const rect = divRef.current.getBoundingClientRect();
		mouseX.set(e.clientX - rect.left);
		mouseY.set(e.clientY - rect.top);
	}

	return (
		<motion.div
			ref={divRef}
			onMouseMove={handleMouseMove}
			className={`group relative overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
		>
			<motion.div
				className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
				}}
			/>
			{children}
		</motion.div>
	);
}

interface GlowingBorderCardProps {
	children: React.ReactNode;
	className?: string;
}

export function GlowingBorderCard({
	children,
	className = "",
}: GlowingBorderCardProps) {
	return (
		<div
			className={`bg-card rounded-xl border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 ${className}`}
		>
			{children}
		</div>
	);
}

interface AnimatedGradientBorderProps {
	children: React.ReactNode;
	className?: string;
}

export function AnimatedGradientBorder({
	children,
	className = "",
}: AnimatedGradientBorderProps) {
	return (
		<div
			className={`rounded-xl bg-card border border-primary/20 shadow-[0_0_15px_rgba(34,32,32,0.1)] hover:shadow-[0_0_25px_rgba(34,32,32,0.15)] hover:border-primary/40 transition-all duration-300 ${className}`}
		>
			{children}
		</div>
	);
}

interface TextShimmerProps {
	children: React.ReactNode;
	className?: string;
}

export function TextShimmer({ children, className = "" }: TextShimmerProps) {
	return (
		<span
			className={`inline-flex animate-text-shimmer bg-[linear-gradient(110deg,#222020,45%,#666666,55%,#222020)] bg-[length:250%_100%] bg-clip-text text-transparent ${className}`}
		>
			{children}
		</span>
	);
}

interface FloatingElementProps {
	children: React.ReactNode;
	delay?: number;
	duration?: number;
	className?: string;
}

export function FloatingElement({
	children,
	delay = 0,
	duration = 3,
	className = "",
}: FloatingElementProps) {
	return (
		<motion.div
			animate={{
				y: [0, -10, 0],
			}}
			transition={{
				duration,
				repeat: Infinity,
				repeatType: "reverse",
				ease: "easeInOut",
				delay,
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}

interface MagneticButtonProps {
	children: React.ReactNode;
	className?: string;
}

export function MagneticButton({
	children,
	className = "",
}: MagneticButtonProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		setPosition({ x: x * 0.15, y: y * 0.15 });
	};

	const handleMouseLeave = () => {
		setPosition({ x: 0, y: 0 });
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			animate={{ x: position.x, y: position.y }}
			transition={{ type: "spring", stiffness: 150, damping: 15 }}
			className={`cursor-pointer ${className}`}
		>
			{children}
		</motion.div>
	);
}

interface GridBackgroundProps {
	children?: React.ReactNode;
	className?: string;
}

export function GridBackground({
	children,
	className = "",
}: GridBackgroundProps) {
	return (
		<div className={`relative ${className}`}>
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
			{children}
		</div>
	);
}

interface DotBackgroundProps {
	children?: React.ReactNode;
	className?: string;
}

export function DotBackground({
	children,
	className = "",
}: DotBackgroundProps) {
	return (
		<div className={`relative ${className}`}>
			<div className="absolute inset-0 bg-[radial-gradient(#22202015_1px,transparent_1px)] [background-size:20px_20px]" />
			{children}
		</div>
	);
}

interface RevealOnScrollProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
}

export function RevealOnScroll({
	children,
	className = "",
	delay = 0,
}: RevealOnScrollProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
			whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

interface ParallaxScrollProps {
	children: React.ReactNode;
	speed?: number;
	className?: string;
}

export function ParallaxScroll({
	children,
	speed = 0.5,
	className = "",
}: ParallaxScrollProps) {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.div style={{ y: scrollY * speed }} className={className}>
			{children}
		</motion.div>
	);
}

interface HoverTiltCardProps {
	children: React.ReactNode;
	className?: string;
}

export function HoverTiltCard({
	children,
	className = "",
}: HoverTiltCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		setRotateX((y - centerY) / 10);
		setRotateY((centerX - x) / 10);
	};

	const handleMouseLeave = () => {
		setRotateX(0);
		setRotateY(0);
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			animate={{ rotateX, rotateY }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
			style={{ transformStyle: "preserve-3d" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

interface TypewriterTextProps {
	text: string;
	className?: string;
	delay?: number;
}

export function TypewriterText({
	text,
	className = "",
	delay = 0,
}: TypewriterTextProps) {
	const [displayText, setDisplayText] = useState("");
	const [started, setStarted] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setStarted(true), delay * 1000);
		return () => clearTimeout(timer);
	}, [delay]);

	useEffect(() => {
		if (!started) return;
		let i = 0;
		const interval = setInterval(() => {
			if (i <= text.length) {
				setDisplayText(text.slice(0, i));
				i++;
			} else {
				clearInterval(interval);
			}
		}, 50);
		return () => clearInterval(interval);
	}, [text, started]);

	return (
		<span className={className}>
			{displayText}
			<span className="animate-pulse">|</span>
		</span>
	);
}

interface MovingBorderProps {
	children: React.ReactNode;
	className?: string;
	containerClassName?: string;
	duration?: number;
}

export function MovingBorder({
	children,
	className = "",
	containerClassName = "",
	duration = 2000,
}: MovingBorderProps) {
	return (
		<div
			className={`relative p-[1px] overflow-hidden rounded-full ${containerClassName}`}
			style={{
				background: "linear-gradient(90deg, transparent, transparent)",
			}}
		>
			<div
				className="absolute inset-0"
				style={{
					background: `conic-gradient(from 0deg, transparent, #222020, transparent)`,
					animation: `spin ${duration}ms linear infinite`,
				}}
			/>
			<div className={`relative bg-background rounded-full ${className}`}>
				{children}
			</div>
		</div>
	);
}

interface BackgroundBeamsProps {
	className?: string;
}

export function BackgroundBeams({ className = "" }: BackgroundBeamsProps) {
	return (
		<div className={`absolute inset-0 overflow-hidden ${className}`}>
			<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-neutral-200/20 to-neutral-400/20 rounded-full blur-3xl animate-pulse" />
			<div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-neutral-300/20 to-neutral-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
		</div>
	);
}

// =============================================================================
// BENTO GRID - Masonry-style layout for feature showcases
// =============================================================================

interface BentoGridProps {
	children: React.ReactNode;
	className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
	return (
		<div
			className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
		>
			{children}
		</div>
	);
}

interface BentoGridItemProps {
	children: React.ReactNode;
	className?: string;
	colSpan?: 1 | 2 | 3;
	rowSpan?: 1 | 2;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	title?: string;
	description?: string;
}

export function BentoGridItem({
	children,
	className = "",
	colSpan = 1,
	rowSpan = 1,
	header,
	icon,
	title,
	description,
}: BentoGridItemProps) {
	const colSpanClass = {
		1: "md:col-span-1",
		2: "md:col-span-2",
		3: "md:col-span-3 lg:col-span-3",
	}[colSpan];

	const rowSpanClass = {
		1: "row-span-1",
		2: "row-span-2",
	}[rowSpan];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-6 hover:border-gray-700 transition-all duration-300 ${colSpanClass} ${rowSpanClass} ${className}`}
		>
			{/* Gradient overlay on hover */}
			<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

			{/* Content */}
			<div className="relative z-10 h-full flex flex-col">
				{header && <div className="mb-4">{header}</div>}
				{(icon || title || description) && (
					<div className="mt-auto">
						{icon && (
							<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-3">
								{icon}
							</div>
						)}
						{title && (
							<h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
						)}
						{description && (
							<p className="text-gray-400 text-sm">{description}</p>
						)}
					</div>
				)}
				{children}
			</div>
		</motion.div>
	);
}

// =============================================================================
// INFINITE MOVING CARDS - Horizontal scrolling logos/testimonials
// =============================================================================

interface InfiniteMovingCardsProps {
	items: React.ReactNode[];
	direction?: "left" | "right";
	speed?: "slow" | "normal" | "fast";
	pauseOnHover?: boolean;
	className?: string;
}

export function InfiniteMovingCards({
	items,
	direction = "left",
	speed = "normal",
	pauseOnHover = true,
	className = "",
}: InfiniteMovingCardsProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollerRef = useRef<HTMLDivElement>(null);
	const [start, setStart] = useState(false);

	useEffect(() => {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);
			// Duplicate items for seamless loop
			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				scrollerRef.current?.appendChild(duplicatedItem);
			});
			setStart(true);
		}
	}, []);

	const speedMap = {
		slow: "60s",
		normal: "40s",
		fast: "20s",
	};

	return (
		<div
			ref={containerRef}
			className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] ${className}`}
		>
			<div
				ref={scrollerRef}
				className={`flex gap-4 w-max ${start ? "animate-scroll" : ""} ${
					pauseOnHover ? "hover:[animation-play-state:paused]" : ""
				}`}
				style={{
					["--animation-duration" as string]: speedMap[speed],
					["--animation-direction" as string]:
						direction === "left" ? "forwards" : "reverse",
					animation: start
						? `scroll var(--animation-duration) linear infinite var(--animation-direction)`
						: "none",
				}}
			>
				{items.map((item, idx) => (
					<div key={idx} className="shrink-0">
						{item}
					</div>
				))}
			</div>
		</div>
	);
}

// =============================================================================
// SPOTLIGHT - Cursor-following spotlight effect
// =============================================================================

interface SpotlightProps {
	className?: string;
	fill?: string;
}

export function Spotlight({ className = "", fill = "white" }: SpotlightProps) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<motion.div
			className={`pointer-events-none fixed inset-0 z-30 transition duration-300 ${className}`}
			animate={{
				opacity: isHovered ? 1 : 0.7,
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<svg
				className="absolute h-full w-full"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<radialGradient id="spotlight-gradient">
						<stop offset="0%" stopColor={fill} stopOpacity="0.15" />
						<stop offset="100%" stopColor={fill} stopOpacity="0" />
					</radialGradient>
				</defs>
				<ellipse
					cx={mousePosition.x}
					cy={mousePosition.y}
					rx="400"
					ry="400"
					fill="url(#spotlight-gradient)"
				/>
			</svg>
		</motion.div>
	);
}

// =============================================================================
// GLOWING STARS - Animated star background
// =============================================================================

interface GlowingStarsProps {
	className?: string;
	starCount?: number;
}

// Pre-computed star positions to avoid hydration mismatch
const STAR_POSITIONS = [
	{ x: 12, y: 8 },
	{ x: 85, y: 15 },
	{ x: 45, y: 22 },
	{ x: 68, y: 5 },
	{ x: 23, y: 35 },
	{ x: 92, y: 42 },
	{ x: 5, y: 55 },
	{ x: 78, y: 68 },
	{ x: 34, y: 75 },
	{ x: 56, y: 88 },
	{ x: 15, y: 92 },
	{ x: 88, y: 28 },
	{ x: 42, y: 45 },
	{ x: 72, y: 52 },
	{ x: 8, y: 18 },
	{ x: 95, y: 78 },
	{ x: 28, y: 62 },
	{ x: 62, y: 32 },
	{ x: 48, y: 95 },
	{ x: 82, y: 85 },
	{ x: 18, y: 48 },
	{ x: 55, y: 12 },
	{ x: 38, y: 58 },
	{ x: 75, y: 38 },
	{ x: 3, y: 72 },
	{ x: 65, y: 65 },
	{ x: 25, y: 82 },
	{ x: 52, y: 28 },
	{ x: 90, y: 55 },
	{ x: 35, y: 15 },
	{ x: 70, y: 92 },
	{ x: 10, y: 38 },
	{ x: 58, y: 48 },
	{ x: 80, y: 22 },
	{ x: 22, y: 68 },
	{ x: 48, y: 78 },
	{ x: 95, y: 8 },
	{ x: 32, y: 42 },
	{ x: 68, y: 58 },
	{ x: 5, y: 85 },
	{ x: 85, y: 45 },
	{ x: 42, y: 5 },
	{ x: 15, y: 25 },
	{ x: 72, y: 75 },
	{ x: 28, y: 95 },
	{ x: 60, y: 18 },
	{ x: 88, y: 62 },
	{ x: 38, y: 88 },
	{ x: 50, y: 55 },
	{ x: 78, y: 2 },
];

export function GlowingStars({
	className = "",
	starCount = 50,
}: GlowingStarsProps) {
	const stars = STAR_POSITIONS.slice(0, starCount).map((pos, i) => ({
		id: `star-${i}`,
		x: pos.x,
		y: pos.y,
		size: (i % 3) + 1,
		delay: (i % 5) * 0.6,
	}));

	return (
		<div className={`absolute inset-0 overflow-hidden ${className}`}>
			{stars.map((star) => (
				<motion.div
					key={star.id}
					className="absolute rounded-full bg-white"
					style={{
						left: `${star.x}%`,
						top: `${star.y}%`,
						width: star.size,
						height: star.size,
					}}
					animate={{
						opacity: [0.2, 1, 0.2],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						delay: star.delay,
						ease: "easeInOut",
					}}
				/>
			))}
		</div>
	);
}

// =============================================================================
// ANIMATED GRADIENT - Moving gradient background
// =============================================================================

interface AnimatedGradientProps {
	className?: string;
	colors?: string[];
}

export function AnimatedGradient({
	className = "",
	colors = ["#ef4444", "#f97316", "#ef4444"],
}: AnimatedGradientProps) {
	return (
		<motion.div
			className={`absolute inset-0 ${className}`}
			animate={{
				background: [
					`linear-gradient(45deg, ${colors[0]}20, transparent, ${colors[1]}20)`,
					`linear-gradient(225deg, ${colors[1]}20, transparent, ${colors[2]}20)`,
					`linear-gradient(45deg, ${colors[0]}20, transparent, ${colors[1]}20)`,
				],
			}}
			transition={{
				duration: 10,
				repeat: Infinity,
				ease: "linear",
			}}
		/>
	);
}

// =============================================================================
// FEATURE HIGHLIGHT CARD - Card with icon, title, and animated border
// =============================================================================

interface FeatureHighlightCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	className?: string;
}

export function FeatureHighlightCard({
	icon,
	title,
	description,
	className = "",
}: FeatureHighlightCardProps) {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
		const rect = e.currentTarget.getBoundingClientRect();
		mouseX.set(e.clientX - rect.left);
		mouseY.set(e.clientY - rect.top);
	}

	return (
		<motion.div
			onMouseMove={handleMouseMove}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className={`group relative rounded-2xl border border-gray-800 bg-gray-950 p-6 hover:border-gray-700 transition-colors ${className}`}
		>
			{/* Spotlight effect */}
			<motion.div
				className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
				style={{
					background: useMotionTemplate`
						radial-gradient(
							300px circle at ${mouseX}px ${mouseY}px,
							rgba(239, 68, 68, 0.1),
							transparent 80%
						)
					`,
				}}
			/>

			<div className="relative z-10">
				<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
					{icon}
				</div>
				<h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
				<p className="text-gray-400 text-sm leading-relaxed">{description}</p>
			</div>
		</motion.div>
	);
}

// =============================================================================
// COUNTER ANIMATION - Animated number counter
// =============================================================================

interface CounterAnimationProps {
	value: number;
	suffix?: string;
	prefix?: string;
	duration?: number;
	className?: string;
}

export function CounterAnimation({
	value,
	suffix = "",
	prefix = "",
	duration = 2,
	className = "",
}: CounterAnimationProps) {
	const [count, setCount] = useState(0);
	const [hasAnimated, setHasAnimated] = useState(false);
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					setHasAnimated(true);
					const startTime = Date.now();
					const animate = () => {
						const elapsed = Date.now() - startTime;
						const progress = Math.min(elapsed / (duration * 1000), 1);
						const easeOut = 1 - Math.pow(1 - progress, 3);
						setCount(Math.floor(easeOut * value));
						if (progress < 1) {
							requestAnimationFrame(animate);
						}
					};
					animate();
				}
			},
			{ threshold: 0.5 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [value, duration, hasAnimated]);

	return (
		<span ref={ref} className={className}>
			{prefix}
			{count}
			{suffix}
		</span>
	);
}
