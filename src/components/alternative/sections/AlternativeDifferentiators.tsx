"use client";

import { motion } from "motion/react";
import ImagePlaceholder from "../ImagePlaceholder";
import { Icon } from "../icons";
import { DifferentiatorsData } from "../types";
import { cn } from "@/lib/utils";

interface AlternativeDifferentiatorsProps {
	data: DifferentiatorsData;
}

export default function AlternativeDifferentiators({
	data,
}: AlternativeDifferentiatorsProps) {
	const gridColsClass = {
		2: "sm:grid-cols-2",
		3: "sm:grid-cols-2 lg:grid-cols-3",
		4: "sm:grid-cols-2 lg:grid-cols-4",
	};

	return (
		<section className="py-16 sm:py-24 bg-background">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-14"
				>
					<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
						{data.label}
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
						{data.title}
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						{data.description}
					</p>
				</motion.div>

				{/* Differentiators Grid */}
				<div
					className={cn(
						"grid grid-cols-1 gap-6 mb-16",
						gridColsClass[data.gridCols || 4]
					)}
				>
					{data.differentiators.map((item, index) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 * index }}
							className="group"
						>
							<div className="h-full p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
								<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
									<Icon name={item.icon} className="w-7 h-7 text-primary" />
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-2">
									{item.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{item.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Visual Images */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<ImagePlaceholder
						imageType="Product Mockup"
						description={data.image1Description}
						aspectRatio="aspect-[4/3]"
						size="full"
					/>
					<ImagePlaceholder
						imageType="Security Dashboard"
						description={data.image2Description}
						aspectRatio="aspect-[4/3]"
						size="full"
					/>
				</div>
			</div>
		</section>
	);
}
