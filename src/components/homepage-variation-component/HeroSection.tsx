"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	useMotionValue,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "./Marquee";
import { Button } from "../ui/button";

export function HeroSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollY } = useScroll();
	const [isMobile, setIsMobile] = useState(false);

	const userImg = [
		"/users/user-1.png",
		"/users/user-2.png",
		"/users/user-3.png",
	];

	// Check if mobile on mount and resize (< 640px is mobile, >= 640px gets desktop styling)
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 640);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Parallax: Dashboard moves UP faster to create separation from blue section
	// Only apply on desktop
	const yDashboard = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : -80]);

	// Blue section parallax: moves DOWN as you scroll DOWN (opposite to dashboard)
	// Creates a separation/gap between dashboard and blue section when blue reaches center
	// Only apply on desktop
	const yBlueSection = useTransform(
		scrollY,
		[0, 400, 800],
		[0, isMobile ? 0 : 200, isMobile ? 0 : 350]
	);
	const blueSpring = useSpring(yBlueSection, { damping: 30, stiffness: 100 });

	// Mouse Parallax - only on desktop
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
	const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

	useEffect(() => {
		if (isMobile) return;

		const handleMouseMove = (e: MouseEvent) => {
			const { innerWidth, innerHeight } = window;
			const x = (e.clientX / innerWidth - 0.5) * 30;
			const y = (e.clientY / innerHeight - 0.5) * 30;
			mouseX.set(x);
			mouseY.set(y);
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [mouseX, mouseY, isMobile]);

	return (
		<>
			<section
				ref={sectionRef}
				className="relative w-full min-h-screen flex flex-col pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 lg:px-8"
			>
				{/* Top Section: Split Header */}
				<div className="z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start mb-8 sm:mb-12">
					{/* Left: Heading */}
					<div className="lg:col-span-2 text-center lg:text-left">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 dark:text-white leading-[1.2] w-fit mx-auto lg:mx-0"
						>
							Bring all your work <br />
							into one intelligent flow.
							<div className="text-neutral-400 flex items-center justify-center lg:justify-end gap-3 sm:gap-6 font-normal text-base sm:text-lg md:text-xl mt-2">
								<span className="bg-neutral-400 w-12 sm:w-20 h-0.5 flex-1"></span>{" "}
								Powered by AI
							</div>
						</motion.h1>
						<Button
							variant="brand-primary"
							size="lg"
							className="px-6 sm:px-8 h-10 sm:h-12 text-sm sm:text-base transition-all duration-300 group mx-auto lg:mx-2 mt-8 sm:mt-12 lg:mt-20 flex"
						>
							<span className="flex items-center gap-2">
								Get Started Free
								<ArrowUpRight size={20} className="sm:w-6 sm:h-6" />
							</span>
						</Button>
					</div>

					{/* Right: Description & stats/CTA */}
					<div className="flex flex-col items-center lg:items-stretch h-full lg:col-span-1 lg:mt-0">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
							className="flex flex-col justify-between h-full items-center lg:items-start"
						>
							{/* Plus Icon Decoration */}
							<div className="text-center lg:text-left">
								<div className="mb-4 sm:mb-6 pt-4 sm:pt-6">
									<svg
										width="22"
										height="22"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mx-auto lg:mx-0"
									>
										<path
											d="M11.4663 22C11.2835 17.739 11.2835 17.739 11.4663 22C8.6409 15.7182 6.50125 13.7431 0 11.4663C4.26101 11.2835 4.26101 11.2835 0 11.4663C6.2818 8.6409 8.25686 6.50125 10.5337 0C10.7165 4.26101 10.7165 4.26101 10.5337 0C13.3591 6.2818 15.4988 8.25686 22 10.5337C17.739 10.7165 17.739 10.7165 22 10.5337C15.7182 13.3591 13.7431 15.4988 11.4663 22Z"
											fill="url(#paint0_linear_10743_422)"
										></path>
										<defs>
											<linearGradient
												id="paint0_linear_10743_422"
												x1="11"
												y1="0"
												x2="11"
												y2="22"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="#EE4136"></stop>
												<stop offset="1" stopColor="#A10B0B"></stop>
											</linearGradient>
										</defs>
									</svg>
								</div>

								<p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-50 max-w-xs mb-6 sm:mb-8 leading-relaxed mx-auto lg:mx-0">
									Replace scattered tools with a single AI-powered workspace
									built for modern teams.
								</p>
							</div>

							<div>
								<div className="flex items-center gap-4 justify-center lg:justify-start">
									<div className="flex -space-x-3">
										{userImg.map((src, index) => (
											<div
												key={index}
												className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative"
											>
												<img key={index} src={src} alt={`User ${index + 1}`} />
											</div>
										))}
									</div>
									<div className="text-center lg:text-left">
										<div className="text-6xl">2.3M+</div>
									</div>
								</div>
								<div className="text-xs text-neutral-500 tracking-wide">
									Trusted to use by millions users over 100 countries
								</div>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Floating Dashboard/Mobile Screens (Overlapping on tablet/desktop only) */}
				<div className="relative w-full flex justify-center z-20 mb-8 sm:-mb-60 pointer-events-none">
					<motion.div
						style={{
							y: yDashboard,
							x: springX,
							rotateX: useTransform(springY, (val) => -val / 20),
							rotateY: useTransform(springX, (val) => val / 20),
						}}
						className="relative max-w-2xl sm:max-w-5xl w-full px-4"
					>
						<motion.div
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative"
						>
							{/* Mobile Image - shown only on mobile (< 640px) */}
							<Image
								src="/assets/mobile-chat-translation-screens.png"
								alt="Melp Mobile Chat Translation"
								width={600}
								height={400}
								className="w-full h-auto block sm:hidden"
								priority
							/>
							{/* Desktop Image - shown on tablet and up (>= 640px) */}
							<Image
								src="/desktop.png"
								alt="Melp Dashboard"
								width={1400}
								height={900}
								className="w-full h-auto hidden sm:block shadow-2xl rounded-3xl overflow-hidden border-4 border-gray-900/5"
								priority
							/>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<div className="relative pb-[200px] sm:pb-[350px] mt-0 sm:-mt-36 px-2 sm:px-4">
				<motion.div
					style={{
						y: blueSpring,
					}}
					className="relative w-full py-16 sm:py-20 md:py-28 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900"
				>
					{/* Marquee Inside Blue Section - Background Layer */}
					<div className="w-full pointer-events-none flex items-center justify-center">
						<Marquee />
					</div>

					{/* Content inside blue section (Bottom) */}
					<div className="container mx-auto text-center relative z-10 pt-12 sm:pt-16 md:pt-20 px-4">
						<h2 className="text-white text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8 max-w-2xl mx-auto border-t border-white/10 pt-6 sm:pt-10">
							Partnering with top tier brands to revolutionize{" "}
							<br className="hidden sm:block" /> financial services.
						</h2>
						{/* Logo Strip Placeholder */}
						<div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16 opacity-80 mt-8 sm:mt-14">
							{["Logoipsum", "Ipsum", "Logo", "Brand", "Tech"].map(
								(logo, i) => (
									<span
										key={i}
										className="text-base sm:text-lg md:text-xl font-bold text-white tracking-widest uppercase"
									>
										{logo}
									</span>
								)
							)}
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
}
