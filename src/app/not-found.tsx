"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
	SpotlightCard,
	BackgroundBeams,
	FloatingElement,
	TextShimmer,
} from "@/components/ui/aceternity";
import { Home, ArrowLeft, Search, MessageCircle } from "lucide-react";

// Animated 404 text
function Animated404() {
	return (
		<div className="relative">
			{/* Glow effect */}
			<div className="absolute inset-0 blur-3xl opacity-20">
				<div className="text-[200px] md:text-[280px] font-bold text-primary">
					404
				</div>
			</div>

			{/* Main text */}
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.6,
					ease: [0.21, 0.47, 0.32, 0.98],
				}}
				className="relative"
			>
				<FloatingElement duration={4}>
					<h1 className="text-[140px] md:text-[220px] font-bold leading-none tracking-tighter">
						<TextShimmer className="text-[140px] md:text-[220px] font-bold">
							404
						</TextShimmer>
					</h1>
				</FloatingElement>
			</motion.div>
		</div>
	);
}

// Quick links
const quickLinks = [
	{
		label: "Go Home",
		href: "/",
		icon: Home,
		description: "Back to the homepage",
	},
	{
		label: "Help Center",
		href: "/resources/help",
		icon: Search,
		description: "Find what you need",
	},
	{
		label: "Contact Us",
		href: "/contact",
		icon: MessageCircle,
		description: "Get in touch",
	},
];

export default function NotFound() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className="min-h-screen bg-background flex flex-col">
			<main className="flex-1 relative flex items-center justify-center overflow-hidden">
				{/* Background elements */}
				<BackgroundBeams />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,32,32,0.03)_0%,transparent_60%)]" />

				<div className="relative z-10 text-center px-4 py-16 md:py-24">
					{/* 404 Animation */}
					<Animated404 />

					{/* Message */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className="mt-6 md:mt-8"
					>
						<h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
							Page not found
						</h2>
						<p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
							The page you&apos;re looking for doesn&apos;t exist or has been
							moved. Let&apos;s get you back on track.
						</p>
					</motion.div>

					{/* Primary CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className="mb-12"
					>
						<Link href="/">
							<Button
								size="lg"
								className="px-8 h-12 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 font-medium group"
							>
								<ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
								Back to Homepage
							</Button>
						</Link>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
					>
						{quickLinks.map((link, index) => {
							const Icon = link.icon;
							return (
								<Link key={link.label} href={link.href}>
									<SpotlightCard
										className="h-full"
										spotlightColor="rgba(34, 32, 32, 0.1)"
									>
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												delay: 0.5 + index * 0.1,
												duration: 0.4,
											}}
											whileHover={{ y: -2 }}
											className="p-6 cursor-pointer"
										>
											<div className="flex flex-col items-center text-center gap-3">
												<div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
													<Icon className="w-5 h-5 text-muted-foreground" />
												</div>
												<div>
													<h3 className="font-semibold text-foreground mb-1">
														{link.label}
													</h3>
													<p className="text-sm text-muted-foreground">
														{link.description}
													</p>
												</div>
											</div>
										</motion.div>
									</SpotlightCard>
								</Link>
							);
						})}
					</motion.div>

					{/* Subtle message */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.5 }}
						className="mt-16 text-sm text-muted-foreground/50"
					>
						Error 404 • Page not found
					</motion.p>
				</div>
			</main>

		</div>
	);
}
