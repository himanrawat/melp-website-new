"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
	AnimatedGradientBorder,
	GlowingBorderCard,
	RevealOnScroll,
	MagneticButton,
} from "@/components/ui/aceternity";

const plans = [
	{
		name: "Starter",
		price: "$0",
		period: "/mo",
		description: "Perfect for small teams getting started",
		features: [
			"Up to 10 team members",
			"Basic integrations",
			"5GB storage",
			"Community support",
			"Core messaging features",
		],
		cta: "Get Started Free",
		popular: false,
	},
	{
		name: "Growth",
		price: "$12",
		period: "/user/mo",
		description: "For growing teams that need more power",
		features: [
			"Unlimited team members",
			"Advanced integrations",
			"100GB storage",
			"Priority support",
			"AI-powered features",
			"Advanced analytics",
		],
		cta: "Start Free Trial",
		popular: true,
	},
	{
		name: "Enterprise",
		price: "Custom",
		period: "",
		description: "For large organizations with custom needs",
		features: [
			"Everything in Growth",
			"Custom integrations",
			"Unlimited storage",
			"Dedicated support",
			"SSO & SCIM",
			"Custom SLAs",
		],
		cta: "Contact Sales",
		popular: false,
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.5 },
	},
};

export default function PricingSection() {
	return (
		<motion.section
			id="pricing"
			className="py-20 sm:py-32 bg-background relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			{/* Background decoration */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,32,32,0.03)_0%,transparent_50%)]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<RevealOnScroll className="text-center mb-16">
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						Pricing
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						Simple, transparent pricing
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
						Start free and scale as you grow. No hidden fees, no surprises.
					</p>
				</RevealOnScroll>

				{/* Pricing Cards */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end max-w-5xl mx-auto pt-4"
				>
					{plans.map((plan, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className={`h-full ${plan.popular ? "mt-4" : ""}`}
						>
							{plan.popular ? (
								<AnimatedGradientBorder className="h-full">
									<div className="relative h-full p-6 lg:p-8 flex flex-col bg-background rounded-xl">
										{/* Popular Badge */}
										<Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 shadow-md z-10">
											Most Popular
										</Badge>

										{/* Plan Name */}
										<h3 className="text-xl font-semibold text-foreground mt-2">
											{plan.name}
										</h3>

										{/* Price */}
										<div className="mt-4 flex items-baseline">
											<span className="text-4xl lg:text-5xl font-bold text-foreground">
												{plan.price}
											</span>
											<span className="ml-1 text-sm text-muted-foreground">
												{plan.period}
											</span>
										</div>

										{/* Description */}
										<p className="mt-2 text-sm text-muted-foreground min-h-[40px]">
											{plan.description}
										</p>

										{/* Features */}
										<ul className="mt-6 space-y-3 flex-1">
											{plan.features.map((feature, featureIndex) => (
												<motion.li
													key={featureIndex}
													className="flex items-start gap-3"
													initial={{ opacity: 0, x: -10 }}
													whileInView={{ opacity: 1, x: 0 }}
													viewport={{ once: true }}
													transition={{ delay: 0.3 + featureIndex * 0.05 }}
												>
													<svg
														className="w-5 h-5 text-primary shrink-0 mt-0.5"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth={2}
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M5 13l4 4L19 7"
														/>
													</svg>
													<span className="text-sm text-foreground">
														{feature}
													</span>
												</motion.li>
											))}
										</ul>

										{/* CTA Button */}
										<MagneticButton className="w-full mt-8">
											<Button className="w-full cursor-pointer" size="lg">
												{plan.cta}
											</Button>
										</MagneticButton>
									</div>
								</AnimatedGradientBorder>
							) : (
								<GlowingBorderCard className="h-full">
									<div className="h-full p-6 lg:p-8 flex flex-col bg-card rounded-xl">
										{/* Spacer for alignment with popular card */}
										<div className="h-2" />

										{/* Plan Name */}
										<h3 className="text-xl font-semibold text-foreground">
											{plan.name}
										</h3>

										{/* Price */}
										<div className="mt-4 flex items-baseline">
											<span className="text-4xl lg:text-5xl font-bold text-foreground">
												{plan.price}
											</span>
											<span className="ml-1 text-sm text-muted-foreground">
												{plan.period}
											</span>
										</div>

										{/* Description */}
										<p className="mt-2 text-sm text-muted-foreground min-h-[40px]">
											{plan.description}
										</p>

										{/* Features */}
										<ul className="mt-6 space-y-3 flex-1">
											{plan.features.map((feature, featureIndex) => (
												<li
													key={featureIndex}
													className="flex items-start gap-3"
												>
													<svg
														className="w-5 h-5 text-primary shrink-0 mt-0.5"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth={2}
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M5 13l4 4L19 7"
														/>
													</svg>
													<span className="text-sm text-muted-foreground">
														{feature}
													</span>
												</li>
											))}
										</ul>

										{/* CTA Button */}
										<Button className="mt-8 w-full" variant="outline" size="lg">
											{plan.cta}
										</Button>
									</div>
								</GlowingBorderCard>
							)}
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.section>
	);
}
