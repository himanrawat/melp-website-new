"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/aceternity";

interface HowItWorksStep {
	title: string;
	description: string;
	icon: LucideIcon;
}

interface ProductHowItWorksProps {
	label?: string;
	title: string;
	description?: string;
	steps: HowItWorksStep[];
}

export default function ProductHowItWorks({
	label = "How It Works",
	title,
	description,
	steps,
}: ProductHowItWorksProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(containerRef, { once: true, margin: "-100px" });
	const [activeStep, setActiveStep] = useState<number | null>(null);

	return (
		<section
			ref={containerRef}
			className="relative py-20 sm:py-32 bg-muted/20 overflow-hidden"
		>
			{/* Background pattern */}
			<div className="absolute inset-0 bg-[radial-gradient(#22202008_1px,transparent_1px)] [background-size:32px_32px]" />

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<RevealOnScroll className="text-center mb-20">
					<motion.span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
						{label}
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						{title}
					</h2>
					{description && (
						<p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
							{description}
						</p>
					)}
				</RevealOnScroll>

				{/* Steps Timeline */}
				<div className="relative">
					{/* Connecting line */}
					<div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

					{/* Animated progress line */}
					<motion.div
						className="absolute left-8 lg:left-1/2 top-0 w-px bg-primary lg:-translate-x-px origin-top"
						initial={{ scaleY: 0 }}
						animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
						transition={{ duration: 1.5, ease: "easeOut" }}
						style={{ height: "100%" }}
					/>

					<div className="space-y-12 lg:space-y-24">
						{steps.map((step, index) => {
							const Icon = step.icon;
							const isEven = index % 2 === 0;
							const isActive = activeStep === index;

							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-50px" }}
									transition={{
										duration: 0.6,
										delay: index * 0.15,
										ease: [0.21, 0.47, 0.32, 0.98],
									}}
									className="relative"
									onMouseEnter={() => setActiveStep(index)}
									onMouseLeave={() => setActiveStep(null)}
								>
									<div
										className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
											isEven ? "" : "lg:direction-rtl"
										}`}
									>
										{/* Step number indicator */}
										<motion.div
											className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 z-20"
											whileHover={{ scale: 1.1 }}
										>
											<motion.div
												className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
													isActive
														? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
														: "bg-background border-2 border-border text-foreground"
												}`}
												animate={
													isActive
														? {
																boxShadow: [
																	"0 0 0 0 rgba(var(--primary-rgb), 0.4)",
																	"0 0 0 15px rgba(var(--primary-rgb), 0)",
																],
														  }
														: {}
												}
												transition={{
													duration: 1,
													repeat: isActive ? Infinity : 0,
												}}
											>
												{index + 1}
											</motion.div>
										</motion.div>

										{/* Content */}
										<div
											className={`ml-24 lg:ml-0 ${
												isEven
													? "lg:pr-16 lg:text-right"
													: "lg:pl-16 lg:text-left lg:order-2"
											}`}
										>
											<motion.div
												className={`p-6 rounded-2xl transition-all duration-300 ${
													isActive
														? "bg-background shadow-lg border border-primary/20"
														: "bg-transparent"
												}`}
												whileHover={{ x: isEven ? -5 : 5 }}
											>
												{/* Icon */}
												<motion.div
													className={`mb-4 inline-flex ${
														isEven ? "lg:float-right lg:ml-4" : ""
													}`}
													whileHover={{ scale: 1.1, rotate: 5 }}
												>
													<div
														className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
															isActive
																? "bg-primary/20 border border-primary/30"
																: "bg-primary/10 border border-primary/20"
														}`}
													>
														<Icon className="w-6 h-6 text-primary" />
													</div>
												</motion.div>

												<h3
													className={`text-xl font-semibold text-foreground mb-2 clear-both ${
														isActive ? "text-primary" : ""
													}`}
												>
													{step.title}
												</h3>
												<p className="text-muted-foreground leading-relaxed">
													{step.description}
												</p>

												{/* Animated arrow on active */}
												{isActive && (
													<motion.div
														initial={{ opacity: 0, x: isEven ? 10 : -10 }}
														animate={{ opacity: 1, x: 0 }}
														className={`mt-4 flex items-center gap-2 text-sm font-medium text-primary ${
															isEven ? "lg:justify-end" : ""
														}`}
													>
														<span>Get started</span>
														<motion.svg
															width="16"
															height="16"
															viewBox="0 0 16 16"
															fill="none"
															animate={{ x: [0, 4, 0] }}
															transition={{
																duration: 1,
																repeat: Infinity,
															}}
														>
															<path
																d="M3 8H13M13 8L8 3M13 8L8 13"
																stroke="currentColor"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</motion.svg>
													</motion.div>
												)}
											</motion.div>
										</div>

										{/* Visual placeholder for the other side */}
										<div
											className={`hidden lg:block ${
												isEven ? "lg:order-2" : ""
											}`}
										/>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
