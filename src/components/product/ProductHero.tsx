"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MagneticButton, RevealOnScroll } from "@/components/ui/aceternity";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface ProductHeroProps {
	icon: LucideIcon;
	badge?: string;
	title: string;
	highlightedText?: string;
	description: string;
	features?: string[];
	primaryCta?: {
		text: string;
		href: string;
	};
	secondaryCta?: {
		text: string;
		href: string;
	};
	gradient?: string;
}

export default function ProductHero({
	icon: Icon,
	badge,
	title,
	highlightedText,
	description,
	features,
	primaryCta = { text: "Get Started Free", href: "/pricing" },
	secondaryCta,
	gradient = "from-primary/20 via-primary/5 to-transparent",
}: ProductHeroProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const { scrollYProgress } = useScroll(
		isMounted && containerRef.current
			? {
					target: containerRef,
					offset: ["start start", "end start"],
			  }
			: undefined
	);

	const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	return (
		<section
			ref={containerRef}
			className="relative min-h-[90vh] overflow-hidden bg-background isolate"
		>
			{/* Animated gradient background */}
			<motion.div
				className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`}
				animate={{
					backgroundPosition: ["0% 0%", "100% 100%"],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					repeatType: "reverse",
				}}
			/>

			{/* Grid Background with parallax */}
			<motion.div
				style={{ y }}
				className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
			/>

			{/* Floating orbs */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
					animate={{
						x: [0, 50, 0],
						y: [0, -30, 0],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
					animate={{
						x: [0, -40, 0],
						y: [0, 40, 0],
						scale: [1.2, 1, 1.2],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<motion.div
				style={{ opacity }}
				className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36"
			>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Column - Content */}
					<div className="flex flex-col">
						{/* Animated Icon Badge */}
						<motion.div
							initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
							animate={{ opacity: 1, scale: 1, rotate: 0 }}
							transition={{
								duration: 0.6,
								type: "spring",
								stiffness: 200,
							}}
							className="mb-6"
						>
							<motion.div
								className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 shadow-lg"
								whileHover={{
									scale: 1.1,
									rotate: 5,
									boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
								}}
								transition={{ type: "spring", stiffness: 400 }}
							>
								<Icon className="w-8 h-8 text-primary" />
							</motion.div>
						</motion.div>

						{/* Badge */}
						{badge && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<Badge
									variant="secondary"
									className="mb-6 px-4 py-1.5 text-sm font-medium border border-border/50 bg-background/80 backdrop-blur-sm shadow-lg w-fit"
								>
									<motion.span
										className="flex items-center gap-2"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.3 }}
									>
										<span className="relative flex h-2 w-2">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
											<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
										</span>
										{badge}
									</motion.span>
								</Badge>
							</motion.div>
						)}

						{/* Main Heading with stagger animation */}
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.15,
								ease: [0.21, 0.47, 0.32, 0.98],
							}}
							className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1]"
						>
							{title}{" "}
							{highlightedText && (
								<motion.span
									className="text-primary relative"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: 0.4 }}
								>
									{highlightedText}
									<motion.span
										className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"
										initial={{ scaleX: 0 }}
										animate={{ scaleX: 1 }}
										transition={{ duration: 0.8, delay: 0.6 }}
									/>
								</motion.span>
							)}
						</motion.h1>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.25,
								ease: [0.21, 0.47, 0.32, 0.98],
							}}
							className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
						>
							{description}
						</motion.p>

						{/* Feature List with stagger */}
						{features && features.length > 0 && (
							<motion.ul
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.35 }}
								className="mt-8 space-y-3"
							>
								{features.map((feature, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.5,
											delay: 0.4 + index * 0.1,
										}}
										className="flex items-center gap-3 text-muted-foreground"
									>
										<motion.div
											className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center"
											whileHover={{
												scale: 1.2,
												backgroundColor: "rgb(var(--primary) / 0.2)",
											}}
										>
											<svg
												className="w-3 h-3 text-primary"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={3}
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</motion.div>
										<span className="text-sm sm:text-base">{feature}</span>
									</motion.li>
								))}
							</motion.ul>
						)}

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.5,
								ease: [0.21, 0.47, 0.32, 0.98],
							}}
							className="mt-10 flex flex-col sm:flex-row items-start gap-4"
						>
							<MagneticButton>
								<Button
									size="lg"
									className="px-8 h-12 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 group"
									asChild
								>
									<Link href={primaryCta.href}>
										<span className="flex items-center gap-2">
											{primaryCta.text}
											<motion.svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												className="group-hover:translate-x-1 transition-transform"
											>
												<path
													d="M3 8H13M13 8L8 3M13 8L8 13"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
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
										variant="outline"
										size="lg"
										className="px-8 h-12 text-base border-border/50 hover:bg-muted/50 hover:border-primary/30"
										asChild
									>
										<Link href={secondaryCta.href}>{secondaryCta.text}</Link>
									</Button>
								</motion.div>
							)}
						</motion.div>
					</div>

					{/* Right Column - Visual */}
					<motion.div
						initial={{ opacity: 0, x: 50, scale: 0.95 }}
						animate={{ opacity: 1, x: 0, scale: 1 }}
						transition={{
							duration: 0.8,
							delay: 0.3,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="relative"
					>
						<motion.div
							className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-border/50 shadow-2xl"
							whileHover={{ scale: 1.02 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							{/* Animated mesh gradient */}
							<motion.div
								className="absolute inset-0 opacity-30"
								animate={{
									backgroundImage: [
										"radial-gradient(circle at 20% 80%, rgba(var(--primary-rgb), 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)",
										"radial-gradient(circle at 80% 80%, rgba(var(--primary-rgb), 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)",
									],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									repeatType: "reverse",
								}}
							/>

							{/* Icon showcase */}
							<div className="absolute inset-0 flex items-center justify-center">
								<motion.div
									className="relative"
									animate={{
										y: [0, -10, 0],
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								>
									<motion.div
										className="w-32 h-32 rounded-3xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-xl flex items-center justify-center"
										whileHover={{ rotate: 5, scale: 1.1 }}
									>
										<Icon className="w-16 h-16 text-primary" />
									</motion.div>

									{/* Orbiting elements */}
									<motion.div
										className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/20 border border-primary/30"
										animate={{ rotate: 360 }}
										transition={{
											duration: 8,
											repeat: Infinity,
											ease: "linear",
										}}
										style={{ transformOrigin: "50% 150%" }}
									/>
									<motion.div
										className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-primary/30 border border-primary/40"
										animate={{ rotate: -360 }}
										transition={{
											duration: 6,
											repeat: Infinity,
											ease: "linear",
										}}
										style={{ transformOrigin: "50% -50%" }}
									/>
								</motion.div>
							</div>

							{/* Decorative elements */}
							<div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
							<div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
