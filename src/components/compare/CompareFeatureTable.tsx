"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ComparisonRow {
	feature: string;
	melp: boolean;
	teams: boolean;
}

const comparisonData: ComparisonRow[] = [
	{
		feature: "Unified Workspace",
		melp: true,
		teams: true,
	},
	{
		feature: "Video Conferencing",
		melp: true,
		teams: true,
	},
	{
		feature: "AI-Powered Instant Answers",
		melp: true,
		teams: false,
	},
	{
		feature: "Real-Time Translation",
		melp: true,
		teams: false,
	},
	{
		feature: "External Collaboration",
		melp: true,
		teams: false,
	},
	{
		feature: "User-Friendly Interface",
		melp: true,
		teams: false,
	},
	{
		feature: "Works Without Ecosystem Lock-in",
		melp: true,
		teams: false,
	},
	{
		feature: "Topics & Threads Organization",
		melp: true,
		teams: false,
	},
	{
		feature: "Transparent Pricing",
		melp: true,
		teams: false,
	},
];

function StatusIcon({ available }: { available: boolean }) {
	if (available) {
		return <Check className="w-5 h-5 text-foreground" strokeWidth={2.5} />;
	}
	return <X className="w-5 h-5 text-muted-foreground/50" strokeWidth={2.5} />;
}

export default function CompareFeatureTable() {
	return (
		<section id="comparison" className="py-16 sm:py-24 bg-muted/30">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Column - Content */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
							Tech teams may love Microsoft Teams, but your whole company is
							much more than that. It doesn&apos;t scale well for company-wide
							use—it&apos;s just too complex and clunky. That&apos;s why many
							modern teams are making the switch to Melp, where the burdens of
							communicating, collaborating, and finding trusted company
							information are effortlessly handled on autopilot.
						</p>

						<Button
							variant="brand-primary"
							size="lg"
							className="px-8"
							asChild
						>
							<Link href="/pricing">Let&apos;s talk</Link>
						</Button>
					</motion.div>

					{/* Right Column - Comparison Table */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="rounded-2xl overflow-hidden bg-card border border-border/50"
					>
						{/* Table Header */}
						<div className="p-4 sm:p-5 bg-muted/50 border-b border-border/50">
							<table className="w-full">
								<thead>
									<tr>
										<th className="text-left text-sm font-medium text-muted-foreground">
											Features
										</th>
										<th className="w-20 sm:w-24 text-center">
											<div className="inline-flex items-center justify-center gap-2">
												<Image
													src="/logo-short.svg"
													alt="Melp"
													width={20}
													height={20}
												/>
												<span className="text-sm font-medium text-foreground">
													Melp
												</span>
											</div>
										</th>
										<th className="w-20 sm:w-24 text-center">
											<div className="inline-flex items-center justify-center gap-2">
												<Image
													src="/apps/teams.svg"
													alt="Teams"
													width={20}
													height={20}
													className="opacity-70"
												/>
												<span className="text-sm font-medium text-muted-foreground">
													Teams
												</span>
											</div>
										</th>
									</tr>
								</thead>
							</table>
						</div>

						{/* Table Body */}
						<div className="p-4 sm:p-5">
							<table className="w-full">
								<tbody>
									{comparisonData.map((row, index) => (
										<motion.tr
											key={row.feature}
											initial={{ opacity: 0 }}
											whileInView={{ opacity: 1 }}
											viewport={{ once: true }}
											transition={{ delay: 0.03 * index }}
											className="border-b border-border/30 last:border-b-0"
										>
											<td className="py-4 text-sm text-foreground">
												{row.feature}
											</td>
											<td className="w-20 sm:w-24 py-4 text-center">
												<div className="flex justify-center">
													<StatusIcon available={row.melp} />
												</div>
											</td>
											<td className="w-20 sm:w-24 py-4 text-center">
												<div className="flex justify-center">
													<StatusIcon available={row.teams} />
												</div>
											</td>
										</motion.tr>
									))}
								</tbody>
							</table>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
