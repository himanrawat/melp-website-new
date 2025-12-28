"use client";

import { motion } from "motion/react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
	/** Description of what image should go here */
	description: string;
	/** Suggested image type (e.g., "Screenshot", "Illustration", "Mockup") */
	imageType: string;
	/** Aspect ratio class (e.g., "aspect-video", "aspect-[4/3]", "aspect-square") */
	aspectRatio?: string;
	/** Additional className */
	className?: string;
	/** Size variant */
	size?: "sm" | "md" | "lg" | "full";
}

export default function ImagePlaceholder({
	description,
	imageType,
	aspectRatio = "aspect-video",
	className,
	size = "full",
}: ImagePlaceholderProps) {
	const sizeClasses = {
		sm: "max-w-md",
		md: "max-w-2xl",
		lg: "max-w-4xl",
		full: "w-full",
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className={cn(sizeClasses[size], "mx-auto", className)}
		>
			{/* Image suggestion label */}
			<div className="mb-3 flex items-center gap-2">
				<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20">
					<ImageIcon className="w-3 h-3" />
					{imageType}
				</span>
			</div>

			{/* Placeholder container */}
			<div
				className={cn(
					aspectRatio,
					"relative w-full rounded-2xl border-2 border-dashed border-border/70 bg-muted/30 overflow-hidden"
				)}
			>
				{/* Gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

				{/* Content */}
				<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
					<div className="w-16 h-16 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center mb-4">
						<ImageIcon className="w-8 h-8 text-muted-foreground/50" />
					</div>
					<p className="text-sm text-muted-foreground max-w-md leading-relaxed">
						{description}
					</p>
				</div>

				{/* Corner decorations */}
				<div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
				<div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
				<div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
				<div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
			</div>
		</motion.div>
	);
}
