"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
	quote: string;
	author: string;
	role: string;
	company: string;
	avatar: string;
	className?: string;
}

export default function TestimonialCard({
	quote,
	author,
	role,
	company,
	avatar,
	className,
}: TestimonialCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className={className}
		>
			<div className="h-full rounded-2xl border border-border/50 bg-background overflow-hidden">
				<div className="px-8 pt-8 pb-6">
					<blockquote className="text-lg text-foreground leading-relaxed mb-6">
						&ldquo;{quote}&rdquo;
					</blockquote>

					<div className="flex items-center gap-4">
						<Image
							src={avatar}
							alt={author}
							width={48}
							height={48}
							className="rounded-full border-2 border-primary/20"
						/>
						<div>
							<div className="font-semibold text-foreground">{author}</div>
							<div className="text-sm text-muted-foreground">
								{role}, {company}
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
