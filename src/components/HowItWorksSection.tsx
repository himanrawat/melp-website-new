"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
	MessageSquare,
	Users,
	Sparkles,
	CheckCircle,
	FileText,
	Calendar,
	Video,
	Bot,
	Globe,
	Mic,
	FolderOpen,
	Languages,
} from "lucide-react";

// Steps data
const steps = [
	{
		id: 1,
		title: "Start a conversation",
		description:
			"Create a meeting room or workspace. Invite your team members via link or email no downloads required.",
		icon: MessageSquare,
	},
	{
		id: 2,
		title: "Collaborate in real-time",
		description:
			"Chat, video call, share screens, and co-edit documents all within one unified space. No app-switching needed.",
		icon: Users,
	},
	{
		id: 3,
		title: "AI captures everything",
		description:
			"Live captions, real-time translation, meeting summaries, and action items generated automatically by Melp AI.",
		icon: Sparkles,
	},
	{
		id: 4,
		title: "Stay organized & follow up",
		description:
			"Access recordings, notes, and files in Melp Drive. Sync with your calendar and keep everything in one place.",
		icon: CheckCircle,
	},
];

// Visual layers for the 3D stack animation
const visualLayers = [
	{
		id: "frontend",
		label: "YOUR TEAM",
		icons: [Video, MessageSquare, Users],
		offset: 0,
	},
	{
		id: "melp",
		label: "MELP",
		icons: [FileText, Calendar],
		offset: 1,
		isMain: true,
	},
	{
		id: "ai",
		label: "AI ENGINE",
		icons: [Bot, Sparkles],
		offset: 2,
	},
	{
		id: "integrations",
		label: "INTEGRATIONS",
		icons: [],
		offset: 3,
	},
];

export default function HowItWorksSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	// Transform scroll progress to active step (0-3)
	const activeStepFloat = useTransform(scrollYProgress, [0, 1], [0, 3]);

	return (
		<section ref={containerRef} className="relative bg-background">
			{/* Sticky container */}
			<div className="sticky top-0 h-screen flex items-center overflow-hidden">
				{/* Light mode: subtle gray gradient, Dark mode: subtle red gradient */}
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.02)_0%,transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(238,65,54,0.05)_0%,transparent_50%)]" />

				<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left - Text Content */}
						<div className="space-y-8">
							{/* Header */}
							<div>
								<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
									<span className="text-primary">How</span> it works
								</h2>
							</div>

							{/* Steps */}
							<div className="space-y-6">
								{steps.map((step, index) => (
									<StepItem
										key={step.id}
										step={step}
										index={index}
										scrollProgress={activeStepFloat}
									/>
								))}
							</div>

							{/* CTA Buttons */}
							<motion.div
								className="flex flex-wrap gap-4 pt-4"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{ delay: 0.5 }}
							>
								<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-colors shadow-sm cursor-pointer">
									Get started free
								</button>
								<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-muted hover:bg-muted/80 border border-border text-foreground text-sm font-medium transition-colors cursor-pointer">
									<Image
										src="/logo-short.svg"
										alt="Melp"
										width={16}
										height={16}
									/>
									Download Melp
								</button>
							</motion.div>
						</div>

						{/* Right - 3D Visual Stack */}
						<div className="relative h-[500px] lg:h-[600px] hidden lg:block">
							<IsometricVisual scrollProgress={activeStepFloat} />
						</div>
					</div>
				</div>
			</div>

			{/* Scroll space - creates the scroll distance */}
			<div className="h-[300vh]" />
		</section>
	);
}

// Step item component with scroll-based highlighting
function StepItem({
	step,
	index,
	scrollProgress,
}: Readonly<{
	step: (typeof steps)[0];
	index: number;
	scrollProgress: ReturnType<typeof useTransform<number, number>>;
}>) {
	const opacity = useTransform(scrollProgress, (value) => {
		const distance = Math.abs(value - index);
		if (distance < 0.5) return 1;
		if (distance < 1) return 0.4;
		return 0.2;
	});

	const scale = useTransform(scrollProgress, (value) => {
		const distance = Math.abs(value - index);
		return distance < 0.5 ? 1 : 0.98;
	});

	const isActive = useTransform(scrollProgress, (value) => {
		return Math.round(value) === index;
	});

	return (
		<motion.div
			className="flex gap-4 items-start"
			style={{ opacity, scale }}
			transition={{ duration: 0.3 }}
		>
			{/* Step number */}
			<motion.div
				className="shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-colors duration-300"
				style={{
					borderColor: useTransform(isActive, (active) =>
						active ? "#EE4136" : "hsl(var(--border))"
					),
					color: useTransform(isActive, (active) =>
						active ? "#EE4136" : "hsl(var(--muted-foreground))"
					),
				}}
			>
				{step.id}
			</motion.div>

			{/* Content */}
			<div className="space-y-1">
				<h3 className="font-semibold text-foreground">{step.title}</h3>
				<motion.p
					className="text-sm text-muted-foreground leading-relaxed max-w-md"
					style={{
						opacity: useTransform(isActive, (active) => (active ? 1 : 0.6)),
					}}
				>
					{step.description}
				</motion.p>
			</div>
		</motion.div>
	);
}

// Isometric 3D visual component - Diagonal stair-step layout
function IsometricVisual({
	scrollProgress,
}: Readonly<{
	scrollProgress: ReturnType<typeof useTransform<number, number>>;
}>) {
	// Base position for the stack (all cards start from same position, stacked behind each other)
	const baseX = 0;
	const baseY = 0;

	// Spacing between cards in the diagonal (when separated) - adjusted for larger cards
	const cardSpacingX = 180; // horizontal spacing
	const cardSpacingY = -110; // vertical spacing (negative = up)

	return (
		<div className="relative w-full h-full">
			{/* Isometric container */}
			<div
				className="absolute inset-0 flex items-center justify-center"
				style={{ perspective: "1000px" }}
			>
				<div
					className="relative"
					style={{
						transform: "translateX(-120px) translateY(-50px)",
					}}
				>
					{/* Layer 1 - Your Team (front, starts visible) */}
					<IsometricCard
						label="USER"
						cardIndex={0}
						scrollProgress={scrollProgress}
						basePosition={{ x: baseX, y: baseY }}
						spacing={{ x: cardSpacingX, y: cardSpacingY }}
					>
						<div className="flex flex-col items-center justify-center h-full gap-6 p-4">
							<div className="text-xs text-muted-foreground tracking-wider uppercase">
								Your Workspace
							</div>
							<div className="flex gap-4">
								<div className="w-16 h-16 rounded-xl bg-muted/50 border border-border flex items-center justify-center">
									<FileText className="w-8 h-8 text-foreground/70" />
								</div>
								<div className="w-16 h-16 rounded-xl bg-muted/50 border border-border flex items-center justify-center">
									<Video className="w-8 h-8 text-foreground/70" />
								</div>
								<div className="w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
									<Globe className="w-8 h-8 text-primary" />
								</div>
							</div>
							<div className="text-sm text-muted-foreground">
								Browser • Desktop • Mobile
							</div>
						</div>
					</IsometricCard>

					{/* Layer 2 - Melp Hub */}
					<IsometricCard
						label="MELP HUB"
						cardIndex={1}
						scrollProgress={scrollProgress}
						basePosition={{ x: baseX, y: baseY }}
						spacing={{ x: cardSpacingX, y: cardSpacingY }}
					>
						<div className="p-4 h-full flex flex-col">
							<div className="text-xs text-muted-foreground mb-4 tracking-wider uppercase">
								Unified Workspace
							</div>
							<div className="grid grid-cols-3 gap-3 flex-1 place-content-center">
								<div className="w-14 h-14 rounded-xl bg-muted/50 border border-border flex items-center justify-center">
									<MessageSquare className="w-7 h-7 text-foreground/70" />
								</div>
								<div className="w-14 h-14 rounded-xl bg-muted/50 border border-border flex items-center justify-center">
									<Video className="w-7 h-7 text-foreground/70" />
								</div>
								<div className="w-14 h-14 rounded-xl bg-muted/50 border border-border flex items-center justify-center">
									<Calendar className="w-7 h-7 text-foreground/70" />
								</div>
								<div className="w-14 h-14 rounded-xl bg-muted/50 border border-border flex items-center justify-center">
									<FileText className="w-7 h-7 text-foreground/70" />
								</div>
								<div className="w-14 h-14 rounded-xl bg-muted/50 border border-border flex items-center justify-center">
									<Users className="w-7 h-7 text-foreground/70" />
								</div>
								<div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
									<Image
										src="/logo-short.svg"
										alt="Melp"
										width={28}
										height={28}
									/>
								</div>
							</div>
						</div>
					</IsometricCard>

					{/* Layer 3 - AI Assistant */}
					<IsometricCard
						label="AI ENGINE"
						cardIndex={2}
						scrollProgress={scrollProgress}
						basePosition={{ x: baseX, y: baseY }}
						spacing={{ x: cardSpacingX, y: cardSpacingY }}
					>
						<div className="flex flex-col items-center justify-center h-full gap-4 p-4">
							<div className="text-xs text-muted-foreground tracking-wider uppercase">
								AI Assistant
							</div>
							<div className="w-20 h-20 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center">
								<Bot className="w-10 h-10 text-violet-500" />
							</div>
							<div className="space-y-2.5 w-full px-4">
								<div className="flex items-center gap-3">
									<Mic className="w-4 h-4 text-violet-400" />
									<div className="h-2 flex-1 rounded-full bg-violet-500/30" />
								</div>
								<div className="flex items-center gap-3">
									<Languages className="w-4 h-4 text-violet-400" />
									<div className="h-2 w-3/4 rounded-full bg-violet-500/30" />
								</div>
								<div className="flex items-center gap-3">
									<Sparkles className="w-4 h-4 text-violet-400" />
									<div className="h-2 w-1/2 rounded-full bg-violet-500/30" />
								</div>
							</div>
						</div>
					</IsometricCard>

					{/* Layer 4 - Melp Drive */}
					<IsometricCard
						label="MELP DRIVE"
						cardIndex={3}
						scrollProgress={scrollProgress}
						basePosition={{ x: baseX, y: baseY }}
						spacing={{ x: cardSpacingX, y: cardSpacingY }}
					>
						<div className="flex flex-col items-center justify-center h-full gap-4 p-4">
							<div className="text-xs text-muted-foreground tracking-wider uppercase">
								Cloud Storage
							</div>
							<div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
								<FolderOpen className="w-10 h-10 text-amber-500" />
							</div>
							<div className="space-y-2 w-full px-3">
								<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border text-xs">
									<FileText className="w-4 h-4 shrink-0 text-foreground/70" />
									<span>Meeting_Notes.md</span>
								</div>
								<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border text-xs">
									<Video className="w-4 h-4 shrink-0 text-foreground/70" />
									<span>Recording.mp4</span>
								</div>
								<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border text-xs">
									<Calendar className="w-4 h-4 shrink-0 text-foreground/70" />
									<span>Action_Items.pdf</span>
								</div>
							</div>
						</div>
					</IsometricCard>
				</div>
			</div>
		</div>
	);
}

// Individual isometric card with ghost layers and scroll-based movement
function IsometricCard({
	label,
	cardIndex,
	scrollProgress,
	basePosition,
	spacing,
	children,
}: Readonly<{
	label: string;
	cardIndex: number;
	scrollProgress: ReturnType<typeof useTransform<number, number>>;
	basePosition: { x: number; y: number };
	spacing: { x: number; y: number };
	children: React.ReactNode;
}>) {
	// Calculate opacity - active = 1, behind = 0.2
	const cardOpacity = useTransform(scrollProgress, (value) => {
		const rounded = Math.round(value);
		if (rounded === cardIndex) return 1;
		if (cardIndex > rounded) return 0.2; // Cards behind are faded
		return 0; // Cards that have passed are hidden
	});

	// Dynamic position based on scroll
	// When scroll passes this card, it moves LEFT and DOWN (away from stack)
	const dynamicX = useTransform(scrollProgress, (value) => {
		// How many steps before this card becomes active
		const stepsUntilActive = cardIndex - value;

		if (stepsUntilActive <= 0) {
			// Card is active or has passed - move it to the left
			const stepsPast = Math.abs(Math.min(0, stepsUntilActive));
			return basePosition.x - stepsPast * 50; // Move left
		}

		// Card is still in the stack - slight offset based on position in stack
		return basePosition.x + stepsUntilActive * spacing.x;
	});

	const dynamicY = useTransform(scrollProgress, (value) => {
		const stepsUntilActive = cardIndex - value;

		if (stepsUntilActive <= 0) {
			// Card is active or has passed - move it down
			const stepsPast = Math.abs(Math.min(0, stepsUntilActive));
			return basePosition.y + stepsPast * 30; // Move down
		}

		// Card is still in the stack
		return basePosition.y + stepsUntilActive * spacing.y;
	});

	// Z-index based on scroll position
	const zIndex = useTransform(scrollProgress, (value) => {
		return 1000 - cardIndex; // Higher index = further back
	});

	// Pre-calculate ghost layer opacities (5 layers)
	const ghostOpacity1 = useTransform(scrollProgress, (value) =>
		Math.round(value) === cardIndex ? 0.32 : 0
	);
	const ghostOpacity2 = useTransform(scrollProgress, (value) =>
		Math.round(value) === cardIndex ? 0.24 : 0
	);
	const ghostOpacity3 = useTransform(scrollProgress, (value) =>
		Math.round(value) === cardIndex ? 0.16 : 0
	);
	const ghostOpacity4 = useTransform(scrollProgress, (value) =>
		Math.round(value) === cardIndex ? 0.08 : 0
	);
	const ghostOpacity5 = useTransform(scrollProgress, (value) =>
		Math.round(value) === cardIndex ? 0.04 : 0
	);
	const ghostOpacities = [
		ghostOpacity1,
		ghostOpacity2,
		ghostOpacity3,
		ghostOpacity4,
		ghostOpacity5,
	];

	// Pre-calculate other values that depend on isActive
	const boxShadow = useTransform(scrollProgress, (value) =>
		Math.round(value) === cardIndex
			? "0 10px 40px rgba(0,0,0,0.2)"
			: "0 4px 20px rgba(0,0,0,0.1)"
	);
	const shineOpacity = useTransform(scrollProgress, (value) =>
		Math.round(value) === cardIndex ? 0.1 : 0
	);
	const labelOpacity = useTransform(scrollProgress, (value) =>
		Math.round(value) === cardIndex ? 1 : 0
	);
	const lineOpacity = useTransform(scrollProgress, (value) =>
		Math.round(value) === cardIndex ? 1 : 0.3
	);

	return (
		<motion.div
			className="absolute w-80 h-80"
			style={{
				left: dynamicX,
				top: dynamicY,
				zIndex,
				transformStyle: "preserve-3d",
			}}
		>
			{/* Ghost/shadow layers behind the card for depth effect */}
			{ghostOpacities.map((opacity, i) => (
				<motion.div
					key={i}
					className="pointer-events-none absolute inset-0 rounded-md border border-foreground/10"
					style={{
						transform: `skewY(30deg)`,
						opacity,
					}}
				/>
			))}

			{/* Main card */}
			<motion.div
				className="absolute inset-0 rounded-md border border-foreground/30 bg-card dark:bg-card/90 backdrop-blur-sm cursor-pointer overflow-hidden"
				style={{
					transform: "skewY(30deg)",
					opacity: cardOpacity,
					boxShadow,
				}}
				transition={{ duration: 0.35, ease: "easeOut" }}
			>
				{/* Content */}
				<div className="relative h-full p-3">{children}</div>

				{/* Top shine effect */}
				<motion.div
					className="pointer-events-none absolute left-0 top-0 h-40 w-full"
					style={{
						opacity: shineOpacity,
						transform: "translateY(-100%) skewX(-40deg)",
						transformOrigin: "center bottom",
						background:
							"linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)",
					}}
				/>

				{/* Right shine effect */}
				<motion.div
					className="pointer-events-none absolute right-0 top-0 h-full w-32"
					style={{
						opacity: shineOpacity,
						transform: "translateX(100%) skewY(-50deg) translateY(-76px)",
						transformOrigin: "center bottom",
						background:
							"linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)",
					}}
				/>
			</motion.div>

			{/* Label on right side - only visible when active */}
			<motion.div
				className="absolute -right-4 bottom-4 translate-x-full"
				style={{
					opacity: labelOpacity,
					transform: "skewY(30deg)",
				}}
			>
				<span className="text-[10px] tracking-widest text-foreground whitespace-nowrap uppercase">
					{label}
				</span>
			</motion.div>

			{/* Dashed line extending right from card */}
			{/* <motion.div
				className="absolute bottom-0 left-full z-0 h-px w-[1000px] border-b border-dashed border-foreground/15"
				style={{
					transform: "skewY(30deg)",
					opacity: lineOpacity,
				}}
			/> */}

			{/* Dashed line extending down from card */}
			{/* <motion.div
				className="absolute right-0 top-full z-0 h-[1000px] w-px border-r border-dashed border-foreground/15"
				style={{
					transform: "skewY(30deg)",
					opacity: lineOpacity,
				}}
			/> */}
		</motion.div>
	);
}
