"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

export function CTASection() {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
	const scale = useTransform(
		scrollYProgress,
		[0, 0.3, 0.7, 1],
		[0.95, 1, 1, 0.95]
	);

	return (
		<section
			ref={sectionRef}
			className="relative z-20 py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
		>
			<motion.div
				style={{ opacity, scale }}
				className="max-w-4xl mx-auto text-center"
			>
				{/* Decorative element */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="flex justify-center mb-8"
				>
					<svg
						width="44"
						height="44"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="text-[#EE4136]"
					>
						<path
							d="M11.4663 22C11.2835 17.739 11.2835 17.739 11.4663 22C8.6409 15.7182 6.50125 13.7431 0 11.4663C4.26101 11.2835 4.26101 11.2835 0 11.4663C6.2818 8.6409 8.25686 6.50125 10.5337 0C10.7165 4.26101 10.7165 4.26101 10.5337 0C13.3591 6.2818 15.4988 8.25686 22 10.5337C17.739 10.7165 17.739 10.7165 22 10.5337C15.7182 13.3591 13.7431 15.4988 11.4663 22Z"
							fill="currentColor"
						/>
					</svg>
				</motion.div>

				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
					className="text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 dark:text-white mb-4"
				>
					Ready to work without friction?
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-lg lg:text-xl text-neutral-500 dark:text-neutral-400 mb-10 max-w-2xl mx-auto"
				>
					See how MELP brings clarity to your team. One workspace. Zero
					friction. AI that actually works.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					<Button
						variant="brand-primary"
						size="lg"
						className="px-8 h-12 text-base transition-all duration-300 group"
					>
						<span className="flex items-center gap-2">
							Request a Demo
							<ArrowUpRight
								size={20}
								className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
							/>
						</span>
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="px-8 h-12 text-base border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
					>
						Talk to Sales
					</Button>
				</motion.div>
			</motion.div>
		</section>
	);
}
