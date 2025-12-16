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
