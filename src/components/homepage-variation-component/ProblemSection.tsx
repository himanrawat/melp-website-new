"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Layers, Search, Globe, Sparkles } from "lucide-react";

const problems = [
	{
		icon: Layers,
		title: "Tool sprawl",
		description: "Chat here. Files there. Meetings somewhere else.",
	},
	{
		icon: Search,
		title: "Context lost",
		description: "Information buried in threads, docs, and recordings.",
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
	const headerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: headerRef,
		offset: ["start end", "end start"],
	});

	const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);
	const headerOpacity = useTransform(
		scrollYProgress,
		[0, 0.3, 0.6, 1],
		[0, 1, 1, 0]
	);
	const headerScale = useTransform(
		scrollYProgress,
		[0, 0.3, 0.6, 1],
		[0.9, 1, 1, 0.95]
	);

	return (
		<section className="relative z-20 py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<motion.div
				ref={headerRef}
				className="text-center mb-12 lg:mb-16 flex flex-col items-center"
				style={{ opacity: headerOpacity, scale: headerScale, y: headerY }}
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

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
				{problems.map((problem, index) => (
					<motion.div
						key={problem.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						viewport={{ once: true }}
						className="group p-6 lg:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
					>
						<div className="w-10 h-10 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700 transition-colors">
							<problem.icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
						</div>
						<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
							{problem.title}
						</h3>
						<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
							{problem.description}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
