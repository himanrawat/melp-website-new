"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause } from "lucide-react";

type Feature = {
	title: string;
	description: string;
	video: string;
};

const features: Feature[] = [
	{
		title: "AI-Powered Messaging",
		description:
			"Write with AI assistance using Draft for Me — professional, casual, or custom tone. Instant translation keeps global teams aligned.",
		video: "/video/message.mp4",
	},
	{
		title: "Smart Meetings",
		description:
			"AI-generated summaries, real-time transcription, and automatic action items. Every meeting becomes searchable documentation.",
		video: "/video/call.mp4",
	},
	{
		title: "Intelligent Drive",
		description:
			"Translate documents to any language. Get instant AI summaries. Ask questions and extract key details from any file.",
		video: "/video/drive.mp4",
	},
	{
		title: "Professional Network",
		description:
			"Connect with vendors, agencies, and partners on real projects. AI-assisted collaboration across organizational boundaries.",
		video: "/video/network.mp4",
	},
	{
		title: "Real-Time Translation",
		description:
			"Live multilingual transcription during every conversation. Each participant reads in their preferred language — zero barriers.",
		video: "/video/language.mp4",
	},
	{
		title: "Smart Scheduling",
		description:
			"AI-assisted scheduling with time zone intelligence. Automatic reminders and calendar sync for distributed teams.",
		video: "/video/calendar.mp4",
	},
];

const DURATION = 8000; // 8 seconds per tab

export default function FeatureShowcaseSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [progress, setProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const clearTimer = useCallback(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, []);

	const startTimer = useCallback(() => {
		clearTimer();
		setProgress(0);

		const startTime = Date.now();
		intervalRef.current = setInterval(() => {
			const elapsed = Date.now() - startTime;
			const newProgress = Math.min((elapsed / DURATION) * 100, 100);
			setProgress(newProgress);

			if (elapsed >= DURATION) {
				clearTimer();
				setActiveIndex((prev) => (prev + 1) % features.length);
			}
		}, 16);
	}, [clearTimer]);

	useEffect(() => {
		if (isPlaying) {
			startTimer();
		} else {
			clearTimer();
		}

		return clearTimer;
	}, [isPlaying, activeIndex, startTimer, clearTimer]);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.load();
			if (isPlaying) {
				videoRef.current.play().catch(() => {});
			}
		}
	}, [activeIndex, isPlaying]);

	const handleTabClick = (index: number) => {
		if (index !== activeIndex) {
			setActiveIndex(index);
			setProgress(0);
		}
	};

	const togglePlayPause = () => {
		setIsPlaying((prev) => {
			const newState = !prev;
			if (videoRef.current) {
				if (newState) {
					videoRef.current.play().catch(() => {});
				} else {
					videoRef.current.pause();
				}
			}
			return newState;
		});
	};

	return (
		<section className="relative py-24 sm:py-32 bg-background overflow-hidden">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-16">
					<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
						AI Capabilities
					</span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						AI that works across everything you do
					</h2>
					<p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						Translation, transcription, summaries, and intelligent drafting —
						built into every workflow to save time and improve clarity.
					</p>
				</div>

				{/* Main Content - Bordered Container */}
				<div className="rounded-3xl p-6 lg:p-10 bg-muted/30">
					<div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-10 items-center">
						{/* Left Side - Tabs (2 columns) */}
						<div className="lg:col-span-2 space-y-0">
							{features.map((feature, index) => {
								const isActive = index === activeIndex;

								return (
									<div key={feature.title} className="relative">
										<button
											onClick={() => handleTabClick(index)}
											className="w-full text-left py-4 pl-5 group focus:outline-none relative"
										>
											{/* Vertical Progress Bar on Left Edge */}
											<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border">
												{isActive && (
													<motion.div
														className="w-full bg-foreground/60 origin-top"
														style={{ height: `${progress}%` }}
														transition={{ duration: 0.016, ease: "linear" }}
													/>
												)}
											</div>

											<div className="flex flex-col">
												<h3
													className={`text-base font-medium transition-colors duration-300 ${
														isActive
															? "text-foreground"
															: "text-muted-foreground group-hover:text-foreground/80"
													}`}
												>
													{feature.title}
												</h3>

												{/* Description - only visible when active */}
												<AnimatePresence mode="wait">
													{isActive && (
														<motion.p
															initial={{ opacity: 0, height: 0 }}
															animate={{ opacity: 1, height: "auto" }}
															exit={{ opacity: 0, height: 0 }}
															transition={{ duration: 0.3, ease: "easeInOut" }}
															className="text-sm text-muted-foreground mt-2 leading-relaxed overflow-hidden pr-4"
														>
															{feature.description}
														</motion.p>
													)}
												</AnimatePresence>
											</div>
										</button>
									</div>
								);
							})}
						</div>

						{/* Right Side - Video Display (5 columns) */}
						<div className="lg:col-span-5 relative">
							<div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted shadow-xl">
								<AnimatePresence mode="wait">
									<motion.video
										key={features[activeIndex].video}
										ref={videoRef}
										src={features[activeIndex].video}
										className="absolute inset-0 h-full w-full object-cover"
										autoPlay
										loop
										muted
										playsInline
										preload="metadata"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.3 }}
									/>
								</AnimatePresence>

								{/* Play/Pause Button */}
								<button
									onClick={togglePlayPause}
									className="absolute bottom-4 right-4 p-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
									aria-label={isPlaying ? "Pause" : "Play"}
								>
									{isPlaying ? (
										<Pause className="w-4 h-4 text-foreground" />
									) : (
										<Play className="w-4 h-4 text-foreground" />
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
