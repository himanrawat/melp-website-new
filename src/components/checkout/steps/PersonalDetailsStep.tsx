"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
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

	return (
		<form onSubmit={handleSubmit}>
			<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
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
						<Label className="text-xs mb-1">
							First name <span className="text-destructive">*</span>
						</Label>
						<Input
							type="text"
							value={formData.firstName}
							onChange={(e) => updateFormData({ firstName: e.target.value })}
							className={errors.firstName ? "border-destructive" : ""}
						/>
						{errors.firstName && (
							<p className="mt-0.5 text-[10px] text-destructive">
								{errors.firstName}
							</p>
						)}
					</div>
					<div>
						<Label className="text-xs mb-1">
							Surname <span className="text-destructive">*</span>
						</Label>
						<Input
							type="text"
							value={formData.surname}
							onChange={(e) => updateFormData({ surname: e.target.value })}
							className={errors.surname ? "border-destructive" : ""}
						/>
						{errors.surname && (
							<p className="mt-0.5 text-[10px] text-destructive">
								{errors.surname}
							</p>
						)}
					</div>
				</div>

				<div>
					<Label className="text-xs mb-1">
						Job title <span className="text-destructive">*</span>
					</Label>
					<Input
						type="text"
						value={formData.jobTitle}
						onChange={(e) => updateFormData({ jobTitle: e.target.value })}
						className={errors.jobTitle ? "border-destructive" : ""}
						placeholder="e.g. Product Manager"
					/>
					{errors.jobTitle && (
						<p className="mt-0.5 text-[10px] text-destructive">
							{errors.jobTitle}
						</p>
					)}
				</div>

				<div>
					<Label className="text-xs mb-1">
						Phone <span className="text-destructive">*</span>
					</Label>
					<Input
						type="tel"
						value={formData.businessPhone}
						onChange={(e) => updateFormData({ businessPhone: e.target.value })}
						className={errors.businessPhone ? "border-destructive" : ""}
						placeholder="+91 98765 43210"
					/>
					{errors.businessPhone && (
						<p className="mt-0.5 text-[10px] text-destructive">
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
						<Label className="text-xs mb-1">
							Company name <span className="text-destructive">*</span>
						</Label>
						<Input
							type="text"
							value={formData.companyName}
							onChange={(e) => updateFormData({ companyName: e.target.value })}
							className={errors.companyName ? "border-destructive" : ""}
						/>
						{errors.companyName && (
							<p className="mt-0.5 text-[10px] text-destructive">
								{errors.companyName}
							</p>
						)}
					</div>
					<div>
						<Label className="text-xs mb-1">
							Size <span className="text-destructive">*</span>
						</Label>
						<Select
							value={formData.companySize}
							onValueChange={(value) => updateFormData({ companySize: value })}
						>
							<SelectTrigger
								className={errors.companySize ? "border-destructive" : ""}
							>
								<SelectValue placeholder="Select" />
							</SelectTrigger>
							<SelectContent>
								{companySizeOptions.map((size) => (
									<SelectItem key={size} value={size}>
										{size}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						{errors.companySize && (
							<p className="mt-0.5 text-[10px] text-destructive">
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
					<Label className="text-xs mb-1">
						Street address <span className="text-destructive">*</span>
					</Label>
					<Input
						type="text"
						value={formData.addressLine1}
						onChange={(e) => updateFormData({ addressLine1: e.target.value })}
						className={errors.addressLine1 ? "border-destructive" : ""}
						placeholder="123 Main Street"
					/>
					{errors.addressLine1 && (
						<p className="mt-0.5 text-[10px] text-destructive">
							{errors.addressLine1}
						</p>
					)}
				</div>

				<div>
					<Label className="text-xs mb-1">Apt, suite, etc. (optional)</Label>
					<Input
						type="text"
						value={formData.addressLine2}
						onChange={(e) => updateFormData({ addressLine2: e.target.value })}
					/>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div>
						<Label className="text-xs mb-1">
							City <span className="text-destructive">*</span>
						</Label>
						<Input
							type="text"
							value={formData.townCity}
							onChange={(e) => updateFormData({ townCity: e.target.value })}
							className={errors.townCity ? "border-destructive" : ""}
						/>
						{errors.townCity && (
							<p className="mt-0.5 text-[10px] text-destructive">
								{errors.townCity}
							</p>
						)}
					</div>
					<div>
						<Label className="text-xs mb-1">
							State <span className="text-destructive">*</span>
						</Label>
						<Select
							value={formData.state}
							onValueChange={(value) => updateFormData({ state: value })}
						>
							<SelectTrigger
								className={errors.state ? "border-destructive" : ""}
							>
								<SelectValue placeholder="Select" />
							</SelectTrigger>
							<SelectContent>
								{indianStates.map((state) => (
									<SelectItem key={state} value={state}>
										{state}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						{errors.state && (
							<p className="mt-0.5 text-[10px] text-destructive">
								{errors.state}
							</p>
						)}
					</div>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div>
						<Label className="text-xs mb-1">
							Postcode <span className="text-destructive">*</span>
						</Label>
						<Input
							type="text"
							value={formData.postcode}
							onChange={(e) => updateFormData({ postcode: e.target.value })}
							className={errors.postcode ? "border-destructive" : ""}
						/>
						{errors.postcode && (
							<p className="mt-0.5 text-[10px] text-destructive">
								{errors.postcode}
							</p>
						)}
					</div>
					<div>
						<Label className="text-xs mb-1">Country</Label>
						<Select
							value={formData.country}
							onValueChange={(value) => updateFormData({ country: value })}
						>
							<SelectTrigger>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{countries.map((country) => (
									<SelectItem key={country} value={country}>
										{country}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
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
					<Checkbox
						checked={formData.acceptMarketing}
						onCheckedChange={(checked) =>
							updateFormData({ acceptMarketing: checked === true })
						}
						className="mt-0.5"
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
