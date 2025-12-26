"use client";

import { useState, useRef } from "react";
import { Mail, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutFormData } from "@/app/checkout/page";
import { PricingPlan } from "@/data/pricing";
import { motion } from "motion/react";
import { API_ENDPOINTS, logApi } from "@/lib/api";
import { ensureSessionContext, encryptWithSessionKey } from "@/lib/session";
import { ensureSessionId } from "@/lib/session";

interface EmailStepProps {
	formData: CheckoutFormData;
	updateFormData: (updates: Partial<CheckoutFormData>) => void;
	nextStep: () => void;
	prevStep: () => void;
	allPlans: PricingPlan[];
	skipToPayment: () => void;
}

export default function EmailStep({
	formData,
	updateFormData,
	nextStep,
	prevStep,
	skipToPayment,
}: EmailStepProps) {
	const [error, setError] = useState("");
	const [otpError, setOtpError] = useState("");
	const [otpRequested, setOtpRequested] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
	const otpLength = 6;

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleOtpChange = (index: number, value: string) => {
		const digit = value.replace(/\D/g, "").slice(-1);
		const otpChars = Array.from({ length: otpLength }, (_, i) => formData.otp[i] || " ");
		otpChars[index] = digit || " ";
		const nextOtp = otpChars.join("");
		updateFormData({ otp: nextOtp });
		if (otpError) setOtpError("");

		if (digit && index < otpLength - 1) {
			otpRefs.current[index + 1]?.focus();
		}
		if (!digit && index > 0) {
			otpRefs.current[index - 1]?.focus();
		}
	};

	const handleOtpPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
		event.preventDefault();
		const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, otpLength);
		if (!pasted) return;
		const otpChars = Array.from({ length: otpLength }, (_, i) => pasted[i] || " ");
		updateFormData({ otp: otpChars.join("") });
		const targetIndex = Math.min(pasted.length, otpLength - 1);
		otpRefs.current[targetIndex]?.focus();
		if (otpError) setOtpError("");
	};

	const otpCharacters = Array.from(
		{ length: otpLength },
		(_, index) => (formData.otp[index] && formData.otp[index] !== " " ? formData.otp[index] : "")
	);

	const handleSubmit = async (e: React.FormEvent) => {
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

		// If OTP was requested, just validate length and move to next step
		if (otpRequested) {
			const trimmedOtp = formData.otp.replace(/\D/g, "");
			if (trimmedOtp.length !== otpLength) {
				setOtpError(`Enter ${otpLength}-digit OTP`);
				return;
			}
			updateFormData({ otp: trimmedOtp });
			nextStep();
			return;
		}

		setIsSubmitting(true);
		try {
			const { sessionId, keyBytes } = await ensureSessionContext(formData.email);
			if (sessionId !== formData.sessionId) {
				updateFormData({ sessionId });
			}

			const encryptedEmail = encryptWithSessionKey(formData.email, keyBytes);
			const encryptedPassword = encryptWithSessionKey(formData.password || " ", keyBytes);

			// Check if email exists
			logApi("check email request", { email: formData.email, sessionId });
			const existsRes = await fetch(API_ENDPOINTS.checkEmail, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: encryptedEmail,
					sessionid: sessionId,
				}),
			});
			const existsData = await existsRes.json();
			logApi("check email response", existsData);

			if (existsRes.ok && existsData?.exists === true) {
				// Existing user: skip signup, go to payment
				skipToPayment();
				return;
			}

			// New user: send OTP
			logApi("send OTP request", { email: formData.email, sessionId });
			await fetch(API_ENDPOINTS.melpSignup, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: encryptedEmail,
					password: encryptedPassword,
					devicetype: "web",
					sessionid: sessionId,
					fullname: `${formData.firstName} ${formData.middleName || ""} ${formData.surname}`.trim(),
					language: "en",
				}),
			});

			setOtpRequested(true);
		} catch (err) {
			setError("Unable to process email. Please try again.");
			logApi("email step error", err);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
				<h2 className="text-xl font-semibold text-foreground mb-1">Your email</h2>
				<p className="text-sm text-muted-foreground mb-5">
					We&apos;ll use this to set up your account. Existing users go straight to payment.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.05 }}
				className="mb-5"
			>
				<label className="block text-sm font-medium text-foreground mb-1.5">Work email</label>
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
					<motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-xs text-red-500">
						{error}
					</motion.p>
				)}
			</motion.div>

			{otpRequested && (
				<motion.div
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.08 }}
					className="mb-5"
				>
					<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
						Enter the 6-digit OTP
					</p>
					<div className="flex gap-2">
						{otpCharacters.map((value, index) => (
							<input
								key={index}
								ref={(el) => (otpRefs.current[index] = el)}
								value={value}
								onChange={(e) => handleOtpChange(index, e.target.value)}
								onPaste={handleOtpPaste}
								inputMode="numeric"
								pattern="\d*"
								maxLength={1}
								className={`w-10 h-10 text-center rounded-md border bg-background ${otpError ? "border-destructive" : ""}`}
							/>
						))}
					</div>
					{otpError && <p className="mt-1 text-[10px] text-destructive">{otpError}</p>}
					<p className="text-xs text-foreground font-medium mt-3">
						We&apos;ve sent a 6-digit OTP to your email. Enter it to continue.
					</p>
				</motion.div>
			)}

			<motion.div
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="flex gap-2"
			>
				<Button type="submit" className="h-10" disabled={isSubmitting}>
					{isSubmitting ? "Processing..." : otpRequested ? "Verify & Continue" : "Continue"}
					{!isSubmitting && !otpRequested && <ArrowRight className="w-3.5 h-3.5 ml-2" />}
				</Button>
				<Button type="button" variant="outline" onClick={prevStep} className="h-10" disabled={isSubmitting}>
					Back
				</Button>
			</motion.div>
		</form>
	);
}
