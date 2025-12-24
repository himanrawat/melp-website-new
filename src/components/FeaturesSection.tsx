"use client";

import { motion } from "motion/react";
import Image from "next/image";
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
		image: "/assets/mobile-chat-translation-screens.png",
		alt: "Mobile messaging with instant translation overlay",
		imageFit: "object-contain",
	},
	{
		title: "Meetings & Calls",
		description:
			"Seamless transitions from chat to call with enterprise-grade video, immersive clarity, and dependable cross-organization meetings.",
		gradient: "from-blue-500/10 to-cyan-500/10",
		image: "/assets/laptop-mobile-video-call-ui.png",
		alt: "Screen sharing during a multi-participant video call",
		imageFit: "object-contain",
	},
	{
		title: "Drive & Storage",
		description:
			"Centralized, secure cloud storage engineered for discoverability, governance, and effortless access.",
		image: "/assets/drive2.png",
		alt: "Laptop and mobile view of shared workspace content",
		imageFit: "object-contain",
	},
	{
		title: "Professional Networking",
		description:
			"A LinkedIn-like professional graph where vendors, agencies, clients, and partners collaborate on real projects.",
		gradient: "from-emerald-500/10 to-green-500/10",
		image: "/assets/mobile-network-contacts-screens.png",
		alt: "Professional contacts list on mobile",
		imageFit: "object-contain",
	},
	{
		title: "AI & Automation",
		description:
			"Summaries, insights, workflows, translations, and intelligent routing that reduce noise and accelerate decisions.",
		gradient: "from-pink-500/10 to-rose-500/10",
		image: "/assets/bilingual-live-captions-call.png",
		alt: "Live captions in multiple languages during a call",
		imageFit: "object-cover",
	},
	{
		title: "Admin & Security",
		description:
			"Identity, access, compliance, encryption, and governance for enterprises and public-sector organizations.",
		gradient: "from-slate-500/10 to-gray-500/10",
		image: "/assets/secure-remote-work-shield.png",
		alt: "Secure remote work visual with shield frame",
		imageFit: "object-contain",
	},
];

export default function FeaturesSection() {
	return (
		<motion.section
			id="product"
			className="relative py-24 sm:py-32 bg-background overflow-hidden isolate"
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
								<div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
									<Image
										src={feature.image}
										alt={feature.alt}
										fill
										className={feature.imageFit ?? "object-cover"}
										sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 100vw"
										priority={index < 2}
									/>
									{feature.gradient && (
										<div
											className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} mix-blend-multiply`}
										/>
									)}
									<motion.div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
