"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const differentiators = [
	{
		title: "AI-native, not AI-added",
		description:
			"Built from the ground up with intelligence at the core. Not bolted on as an afterthought.",
	},
	{
		title: "Understanding, not just communication",
		description:
			"Summaries, translations, and context — automatically. Your work makes sense without effort.",
	},
	{
		title: "Clarity by default",
		description:
			"Less scrolling. Less searching. More doing. Information surfaces when you need it.",
	},
	{
		title: "Borderless by design",
		description:
			"Real-time understanding across every language. Global teams move at the speed of thought.",
	},
];

export function DifferenceSection() {
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
			>
				<motion.span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
				The Melp Difference
			</motion.span>

				<motion.h2 className="text-3xl lg:text-5xl font-medium text-neutral-900 dark:text-white mb-3">
					AI that works inside your workflow.
				</motion.h2>
				<motion.p className="text-xl lg:text-2xl text-neutral-500 dark:text-neutral-400">
					Not alongside it.
				</motion.p>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
				{differentiators.map((item, index) => (
					<motion.div
						key={item.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						viewport={{ once: true }}
						className="relative p-6 lg:p-8"
					>
						<div className="absolute left-0 top-6 lg:top-8 w-1 h-12 bg-linear-to-b from-neutral-400 to-neutral-400/20 rounded-full" />
						<div className="pl-6">
							<h3 className="text-xl lg:text-2xl font-medium text-neutral-900 dark:text-white mb-3">
								{item.title}
							</h3>
							<p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
								{item.description}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
