"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useTheme } from "next-themes";
import {
	MagneticButton,
	TextShimmer,
	HoverTiltCard,
} from "@/components/ui/aceternity";
import { SlackStyleHeading } from "@/components/headings/SlackStyleHeading";

const clientLogos = [
	"Acme Corp",
	"Globex",
	"Initech",
	"Umbrella",
	"Stark Ind",
	"Wayne Ent",
];

// Get optimal video source based on screen width and connection
const getOptimalVideoSrc = () => {
	if (typeof window === "undefined") return "/video/melp-720.mp4";

	const width = window.innerWidth;
	const connection = (
		navigator as Navigator & { connection?: { effectiveType?: string } }
	).connection;
	const isSlowConnection =
		connection?.effectiveType === "2g" ||
		connection?.effectiveType === "slow-2g";

	// Use lower quality for slow connections
	if (isSlowConnection) return "/video/melp-480.mp4";

	// Mobile: 480p, Tablet: 720p, Desktop: 1080p
	if (width < 768) return "/video/melp-480.mp4";
	if (width < 1280) return "/video/melp-720.mp4";
	return "/video/melp-1080.mp4";
};

export default function HeroSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const videoContainerRef = useRef<HTMLDivElement>(null);
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isMuted, setIsMuted] = useState(true);
	const [videoSrc, setVideoSrc] = useState("/video/melp-720.mp4");

	const isVideoInView = useInView(videoContainerRef, { amount: 0.5 });

	useEffect(() => {
		setMounted(true);
		setVideoSrc(getOptimalVideoSrc());
	}, []);

	// Play/pause video based on scroll visibility
	useEffect(() => {
		if (videoRef.current) {
			if (isVideoInView) {
				videoRef.current.play();
			} else {
				videoRef.current.pause();
			}
		}
	}, [isVideoInView]);

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !videoRef.current.muted;
			setIsMuted(!isMuted);
		}
	};

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

	return (
		<section
			ref={containerRef}
			className="relative min-h-screen overflow-hidden bg-background isolate"
		>
			{/* Grid Background */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

			<motion.div
				style={{ y, opacity }}
				className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20"
			>
				<div className="flex flex-col items-center text-center">
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: 30, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
						className="w-full px-4 sm:px-0"
					>
						<Badge
							variant="secondary"
							className="mb-8 px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium border border-border/50 bg-background/80 backdrop-blur-sm shadow-lg cursor-pointer group hover:border-primary/30 transition-all duration-300 inline-flex max-w-full"
						>
							<motion.span
								className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center sm:flex-nowrap"
								whileHover={{ scale: 1.02 }}
							>
								<span className="relative flex h-2 w-2 shrink-0">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
									<span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
								</span>
								<span className="text-center sm:text-left leading-tight">
									<span className="hidden sm:inline">
										Your people. Your partners. One intelligent workspace.
									</span>
									<span className="sm:hidden">
										Your people. Your partners.
										<br />
										One intelligent workspace.
									</span>
								</span>
								<motion.span
									className="text-primary shrink-0"
									whileHover={{ x: 3 }}
									transition={{ type: "spring", stiffness: 400 }}
								>
									→
								</motion.span>
							</motion.span>
						</Badge>
					</motion.div>

					{/* Main Heading */}
					<SlackStyleHeading
						prefix="Make"
						suffix="Intelligent"
						highlightWord="work"
						cycleWords={[
							"Knowledge",
							"Communication",
							"Collaboration",
							"Decisions",
							"translation",
						]}
						wordDuration={800}
						loopDelay={5000}
						className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
						rotatingClassName="bg-gradient-to-r from-[#F14C2F] to-[#FF0059] bg-clip-text text-transparent"
					/>

					{/* Subheading */}
					{/* <motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.2,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
					>
						Translate files, summarize conversations, transcribe meetings, and
						write professionally — all powered by AI, built into one intelligent
						workspace.
					</motion.p> */}

					{/* Supporting Line */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.25,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="mt-4 max-w-2xl text-base text-muted-foreground/80 leading-relaxed"
					>
						{/* Melp helps teams understand more, miss nothing, and communicate
						better — without switching tools. */}
						Translate files, summarize conversations, transcribe meetings, and
						write professionally — all powered by AI, built into one intelligent
						workspace.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.3,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="mt-12 flex flex-col sm:flex-row items-center gap-4"
					>
						<MagneticButton>
							<Button
								variant="brand-primary"
								size="lg"
								className="px-8 h-12 text-base transition-all duration-300 group"
							>
								<span className="flex items-center gap-2">
									Explore AI Features
									<motion.svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										className="group-hover:translate-x-1 transition-transform"
									>
										<path
											d="M3 8H13M13 8L8 3M13 8L8 13"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</motion.svg>
								</span>
							</Button>
						</MagneticButton>
						<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
							<Button
								variant="brand-dark"
								size="lg"
								className="px-8 h-12 text-base "
								asChild
							>
								Book a Demo
							</Button>
						</motion.div>
					</motion.div>

					{/* Video in Desktop Frame */}
					<motion.div
						ref={videoContainerRef}
						initial={{ opacity: 0, y: 60, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{
							duration: 1,
							delay: 0.7,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="relative z-20 mt-20 w-full max-w-6xl"
					>
						<div className="flex flex-col w-full rounded-2xl border border-border/50 bg-muted/30 shadow-2xl overflow-hidden">
							{/* Decorative elements - Desktop window buttons */}
							<div className="flex gap-2 p-4">
								<div className="w-3 h-3 rounded-full bg-red-400/60" />
								<div className="w-3 h-3 rounded-full bg-yellow-400/60" />
								<div className="w-3 h-3 rounded-full bg-green-400/60" />
							</div>

							{/* Video */}
							<video
								ref={videoRef}
								className="w-full h-auto object-contain"
								src={videoSrc}
								poster={
									mounted && resolvedTheme === "dark"
										? "/dark-s1.png"
										: "/S1.png"
								}
								preload="metadata"
								muted
								loop
								playsInline
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>

			{/* Bottom fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

			{/* Mute/Unmute Button */}
			<div className="mx-auto max-w-7xl relative ">
				<button
					onClick={toggleMute}
					className="absolute bottom-0 right-20 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background transition-colors cursor-pointer"
					aria-label={isMuted ? "Unmute video" : "Mute video"}
				>
					{isMuted ? (
						<VolumeX className="w-4 h-4 text-muted-foreground" />
					) : (
						<Volume2 className="w-4 h-4 text-foreground" />
					)}
				</button>
			</div>
		</section>
	);
}
