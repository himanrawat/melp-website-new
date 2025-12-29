"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionDescriptionProps {
	children: ReactNode;
	className?: string;
}

export default function SectionDescription({
	children,
	className,
}: SectionDescriptionProps) {
	return (
		<p
			className={cn(
				"text-lg text-muted-foreground max-w-3xl leading-relaxed",
				className
			)}
		>
			{children}
		</p>
	);
}
