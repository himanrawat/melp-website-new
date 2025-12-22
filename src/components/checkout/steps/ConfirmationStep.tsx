"use client";

import {
	CheckCircle2,
	Mail,
	Download,
	Rocket,
	Copy,
	Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutFormData } from "@/app/checkout/page";
import { PricingPlan } from "@/data/pricing";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

interface ConfirmationStepProps {
	formData: CheckoutFormData;
	selectedPlan: PricingPlan | null;
}

export default function ConfirmationStep({
	formData,
	selectedPlan,
}: ConfirmationStepProps) {
	const [copied, setCopied] = useState(false);
	const signInEmail = `${formData.username}@${formData.domainName}.melp.com`;

	const handleCopy = async () => {
		await navigator.clipboard.writeText(signInEmail);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="py-4">
			{/* Success Animation */}
			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
				className="mb-6 flex justify-center"
			>
				<div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.3, type: "spring" }}
					>
						<CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
					</motion.div>
				</div>
			</motion.div>

			{/* Success Message */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="text-center mb-6"
			>
				<h2 className="text-xl font-semibold text-foreground mb-1">
					You&apos;re all set!
				</h2>
				<p className="text-sm text-muted-foreground">
					Your {selectedPlan?.name} subscription is now active.
				</p>
			</motion.div>

			{/* Sign-in Info Card */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="p-4 rounded-lg bg-primary/5 border border-primary/10 mb-6"
			>
				<p className="text-xs text-muted-foreground mb-1">Your sign-in</p>
				<div className="flex items-center justify-between gap-2">
					<p className="text-sm font-medium text-foreground break-all">
						{signInEmail}
					</p>
					<motion.button
						whileTap={{ scale: 0.95 }}
						onClick={handleCopy}
						className="p-1.5 rounded-md hover:bg-muted transition-colors shrink-0"
						title="Copy to clipboard"
					>
						{copied ? (
							<Check className="w-4 h-4 text-green-500" />
						) : (
							<Copy className="w-4 h-4 text-muted-foreground" />
						)}
					</motion.button>
				</div>
			</motion.div>

			{/* Order Summary */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.35 }}
				className="p-4 rounded-lg bg-muted/30 border mb-6"
			>
				<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
					Order details
				</p>
				<div className="space-y-2 text-sm">
					<div className="flex justify-between">
						<span className="text-muted-foreground">Plan</span>
						<span className="font-medium text-foreground">
							{selectedPlan?.name}
						</span>
					</div>
					<div className="flex justify-between">
						<span className="text-muted-foreground">Users</span>
						<span className="font-medium text-foreground">
							{formData.numberOfUsers}
						</span>
					</div>
					<div className="flex justify-between">
						<span className="text-muted-foreground">Billing</span>
						<span className="font-medium text-foreground">
							{formData.subscriptionLength === "1-year" ? "Annual" : "Monthly"}
						</span>
					</div>
				</div>
			</motion.div>

			{/* Next Steps */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4 }}
				className="space-y-3 mb-6"
			>
				<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
					Next steps
				</p>

				{[
					{
						icon: Mail,
						title: "Check your email",
						desc: `Confirmation sent to ${formData.email}`,
					},
					{
						icon: Download,
						title: "Get the app",
						desc: "Download Melp for desktop and mobile",
					},
					{
						icon: Rocket,
						title: "Start collaborating",
						desc: "Invite your team and get started",
					},
				].map((item, index) => (
					<motion.div
						key={item.title}
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.45 + index * 0.05 }}
						className="flex items-start gap-3 p-3 rounded-lg bg-card border hover:border-primary/20 transition-colors group cursor-default"
					>
						<div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
							<item.icon className="w-4 h-4 text-primary" />
						</div>
						<div>
							<p className="text-sm font-medium text-foreground">
								{item.title}
							</p>
							<p className="text-xs text-muted-foreground">{item.desc}</p>
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* Action Buttons */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
				className="flex gap-2"
			>
				<Button asChild className="h-10">
					<Link href="/">Go to Dashboard</Link>
				</Button>
				<Button variant="outline" asChild className="h-10">
					<Link href="/">Home</Link>
				</Button>
			</motion.div>
		</div>
	);
}
