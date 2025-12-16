"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	AnimatedGradientBorder,
	GlowingBorderCard,
	MagneticButton,
} from "@/components/ui/aceternity";
import { PricingPlan } from "@/data/pricing";
import Link from "next/link";

interface PlanCardProps {
	plan: PricingPlan;
	isYearly: boolean;
	index: number;
}

const cardVariants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
		},
	}),
	hover: {
		y: -8,
		transition: {
			duration: 0.3,
			ease: "easeOut" as const,
		},
	},
};

const featureVariants = {
	hidden: { opacity: 0, x: -10 },
	visible: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.3 + i * 0.05,
			duration: 0.3,
		},
	}),
};

export default function PlanCard({ plan, isYearly, index }: PlanCardProps) {
	const Icon = plan.icon;
	const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
	const originalPrice = plan.monthlyPrice; // Monthly price is the "original" when yearly is selected
	const period = plan.monthlyPrice !== null ? "per user / month" : "";
	const billingNote =
		isYearly && plan.yearlyPrice !== null ? "billed annually" : "";
	const showDiscount =
		isYearly &&
		plan.discount &&
		plan.yearlyPrice !== null &&
		plan.monthlyPrice !== null;

	const CardWrapper = plan.popular ? AnimatedGradientBorder : GlowingBorderCard;

	return (
		<motion.div
			custom={index}
			variants={cardVariants}
			initial="hidden"
			animate="visible"
			whileHover="hover"
			className={`h-full ${plan.popular ? "relative z-10" : ""}`}
		>
			<CardWrapper className="h-full">
				<div className="relative h-full p-6 lg:p-8 flex flex-col bg-card rounded-xl">
					{/* Discount Ribbon - Top Right Corner */}
					{showDiscount && (
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
							className="absolute top-4 right-4 z-20"
						>
							<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
								{plan.discount}
							</span>
						</motion.div>
					)}

					{/* Popular Badge */}
					{plan.popular && (
						<motion.div
							initial={{ opacity: 0, scale: 0.8, y: -10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							transition={{ delay: 0.4, type: "spring", stiffness: 400 }}
							className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
						>
							<Badge className="bg-primary text-primary-foreground px-4 py-1.5 shadow-lg flex items-center gap-1.5">
								<Sparkles className="w-3.5 h-3.5" />
								Most Popular
							</Badge>
						</motion.div>
					)}

					{/* Best Value Badge */}
					{plan.bestValue && (
						<motion.div
							initial={{ opacity: 0, scale: 0.8, y: -10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							transition={{ delay: 0.4, type: "spring", stiffness: 400 }}
							className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
						>
							<Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1.5 shadow-lg border-0">
								Best Value
							</Badge>
						</motion.div>
					)}

					{/* Plan Header */}
					<div className="flex items-center gap-3 mt-2">
						{/* <motion.div
							className="p-2.5 rounded-xl bg-primary/10"
							whileHover={{ scale: 1.1, rotate: 5 }}
							transition={{ type: "spring", stiffness: 400 }}
						>
							<Icon className="w-5 h-5 text-primary" />
						</motion.div> */}
						<h3 className="text-xl font-semibold text-foreground">
							{plan.name}
						</h3>
					</div>

					{/* Price with Strikethrough */}
					<div className="mt-5 h-[60px]">
						{currentPrice !== null ? (
							<div className="flex items-baseline gap-2 flex-wrap">
								{/* Strikethrough original price when yearly */}
								{showDiscount && originalPrice !== currentPrice && (
									<span className="text-lg text-muted-foreground line-through">
										{plan.currency}
										{originalPrice}
									</span>
								)}
								<span className="text-4xl lg:text-5xl font-bold text-foreground">
									{plan.currency}
									{currentPrice}
								</span>
								<span className="text-muted-foreground">{period}</span>
							</div>
						) : (
							<span className="text-3xl lg:text-4xl font-bold text-foreground">
								Custom
							</span>
						)}
						{/* Billing Note - Fixed position */}
						<p className="text-xs text-muted-foreground mt-1 h-4">
							{billingNote || "\u00A0"}
						</p>
					</div>

					{/* Description */}
					<p className="mt-3 text-sm text-muted-foreground min-h-[40px]">
						{plan.description}
					</p>

					{/* Divider */}
					<div className="my-6 h-px bg-border" />

					{/* Base Plan Header */}
					{plan.basePlan && (
						<p className="text-sm text-muted-foreground mb-4">
							Everything in{" "}
							<span className="font-medium text-foreground">
								{plan.basePlan}
							</span>
							, plus:
						</p>
					)}

					{/* Features */}
					<ul className="space-y-3 flex-1">
						{plan.features.map((feature, featureIndex) => (
							<motion.li
								key={featureIndex}
								custom={featureIndex}
								variants={featureVariants}
								initial="hidden"
								animate="visible"
								className="flex items-start gap-3 group"
							>
								{feature.included ? (
									<motion.div
										className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
											feature.highlight
												? "bg-primary text-primary-foreground"
												: "bg-primary/10 text-primary"
										}`}
										whileHover={{ scale: 1.2 }}
										transition={{ type: "spring", stiffness: 400 }}
									>
										<Check className="w-3 h-3" strokeWidth={3} />
									</motion.div>
								) : (
									<div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-muted">
										<X
											className="w-3 h-3 text-muted-foreground"
											strokeWidth={2}
										/>
									</div>
								)}
								<span
									className={`text-sm transition-colors ${
										feature.included
											? feature.highlight
												? "text-foreground font-medium"
												: "text-foreground group-hover:text-primary"
											: "text-muted-foreground line-through"
									}`}
								>
									{feature.text}
								</span>
							</motion.li>
						))}
					</ul>

					{/* CTA Button */}
					<MagneticButton className="w-full mt-8">
						<Button
							className="w-full group"
							size="lg"
							variant={plan.ctaVariant}
							asChild
						>
							<Link href={`/checkout?plan=${plan.id}&billing=${isYearly ? 'yearly' : 'monthly'}`}>
								<span>{plan.cta}</span>
								<motion.span
									className="inline-block ml-1"
									initial={{ x: 0 }}
									whileHover={{ x: 3 }}
								>
									→
								</motion.span>
							</Link>
						</Button>
					</MagneticButton>
				</div>
			</CardWrapper>
		</motion.div>
	);
}
