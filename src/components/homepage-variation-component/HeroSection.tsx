"use client";

import { useEffect, useRef } from "react";
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

	const userImg = [
		"/users/user-1.png",
		"/users/user-2.png",
		"/users/user-3.png",
	];

	// Parallax: Dashboard moves UP faster to create separation from blue section
	const yDashboard = useTransform(scrollY, [0, 800], [0, -80]);

	// Blue section parallax: moves DOWN as you scroll DOWN (opposite to dashboard)
	// Creates a separation/gap between dashboard and blue section when blue reaches center
	const yBlueSection = useTransform(scrollY, [0, 400, 800], [0, 200, 350]);
	const blueSpring = useSpring(yBlueSection, { damping: 30, stiffness: 100 });

	// Mouse Parallax
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
	const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const { innerWidth, innerHeight } = window;
			const x = (e.clientX / innerWidth - 0.5) * 30;
			const y = (e.clientY / innerHeight - 0.5) * 30;
			mouseX.set(x);
			mouseY.set(y);
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [mouseX, mouseY]);

	return (
		<>
			<section
				ref={sectionRef}
				className="relative w-full min-h-screen flex flex-col pt-32"
			>
				{/* Top Section: Split Header */}
				<div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">
					{/* Left: Heading */}
					<div className="col-span-2">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="text-6xl md:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white leading-[1.2] w-fit"
						>
							Bring all your work <br />
							into one intelligent flow.
							<div className="text-neutral-400 flex items-center justify-end gap-6 font-normal">
								<span className="bg-neutral-400 w-20 h-0.5 flex-1"></span>{" "}
								Powered by AI
							</div>
						</motion.h1>
						<Button
							variant="brand-primary"
							size="lg"
							className="px-8 h-12 text-base transition-all duration-300 group mx-2 mt-20"
						>
							<span className="flex items-center gap-2">
								Get Started Free
								<ArrowUpRight size={24} />
							</span>
						</Button>
					</div>

					{/* Right: Description & stats/CTA */}
					<div className="flex flex-col items-stretch h-full col-span-1">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
							className="flex flex-col justify-between h-full"
						>
							{/* Plus Icon Decoration */}
							<div>
								<div className="mb-6 pt-6">
									<svg
										width="22"
										height="22"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
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

								<p className="text-lg text-neutral-600 dark:text-neutral-50 max-w-xs mb-8 leading-relaxed">
									Replace scattered tools with a single AI-powered workspace
									built for modern teams.
								</p>
							</div>

							<div className="flex items-center gap-4">
								<div className="flex -space-x-3">
									{userImg.map((src, index) => (
										<div
											key={index}
											className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative"
										>
											<img key={index} src={src} alt={`User ${index + 1}`} />
										</div>
									))}
								</div>
								<div>
									<div className="text-2xl font-bold">2.3M+</div>
									<div className="text-sm text-neutral-500">Trusted Users</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Floating Dashboard (Overlapping) */}
				<div className="relative w-full flex justify-center z-20 -mb-40 md:-mb-60 pointer-events-none">
					<motion.div
						style={{
							y: yDashboard,
							x: springX,
							rotateX: useTransform(springY, (val) => -val / 20),
							rotateY: useTransform(springX, (val) => val / 20),
						}}
						className="relative max-w-5xl w-full px-4"
					>
						<motion.div
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative shadow-2xl rounded-3xl overflow-hidden border-4 border-gray-900/5"
						>
							<Image
								src="/desktop.png"
								alt="Melp Dashboard"
								width={1400}
								height={900}
								className="w-full h-auto"
								priority
							/>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<div className="relative pb-[350px] -mt-36">
				<motion.div
					style={{
						y: blueSpring,
						background:
							"radial-gradient(ellipse at bottom center, #FF6B5B 0%, #FF0059 50%, #C0003D 100%)",
					}}
					className="relative w-full py-28 rounded-[3rem] overflow-hidden"
				>
					{/* Marquee Inside Blue Section - Background Layer */}
					<div className="w-full pointer-events-none flex items-center justify-center">
						<Marquee />
					</div>

					{/* Content inside blue section (Bottom) */}
					<div className="container mx-auto text-center relative z-10 pt-20">
						<h2 className="text-white text-2xl md:text-3xl font-medium mb-8 max-w-2xl mx-auto border-t border-white/10 pt-10">
							Partnering with top tier brands to revolutionize <br /> financial
							services.
						</h2>
						{/* Logo Strip Placeholder */}
						<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 mt-14">
							{["Logoipsum", "Ipsum", "Logo", "Brand", "Tech"].map(
								(logo, i) => (
									<span
										key={i}
										className="text-xl font-bold text-white tracking-widest uppercase"
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
