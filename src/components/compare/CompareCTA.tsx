"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/aceternity";
import { ArrowRight } from "lucide-react";

export default function CompareCTA() {
	return (
		<section className="py-20 sm:py-28 bg-gradient-to-b from-muted/30 via-background to-muted/30 overflow-hidden relative">
			{/* Grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)]" />

			<div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						Ready to Switch?
					</motion.span>

					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
						Experience the difference today
					</h2>

					<p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
						Join thousands of teams who&apos;ve already made the switch. Start
						free and see why modern businesses choose Melp over Microsoft Teams.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<MagneticButton>
							<Button
								variant="brand-primary"
								size="lg"
								className="px-8 h-12 text-base group"
								asChild
							>
								<Link href="/pricing">
									<span className="flex items-center gap-2">
										Start for Free
										<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
									</span>
								</Link>
							</Button>
						</MagneticButton>

						<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
							<Button
								variant="brand-dark"
								size="lg"
								className="px-8 h-12 text-base "
								asChild
							>
								<Link href="/product">Schedule a Demo</Link>
							</Button>
						</motion.div>
					</div>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
						className="mt-8 text-sm text-muted-foreground"
					>
						No credit card required • Free migration support • Cancel anytime
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
}
