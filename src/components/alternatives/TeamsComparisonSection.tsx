"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Check, X, Minus } from "lucide-react";

type ComparisonStatus = "seamless" | "limited" | "partial" | "none";

interface ComparisonFeature {
	feature: string;
	melp: ComparisonStatus;
	teams: ComparisonStatus;
	description: string;
}

const comparisonFeatures: ComparisonFeature[] = [
	{
		feature: "External Collaboration",
		melp: "seamless",
		teams: "limited",
		description: "Work with clients, vendors, and partners",
	},
	{
		feature: "Tool Consolidation",
		melp: "seamless",
		teams: "limited",
		description: "All-in-one workspace vs add-ons required",
	},
	{
		feature: "Learning Curve",
		melp: "seamless",
		teams: "limited",
		description: "Time to get your team productive",
	},
	{
		feature: "Pricing Transparency",
		melp: "seamless",
		teams: "limited",
		description: "Clear pricing vs bundled complexity",
	},
	{
		feature: "AI-Powered Features",
		melp: "seamless",
		teams: "partial",
		description: "Built-in AI assistant and automation",
	},
	{
		feature: "Real-Time Translation",
		melp: "seamless",
		teams: "none",
		description: "Live captions in multiple languages",
	},
	{
		feature: "Cross-Organization Chat",
		melp: "seamless",
		teams: "limited",
		description: "Message anyone, anywhere",
	},
	{
		feature: "File Management",
		melp: "seamless",
		teams: "partial",
		description: "Integrated drive with smart organization",
	},
];

const keyDifferentiators = [
	{
		title: "No Tool Overload",
		description:
			"Replace 5+ apps with one unified workspace. Chat, meet, share files, and manage calendars — all in Melp.",
		// Image description: Icon showing multiple app icons (Slack, Zoom, Drive, Calendar) crossed out,
		// replaced by a single Melp logo. Represents consolidation and simplicity.
		imagePlaceholder: "multiple-apps-to-one-icon",
	},
	{
		title: "External Teams Welcome",
		description:
			"Invite clients, vendors, and partners without friction. Collaboration shouldn't stop at your company's edge.",
		// Image description: Icon showing two organization buildings connected by a bridge or network line,
		// with user avatars from both sides meeting in the middle. Represents cross-org collaboration.
		imagePlaceholder: "cross-org-collaboration-icon",
	},
	{
		title: "Organized by Design",
		description:
			"Topics, teams, and threads keep conversations structured. Find anything in seconds, not hours.",
		// Image description: Icon showing a clean folder/topic tree structure with organized branches,
		// representing structured information architecture.
		imagePlaceholder: "organized-structure-icon",
	},
	{
		title: "Start Free, Scale Easy",
		description:
			"Begin with our generous free tier. Upgrade when you need more — no hidden costs or surprise fees.",
		// Image description: Icon showing a growth arrow moving upward through ascending blocks/tiers,
		// representing scalable pricing and growth.
		imagePlaceholder: "scalable-growth-icon",
	},
];

function ComparisonIcon({ status }: { status: "seamless" | "limited" | "partial" | "none" }) {
	if (status === "seamless") {
		return (
			<div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10">
				<Check className="w-5 h-5 text-green-500" />
			</div>
		);
	}
	if (status === "partial") {
		return (
			<div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/10">
				<Minus className="w-5 h-5 text-yellow-500" />
			</div>
		);
	}
	if (status === "limited") {
		return (
			<div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10">
				<Minus className="w-5 h-5 text-orange-500" />
			</div>
		);
	}
	return (
		<div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10">
			<X className="w-5 h-5 text-red-500" />
		</div>
	);
}

export default function TeamsComparisonSection() {
	return (
		<section className="py-16 sm:py-24 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
						Feature Comparison
					</span>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
						Melp vs Microsoft Teams
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						See how Melp stacks up against Microsoft Teams across the features that matter most to modern businesses.
					</p>
				</motion.div>

				{/* Side by Side Visual Comparison */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
				>
					{/* Microsoft Teams Card - The Complex Side */}
					<div className="relative group">
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl" />
						<div className="relative p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-12 h-12 rounded-xl bg-[#6264A7] flex items-center justify-center">
									<Image
										src="/apps/teams.svg"
										alt="Microsoft Teams"
										width={28}
										height={28}
										className="invert"
									/>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground">Microsoft Teams</h3>
									<p className="text-sm text-muted-foreground">Traditional approach</p>
								</div>
							</div>

							{/* Image placeholder for Teams complex interface */}
							<div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-muted/50 border border-border/30 mb-6">
								{/*
									IMAGE DESCRIPTION: A mockup showing a cluttered Microsoft Teams interface with:
									- Multiple nested channels and sub-channels in the sidebar
									- Notification badges scattered across different areas
									- Multiple windows/panels open simultaneously
									- Complex navigation structure
									- Various integration icons that add visual noise
									The image should convey "overwhelming" and "complex" feeling
								*/}
								<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#6264A7]/10 to-[#6264A7]/5">
									<div className="text-center p-4">
										<div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-[#6264A7]/20 flex items-center justify-center">
											<Image
												src="/apps/teams.svg"
												alt="Microsoft Teams"
												width={32}
												height={32}
												className="opacity-50"
											/>
										</div>
										<p className="text-sm text-muted-foreground">Complex interface with steep learning curve</p>
									</div>
								</div>
							</div>

							<ul className="space-y-3">
								{[
									"Requires Microsoft 365 ecosystem",
									"Complex channel structure",
									"Limited external collaboration",
									"Steep learning curve",
								].map((item, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.2 + index * 0.1 }}
										className="flex items-center gap-3 text-muted-foreground"
									>
										<div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
											<Minus className="w-3 h-3 text-orange-500" />
										</div>
										<span className="text-sm">{item}</span>
									</motion.li>
								))}
							</ul>
						</div>
					</div>

					{/* Melp Card - The Clean Side */}
					<div className="relative group">
						<motion.div
							className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
						/>
						<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl" />
						<div className="relative p-6 sm:p-8 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
									<Image
										src="/melpAI.svg"
										alt="Melp"
										width={28}
										height={28}
									/>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground">Melp App</h3>
									<p className="text-sm text-primary">Modern alternative</p>
								</div>
							</div>

							{/* Melp clean interface preview */}
							<div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border/30 mb-6">
								<Image
									src="/assets/MelpApp-Messages-light.png"
									alt="Melp clean messaging interface"
									fill
									className="object-cover object-top dark:hidden"
								/>
								<Image
									src="/assets/MelpApp-Messages-dark.png"
									alt="Melp clean messaging interface"
									fill
									className="object-cover object-top hidden dark:block"
								/>
							</div>

							<ul className="space-y-3">
								{[
									"Works standalone or with any tools",
									"Clean, organized workspace",
									"Seamless external collaboration",
									"Intuitive from day one",
								].map((item, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.3 + index * 0.1 }}
										className="flex items-center gap-3 text-foreground"
									>
										<div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
											<Check className="w-3 h-3 text-green-500" />
										</div>
										<span className="text-sm">{item}</span>
									</motion.li>
								))}
							</ul>
						</div>
					</div>
				</motion.div>

				{/* Detailed Feature Comparison Table */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-20"
				>
					<div className="rounded-2xl border border-border/50 overflow-hidden bg-card/30 backdrop-blur-sm">
						{/* Table Header */}
						<div className="grid grid-cols-3 gap-4 p-4 sm:p-6 bg-muted/30 border-b border-border/50">
							<div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
								Feature
							</div>
							<div className="text-center">
								<div className="inline-flex items-center gap-2">
									<Image src="/melpAI.svg" alt="Melp" width={20} height={20} />
									<span className="text-sm font-semibold text-foreground">Melp</span>
								</div>
							</div>
							<div className="text-center">
								<div className="inline-flex items-center gap-2">
									<Image src="/apps/teams.svg" alt="Teams" width={20} height={20} className="opacity-70" />
									<span className="text-sm font-semibold text-muted-foreground">Teams</span>
								</div>
							</div>
						</div>

						{/* Table Body */}
						<div className="divide-y divide-border/30">
							{comparisonFeatures.map((item, index) => (
								<motion.div
									key={item.feature}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.1 + index * 0.05 }}
									className="grid grid-cols-3 gap-4 p-4 sm:p-6 hover:bg-muted/20 transition-colors"
								>
									<div>
										<div className="font-medium text-foreground">{item.feature}</div>
										<div className="text-sm text-muted-foreground mt-0.5">{item.description}</div>
									</div>
									<div className="flex justify-center items-center">
										<ComparisonIcon status={item.melp} />
									</div>
									<div className="flex justify-center items-center">
										<ComparisonIcon status={item.teams} />
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>

				{/* Key Differentiators Grid */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<div className="text-center mb-12">
						<h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
							Why businesses choose Melp over Teams
						</h3>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Modern teams need modern tools. Here&apos;s what sets Melp apart.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{keyDifferentiators.map((item, index) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 + index * 0.1 }}
								className="group relative"
							>
								<div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm h-full hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
									{/* Icon placeholder area */}
									<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
										{/*
											These icons should be custom designed based on the imagePlaceholder descriptions above.
											For now using a generic representation.
										*/}
										{index === 0 && (
											<svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
												<circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										)}
										{index === 1 && (
											<svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
											</svg>
										)}
										{index === 2 && (
											<svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
											</svg>
										)}
										{index === 3 && (
											<svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
											</svg>
										)}
									</div>
									<h4 className="text-lg font-semibold text-foreground mb-2">
										{item.title}
									</h4>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{item.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Testimonial / Social Proof */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-20"
				>
					<div className="relative rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-8 sm:p-12 overflow-hidden">
						{/* Background decoration */}
						<div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

						<div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
							{/* Avatar */}
							<div className="flex-shrink-0">
								<Image
									src="/users/user-1.png"
									alt="Customer testimonial"
									width={80}
									height={80}
									className="rounded-full border-2 border-primary/20"
								/>
							</div>

							{/* Quote */}
							<div className="text-center sm:text-left">
								<blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-4">
									&ldquo;We switched from Microsoft Teams to Melp and saw immediate improvements in how our team collaborates with external partners. The simplicity is refreshing.&rdquo;
								</blockquote>
								<div>
									<div className="font-semibold text-foreground">Sarah Mitchell</div>
									<div className="text-sm text-muted-foreground">Head of Operations, TechVentures Inc.</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
