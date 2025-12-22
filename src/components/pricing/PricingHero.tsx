"use client";

import { motion } from "motion/react";
import { RevealOnScroll } from "@/components/ui/aceternity";

interface PricingHeroProps {
	readonly isYearly: boolean;
	readonly onBillingToggle: (yearly: boolean) => void;
	readonly isBusinessPlan: boolean;
	readonly onPlanToggle: (isBusiness: boolean) => void;
}

export default function PricingHero({
	isYearly,
	onBillingToggle,
	isBusinessPlan,
	onPlanToggle,
}: PricingHeroProps) {
	return (
		<section className="pt-32 pb-16 relative overflow-hidden">
			{/* Background Decoration */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,32,32,0.03)_0%,transparent_50%)]" />
			<div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
			<div className="absolute top-40 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

			<div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
				<RevealOnScroll>
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex items-center justify-center gap-2 mb-6"
					>
						<span className="text-sm font-medium text-muted-foreground">
							Pricing
						</span>
					</motion.div>

					{/* Headline */}
					<motion.h1
						className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<span className="text-foreground">One tool for your </span>
						<span className="text-muted-foreground">whole company.</span>
					</motion.h1>

					{/* Subheadline */}
					<motion.p
						className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Free for individuals and small teams. Upgrade for advanced
						collaboration, AI features, and enterprise-grade security.
					</motion.p>

					{/* Controls Container */}
					<motion.div
						className="mt-12 flex flex-col items-center gap-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						{/* Individual / Business - Rectangle Tabs */}
						<div className="inline-flex border border-border rounded-lg overflow-hidden">
							<button
								onClick={() => onPlanToggle(false)}
								className={`
									relative px-8 py-3 text-sm font-medium transition-all duration-200
									${
										isBusinessPlan
											? "bg-background text-muted-foreground hover:text-foreground hover:bg-muted/50"
											: "bg-foreground text-background"
									}
								`}
							>
								Individual
							</button>
							<button
								onClick={() => onPlanToggle(true)}
								className={`
									relative px-8 py-3 text-sm font-medium transition-all duration-200 border-l border-border
									${
										isBusinessPlan
											? "bg-foreground text-background"
											: "bg-background text-muted-foreground hover:text-foreground hover:bg-muted/50"
									}
								`}
							>
								Business
							</button>
						</div>

						{/* Monthly / Yearly Switch */}
						<div className="flex flex-col items-end justify-end w-full gap-2">
							<div className="flex items-center gap-4">
								{/* Monthly Label */}
								<button
									type="button"
									className={`
									text-sm transition-all duration-200 bg-transparent border-none cursor-pointer
									${
										isYearly
											? "font-normal text-muted-foreground"
											: "font-semibold text-foreground"
									}
								`}
									onClick={() => onBillingToggle(false)}
								>
									Monthly
								</button>

								{/* Switch Track */}
								<button
									type="button"
									onClick={() => onBillingToggle(!isYearly)}
									className="relative w-12 h-6 bg-muted border border-border rounded-full transition-colors duration-200 hover:bg-muted/80"
									aria-label="Toggle billing period"
								>
									{/* Switch Pill */}
									<motion.div
										className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-foreground rounded-full shadow-sm"
										initial={false}
										animate={{
											left: isYearly ? "calc(100% - 22px)" : "2px",
										}}
										transition={{
											type: "spring",
											stiffness: 500,
											damping: 30,
										}}
									/>
								</button>

								{/* Yearly Label */}
								<button
									type="button"
									className={`
									text-sm transition-all duration-200 bg-transparent border-none cursor-pointer
									${
										isYearly
											? "font-semibold text-foreground"
											: "font-normal text-muted-foreground"
									}
								`}
									onClick={() => onBillingToggle(true)}
								>
									Yearly
								</button>
							</div>

							{/* Discount Badge */}
							<motion.span
								className={`
									text-sm font-medium ml-2 transition-all duration-300
									${
										isYearly
											? "text-green-600 dark:text-green-400"
											: "text-muted-foreground/40 line-through"
									}
								`}
								animate={{
									opacity: isYearly ? 1 : 0.5,
								}}
								transition={{ duration: 0.2 }}
							>
								Save 22%
							</motion.span>
						</div>
					</motion.div>
				</RevealOnScroll>
			</div>
		</section>
	);
}
