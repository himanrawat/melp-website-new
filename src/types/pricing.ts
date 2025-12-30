export type BillingCycle = "MONTHLY" | "YEARLY";

export type ApiConstraint = {
	constraintId: string;
	type: "ON_OFF" | "COUNTS" | "DURATION" | "QUOTA" | "LIMIT_PER_UNIT";
	limit: number;
	featureName: string;
	featureModule: string;
	description: string;
	unit: string;
	featureId: number;
};

export type ApiPlan = {
	planid: string;
	priceId: string | null;
	price: number;
	discountPrice: number;
	currency: string;
	currencySymbol: string;
	taxes: number;
	pricePerMonth: number;
	discountPricePerMonth: number;
	durationUnit: "MONTHS" | "YEARS";
	billingCycle: BillingCycle;
};

export type ApiPackage = {
	packageId: string;
	name: string;
	description: string;
	packageLevel: number;
	packageType: "INDIVIDUAL" | "BUSINESS";
	minquantity?: number;
	maxquantity?: number;
	subscriptionPlans: ApiPlan[];
	constraints?: ApiConstraint[];
};

export type PlanFeature = {
	text: string;
	included: boolean;
	highlight?: boolean;
};

export type PricingPackage = {
	id: string;
	packageId: string;
	name: string;
	description: string;
	packageLevel: number;
	packageType: "INDIVIDUAL" | "BUSINESS";
	minquantity?: number;
	maxquantity?: number;
	monthlyPlan?: ApiPlan;
	yearlyPlan?: ApiPlan;
	features: PlanFeature[];
	constraints?: ApiConstraint[];
	popular?: boolean;
	bestValue?: boolean;
	basePlan?: string;
};

export type ComparisonFeature = {
	category: string;
	features: {
		name: string;
		tooltip?: string;
		plans: Record<string, boolean | string>;
	}[];
};
