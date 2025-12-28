"use client";

import { useState, useMemo, useEffect } from "react";
import {
	motion,
	AnimatePresence,
	useMotionValue,
	useTransform,
	animate,
} from "motion/react";
import { Check, Zap, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

// Animated counter component
function AnimatedNumber({
	value,
	prefix = "",
	suffix = "",
}: {
	value: number;
	prefix?: string;
	suffix?: string;
}) {
	const motionValue = useMotionValue(0);
	const rounded = useTransform(motionValue, (v) => Math.round(v));
	const [display, setDisplay] = useState(0);

	useEffect(() => {
		const controls = animate(motionValue, value, {
			duration: 0.8,
			ease: [0.32, 0.72, 0, 1],
		});
		const unsubscribe = rounded.on("change", (v) => setDisplay(v));
		return () => {
			controls.stop();
			unsubscribe();
		};
	}, [value, motionValue, rounded]);

	return (
		<span>
			{prefix}
			{display.toLocaleString()}
			{suffix}
		</span>
	);
}

// Apps that Melp replaces with their monthly pricing per user
const replacedApps = [
	{
		id: "slack",
		name: "Slack",
		logo: "/apps/slack.svg",
		monthlyPrice: 8.75,
		category: "messaging",
		description: "Business messaging",
	},
	{
		id: "teams",
		name: "Microsoft Teams",
		logo: "/apps/teams.svg",
		monthlyPrice: 4.0,
		category: "messaging",
		description: "Team collaboration",
	},
	{
		id: "zoom",
		name: "Zoom",
		logo: "/apps/zoom.svg",
		monthlyPrice: 15.99,
		category: "video",
		description: "Video conferencing",
	},
	{
		id: "googleworkspace",
		name: "Google Workspace",
		logo: "/apps/googleworkspace.svg",
		monthlyPrice: 12.0,
		category: "productivity",
		description: "Productivity suite",
	},
	{
		id: "calendly",
		name: "Calendly",
		logo: "/apps/calendly.svg",
		monthlyPrice: 10.0,
		category: "scheduling",
		description: "Scheduling",
	},
	{
		id: "onedrive",
		name: "OneDrive",
		logo: "/apps/onedrive.svg",
		monthlyPrice: 1.99,
		category: "storage",
		description: "Cloud storage",
	},
	{
		id: "notion",
		name: "Notion",
		logo: "/apps/notion.svg",
		monthlyPrice: 10.0,
		category: "docs",
		description: "Notes & docs",
	},
];

// Melp pricing
const MELP_MONTHLY_PRICE = 12.0;

export default function SavingsCalculatorSection() {
	const [selectedApps, setSelectedApps] = useState<string[]>([
		"slack",
		"zoom",
		"calendly",
		"googleworkspace",
	]);
	const [teamSize, setTeamSize] = useState(5);
	const [viewMode, setViewMode] = useState<"monthly" | "yearly">("yearly");

	const toggleApp = (appId: string) => {
		setSelectedApps((prev) =>
			prev.includes(appId)
				? prev.filter((id) => id !== appId)
				: [...prev, appId]
		);
	};

	const calculations = useMemo(() => {
		const selectedAppDetails = replacedApps.filter((app) =>
			selectedApps.includes(app.id)
		);
		const totalOtherAppsMonthly = selectedAppDetails.reduce(
			(sum, app) => sum + app.monthlyPrice,
			0
		);
		const totalOtherAppsYearly = totalOtherAppsMonthly * 12;

		const melpMonthly = MELP_MONTHLY_PRICE;
		const melpYearly = melpMonthly * 12;

		const monthlySavings = totalOtherAppsMonthly - melpMonthly;
		const yearlySavings = totalOtherAppsYearly - melpYearly;

		const monthlySavingsTeam = monthlySavings * teamSize;
		const yearlySavingsTeam = yearlySavings * teamSize;

		const savingsPercentage =
			totalOtherAppsMonthly > 0
				? Math.round((monthlySavings / totalOtherAppsMonthly) * 100)
				: 0;

		return {
			totalAppsMonthly: totalOtherAppsMonthly,
			totalAppsYearly: totalOtherAppsYearly,
			melpMonthly,
			melpYearly,
			teamSavingsMonthly: Math.max(0, monthlySavingsTeam),
			teamSavingsYearly: Math.max(0, yearlySavingsTeam),
			percentage: Math.max(0, savingsPercentage),
			appCount: selectedApps.length,
		};
	}, [selectedApps, teamSize]);

	const displaySavings =
		viewMode === "yearly"
			? calculations.teamSavingsYearly
			: calculations.teamSavingsMonthly;

	return (
		<section className="relative py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 overflow-hidden">
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
					>
						Savings Calculator
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4"
					>
						One platform. <span className="text-primary">Massive savings.</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-lg text-muted-foreground max-w-2xl mx-auto"
					>
						Stop paying for multiple apps. Select the tools you currently use
						and see how much you can save with Melp.
					</motion.p>
				</div>

				<div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
					{/* Left - App Selection */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="lg:col-span-3 flex"
					>
						<div className="rounded-2xl border border-border bg-card p-6 flex flex-col w-full">
							<h3 className="text-lg font-semibold text-foreground mb-4">
								What apps do you currently use?
							</h3>

							{/* App Grid */}
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 flex-1">
								{replacedApps.map((app) => {
									const isSelected = selectedApps.includes(app.id);
									return (
										<button
											key={app.id}
											onClick={() => toggleApp(app.id)}
											className={`relative p-4 rounded-xl border-2 transition-all duration-200 text-left group ${
												isSelected
													? "border-primary bg-primary/5"
													: "border-border hover:border-muted-foreground/50 bg-card"
											}`}
										>
											{/* Checkmark */}
											<AnimatePresence>
												{isSelected && (
													<motion.div
														initial={{ scale: 0 }}
														animate={{ scale: 1 }}
														exit={{ scale: 0 }}
														className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
													>
														<Check className="w-3 h-3 text-white" />
													</motion.div>
												)}
											</AnimatePresence>

											{/* App icon */}
											<div className="w-10 h-10 rounded-lg mb-2 flex items-center justify-center overflow-hidden bg-white dark:bg-white/90">
												<Image
													src={app.logo}
													alt={app.name}
													width={32}
													height={32}
													className="w-8 h-8 object-contain"
												/>
											</div>

											<div className="font-medium text-sm text-foreground">
												{app.name}
											</div>
											<div className="text-xs text-muted-foreground">
												${app.monthlyPrice}/mo
											</div>
										</button>
									);
								})}
							</div>

							{/* Team Size Selector */}
							<div className="pt-4 border-t border-border mt-auto">
								<label className="block text-sm font-medium text-foreground mb-3">
									Team size: <span className="text-primary">{teamSize}</span>{" "}
									{teamSize === 1 ? "person" : "people"}
								</label>
								<input
									type="range"
									min="1"
									max="100"
									value={teamSize}
									onChange={(e) => setTeamSize(Number(e.target.value))}
									className="w-full h-2 rounded-full bg-muted appearance-none cursor-pointer accent-primary"
								/>
								<div className="flex justify-between text-xs text-muted-foreground mt-1">
									<span>1</span>
									<span>25</span>
									<span>50</span>
									<span>75</span>
									<span>100</span>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right: Results */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.15 }}
						className="lg:col-span-2 flex"
					>
						<div className="rounded-2xl border border-border bg-card p-8 flex flex-col w-full">
							{/* Toggle Monthly/Yearly */}
							<div className="flex items-center justify-center gap-1 p-1 rounded-lg bg-muted mb-8">
								{(["monthly", "yearly"] as const).map((mode) => (
									<button
										key={mode}
										onClick={() => setViewMode(mode)}
										className={`
											flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
											${
												viewMode === mode
													? "bg-card text-foreground shadow-sm"
													: "text-muted-foreground hover:text-foreground"
											}
										`}
									>
										{mode === "monthly" ? "Monthly" : "Yearly"}
									</button>
								))}
							</div>

							{/* Savings Display */}
							<div className="text-center mb-6 flex-1 flex flex-col justify-center">
								<p className="text-sm text-muted-foreground mb-2">
									Your team saves
								</p>
								<div className="text-5xl sm:text-6xl font-semibold text-foreground tracking-tight">
									<AnimatedNumber value={displaySavings} prefix="$" />
								</div>
								<p className="text-sm text-muted-foreground mt-2">
									per {viewMode === "yearly" ? "year" : "month"} with Melp
								</p>
							</div>

							{/* Breakdown */}
							<div className="space-y-3 mb-6 mt-auto">
								<div className="flex items-center justify-between py-2">
									<span className="text-sm text-muted-foreground">
										{calculations.appCount} apps × {teamSize} users
									</span>
									<span className="text-sm text-muted-foreground line-through">
										$
										{(viewMode === "yearly"
											? calculations.totalAppsYearly * teamSize
											: calculations.totalAppsMonthly * teamSize
										).toLocaleString()}
									</span>
								</div>
								<div className="flex items-center justify-between py-2">
									<span className="text-sm text-foreground font-medium">
										Melp × {teamSize} users
									</span>
									<span className="text-sm text-foreground font-medium">
										$
										{(viewMode === "yearly"
											? calculations.melpYearly * teamSize
											: calculations.melpMonthly * teamSize
										).toLocaleString()}
									</span>
								</div>
								<div className="h-px bg-border" />
								<div className="flex items-center justify-between py-2">
									<span className="text-sm font-medium text-foreground">
										You save
									</span>
									<div className="flex items-center gap-2">
										{calculations.percentage > 0 && (
											<span className="px-2 py-0.5 rounded-full bg-muted text-xs font-medium text-foreground">
												{calculations.percentage}% less
											</span>
										)}
										<span className="text-sm font-semibold text-foreground">
											${displaySavings.toLocaleString()}
										</span>
									</div>
								</div>
							</div>

							{/* CTA */}
							<Button variant="brand-dark" size="lg" className="w-fit mx-auto">
								<Image
									src="/logo-short.svg"
									alt="Melp"
									width={18}
									height={18}
								/>
								Download Melp
								<ChevronRight className="w-4 h-4" />
							</Button>

							<p className="text-xs text-center text-muted-foreground mt-4">
								Free 14-day trial • No credit card required
							</p>
						</div>
					</motion.div>
				</div>

				{/* Bottom Feature Tags */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
					className="mt-12 flex flex-wrap justify-center gap-3"
				>
					{[
						"Chat & Messaging",
						"Video Conferencing",
						"Screen Sharing",
						"Calendar & Scheduling",
						"Cloud Storage",
						"AI Transcription",
						"Real-time Translation",
					].map((feature) => (
						<span
							key={feature}
							className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-medium"
						>
							<Check className="w-3 h-3 text-primary" />
							{feature}
						</span>
					))}
				</motion.div>
			</div>
		</section>
	);
}
