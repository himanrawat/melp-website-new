import type {
	ApiConstraint,
	ApiPackage,
	ApiPlan,
	BillingCycle,
	ComparisonFeature,
	PricingPackage,
	PlanFeature,
} from "@/types/pricing";

export function mapPackagesToPricingPackages(
	packages: ApiPackage[]
): PricingPackage[] {
	return packages.map((pkg) => {
		const monthlyPlan = pkg.subscriptionPlans?.find(
			(plan) => plan.billingCycle === "MONTHLY"
		);
		const yearlyPlan = pkg.subscriptionPlans?.find(
			(plan) => plan.billingCycle === "YEARLY"
		);

		return {
			id: pkg.packageId,
			packageId: pkg.packageId,
			name: (pkg.name || "").trim(),
			description: pkg.description || "",
			packageLevel: pkg.packageLevel,
			packageType: pkg.packageType,
			minquantity: pkg.minquantity,
			maxquantity: pkg.maxquantity,
			monthlyPlan,
			yearlyPlan,
			features: mapConstraintsToFeatures(pkg.constraints || []),
			constraints: pkg.constraints || [],
		};
	});
}

export function selectBillingPlan(
	pkg: PricingPackage,
	billingCycle: BillingCycle
): ApiPlan | undefined {
	return billingCycle === "YEARLY" ? pkg.yearlyPlan : pkg.monthlyPlan;
}

export function getDisplayPrice(
	plan?: ApiPlan,
	billingCycle?: BillingCycle
) {
	if (!plan) {
		return {
			currentPrice: null,
			originalPrice: null,
			currency: "",
			currencySymbol: "",
			hasDiscount: false,
		};
	}

	const resolvedCycle = billingCycle || plan.billingCycle;
	const price =
		resolvedCycle === "YEARLY"
			? Number(plan.pricePerMonth ?? plan.price ?? 0)
			: Number(plan.price ?? 0);
	const discountPrice =
		resolvedCycle === "YEARLY"
			? Number(plan.discountPricePerMonth ?? plan.discountPrice ?? 0)
			: Number(plan.discountPrice ?? 0);
	const hasDiscount = discountPrice > 0 && discountPrice < price;
	const currentPrice = hasDiscount ? discountPrice : price;

	return {
		currentPrice,
		originalPrice: hasDiscount ? price : null,
		currency: plan.currency || "",
		currencySymbol: plan.currencySymbol || "",
		hasDiscount,
	};
}

export function isPlanFree(plan?: ApiPlan) {
	const display = getDisplayPrice(plan);
	return display.currentPrice === 0;
}

export function mapConstraintsToFeatures(
	constraints: ApiConstraint[]
): PlanFeature[] {
	return constraints
		.filter((constraint) => (constraint.description || "").trim().length > 0)
		.map((constraint) => ({
			text: constraint.description.trim(),
			included: isConstraintIncluded(constraint),
		}));
}

export function buildComparisonFromPackages(
	packages: PricingPackage[]
): ComparisonFeature[] {
	const categoryOrder: string[] = [];
	const featureOrderByCategory = new Map<string, string[]>();
	const featureMap = new Map<
		string,
		{
			name: string;
			tooltip?: string;
			category: string;
			plans: Record<string, boolean | string>;
		}
	>();

	packages.forEach((pkg) => {
		(pkg.constraints || []).forEach((constraint) => {
			const category = formatLabel(constraint.featureModule || "Features");
			const featureKey = `${constraint.featureModule}::${constraint.featureName}`;
			const featureName = formatLabel(constraint.featureName);

			if (!categoryOrder.includes(category)) {
				categoryOrder.push(category);
			}

			if (!featureOrderByCategory.has(category)) {
				featureOrderByCategory.set(category, []);
			}

			const categoryFeatures = featureOrderByCategory.get(category) || [];
			if (!categoryFeatures.includes(featureKey)) {
				categoryFeatures.push(featureKey);
				featureOrderByCategory.set(category, categoryFeatures);
			}

			if (!featureMap.has(featureKey)) {
				featureMap.set(featureKey, {
					name: featureName,
					tooltip: (constraint.description || "").trim() || undefined,
					category,
					plans: {},
				});
			}

			const entry = featureMap.get(featureKey);
			if (!entry) return;
			entry.plans[pkg.id] = getConstraintValue(constraint);
		});
	});

	return categoryOrder.map((category) => {
		const features =
			featureOrderByCategory.get(category)?.map((featureKey) => {
				const entry = featureMap.get(featureKey);
				return {
					name: entry?.name || featureKey,
					tooltip: entry?.tooltip,
					plans: entry?.plans || {},
				};
			}) || [];

		return {
			category,
			features,
		};
	});
}

function isConstraintIncluded(constraint: ApiConstraint) {
	if (constraint.type === "ON_OFF") {
		return constraint.limit > 0;
	}

	return constraint.limit > 0;
}

function getConstraintValue(constraint: ApiConstraint): boolean | string {
	if (constraint.type === "ON_OFF") {
		return constraint.limit > 0;
	}

	if (constraint.limit <= 0) {
		return false;
	}

	const unitLabel = formatUnit(constraint.unit);
	return unitLabel ? `${constraint.limit} ${unitLabel}` : String(constraint.limit);
}

function formatConstraintLabel(constraint: ApiConstraint) {
	const baseLabel = formatLabel(constraint.featureName || "Feature");
	const limitText =
		constraint.limit > 0 ? getConstraintValue(constraint) : undefined;

	if (typeof limitText === "string") {
		return `${baseLabel} (${limitText})`;
	}

	return baseLabel;
}

function formatLabel(value: string) {
	return value
		.replace(/_/g, " ")
		.toLowerCase()
		.replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatUnit(unit: string) {
	if (!unit || unit === "NA") return "";
	if (unit === "GB" || unit === "MB" || unit === "TB") return unit;
	if (unit === "MONTH" || unit === "MONTHS") return "month";
	if (unit === "YEAR" || unit === "YEARS") return "year";
	if (unit === "HOUR" || unit === "HOURS") return "hour";
	return unit.toLowerCase();
}
