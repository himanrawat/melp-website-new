import { Check, Minus } from "lucide-react";
import { ComparisonFeature, PricingPlan } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface DesktopComparisonTableProps {
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

export default function DesktopComparisonTable({
	plans,
	comparison,
	isYearly = true,
}: DesktopComparisonTableProps) {
	const planIds = plans.map((p) => p.id);

	return (
		<div className="w-full relative">
			{/* Sticky Header */}
			<div className="sticky top-16 bg-background px-4 z-10">
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
										data-package-id={plan.packageId}
										data-subscription-plan-id={
											isYearly
												? plan.subscriptionPlanIdYearly ?? undefined
												: plan.subscriptionPlanIdMonthly ?? undefined
										}
										asChild
									>
										{plan.monthlyPrice === 0 ? (
											<a
												href="https://www.app.melp.us/spa/index#signup"
												target="_blank"
												rel="noopener noreferrer"
											>
												{getButtonText(plan.monthlyPrice)}
											</a>
										) : (
											<Link
												href={`/checkout?plan=${plan.id}&billing=${
													isYearly ? "yearly" : "monthly"
												}`}
											>
												{getButtonText(plan.monthlyPrice)}
											</Link>
										)}
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
								<div className="px-0">
									{feature.tooltip ? (
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger asChild>
													<span className="text-sm text-foreground inline-flex items-center gap-1.5 border-b border-dotted border-muted-foreground/40 cursor-help font-bold">
														{feature.name}
													</span>
												</TooltipTrigger>
												<TooltipContent className="w-40">
													<p>{feature.tooltip}</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									) : (
										<span className="text-sm text-foreground">
											{feature.name}
										</span>
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
