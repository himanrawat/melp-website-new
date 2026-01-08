import PricingPageClient from "@/components/pricing/PricingPageClient";
import {
	buildComparisonFromSegment,
	buildComparisonFromPackages,
	mapPackagesToPricingPackages,
} from "@/lib/pricingPackages";
import {
	fetchPackages,
	fetchPlanComparison,
} from "@/lib/pricingPackages.server";
import type { ApiPlanComparisonSegment, PricingPackage } from "@/types/pricing";

export default async function PricingPage() {
	let individualPackages: PricingPackage[] = [];
	let businessPackages: PricingPackage[] = [];
	let comparisonSegments: ApiPlanComparisonSegment[] = [];

	try {
		const apiPackages = await fetchPackages();
		const mappedPackages = mapPackagesToPricingPackages(apiPackages);
		individualPackages = mappedPackages.filter(
			(pkg) => pkg.packageType === "INDIVIDUAL"
		);
		businessPackages = mappedPackages.filter(
			(pkg) => pkg.packageType === "BUSINESS"
		);
		individualPackages.sort((a, b) => a.packageLevel - b.packageLevel);
		businessPackages.sort((a, b) => a.packageLevel - b.packageLevel);
	} catch (error) {
		console.error("[PRICING] Failed to load packages", error);
	}

	try {
		comparisonSegments = await fetchPlanComparison();
	} catch (error) {
		console.error("[PRICING] Failed to load plan comparison", error);
	}

	const individualSegment = comparisonSegments.find(
		(segment) => segment.audienceType === "INDIVIDUAL"
	);
	const businessSegment = comparisonSegments.find(
		(segment) => segment.audienceType === "BUSINESS"
	);

	const individualComparison = individualSegment
		? buildComparisonFromSegment(individualSegment, individualPackages)
		: [];
	const businessComparison = businessSegment
		? buildComparisonFromSegment(businessSegment, businessPackages)
		: [];

	return (
		<PricingPageClient
			individualPackages={individualPackages}
			businessPackages={businessPackages}
			individualComparison={individualComparison}
			businessComparison={businessComparison}
		/>
	);
}
