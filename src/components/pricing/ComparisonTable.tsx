import type { ComparisonFeature, PricingPackage } from "@/types/pricing";
import MobileComparisonTable from "./MobileComparisonTable";
import DesktopComparisonTable from "./DesktopComparisonTable";

interface ComparisonTableProps {
	readonly plans: PricingPackage[];
	readonly comparison: ComparisonFeature[];
	readonly isYearly?: boolean;
}

export default function ComparisonTable({
	plans,
	comparison,
	isYearly = true,
}: ComparisonTableProps) {
	return (
		<>
			{/* Mobile View */}
			<div className="lg:hidden">
				<MobileComparisonTable
					plans={plans}
					comparison={comparison}
					isYearly={isYearly}
				/>
			</div>

			{/* Desktop View */}
			<div className="hidden lg:block">
				<DesktopComparisonTable
					plans={plans}
					comparison={comparison}
					isYearly={isYearly}
				/>
			</div>
		</>
	);
}
