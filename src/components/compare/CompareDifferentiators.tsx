"use client";

import { motion } from "motion/react";
import { Users, Layers, Zap, DollarSign } from "lucide-react";

const differentiators = [
	{
		icon: Layers,
		title: "Organized Communication",
		description:
			"Keeps communication organized and focused. Topics, teams, and threads ensure conversations stay structured and easy to follow.",
	},
	{
		icon: Users,
		title: "Cross-Functional Teamwork",
		description:
			"Supports external and cross-functional teamwork. Invite clients, vendors, and partners without friction.",
	},
	{
		icon: Zap,
		title: "Reduced Tool Fatigue",
		description:
			"Reduces tool switching and fatigue. Replace 5+ apps with one unified workspace for chat, meetings, and files.",
	},
	{
		icon: DollarSign,
		title: "Measurable Outcomes",
		description:
			"Turns collaboration into measurable outcomes. Improve clarity, real-time coordination, and team productivity.",
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
					<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
						Why Melp?
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
						Key reasons Melp App is becoming the preferred Microsoft Teams
						alternative
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Melp App gives organizations a smarter way to manage teamwork and
						communication. It replaces scattered tools with one structured space
						built around teams, topics, and real-time interaction. As a reliable
						alternative to Teams, it connects people, ideas, and workstreams
						effortlessly.
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
