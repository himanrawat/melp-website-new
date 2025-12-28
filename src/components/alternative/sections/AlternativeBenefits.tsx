"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImagePlaceholder from "../ImagePlaceholder";
import { Icon } from "../icons";
import { BenefitsData } from "../types";

interface AlternativeBenefitsProps {
	data: BenefitsData;
}

export default function AlternativeBenefits({ data }: AlternativeBenefitsProps) {
	return (
		<section className="py-16 sm:py-24 bg-muted/30">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
					{/* Left Column - Content */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="lg:sticky lg:top-24"
					>
						<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
							{data.label}
						</span>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
							{data.title}
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed mb-8">
							{data.description}
						</p>

						<Button
							variant="brand-primary"
							size="lg"
							className="px-8 mb-10"
							asChild
						>
							<Link href="/pricing">Get Started Free</Link>
						</Button>

						{/* Feature Screenshot */}
						<ImagePlaceholder
							imageType="Feature Screenshot"
							description={data.imageDescription}
							aspectRatio="aspect-[4/3]"
							size="full"
						/>
					</motion.div>

					{/* Right Column - Benefits Cards */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="space-y-5"
					>
						{data.benefits.map((benefit, index) => (
							<motion.div
								key={benefit.title}
								initial={{ opacity: 0, y: 15 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 * index }}
								className="group"
							>
								<div className="p-6 rounded-2xl border border-border/50 bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
											<Icon name={benefit.icon} className="w-6 h-6 text-primary" />
										</div>
										<div>
											<h3 className="text-lg font-semibold text-foreground mb-2">
												{benefit.title}
											</h3>
											<p className="text-muted-foreground leading-relaxed">
												{benefit.description}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
