"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
	AnimatedGradientBorder,
	RevealOnScroll,
	GlowingBorderCard,
} from "@/components/ui/aceternity";

const securityPoints = [
	{
		title: "Identity & Access Management",
		description:
			"Complete identity controls with SSO, SCIM provisioning, and granular role-based permissions.",
	},
	{
		title: "End-to-End Encryption",
		description:
			"All data encrypted in transit and at rest using AES-256 encryption with zero-knowledge architecture.",
	},
	{
		title: "Enterprise Compliance",
		description:
			"Built for enterprises and public-sector organizations with comprehensive audit trails.",
	},
	{
		title: "Data Governance",
		description:
			"Regional data residency, retention policies, and e-discovery tools for complete control.",
	},
];

const complianceBadges = [
	{ name: "SOC 2" },
	{ name: "ISO 27001" },
	{ name: "GDPR" },
	{ name: "HIPAA" },
];

export default function SecuritySection() {
	return (
		<motion.section
			id="security"
			className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			{/* Background decoration */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,32,32,0.05)_0%,transparent_50%)]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<RevealOnScroll className="text-center mb-16">
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						Admin & Security
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						Trust engineered at every layer
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
						Identity, access, compliance, encryption, and governance for
						enterprises and public-sector organizations.
					</p>
				</RevealOnScroll>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
					{/* Left Column - Security Points */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
						{securityPoints.map((point, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								className="h-full"
							>
								<GlowingBorderCard className="h-full">
									<div className="p-5 bg-card rounded-xl h-full flex flex-col">
										<div className="w-10 h-10 rounded-full border-2 border-primary/30 bg-primary/10 mb-3 shrink-0" />
										<h3 className="font-semibold text-foreground mb-2">
											{point.title}
										</h3>
										<p className="text-sm text-muted-foreground flex-1">
											{point.description}
										</p>
									</div>
								</GlowingBorderCard>
							</motion.div>
						))}
					</div>

					{/* Right Column - Compliance Badges */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<AnimatedGradientBorder className="h-full">
							<div className="p-8 bg-background rounded-xl h-full">
								<h3 className="text-xl font-semibold text-foreground mb-6 text-center">
									Compliance & Certifications
								</h3>
								<div className="grid grid-cols-2 gap-4 mb-8">
									{complianceBadges.map((badge, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, scale: 0.9 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3, delay: index * 0.1 }}
											whileHover={{ scale: 1.05, y: -2 }}
										>
											<div className="flex items-center justify-center gap-2 h-16 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-all">
												<Check className="w-5 h-5 text-primary" />
												<Badge
													variant="secondary"
													className="text-sm font-medium"
												>
													{badge.name}
												</Badge>
											</div>
										</motion.div>
									))}
								</div>
								<div className="text-center">
									<p className="text-sm text-muted-foreground mb-4">
										Trusted by security-conscious teams worldwide
									</p>
									<motion.button
										className="text-sm font-medium text-primary hover:underline underline-offset-4 inline-flex items-center gap-1"
										whileHover={{ x: 3 }}
									>
										View our security whitepaper
										<svg
											className="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</motion.button>
								</div>
							</div>
						</AnimatedGradientBorder>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
