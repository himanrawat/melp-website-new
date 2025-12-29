"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TrustIndicatorsProps {
	className?: string;
}

export default function TrustIndicators({ className }: TrustIndicatorsProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			className={cn(
				"flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground",
				className
			)}
		>
			<div className="flex items-center gap-2">
				<div className="flex -space-x-2">
					<Image
						src="/users/user-1.png"
						alt="User"
						width={28}
						height={28}
						className="rounded-full border-2 border-background"
					/>
					<Image
						src="/users/user-2.png"
						alt="User"
						width={28}
						height={28}
						className="rounded-full border-2 border-background"
					/>
					<Image
						src="/users/user-3.png"
						alt="User"
						width={28}
						height={28}
						className="rounded-full border-2 border-background"
					/>
				</div>
				<span>10,000+ teams switched</span>
			</div>
			<div className="hidden sm:block w-px h-4 bg-border" />
			<div className="flex items-center gap-2">
				<Image
					src="/logo-AICPA-SOC.svg"
					alt="SOC 2"
					width={20}
					height={20}
					className="opacity-60"
				/>
				<Image
					src="/logo-gdpr.svg"
					alt="GDPR"
					width={20}
					height={20}
					className="opacity-60"
				/>
				<span>Enterprise-grade security</span>
			</div>
		</motion.div>
	);
}
