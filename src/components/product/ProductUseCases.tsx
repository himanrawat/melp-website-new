"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/aceternity";
import { Badge } from "@/components/ui/badge";

interface UseCase {
	title: string;
	description: string;
	icon: LucideIcon;
	badge?: string;
}

interface ProductUseCasesProps {
	label?: string;
	title: string;
	description?: string;
	useCases: UseCase[];
}

export default function ProductUseCases({
	label = "Perfect For",
	title,
	description,
	useCases,
}: ProductUseCasesProps) {
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

	const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

	return (
		<section
			ref={containerRef}
			className="relative py-20 sm:py-32 bg-background overflow-hidden"
		>
			{/* Background pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202005_1px,transparent_1px),linear-gradient(to_bottom,#22202005_1px,transparent_1px)] bg-[size:40px_40px]" />

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

				{/* Use Cases Grid with 3D perspective */}
				<motion.div
					style={{
						perspective: "1000px",
					}}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{useCases.map((useCase, index) => {
						const Icon = useCase.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50, rotateX: 10 }}
								whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
									ease: [0.21, 0.47, 0.32, 0.98],
								}}
								style={{ rotateX }}
								className="group"
							>
								<motion.div
									className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
									whileHover={{
										y: -8,
										boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
									}}
								>
									{/* Animated gradient overlay */}
									<motion.div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

									{/* Glowing orb on hover */}
									<motion.div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

									<div className="relative z-10">
										{/* Icon with pulse effect */}
										<motion.div
											className="mb-4 inline-flex"
											whileHover={{ scale: 1.1, rotate: 5 }}
										>
											<div className="relative w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
												<Icon className="w-7 h-7 text-primary" />
												{/* Pulse ring */}
												<motion.div
													className="absolute inset-0 rounded-2xl border-2 border-primary/30"
													animate={{
														scale: [1, 1.2, 1],
														opacity: [0.5, 0, 0.5],
													}}
													transition={{
														duration: 2,
														repeat: Infinity,
														ease: "easeInOut",
													}}
												/>
											</div>
										</motion.div>

										{/* Badge */}
										{useCase.badge && (
											<Badge
												variant="secondary"
												className="mb-3 text-xs font-medium"
											>
												{useCase.badge}
											</Badge>
										)}

										{/* Title */}
										<motion.h3
											className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
											whileHover={{ x: 3 }}
										>
											{useCase.title}
										</motion.h3>

										{/* Description */}
										<p className="text-sm text-muted-foreground leading-relaxed">
											{useCase.description}
										</p>

										{/* Arrow indicator */}
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
												animate={{ x: [0, 4, 0] }}
												transition={{
													duration: 1.5,
													repeat: Infinity,
													ease: "easeInOut",
												}}
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
								</motion.div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
