"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { MagneticButton, TextShimmer } from "@/components/ui/aceternity";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

interface ProductCTAProps {
	icon?: LucideIcon;
	title: string;
	description?: string;
	primaryCta?: {
		text: string;
		href: string;
	};
	secondaryCta?: {
		text: string;
		href: string;
	};
	features?: string[];
}

export default function ProductCTA({
	icon: Icon,
	title,
	description,
	primaryCta = { text: "Get Started Free", href: "/pricing" },
	secondaryCta,
	features,
}: ProductCTAProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const { scrollYProgress } = useScroll(
		isMounted && containerRef.current
			? {
					target: containerRef,
					offset: ["start end", "end start"],
			  }
			: undefined
	);

	const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
	const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

	return (
		<motion.section
			ref={containerRef}
			style={{ scale, opacity }}
			className="relative py-20 sm:py-32 bg-gradient-to-b from-muted/20 via-primary/[0.02] to-muted/20 overflow-hidden"
		>
			{/* Animated background pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)] bg-[size:40px_40px]" />

			{/* Floating orbs */}
			<motion.div
				className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
				animate={{
					x: [0, 30, 0],
					y: [0, -20, 0],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
				animate={{
					x: [0, -25, 0],
					y: [0, 25, 0],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			<div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					{/* Icon */}
					{Icon && (
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								type: "spring",
								stiffness: 200,
							}}
							className="flex justify-center mb-8"
						>
							<motion.div
								className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-lg"
								whileHover={{ scale: 1.1, rotate: 5 }}
								animate={{
									y: [0, -5, 0],
								}}
								transition={{
									y: {
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut",
									},
								}}
							>
								<Icon className="w-8 h-8 text-primary" />
							</motion.div>
						</motion.div>
					)}

					{/* Label */}
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-6 tracking-wider uppercase"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						Ready to Transform Your Workflow?
					</motion.span>

					{/* Title with shimmer */}
					<TextShimmer className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
						{title}
					</TextShimmer>

					{/* Description */}
					{description && (
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
						>
							{description}
						</motion.p>
					)}

					{/* Feature pills */}
					{features && features.length > 0 && (
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
							className="mt-8 flex flex-wrap justify-center gap-3"
						>
							{features.map((feature, index) => (
								<motion.span
									key={index}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: 0.3 + index * 0.05 }}
									whileHover={{ scale: 1.05, y: -2 }}
									className="px-4 py-2 text-sm font-medium text-muted-foreground bg-muted/50 rounded-full border border-border/50 hover:border-primary/30 hover:text-foreground transition-all duration-200"
								>
									{feature}
								</motion.span>
							))}
						</motion.div>
					)}

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
						className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
					>
						<MagneticButton>
							<Button
								size="lg"
								className="px-8 h-12 text-base group transition-all duration-300"
								asChild
							>
								<Link href={primaryCta.href}>
									<span className="flex items-center gap-2">
										{primaryCta.text}
										<motion.svg
											className="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											animate={{ x: [0, 4, 0] }}
											transition={{ duration: 1.5, repeat: Infinity }}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</motion.svg>
									</span>
								</Link>
							</Button>
						</MagneticButton>

						{secondaryCta && (
							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									size="lg"
									variant="outline"
									className="px-8 h-12 text-base border-border/50 hover:bg-muted/50 hover:border-primary/30"
									asChild
								>
									<Link href={secondaryCta.href}>{secondaryCta.text}</Link>
								</Button>
							</motion.div>
						)}
					</motion.div>

					{/* Trust indicators */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.6 }}
						className="mt-8 text-sm text-muted-foreground flex flex-wrap justify-center gap-6"
					>
						<span className="flex items-center gap-2">
							<Check className="w-4 h-4" />
							Free 14-day trial
						</span>
						<span className="flex items-center gap-2">
							<Check className="w-4 h-4" />
							No credit card required
						</span>
						<span className="flex items-center gap-2">
							<Check className="w-4 h-4" />
							Cancel anytime
						</span>
					</motion.div>
				</motion.div>
			</div>
		</motion.section>
	);
}
