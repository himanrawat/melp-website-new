"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Code2, Globe2, Building2 } from "lucide-react";

const audiences = [
	{
		icon: Code2,
		title: "Product & Engineering",
		description:
			"Ship faster with shared context. Every decision, discussion, and document in one place.",
	},
	{
		icon: Globe2,
		title: "Global & Distributed",
		description:
			"No timezone or language barriers. Real-time understanding keeps everyone aligned.",
	},
	{
		icon: Building2,
		title: "Enterprise & Scale",
		description:
			"Security, governance, and clarity at scale. Built for teams that need to move fast and stay compliant.",
	},
];

export function AudienceSection() {
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
					Built for
				</motion.span>

				<motion.h2 className="text-3xl lg:text-5xl font-medium text-neutral-900 dark:text-white mb-3">
					Teams that move fast.
				</motion.h2>
				<motion.p className="text-xl lg:text-2xl text-neutral-500 dark:text-neutral-400">
					And need to stay aligned.
				</motion.p>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
				{audiences.map((audience, index) => (
					<motion.div
						key={audience.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						viewport={{ once: true }}
						className="group p-8 lg:p-10 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-lg"
					>
						<div className="w-12 h-12 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-neutral-300 transition-colors">
							<audience.icon className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 transition-colors" />
						</div>
						<h3 className="text-xl lg:text-2xl font-medium text-neutral-900 dark:text-white mb-3">
							{audience.title}
						</h3>
						<p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
							{audience.description}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
