"use client";

import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/aceternity";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, type LucideIcon } from "lucide-react";

interface Feature {
	title: string;
	description: string;
	icon?: LucideIcon;
}

interface FeatureHighlightSectionProps {
	badge?: string;
	title: string;
	subtitle?: string;
	features: Feature[];
	ctaText?: string;
	ctaHref?: string;
	reversed?: boolean;
}

export default function FeatureHighlightSection({
	badge,
	title,
	subtitle,
	features,
	ctaText,
	ctaHref = "/get-started",
	reversed = false,
}: FeatureHighlightSectionProps) {
	return (
		<motion.section
			className="py-16 sm:py-24 bg-background relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div
					className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
						reversed ? "lg:flex-row-reverse" : ""
					}`}
				>
					{/* Content */}
					<div className={reversed ? "lg:order-2" : "lg:order-1"}>
						<RevealOnScroll>
							{badge && (
								<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
									{badge}
								</span>
							)}
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
								{title}
							</h2>
							{subtitle && (
								<p className="text-lg text-muted-foreground mb-8">{subtitle}</p>
							)}
						</RevealOnScroll>

						<div className="space-y-4">
							{features.map((feature, index) => {
								const IconComponent = feature.icon || Check;
								return (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: reversed ? 20 : -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										className="flex items-start gap-4"
									>
										<div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
											<IconComponent className="w-5 h-5 text-primary" />
										</div>
										<div>
											<h4 className="font-semibold text-foreground mb-1">
												{feature.title}
											</h4>
											<p className="text-sm text-muted-foreground">
												{feature.description}
											</p>
										</div>
									</motion.div>
								);
							})}
						</div>

						{ctaText && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: 0.4 }}
								className="mt-8"
							>
								<Button size="lg" asChild>
									<Link href={ctaHref}>{ctaText}</Link>
								</Button>
							</motion.div>
						)}
					</div>

					{/* Visual */}
					<motion.div
						initial={{ opacity: 0, x: reversed ? -50 : 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className={reversed ? "lg:order-1" : "lg:order-2"}
					>
						<div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 overflow-hidden shadow-2xl">
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="w-3/4 h-3/4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 animate-pulse" />
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
