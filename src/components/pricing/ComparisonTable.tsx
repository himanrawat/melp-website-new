import { Check, Minus, Info } from "lucide-react";
import { ComparisonFeature, PricingPlan } from "@/data/pricing";
import { Button } from "@/components/ui/button";

interface ComparisonTableProps {
	readonly plans: PricingPlan[];
	readonly comparison: ComparisonFeature[];
	readonly isYearly?: boolean;
}

function getButtonText(monthlyPrice: number | null): string {
	if (monthlyPrice === 0) return "Sign up";
	if (monthlyPrice === null) return "Contact us";
	return "Get started";
}

function FeatureValue({ value }: { readonly value: boolean | string }) {
	if (typeof value === "boolean") {
		return value ? (
			<Check className="w-5 h-5 text-foreground" strokeWidth={2} />
		) : (
			<Minus className="w-4 h-4 text-muted-foreground/40" strokeWidth={1.5} />
		);
	}

	return (
		<span className="text-sm text-muted-foreground font-normal">{value}</span>
	);
}

export default function ComparisonTable({
	plans,
	comparison,
	isYearly = true,
}: ComparisonTableProps) {
	const planIds = plans.map((p) => p.id);

	return (
		<div className="w-full relative">
			{/* Sticky Header - uses native CSS sticky */}
			<div className="sticky top-16 bg-background px-4">
				<div>
					<div
						className="grid items-end py-4"
						style={{
							gridTemplateColumns: `minmax(280px, 2fr) repeat(${plans.length}, minmax(140px, 1fr))`,
						}}
					>
						{/* Empty cell for feature column */}
						<div></div>

						{/* Plan Headers */}
						{plans.map((plan) => (
							<div key={plan.id} className="text-center px-4">
								<div className="flex flex-col items-center gap-2">
									{/* Plan Name */}
									<h3 className="text-base font-semibold text-foreground">
										{plan.name}
									</h3>

									{/* Price */}
									<div className="text-sm text-muted-foreground">
										{plan.monthlyPrice === null ? (
											<span className="text-foreground">Contact us →</span>
										) : (
											<>
												<span className="text-foreground font-semibold">
													{plan.currency}
													{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
												</span>{" "}
												per user/month
											</>
										)}
									</div>

									{/* CTA Button */}
									<Button
										variant={plan.popular ? "default" : "outline"}
										size="sm"
										className={`
											w-full max-w-[140px] mt-1 text-sm font-medium cursor-pointer
											${
												plan.popular
													? "bg-primary hover:bg-primary/90 text-primary-foreground"
													: "border-border hover:bg-muted/50"
											}
										`}
									>
										{getButtonText(plan.monthlyPrice)}
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Table Body */}
			<div className="divide-y-0">
				{comparison.map((category) => (
					<div key={category.category}>
						{/* Category Header */}
						<div
							className="grid items-center p-4 bg-muted/30 border-t border-border"
							style={{
								gridTemplateColumns: `minmax(280px, 2fr) repeat(${plans.length}, minmax(140px, 1fr))`,
							}}
						>
							<div className="px-0">
								<span className="text-sm font-medium text-foreground">
									{category.category}
								</span>
							</div>
							{plans.map((plan) => (
								<div key={plan.id} />
							))}
						</div>

						{/* Feature Rows */}
						{category.features.map((feature) => (
							<div
								key={feature.name}
								className="grid items-center p-4 border-t border-border/50 hover:bg-muted/20 transition-colors"
								style={{
									gridTemplateColumns: `minmax(280px, 2fr) repeat(${plans.length}, minmax(140px, 1fr))`,
								}}
							>
								{/* Feature Name with Tooltip */}
								<div className="px-0 group/tooltip relative">
									<span className="text-sm text-foreground inline-flex items-center gap-1.5">
										{feature.name}
										{feature.tooltip && (
											<Info className="w-3.5 h-3.5 text-muted-foreground/50 group-hover/tooltip:text-muted-foreground transition-colors" />
										)}
									</span>
									{feature.tooltip && (
										<div className="absolute left-0 bottom-full mb-2 px-3 py-2 bg-foreground text-background text-xs rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 max-w-xs whitespace-normal shadow-lg">
											{feature.tooltip}
											<div className="absolute left-4 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-foreground" />
										</div>
									)}
								</div>

								{/* Plan Values */}
								{planIds.map((planId) => {
									const value = feature.plans[planId];
									return (
										<div
											key={planId}
											className="text-center flex items-center justify-center px-4"
										>
											{value === undefined ? (
												<Minus className="w-4 h-4 text-muted-foreground/30" />
											) : (
												<FeatureValue value={value} />
											)}
										</div>
									);
								})}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
