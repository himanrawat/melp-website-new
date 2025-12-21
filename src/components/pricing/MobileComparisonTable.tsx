import {
	Check,
	Minus,
	HelpCircle,
	Users,
	Video,
	MessageSquare,
	Sparkles,
	Shield,
	Headphones,
	Settings,
	Link2,
	type LucideIcon,
} from "lucide-react";
import { ComparisonFeature, PricingPlan } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface MobileComparisonTableProps {
	readonly plans: PricingPlan[];
	readonly comparison: ComparisonFeature[];
	readonly isYearly?: boolean;
}

function getButtonText(monthlyPrice: number | null): string {
	if (monthlyPrice === 0) return "Sign up";
	if (monthlyPrice === null) return "Contact us";
	return "Get started";
}

// Mobile Feature Value - right-aligned text for mobile cards
function MobileFeatureValue({ value }: { readonly value: boolean | string }) {
	if (typeof value === "boolean") {
		return value ? (
			<Check className="w-5 h-5 text-primary" strokeWidth={2.5} />
		) : (
			<Minus className="w-4 h-4 text-muted-foreground/40" strokeWidth={1.5} />
		);
	}

	return <span className="text-sm font-medium text-foreground">{value}</span>;
}

// Category icons mapping using Lucide icons
const categoryIcons: Record<string, LucideIcon> = {
	Usage: Users,
	"Meetings & Calls": Video,
	Messaging: MessageSquare,
	"AI Features": Sparkles,
	Security: Shield,
	Support: Headphones,
	Administration: Settings,
	Integrations: Link2,
};

function CategoryIcon({ category }: { readonly category: string }) {
	const Icon = categoryIcons[category] || Users;
	return <Icon className="w-5 h-5 text-primary" />;
}

export default function MobileComparisonTable({
	plans,
	comparison,
	isYearly = true,
}: MobileComparisonTableProps) {
	return (
		<div className="w-full space-y-8">
			{comparison.map((category) => (
				<div key={category.category} className="space-y-4">
					{/* Category Header */}
					<div className="flex items-center gap-2 px-1">
						<CategoryIcon category={category.category} />
						<h3 className="text-base font-semibold text-primary">
							{category.category}
						</h3>
					</div>

					{/* Feature Cards */}
					<div className="space-y-3">
						{category.features.map((feature) => (
							<div
								key={feature.name}
								className="bg-card border border-border rounded-xl p-4 space-y-3"
							>
								{/* Feature Name with optional tooltip */}
								<div className="flex items-center gap-2">
									<span className="text-sm font-semibold text-foreground">
										{feature.name}
									</span>
									{feature.tooltip && (
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger asChild>
													<HelpCircle className="w-4 h-4 text-muted-foreground/60 cursor-help" />
												</TooltipTrigger>
												<TooltipContent className="max-w-[200px]">
													<p className="text-xs">{feature.tooltip}</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									)}
								</div>

								{/* Plan Values - Stacked vertically */}
								<div className="space-y-0 divide-y divide-border/50">
									{plans.map((plan) => {
										const value = feature.plans[plan.id];
										return (
											<div
												key={plan.id}
												className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
											>
												<span className="text-sm text-muted-foreground">
													{plan.name}
												</span>
												<div className="flex items-center">
													{value === undefined ? (
														<Minus className="w-4 h-4 text-muted-foreground/30" />
													) : (
														<MobileFeatureValue value={value} />
													)}
												</div>
											</div>
										);
									})}
								</div>
							</div>
						))}
					</div>
				</div>
			))}

			{/* Sticky CTA Footer for Mobile */}
			<div className="sticky bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 -mx-4 mt-8">
				<div className="flex flex-col gap-3">
					{plans.map((plan) => (
						<div
							key={plan.id}
							className="flex items-center justify-between gap-4"
						>
							<div className="flex-1 min-w-0">
								<p className="text-sm font-semibold text-foreground truncate">
									{plan.name}
								</p>
								<p className="text-xs text-muted-foreground">
									{plan.monthlyPrice === null ? (
										"Custom pricing"
									) : plan.monthlyPrice === 0 ? (
										"Free forever"
									) : (
										<>
											{plan.currency}
											{isYearly ? plan.yearlyPrice : plan.monthlyPrice}/user/mo
										</>
									)}
								</p>
							</div>
							<Button
								variant={plan.popular ? "default" : "outline"}
								size="sm"
								className="shrink-0 text-sm font-medium cursor-pointer"
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
					))}
				</div>
			</div>
		</div>
	);
}
