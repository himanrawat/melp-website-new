"use client";

import { motion } from "motion/react";
import {
	Layers,
	Users,
	Zap,
	FolderKanban,
	TrendingUp,
} from "lucide-react";

const reasons = [
	{
		icon: Layers,
		title: "Eliminates tool overload",
		description:
			"Stop juggling between multiple apps. Melp brings chat, video, files, and calendar into one streamlined workspace.",
	},
	{
		icon: Users,
		title: "Enables external collaboration",
		description:
			"Work seamlessly with clients, vendors, and partners. No complex guest access or restricted features.",
	},
	{
		icon: Zap,
		title: "Improves communication speed",
		description:
			"Real-time messaging with smart notifications that surface what matters. No more missed updates or delayed responses.",
	},
	{
		icon: FolderKanban,
		title: "Keeps everything organized",
		description:
			"Topic-based conversations and structured teams keep your workspace clean and searchable.",
	},
	{
		icon: TrendingUp,
		title: "Boosts team alignment",
		description:
			"Everyone stays on the same page with shared context, transparent discussions, and clear accountability.",
	},
];

export default function WhySwitchingSection() {
	return (
		<section className="py-16 sm:py-24 bg-background">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
						The Shift Is Happening
					</span>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
						Why businesses are switching to{" "}
						<span className="text-primary">Teams alternatives</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Businesses are turning to Microsoft Teams alternatives to overcome tool overload, scattered communication, and slow collaboration. As teams grow and work with external partners, they need a platform that keeps everything organized and connected.
					</p>
				</motion.div>

				{/* Reasons Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{reasons.map((reason, index) => {
						const Icon = reason.icon;
						return (
							<motion.div
								key={reason.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group relative"
							>
								<div className="h-full p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/60 transition-all duration-300">
									{/* Icon */}
									<motion.div
										className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
										whileHover={{ scale: 1.1, rotate: 5 }}
										transition={{ type: "spring", stiffness: 400 }}
									>
										<Icon className="w-6 h-6 text-primary" />
									</motion.div>

									{/* Content */}
									<h3 className="text-lg font-semibold text-foreground mb-2">
										{reason.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{reason.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Bottom CTA text */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
					className="mt-16 text-center"
				>
					<p className="text-lg text-foreground font-medium">
						Melp App simplifies how teams communicate, share ideas, and stay aligned
					</p>
					<p className="text-muted-foreground mt-2">
						All in one seamless workspace designed for how modern teams actually work.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
