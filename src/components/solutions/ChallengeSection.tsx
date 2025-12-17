"use client";

import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/aceternity";
import { X, AlertTriangle } from "lucide-react";

interface ChallengeSectionProps {
	title?: string;
	subtitle?: string;
	challenges: string[];
}

export default function ChallengeSection({
	title = "The challenge",
	subtitle,
	challenges,
}: ChallengeSectionProps) {
	return (
		<motion.section
			className="py-16 sm:py-24 bg-muted/30 relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,32,32,0.05)_0%,transparent_50%)]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left - Visual */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative"
					>
						<div className="aspect-square rounded-2xl bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20 overflow-hidden">
							<div className="absolute inset-0 flex items-center justify-center">
								{/* Challenge illustration */}
								<div className="relative w-3/4 h-3/4">
									<div className="absolute inset-0 grid grid-cols-2 gap-4 p-4">
										{[...Array(4)].map((_, i) => (
											<div
												key={i}
												className="rounded-lg bg-destructive/10 border border-destructive/20 animate-pulse"
												style={{ animationDelay: `${i * 0.2}s` }}
											/>
										))}
									</div>
									{/* X mark */}
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
										<AlertTriangle className="w-20 h-20 text-destructive/40" />
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right - Content */}
					<div>
						<RevealOnScroll>
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
								{title}
							</h2>
							{subtitle && (
								<p className="text-lg text-muted-foreground mb-8">{subtitle}</p>
							)}
						</RevealOnScroll>

						<div className="space-y-4">
							{challenges.map((challenge, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
									className="flex items-start gap-4"
								>
									<div className="shrink-0 w-6 h-6 rounded-full bg-destructive/10 border border-destructive/30 flex items-center justify-center mt-0.5">
										<X className="w-3 h-3 text-destructive" />
									</div>
									<p className="text-muted-foreground">{challenge}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
