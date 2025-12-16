"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
	Check,
	Shield,
	Clock,
	HeadphonesIcon,
	Lock,
	Sparkles,
	TrendingUp,
	ArrowUpRight,
} from "lucide-react";
import { PricingPlan } from "@/data/pricing";
import { CheckoutFormData } from "@/app/checkout/page";
import Image from "next/image";
import Link from "next/link";

interface Step {
	id: number;
	name: string;
	shortName: string;
}

interface CheckoutLayoutProps {
	children: ReactNode;
	currentStep: number;
	steps: Step[];
	selectedPlan: PricingPlan | null;
	formData: CheckoutFormData;
	onStepClick: (step: number) => void;
	isEnterprise?: boolean;
}

const trustBadges = [
	{ icon: Shield, text: "256-bit SSL" },
	{ icon: Clock, text: "30-day refund" },
	{ icon: HeadphonesIcon, text: "24/7 support" },
];

export default function CheckoutLayout({
	children,
	currentStep,
	steps,
	selectedPlan,
	formData,
	onStepClick,
	isEnterprise = false,
}: CheckoutLayoutProps) {
	const getPrice = () => {
		if (!selectedPlan) return { unitPrice: 0, total: 0 };

		const isYearly = formData.billingFrequency === "yearly";
		const basePrice = isYearly
			? selectedPlan.yearlyPrice
			: selectedPlan.monthlyPrice;

		if (basePrice === null) return { unitPrice: 0, total: 0 };

		const unitPrice = basePrice;
		const total = unitPrice * formData.numberOfUsers;

		return { unitPrice, total };
	};

	const { unitPrice, total } = getPrice();
	const currency = selectedPlan?.currency || "$";
	const visibleSteps = isEnterprise ? steps.slice(0, 1) : steps.slice(0, 5);

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
				<div className="flex items-center justify-between px-4 lg:px-8 py-3">
					<Link href="/" className="flex items-center">
						<Image
							src="/logo.svg"
							alt="Melp"
							width={100}
							height={28}
							className="dark:hidden"
						/>
						<Image
							src="/logo-dark.svg"
							alt="Melp"
							width={100}
							height={28}
							className="hidden dark:block"
						/>
					</Link>

					<div className="flex items-center gap-4">
						<div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
							<Lock className="w-3 h-3" />
							<span>Secure checkout</span>
						</div>
						<Link
							href="/pricing"
							className="text-xs text-muted-foreground hover:text-foreground transition-colors"
						>
							View plans
						</Link>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="pt-14 flex flex-col lg:flex-row min-h-screen">
				{/* LEFT - Form Content */}
				<div className="flex-1 lg:pr-[380px] xl:pr-[420px]">
					<div className="max-w-xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
						{/* Progress Stepper */}
						{!isEnterprise && (
							<div className="mb-12">
								<div className="flex items-start">
									{visibleSteps.map((step, index) => (
										<div
											key={step.id}
											className="flex items-start flex-1 last:flex-none"
										>
											<button
												onClick={() => onStepClick(step.id)}
												disabled={step.id > currentStep}
												className="flex flex-col items-center group relative"
											>
												<motion.div
													initial={false}
													animate={{
														scale: step.id === currentStep ? 1.05 : 1,
													}}
													className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200 z-10
														${
															step.id < currentStep
																? "bg-primary text-primary-foreground"
																: step.id === currentStep
																? "bg-primary text-primary-foreground ring-2 ring-primary/20"
																: "bg-muted text-muted-foreground border-2 border-muted-foreground/20"
														}
														${
															step.id <= currentStep
																? "cursor-pointer hover:opacity-90"
																: "cursor-not-allowed"
														}
													`}
												>
													{step.id < currentStep ? (
														<Check className="w-4 h-4" />
													) : (
														step.id
													)}
												</motion.div>
												<span
													className={`mt-2 text-[10px] font-medium hidden sm:block transition-colors whitespace-nowrap
														${step.id === currentStep ? "text-foreground" : "text-muted-foreground"}
													`}
												>
													{step.shortName}
												</span>
											</button>

											{index < visibleSteps.length - 1 && (
												<div className="flex-1 h-[2px] mx-2 relative mt-[15px]">
													<div className="absolute inset-0 bg-muted-foreground/20 rounded-full" />
													<motion.div
														initial={{ width: "0%" }}
														animate={{
															width: step.id < currentStep ? "100%" : "0%",
														}}
														transition={{ duration: 0.3 }}
														className="absolute inset-0 bg-primary rounded-full"
													/>
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						)}

						{/* Step Info */}
						<motion.div
							key={`step-${currentStep}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="mb-4"
						>
							<p className="text-xs text-muted-foreground">
								{isEnterprise ? "Enterprise" : `Step ${currentStep} of 5`}
							</p>
						</motion.div>

						{/* Form Content */}
						<div className="pb-32 lg:pb-8">{children}</div>
					</div>
				</div>

				{/* RIGHT - Sticky Order Summary */}
				<div className="hidden lg:block fixed right-0 top-14 bottom-0 w-[380px] xl:w-[420px] border-l bg-muted/30">
					<div className="h-full flex flex-col p-6 xl:p-8">
						{/* Order Summary Card */}
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="bg-card rounded-lg border p-5"
						>
							<h3 className="text-sm font-semibold text-foreground mb-4">
								Order summary
							</h3>

							{selectedPlan && (
								<div className="space-y-3">
									{/* Plan */}
									<div className="flex justify-between items-center">
										<span className="text-sm text-muted-foreground">Plan</span>
										<div className="flex items-center gap-2">
											<span className="text-sm font-medium text-foreground">
												{selectedPlan.name}
											</span>
											{selectedPlan.popular && (
												<span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-medium">
													Popular
												</span>
											)}
										</div>
									</div>

									{/* Users */}
									<div className="flex justify-between items-center">
										<span className="text-sm text-muted-foreground">Users</span>
										<span className="text-sm font-medium text-foreground">
											{formData.numberOfUsers}
										</span>
									</div>

									{/* Billing */}
									<div className="flex justify-between items-center">
										<span className="text-sm text-muted-foreground">
											Billing
										</span>
										<span className="text-sm font-medium text-foreground">
											{formData.billingFrequency === "yearly"
												? "Annual"
												: "Monthly"}
										</span>
									</div>

									{/* Price per user */}
									<div className="flex justify-between items-center text-xs text-muted-foreground">
										<span>Per user/month</span>
										<span>
											{currency}
											{unitPrice.toFixed(2)}
										</span>
									</div>

									{/* Total */}
									<div className="pt-3 mt-3 border-t">
										<div className="flex justify-between items-baseline">
											<div>
												<span className="text-sm text-muted-foreground">
													Due today
												</span>
												<p className="text-[10px] text-muted-foreground">
													Tax calculated at checkout
												</p>
											</div>
											<div className="text-right">
												<span className="text-xl font-bold text-foreground">
													{currency}
													{(
														total *
														(formData.subscriptionLength === "1-year" ? 12 : 1)
													).toFixed(2)}
												</span>
												{formData.subscriptionLength === "1-year" && (
													<p className="text-[10px] text-muted-foreground">
														/year
													</p>
												)}
											</div>
										</div>
									</div>
								</div>
							)}

							{isEnterprise && (
								<div className="text-center py-4">
									<p className="text-sm text-muted-foreground">
										Custom pricing
									</p>
									<p className="text-xs text-muted-foreground mt-1">
										Our team will prepare a quote
									</p>
								</div>
							)}
						</motion.div>

						{/* Plan Features */}
						{selectedPlan && !isEnterprise && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.25 }}
								className="mt-4"
							>
								<h4 className="text-xs font-semibold text-foreground mb-3 flex items-center gap-1.5">
									{/* <Sparkles className="w-3.5 h-3.5 text-primary" /> */}
									What's included
								</h4>
								<div className="space-y-2">
									{selectedPlan.features.slice(0, 6).map((feature, index) => (
										<div key={index} className="flex items-start gap-2 text-xs">
											<Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
											<span className="text-muted-foreground leading-relaxed">
												{feature.text}
											</span>
										</div>
									))}
									{selectedPlan.features.length > 6 && (
										<p className="text-[10px] text-muted-foreground pt-1">
											+{selectedPlan.features.length - 6} more features
										</p>
									)}
								</div>
							</motion.div>
						)}

						{/* Upsell Section */}
						{selectedPlan &&
							selectedPlan.id !== "enterprise" &&
							!isEnterprise && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.3 }}
									className="mt-4"
								>
									<Link
										href="/pricing"
										className="block p-3 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors group"
									>
										<div className="flex items-start justify-between gap-2">
											<div className="flex-1">
												<div className="flex items-center gap-1.5 mb-1">
													<TrendingUp className="w-3.5 h-3.5 text-primary" />
													<p className="text-xs font-semibold text-foreground">
														Upgrade & save more
													</p>
												</div>
												<p className="text-[10px] text-muted-foreground leading-relaxed">
													{selectedPlan.id === "free" ||
													selectedPlan.id === "plus"
														? "Business plans include advanced features & unlimited meetings"
														: "Enterprise offers custom solutions & dedicated support"}
												</p>
											</div>
											<ArrowUpRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
										</div>
									</Link>
								</motion.div>
							)}

						{/* Trust Badges - Horizontal */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="mt-auto flex items-center justify-between gap-2 p-3 rounded-lg bg-muted/50"
						>
							{trustBadges.map((badge, index) => (
								<div
									key={index}
									className="flex items-center gap-1.5 text-[10px] text-muted-foreground"
								>
									<badge.icon className="w-3 h-3 text-primary" />
									<span>{badge.text}</span>
								</div>
							))}
						</motion.div>

						{/* Footer Links */}
						<div className="pt-6">
							<div className="flex flex-wrap gap-3 text-[10px] text-muted-foreground justify-end">
								<a
									href="/privacy"
									className="hover:text-foreground transition-colors"
								>
									Privacy
								</a>
								<a
									href="/terms"
									className="hover:text-foreground transition-colors"
								>
									Terms
								</a>
								<a
									href="/support"
									className="hover:text-foreground transition-colors"
								>
									Support
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* Mobile Bottom Bar */}
			<div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t p-3 z-40">
				<div className="flex items-center justify-between max-w-xl mx-auto">
					<div>
						<p className="text-sm font-medium text-foreground">
							{selectedPlan?.name}
						</p>
						{!isEnterprise && (
							<p className="text-xs text-muted-foreground">
								{formData.numberOfUsers} user
								{formData.numberOfUsers > 1 ? "s" : ""} •{" "}
								{formData.billingFrequency === "yearly" ? "Annual" : "Monthly"}
							</p>
						)}
					</div>
					{!isEnterprise && (
						<div className="text-right">
							<p className="text-lg font-bold text-foreground">
								{currency}
								{(
									total * (formData.subscriptionLength === "1-year" ? 12 : 1)
								).toFixed(2)}
							</p>
							<p className="text-[10px] text-muted-foreground">
								{formData.subscriptionLength === "1-year" ? "/year" : "/month"}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
