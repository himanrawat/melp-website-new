"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Icon } from "./icons";
import { IconName } from "./types";

interface FeatureCardProps {
	icon: IconName;
	title: string;
	description: string;
	className?: string;
}

export default function FeatureCard({
	icon,
	title,
	description,
	className,
}: FeatureCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className={cn("group", className)}
		>
			<div className="h-full p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
				<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
					<Icon name={icon} className="w-7 h-7 text-primary" />
				</div>
				<h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
				<p className="text-muted-foreground leading-relaxed">{description}</p>
			</div>
		</motion.div>
	);
}
