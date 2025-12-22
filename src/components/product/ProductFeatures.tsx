"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { SpotlightCard, RevealOnScroll } from "@/components/ui/aceternity";

interface Feature {
	title: string;
	description: string;
	icon: LucideIcon;
}

interface ProductFeaturesProps {
	readonly label?: string;
	readonly title: string;
	readonly description?: string;
	readonly features: readonly Feature[];
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring" as const,
			stiffness: 100,
			damping: 15,
		},
	},
};

export default function ProductFeatures({
	label = "Key Features",
	title,
	description,
	features,
}: ProductFeaturesProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<motion.section
			ref={ref}
			className="relative py-20 sm:py-32 bg-background overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			{/* Subtle background pattern */}
			<div className="absolute inset-0 bg-[radial-gradient(#22202010_1px,transparent_1px)] bg-size-[24px_24px]" />

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<RevealOnScroll className="text-center mb-16">
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						{label}
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						{title}
					</h2>
					{description && (
						<p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							{description}
						</p>
					)}
				</RevealOnScroll>

				{/* Features Grid */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
				>
					{features.map((feature) => {
						const Icon = feature.icon;
						return (
							<motion.div key={feature.title} variants={itemVariants}>
								<SpotlightCard className="h-full group cursor-pointer">
									<div className="p-6 h-full flex flex-col">
										{/* Icon with hover animation */}
										<motion.div
											className="mb-4 inline-flex"
											whileHover={{ scale: 1.1, rotate: 5 }}
											transition={{ type: "spring", stiffness: 400 }}
										>
											<div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors duration-300">
												<Icon className="w-6 h-6 text-primary" />
											</div>
										</motion.div>

										{/* Title with slide effect */}
										<motion.h3
											className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
											whileHover={{ x: 4 }}
											transition={{ type: "spring", stiffness: 400 }}
										>
											{feature.title}
										</motion.h3>

										{/* Description */}
										<p className="text-sm text-muted-foreground leading-relaxed flex-1">
											{feature.description}
										</p>

										{/* Animated underline */}
										<motion.div
											className="mt-4 h-0.5 bg-primary/20 rounded-full origin-left"
											initial={{ scaleX: 0 }}
											whileHover={{ scaleX: 1 }}
											transition={{ duration: 0.3 }}
										/>
									</div>
								</SpotlightCard>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</motion.section>
	);
}
