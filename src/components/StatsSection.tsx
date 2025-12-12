"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
	AnimatedGradientBorder,
	RevealOnScroll,
} from "@/components/ui/aceternity";

const stats = [
	{
		value: 35,
		suffix: "%",
		label: "Reduced Meeting Time",
		description:
			"Teams communicate clearly with AI summaries, intelligent routing, and structured channels.",
	},
	{
		value: 2.5,
		suffix: "x",
		label: "Faster Decisions",
		description:
			"Intelligence guides every moment reducing noise and accelerating decisions across organizations.",
	},
	{
		value: 10,
		suffix: "M+",
		label: "Global Connections Daily",
		description:
			"Teams, partners, and clients connected across rooms, cities, and continents.",
	},
	{
		value: 99.9,
		suffix: "%",
		label: "Uptime SLA",
		description:
			"Enterprise-grade reliability with trust engineered at every layer.",
	},
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });
	const [displayValue, setDisplayValue] = useState(0);

	useEffect(() => {
		if (isInView) {
			const duration = 2000;
			const startTime = Date.now();
			const animate = () => {
				const elapsed = Date.now() - startTime;
				const progress = Math.min(elapsed / duration, 1);
				const eased = 1 - Math.pow(1 - progress, 3);
				setDisplayValue(value * eased);
				if (progress < 1) {
					requestAnimationFrame(animate);
				}
			};
			animate();
		}
	}, [isInView, value]);

	const formattedValue =
		suffix === "M+" || suffix === "x"
			? displayValue.toFixed(1)
			: suffix === "%"
			? Math.round(displayValue)
			: displayValue.toFixed(1);

	return (
		<span ref={ref} className="tabular-nums">
			{formattedValue}
			{suffix}
		</span>
	);
}

export default function StatsSection() {
	return (
		<motion.section
			className="relative py-20 sm:py-32 bg-gradient-to-b from-muted/30 via-background to-muted/30 overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			{/* Background decoration */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,32,32,0.05)_0%,transparent_50%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,32,32,0.05)_0%,transparent_50%)]" />
			</div>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<RevealOnScroll className="text-center mb-16">
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						By the Numbers
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						Measurable impact for your enterprise
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
						Built for enterprises. Designed for people. See the real results organizations achieve with Melp.
					</p>
				</RevealOnScroll>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<AnimatedGradientBorder className="h-full">
								<div className="h-full p-6 bg-background rounded-xl flex flex-col">
									<div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
										<AnimatedNumber value={stat.value} suffix={stat.suffix} />
									</div>
									<div className="text-lg font-semibold text-foreground mb-2">
										{stat.label}
									</div>
									<p className="text-sm text-muted-foreground mt-auto">
										{stat.description}
									</p>
								</div>
							</AnimatedGradientBorder>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
