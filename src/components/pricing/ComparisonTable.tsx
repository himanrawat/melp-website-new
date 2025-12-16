"use client";

import { useRef, useEffect, useState } from "react";
import { Check, Minus } from "lucide-react";
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
	const headerRef = useRef<HTMLDivElement>(null);
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const header = headerRef.current;
		if (!header) return;

		// Use IntersectionObserver to detect when header becomes sticky
		const observer = new IntersectionObserver(
			([entry]) => {
				// When the sentinel is not intersecting, header is sticky
				setIsSticky(!entry.isIntersecting);
			},
			{
				// Offset by navbar height (64px)
				rootMargin: "-64px 0px 0px 0px",
				threshold: 0,
			}
		);

		// Create a sentinel element to observe
		const sentinel = document.createElement("div");
		sentinel.style.height = "1px";
		sentinel.style.width = "100%";
		sentinel.style.position = "absolute";
		sentinel.style.top = "0";
		sentinel.style.pointerEvents = "none";
		header.parentElement?.insertBefore(sentinel, header);

		observer.observe(sentinel);

		return () => {
			observer.disconnect();
			sentinel.remove();
		};
	}, []);

	return (
		<div className="w-full relative">
			{/* Sticky Header - uses native CSS sticky */}
			<div
				ref={headerRef}
				className={`
					sticky top-16 z-50 bg-background border-b border-border
					transition-shadow duration-200
					${isSticky ? "shadow-sm" : ""}
				`}
			>
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
											w-full max-w-[140px] mt-1 text-sm font-medium
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
							className="grid items-center py-4 bg-muted/30 border-t border-border"
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
								className="grid items-center py-3.5 border-t border-border/50 hover:bg-muted/20 transition-colors"
								style={{
									gridTemplateColumns: `minmax(280px, 2fr) repeat(${plans.length}, minmax(140px, 1fr))`,
								}}
							>
								{/* Feature Name - Underlined like Notion */}
								<div className="px-0">
									<span
										className="text-sm text-foreground underline decoration-muted-foreground/30 underline-offset-2 cursor-default hover:decoration-muted-foreground/60 transition-colors"
										title={feature.tooltip}
									>
										{feature.name}
									</span>
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
