"use client";

import { useState } from "react";
import { Users, Calendar, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { CheckoutFormData } from "@/app/checkout/page";
import { PricingPlan } from "@/data/pricing";
import { motion } from "motion/react";

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
			<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
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
							{/* <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
								<Sparkles className="w-4 h-4 text-primary" />
							</div> */}
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
					<Label className="flex items-center gap-2 mb-2">
						<Users className="w-4 h-4 text-muted-foreground" />
						Number of users
					</Label>
					<div className="flex items-center gap-3">
						<Button
							type="button"
							variant="outline"
							size="icon"
							onClick={() =>
								updateFormData({
									numberOfUsers: Math.max(1, formData.numberOfUsers - 1),
								})
							}
							className="h-10 w-10 shrink-0"
						>
							<Minus className="h-4 w-4" />
						</Button>
						<Input
							type="number"
							min={1}
							max={500}
							value={formData.numberOfUsers}
							onChange={(e) =>
								updateFormData({
									numberOfUsers: parseInt(e.target.value) || 1,
								})
							}
							className="w-20 text-center h-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						/>
						<Button
							type="button"
							variant="outline"
							size="icon"
							onClick={() =>
								updateFormData({
									numberOfUsers: Math.min(500, formData.numberOfUsers + 1),
								})
							}
							className="h-10 w-10 shrink-0"
						>
							<Plus className="h-4 w-4" />
						</Button>
						<span className="text-xs text-muted-foreground">
							user{formData.numberOfUsers !== 1 ? "s" : ""}
						</span>
					</div>
					{errors.numberOfUsers && (
						<p className="mt-1.5 text-xs text-destructive">
							{errors.numberOfUsers}
						</p>
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
					<Label className="flex items-center gap-2 mb-3">
						<Calendar className="w-4 h-4 text-muted-foreground" />
						Subscription length
					</Label>
					<RadioGroup
						value={formData.subscriptionLength}
						onValueChange={(value: CheckoutFormData["subscriptionLength"]) =>
							updateFormData({ subscriptionLength: value })
						}
						className="grid grid-cols-2 gap-3"
					>
						<Label
							htmlFor="annual"
							className={`flex items-center justify-between gap-2 p-3 rounded-lg border cursor-pointer transition-all
								${
									formData.subscriptionLength === "1-year"
										? "border-primary bg-primary/5 text-foreground"
										: "border-border hover:border-muted-foreground/50"
								}
							`}
						>
							<div className="flex items-center gap-2">
								<RadioGroupItem value="1-year" id="annual" />
								<span className="font-medium text-sm">Annual</span>
							</div>
							{selectedPlan?.discount && (
								<span className="text-[10px] font-medium text-green-600 dark:text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">
									{selectedPlan.discount}
								</span>
							)}
						</Label>
						<Label
							htmlFor="monthly"
							className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all
								${
									formData.subscriptionLength === "1-month"
										? "border-primary bg-primary/5 text-foreground"
										: "border-border hover:border-muted-foreground/50"
								}
							`}
						>
							<RadioGroupItem value="1-month" id="monthly" />
							<span className="font-medium text-sm">Monthly</span>
						</Label>
					</RadioGroup>
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
					<Label className="mb-2">Payment schedule</Label>
					<Select
						value={formData.billingFrequency}
						onValueChange={(value: CheckoutFormData["billingFrequency"]) =>
							updateFormData({ billingFrequency: value })
						}
					>
						<SelectTrigger className="w-40 h-10">
							<SelectValue placeholder="Select payment schedule" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="yearly">Pay yearly</SelectItem>
							<SelectItem value="monthly">Pay monthly</SelectItem>
						</SelectContent>
					</Select>
				</motion.div>
			)}

			{/* Submit Button */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.25 }}
			>
				<Button variant="brand-primary" type="submit" size="default" className="h-10">
					{isEnterprisePlan ? "Contact Sales" : "Continue"}
				</Button>
			</motion.div>
		</form>
	);
}
