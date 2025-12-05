"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
	{
		title: "Feature Title Placeholder",
		description:
			"This is a placeholder description text that explains the feature in one or two lines.",
	},
	{
		title: "Feature Title Placeholder",
		description:
			"This is a placeholder description text that explains the feature in one or two lines.",
	},
	{
		title: "Feature Title Placeholder",
		description:
			"This is a placeholder description text that explains the feature in one or two lines.",
	},
	{
		title: "Feature Title Placeholder",
		description:
			"This is a placeholder description text that explains the feature in one or two lines.",
	},
	{
		title: "Feature Title Placeholder",
		description:
			"This is a placeholder description text that explains the feature in one or two lines.",
	},
	{
		title: "Feature Title Placeholder",
		description:
			"This is a placeholder description text that explains the feature in one or two lines.",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
};

export default function FeaturesSection() {
	return (
		<section id="product" className="py-20 sm:py-32 bg-background">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Section Title Placeholder
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
						This is a placeholder subtitle that provides additional context
						about this section.
					</p>
				</motion.div>

				{/* Bento Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
				>
					{features.map((feature, index) => (
						<motion.div key={index} variants={itemVariants}>
							<Card className="group h-full overflow-hidden border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
								{/* Image Placeholder */}
								<div className="aspect-[4/3] w-full bg-muted/50 flex items-center justify-center border-b">
									<span className="text-sm text-muted-foreground font-medium">
										FEATURE IMAGE PLACEHOLDER
									</span>
								</div>
								{/* Content */}
								<div className="p-6">
									<h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
										{feature.title}
									</h3>
									<p className="mt-2 text-sm text-muted-foreground">
										{feature.description}
									</p>
								</div>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
