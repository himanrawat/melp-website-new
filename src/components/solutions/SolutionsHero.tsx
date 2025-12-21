"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/aceternity";
import Link from "next/link";

interface SolutionsHeroProps {
	badge?: string;
	title: string;
	highlightedText?: string;
	description: string;
	primaryCta: {
		text: string;
		href: string;
	};
	secondaryCta?: {
		text: string;
		href: string;
	};
	trustText?: string;
	imageSrc?: string;
}

export default function SolutionsHero({
	badge,
	title,
	highlightedText,
	description,
	primaryCta,
	secondaryCta,
	trustText,
	imageSrc = "/placeholder-hero.png",
}: SolutionsHeroProps) {
	return (
		<section className="relative min-h-[85vh] overflow-hidden bg-background pb-16 sm:pb-24 isolate">
			{/* Grid Background */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 lg:pt-40">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Column - Content */}
					<div className="flex flex-col">
						{/* Badge */}
						{badge && (
							<motion.div
								initial={{ opacity: 0, y: 30, scale: 0.9 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
							>
								<Badge
									variant="secondary"
									className="mb-6 px-4 py-1.5 text-sm font-medium border border-border/50 bg-background/80 backdrop-blur-sm shadow-lg w-fit"
								>
									<span className="flex items-center gap-2">
										<span className="relative flex h-2 w-2">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
											<span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
										</span>
										{badge}
									</span>
								</Badge>
							</motion.div>
						)}

						{/* Main Heading */}
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.1,
								ease: [0.21, 0.47, 0.32, 0.98],
							}}
							className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1]"
						>
							{title}{" "}
							{highlightedText && (
								<span className="text-primary">{highlightedText}</span>
							)}
						</motion.h1>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.2,
								ease: [0.21, 0.47, 0.32, 0.98],
							}}
							className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
						>
							{description}
						</motion.p>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.3,
								ease: [0.21, 0.47, 0.32, 0.98],
							}}
							className="mt-8 flex flex-col sm:flex-row items-start gap-4"
						>
							<MagneticButton>
								<Button
									size="lg"
									className="px-8 h-12 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
									asChild
								>
									<Link href={primaryCta.href}>{primaryCta.text}</Link>
								</Button>
							</MagneticButton>

							{secondaryCta && (
								<Button
									variant="outline"
									size="lg"
									className="px-8 h-12 text-base"
									asChild
								>
									<Link href={secondaryCta.href}>{secondaryCta.text}</Link>
								</Button>
							)}
						</motion.div>

						{/* Trust Text */}
						{trustText && (
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className="mt-8 text-sm text-muted-foreground"
							>
								{trustText}
							</motion.p>
						)}
					</div>

					{/* Right Column - Image */}
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
						<div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-border/50 shadow-2xl">
							{/* Placeholder for image */}
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="w-3/4 h-3/4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 animate-pulse" />
							</div>
							{/* Decorative elements */}
							<div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
							<div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
