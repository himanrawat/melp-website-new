"use client";

import { ReactNode, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Check,
	Shield,
	Clock,
	HeadphonesIcon,
	Lock,
	// Sparkles,
	TrendingUp,
	ArrowUpRight,
	ChevronLeft,
	ChevronRight,
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
	readonly children: ReactNode;
	readonly currentStep: number;
	readonly steps: Step[];
	readonly selectedPlan: PricingPlan | null;
	readonly formData: CheckoutFormData;
	readonly onStepClick: (step: number) => void;
	readonly isEnterprise?: boolean;
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
	const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);
	const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
	const [maxVisibleFeatures, setMaxVisibleFeatures] = useState(3);
	const featuresContainerRef = useRef<HTMLDivElement>(null);
	const enterpriseCardRef = useRef<HTMLDivElement>(null);

	const enterpriseBenefits = [
		{
			title: "Unlimited Scale",
			desc: "No limits on users, storage, or meeting duration. Grow without constraints.",
		},
		{
			title: "Advanced Security",
			desc: "Enterprise-grade security with SSO, SCIM, and compliance certifications.",
		},
		{
			title: "Priority Support",
			desc: "Dedicated account manager and 24/7 priority technical support.",
		},
		{
			title: "Custom Integration",
			desc: "Seamless integration with your existing enterprise tools and workflows.",
		},
	];

	// Calculate how many features can fit based on available space
	useEffect(() => {
		if (!isEnterprise || !enterpriseCardRef.current || !selectedPlan) return;

		const calculateVisibleFeatures = () => {
			const cardHeight = enterpriseCardRef.current?.clientHeight || 0;
			// Approximate heights
			const headerHeight = 100; // Enterprise Solutions header
			const carouselHeight = 200; // Why Enterprise carousel
			const roiHeight = 80; // Built for Success section
			const featureHeaderHeight = 50; // Complete Feature Set header
			const buttonHeight = 40; // Expand button
			const padding = 40; // Extra padding/margins

			const availableHeight =
				cardHeight -
				headerHeight -
				carouselHeight -
				roiHeight -
				featureHeaderHeight -
				buttonHeight -
				padding;

			const featureItemHeight = 28; // Approximate height per feature item
			const calculatedMax = Math.floor(availableHeight / featureItemHeight);

			// Ensure minimum 3 features
			const finalMax = Math.max(3, calculatedMax);

			// Only show highlighted features initially, but respect the calculated max
			const highlightedCount = selectedPlan.features.filter(
				(f) => f.highlight
			).length;
			setMaxVisibleFeatures(Math.min(highlightedCount, finalMax));
		};

		// Calculate on mount and resize
		calculateVisibleFeatures();
		window.addEventListener("resize", calculateVisibleFeatures);

		return () => window.removeEventListener("resize", calculateVisibleFeatures);
	}, [isEnterprise, selectedPlan]);

	// Auto-advance carousel every 4 seconds
	useEffect(() => {
		if (!isEnterprise) return;

		const interval = setInterval(() => {
			setCurrentBenefitIndex((prev) => (prev + 1) % enterpriseBenefits.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [isEnterprise, enterpriseBenefits.length]);

	const nextBenefit = () => {
		setCurrentBenefitIndex((prev) => (prev + 1) % enterpriseBenefits.length);
	};

	const prevBenefit = () => {
		setCurrentBenefitIndex(
			(prev) =>
				(prev - 1 + enterpriseBenefits.length) % enterpriseBenefits.length
		);
	};

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

	const getStepClassName = (step: Step) => {
		if (step.id < currentStep) {
			return "bg-primary text-primary-foreground";
		}
		if (step.id === currentStep) {
			return "bg-primary text-primary-foreground ring-2 ring-primary/20";
		}
		return "bg-muted text-muted-foreground border-2 border-muted-foreground/20";
	};

	const getStepCursorClassName = (step: Step) => {
		if (step.id <= currentStep) {
			return "cursor-pointer hover:opacity-90";
		}
		return "cursor-not-allowed";
	};

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
														${getStepClassName(step)}
														${getStepCursorClassName(step)}
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
												<div className="flex-1 h-0.5 mx-2 relative mt-[15px]">
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

				{/* RIGHT - Sticky Order Summary / Enterprise Features */}
				<div className="hidden lg:block fixed right-0 top-14 bottom-0 w-[380px] xl:w-[420px] border-l bg-muted/30">
					<div className="h-full flex flex-col p-6 xl:p-8">
						{isEnterprise ? (
							/* Enterprise Features Section */
							<motion.div
								ref={enterpriseCardRef}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className="bg-card rounded-lg border p-5 flex-1 flex flex-col overflow-hidden"
							>
								<div className="mb-5 shrink-0">
									<h3 className="text-lg font-semibold text-foreground mb-2">
										Enterprise Solutions
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Unlock the full potential of Melp with our most
										comprehensive plan, designed for organizations that demand
										excellence.
									</p>
								</div>

								{/* Key Benefits Carousel */}
								<div className="mb-5 shrink-0">
									<h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">
										Why Enterprise?
									</h4>
									<div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4 min-h-[120px]">
										<AnimatePresence mode="wait">
											<motion.div
												key={currentBenefitIndex}
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{ duration: 0.3 }}
												className="border-l-2 border-primary pl-3"
											>
												<p className="text-sm font-medium text-foreground mb-1">
													{enterpriseBenefits[currentBenefitIndex].title}
												</p>
												<p className="text-xs text-muted-foreground leading-relaxed">
													{enterpriseBenefits[currentBenefitIndex].desc}
												</p>
											</motion.div>
										</AnimatePresence>

										{/* Navigation Controls */}
										<div className="flex items-center justify-between mt-3 pt-3 border-t border-primary/20">
											<button
												onClick={prevBenefit}
												className="p-1 rounded-md hover:bg-primary/10 transition-colors"
												aria-label="Previous benefit"
											>
												<ChevronLeft className="w-4 h-4 text-primary" />
											</button>

											{/* Dots Indicator */}
											<div className="flex gap-1.5">
												{enterpriseBenefits.map((_, index) => (
													<button
														key={index}
														onClick={() => setCurrentBenefitIndex(index)}
														className={`h-1.5 rounded-full transition-all ${
															index === currentBenefitIndex
																? "w-6 bg-primary"
																: "w-1.5 bg-primary/30 hover:bg-primary/50"
														}`}
														aria-label={`Go to benefit ${index + 1}`}
													/>
												))}
											</div>

											<button
												onClick={nextBenefit}
												className="p-1 rounded-md hover:bg-primary/10 transition-colors"
												aria-label="Next benefit"
											>
												<ChevronRight className="w-4 h-4 text-primary" />
											</button>
										</div>
									</div>
								</div>

								{/* Enterprise Features */}
								{selectedPlan && (
									<div className="flex-1 flex flex-col min-h-0 pt-5 border-t">
										<h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide shrink-0">
											Complete Feature Set
										</h4>
										<div className="relative flex-1 flex flex-col min-h-0">
											{/* Features List */}
											<div
												ref={featuresContainerRef}
												className={`space-y-2 ${
													isFeaturesExpanded
														? "overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/30"
														: ""
												}`}
												style={
													isFeaturesExpanded
														? { maxHeight: "calc(100% - 40px)" }
														: undefined
												}
											>
												{(isFeaturesExpanded
													? selectedPlan.features
													: selectedPlan.features
															.filter((f) => f.highlight)
															.slice(0, maxVisibleFeatures)
												).map((feature, index) => (
													<motion.div
														key={index}
														initial={{ opacity: 0, x: -10 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: index * 0.03 }}
														className="flex items-start gap-2 text-xs"
													>
														<Check
															className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
																feature.highlight
																	? "text-primary"
																	: "text-muted-foreground"
															}`}
														/>
														<span
															className={`leading-relaxed ${
																feature.highlight
																	? "text-foreground font-medium"
																	: "text-muted-foreground"
															}`}
														>
															{feature.text}
														</span>
													</motion.div>
												))}
											</div>

											{/* Fade Effect & Expand Button */}
											{!isFeaturesExpanded && (
												<>
													<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none" />
													<motion.button
														initial={{ opacity: 0, y: 10 }}
														animate={{ opacity: 1, y: 0 }}
														transition={{ delay: 0.4 }}
														onClick={() => setIsFeaturesExpanded(true)}
														className="relative z-10 w-full mt-3 py-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-1 group shrink-0"
													>
														<span>
															+
															{selectedPlan.features.length -
																maxVisibleFeatures}{" "}
															additional capabilities
														</span>
														<motion.svg
															className="w-3 h-3"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															strokeWidth={2}
															animate={{ y: [0, 2, 0] }}
															transition={{
																repeat: Infinity,
																duration: 1.5,
																ease: "easeInOut",
															}}
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M19 9l-7 7-7-7"
															/>
														</motion.svg>
													</motion.button>
												</>
											)}

											{/* Collapse Button */}
											{isFeaturesExpanded && (
												<motion.button
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													onClick={() => setIsFeaturesExpanded(false)}
													className="w-full mt-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1 shrink-0"
												>
													<span>Show less</span>
													<motion.svg
														className="w-3 h-3"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth={2}
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M5 15l7-7 7 7"
														/>
													</motion.svg>
												</motion.button>
											)}
										</div>
									</div>
								)}

								{/* ROI Statement */}
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 }}
									className="mt-5 p-4 rounded-lg bg-primary/5 border border-primary/20 shrink-0"
								>
									<p className="text-xs text-foreground font-medium mb-1">
										Built for Success
									</p>
									<p className="text-[10px] text-muted-foreground leading-relaxed">
										Join leading enterprises who trust Melp to power their
										communication, collaboration, and productivity at scale.
									</p>
								</motion.div>
							</motion.div>
						) : (
							/* Order Summary Card */
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
											<span className="text-sm text-muted-foreground">
												Plan
											</span>
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
											<span className="text-sm text-muted-foreground">
												Users
											</span>
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
															(formData.subscriptionLength === "1-year"
																? 12
																: 1)
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
							</motion.div>
						)}

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
						{!isEnterprise && (
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
						)}

						{/* Footer Links */}
						<div className="pt-6">
							<div className="flex flex-wrap gap-3 text-[10px] text-muted-foreground justify-end">
								<a
									href="/legal/privacy"
									className="hover:text-foreground transition-colors"
								>
									Privacy
								</a>
								<a
									href="/legal/terms-conditions"
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
