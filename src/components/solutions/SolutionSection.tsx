"use client";

import { motion } from "motion/react";
import { RevealOnScroll, GlowingBorderCard } from "@/components/ui/aceternity";
import { Check, type LucideIcon } from "lucide-react";

interface Solution {
	title: string;
	description: string;
	icon?: LucideIcon;
}

interface SolutionSectionProps {
	title?: string;
	subtitle?: string;
	solutions: Solution[];
}

export default function SolutionSection({
	title = "How Melp solves this",
	subtitle,
	solutions,
}: SolutionSectionProps) {
	return (
		<motion.section
			className="py-16 sm:py-24 bg-background relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,32,32,0.03)_0%,transparent_50%)]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<RevealOnScroll className="text-center mb-12">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
						{title}
					</h2>
					{subtitle && (
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							{subtitle}
						</p>
					)}
				</RevealOnScroll>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{solutions.map((solution, index) => {
						const IconComponent = solution.icon || Check;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
							>
								<GlowingBorderCard className="h-full">
									<div className="p-6 bg-card rounded-xl h-full flex flex-col">
										{/* Icon */}
										<div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
											<IconComponent className="w-6 h-6 text-primary" />
										</div>
										<h3 className="font-semibold text-foreground text-lg mb-2">
											{solution.title}
										</h3>
										<p className="text-sm text-muted-foreground flex-1">
											{solution.description}
										</p>
									</div>
								</GlowingBorderCard>
							</motion.div>
						);
					})}
				</div>
			</div>
		</motion.section>
	);
}
