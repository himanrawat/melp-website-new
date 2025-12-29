"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionTitleProps {
	children: ReactNode;
	className?: string;
	as?: "h1" | "h2" | "h3";
}

export default function SectionTitle({
	children,
	className,
	as: Tag = "h2",
}: SectionTitleProps) {
	return (
		<Tag
			className={cn(
				"text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6",
				className
			)}
		>
			{children}
		</Tag>
	);
}
