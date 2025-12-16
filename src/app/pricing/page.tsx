"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PlanCard from "@/components/pricing/PlanCard";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import { Button } from "@/components/ui/button";
import { RevealOnScroll, MagneticButton } from "@/components/ui/aceternity";
import {
	individualPlans,
	businessPlans,
	individualComparison,
	businessComparison,
	pricingFAQs,
} from "@/data/pricing";

export default function PricingPage() {
	const [isBusinessPlan, setIsBusinessPlan] = useState(false);
	const [isYearly, setIsYearly] = useState(true);
	const [openFAQ, setOpenFAQ] = useState<number | null>(null);

	const currentPlans = isBusinessPlan ? businessPlans : individualPlans;
	const currentComparison = isBusinessPlan
		? businessComparison
		: individualComparison;

	return (
		<div className="min-h-screen bg-background">
			<Header />

			<main>
				{/* Hero Section with Unified Toggles */}
				<PricingHero
					isYearly={isYearly}
					onBillingToggle={setIsYearly}
					isBusinessPlan={isBusinessPlan}
					onPlanToggle={setIsBusinessPlan}
				/>

				{/* Pricing Cards */}
				<section className="relative">
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

				{/* Feature Comparison Table */}
				<section className="py-20 bg-muted/10">
					<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
						<RevealOnScroll className="text-center mb-12">
							<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								Compare all features
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								See what&apos;s included in each plan
							</p>
						</RevealOnScroll>

						<AnimatePresence mode="wait">
							<motion.div
								key={isBusinessPlan ? "business-table" : "individual-table"}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="bg-card"
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

				{/* FAQ Section */}
				<section className="py-20">
					<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
						<RevealOnScroll className="text-center mb-12">
							<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								Frequently asked questions
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								Got questions? We&apos;ve got answers.
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
										onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
										className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
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
								Still have questions?
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								Our team is here to help you find the perfect plan for your
								needs.
							</p>
							<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
								<MagneticButton>
									<Button size="lg" className="group">
										<MessageCircle className="w-4 h-4 mr-2" />
										Talk to Sales
									</Button>
								</MagneticButton>
								<MagneticButton>
									<Button size="lg" variant="outline">
										Start Free Trial
									</Button>
								</MagneticButton>
							</div>
						</RevealOnScroll>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
