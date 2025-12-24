"use client";

import Image from "next/image";
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
					className="relative flex items-end justify-center gap-6 sm:gap-12 lg:gap-16 mb-12"
				>
					{/* Desktop */}
					<motion.div
						className="flex flex-col items-center"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
					>
						<GlowingBorderCard>
							<div className="w-72 sm:w-96 lg:w-[700px] rounded-lg overflow-hidden">
								<Image
									src="/desktop.png"
									alt="Melp Desktop App"
									width={700}
									height={437}
									className="w-full h-auto object-cover"
								/>
							</div>
						</GlowingBorderCard>
						<Badge variant="secondary" className="mt-3">
							Desktop
						</Badge>
					</motion.div>

					{/* Mobile */}
					<motion.div
						className="flex flex-col items-center -ml-12 sm:-ml-16 lg:-ml-24 z-10"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
					>
						<GlowingBorderCard>
							<div className="w-20 sm:w-24 lg:w-28 rounded-2xl overflow-hidden">
								<Image
									src="/mobile-screen.png"
									alt="Melp Mobile App"
									width={112}
									height={224}
									className="w-full h-auto object-cover"
								/>
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
