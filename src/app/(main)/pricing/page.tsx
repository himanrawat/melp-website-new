import PricingPageClient from "@/components/pricing/PricingPageClient";
import {
	buildComparisonFromPackages,
	mapPackagesToPricingPackages,
} from "@/lib/pricingPackages";
import { fetchPackages } from "@/lib/pricingPackages.server";
import type { PricingPackage } from "@/types/pricing";

export default async function PricingPage() {
	let individualPackages: PricingPackage[] = [];
	let businessPackages: PricingPackage[] = [];

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

	const individualComparison = buildComparisonFromPackages(individualPackages);
	const businessComparison = buildComparisonFromPackages(businessPackages);

	return (
		<PricingPageClient
			individualPackages={individualPackages}
			businessPackages={businessPackages}
			individualComparison={individualComparison}
			businessComparison={businessComparison}
		/>
	);
}
