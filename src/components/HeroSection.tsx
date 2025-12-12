"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
	MagneticButton,
	TextShimmer,
	HoverTiltCard,
} from "@/components/ui/aceternity";

const clientLogos = [
	"Acme Corp",
	"Globex",
	"Initech",
	"Umbrella",
	"Stark Ind",
	"Wayne Ent",
];

import heroimg from "/s1.png";

export default function HeroSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

	return (
		<section
			ref={containerRef}
			className="relative min-h-screen overflow-hidden bg-background"
		>
			{/* Grid Background */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

			<motion.div
				style={{ y, opacity }}
				className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 lg:pt-40"
			>
				<div className="flex flex-col items-center text-center">
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: 30, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
					>
						<Badge
							variant="secondary"
							className="mb-8 px-5 py-2 text-sm font-medium border border-border/50 bg-background/80 backdrop-blur-sm shadow-lg cursor-pointer group hover:border-primary/30 transition-all duration-300"
						>
							<motion.span
								className="flex items-center gap-2"
								whileHover={{ scale: 1.02 }}
							>
								<span className="relative flex h-2 w-2">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
									<span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
								</span>
								<span>
									Your people. Your partners. One intelligent workspace.
								</span>
								<motion.span
									className="text-primary"
									whileHover={{ x: 3 }}
									transition={{ type: "spring", stiffness: 400 }}
								>
									→
								</motion.span>
							</motion.span>
						</Badge>
					</motion.div>

					{/* Main Heading */}
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.1,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="max-w-5xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.1]"
					>
						One intelligent workspace for{" "}
						<TextShimmer className="font-bold">the world</TextShimmer>
					</motion.h1>

					{/* Subheading */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.2,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
					>
						Bring teams, partners, clients, and global workforces together in
						one intelligent platform blending emotion and enterprise power.
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
						className="mt-12 flex flex-col sm:flex-row items-center gap-4"
					>
						<MagneticButton>
							<Button
								size="lg"
								className="px-8 h-12 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 group"
							>
								<span className="flex items-center gap-2">
									Start for free
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
							</Button>
						</MagneticButton>
						<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
							<Button
								size="lg"
								variant="outline"
								className="px-8 h-12 text-base border-border/50 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300"
							>
								Watch demo
							</Button>
						</motion.div>
					</motion.div>

					{/* Trust Line */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="mt-16"
					>
						<p className="text-sm text-muted-foreground mb-6">
							Trusted by 10,000+ teams worldwide
						</p>
						{/* Client Logos */}
						<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
							{clientLogos.map((logo, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
									whileHover={{ scale: 1.05, y: -2 }}
									className="flex h-10 items-center justify-center px-4 text-sm font-medium text-muted-foreground/60 hover:text-muted-foreground transition-colors cursor-pointer"
								>
									{logo}
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Hero Image in Desktop Frame */}
					<motion.div
						initial={{ opacity: 0, y: 60, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{
							duration: 1,
							delay: 0.7,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="mt-20 w-full max-w-6xl"
					>
						<div className="relative aspect-[16/10] w-full rounded-2xl border border-border/50 bg-muted/30 shadow-2xl overflow-hidden">
							{/* Decorative elements - Desktop window buttons */}
							<div className="absolute top-4 left-4 flex gap-2 z-10">
								<div className="w-3 h-3 rounded-full bg-red-400/60" />
								<div className="w-3 h-3 rounded-full bg-yellow-400/60" />
								<div className="w-3 h-3 rounded-full bg-green-400/60" />
							</div>

							{/* Hero Image */}
							<img
								src="/dark-s1.png"
								alt="Product screenshot"
								className="absolute inset-0 w-full h-full object-contain object-top pt-8"
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
			>
				<span className="text-sm text-muted-foreground">Scroll to explore</span>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 1.5, repeat: Infinity }}
					className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
				>
					<motion.div
						animate={{ y: [0, 12, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
						className="w-1.5 h-1.5 rounded-full bg-primary"
					/>
				</motion.div>
			</motion.div>

			{/* Bottom fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
		</section>
	);
}
