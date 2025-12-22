"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/aceternity";

interface Benefit {
	title: string;
	description: string;
	icon: LucideIcon;
}

interface ProductBenefitsProps {
	label?: string;
	title: string;
	description?: string;
	benefits: Benefit[];
	layout?: "grid" | "alternating";
}

export default function ProductBenefits({
	label = "Why Teams Love It",
	title,
	description,
	benefits,
	layout = "alternating",
}: ProductBenefitsProps) {
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

	const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

	if (layout === "grid") {
		return (
			<section className="relative py-20 sm:py-32 bg-muted/30 overflow-hidden">
				{/* Background decoration */}
				<motion.div
					className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,32,32,0.05)_0%,transparent_50%)]"
					style={{ y: backgroundY }}
				/>

				<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<RevealOnScroll className="text-center mb-16">
						<motion.span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
							{label}
						</motion.span>
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
							{title}
						</h2>
						{description && (
							<p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
								{description}
							</p>
						)}
					</RevealOnScroll>

					{/* Benefits Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{benefits.map((benefit, index) => {
							const Icon = benefit.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-50px" }}
									transition={{
										duration: 0.6,
										delay: index * 0.1,
										ease: [0.21, 0.47, 0.32, 0.98],
									}}
									className="group"
								>
									<motion.div
										className="relative p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full"
										whileHover={{ y: -5 }}
									>
										{/* Animated corner accent */}
										<motion.div
											className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-2xl rounded-bl-[100px]"
											initial={{ opacity: 0, scale: 0.5 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ delay: 0.3 + index * 0.1 }}
										/>

										<motion.div
											className="relative z-10"
											whileHover={{ x: 3 }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											<div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
												<Icon className="w-6 h-6 text-primary" />
											</div>
											<h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
												{benefit.title}
											</h3>
											<p className="text-sm text-muted-foreground leading-relaxed">
												{benefit.description}
											</p>
										</motion.div>
									</motion.div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>
		);
	}

	// Alternating layout
	return (
		<section
			ref={containerRef}
			className="relative py-20 sm:py-32 bg-muted/30 overflow-hidden"
		>
			{/* Background decoration */}
			<motion.div
				className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,32,32,0.05)_0%,transparent_50%)]"
				style={{ y: backgroundY }}
			/>

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<RevealOnScroll className="text-center mb-20">
					<motion.span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
						{label}
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						{title}
					</h2>
					{description && (
						<p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
							{description}
						</p>
					)}
				</RevealOnScroll>

				{/* Alternating Benefits */}
				<div className="space-y-24">
					{benefits.map((benefit, index) => {
						const Icon = benefit.icon;
						const isEven = index % 2 === 0;

						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 60 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{
									duration: 0.8,
									ease: [0.21, 0.47, 0.32, 0.98],
								}}
								className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
									isEven ? "" : "lg:direction-rtl"
								}`}
							>
								{/* Content */}
								<div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
									<motion.div
										initial={{ opacity: 0, x: isEven ? -30 : 30 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: 0.2 }}
									>
										<div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
											<Icon className="w-7 h-7 text-primary" />
										</div>
										<h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
											{benefit.title}
										</h3>
										<p className="text-lg text-muted-foreground leading-relaxed">
											{benefit.description}
										</p>
									</motion.div>
								</div>

								{/* Visual */}
								<div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
									<motion.div
										initial={{ opacity: 0, x: isEven ? 30 : -30, scale: 0.95 }}
										whileInView={{ opacity: 1, x: 0, scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: 0.3 }}
										whileHover={{ scale: 1.02 }}
										className="relative aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border/50 overflow-hidden shadow-lg"
									>
										{/* Animated background */}
										<motion.div
											className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,32,32,0.05)_50%,transparent_75%)] bg-[length:250%_250%]"
											animate={{
												backgroundPosition: ["0% 0%", "100% 100%"],
											}}
											transition={{
												duration: 3,
												repeat: Infinity,
												repeatType: "reverse",
											}}
										/>

										{/* Center icon */}
										<div className="absolute inset-0 flex items-center justify-center">
											<motion.div
												className="w-20 h-20 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-lg"
												animate={{
													y: [0, -8, 0],
												}}
												transition={{
													duration: 3,
													repeat: Infinity,
													ease: "easeInOut",
												}}
											>
												<Icon className="w-10 h-10 text-primary" />
											</motion.div>
										</div>

										{/* Decorative elements */}
										<div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-primary/10 blur-xl" />
										<div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-primary/5 blur-2xl" />
									</motion.div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
