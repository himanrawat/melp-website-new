"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Star } from "lucide-react";
import { TestimonialsData } from "../types";

interface AlternativeTestimonialsProps {
	data: TestimonialsData;
}

export default function AlternativeTestimonials({
	data,
}: AlternativeTestimonialsProps) {
	return (
		<section className="py-16 sm:py-24 bg-muted/20">
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
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{data.description}
					</p>
				</motion.div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					{data.testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.author}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 * index }}
						>
							<div className="h-full rounded-2xl border border-border/50 bg-background overflow-hidden">
								{/* Quote */}
								<div className="px-8 pt-8 pb-6">
									<blockquote className="text-lg text-foreground leading-relaxed mb-6">
										&ldquo;{testimonial.quote}&rdquo;
									</blockquote>

									{/* Author */}
									<div className="flex items-center gap-4">
										<Image
											src={testimonial.avatar}
											alt={testimonial.author}
											width={48}
											height={48}
											className="rounded-full border-2 border-primary/20"
										/>
										<div>
											<div className="font-semibold text-foreground">
												{testimonial.author}
											</div>
											<div className="text-sm text-muted-foreground">
												{testimonial.role}, {testimonial.company}
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Ratings Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
					className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
				>
					{data.ratings.map((rating) => (
						<div
							key={rating.platform}
							className="flex items-center gap-3 px-6 py-3 rounded-xl bg-background border border-border/50"
						>
							<div className="flex items-center gap-1">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-4 h-4 fill-yellow-400 text-yellow-400"
									/>
								))}
							</div>
							<span className="font-semibold text-foreground">
								{rating.rating}/5
							</span>
							<span className="text-sm text-muted-foreground">
								on {rating.platform}
							</span>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
