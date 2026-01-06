"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface CardData {
	id: number;
	label: string;
	title: string;
	description?: string;
	features?: string[];
	image: string;
	bgColor: string;
	labelColor: string;
	accent: string;
}

const cards: CardData[] = [
	{
		id: 1,
		label: "Melp Drive",
		title: "Files that speak every language",
		description:
			"Upload once. Translate instantly. Originals stay safe and formatting stays intact.",
		features: [
			"Preserves layout across docs, slides, and PDFs",
			"Side-by-side preview before and after",
			"Original files never modified",
		],
		image: "Translation flow placeholder",
		bgColor: "bg-gradient-to-br from-neutral-100 to-white",
		labelColor: "text-neutral-700",
		accent: "#525252",
	},
	{
		id: 2,
		label: "Melp Chats",
		title: "Conversations with context",
		description:
			"Summaries on demand. Drafts that match your voice. Context that never gets lost.",
		features: [
			"Instant summaries with follow-up questions",
			"Draft messages in your preferred tone",
			"Every response in your language",
		],
		image: "Chat + summary placeholder",
		bgColor: "bg-gradient-to-br from-neutral-100 to-white",
		labelColor: "text-neutral-700",
		accent: "#525252",
	},
	{
		id: 3,
		label: "Meeting Intelligence",
		title: "Meetings you don't have to attend",
		description:
			"Live captions. Auto-recaps. Decisions captured. Know what happened without being there.",
		features: [
			"Real-time transcription in any language",
			"Automatic highlights and action items",
			"Recap ready before the call ends",
		],
		image: "Meeting summary placeholder",
		bgColor: "bg-gradient-to-br from-neutral-100 to-white",
		labelColor: "text-neutral-700",
		accent: "#525252",
	},
	{
		id: 4,
		label: "AI Evaluation",
		title: "Interviews with integrity",
		description:
			"Focus signals. Smart questions. Fair assessments. Better hiring decisions.",
		features: [
			"Attention monitoring for fair evaluation",
			"AI-generated questions from JD and resume",
			"Structured insights for every interview",
		],
		image: "Evaluation mode placeholder",
		bgColor: "bg-gradient-to-br from-neutral-100 to-white",
		labelColor: "text-neutral-700",
		accent: "#525252",
	},
];

function Card({
	card,
	index,
	progress,
	range,
	targetScale,
}: {
	card: CardData;
	index: number;
	progress: any;
	range: [number, number];
	targetScale: number;
}) {
	const cardRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress: cardScrollProgress } = useScroll({
		target: cardRef,
		offset: ["start end", "end start"],
	});

	const scale = useTransform(progress, range, [1, targetScale]);
	const fadeStart = range[1];
	const fadeEnd = range[1] + 0.2;
	const opacity = useTransform(progress, [fadeStart, fadeEnd], [1, 0]);

	// Parallax effects for image and content
	const imageY = useTransform(cardScrollProgress, [0, 1], [60, -60]);
	const contentY = useTransform(cardScrollProgress, [0, 1], [40, -40]);
	const imageRotate = useTransform(cardScrollProgress, [0, 0.5, 1], [-2, 0, 2]);
	const imageScale = useTransform(
		cardScrollProgress,
		[0, 0.5, 1],
		[0.95, 1, 0.95]
	);

	return (
		<div
			ref={cardRef}
			className="sticky top-24 h-[80vh] flex items-start justify-center"
			style={{ zIndex: index + 1 }}
		>
			<motion.div
				style={{
					scale,
					opacity: index === cards.length - 1 ? 1 : opacity,
				}}
				className={cn(
					"relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl",
					card.bgColor
				)}
			>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12 min-h-[500px]">
					{/* Image Section with Parallax */}
					<motion.div
						className="relative flex items-center justify-center"
						style={{ y: imageY, rotate: imageRotate, scale: imageScale }}
					>
						<div className="relative w-full max-w-md aspect-square">
							<div className="absolute inset-0 rounded-3xl bg-white/60" />
							<div className="absolute inset-4 rounded-2xl border-2 border-dashed border-white/60 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center gap-3 text-sm text-neutral-700">
								<span
									className="px-3 py-1 rounded-full text-xs font-semibold"
									style={{
										backgroundColor: `${card.accent}1a`,
										color: card.accent,
									}}
								>
									Image placeholder
								</span>
								<div className="text-center font-semibold text-neutral-900">
									{card.image}
								</div>
								<div className="grid grid-cols-3 gap-2 text-[11px] text-neutral-500 w-full px-4">
									{["Step 1", "Step 2", "Step 3"].map((step) => (
										<div
											key={step}
											className="h-2 rounded-full bg-neutral-200"
											style={{ backgroundColor: `${card.accent}26` }}
										/>
									))}
								</div>
							</div>
						</div>
					</motion.div>

					{/* Content Section with Parallax */}
					<motion.div
						className="flex flex-col justify-center"
						style={{ y: contentY }}
					>
						<motion.div
							className="flex items-center gap-2 mb-4"
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							viewport={{ once: true }}
						>
							<span
								className="w-2 h-2 rounded-full"
								style={{ backgroundColor: card.accent }}
							/>
							<span className={cn("text-sm font-medium", card.labelColor)}>
								{card.label}
							</span>
						</motion.div>

						<motion.h2
							className="text-3xl lg:text-4xl font-medium text-neutral-900 mb-4 leading-tight"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							viewport={{ once: true }}
						>
							{card.title}
						</motion.h2>

						{card.description && (
							<motion.p
								className="text-neutral-600 text-lg mb-6"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								viewport={{ once: true }}
							>
								{card.description}
							</motion.p>
						)}

						{card.features && (
							<ul className="space-y-3">
								{card.features.map((feature, idx) => (
									<motion.li
										key={idx}
										className="flex items-center gap-3"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
										viewport={{ once: true }}
									>
										<span
											className="w-5 h-5 rounded-full flex items-center justify-center"
											style={{ backgroundColor: `${card.accent}1a` }}
										>
											<svg
												className="w-3 h-3"
												viewBox="0 0 12 12"
												fill="none"
												style={{ color: card.accent }}
											>
												<path
													d="M10 3L4.5 8.5L2 6"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</span>
										<span className="text-neutral-800">{feature}</span>
									</motion.li>
								))}
							</ul>
						)}
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}

function SectionHeader() {
	const headerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress: headerScrollProgress } = useScroll({
		target: headerRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(headerScrollProgress, [0, 1], [100, -100]);
	const opacity = useTransform(
		headerScrollProgress,
		[0, 0.3, 0.6, 1],
		[0, 1, 1, 0]
	);
	const scale = useTransform(
		headerScrollProgress,
		[0, 0.3, 0.6, 1],
		[0.9, 1, 1, 0.95]
	);

	return (
		<motion.div
			ref={headerRef}
			className="flex flex-col items-center justify-center text-center px-4"
		>
			<motion.span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
			How It Works
		</motion.span>

			<motion.h2
				className="text-4xl lg:text-6xl font-medium text-neutral-900 dark:text-white mb-4"
			>
				Everything connected.
			</motion.h2>
			<motion.h2
				className="text-4xl lg:text-6xl font-medium text-neutral-500 dark:text-neutral-400 mb-6"
			>
				Nothing scattered.
			</motion.h2>
			<motion.p
				className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl"
			>
				One workspace where files, chats, meetings, and AI work together.
				No more switching. No more searching. Just flow.
			</motion.p>
		</motion.div>
	);
}

export function StackingCards() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	return (
		<section ref={containerRef} className="relative ">
			<SectionHeader />
			<div className="px-4 sm:px-6 lg:px-8 mt-20">
				{cards.map((card, index) => {
					const targetScale = 1 - (cards.length - index) * 0.05;
					const start = index / cards.length;
					const end = (index + 1) / cards.length;

					return (
						<Card
							key={card.id}
							card={card}
							index={index}
							progress={scrollYProgress}
							range={[start, end]}
							targetScale={targetScale}
						/>
					);
				})}
			</div>
		</section>
	);
}
