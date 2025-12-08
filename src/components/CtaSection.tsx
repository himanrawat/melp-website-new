"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TextShimmer, MagneticButton } from "@/components/ui/aceternity";

export default function CtaSection() {
	return (
		<motion.section
			className="relative py-20 sm:py-32 bg-gradient-to-b from-muted/20 via-primary/[0.02] to-muted/20 overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			{/* Grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)] bg-[size:40px_40px]" />

			<div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-6 tracking-wider uppercase"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						Get Started Today
					</motion.span>

					<TextShimmer className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
						Ready to transform how your team works?
					</TextShimmer>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
					>
						Join thousands of teams already using Melp to collaborate smarter.
						Start free, no credit card required.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
					>
						<MagneticButton>
							<Button size="lg" className="px-8 h-12 text-base group">
								Start for Free
								<motion.svg
									className="ml-2 w-4 h-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									initial={{ x: 0 }}
									animate={{ x: [0, 4, 0] }}
									transition={{ duration: 1.5, repeat: Infinity }}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</motion.svg>
							</Button>
						</MagneticButton>

						<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
							<Button
								size="lg"
								variant="outline"
								className="px-8 h-12 text-base"
							>
								Schedule a Demo
							</Button>
						</motion.div>
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.5 }}
						className="mt-6 text-sm text-muted-foreground"
					>
						✨ Free forever for small teams • No credit card required • Setup in
						2 minutes
					</motion.p>
				</motion.div>
			</div>
		</motion.section>
	);
}
