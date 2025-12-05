"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const securityPoints = [
	"End-to-end encryption for all your data",
	"Regular third-party security audits",
	"Enterprise-grade access controls",
];

const complianceBadges = ["SOC 2", "ISO 27001", "GDPR", "HIPAA"];

export default function SecuritySection() {
	return (
		<section id="security" className="py-20 sm:py-32 bg-muted/50">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
				>
					{/* Left Column - Text */}
					<div>
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Security Section Heading Placeholder
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Placeholder text explaining Melp&apos;s commitment to security and
							compliance.
						</p>
						<ul className="mt-8 space-y-4">
							{securityPoints.map((point, index) => (
								<li key={index} className="flex items-start gap-3">
									<div className="flex-shrink-0 mt-1">
										<div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
											<svg
												className="w-3 h-3 text-primary"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth={3}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</div>
									</div>
									<span className="text-foreground">{point}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Right Column - Compliance Badges */}
					<Card className="p-8 bg-background border">
						<h3 className="text-lg font-semibold text-foreground mb-6">
							Compliance & Certifications
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{complianceBadges.map((badge, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
								>
									<div className="flex items-center justify-center h-20 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors">
										<Badge
											variant="secondary"
											className="text-sm font-medium px-4 py-1.5"
										>
											{badge}
										</Badge>
									</div>
								</motion.div>
							))}
						</div>
						<p className="mt-6 text-sm text-muted-foreground text-center">
							Placeholder text about additional certifications and security
							measures.
						</p>
					</Card>
				</motion.div>
			</div>
		</section>
	);
}
