"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutFormData } from "@/app/checkout/page";
import { PricingPlan } from "@/data/pricing";
import { motion, AnimatePresence } from "framer-motion";

interface SignInStepProps {
	formData: CheckoutFormData;
	updateFormData: (updates: Partial<CheckoutFormData>) => void;
	nextStep: () => void;
	prevStep: () => void;
	allPlans: PricingPlan[];
}

export default function SignInStep({
	formData,
	updateFormData,
	nextStep,
	prevStep,
}: SignInStepProps) {
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	// Generate default domain from company name
	useEffect(() => {
		if (!formData.domainName && formData.companyName) {
			const suggestedDomain = formData.companyName
				.toLowerCase()
				.replace(/[^a-z0-9]/g, "")
				.slice(0, 20);
			updateFormData({ domainName: suggestedDomain });
		}
		if (!formData.username && formData.firstName) {
			const suggestedUsername = formData.firstName
				.toLowerCase()
				.replace(/[^a-z0-9]/g, "");
			updateFormData({ username: suggestedUsername });
		}
	}, []);

	// Password validation checks
	const passwordChecks = {
		length: formData.password.length >= 8,
		uppercase: /[A-Z]/.test(formData.password),
		lowercase: /[a-z]/.test(formData.password),
		number: /[0-9]/.test(formData.password),
	};

	const isPasswordValid = Object.values(passwordChecks).every(Boolean);

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (!formData.username.trim()) {
			newErrors.username = "Required";
		} else if (formData.username.length < 3) {
			newErrors.username = "Min 3 characters";
		}

		if (!formData.domainName.trim()) {
			newErrors.domainName = "Required";
		} else if (formData.domainName.length < 3) {
			newErrors.domainName = "Min 3 characters";
		}

		if (!formData.password) {
			newErrors.password = "Required";
		} else if (!isPasswordValid) {
			newErrors.password = "Password doesn't meet requirements";
		}

		if (!formData.confirmPassword) {
			newErrors.confirmPassword = "Required";
		} else if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Passwords don't match";
		}

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

	const PasswordCheck = ({
		valid,
		label,
	}: {
		valid: boolean;
		label: string;
	}) => (
		<motion.div
			initial={{ opacity: 0, x: -4 }}
			animate={{ opacity: 1, x: 0 }}
			className="flex items-center gap-1.5"
		>
			{valid ? (
				<Check className="w-3 h-3 text-green-500" />
			) : (
				<X className="w-3 h-3 text-muted-foreground" />
			)}
			<span
				className={`text-[10px] ${valid ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}`}
			>
				{label}
			</span>
		</motion.div>
	);

	return (
		<form onSubmit={handleSubmit}>
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<h2 className="text-xl font-semibold text-foreground mb-1">
					Create your login
				</h2>
				<p className="text-sm text-muted-foreground mb-5">
					This is how you&apos;ll sign in to Melp.
				</p>
			</motion.div>

			{/* Username and Domain */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.05 }}
				className="mb-5"
			>
				<label className="block text-xs font-medium text-foreground mb-1.5">
					Your Melp ID
				</label>
				<div className="flex items-center gap-1.5">
					<input
						type="text"
						value={formData.username}
						onChange={(e) =>
							updateFormData({
								username: e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ""),
							})
						}
						className={`${inputClassName("username")} flex-1 min-w-0`}
						placeholder="username"
					/>
					<span className="text-sm text-muted-foreground">@</span>
					<input
						type="text"
						value={formData.domainName}
						onChange={(e) =>
							updateFormData({
								domainName: e.target.value
									.toLowerCase()
									.replace(/[^a-z0-9]/g, ""),
							})
						}
						className={`${inputClassName("domainName")} flex-1 min-w-0`}
						placeholder="company"
					/>
					<span className="text-xs text-muted-foreground whitespace-nowrap">
						.melp.com
					</span>
				</div>
				{(errors.username || errors.domainName) && (
					<p className="mt-1 text-[10px] text-red-500">
						{errors.username || errors.domainName}
					</p>
				)}
			</motion.div>

			{/* Sign-in Preview */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="mb-5 p-3 rounded-lg bg-muted/30 border"
			>
				<p className="text-xs text-muted-foreground">You&apos;ll sign in as</p>
				<p className="text-sm font-medium text-foreground mt-0.5">
					{formData.username || "username"}@{formData.domainName || "company"}
					.melp.com
				</p>
			</motion.div>

			{/* Password */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.15 }}
				className="mb-4"
			>
				<label className="block text-xs font-medium text-foreground mb-1.5">
					Password
				</label>
				<div className="relative max-w-xs">
					<input
						type={showPassword ? "text" : "password"}
						value={formData.password}
						onChange={(e) => updateFormData({ password: e.target.value })}
						className={`${inputClassName("password")} pr-9`}
						placeholder="Create a password"
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
					>
						{showPassword ? (
							<EyeOff className="h-4 w-4" />
						) : (
							<Eye className="h-4 w-4" />
						)}
					</button>
				</div>

				{/* Password Requirements */}
				<AnimatePresence>
					{formData.password && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="mt-2 flex flex-wrap gap-x-4 gap-y-1"
						>
							<PasswordCheck valid={passwordChecks.length} label="8+ chars" />
							<PasswordCheck
								valid={passwordChecks.uppercase}
								label="Uppercase"
							/>
							<PasswordCheck
								valid={passwordChecks.lowercase}
								label="Lowercase"
							/>
							<PasswordCheck valid={passwordChecks.number} label="Number" />
						</motion.div>
					)}
				</AnimatePresence>

				{errors.password && !formData.password && (
					<p className="mt-1 text-[10px] text-red-500">{errors.password}</p>
				)}
			</motion.div>

			{/* Confirm Password */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="mb-6"
			>
				<label className="block text-xs font-medium text-foreground mb-1.5">
					Confirm password
				</label>
				<div className="relative max-w-xs">
					<input
						type={showConfirmPassword ? "text" : "password"}
						value={formData.confirmPassword}
						onChange={(e) =>
							updateFormData({ confirmPassword: e.target.value })
						}
						className={`${inputClassName("confirmPassword")} pr-9`}
						placeholder="Confirm your password"
					/>
					<button
						type="button"
						onClick={() => setShowConfirmPassword(!showConfirmPassword)}
						className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
					>
						{showConfirmPassword ? (
							<EyeOff className="h-4 w-4" />
						) : (
							<Eye className="h-4 w-4" />
						)}
					</button>
				</div>
				{errors.confirmPassword && (
					<p className="mt-1 text-[10px] text-red-500">
						{errors.confirmPassword}
					</p>
				)}

				{/* Match indicator */}
				{formData.confirmPassword && formData.password && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="mt-1.5 flex items-center gap-1"
					>
						{formData.password === formData.confirmPassword ? (
							<>
								<Check className="w-3 h-3 text-green-500" />
								<span className="text-[10px] text-green-600 dark:text-green-400">
									Passwords match
								</span>
							</>
						) : (
							<>
								<X className="w-3 h-3 text-red-500" />
								<span className="text-[10px] text-red-500">
									Passwords don&apos;t match
								</span>
							</>
						)}
					</motion.div>
				)}
			</motion.div>

			{/* Action Buttons */}
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.25 }}
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
