"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlowingBorderCard } from "@/components/ui/aceternity";

const productHighlights = [
	{
		title: "Unified Messaging",
		description:
			"All your team conversations in one place. Channels, DMs, and threads organized beautifully.",
		color: "from-violet-500/20 via-purple-500/10 to-transparent",
	},
	{
		title: "Smart Documents",
		description:
			"Create, collaborate, and share documents with real-time editing and AI assistance.",
		color: "from-blue-500/20 via-cyan-500/10 to-transparent",
	},
	{
		title: "Task Management",
		description:
			"Track projects, assign tasks, and hit deadlines with intelligent workflow automation.",
		color: "from-emerald-500/20 via-green-500/10 to-transparent",
	},
	{
		title: "Video Meetings",
		description:
			"Crystal-clear video calls with screen sharing, recording, and AI transcription.",
		color: "from-amber-500/20 via-orange-500/10 to-transparent",
	},
];

export default function HorizontalScrollSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]);
	const headerOpacity = useTransform(
		scrollYProgress,
		[0, 0.05, 0.85, 1],
		[1, 1, 1, 0]
	);

	return (
		<motion.section
			className="relative bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			viewport={{ once: false, margin: "-100px" }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			{/* Mobile: Native horizontal scroll */}
			<div className="md:hidden py-20 px-4">
				<div className="text-center mb-10">
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						How it works
					</motion.span>
					<h2 className="text-2xl font-bold tracking-tight text-foreground">
						One platform, endless possibilities
					</h2>
					<p className="mt-3 text-muted-foreground">Swipe to explore</p>
				</div>
				<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide">
					{productHighlights.map((item, index) => (
						<motion.div
							key={index}
							className="flex-shrink-0 w-[85vw] snap-center"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
						>
							<GlowingBorderCard className="h-full">
								<div
									className={`relative aspect-video w-full bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden rounded-t-xl`}
								>
									<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
									<motion.div
										className="w-16 h-16 rounded-full border-2 border-primary/30 bg-primary/10 relative z-10"
										animate={{ scale: [1, 1.1, 1] }}
										transition={{ duration: 2, repeat: Infinity }}
									/>
								</div>
								<div className="p-6 bg-card rounded-b-xl">
									<div className="flex items-center gap-3 mb-3">
										<span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
											0{index + 1}
										</span>
									</div>
									<h3 className="text-xl font-semibold">{item.title}</h3>
									<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
										{item.description}
									</p>
								</div>
							</GlowingBorderCard>
						</motion.div>
					))}
				</div>
			</div>

			{/* Desktop: Scroll-driven horizontal animation */}
			<div ref={containerRef} className="hidden md:block relative h-[300vh]">
				<div className="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden flex flex-col">
					{/* Header - fixed at top with proper spacing */}
					<motion.div
						style={{ opacity: headerOpacity }}
						className="pt-8 pb-6 text-center z-20 bg-gradient-to-b from-muted/40 via-muted/20 to-transparent"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<motion.span
							className="inline-block text-sm font-medium text-primary mb-3 tracking-wider uppercase"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false }}
							transition={{ duration: 0.4, delay: 0.2 }}
						>
							How it works
						</motion.span>
						<motion.h2
							className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false }}
							transition={{ duration: 0.4, delay: 0.3 }}
						>
							One platform, endless possibilities
						</motion.h2>
						<motion.p
							className="mt-3 text-base text-muted-foreground"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false }}
							transition={{ duration: 0.4, delay: 0.4 }}
						>
							Scroll to explore our core features
						</motion.p>
					</motion.div>

					{/* Horizontal scroll container - positioned below header */}
					<motion.div
						style={{ x }}
						className="flex gap-6 pl-[10vw] items-center flex-1"
					>
						{productHighlights.map((item, index) => (
							<motion.div
								key={index}
								className="flex-shrink-0 w-[40vw] max-w-lg"
								initial={{ opacity: 0.3, scale: 0.9, rotateY: -5 }}
								whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
								viewport={{ once: false, amount: 0.6 }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								<GlowingBorderCard>
									<div
										className={`relative aspect-[16/9] w-full bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden rounded-t-xl`}
									>
										{/* Grid pattern */}
										<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

										{/* Floating decorative element */}
										<motion.div
											className="relative z-10 flex flex-col items-center"
											animate={{ y: [0, -8, 0] }}
											transition={{
												duration: 3,
												repeat: Infinity,
												ease: "easeInOut",
											}}
										>
											<div className="w-14 h-14 rounded-full border-2 border-primary/30 bg-primary/10 mb-3" />
											<span className="text-xs font-medium text-muted-foreground/60 uppercase tracking-widest">
												Feature 0{index + 1}
											</span>
										</motion.div>

										{/* Decorative corners */}
										<div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary/20 rounded-tl-lg" />
										<div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-primary/20 rounded-tr-lg" />
										<div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-primary/20 rounded-bl-lg" />
										<div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary/20 rounded-br-lg" />
									</div>

									<div className="p-5 bg-card rounded-b-xl">
										<div className="flex items-center gap-2 mb-3">
											<span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
												STEP 0{index + 1}
											</span>
										</div>
										<h3 className="text-xl font-bold">{item.title}</h3>
										<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
											{item.description}
										</p>
									</div>
								</GlowingBorderCard>
							</motion.div>
						))}
						{/* Spacer at end */}
						<div className="flex-shrink-0 w-[30vw]" />
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
