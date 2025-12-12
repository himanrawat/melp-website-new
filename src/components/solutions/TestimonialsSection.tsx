"use client";

import { motion } from "framer-motion";
import { GlowingBorderCard, RevealOnScroll } from "@/components/ui/aceternity";

interface Testimonial {
	quote: string;
	author: string;
	role: string;
	location?: string;
}

interface TestimonialsSectionProps {
	title?: string;
	testimonials: Testimonial[];
}

export default function TestimonialsSection({
	title = "Here's what others say about Melp",
	testimonials,
}: TestimonialsSectionProps) {
	return (
		<motion.section
			className="py-16 sm:py-24 bg-muted/30 relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,32,32,0.03)_0%,transparent_50%)]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<RevealOnScroll className="text-center mb-12">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
						{title}
					</h2>
				</RevealOnScroll>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.15 }}
						>
							<GlowingBorderCard className="h-full">
								<div className="relative h-full p-6 lg:p-8 bg-card rounded-xl flex flex-col">
									{/* Quote icon */}
									<div className="text-primary/30 text-5xl font-serif mb-4">
										"
									</div>

									{/* Quote */}
									<blockquote className="text-foreground text-base sm:text-lg leading-relaxed flex-1 -mt-4">
										{testimonial.quote}
									</blockquote>

									{/* Author */}
									<div className="mt-6 flex items-center gap-4">
										<div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
											<span className="text-primary font-semibold">
												{testimonial.author
													.split(" ")
													.map((n) => n[0])
													.join("")}
											</span>
										</div>
										<div>
											<p className="font-semibold text-foreground">
												{testimonial.author}
											</p>
											<p className="text-sm text-muted-foreground">
												{testimonial.role}
												{testimonial.location && `, ${testimonial.location}`}
											</p>
										</div>
									</div>
								</div>
							</GlowingBorderCard>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
