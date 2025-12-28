"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
	MessageSquare,
	Video,
	FolderOpen,
	Bot,
	Globe,
	Shield,
	Zap,
	ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
	{
		id: 1,
		title: "Clarity in Every Conversation",
		description:
			"Messages form glowing threads joining teams. Organized channels, instant translation, and structured collaboration.",
		icon: MessageSquare,
		features: [
			"Organized channels",
			"Instant translation",
			"Structured collaboration",
		],
		color: "from-blue-500/10 to-indigo-500/10",
		iconColor: "text-blue-500",
	},
	{
		id: 2,
		title: "Meet Like You're in the Same Room",
		description:
			"Seamless transitions from chat to call with enterprise-grade video and immersive clarity.",
		icon: Video,
		features: [
			"Enterprise-grade video",
			"Immersive clarity",
			"Cross-organization meetings",
		],
		color: "from-emerald-500/10 to-teal-500/10",
		iconColor: "text-emerald-500",
	},
	{
		id: 3,
		title: "Your Knowledge, Organized",
		description:
			"Files float into a structured library. Centralized, secure cloud storage engineered for discoverability.",
		icon: FolderOpen,
		features: [
			"Centralized storage",
			"Smart discoverability",
			"Effortless access",
		],
		color: "from-amber-500/10 to-orange-500/10",
		iconColor: "text-amber-500",
	},
	{
		id: 4,
		title: "Intelligence in Every Interaction",
		description:
			"AI light pulses through the system. Summaries, insights, workflows, and intelligent routing.",
		icon: Bot,
		features: ["Smart summaries", "Intelligent routing", "Workflow automation"],
		color: "from-purple-500/10 to-pink-500/10",
		iconColor: "text-purple-500",
	},
];

function StackingCard({
	card,
	index,
	totalCards,
	progress,
	maxHeight,
	onHeightMeasured,
}: {
	card: (typeof cards)[0];
	index: number;
	totalCards: number;
	progress: ReturnType<typeof useScroll>["scrollYProgress"];
	maxHeight: number;
	onHeightMeasured: (height: number) => void;
}) {
	const Icon = card.icon;
	const cardRef = useRef<HTMLDivElement>(null);

	// Measure this card's natural height
	useEffect(() => {
		if (cardRef.current) {
			const height = cardRef.current.scrollHeight;
			onHeightMeasured(height);
		}
	}, [onHeightMeasured]);

	// Each card gets an equal portion of the scroll
	const rangePerCard = 1 / totalCards;
	const cardStart = index * rangePerCard;
	const cardEnd = cardStart + rangePerCard;

	// First card starts visible, others slide up from below
	const y = useTransform(
		progress,
		index === 0 ? [0, cardEnd] : [cardStart - 0.05, cardStart + 0.1],
		index === 0 ? [0, 0] : [600, 0],
		{ clamp: true }
	);

	// Fixed top position - all cards stack at same position
	const topOffset = 100;

	return (
		<motion.div
			style={{
				y,
				top: topOffset,
				zIndex: index + 1,
			}}
			className="sticky h-[80vh] min-h-[500px] flex items-center justify-center px-4"
		>
			<div
				ref={cardRef}
				style={{ minHeight: maxHeight > 0 ? maxHeight : undefined }}
				className={`relative w-full max-w-5xl rounded-3xl border border-white/20 dark:border-white/10 bg-white dark:bg-neutral-900 overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.2)]`}
			>
				{/* Gradient overlay for subtle color tint */}
				<div
					className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-40 pointer-events-none`}
				/>

				{/* Glass highlight effect */}
				<div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/10 pointer-events-none" />

				<div className="relative p-8 sm:p-12 lg:p-16">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						{/* Left Content */}
						<div className="space-y-6">
							<div
								className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-lg ${card.iconColor}`}
							>
								<Icon className="w-7 h-7" />
							</div>

							<div className="space-y-4">
								<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
									{card.title}
								</h3>
								<p className="text-lg text-muted-foreground">
									{card.description}
								</p>
							</div>

							<ul className="space-y-3">
								{card.features.map((feature, i) => (
									<motion.li
										key={feature}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: i * 0.1 }}
										className="flex items-center gap-3 text-foreground"
									>
										<div
											className={`w-1.5 h-1.5 rounded-full bg-current ${card.iconColor}`}
										/>
										{feature}
									</motion.li>
								))}
							</ul>

							<Button variant="brand-dark" size="lg" className="group">
								Learn more
								<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>

						{/* Right Visual */}
						<div className="relative hidden lg:block">
							<div className="relative aspect-square max-w-[400px] mx-auto">
								{/* Background circles */}
								<div className="absolute inset-0 flex items-center justify-center">
									<div
										className={`w-64 h-64 rounded-full bg-gradient-to-br ${card.color} opacity-50 blur-3xl`}
									/>
								</div>

								{/* Floating elements */}
								<motion.div
									animate={{
										y: [0, -10, 0],
										rotate: [0, 5, 0],
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="absolute top-1/4 left-1/4 w-20 h-20 rounded-2xl bg-gradient-to-br from-white/90 to-white/50 dark:from-white/20 dark:to-white/5 backdrop-blur-xl border border-white/60 dark:border-white/20 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06),0_4px_16px_-4px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.15),0_4px_16px_-4px_rgba(0,0,0,0.2)] flex items-center justify-center"
								>
									<Icon className={`w-8 h-8 ${card.iconColor}`} />
								</motion.div>

								<motion.div
									animate={{
										y: [0, 10, 0],
										rotate: [0, -3, 0],
									}}
									transition={{
										duration: 3.5,
										repeat: Infinity,
										ease: "easeInOut",
										delay: 0.5,
									}}
									className="absolute top-1/3 right-1/4 w-16 h-16 rounded-xl bg-gradient-to-br from-white/90 to-white/50 dark:from-white/20 dark:to-white/5 backdrop-blur-xl border border-white/60 dark:border-white/20 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06),0_4px_16px_-4px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.15),0_4px_16px_-4px_rgba(0,0,0,0.2)] flex items-center justify-center"
								>
									<Zap className={`w-6 h-6 ${card.iconColor}`} />
								</motion.div>

								<motion.div
									animate={{
										y: [0, -8, 0],
										x: [0, 5, 0],
									}}
									transition={{
										duration: 5,
										repeat: Infinity,
										ease: "easeInOut",
										delay: 1,
									}}
									className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-2xl bg-gradient-to-br from-white/90 to-white/50 dark:from-white/20 dark:to-white/5 backdrop-blur-xl border border-white/60 dark:border-white/20 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06),0_4px_16px_-4px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.15),0_4px_16px_-4px_rgba(0,0,0,0.2)] flex items-center justify-center"
								>
									<Shield className={`w-10 h-10 ${card.iconColor}`} />
								</motion.div>

								<motion.div
									animate={{
										y: [0, 12, 0],
									}}
									transition={{
										duration: 4.5,
										repeat: Infinity,
										ease: "easeInOut",
										delay: 0.8,
									}}
									className="absolute bottom-1/3 right-1/3 w-14 h-14 rounded-xl bg-gradient-to-br from-white/90 to-white/50 dark:from-white/20 dark:to-white/5 backdrop-blur-xl border border-white/60 dark:border-white/20 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06),0_4px_16px_-4px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.15),0_4px_16px_-4px_rgba(0,0,0,0.2)] flex items-center justify-center"
								>
									<Globe className={`w-5 h-5 ${card.iconColor}`} />
								</motion.div>
							</div>
						</div>
					</div>
				</div>

				{/* Card number indicator */}
				<div className="absolute bottom-6 right-8 text-6xl font-bold text-foreground/5">
					0{card.id}
				</div>
			</div>
		</motion.div>
	);
}

export default function StackingCardsSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [maxHeight, setMaxHeight] = useState(0);
	const cardHeightsRef = useRef<number[]>([]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	// Callback to collect heights from all cards
	const handleHeightMeasured = useCallback((height: number) => {
		cardHeightsRef.current.push(height);
		// Once all cards have reported, find the max
		if (cardHeightsRef.current.length === cards.length) {
			const max = Math.max(...cardHeightsRef.current);
			setMaxHeight(max);
		}
	}, []);

	// More scroll height = smoother transitions between cards
	const scrollHeight = (cards.length + 0.5) * 100;

	return (
		<section
			ref={containerRef}
			className="relative bg-gradient-to-b from-muted/30 via-background to-muted/30"
			style={{ height: `${scrollHeight}vh` }}
		>
			{/* Header - Scrolls away before cards start stacking */}
			<div className="flex items-center justify-center px-4">
				<div className="text-center max-w-3xl mx-auto">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4"
					>
						Everything You Need
					</motion.p>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6"
					>
						One platform to replace them all
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-lg text-muted-foreground"
					>
						Say goodbye to app overload. Say hello to Melp.
					</motion.p>
				</div>
			</div>

			{/* Stacking Cards */}
			{cards.map((card, index) => (
				<StackingCard
					key={card.id}
					card={card}
					index={index}
					totalCards={cards.length}
					progress={scrollYProgress}
					maxHeight={maxHeight}
					onHeightMeasured={handleHeightMeasured}
				/>
			))}
		</section>
	);
}
