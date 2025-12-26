"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
	{
		quote:
			"We switched from Microsoft Teams to Melp and saw immediate improvements in how our team collaborates with external partners. The simplicity is refreshing.",
		author: "Sarah Mitchell",
		role: "Head of Operations",
		company: "TechVentures Inc.",
		avatar: "/users/user-1.png",
	},
	{
		quote:
			"Teams was too complex for our non-technical staff. With Melp, everyone was productive from day one. No more IT support tickets for basic collaboration.",
		author: "Michael Chen",
		role: "CTO",
		company: "StartupFlow",
		avatar: "/users/user-2.png",
	},
];

const ratings = [
	{ platform: "G2 Crowd", rating: "4.8", logo: "/g2-logo.svg" },
	{ platform: "Capterra", rating: "4.7", logo: "/capterra-logo.svg" },
];

export default function CompareTestimonials() {
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
						Trusted by Teams Worldwide
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
						Teams that switched love Melp
					</h2>
				</motion.div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.author}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 * index }}
							className="relative"
						>
							<div className="h-full p-8 rounded-2xl border border-border/50 bg-background">
								{/* Quote */}
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

								{/* Switched badge */}
								<div className="absolute top-6 right-6">
									<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600">
										<span className="w-1.5 h-1.5 rounded-full bg-green-500" />
										Switched from Teams
									</span>
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
					{ratings.map((rating) => (
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
