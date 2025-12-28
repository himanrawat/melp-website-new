"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/aceternity";
import Link from "next/link";

interface SolutionsCTAProps {
	title: string;
	subtitle?: string;
	primaryCta: {
		text: string;
		href: string;
	};
	secondaryCta?: {
		text: string;
		href: string;
	};
}

export default function SolutionsCTA({
	title,
	subtitle,
	primaryCta,
	secondaryCta,
}: SolutionsCTAProps) {
	return (
		<motion.section
			className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			{/* Background decorations */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
			</div>

			<div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6"
				>
					{title}
				</motion.h2>

				{subtitle && (
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
					>
						{subtitle}
					</motion.p>
				)}

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					<MagneticButton>
						<Button
							size="lg"
							className="px-10 h-14 text-lg transition-all duration-300"
							asChild
						>
							<Link href={primaryCta.href}>{primaryCta.text}</Link>
						</Button>
					</MagneticButton>

					{secondaryCta && (
						<Button
							variant="outline"
							size="lg"
							className="px-10 h-14 text-lg"
							asChild
						>
							<Link href={secondaryCta.href}>{secondaryCta.text}</Link>
						</Button>
					)}
				</motion.div>
			</div>
		</motion.section>
	);
}
