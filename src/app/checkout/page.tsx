"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { individualPlans, businessPlans, PricingPlan } from "@/data/pricing";
import CheckoutLayout from "@/components/checkout/CheckoutLayout";
import SubscriptionStep from "@/components/checkout/steps/SubscriptionStep";
import EmailStep from "@/components/checkout/steps/EmailStep";
import PersonalDetailsStep from "@/components/checkout/steps/PersonalDetailsStep";
import SignInStep from "@/components/checkout/steps/SignInStep";
import PaymentStep from "@/components/checkout/steps/PaymentStep";
import ConfirmationStep from "@/components/checkout/steps/ConfirmationStep";
import ContactSalesStep from "@/components/checkout/steps/ContactSalesStep";

export interface CheckoutFormData {
	// Subscription
	planId: string;
	numberOfUsers: number;
	subscriptionLength: "1-year" | "1-month";
	billingFrequency: "yearly" | "monthly";

	// Email
	email: string;

	// Personal Details
	firstName: string;
	middleName?: string;
	surname: string;
	companyName: string;
	companySize: string;
	businessPhone: string;
	jobTitle: string;
	addressLine1: string;
	addressLine2?: string;
	addressLine3?: string;
	townCity: string;
	state: string;
	postcode: string;
	country: string;
	hasWebsite: string;
	acceptMarketing: boolean;
	acceptPartnerMarketing: boolean;

	// Sign-in
	username: string;
	domainName: string;
	password: string;
	confirmPassword: string;

	// Payment
	cardNumber: string;
	securityCode: string;
	expirationMonth: string;
	expirationYear: string;
	nameOnCard: string;
	billingAddressLine1: string;
	billingAddressLine2?: string;
	billingTownCity: string;
	billingState: string;
	billingPostcode: string;
	billingCountry: string;
	otp: string;
	sessionId: string;
	adminId: string;
}

const initialFormData: CheckoutFormData = {
	planId: "plus",
	numberOfUsers: 1,
	subscriptionLength: "1-year",
	billingFrequency: "yearly",
	email: "",
	firstName: "",
	middleName: "",
	surname: "",
	companyName: "",
	companySize: "",
	businessPhone: "",
	jobTitle: "",
	addressLine1: "",
	addressLine2: "",
	addressLine3: "",
	townCity: "",
	state: "",
	postcode: "",
	country: "India",
	hasWebsite: "",
	acceptMarketing: true,
	acceptPartnerMarketing: false,
	username: "",
	domainName: "",
	password: "",
	confirmPassword: "",
	cardNumber: "",
	securityCode: "",
	expirationMonth: "",
	expirationYear: "",
	nameOnCard: "",
	billingAddressLine1: "",
	billingAddressLine2: "",
	billingTownCity: "",
	billingState: "",
	billingPostcode: "",
	billingCountry: "India",
	otp: "",
	sessionId: "",
	adminId: "",
};

const steps = [
	{ id: 1, name: "Subscription & account details", shortName: "Plan" },
	{ id: 2, name: "Email verification", shortName: "Email" },
	{ id: 3, name: "Personal details", shortName: "Details" },
	{ id: 4, name: "Sign-in details", shortName: "Sign-in" },
	{
		id: 5,
		name: "Add payment, confirm & complete order",
		shortName: "Payment",
	},
	{ id: 6, name: "Confirmation", shortName: "Complete" },
];

// Get all plans
const allPlans = [...individualPlans, ...businessPlans];

function CheckoutContent() {
	const searchParams = useSearchParams();
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState<CheckoutFormData>(initialFormData);
	const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
	const [isEnterpriseFlow, setIsEnterpriseFlow] = useState(false);

	// Initialize from URL params
	useEffect(() => {
		const planId = searchParams.get("plan");
		const billing = searchParams.get("billing");

		if (planId) {
			const plan = allPlans.find((p) => p.id === planId);
			if (plan) {
				setSelectedPlan(plan);
				setFormData((prev) => ({
					...prev,
					planId: plan.id,
					billingFrequency: billing === "monthly" ? "monthly" : "yearly",
				}));

				// Auto-trigger enterprise flow if enterprise plan is selected via URL
				if (plan.id === "enterprise") {
					setIsEnterpriseFlow(true);
				}
			}
		} else {
			// Default to Plus plan
			const plusPlan = allPlans.find((p) => p.id === "plus");
			if (plusPlan) {
				setSelectedPlan(plusPlan);
			}
		}
	}, [searchParams]);

	// Update selected plan when planId changes
	useEffect(() => {
		const plan = allPlans.find((p) => p.id === formData.planId);
		if (plan) {
			setSelectedPlan(plan);
		}
	}, [formData.planId]);

	// Initialize temp session/admin IDs once
	useEffect(() => {
		setFormData((prev) => ({
			...prev,
			adminId:
				prev.adminId ||
				(typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-admin`),
		}));
	}, []);

	const updateFormData = (updates: Partial<CheckoutFormData>) => {
		setFormData((prev) => ({ ...prev, ...updates }));
	};

	const nextStep = () => {
		if (currentStep < steps.length) {
			setCurrentStep((prev) => prev + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep((prev) => prev - 1);
		}
	};

	const goToPayment = () => {
		setCurrentStep(5);
	};

	const goToStep = (step: number) => {
		if (step <= currentStep) {
			setCurrentStep(step);
		}
	};

	// Handle enterprise plan selection
	const handleEnterpriseSelect = () => {
		setIsEnterpriseFlow(true);
	};

	const renderStep = () => {
		// If enterprise flow is active, show contact sales step
		if (isEnterpriseFlow) {
			return (
				<ContactSalesStep
					formData={formData}
					updateFormData={updateFormData}
					selectedPlan={selectedPlan}
				/>
			);
		}

		const stepProps = {
			formData,
			updateFormData,
			nextStep,
			prevStep,
			allPlans,
		};

		switch (currentStep) {
			case 1:
				return (
					<SubscriptionStep
						{...stepProps}
						onEnterpriseSelect={handleEnterpriseSelect}
					/>
				);
			case 2:
				return <EmailStep {...stepProps} skipToPayment={goToPayment} />;
			case 3:
				return <PersonalDetailsStep {...stepProps} />;
			case 4:
				return <SignInStep {...stepProps} />;
			case 5:
				return <PaymentStep {...stepProps} />;
			case 6:
				return (
					<ConfirmationStep formData={formData} selectedPlan={selectedPlan} />
				);
			default:
				return (
					<SubscriptionStep
						{...stepProps}
						onEnterpriseSelect={handleEnterpriseSelect}
					/>
				);
		}
	};

	return (
		<CheckoutLayout
			currentStep={currentStep}
			steps={steps}
			selectedPlan={selectedPlan}
			formData={formData}
			onStepClick={goToStep}
			isEnterprise={isEnterpriseFlow}
		>
			<AnimatePresence mode="wait">
				<motion.div
					key={isEnterpriseFlow ? "enterprise" : currentStep}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -20 }}
					transition={{ duration: 0.3 }}
				>
					{renderStep()}
				</motion.div>
			</AnimatePresence>
		</CheckoutLayout>
	);
}

function CheckoutLoading() {
	return (
		<div className="min-h-screen bg-background flex items-center justify-center">
			<div className="flex flex-col items-center gap-4">
				<div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
				<p className="text-muted-foreground animate-pulse">
					Loading checkout...
				</p>
			</div>
		</div>
	);
}

export default function CheckoutPage() {
	return (
		<Suspense fallback={<CheckoutLoading />}>
			<CheckoutContent />
		</Suspense>
	);
}
