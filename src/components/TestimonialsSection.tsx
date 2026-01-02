"use client";

import { motion } from "motion/react";
import { GlowingBorderCard, RevealOnScroll } from "@/components/ui/aceternity";

const testimonials = [
	{
		name: "Sarah Chen",
		role: "VP of Engineering, TechFlow",
		quote:
			"AI file translation is incredible — we translate technical docs for our global team instantly. Meeting summaries have cut our documentation time by 40%.",
		avatar: "SC",
		rating: 5,
	},
	{
		name: "Marcus Rodriguez",
		role: "Head of Partnerships, GrowthLabs",
		quote:
			"Draft for Me transformed how we communicate with international clients. We write proposals in minutes, and the AI always gets the professional tone right.",
		avatar: "MR",
		rating: 5,
	},
	{
		name: "Emily Watson",
		role: "CEO, CreativeStudio",
		quote:
			"Real-time transcription in multiple languages changed everything for global creative reviews. Everyone follows along in their preferred language — no one falls behind.",
		avatar: "EW",
		rating: 5,
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.5 },
	},
};

export default function TestimonialsSection() {
	return (
		<motion.section
			className="py-20 sm:py-32 bg-background relative overflow-hidden"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			viewport={{ once: false, margin: "-100px" }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			{/* Background decoration */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,32,32,0.03)_0%,transparent_50%)]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<RevealOnScroll className="text-center mb-16">
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false }}
						transition={{ duration: 0.4 }}
					>
						AI Success Stories
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						Teams achieving more with AI
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
						Leaders share how AI translation, summarization, and intelligent drafting transformed their workflows.
					</p>
				</RevealOnScroll>

				{/* Testimonials Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, margin: "-50px" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
				>
					{testimonials.map((testimonial, index) => (
						<motion.div key={index} variants={itemVariants} className="h-full">
							<GlowingBorderCard className="h-full">
								<div className="relative h-full p-6 lg:p-8 bg-card rounded-xl flex flex-col">
									{/* Rating Stars */}
									<div className="flex gap-1 mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<motion.svg
												key={i}
												className="w-5 h-5 text-amber-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												initial={{ opacity: 0, scale: 0 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ delay: 0.5 + i * 0.1 }}
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</motion.svg>
										))}
									</div>

									{/* Quote */}
									<blockquote className="text-foreground leading-relaxed flex-1">
										&ldquo;{testimonial.quote}&rdquo;
									</blockquote>

									{/* Author */}
									<div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
										{/* Avatar */}
										<motion.div
											className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-sm font-semibold text-primary"
											whileHover={{ scale: 1.1 }}
											transition={{
												type: "spring",
												stiffness: 400,
												damping: 10,
											}}
										>
											{testimonial.avatar}
										</motion.div>
										<div>
											<div className="font-semibold text-foreground">
												{testimonial.name}
											</div>
											<div className="text-sm text-muted-foreground">
												{testimonial.role}
											</div>
										</div>
									</div>
								</div>
							</GlowingBorderCard>
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.section>
	);
}
