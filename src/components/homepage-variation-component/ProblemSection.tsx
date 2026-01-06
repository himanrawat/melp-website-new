"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Layers, Search, Globe, Sparkles } from "lucide-react";
import { MelpFeaturesOrbit } from "./MelpFeaturesOrbit";

const problems = [
	{
		icon: Layers,
		title: "Tool sprawl",
		description: "Chat in Slack, meetings in Zoom, files in Drive, tasks in Asana.",
	},
	{
		icon: Search,
		title: "Context lost",
		description: "Information buried across threads, docs, and recordings.",
	},
	{
		icon: Globe,
		title: "Language friction",
		description: "Global teams slowed by translation gaps.",
	},
	{
		icon: Sparkles,
		title: "AI as afterthought",
		description: "Bolt-on features that don't understand your work.",
	},
];

export function ProblemSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
	const listY = useTransform(scrollYProgress, [0, 1], [30, -30]);

	return (
		<section
			ref={sectionRef}
			className="relative z-20 py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
		>
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="text-center mb-12 lg:mb-16 flex flex-col items-center"
			>
				<motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-6">
					The problem
				</motion.span>

				<motion.h2 className="text-3xl lg:text-5xl font-medium text-neutral-900 dark:text-white mb-3">
					Work today is broken.
				</motion.h2>
				<motion.p className="text-xl lg:text-2xl text-neutral-500 dark:text-neutral-400 max-w-2xl">
					Not by lack of tools — by too many disconnected ones.
				</motion.p>
			</motion.div>

			{/* Visual + List Layout */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
				{/* Left: Visual (Melp Features Orbit) */}
				<motion.div
					style={{ y: imageY }}
					className="relative flex justify-center lg:justify-start"
				>
					<MelpFeaturesOrbit />
				</motion.div>

				{/* Right: Problem List */}
				<motion.div style={{ y: listY }} className="space-y-6">
					{problems.map((problem, index) => (
						<motion.div
							key={problem.title}
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: index * 0.15 }}
							viewport={{ once: true }}
							className="flex items-start gap-4 group"
						>
							{/* Step Number */}
							<div className="shrink-0 w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 font-medium text-sm group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
								{index + 1}
							</div>

							{/* Content */}
							<div className="flex-1 border-b border-neutral-200 dark:border-neutral-800 pb-6">
								<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1 flex items-center gap-2">
									<problem.icon className="w-5 h-5 text-neutral-500" />
									{problem.title}
								</h3>
								<p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
									{problem.description}
								</p>
							</div>
						</motion.div>
					))}

					{/* Key Insight */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						viewport={{ once: true }}
						className="mt-8 p-6 rounded-2xl bg-neutral-900 dark:bg-neutral-800 text-white"
					>
						<p className="text-sm font-medium text-neutral-400 mb-2">Key insight</p>
						<p className="text-lg font-medium">
							Productivity is lost <span className="text-blue-400">between</span> tools, not inside them.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
