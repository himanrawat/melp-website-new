"use client";

import { useState } from "react";
import { Mail, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutFormData } from "@/app/checkout/page";
import { PricingPlan } from "@/data/pricing";
import { motion } from "framer-motion";

interface EmailStepProps {
	formData: CheckoutFormData;
	updateFormData: (updates: Partial<CheckoutFormData>) => void;
	nextStep: () => void;
	prevStep: () => void;
	allPlans: PricingPlan[];
}

export default function EmailStep({
	formData,
	updateFormData,
	nextStep,
	prevStep,
}: EmailStepProps) {
	const [error, setError] = useState("");
	const [showConfirmation, setShowConfirmation] = useState(false);

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.email.trim()) {
			setError("Email is required");
			return;
		}

		if (!validateEmail(formData.email)) {
			setError("Enter a valid email address");
			return;
		}

		setError("");
		setShowConfirmation(true);
	};

	const handleConfirm = () => {
		nextStep();
	};

	const handleChangeEmail = () => {
		setShowConfirmation(false);
	};

	if (showConfirmation) {
		return (
			<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
				<h2 className="text-xl font-semibold text-foreground mb-1">
					Confirm your email
				</h2>
				<p className="text-sm text-muted-foreground mb-5">
					We&apos;ll create a new account for you.
				</p>

				<div className="p-4 rounded-lg bg-muted/30 border mb-5">
					<div className="flex items-center gap-3">
						<div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
							<Mail className="w-4 h-4 text-primary" />
						</div>
						<div>
							<p className="text-xs text-muted-foreground">Continue as</p>
							<p className="text-sm font-medium text-foreground">
								{formData.email}
							</p>
						</div>
					</div>
				</div>

				<div className="flex gap-2">
					<Button onClick={handleConfirm} className="h-10 gap-2">
						Continue
						<ArrowRight className="w-3.5 h-3.5" />
					</Button>
					<Button
						variant="outline"
						onClick={handleChangeEmail}
						className="h-10"
					>
						Change email
					</Button>
				</div>
			</motion.div>
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
				<h2 className="text-xl font-semibold text-foreground mb-1">
					Your email
				</h2>
				<p className="text-sm text-muted-foreground mb-5">
					We&apos;ll use this to set up your account.
				</p>
			</motion.div>

			{/* Email Input */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.05 }}
				className="mb-5"
			>
				<label className="block text-sm font-medium text-foreground mb-1.5">
					Work email
				</label>
				<div className="relative max-w-sm">
					<input
						type="email"
						value={formData.email}
						onChange={(e) => {
							updateFormData({ email: e.target.value });
							if (error) setError("");
						}}
						placeholder="you@company.com"
						className={`w-full rounded-lg border bg-background px-3 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all
							${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
						`}
					/>
					{error ? (
						<AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-red-500" />
					) : (
						<Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					)}
				</div>
				{error && (
					<motion.p
						initial={{ opacity: 0, y: -4 }}
						animate={{ opacity: 1, y: 0 }}
						className="mt-1.5 text-xs text-red-500"
					>
						{error}
					</motion.p>
				)}
			</motion.div>

			{/* Action Buttons */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="flex gap-2"
			>
				<Button type="submit" className="h-10">
					Continue
				</Button>
				<Button
					type="button"
					variant="outline"
					onClick={prevStep}
					className="h-10"
				>
					Back
				</Button>
			</motion.div>
		</form>
	);
}
