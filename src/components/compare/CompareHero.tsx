"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/aceternity";
import { ArrowRight } from "lucide-react";

export default function CompareHero() {
	return (
		<section className="relative min-h-[70vh] overflow-hidden bg-background isolate">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

			{/* Grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

			{/* Decorative curve SVG at bottom */}
			<div className="absolute bottom-0 left-0 right-0">
				<svg
					viewBox="0 0 1440 120"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-full h-auto"
					preserveAspectRatio="none"
				>
					<path
						d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
						className="fill-muted/30"
					/>
				</svg>
			</div>

			<div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-20">
				<div className="text-center">
					{/* VS Logo Treatment */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex items-center justify-center gap-4 sm:gap-8 mb-10"
					>
						{/* Melp Logo */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="flex items-center gap-3"
						>
							<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-lg">
								<Image
									src="/logo-short.svg"
									alt="Melp"
									width={36}
									height={36}
									className="w-8 h-8 sm:w-9 sm:h-9"
								/>
							</div>
							<span className="hidden sm:block text-xl font-semibold text-foreground">
								Melp
							</span>
						</motion.div>

						{/* VS Badge */}
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
							className="flex-shrink-0"
						>
							<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-muted border border-border flex items-center justify-center">
								<span className="text-sm sm:text-base font-bold text-muted-foreground">
									VS
								</span>
							</div>
						</motion.div>

						{/* Teams Logo */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="flex items-center gap-3"
						>
							<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#6264A7]/10 border border-[#6264A7]/20 flex items-center justify-center shadow-lg">
								<Image
									src="/apps/teams.svg"
									alt="Microsoft Teams"
									width={36}
									height={36}
									className="w-8 h-8 sm:w-9 sm:h-9"
								/>
							</div>
							<span className="hidden sm:block text-xl font-semibold text-muted-foreground">
								Teams
							</span>
						</motion.div>
					</motion.div>

					{/* Main Headline */}
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.1] max-w-4xl mx-auto"
					>
						A modern{" "}
						<span className="text-primary">Teams alternative</span>{" "}
						for your entire company
					</motion.h1>

					{/* Subheadline */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.35 }}
						className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
					>
						Microsoft Teams is built for the Microsoft ecosystem. Melp is built
						for everyone — internal teams, external partners, and seamless
						collaboration without complexity.
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
								className="px-8 h-12 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 group"
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
								variant="outline"
								size="lg"
								className="px-8 h-12 text-base border-border/50 hover:bg-muted/50 hover:border-primary/30"
								asChild
							>
								<Link href="#comparison">See Full Comparison</Link>
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
				</div>
			</div>
		</section>
	);
}
