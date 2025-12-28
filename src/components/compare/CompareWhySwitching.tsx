"use client";

import { motion } from "motion/react";
import {
	Layers,
	Users,
	MessageSquare,
	FolderKanban,
	TrendingUp,
} from "lucide-react";

const reasons = [
	{
		icon: Layers,
		text: "Eliminates tool overload and scattered workflows",
	},
	{
		icon: Users,
		text: "Enables smooth external and internal collaboration",
	},
	{
		icon: MessageSquare,
		text: "Improves communication speed and clarity",
	},
	{
		icon: FolderKanban,
		text: "Keeps conversations and teamwork well-structured",
	},
	{
		icon: TrendingUp,
		text: "Boosts productivity and team alignment",
	},
];

export default function CompareWhySwitching() {
	return (
		<section className="py-16 sm:py-24 bg-background">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Column - Main Content */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
							Why Switch?
						</span>
						<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
							Why are businesses switching to Microsoft Teams alternatives?
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Businesses are turning to Microsoft Teams alternatives to overcome
							tool overload, scattered communication, and slow collaboration. As
							teams grow and work with external partners, they need a platform
							that keeps everything organized and connected. Melp App simplifies
							how teams communicate, share ideas, and stay aligned — all in one
							seamless workspace.
						</p>
					</motion.div>

					{/* Right Column - Reasons List */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="space-y-4"
					>
						<h3 className="text-lg font-semibold text-foreground mb-6">
							Key reasons businesses are switching:
						</h3>
						{reasons.map((reason, index) => (
							<motion.div
								key={reason.text}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 * index }}
								className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
							>
								<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
									<reason.icon className="w-5 h-5 text-primary" />
								</div>
								<span className="text-foreground font-medium">
									{reason.text}
								</span>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
