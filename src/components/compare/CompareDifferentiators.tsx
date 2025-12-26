"use client";

import { motion } from "motion/react";
import { Users, Layers, Zap, DollarSign } from "lucide-react";

const differentiators = [
	{
		icon: Layers,
		title: "No Tool Overload",
		description:
			"Replace 5+ apps with one unified workspace. Chat, meet, share files, and manage calendars — all in Melp.",
	},
	{
		icon: Users,
		title: "External Teams Welcome",
		description:
			"Invite clients, vendors, and partners without friction. Collaboration shouldn't stop at your company's edge.",
	},
	{
		icon: Zap,
		title: "Organized by Design",
		description:
			"Topics, teams, and threads keep conversations structured. Find anything in seconds, not hours.",
	},
	{
		icon: DollarSign,
		title: "Start Free, Scale Easy",
		description:
			"Begin with our generous free tier. Upgrade when you need more — no hidden costs or surprise fees.",
	},
];

export default function CompareDifferentiators() {
	return (
		<section className="py-16 sm:py-24 bg-background">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-14"
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
						Why businesses choose Melp over Teams
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Modern teams need modern tools. Here&apos;s what sets Melp apart.
					</p>
				</motion.div>

				{/* Differentiators Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{differentiators.map((item, index) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 * index }}
							className="group"
						>
							<div className="h-full p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
								<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
									<item.icon className="w-7 h-7 text-primary" />
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-2">
									{item.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{item.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
