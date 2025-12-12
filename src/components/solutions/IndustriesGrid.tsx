"use client";

import { motion } from "framer-motion";
import { RevealOnScroll, GlowingBorderCard } from "@/components/ui/aceternity";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	Monitor,
	GraduationCap,
	Handshake,
	Heart,
	Landmark,
	Scale,
	Palette,
	ArrowRight,
	type LucideIcon,
} from "lucide-react";

interface Industry {
	title: string;
	description: string;
	href: string;
	icon: LucideIcon;
}

const industries: Industry[] = [
	{
		title: "IT & Technology",
		description:
			"Secure, multilingual collaboration for global tech and consulting teams.",
		href: "/solutions/it-technology",
		icon: Monitor,
	},
	{
		title: "Education & Training",
		description:
			"Virtual classrooms, smart scheduling, and real-time translation for inclusive learning.",
		href: "/solutions/education",
		icon: GraduationCap,
	},
	{
		title: "Customer-Facing Teams",
		description:
			"Connect faster with clients and partners through instant meeting access and real-time translation.",
		href: "/solutions/customer-teams",
		icon: Handshake,
	},
	{
		title: "Healthcare & Life Sciences",
		description:
			"HIPAA-compliant communication and document sharing for telemedicine and research.",
		href: "/solutions/pharma",
		icon: Heart,
	},
	{
		title: "Government & Public Sector",
		description:
			"On-premises deployment with full data sovereignty and cross-department collaboration.",
		href: "/solutions/government",
		icon: Landmark,
	},
	{
		title: "Legal & Financial Services",
		description:
			"Secure meetings, audit-ready documentation, and confidential client communication.",
		href: "/solutions/legal",
		icon: Scale,
	},
	{
		title: "Creative & Media",
		description:
			"Collaborative creation, version control, and multilingual streaming for global audiences.",
		href: "/solutions/creative-media",
		icon: Palette,
	},
];

export default function IndustriesGrid() {
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
					<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
						Industries
					</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
						Industries we serve
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Tailored solutions for every sector
					</p>
				</RevealOnScroll>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{industries.map((industry, index) => {
						const IconComponent = industry.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
							>
								<GlowingBorderCard className="h-full">
									<div className="p-6 bg-card rounded-xl h-full flex flex-col group">
										{/* Icon */}
										<div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
											<IconComponent className="w-7 h-7 text-primary" />
										</div>

										{/* Content */}
										<h3 className="font-semibold text-foreground text-lg mb-2">
											{industry.title}
										</h3>
										<p className="text-sm text-muted-foreground flex-1 mb-4">
											{industry.description}
										</p>

										{/* CTA */}
										<Button
											variant="ghost"
											size="sm"
											className="w-fit text-primary hover:text-primary/80 p-0 h-auto font-medium group/btn"
											asChild
										>
											<Link href={industry.href}>
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
