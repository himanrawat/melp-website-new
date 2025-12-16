"use client";

import { useState } from "react";
import { ChevronDown, Users, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutFormData } from "@/app/checkout/page";
import { PricingPlan } from "@/data/pricing";
import { motion } from "framer-motion";

interface SubscriptionStepProps {
	formData: CheckoutFormData;
	updateFormData: (updates: Partial<CheckoutFormData>) => void;
	nextStep: () => void;
	allPlans: PricingPlan[];
	onEnterpriseSelect?: () => void;
}

export default function SubscriptionStep({
	formData,
	updateFormData,
	nextStep,
	allPlans,
	onEnterpriseSelect,
}: SubscriptionStepProps) {
	const [errors, setErrors] = useState<Record<string, string>>({});

	const selectedPlan = allPlans.find((p) => p.id === formData.planId);
	const isEnterprisePlan = selectedPlan?.id === "enterprise";

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (isEnterprisePlan && onEnterpriseSelect) {
			onEnterpriseSelect();
			return;
		}

		if (formData.numberOfUsers < 1) {
			setErrors({ numberOfUsers: "Select at least 1 user" });
			return;
		}
		nextStep();
	};

	return (
		<form onSubmit={handleSubmit}>
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<h2 className="text-xl font-semibold text-foreground mb-1">
					Configure your plan
				</h2>
				<p className="text-sm text-muted-foreground mb-6">
					Set the number of users and billing preferences.
				</p>
			</motion.div>

			{/* Selected Plan Display */}
			{selectedPlan && (
				<motion.div
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.05 }}
					className="mb-5 p-4 rounded-lg border bg-muted/30"
				>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
								<Sparkles className="w-4 h-4 text-primary" />
							</div>
							<div>
								<p className="text-sm font-medium text-foreground">
									{selectedPlan.name} Plan
								</p>
								<p className="text-xs text-muted-foreground">
									{selectedPlan.description}
								</p>
							</div>
						</div>
						{selectedPlan.popular && (
							<span className="text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded font-medium">
								Popular
							</span>
						)}
					</div>
				</motion.div>
			)}

			{/* Enterprise Message */}
			{isEnterprisePlan && (
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "auto" }}
					className="mb-5 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20"
				>
					<p className="text-sm text-foreground">
						Enterprise includes custom pricing and dedicated support.
					</p>
					<p className="text-xs text-muted-foreground mt-1">
						Click continue to speak with our team.
					</p>
				</motion.div>
			)}

			{/* Number of Users */}
			{!isEnterprisePlan && (
				<motion.div
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="mb-5"
				>
					<label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
						<Users className="w-4 h-4 text-muted-foreground" />
						Number of users
					</label>
					<div className="flex items-center gap-3">
						<div className="relative">
							<motion.button
								type="button"
								whileTap={{ scale: 0.95 }}
								onClick={() =>
									updateFormData({
										numberOfUsers: Math.max(1, formData.numberOfUsers - 1),
									})
								}
								className="w-9 h-9 rounded-lg border bg-background flex items-center justify-center text-foreground hover:bg-muted transition-colors"
							>
								-
							</motion.button>
						</div>
						<input
							type="number"
							min={1}
							max={500}
							value={formData.numberOfUsers}
							onChange={(e) =>
								updateFormData({
									numberOfUsers: parseInt(e.target.value) || 1,
								})
							}
							className="w-16 rounded-lg border bg-background px-3 py-2 text-foreground text-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
						/>
						<motion.button
							type="button"
							whileTap={{ scale: 0.95 }}
							onClick={() =>
								updateFormData({
									numberOfUsers: Math.min(500, formData.numberOfUsers + 1),
								})
							}
							className="w-9 h-9 rounded-lg border bg-background flex items-center justify-center text-foreground hover:bg-muted transition-colors"
						>
							+
						</motion.button>
						<span className="text-xs text-muted-foreground">
							user{formData.numberOfUsers !== 1 ? "s" : ""}
						</span>
					</div>
					{errors.numberOfUsers && (
						<p className="mt-1.5 text-xs text-red-500">{errors.numberOfUsers}</p>
					)}
				</motion.div>
			)}

			{/* Subscription Length */}
			{!isEnterprisePlan && (
				<motion.div
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.15 }}
					className="mb-5"
				>
					<label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
						<Calendar className="w-4 h-4 text-muted-foreground" />
						Subscription length
					</label>
					<div className="flex gap-2">
						<motion.button
							type="button"
							whileHover={{ scale: 1.01 }}
							whileTap={{ scale: 0.99 }}
							onClick={() => updateFormData({ subscriptionLength: "1-year" })}
							className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm transition-all duration-150
								${
									formData.subscriptionLength === "1-year"
										? "border-primary bg-primary/5 text-foreground"
										: "border-border text-muted-foreground hover:border-muted-foreground/50"
								}
							`}
						>
							<span className="font-medium">Annual</span>
							{selectedPlan?.discount && (
								<span className="text-[10px] font-medium text-green-600 dark:text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">
									{selectedPlan.discount}
								</span>
							)}
						</motion.button>
						<motion.button
							type="button"
							whileHover={{ scale: 1.01 }}
							whileTap={{ scale: 0.99 }}
							onClick={() => updateFormData({ subscriptionLength: "1-month" })}
							className={`px-4 py-2.5 rounded-lg border text-sm transition-all duration-150
								${
									formData.subscriptionLength === "1-month"
										? "border-primary bg-primary/5 text-foreground"
										: "border-border text-muted-foreground hover:border-muted-foreground/50"
								}
							`}
						>
							<span className="font-medium">Monthly</span>
						</motion.button>
					</div>
				</motion.div>
			)}

			{/* Billing Frequency */}
			{!isEnterprisePlan && (
				<motion.div
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mb-6"
				>
					<label className="block text-sm font-medium text-foreground mb-2">
						Payment schedule
					</label>
					<div className="relative w-40">
						<select
							value={formData.billingFrequency}
							onChange={(e) =>
								updateFormData({
									billingFrequency: e.target
										.value as CheckoutFormData["billingFrequency"],
								})
							}
							className="w-full appearance-none rounded-lg border bg-background px-3 py-2.5 pr-9 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
						>
							<option value="yearly">Pay yearly</option>
							<option value="monthly">Pay monthly</option>
						</select>
						<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
					</div>
				</motion.div>
			)}

			{/* Submit Button */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.25 }}
			>
				<Button type="submit" size="default" className="h-10">
					{isEnterprisePlan ? "Contact Sales" : "Continue"}
				</Button>
			</motion.div>
		</form>
	);
}
