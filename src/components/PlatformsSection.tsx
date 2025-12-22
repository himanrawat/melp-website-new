"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import {
	RevealOnScroll,
	GlowingBorderCard,
	MagneticButton,
} from "@/components/ui/aceternity";

const platforms = [
	{ label: "App Store", variant: "outline" as const },
	{ label: "Play Store", variant: "outline" as const },
	{ label: "Desktop", variant: "outline" as const },
	{ label: "Open in Browser", variant: "default" as const },
];

export default function PlatformsSection() {
	return (
		<motion.section
			className="py-20 sm:py-32 bg-background relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			{/* Background decoration */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,32,32,0.02)_0%,transparent_70%)]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<RevealOnScroll className="text-center mb-16">
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						Available Everywhere
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						Accessible anywhere, anytime
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
						Built for enterprises. Designed for people. Powered by AI. Native apps for every platform, synced in real-time.
					</p>
				</RevealOnScroll>

				{/* Device Lineup */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="relative flex items-end justify-center gap-4 sm:gap-8 mb-12"
				>
					{/* Tablet */}
					<motion.div
						className="hidden lg:flex flex-col items-center"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						<GlowingBorderCard>
							<div className="w-48 h-64 rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center overflow-hidden">
								<div className="text-center p-4">
									<div className="w-12 h-12 rounded-full border-2 border-primary/30 bg-primary/10 mx-auto mb-2" />
									<span className="text-xs text-muted-foreground">
										Tablet App
									</span>
								</div>
							</div>
						</GlowingBorderCard>
						<Badge variant="secondary" className="mt-3">
							Tablet
						</Badge>
					</motion.div>

					{/* Laptop (center, largest) */}
					<motion.div
						className="flex flex-col items-center"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
					>
						<GlowingBorderCard>
							<div className="w-64 sm:w-80 lg:w-96 aspect-[16/10] rounded-lg bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center overflow-hidden">
								<div className="text-center p-4">
									<div className="w-16 h-16 rounded-full border-2 border-primary/30 bg-primary/10 mx-auto mb-2" />
									<span className="text-sm text-muted-foreground">
										Desktop Experience
									</span>
								</div>
							</div>
						</GlowingBorderCard>
						{/* Laptop base */}
						<div className="w-72 sm:w-88 lg:w-[26rem] h-3 bg-gradient-to-r from-muted via-muted/80 to-muted rounded-b-lg" />
						<Badge variant="secondary" className="mt-3">
							Desktop
						</Badge>
					</motion.div>

					{/* Phone */}
					<motion.div
						className="flex flex-col items-center -ml-8 sm:-ml-12 lg:-ml-16 z-10"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
					>
						<GlowingBorderCard>
							<div className="w-20 sm:w-24 h-40 sm:h-48 rounded-2xl bg-gradient-to-br from-background to-muted/30 flex items-center justify-center overflow-hidden">
								<div className="text-center p-2">
									<div className="w-8 h-8 rounded-full border-2 border-primary/30 bg-primary/10 mx-auto mb-1" />
									<span className="text-[8px] text-muted-foreground">
										Mobile
									</span>
								</div>
							</div>
						</GlowingBorderCard>
						<Badge variant="secondary" className="mt-3">
							Mobile
						</Badge>
					</motion.div>
				</motion.div>

				{/* Platform Buttons */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="flex flex-wrap items-center justify-center gap-3"
				>
					{platforms.map((platform, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							{platform.variant === "default" ? (
								<MagneticButton>
									<Button variant={platform.variant} size="sm">
										{platform.label}
									</Button>
								</MagneticButton>
							) : (
								<Button variant={platform.variant} size="sm">
									{platform.label}
								</Button>
							)}
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.section>
	);
}
