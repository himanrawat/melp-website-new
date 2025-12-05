"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const productHighlights = [
	{
		title: "Feature Highlight 1",
		description:
			"This is a placeholder description for the first product highlight panel.",
	},
	{
		title: "Feature Highlight 2",
		description:
			"This is a placeholder description for the second product highlight panel.",
	},
	{
		title: "Feature Highlight 3",
		description:
			"This is a placeholder description for the third product highlight panel.",
	},
	{
		title: "Feature Highlight 4",
		description:
			"This is a placeholder description for the fourth product highlight panel.",
	},
];

export default function HorizontalScrollSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

	return (
		<section className="bg-muted/30">
			{/* Mobile: Native horizontal scroll */}
			<div className="md:hidden py-16 px-4">
				<div className="text-center mb-8">
					<h2 className="text-2xl font-bold tracking-tight text-foreground">
						How Melp Works
					</h2>
					<p className="mt-2 text-muted-foreground">
						Scroll to explore our product highlights
					</p>
				</div>
				<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
					{productHighlights.map((item, index) => (
						<div key={index} className="flex-shrink-0 w-[85vw] snap-center">
							<div className="h-full rounded-xl border bg-card overflow-hidden">
								<div className="aspect-video w-full bg-muted/50 flex items-center justify-center">
									<span className="text-sm text-muted-foreground font-medium text-center px-4">
										PRODUCT UI SCREENSHOT PLACEHOLDER {index + 1}
									</span>
								</div>
								<div className="p-6">
									<h3 className="text-lg font-semibold">{item.title}</h3>
									<p className="mt-2 text-sm text-muted-foreground">
										{item.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Desktop: Scroll-driven horizontal animation */}
			<div ref={containerRef} className="hidden md:block relative h-[300vh]">
				<div className="sticky top-0 h-screen overflow-hidden flex items-center">
					<div className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-10">
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							How Melp Works
						</h2>
						<p className="mt-2 text-muted-foreground">
							Scroll to explore our product highlights
						</p>
					</div>
					<motion.div style={{ x }} className="flex gap-8 pl-[10vw] pt-20">
						{productHighlights.map((item, index) => (
							<motion.div
								key={index}
								className="flex-shrink-0 w-[70vw] max-w-4xl"
								initial={{ opacity: 0.5, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: false, amount: 0.8 }}
								transition={{ duration: 0.3 }}
							>
								<div className="h-full rounded-2xl border bg-card shadow-xl overflow-hidden">
									<div className="aspect-video w-full bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
										<div className="text-center">
											<div className="mb-4 text-6xl font-bold text-muted-foreground/20">
												0{index + 1}
											</div>
											<span className="text-lg text-muted-foreground font-medium">
												PRODUCT UI SCREENSHOT PLACEHOLDER
											</span>
										</div>
									</div>
									<div className="p-8">
										<h3 className="text-2xl font-semibold">{item.title}</h3>
										<p className="mt-3 text-muted-foreground">
											{item.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
						{/* Spacer at end */}
						<div className="flex-shrink-0 w-[30vw]" />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
