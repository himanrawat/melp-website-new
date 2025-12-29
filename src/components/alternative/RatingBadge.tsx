"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingBadgeProps {
	platform: string;
	rating: string;
	className?: string;
}

export default function RatingBadge({
	platform,
	rating,
	className,
}: RatingBadgeProps) {
	return (
		<div
			className={cn(
				"flex items-center gap-3 px-6 py-3 rounded-xl bg-background border border-border/50",
				className
			)}
		>
			<div className="flex items-center gap-1">
				{[...Array(5)].map((_, i) => (
					<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
				))}
			</div>
			<span className="font-semibold text-foreground">{rating}/5</span>
			<span className="text-sm text-muted-foreground">on {platform}</span>
		</div>
	);
}
