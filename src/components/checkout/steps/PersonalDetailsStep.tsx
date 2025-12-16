"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutFormData } from "@/app/checkout/page";
import { PricingPlan } from "@/data/pricing";
import { motion } from "framer-motion";

interface PersonalDetailsStepProps {
	formData: CheckoutFormData;
	updateFormData: (updates: Partial<CheckoutFormData>) => void;
	nextStep: () => void;
	prevStep: () => void;
	allPlans: PricingPlan[];
}

const companySizeOptions = [
	"1-9 employees",
	"10-49 employees",
	"50-249 employees",
	"250-999 employees",
	"1000+ employees",
];

const countries = [
	"India",
	"United States",
	"United Kingdom",
	"Canada",
	"Australia",
	"Germany",
	"France",
	"Japan",
	"Singapore",
	"Other",
];

const indianStates = [
	"Andhra Pradesh",
	"Delhi",
	"Gujarat",
	"Karnataka",
	"Maharashtra",
	"Tamil Nadu",
	"Telangana",
	"Uttar Pradesh",
	"West Bengal",
	"Other",
];

export default function PersonalDetailsStep({
	formData,
	updateFormData,
	nextStep,
	prevStep,
}: PersonalDetailsStepProps) {
	const [errors, setErrors] = useState<Record<string, string>>({});

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (!formData.firstName.trim()) newErrors.firstName = "Required";
		if (!formData.surname.trim()) newErrors.surname = "Required";
		if (!formData.companyName.trim()) newErrors.companyName = "Required";
		if (!formData.companySize) newErrors.companySize = "Required";
		if (!formData.businessPhone.trim()) newErrors.businessPhone = "Required";
		if (!formData.jobTitle.trim()) newErrors.jobTitle = "Required";
		if (!formData.addressLine1.trim()) newErrors.addressLine1 = "Required";
		if (!formData.townCity.trim()) newErrors.townCity = "Required";
		if (!formData.state.trim()) newErrors.state = "Required";
		if (!formData.postcode.trim()) newErrors.postcode = "Required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			nextStep();
		}
	};

	const inputClassName = (fieldName: string) =>
		`w-full rounded-lg border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all
		${errors[fieldName] ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`;

	const labelClassName = "block text-xs font-medium text-foreground mb-1";

	return (
		<form onSubmit={handleSubmit}>
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<h2 className="text-xl font-semibold text-foreground mb-1">
					Your details
				</h2>
				<p className="text-sm text-muted-foreground mb-5">
					Tell us about yourself and your company.
				</p>
			</motion.div>

			{/* Personal Info Section */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.05 }}
				className="space-y-3 mb-5"
			>
				<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
					Personal
				</p>

				<div className="grid grid-cols-2 gap-3">
					<div>
						<label className={labelClassName}>
							First name <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							value={formData.firstName}
							onChange={(e) => updateFormData({ firstName: e.target.value })}
							className={inputClassName("firstName")}
						/>
						{errors.firstName && (
							<p className="mt-0.5 text-[10px] text-red-500">
								{errors.firstName}
							</p>
						)}
					</div>
					<div>
						<label className={labelClassName}>
							Surname <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							value={formData.surname}
							onChange={(e) => updateFormData({ surname: e.target.value })}
							className={inputClassName("surname")}
						/>
						{errors.surname && (
							<p className="mt-0.5 text-[10px] text-red-500">{errors.surname}</p>
						)}
					</div>
				</div>

				<div>
					<label className={labelClassName}>
						Job title <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						value={formData.jobTitle}
						onChange={(e) => updateFormData({ jobTitle: e.target.value })}
						className={inputClassName("jobTitle")}
						placeholder="e.g. Product Manager"
					/>
					{errors.jobTitle && (
						<p className="mt-0.5 text-[10px] text-red-500">{errors.jobTitle}</p>
					)}
				</div>

				<div>
					<label className={labelClassName}>
						Phone <span className="text-red-500">*</span>
					</label>
					<input
						type="tel"
						value={formData.businessPhone}
						onChange={(e) => updateFormData({ businessPhone: e.target.value })}
						className={inputClassName("businessPhone")}
						placeholder="+91 98765 43210"
					/>
					{errors.businessPhone && (
						<p className="mt-0.5 text-[10px] text-red-500">
							{errors.businessPhone}
						</p>
					)}
				</div>
			</motion.div>

			{/* Company Info Section */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="space-y-3 mb-5"
			>
				<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
					Company
				</p>

				<div className="grid grid-cols-2 gap-3">
					<div>
						<label className={labelClassName}>
							Company name <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							value={formData.companyName}
							onChange={(e) => updateFormData({ companyName: e.target.value })}
							className={inputClassName("companyName")}
						/>
						{errors.companyName && (
							<p className="mt-0.5 text-[10px] text-red-500">
								{errors.companyName}
							</p>
						)}
					</div>
					<div>
						<label className={labelClassName}>
							Size <span className="text-red-500">*</span>
						</label>
						<div className="relative">
							<select
								value={formData.companySize}
								onChange={(e) => updateFormData({ companySize: e.target.value })}
								className={`${inputClassName("companySize")} appearance-none pr-8`}
							>
								<option value="">Select</option>
								{companySizeOptions.map((size) => (
									<option key={size} value={size}>
										{size}
									</option>
								))}
							</select>
							<ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
						</div>
						{errors.companySize && (
							<p className="mt-0.5 text-[10px] text-red-500">
								{errors.companySize}
							</p>
						)}
					</div>
				</div>
			</motion.div>

			{/* Address Section */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.15 }}
				className="space-y-3 mb-5"
			>
				<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
					Address
				</p>

				<div>
					<label className={labelClassName}>
						Street address <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						value={formData.addressLine1}
						onChange={(e) => updateFormData({ addressLine1: e.target.value })}
						className={inputClassName("addressLine1")}
						placeholder="123 Main Street"
					/>
					{errors.addressLine1 && (
						<p className="mt-0.5 text-[10px] text-red-500">
							{errors.addressLine1}
						</p>
					)}
				</div>

				<div>
					<label className={labelClassName}>Apt, suite, etc. (optional)</label>
					<input
						type="text"
						value={formData.addressLine2}
						onChange={(e) => updateFormData({ addressLine2: e.target.value })}
						className="w-full rounded-lg border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
					/>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div>
						<label className={labelClassName}>
							City <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							value={formData.townCity}
							onChange={(e) => updateFormData({ townCity: e.target.value })}
							className={inputClassName("townCity")}
						/>
						{errors.townCity && (
							<p className="mt-0.5 text-[10px] text-red-500">
								{errors.townCity}
							</p>
						)}
					</div>
					<div>
						<label className={labelClassName}>
							State <span className="text-red-500">*</span>
						</label>
						<div className="relative">
							<select
								value={formData.state}
								onChange={(e) => updateFormData({ state: e.target.value })}
								className={`${inputClassName("state")} appearance-none pr-8`}
							>
								<option value="">Select</option>
								{indianStates.map((state) => (
									<option key={state} value={state}>
										{state}
									</option>
								))}
							</select>
							<ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
						</div>
						{errors.state && (
							<p className="mt-0.5 text-[10px] text-red-500">{errors.state}</p>
						)}
					</div>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div>
						<label className={labelClassName}>
							Postcode <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							value={formData.postcode}
							onChange={(e) => updateFormData({ postcode: e.target.value })}
							className={inputClassName("postcode")}
						/>
						{errors.postcode && (
							<p className="mt-0.5 text-[10px] text-red-500">
								{errors.postcode}
							</p>
						)}
					</div>
					<div>
						<label className={labelClassName}>Country</label>
						<div className="relative">
							<select
								value={formData.country}
								onChange={(e) => updateFormData({ country: e.target.value })}
								className="w-full rounded-lg border bg-background px-3 py-2 text-sm appearance-none pr-8 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
							>
								{countries.map((country) => (
									<option key={country} value={country}>
										{country}
									</option>
								))}
							</select>
							<ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
						</div>
					</div>
				</div>
			</motion.div>

			{/* Marketing Consent */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="space-y-2 mb-5"
			>
				<label className="flex items-start gap-2 cursor-pointer group">
					<input
						type="checkbox"
						checked={formData.acceptMarketing}
						onChange={(e) =>
							updateFormData({ acceptMarketing: e.target.checked })
						}
						className="mt-0.5 w-3.5 h-3.5 text-primary border-muted-foreground rounded focus:ring-primary"
					/>
					<span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
						Send me product updates and tips
					</span>
				</label>
			</motion.div>

			{/* Terms */}
			<motion.p
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.25 }}
				className="text-[10px] text-muted-foreground mb-5"
			>
				By continuing, you agree to our{" "}
				<a href="#" className="text-primary hover:underline">
					Terms
				</a>{" "}
				and{" "}
				<a href="#" className="text-primary hover:underline">
					Privacy Policy
				</a>
				.
			</motion.p>

			{/* Action Buttons */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
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
