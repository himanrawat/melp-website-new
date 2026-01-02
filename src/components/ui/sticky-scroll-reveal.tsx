"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const neutralBackgrounds = {
	light: ["#f5f5f5", "#e5e5e5", "#fafafa"],
	dark: ["#0a0a0a", "#171717", "#262626"],
};

const neutralGradients = {
	light: [
		"linear-gradient(to bottom right, #e5e5e5, #fafafa)",
		"linear-gradient(to bottom right, #d4d4d4, #f5f5f5)",
		"linear-gradient(to bottom right, #ededed, #e5e5e5)",
	],
	dark: [
		"linear-gradient(to bottom right, #262626, #171717)",
		"linear-gradient(to bottom right, #1f1f1f, #0f0f0f)",
		"linear-gradient(to bottom right, #303030, #1a1a1a)",
	],
};

export const StickyScroll = ({
	content,
	contentClassName,
}: {
	content: {
		sectionTitle: string;
		title: string;
		description: string;
		content?: React.ReactNode | any;
	}[];
	contentClassName?: string;
}) => {
	const [activeCard, setActiveCard] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});

	useEffect(() => {
		setMounted(true);
	}, []);

	const theme = mounted && resolvedTheme === "dark" ? "dark" : "light";
	const backgroundPalette = neutralBackgrounds[theme];
	const gradientPalette = neutralGradients[theme];

	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		// Fix: Calculate which section we're in based on scroll progress
		// Each section takes up 1/cardLength of the total scroll
		const sectionHeight = 1 / cardLength;

		// Determine which card should be active
		// Clamp to valid index range (0 to cardLength - 1)
		const calculatedIndex = Math.min(
			Math.floor(latest / sectionHeight),
			cardLength - 1
		);

		setActiveCard(calculatedIndex);
	});

	const [backgroundGradient, setBackgroundGradient] = useState(
		neutralGradients.light[0]
	);

	useEffect(() => {
		setBackgroundGradient(gradientPalette[activeCard % gradientPalette.length]);
	}, [activeCard, gradientPalette]);

	return (
		<motion.div
			ref={ref}
			animate={{
				backgroundColor:
					backgroundPalette[activeCard % backgroundPalette.length],
			}}
			className="relative mx-auto max-w-7xl bg-neutral-50 transition-colors duration-500 dark:bg-neutral-950"
		>
			<div className="flex flex-col lg:flex-row px-10">
				{/* Left side - Scrolling text sections */}
				<div className="flex-1 relative">
					{content.map((item, index) => (
						<div
							key={item.title + index}
							className="h-screen flex items-center px-6 md:px-10 lg:px-16"
						>
							<div className="max-w-lg">
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: activeCard === index ? 1 : 0.3,
										y: activeCard === index ? 0 : 20,
									}}
									transition={{ duration: 0.5, delay: 0.1 }}
									className="tracking-widest inline-block bg-clip-text text-transparent"
									style={{
										backgroundImage:
											"linear-gradient(90deg, #F14C2F 0%, #FF0059 100%)",
									}}
								>
									{item.sectionTitle}
								</motion.p>
								<motion.h2
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: activeCard === index ? 1 : 0.3,
										y: activeCard === index ? 0 : 20,
									}}
									transition={{ duration: 0.5, delay: 0.1 }}
									className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50"
								>
									{item.title}
								</motion.h2>
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: activeCard === index ? 1 : 0.3,
										y: activeCard === index ? 0 : 20,
									}}
									transition={{ duration: 0.5, delay: 0.2 }}
									className="text-lg mt-6 text-neutral-700 leading-relaxed dark:text-neutral-200"
								>
									{item.description}
								</motion.p>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: activeCard === index ? 1 : 0.3,
										y: activeCard === index ? 0 : 20,
									}}
									transition={{ duration: 0.5, delay: 0.3 }}
									className="mt-8"
								>
									<Button variant="brand-primary" size="lg">
										Get started free
									</Button>
								</motion.div>
							</div>
						</div>
					))}
				</div>

				{/* Right side - Sticky centered image */}
				<div className="hidden lg:flex flex-1 items-center justify-center sticky top-0 h-screen">
					<motion.div
						style={{ background: backgroundGradient }}
						className={cn(
							"h-fit w-fit overflow-hidden rounded-2xl shadow-2xl",
							contentClassName
						)}
					>
						<AnimatePresence mode="wait">
							<motion.div
								key={activeCard}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{ duration: 0.4 }}
								className="h-full w-full"
							>
								{content[activeCard].content ?? null}
							</motion.div>
						</AnimatePresence>
					</motion.div>
				</div>
			</div>

			{/* Mobile: Show image at bottom of each section */}
			<div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
				<motion.div
					style={{ background: backgroundGradient }}
					className={cn(
						"h-[200px] w-[280px] overflow-hidden rounded-xl shadow-2xl",
						contentClassName
					)}
				>
					<AnimatePresence mode="wait">
						<motion.div
							key={activeCard}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.4 }}
							className="h-full w-full"
						>
							{content[activeCard].content ?? null}
						</motion.div>
					</AnimatePresence>
				</motion.div>
			</div>
		</motion.div>
	);
};
