"use client";

import { motion } from "motion/react";
import { RevealOnScroll } from "@/components/ui/aceternity";
import { Check } from "lucide-react";

interface UseCasesSectionProps {
	title?: string;
	useCases: string[];
}

export default function UseCasesSection({
	title = "Melp is great for…",
	useCases,
}: UseCasesSectionProps) {
	return (
		<motion.section
			className="py-16 sm:py-24 bg-background relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left - Visual */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative order-2 lg:order-1"
					>
						<div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 overflow-hidden">
							<div className="absolute inset-0 flex items-center justify-center">
								{/* Use cases illustration placeholder */}
								<div className="grid grid-cols-3 gap-4 p-8 w-full h-full">
									{[...Array(6)].map((_, i) => (
										<motion.div
											key={i}
											className="rounded-xl bg-primary/10 border border-primary/20"
											initial={{ scale: 0.8, opacity: 0 }}
											whileInView={{ scale: 1, opacity: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 0.4, delay: i * 0.1 }}
										/>
									))}
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right - Content */}
					<div className="order-1 lg:order-2">
						<RevealOnScroll>
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8">
								{title}
							</h2>
						</RevealOnScroll>

						<div className="space-y-4">
							{useCases.map((useCase, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
									className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
								>
									<div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
										<Check className="w-4 h-4 text-primary" />
									</div>
									<p className="text-muted-foreground">{useCase}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
