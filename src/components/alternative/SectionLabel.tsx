"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionLabelProps {
	children: ReactNode;
	className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
	return (
		<span
			className={cn(
				"inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase",
				className
			)}
		>
			{children}
		</span>
	);
}
