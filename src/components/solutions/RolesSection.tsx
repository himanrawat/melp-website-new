"use client";

import { motion } from "motion/react";
import { RevealOnScroll } from "@/components/ui/aceternity";
import { User, type LucideIcon } from "lucide-react";

interface Role {
	title: string;
	description: string;
	icon?: LucideIcon;
}

interface RolesSectionProps {
	title?: string;
	subtitle?: string;
	roles: Role[];
}

export default function RolesSection({
	title = "Built with the right people in mind",
	subtitle,
	roles,
}: RolesSectionProps) {
	return (
		<motion.section
			className="py-16 sm:py-24 bg-muted/30 relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<RevealOnScroll className="text-center mb-12">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
						{title}
					</h2>
					{subtitle && (
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							{subtitle}
						</p>
					)}
				</RevealOnScroll>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{roles.map((role, index) => {
						const IconComponent = role.icon || User;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								className="group"
							>
								<div className="p-6 bg-card rounded-xl border border-border/50 h-full flex flex-col hover:border-primary/30 hover:shadow-lg transition-all duration-300">
									{/* Avatar with icon */}
									<div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
										<IconComponent className="w-7 h-7 text-primary" />
									</div>
									<h3 className="font-semibold text-foreground mb-2">
										{role.title}
									</h3>
									<p className="text-sm text-muted-foreground flex-1">
										{role.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</motion.section>
	);
}
