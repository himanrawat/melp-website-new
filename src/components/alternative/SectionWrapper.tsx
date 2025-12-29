"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
	children: ReactNode;
	className?: string;
}

export default function SectionWrapper({
	children,
	className,
}: SectionWrapperProps) {
	return (
		<section className={cn("py-16 sm:py-24", className)}>
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
		</section>
	);
}
