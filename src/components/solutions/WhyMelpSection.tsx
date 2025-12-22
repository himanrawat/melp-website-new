"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/ui/aceternity";
import { Lock, Bot, Globe, type LucideIcon } from "lucide-react";

interface Benefit {
	text: string;
	icon: LucideIcon;
}

const benefits: Benefit[] = [
	{ text: "One Secure Workplace", icon: Lock },
	{ text: "AI-Powered Productivity", icon: Bot },
	{ text: "Multilingual Collaboration", icon: Globe },
];

export default function WhyMelpSection() {
	return (
		<motion.section
			className="py-16 sm:py-24 bg-background relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left - Content */}
					<div>
						<RevealOnScroll>
							<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
								Why Melp
							</span>
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
								One Platform. Endless Benefits.
							</h2>
							<p className="text-lg text-muted-foreground mb-6">
								Organizations across industries face the same recurring
								problems: scattered tools, rising costs, and fragmented
								workflows that slow teams down and isolate global talent behind
								language barriers.
							</p>
							<p className="text-lg text-muted-foreground mb-8">
								Melp fixes all that. It brings your team&apos;s chats, meetings,
								files, and projects together in one place. Everyone works in the
								same space, no matter what language they speak or where they
								are.
							</p>
						</RevealOnScroll>

						{/* Benefit Pills */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: 0.2 }}
							className="flex flex-wrap gap-3"
						>
							{benefits.map((benefit, index) => {
								const IconComponent = benefit.icon;
								return (
									<Badge
										key={index}
										variant="secondary"
										className="px-4 py-2 text-sm font-medium border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors"
									>
										<IconComponent className="w-4 h-4 mr-2 text-primary" />
										{benefit.text}
									</Badge>
								);
							})}
						</motion.div>
					</div>

					{/* Right - Visual */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative"
					>
						<div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 overflow-hidden">
							<div className="absolute inset-0 flex items-center justify-center">
								{/* Platform illustration placeholder */}
								<div className="relative w-3/4 h-3/4">
									<div className="absolute inset-0 rounded-xl bg-card border border-border shadow-2xl overflow-hidden">
										{/* Mock app UI */}
										<div className="h-8 bg-muted border-b border-border flex items-center px-4 gap-2">
											<div className="w-3 h-3 rounded-full bg-destructive/50" />
											<div className="w-3 h-3 rounded-full bg-yellow-500/50" />
											<div className="w-3 h-3 rounded-full bg-green-500/50" />
										</div>
										<div className="p-4 grid grid-cols-3 gap-2 h-[calc(100%-2rem)]">
											<div className="bg-muted rounded-lg" />
											<div className="col-span-2 bg-muted/50 rounded-lg" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
