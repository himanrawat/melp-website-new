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
				style={{ opacity: headerOpacity, scale: headerScale, y: headerY }}
			>
				<motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-6">
					<svg
						className="w-4 h-4"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.4663 22C11.2835 17.739 11.2835 17.739 11.4663 22C8.6409 15.7182 6.50125 13.7431 0 11.4663C4.26101 11.2835 4.26101 11.2835 0 11.4663C6.2818 8.6409 8.25686 6.50125 10.5337 0C10.7165 4.26101 10.7165 4.26101 10.5337 0C13.3591 6.2818 15.4988 8.25686 22 10.5337C17.739 10.7165 17.739 10.7165 22 10.5337C15.7182 13.3591 13.7431 15.4988 11.4663 22Z"
							fill="currentColor"
						/>
					</svg>
					The MELP difference
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
