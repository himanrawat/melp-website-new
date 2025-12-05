"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const platforms = [
	{ label: "App Store", variant: "outline" as const },
	{ label: "Play Store", variant: "outline" as const },
	{ label: "Desktop", variant: "outline" as const },
	{ label: "Open in Browser", variant: "default" as const },
];

export default function PlatformsSection() {
	return (
		<section className="py-20 sm:py-32 bg-background">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Melp on All Platforms
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
						Placeholder description about accessing Melp from any device,
						anywhere.
					</p>
				</motion.div>

				{/* Device Lineup */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="relative flex items-end justify-center gap-4 sm:gap-8 mb-12"
				>
					{/* Tablet (optional, hidden on small screens) */}
					<div className="hidden lg:flex flex-col items-center">
						<div className="w-48 h-64 rounded-xl border-4 border-muted bg-muted/30 flex items-center justify-center">
							<span className="text-xs text-muted-foreground text-center px-2">
								TABLET UI PLACEHOLDER
							</span>
						</div>
						<Badge variant="secondary" className="mt-3">
							Tablet
						</Badge>
					</div>

					{/* Laptop (center, largest) */}
					<div className="flex flex-col items-center">
						<div className="w-64 sm:w-80 lg:w-96 aspect-[16/10] rounded-lg border-4 border-muted bg-muted/30 flex items-center justify-center shadow-xl">
							<span className="text-sm text-muted-foreground text-center px-4">
								DESKTOP UI PLACEHOLDER
							</span>
						</div>
						{/* Laptop base */}
						<div className="w-72 sm:w-88 lg:w-[26rem] h-3 bg-muted rounded-b-lg border-x-4 border-b-4 border-muted" />
						<Badge variant="secondary" className="mt-3">
							Desktop
						</Badge>
					</div>

					{/* Phone (front, overlapping) */}
					<div className="flex flex-col items-center -ml-8 sm:-ml-12 lg:-ml-16 z-10">
						<div className="w-20 sm:w-24 h-40 sm:h-48 rounded-2xl border-4 border-muted bg-background flex items-center justify-center shadow-lg">
							<span className="text-[10px] text-muted-foreground text-center px-1">
								MOBILE UI PLACEHOLDER
							</span>
						</div>
						<Badge variant="secondary" className="mt-3">
							Mobile
						</Badge>
					</div>
				</motion.div>

				{/* Platform Buttons */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="flex flex-wrap items-center justify-center gap-3"
				>
					{platforms.map((platform, index) => (
						<Button key={index} variant={platform.variant} size="sm">
							{platform.label}
						</Button>
					))}
				</motion.div>
			</div>
		</section>
	);
}
