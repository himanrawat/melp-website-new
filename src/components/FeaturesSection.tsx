"use client";

import { motion } from "framer-motion";
import {
	SpotlightCard,
	RevealOnScroll,
	DotBackground,
} from "@/components/ui/aceternity";

const features = [
	{
		title: "Messaging & Channels",
		description:
			"Clarity in every conversation through organized channels, instant translation, and structured collaboration.",
		gradient: "from-violet-500/10 to-purple-500/10",
	},
	{
		title: "Meetings & Calls",
		description:
			"Seamless transitions from chat to call with enterprise-grade video, immersive clarity, and dependable cross-organization meetings.",
		gradient: "from-blue-500/10 to-cyan-500/10",
	},
	{
		title: "Drive & Storage",
		description:
			"Centralized, secure cloud storage engineered for discoverability, governance, and effortless access.",
		gradient: "from-amber-500/10 to-orange-500/10",
	},
	{
		title: "Professional Networking",
		description:
			"A LinkedIn-like professional graph where vendors, agencies, clients, and partners collaborate on real projects.",
		gradient: "from-emerald-500/10 to-green-500/10",
	},
	{
		title: "AI & Automation",
		description:
			"Summaries, insights, workflows, translations, and intelligent routing that reduce noise and accelerate decisions.",
		gradient: "from-pink-500/10 to-rose-500/10",
	},
	{
		title: "Admin & Security",
		description:
			"Identity, access, compliance, encryption, and governance for enterprises and public-sector organizations.",
		gradient: "from-slate-500/10 to-gray-500/10",
	},
];

export default function FeaturesSection() {
	return (
		<motion.section
			id="product"
			className="relative py-24 sm:py-32 bg-background overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			<DotBackground className="absolute inset-0 z-0" />

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<RevealOnScroll className="text-center mb-20">
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						Features
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						Everything your enterprise needs
					</h2>
					<p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						Powerful features designed to help global teams communicate clearly,
						collaborate instantly, and work smarter with AI.
					</p>
				</RevealOnScroll>

				{/* Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feature, index) => (
						<RevealOnScroll key={index} delay={index * 0.1}>
							<SpotlightCard className="h-full group cursor-pointer">
								{/* Image Placeholder - no icons */}
								<div
									className={`relative aspect-[4/3] w-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center overflow-hidden`}
								>
									{/* Animated background pattern */}
									<div className="absolute inset-0 opacity-30">
										<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px]" />
									</div>

									{/* Decorative element instead of icon */}
									<motion.div
										className="relative z-10 w-16 h-16 rounded-full border-2 border-primary/20 bg-primary/5"
										whileHover={{ scale: 1.1 }}
										transition={{ duration: 0.3 }}
									/>

									{/* Hover overlay */}
									<motion.div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>

								{/* Content */}
								<div className="p-6">
									<motion.h3
										className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300"
										whileHover={{ x: 4 }}
									>
										{feature.title}
									</motion.h3>
									<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
										{feature.description}
									</p>

									{/* Learn more link */}
									<motion.div
										className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
										initial={{ x: -10 }}
										whileHover={{ x: 0 }}
									>
										<span>Learn more</span>
										<motion.svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											className="ml-1"
											whileHover={{ x: 4 }}
										>
											<path
												d="M6 12L10 8L6 4"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</motion.svg>
									</motion.div>
								</div>
							</SpotlightCard>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</motion.section>
	);
}
