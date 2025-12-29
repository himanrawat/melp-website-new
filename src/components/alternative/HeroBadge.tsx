"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeroBadgeProps {
	children: ReactNode;
	className?: string;
}

export default function HeroBadge({ children, className }: HeroBadgeProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.6 }}
			className={cn(
				"flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5",
				className
			)}
		>
			<div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
				<Image src="/logo-short.svg" alt="Melp" width={20} height={20} />
			</div>
			<span className="text-sm font-medium text-foreground">{children}</span>
		</motion.div>
	);
}
