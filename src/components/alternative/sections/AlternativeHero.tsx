"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/aceternity";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "../ImagePlaceholder";
import { HeroData } from "../types";

interface AlternativeHeroProps {
	data: HeroData;
}

export default function AlternativeHero({ data }: AlternativeHeroProps) {
	return (
		<section className="relative overflow-hidden bg-background isolate">
			{/* Grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]" />

			<div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-20">
				<div className="text-center">
					{/* Melp Logo Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex items-center justify-center mb-10"
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5"
						>
							<div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
								<Image
									src="/logo-short.svg"
									alt="Melp"
									width={20}
									height={20}
								/>
							</div>
							<span className="text-sm font-medium text-foreground">
								{data.badgeText}
							</span>
						</motion.div>
					</motion.div>

					{/* Main Headline - H1 */}
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.1] max-w-4xl mx-auto"
					>
						<span className="text-primary">{data.headlinePrimary}</span>{" "}
						{data.headlineSecondary}
					</motion.h1>

					{/* Subheadline */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.35 }}
						className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
					>
						{data.subheadline}
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
					>
						<MagneticButton>
							<Button
								variant="brand-primary"
								size="lg"
								className="px-8 h-12 text-base transition-all duration-300 group"
								asChild
							>
								<Link href="/pricing">
									<span className="flex items-center gap-2">
										Start for Free
										<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
									</span>
								</Link>
							</Button>
						</MagneticButton>

						<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
							<Button
								variant="brand-dark"
								size="lg"
								className="px-8 h-12 text-base border-border/50 hover:bg-muted/50 hover:border-primary/30"
								asChild
							>
								<Link href="/product">Schedule a Demo</Link>
							</Button>
						</motion.div>
					</motion.div>

					{/* Trust indicators */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.7 }}
						className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
					>
						<div className="flex items-center gap-2">
							<div className="flex -space-x-2">
								<Image
									src="/users/user-1.png"
									alt="User"
									width={28}
									height={28}
									className="rounded-full border-2 border-background"
								/>
								<Image
									src="/users/user-2.png"
									alt="User"
									width={28}
									height={28}
									className="rounded-full border-2 border-background"
								/>
								<Image
									src="/users/user-3.png"
									alt="User"
									width={28}
									height={28}
									className="rounded-full border-2 border-background"
								/>
							</div>
							<span>10,000+ teams switched</span>
						</div>
						<div className="hidden sm:block w-px h-4 bg-border" />
						<div className="flex items-center gap-2">
							<Image
								src="/logo-AICPA-SOC.svg"
								alt="SOC 2"
								width={20}
								height={20}
								className="opacity-60"
							/>
							<Image
								src="/logo-gdpr.svg"
								alt="GDPR"
								width={20}
								height={20}
								className="opacity-60"
							/>
							<span>Enterprise-grade security</span>
						</div>
					</motion.div>

					{/* Hero Product Image */}
					<div className="mt-16">
						<ImagePlaceholder
							imageType="Product Screenshot"
							description={data.imageDescription}
							aspectRatio="aspect-[16/10]"
							size="full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
