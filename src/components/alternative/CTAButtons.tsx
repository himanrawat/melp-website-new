"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/aceternity";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonsProps {
	primaryText?: string;
	primaryHref?: string;
	secondaryText?: string;
	secondaryHref?: string;
	className?: string;
}

export default function CTAButtons({
	primaryText = "Start for Free",
	primaryHref = "/pricing",
	secondaryText = "Schedule a Demo",
	secondaryHref = "/product",
	className,
}: CTAButtonsProps) {
	return (
		<div
			className={cn(
				"flex flex-col sm:flex-row items-center justify-center gap-4",
				className
			)}
		>
			<MagneticButton>
				<Button
					variant="brand-primary"
					size="lg"
					className="px-8 h-12 text-base transition-all duration-300 group"
					asChild
				>
					<Link href={primaryHref}>
						<span className="flex items-center gap-2">
							{primaryText}
							<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
						</span>
					</Link>
				</Button>
			</MagneticButton>

			<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
				<Button
					variant="brand-dark"
					size="lg"
					className="px-8 h-12 text-base border-border/50 hover:bg-muted/50 hover:border-primary/30"
					asChild
				>
					<Link href={secondaryHref}>{secondaryText}</Link>
				</Button>
			</motion.div>
		</div>
	);
}
