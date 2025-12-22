"use client";

import { motion } from "motion/react";
import { RevealOnScroll, GlowingBorderCard } from "@/components/ui/aceternity";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	Rocket,
	Building2,
	Landmark,
	Leaf,
	ArrowRight,
	type LucideIcon,
} from "lucide-react";

interface CompanyType {
	title: string;
	description: string;
	href: string;
	icon: LucideIcon;
}

const companyTypes: CompanyType[] = [
	{
		title: "Startups & SMBs",
		description:
			"Easy to set up, affordable, and perfect for growing businesses.",
		href: "/solutions/smes",
		icon: Rocket,
	},
	{
		title: "Enterprises",
		description:
			"Advanced admin controls, secure & compliant infrastructure, flexible deployment.",
		href: "/solutions/enterprises",
		icon: Building2,
	},
	{
		title: "Governments",
		description:
			"On-premises hosting and full compliance with data sovereignty standards.",
		href: "/solutions/government",
		icon: Landmark,
	},
	{
		title: "NGOs",
		description:
			"Cost-efficient, simple to use, and suitable for impact-driven organizations.",
		href: "/solutions/ngos",
		icon: Leaf,
	},
];

export default function CompanySizeSection() {
	return (
		<motion.section
			className="py-16 sm:py-24 bg-background relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<RevealOnScroll className="text-center mb-12">
					<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
						Company Types
					</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
						The right fit for every company type
					</h2>
				</RevealOnScroll>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{companyTypes.map((type, index) => {
						const IconComponent = type.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
							>
								<GlowingBorderCard className="h-full">
									<div className="p-6 bg-card rounded-xl h-full flex flex-col group text-center">
										{/* Icon */}
										<div className="w-16 h-16 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
											<IconComponent className="w-8 h-8 text-primary" />
										</div>

										{/* Content */}
										<h3 className="font-semibold text-foreground text-lg mb-2">
											{type.title}
										</h3>
										<p className="text-sm text-muted-foreground flex-1 mb-4">
											{type.description}
										</p>

										{/* CTA */}
										<Button
											variant="ghost"
											size="sm"
											className="w-fit mx-auto text-primary hover:text-primary/80 p-0 h-auto font-medium group/btn"
											asChild
										>
											<Link href={type.href}>
												Learn More
												<ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
											</Link>
										</Button>
									</div>
								</GlowingBorderCard>
							</motion.div>
						);
					})}
				</div>
			</div>
		</motion.section>
	);
}
