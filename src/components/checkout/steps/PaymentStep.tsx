"use client";

import { useState, useEffect } from "react";
import { ChevronDown, CreditCard, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutFormData } from "@/app/checkout/page";
import { PricingPlan } from "@/data/pricing";
import { motion } from "framer-motion";

interface PaymentStepProps {
	formData: CheckoutFormData;
	updateFormData: (updates: Partial<CheckoutFormData>) => void;
	nextStep: () => void;
	prevStep: () => void;
	allPlans: PricingPlan[];
}

const months = [
	"01",
	"02",
	"03",
	"04",
	"05",
	"06",
	"07",
	"08",
	"09",
	"10",
	"11",
	"12",
];

const years = Array.from({ length: 15 }, (_, i) =>
	(new Date().getFullYear() + i).toString()
);

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

export default function PaymentStep({
	formData,
	updateFormData,
	nextStep,
	prevStep,
}: PaymentStepProps) {
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [isProcessing, setIsProcessing] = useState(false);

	// Pre-fill billing address from personal details
	useEffect(() => {
		if (!formData.billingAddressLine1 && formData.addressLine1) {
			updateFormData({
				billingAddressLine1: formData.addressLine1,
				billingAddressLine2: formData.addressLine2,
				billingTownCity: formData.townCity,
				billingState: formData.state,
				billingPostcode: formData.postcode,
				billingCountry: formData.country,
				nameOnCard: `${formData.firstName} ${formData.surname}`,
			});
		}
	}, []);

	const formatCardNumber = (value: string) => {
		const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
		const matches = v.match(/\d{4,16}/g);
		const match = (matches && matches[0]) || "";
		const parts = [];

		for (let i = 0, len = match.length; i < len; i += 4) {
			parts.push(match.substring(i, i + 4));
		}

		if (parts.length) {
			return parts.join(" ");
		} else {
			return value;
		}
	};

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		const cardNumber = formData.cardNumber.replace(/\s/g, "");
		if (!cardNumber) {
			newErrors.cardNumber = "Required";
		} else if (cardNumber.length < 13 || cardNumber.length > 19) {
			newErrors.cardNumber = "Invalid card number";
		}

		if (!formData.securityCode) {
			newErrors.securityCode = "Required";
		} else if (formData.securityCode.length < 3) {
			newErrors.securityCode = "Invalid";
		}

		if (!formData.expirationMonth) newErrors.expirationMonth = "Required";
		if (!formData.expirationYear) newErrors.expirationYear = "Required";
		if (!formData.nameOnCard.trim()) newErrors.nameOnCard = "Required";
		if (!formData.billingAddressLine1.trim())
			newErrors.billingAddressLine1 = "Required";
		if (!formData.billingTownCity.trim())
			newErrors.billingTownCity = "Required";
		if (!formData.billingState.trim()) newErrors.billingState = "Required";
		if (!formData.billingPostcode.trim())
			newErrors.billingPostcode = "Required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			setIsProcessing(true);
			await new Promise((resolve) => setTimeout(resolve, 2000));
			setIsProcessing(false);
			nextStep();
		}
	};

	const inputClassName = (fieldName: string) =>
		`w-full rounded-lg border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all
		${
			errors[fieldName]
				? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
				: ""
		}`;

	const labelClassName = "block text-xs font-medium text-foreground mb-1";

	return (
		<form onSubmit={handleSubmit}>
			<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
				<h2 className="text-xl font-semibold text-foreground mb-1">
					Payment details
				</h2>
				<p className="text-sm text-muted-foreground mb-5">
					Add your card to complete your purchase.
				</p>
			</motion.div>

			{/* Card Section */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.05 }}
				className="space-y-3 mb-5"
			>
				<div className="flex items-center justify-between">
					<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
						Card
					</p>
					<div className="flex items-center gap-2">
						<div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-white text-[8px] font-bold">
							VISA
						</div>
						<div className="w-8 h-5 bg-gradient-to-r from-red-500 to-yellow-400 rounded flex items-center justify-center">
							<div className="w-2.5 h-2.5 bg-red-600 rounded-full opacity-80" />
							<div className="w-2.5 h-2.5 bg-yellow-500 rounded-full -ml-1 opacity-80" />
						</div>
					</div>
				</div>

				{/* Card Number */}
				<div>
					<label className={labelClassName}>
						Card number <span className="text-red-500">*</span>
					</label>
					<div className="relative">
						<input
							type="text"
							value={formData.cardNumber}
							onChange={(e) =>
								updateFormData({ cardNumber: formatCardNumber(e.target.value) })
							}
							maxLength={19}
							className={`${inputClassName("cardNumber")} pr-9`}
							placeholder="1234 5678 9012 3456"
						/>
						<CreditCard className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					</div>
					{errors.cardNumber && (
						<p className="mt-0.5 text-[10px] text-red-500">
							{errors.cardNumber}
						</p>
					)}
				</div>

				{/* Expiry and CVV */}
				<div className="grid grid-cols-3 gap-3">
					<div>
						<label className={labelClassName}>
							Month <span className="text-red-500">*</span>
						</label>
						<div className="relative">
							<select
								value={formData.expirationMonth}
								onChange={(e) =>
									updateFormData({ expirationMonth: e.target.value })
								}
								className={`${inputClassName(
									"expirationMonth"
								)} appearance-none pr-7`}
							>
								<option value="">MM</option>
								{months.map((month) => (
									<option key={month} value={month}>
										{month}
									</option>
								))}
							</select>
							<ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
						</div>
					</div>
					<div>
						<label className={labelClassName}>
							Year <span className="text-red-500">*</span>
						</label>
						<div className="relative">
							<select
								value={formData.expirationYear}
								onChange={(e) =>
									updateFormData({ expirationYear: e.target.value })
								}
								className={`${inputClassName(
									"expirationYear"
								)} appearance-none pr-7`}
							>
								<option value="">YYYY</option>
								{years.map((year) => (
									<option key={year} value={year}>
										{year}
									</option>
								))}
							</select>
							<ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
						</div>
					</div>
					<div>
						<label className={labelClassName}>
							CVV <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							value={formData.securityCode}
							onChange={(e) =>
								updateFormData({
									securityCode: e.target.value.replace(/\D/g, "").slice(0, 4),
								})
							}
							maxLength={4}
							className={inputClassName("securityCode")}
							placeholder="123"
						/>
					</div>
				</div>

				{/* Name on Card */}
				<div>
					<label className={labelClassName}>
						Name on card <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						value={formData.nameOnCard}
						onChange={(e) => updateFormData({ nameOnCard: e.target.value })}
						className={inputClassName("nameOnCard")}
						placeholder="John Doe"
					/>
					{errors.nameOnCard && (
						<p className="mt-0.5 text-[10px] text-red-500">
							{errors.nameOnCard}
						</p>
					)}
				</div>
			</motion.div>

			{/* Billing Address */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="space-y-3 mb-5"
			>
				<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
					Billing address
				</p>

				<div>
					<label className={labelClassName}>
						Street address <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						value={formData.billingAddressLine1}
						onChange={(e) =>
							updateFormData({ billingAddressLine1: e.target.value })
						}
						className={inputClassName("billingAddressLine1")}
					/>
					{errors.billingAddressLine1 && (
						<p className="mt-0.5 text-[10px] text-red-500">
							{errors.billingAddressLine1}
						</p>
					)}
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div>
						<label className={labelClassName}>
							City <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							value={formData.billingTownCity}
							onChange={(e) =>
								updateFormData({ billingTownCity: e.target.value })
							}
							className={inputClassName("billingTownCity")}
						/>
						{errors.billingTownCity && (
							<p className="mt-0.5 text-[10px] text-red-500">
								{errors.billingTownCity}
							</p>
						)}
					</div>
					<div>
						<label className={labelClassName}>
							State <span className="text-red-500">*</span>
						</label>
						<div className="relative">
							<select
								value={formData.billingState}
								onChange={(e) =>
									updateFormData({ billingState: e.target.value })
								}
								className={`${inputClassName(
									"billingState"
								)} appearance-none pr-7`}
							>
								<option value="">Select</option>
								{indianStates.map((state) => (
									<option key={state} value={state}>
										{state}
									</option>
								))}
							</select>
							<ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
						</div>
						{errors.billingState && (
							<p className="mt-0.5 text-[10px] text-red-500">
								{errors.billingState}
							</p>
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
							value={formData.billingPostcode}
							onChange={(e) =>
								updateFormData({ billingPostcode: e.target.value })
							}
							className={inputClassName("billingPostcode")}
						/>
						{errors.billingPostcode && (
							<p className="mt-0.5 text-[10px] text-red-500">
								{errors.billingPostcode}
							</p>
						)}
					</div>
					<div>
						<label className={labelClassName}>Country</label>
						<div className="relative">
							<select
								value={formData.billingCountry}
								onChange={(e) =>
									updateFormData({ billingCountry: e.target.value })
								}
								className="w-full rounded-lg border bg-background px-3 py-2 text-sm appearance-none pr-7 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
							>
								{countries.map((country) => (
									<option key={country} value={country}>
										{country}
									</option>
								))}
							</select>
							<ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
						</div>
					</div>
				</div>
			</motion.div>

			{/* Security Notice */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.15 }}
				className="flex items-start gap-2 text-[10px] text-muted-foreground mb-5 p-3 rounded-lg bg-muted/30"
			>
				<Lock className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-primary" />
				<p>
					Your payment is secured with 256-bit encryption. We never store your
					full card details.
				</p>
			</motion.div>

			{/* Action Buttons */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="flex gap-2"
			>
				<Button type="submit" disabled={isProcessing} className="h-10 gap-2">
					{isProcessing ? (
						<>
							<Loader2 className="w-4 h-4 animate-spin" />
							Processing...
						</>
					) : (
						"Complete Purchase"
					)}
				</Button>
				<Button
					type="button"
					variant="outline"
					onClick={prevStep}
					disabled={isProcessing}
					className="h-10"
				>
					Back
				</Button>
			</motion.div>
		</form>
	);
}
