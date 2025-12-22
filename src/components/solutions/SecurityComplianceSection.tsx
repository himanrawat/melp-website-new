"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/ui/aceternity";
import { Check, Shield } from "lucide-react";

interface SecurityFeature {
	title: string;
	description: string;
}

interface SecurityComplianceSectionProps {
	title?: string;
	subtitle?: string;
	features: SecurityFeature[];
	badges?: string[];
}

export default function SecurityComplianceSection({
	title = "Security & Compliance",
	subtitle,
	features,
	badges = ["SOC 2", "ISO 27001", "GDPR", "HIPAA"],
}: SecurityComplianceSectionProps) {
	return (
		<motion.section
			className="py-16 sm:py-24 bg-background relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,32,32,0.03)_0%,transparent_50%)]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left - Content */}
					<div>
						<RevealOnScroll>
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
								{title}
							</h2>
							{subtitle && (
								<p className="text-lg text-muted-foreground mb-8">{subtitle}</p>
							)}
						</RevealOnScroll>

						{/* Compliance Badges */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4 }}
							className="flex flex-wrap gap-3 mb-8"
						>
							{badges.map((badge, index) => (
								<Badge
									key={index}
									variant="secondary"
									className="px-4 py-2 text-sm font-medium border border-primary/30 bg-primary/5"
								>
									<Check className="w-4 h-4 text-primary mr-2" />
									{badge}
								</Badge>
							))}
						</motion.div>

						{/* Features List */}
						<div className="space-y-4">
							{features.map((feature, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
									className="flex items-start gap-4"
								>
									<div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mt-0.5">
										<Check className="w-3 h-3 text-primary" />
									</div>
									<div>
										<h4 className="font-medium text-foreground">
											{feature.title}
										</h4>
										<p className="text-sm text-muted-foreground">
											{feature.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Right - Visual */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative"
					>
						<div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 overflow-hidden">
							<div className="absolute inset-0 flex items-center justify-center">
								{/* Security shield illustration */}
								<div className="relative w-1/2 h-1/2">
									<div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
									<div
										className="absolute inset-4 rounded-full bg-primary/30 animate-pulse"
										style={{ animationDelay: "0.2s" }}
									/>
									<div className="absolute inset-8 rounded-full bg-primary/40 flex items-center justify-center">
										<Shield className="w-12 h-12 text-primary" />
									</div>
								</div>
							</div>
							{/* Decorative elements */}
							<div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-primary/20 blur-xl" />
							<div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
