"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { MagneticButton } from "@/components/ui/aceternity";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const heroFeatures = [
	"Eliminates tool overload and scattered workflows",
	"Enables smooth external and internal collaboration",
	"Improves communication speed and clarity",
	"Keeps conversations and teamwork well-structured",
];

export default function TeamsAlternativeHero() {
	return (
		<section className="relative min-h-[90vh] overflow-hidden bg-background isolate">
			{/* Animated gradient background */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-50"
				animate={{
					backgroundPosition: ["0% 0%", "100% 100%"],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					repeatType: "reverse",
				}}
			/>

			{/* Grid Background */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

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

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Column - Content */}
					<div className="flex flex-col">
						{/* Badge */}
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
									Microsoft Teams Alternative
								</motion.span>
							</Badge>
						</motion.div>

						{/* Main Heading */}
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
							Your all-in-one{" "}
							<motion.span
								className="text-primary relative"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
							>
								Microsoft Teams alternative
								<motion.span
									className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"
									initial={{ scaleX: 0 }}
									animate={{ scaleX: 1 }}
									transition={{ duration: 0.8, delay: 0.6 }}
								/>
							</motion.span>{" "}
							for seamless collaboration
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
							Your search stops here. Experience Melp App and bring effortless communication and teamwork to your entire business. One intelligent workspace for chat, video conferencing, calendar, and team collaboration.
						</motion.p>

						{/* Feature List */}
						<motion.ul
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.35 }}
							className="mt-8 space-y-3"
						>
							{heroFeatures.map((feature, index) => (
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
										className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center"
										whileHover={{
											scale: 1.2,
											backgroundColor: "rgb(34 197 94 / 0.2)",
										}}
									>
										<Check className="w-3 h-3 text-green-500" />
									</motion.div>
									<span className="text-sm sm:text-base">{feature}</span>
								</motion.li>
							))}
						</motion.ul>

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
									variant="brand-primary"
									size="lg"
									className="px-8 h-12 text-base transition-all duration-300 group"
									asChild
								>
									<Link href="/pricing">
										<span className="flex items-center gap-2">
											Try Melp Free
											<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
										</span>
									</Link>
								</Button>
							</MagneticButton>

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
									<Link href="/compare/microsoft-teams">See Full Comparison</Link>
								</Button>
							</motion.div>
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
							className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
							whileHover={{ scale: 1.02 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							{/* Main product image */}
							<Image
								src="/assets/laptop-mobile-video-call-ui.png"
								alt="Melp App - Microsoft Teams Alternative showing video conferencing on laptop and mobile"
								fill
								className="object-cover"
								priority
							/>

							{/* Subtle overlay gradient */}
							<div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
						</motion.div>

						{/* Floating badges */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 }}
							className="absolute -bottom-4 -left-4 sm:-left-8 bg-background/90 backdrop-blur-sm rounded-xl border border-border/50 p-3 shadow-lg"
						>
							<div className="flex items-center gap-3">
								<div className="flex -space-x-2">
									<Image src="/users/user-1.png" alt="User" width={32} height={32} className="rounded-full border-2 border-background" />
									<Image src="/users/user-2.png" alt="User" width={32} height={32} className="rounded-full border-2 border-background" />
									<Image src="/users/user-3.png" alt="User" width={32} height={32} className="rounded-full border-2 border-background" />
								</div>
								<div>
									<div className="text-xs font-medium text-foreground">Trusted by 10,000+</div>
									<div className="text-xs text-muted-foreground">teams worldwide</div>
								</div>
							</div>
						</motion.div>

						{/* Security badges */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.9 }}
							className="absolute -top-4 -right-4 sm:-right-8 bg-background/90 backdrop-blur-sm rounded-xl border border-border/50 p-3 shadow-lg"
						>
							<div className="flex items-center gap-2">
								<Image src="/logo-AICPA-SOC.svg" alt="SOC 2" width={24} height={24} className="opacity-70" />
								<Image src="/logo-gdpr.svg" alt="GDPR" width={24} height={24} className="opacity-70" />
								<Image src="/HIPAA-Logo.svg" alt="HIPAA" width={24} height={24} className="opacity-70" />
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
