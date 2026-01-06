"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

export function CTASection() {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	// Parallax effects
	const contentY = useTransform(scrollYProgress, [0, 1], [60, -60]);
	const leftImageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
	const rightImageY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
	const leftImageRotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
	const rightImageRotate = useTransform(scrollYProgress, [0, 1], [3, -3]);
	const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

	return (
		<section
			ref={sectionRef}
			className="relative z-20 py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
		>
			{/* Background - Neutral gradient */}
			<motion.div 
				className="absolute inset-0 bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl mx-4 sm:mx-8"
				style={{ opacity: bgOpacity }}
			/>

			{/* Floating Image - Left */}
			<motion.div
				style={{ y: leftImageY, rotate: leftImageRotate }}
				className="absolute left-8 sm:left-16 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none z-0"
			>
				<div className="relative w-64 h-auto">
					<Image
						src="/assets/laptop-mobile-video-call-ui.png"
						alt="Melp video call interface"
						width={300}
						height={200}
						className="w-full h-auto rounded-2xl shadow-2xl"
					/>
				</div>
			</motion.div>

			{/* Floating Image - Right */}
			<motion.div
				style={{ y: rightImageY, rotate: rightImageRotate }}
				className="absolute right-8 sm:right-16 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none z-0"
			>
				<div className="relative w-56 h-auto">
					<Image
						src="/assets/drive.png"
						alt="Melp Drive"
						width={250}
						height={200}
						className="w-full h-auto rounded-2xl shadow-2xl"
					/>
				</div>
			</motion.div>

			<motion.div
				style={{ y: contentY }}
				className="relative max-w-3xl mx-auto text-center z-10"
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
						className="text-neutral-400"
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
					className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4"
				>
					Ready to work without friction?
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-lg lg:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto"
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
						variant="default"
						size="lg"
						className="px-8 h-12 text-base bg-white text-neutral-900 hover:bg-neutral-100 transition-all duration-300 group"
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
						className="px-8 h-12 text-base border-neutral-600 text-white hover:bg-neutral-700/50"
					>
						Talk to Sales
					</Button>
				</motion.div>
			</motion.div>
		</section>
	);
}
