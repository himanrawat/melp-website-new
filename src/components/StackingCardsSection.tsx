"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	MessageSquare,
	Video,
	Calendar,
	FolderOpen,
	Bot,
	Globe,
	Shield,
	Zap,
} from "lucide-react";

const cards = [
	{
		id: 1,
		title: "Unified Communication",
		description:
			"Chat, voice, and video all in one place. No more switching between apps.",
		icon: MessageSquare,
		features: ["Real-time messaging", "Voice calls", "HD video meetings"],
		color: "from-blue-500/10 to-indigo-500/10",
		iconColor: "text-blue-500",
	},
	{
		id: 2,
		title: "Smart Scheduling",
		description:
			"AI-powered calendar that finds the perfect time for everyone.",
		icon: Calendar,
		features: ["Auto-scheduling", "Time zone sync", "Meeting insights"],
		color: "from-emerald-500/10 to-teal-500/10",
		iconColor: "text-emerald-500",
	},
	{
		id: 3,
		title: "Secure Cloud Storage",
		description:
			"Store, share, and collaborate on files with enterprise-grade security.",
		icon: FolderOpen,
		features: ["Unlimited storage", "Version history", "Secure sharing"],
		color: "from-amber-500/10 to-orange-500/10",
		iconColor: "text-amber-500",
	},
	{
		id: 4,
		title: "AI-Powered Assistance",
		description: "Let AI handle the mundane so you can focus on what matters.",
		icon: Bot,
		features: ["Smart transcription", "Action items", "Meeting summaries"],
		color: "from-purple-500/10 to-pink-500/10",
		iconColor: "text-purple-500",
	},
];

function StackingCard({
	card,
	index,
	totalCards,
	progress,
}: {
	card: (typeof cards)[0];
	index: number;
	totalCards: number;
	progress: any;
}) {
	const Icon = card.icon;

	// Calculate the range for this card
	const cardStart = index / totalCards;
	const cardEnd = (index + 1) / totalCards;

	// Scale down slightly as cards get covered
	const scale = useTransform(
		progress,
		[cardStart, cardEnd, cardEnd + 0.1],
		[1, 1, 0.95]
	);

	// Add shadow as next card approaches
	const shadowOpacity = useTransform(progress, [cardStart, cardEnd], [0, 0.15]);

	return (
		<motion.div
			style={{
				scale,
				zIndex: index + 1,
			}}
			className="sticky top-20 h-[80vh] min-h-[500px] flex items-center justify-center px-4"
		>
			<motion.div
				className={`relative w-full max-w-5xl rounded-3xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl backdrop-saturate-150 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]`}
				style={{
					boxShadow: useTransform(
						shadowOpacity,
						(v) => `0 25px 50px -12px rgba(0, 0, 0, ${v})`
					),
				}}
			>
				{/* Gradient overlay for subtle color tint */}
				<div
					className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-60 pointer-events-none`}
				/>

				{/* Glass highlight effect */}
				<div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/10 pointer-events-none" />

				{/* Inner glow border */}
				<div className="absolute inset-[1px] rounded-[23px] border border-white/30 dark:border-white/5 pointer-events-none" />

				{/* Card inner shadow overlay when covered */}
				<motion.div
					className="absolute inset-0 bg-black/5 pointer-events-none"
					style={{ opacity: shadowOpacity }}
				/>

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

							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium text-sm transition-opacity hover:opacity-90"
							>
								Learn more
								<svg
									className="w-4 h-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</motion.button>
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
									className="absolute top-1/4 left-1/4 w-20 h-20 rounded-2xl bg-gradient-to-br from-white/90 to-white/50 dark:from-white/20 dark:to-white/5 backdrop-blur-xl border border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_2px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center"
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
									className="absolute top-1/3 right-1/4 w-16 h-16 rounded-xl bg-gradient-to-br from-white/90 to-white/50 dark:from-white/20 dark:to-white/5 backdrop-blur-xl border border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_2px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center"
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
									className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-2xl bg-gradient-to-br from-white/90 to-white/50 dark:from-white/20 dark:to-white/5 backdrop-blur-xl border border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_2px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center"
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
									className="absolute bottom-1/3 right-1/3 w-14 h-14 rounded-xl bg-gradient-to-br from-white/90 to-white/50 dark:from-white/20 dark:to-white/5 backdrop-blur-xl border border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_2px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center"
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
			</motion.div>
		</motion.div>
	);
}

export default function StackingCardsSection() {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	return (
		<section
			ref={containerRef}
			className="relative bg-gradient-to-b from-background via-muted/20 to-background"
			style={{ height: `${(cards.length + 1) * 100}vh` }}
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
				/>
			))}
		</section>
	);
}
