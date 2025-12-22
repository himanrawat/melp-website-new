"use client";

import { motion } from "motion/react";
import { RevealOnScroll } from "@/components/ui/aceternity";
import { TrendingUp } from "lucide-react";

interface Stat {
	value: string;
	label: string;
}

interface ImpactSectionProps {
	title?: string;
	subtitle?: string;
	stats: Stat[];
}

export default function ImpactSection({
	title = "Proven impact",
	subtitle,
	stats,
}: ImpactSectionProps) {
	return (
		<motion.section
			className="py-16 sm:py-24 bg-primary/5 relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<RevealOnScroll className="text-center mb-12">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
						{title}
					</h2>
					{subtitle && (
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							{subtitle}
						</p>
					)}
				</RevealOnScroll>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className="text-center p-8 bg-card rounded-2xl border border-border/50 shadow-lg"
						>
							<div className="flex items-center justify-center gap-2 mb-3">
								<TrendingUp className="w-6 h-6 text-primary" />
								<span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
									{stat.value}
								</span>
							</div>
							<p className="text-muted-foreground">{stat.label}</p>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
