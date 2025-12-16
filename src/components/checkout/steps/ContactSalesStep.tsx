"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Send,
	CheckCircle2,
	Building2,
	Mail,
	Phone,
	User,
	MessageSquare,
	Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutFormData } from "@/app/checkout/page";
import { PricingPlan } from "@/data/pricing";
import Link from "next/link";

interface ContactSalesStepProps {
	formData: CheckoutFormData;
	updateFormData: (updates: Partial<CheckoutFormData>) => void;
	selectedPlan: PricingPlan | null;
}

interface ContactFormData {
	fullName: string;
	workEmail: string;
	companyName: string;
	phoneNumber: string;
	employeeCount: string;
	message: string;
}

const employeeCountOptions = ["500-1K", "1K-5K", "5K-10K", "10K+"];

export default function ContactSalesStep({
	formData,
	updateFormData,
}: ContactSalesStepProps) {
	const [contactForm, setContactForm] = useState<ContactFormData>({
		fullName: formData.firstName
			? `${formData.firstName} ${formData.surname}`
			: "",
		workEmail: formData.email || "",
		companyName: formData.companyName || "",
		phoneNumber: formData.businessPhone || "",
		employeeCount: "",
		message: "",
	});
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (!contactForm.fullName.trim()) newErrors.fullName = "Required";
		if (!contactForm.workEmail.trim()) {
			newErrors.workEmail = "Required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.workEmail)) {
			newErrors.workEmail = "Invalid email";
		}
		if (!contactForm.companyName.trim()) newErrors.companyName = "Required";
		if (!contactForm.employeeCount) newErrors.employeeCount = "Required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;

		setIsSubmitting(true);
		await new Promise((resolve) => setTimeout(resolve, 1500));

		updateFormData({
			firstName: contactForm.fullName.split(" ")[0],
			surname: contactForm.fullName.split(" ").slice(1).join(" "),
			email: contactForm.workEmail,
			companyName: contactForm.companyName,
			businessPhone: contactForm.phoneNumber,
		});

		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	const inputClassName = (fieldName: string) =>
		`w-full rounded-lg border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all
		${errors[fieldName] ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`;

	// Success State
	if (isSubmitted) {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.98 }}
				animate={{ opacity: 1, scale: 1 }}
				className="py-4"
			>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
					className="mb-6 flex justify-center"
				>
					<div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
						<CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="text-center mb-6"
				>
					<h2 className="text-xl font-semibold text-foreground mb-1">
						Request received!
					</h2>
					<p className="text-sm text-muted-foreground">
						Our team will contact you within 24 hours.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="p-4 rounded-lg bg-muted/30 border mb-6"
				>
					<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
						What&apos;s next
					</p>
					<div className="space-y-3">
						{[
							{ step: "1", text: "Sales team reviews your request" },
							{ step: "2", text: "Personalized demo scheduled" },
							{ step: "3", text: "Custom proposal delivered" },
						].map((item, index) => (
							<motion.div
								key={item.step}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.35 + index * 0.05 }}
								className="flex items-center gap-3"
							>
								<div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
									<span className="text-[10px] font-semibold text-primary">
										{item.step}
									</span>
								</div>
								<span className="text-sm text-foreground">{item.text}</span>
							</motion.div>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="text-center"
				>
					<p className="text-xs text-muted-foreground mb-4">
						Need help now?{" "}
						<a
							href="mailto:enterprise@melp.com"
							className="text-primary hover:underline"
						>
							enterprise@melp.com
						</a>
					</p>
					<Button asChild className="h-10">
						<Link href="/">Return Home</Link>
					</Button>
				</motion.div>
			</motion.div>
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<h2 className="text-xl font-semibold text-foreground mb-1">
					Contact sales
				</h2>
				<p className="text-sm text-muted-foreground mb-5">
					Let&apos;s discuss enterprise solutions for your team.
				</p>
			</motion.div>

			{/* Form Fields */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.05 }}
				className="space-y-3 mb-5"
			>
				{/* Name & Email */}
				<div className="grid grid-cols-2 gap-3">
					<div>
						<label className="block text-xs font-medium text-foreground mb-1">
							Full name <span className="text-red-500">*</span>
						</label>
						<div className="relative">
							<User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
							<input
								type="text"
								value={contactForm.fullName}
								onChange={(e) =>
									setContactForm({ ...contactForm, fullName: e.target.value })
								}
								placeholder="John Smith"
								className={`${inputClassName("fullName")} pl-8`}
							/>
						</div>
						{errors.fullName && (
							<p className="mt-0.5 text-[10px] text-red-500">
								{errors.fullName}
							</p>
						)}
					</div>
					<div>
						<label className="block text-xs font-medium text-foreground mb-1">
							Work email <span className="text-red-500">*</span>
						</label>
						<div className="relative">
							<Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
							<input
								type="email"
								value={contactForm.workEmail}
								onChange={(e) =>
									setContactForm({ ...contactForm, workEmail: e.target.value })
								}
								placeholder="john@company.com"
								className={`${inputClassName("workEmail")} pl-8`}
							/>
						</div>
						{errors.workEmail && (
							<p className="mt-0.5 text-[10px] text-red-500">
								{errors.workEmail}
							</p>
						)}
					</div>
				</div>

				{/* Company & Phone */}
				<div className="grid grid-cols-2 gap-3">
					<div>
						<label className="block text-xs font-medium text-foreground mb-1">
							Company <span className="text-red-500">*</span>
						</label>
						<div className="relative">
							<Building2 className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
							<input
								type="text"
								value={contactForm.companyName}
								onChange={(e) =>
									setContactForm({
										...contactForm,
										companyName: e.target.value,
									})
								}
								placeholder="Acme Inc."
								className={`${inputClassName("companyName")} pl-8`}
							/>
						</div>
						{errors.companyName && (
							<p className="mt-0.5 text-[10px] text-red-500">
								{errors.companyName}
							</p>
						)}
					</div>
					<div>
						<label className="block text-xs font-medium text-foreground mb-1">
							Phone (optional)
						</label>
						<div className="relative">
							<Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
							<input
								type="tel"
								value={contactForm.phoneNumber}
								onChange={(e) =>
									setContactForm({
										...contactForm,
										phoneNumber: e.target.value,
									})
								}
								placeholder="+1 555 000 0000"
								className={`${inputClassName("phoneNumber")} pl-8`}
							/>
						</div>
					</div>
				</div>

				{/* Employee Count */}
				<div>
					<label className="block text-xs font-medium text-foreground mb-1.5">
						Team size <span className="text-red-500">*</span>
					</label>
					<div className="flex gap-2">
						{employeeCountOptions.map((option) => (
							<motion.button
								key={option}
								type="button"
								whileTap={{ scale: 0.98 }}
								onClick={() =>
									setContactForm({ ...contactForm, employeeCount: option })
								}
								className={`flex-1 px-3 py-2 rounded-lg border text-xs font-medium transition-all
									${
										contactForm.employeeCount === option
											? "border-primary bg-primary/5 text-primary"
											: "border-border text-muted-foreground hover:border-muted-foreground/50"
									}`}
							>
								{option}
							</motion.button>
						))}
					</div>
					{errors.employeeCount && (
						<p className="mt-0.5 text-[10px] text-red-500">
							{errors.employeeCount}
						</p>
					)}
				</div>

				{/* Message */}
				<div>
					<label className="block text-xs font-medium text-foreground mb-1">
						Message (optional)
					</label>
					<div className="relative">
						<MessageSquare className="absolute left-2.5 top-2.5 w-4 h-4 text-muted-foreground" />
						<textarea
							value={contactForm.message}
							onChange={(e) =>
								setContactForm({ ...contactForm, message: e.target.value })
							}
							placeholder="Tell us about your needs..."
							rows={3}
							className={`${inputClassName("message")} pl-8 resize-none`}
						/>
					</div>
				</div>
			</motion.div>

			{/* Privacy Note */}
			<motion.p
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="text-[10px] text-muted-foreground mb-5"
			>
				By submitting, you agree to our{" "}
				<a href="#" className="text-primary hover:underline">
					Privacy Policy
				</a>
				.
			</motion.p>

			{/* Submit Button */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.15 }}
			>
				<Button
					type="submit"
					className="h-10 gap-2"
					disabled={isSubmitting}
				>
					{isSubmitting ? (
						<>
							<Loader2 className="w-4 h-4 animate-spin" />
							Submitting...
						</>
					) : (
						<>
							<Send className="w-4 h-4" />
							Contact Sales
						</>
					)}
				</Button>
			</motion.div>
		</form>
	);
}
