"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import {
	AnimatedGradientBorder,
	GlowingBorderCard,
	RevealOnScroll,
	MagneticButton,
} from "@/components/ui/aceternity";

const plans = [
	{
		id: "free",
		name: "Free",
		price: "$0",
		period: "/mo",
		subscriptionPlanIdMonthly: "aptd9us8pxxc",
		packageId: "aptd3rp8tlvk",
		highlight: "For individuals",
		features: ["1 user", "10 GB storage", "Essential AI features"],
		cta: "Get Started",
		popular: false,
		href: "https://www.app.melp.us/spa/index#signup",
		isExternal: true,
	},
	{
		id: "plus",
		name: "Plus",
		price: "$7",
		period: "/user/mo",
		subscriptionPlanIdMonthly: "agsa0s74270g",
		packageId: "afimt14lixog",
		highlight: "Most popular",
		features: [
			"Up to 10 users",
			"100 GB storage",
			"AI meeting summaries",
			"Breakout rooms",
		],
		cta: "Start Free Trial",
		popular: true,
		href: "/checkout?plan=plus&billing=yearly",
		isExternal: false,
	},
	{
		id: "enterprise",
		name: "Enterprise",
		price: "Custom",
		period: "",
		highlight: "For large teams",
		features: ["Unlimited users", "SSO & SCIM", "Dedicated support"],
		cta: "Contact Sales",
		popular: false,
		href: "mailto:sales@melp.us",
		isExternal: true,
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
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4 },
	},
};

export default function PricingSection() {
	return (
		<motion.section
			id="pricing"
			className="py-16 sm:py-24 bg-background relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<RevealOnScroll className="text-center mb-12">
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-3 tracking-wider uppercase"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						Pricing
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Simple, transparent pricing
					</h2>
					<p className="mt-3 text-muted-foreground max-w-xl mx-auto">
						Start free and scale as you grow. No hidden fees.
					</p>
				</RevealOnScroll>

				{/* Pricing Cards */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-4xl mx-auto"
				>
					{plans.map((plan, index) => (
						<motion.div key={index} variants={itemVariants} className="h-full">
							{plan.popular ? (
								<AnimatedGradientBorder className="h-full">
									<div className="relative h-full p-5 lg:p-6 flex flex-col bg-background rounded-xl">
										<Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-0.5 text-xs shadow-md z-10">
											{plan.highlight}
										</Badge>

										<h3 className="text-lg font-semibold text-foreground mt-2">
											{plan.name}
										</h3>

										<div className="mt-3 flex items-baseline">
											<span className="text-3xl lg:text-4xl font-bold text-foreground">
												{plan.price}
											</span>
											<span className="ml-1 text-sm text-muted-foreground">
												{plan.period}
											</span>
										</div>

										<ul className="mt-4 space-y-2 flex-1">
											{plan.features.map((feature, featureIndex) => (
												<li
													key={featureIndex}
													className="flex items-center gap-2 text-sm text-foreground"
												>
													<Check className="w-4 h-4 text-primary shrink-0" />
													{feature}
												</li>
											))}
										</ul>

										<MagneticButton className="w-full mt-5">
											<Button
												className="w-full cursor-pointer"
												size="default"
												data-package-id={plan.packageId}
												data-subscription-plan-id={
													plan.subscriptionPlanIdMonthly ?? undefined
												}
												asChild
											>
												{plan.isExternal ? (
													<a
														href={plan.href}
														target="_blank"
														rel="noopener noreferrer"
													>
														{plan.cta}
													</a>
												) : (
													<Link href={plan.href}>{plan.cta}</Link>
												)}
											</Button>
										</MagneticButton>
									</div>
								</AnimatedGradientBorder>
							) : (
								<GlowingBorderCard className="h-full">
									<div className="h-full p-5 lg:p-6 flex flex-col bg-card rounded-xl">
										<p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
											{plan.highlight}
										</p>

										<h3 className="text-lg font-semibold text-foreground mt-1">
											{plan.name}
										</h3>

										<div className="mt-3 flex items-baseline">
											<span className="text-3xl lg:text-4xl font-bold text-foreground">
												{plan.price}
											</span>
											<span className="ml-1 text-sm text-muted-foreground">
												{plan.period}
											</span>
										</div>

										<ul className="mt-4 space-y-2 flex-1">
											{plan.features.map((feature, featureIndex) => (
												<li
													key={featureIndex}
													className="flex items-center gap-2 text-sm text-muted-foreground"
												>
													<Check className="w-4 h-4 text-primary shrink-0" />
													{feature}
												</li>
											))}
										</ul>

										<Button
											className="mt-5 w-full"
											variant="outline"
											size="default"
											data-package-id={plan.packageId}
											data-subscription-plan-id={
												plan.subscriptionPlanIdMonthly ?? undefined
											}
											asChild
										>
											{plan.isExternal ? (
												<a
													href={plan.href}
													target="_blank"
													rel="noopener noreferrer"
												>
													{plan.cta}
												</a>
											) : (
												<Link href={plan.href}>{plan.cta}</Link>
											)}
										</Button>
									</div>
								</GlowingBorderCard>
							)}
						</motion.div>
					))}
				</motion.div>

				{/* View All Plans Link */}
				<motion.div
					className="text-center mt-10"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
				>
					<Link href="/pricing">
						<Button variant="ghost" className="group cursor-pointer">
							Compare all plans
							<ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</Link>
				</motion.div>
			</div>
		</motion.section>
	);
}
