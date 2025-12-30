"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle } from "lucide-react";
import PricingHero from "@/components/pricing/PricingHero";
import PlanCard from "@/components/pricing/PlanCard";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import TrustedBrands from "@/components/pricing/TrustedBrands";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { RevealOnScroll, MagneticButton } from "@/components/ui/aceternity";
import { pricingFAQs } from "@/data/pricing";
import type { ComparisonFeature, PricingPackage } from "@/types/pricing";

interface PricingPageClientProps {
	readonly individualPackages: PricingPackage[];
	readonly businessPackages: PricingPackage[];
	readonly individualComparison: ComparisonFeature[];
	readonly businessComparison: ComparisonFeature[];
}

export default function PricingPageClient({
	individualPackages,
	businessPackages,
	individualComparison,
	businessComparison,
}: PricingPageClientProps) {
	const [isBusinessPlan, setIsBusinessPlan] = useState(false);
	const [isYearly, setIsYearly] = useState(true);
	const [openFAQ, setOpenFAQ] = useState<number | null>(null);

	const currentPlans = isBusinessPlan ? businessPackages : individualPackages;
	const currentComparison = isBusinessPlan
		? businessComparison
		: individualComparison;

	return (
		<div className="min-h-screen bg-background">
			<main>
				{/* Hero Section with Unified Toggles */}
				<PricingHero
					isYearly={isYearly}
					onBillingToggle={setIsYearly}
					isBusinessPlan={isBusinessPlan}
					onPlanToggle={setIsBusinessPlan}
				/>

				{/* Pricing Cards */}
				<section className="relative pb-20">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<AnimatePresence mode="wait">
							<motion.div
								key={isBusinessPlan ? "business" : "individual"}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3 }}
								className={`grid gap-6 lg:gap-8 items-stretch mx-auto ${
									isBusinessPlan
										? "grid-cols-1 md:grid-cols-3 max-w-5xl"
										: "grid-cols-1 md:grid-cols-2 max-w-3xl"
								}`}
							>
								{currentPlans.map((plan, index) => (
									<PlanCard
										key={plan.id}
										plan={plan}
										isYearly={isYearly}
										index={index}
									/>
								))}
							</motion.div>
						</AnimatePresence>
					</div>
				</section>

				{/* Trusted Brands */}
				<TrustedBrands />

				{/* Feature Comparison Table */}
				<section className="py-20 bg-muted/10">
					<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
						<RevealOnScroll className="text-center mb-12">
							<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								Compare plans
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								Find the perfect fit for you or your team.
							</p>
						</RevealOnScroll>

						<AnimatePresence mode="wait">
							<motion.div
								key={isBusinessPlan ? "business-table" : "individual-table"}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
								className=""
							>
								<ComparisonTable
									plans={currentPlans}
									comparison={currentComparison}
									isYearly={isYearly}
								/>
							</motion.div>
						</AnimatePresence>
					</div>
				</section>

				{/* Testimonials Section */}
				<TestimonialsSection />

				{/* FAQ Section */}
				<section className="py-20">
					<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
						<RevealOnScroll className="text-center mb-12">
							<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								Questions about pricing
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								Everything you need to know about our plans and billing.
							</p>
						</RevealOnScroll>

						<div className="space-y-4">
							{pricingFAQs.map((faq, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="border rounded-xl overflow-hidden bg-card"
								>
									<button
										onClick={() =>
											setOpenFAQ(openFAQ === index ? null : index)
										}
										className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors cursor-pointer"
									>
										<span className="font-medium text-foreground">
											{faq.question}
										</span>
										<motion.div
											animate={{ rotate: openFAQ === index ? 180 : 0 }}
											transition={{ duration: 0.2 }}
										>
											<ChevronDown className="w-5 h-5 text-muted-foreground" />
										</motion.div>
									</button>
									<AnimatePresence>
										{openFAQ === index && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.2 }}
												className="overflow-hidden"
											>
												<div className="px-5 pb-5 text-muted-foreground">
													{faq.answer}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-primary/5">
					<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
						<RevealOnScroll>
							<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								Ready to get started?
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								Try Melp free for 14 days. No credit card required.
							</p>
							<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
								<MagneticButton>
									<Button variant="brand-primary" size="lg" className="group cursor-pointer">
										Get started free
									</Button>
								</MagneticButton>
								<MagneticButton>
									<Button
										size="lg"
										variant="outline"
										className="cursor-pointer"
									>
										<MessageCircle className="w-4 h-4 mr-2" />
										Contact sales
									</Button>
								</MagneticButton>
							</div>
						</RevealOnScroll>
					</div>
				</section>
			</main>
		</div>
	);
}
