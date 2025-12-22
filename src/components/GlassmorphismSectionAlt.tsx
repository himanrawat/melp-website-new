"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MessageSquare, Video, Calendar, HardDrive, Sparkles, Rocket, Lock } from "lucide-react";

const features = [
	{
		icon: Sparkles,
		title: "AI Assistant",
		description: "Intelligent automation that learns your workflow",
	},
	{
		icon: Rocket,
		title: "Lightning Fast",
		description: "Optimized performance for seamless experience",
	},
	{
		icon: Lock,
		title: "Secure by Design",
		description: "Enterprise-grade security built into every layer",
	},
];

// Floating ball component with random animations
function FloatingBall({
	size,
	initialX,
	initialY,
	delay,
	duration,
	blur = false,
}: {
	size: number;
	initialX: string;
	initialY: string;
	delay: number;
	duration: number;
	blur?: boolean;
}) {
	return (
		<motion.div
			className="absolute rounded-full"
			style={{
				width: size,
				height: size,
				left: initialX,
				top: initialY,
				background:
					"linear-gradient(135deg, #6B7280 0%, #9CA3AF 50%, #D1D5DB 100%)",
				filter: blur ? "blur(40px)" : "blur(0px)",
				opacity: blur ? 0.3 : 0.1,
			}}
			animate={{
				y: [0, -30, 0, 20, 0],
				x: [0, 15, -10, 5, 0],
				scale: [1, 1.1, 0.95, 1.05, 1],
			}}
			transition={{
				duration: duration,
				repeat: Infinity,
				ease: "easeInOut",
				delay: delay,
			}}
		/>
	);
}

// Pulsing glow ball
function PulsingBall({
	size,
	x,
	y,
	delay,
}: {
	size: number;
	x: string;
	y: string;
	delay: number;
}) {
	return (
		<motion.div
			className="absolute rounded-full"
			style={{
				width: size,
				height: size,
				left: x,
				top: y,
				background:
					"radial-gradient(circle, rgba(156,163,175,0.4) 0%, rgba(107,114,128,0.2) 50%, transparent 70%)",
			}}
			animate={{
				scale: [1, 1.3, 1],
				opacity: [0.2, 0.4, 0.2],
			}}
			transition={{
				duration: 3,
				repeat: Infinity,
				ease: "easeInOut",
				delay: delay,
			}}
		/>
	);
}

function FeatureItem({
	icon: Icon,
	title,
	description,
	index,
}: {
	icon: React.ComponentType<{ className?: string }>;
	title: string;
	description: string;
	index: number;
}) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, x: -30 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.15 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="relative group cursor-pointer flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5"
		>
			{/* Icon container */}
			<motion.div
				className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl shadow-lg relative overflow-hidden"
				style={{
					background: "linear-gradient(135deg, #4B5563 0%, #6B7280 100%)",
				}}
				whileHover={{ scale: 1.1, rotate: 5 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
			>
				<motion.div
					className="absolute inset-0 opacity-0"
					style={{
						background:
							"radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
					}}
					animate={{
						opacity: isHovered ? [0, 0.5, 0] : 0,
						scale: isHovered ? [0.5, 1.5] : 0.5,
					}}
					transition={{
						duration: 0.8,
						repeat: isHovered ? Infinity : 0,
						repeatDelay: 0.3,
					}}
				/>
				<Icon className="w-5 h-5 relative z-10 text-white" />
			</motion.div>

			<div className="flex-1">
				<motion.h3
					className="text-lg font-semibold text-white mb-1"
					animate={{ x: isHovered ? 3 : 0 }}
					transition={{ type: "spring", stiffness: 300, damping: 20 }}
				>
					{title}
				</motion.h3>
				<motion.p
					className="text-white/60 text-sm leading-relaxed"
					animate={{ x: isHovered ? 3 : 0 }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 20,
						delay: 0.05,
					}}
				>
					{description}
				</motion.p>
			</div>

			{/* Hover indicator */}
			<motion.div
				className="absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full"
				style={{
					background: "linear-gradient(180deg, #6B7280 0%, #9CA3AF 100%)",
				}}
				initial={{ height: 0, opacity: 0 }}
				animate={{
					height: isHovered ? 40 : 0,
					opacity: isHovered ? 1 : 0,
				}}
				transition={{ duration: 0.2 }}
			/>
		</motion.div>
	);
}

// Dashboard mockup component
function DashboardMockup() {
	const ref = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const rotateX = useSpring(useTransform(mouseY, [-200, 200], [5, -5]), {
		stiffness: 200,
		damping: 30,
	});
	const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-5, 5]), {
		stiffness: 200,
		damping: 30,
	});

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		mouseX.set(e.clientX - centerX);
		mouseY.set(e.clientY - centerY);
	};

	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
		setIsHovered(false);
	};

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, x: 50, rotateY: -10 }}
			whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8, delay: 0.3 }}
			style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
			className="relative perspective-1000"
		>
			{/* Glow effect */}
			<motion.div
				className="absolute -inset-4 rounded-3xl opacity-0 blur-2xl"
				style={{
					background:
						"linear-gradient(135deg, #4B5563 0%, #6B7280 50%, #9CA3AF 100%)",
				}}
				animate={{ opacity: isHovered ? 0.3 : 0.15 }}
				transition={{ duration: 0.5 }}
			/>

			{/* Dashboard container */}
			<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl overflow-hidden min-w-[500px] lg:min-w-[600px]">
				{/* Browser chrome */}
				<div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5 rounded-t-xl">
					<div className="flex gap-1.5">
						<div className="w-3 h-3 rounded-full bg-red-400/80" />
						<div className="w-3 h-3 rounded-full bg-yellow-400/80" />
						<div className="w-3 h-3 rounded-full bg-green-400/80" />
					</div>
					<div className="flex-1 mx-4">
						<div className="h-6 rounded-md bg-white/10 flex items-center px-3">
							<span className="text-white/40 text-xs">
								https://www.app.melp.us/
							</span>
						</div>
					</div>
				</div>

				{/* Dashboard image */}
				<div className="relative">
					<Image
						src="/S1.png"
						alt="Melp Dashboard"
						width={600}
						height={400}
						className="w-full h-auto rounded-b-lg"
						priority
					/>

					{/* Shimmer effect */}
					<motion.div
						className="absolute inset-0 opacity-0"
						style={{
							background:
								"linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
						}}
						animate={{
							x: isHovered ? ["-100%", "200%"] : "-100%",
							opacity: isHovered ? 1 : 0,
						}}
						transition={{
							duration: 1.5,
							ease: "easeInOut",
							repeat: isHovered ? Infinity : 0,
							repeatDelay: 0.5,
						}}
					/>
				</div>
			</div>

			{/* Floating elements around dashboard */}
			<motion.div
				className="absolute -top-6 left-[20%] w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg"
				animate={{ y: [0, -8, 0], x: [0, 5, 0], rotate: [0, 8, 0] }}
				transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
			>
				<MessageSquare className="w-5 h-5 text-white/80" />
			</motion.div>
			<motion.div
				className="absolute top-[30%] -right-6 w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg"
				animate={{ y: [0, 6, 0], x: [0, -4, 0], rotate: [0, -6, 0] }}
				transition={{
					duration: 3.5,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 0.3,
				}}
			>
				<Video className="w-4 h-4 text-white/80" />
			</motion.div>
			<motion.div
				className="absolute -bottom-5 right-[25%] w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg"
				animate={{ y: [0, 7, 0], x: [0, -6, 0], rotate: [0, -5, 0] }}
				transition={{
					duration: 4.2,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 0.5,
				}}
			>
				<Calendar className="w-5 h-5 text-white/80" />
			</motion.div>
			<motion.div
				className="absolute top-[60%] -left-5 w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg"
				animate={{ y: [0, -5, 0], x: [0, 4, 0], rotate: [0, 6, 0] }}
				transition={{
					duration: 3.8,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 0.8,
				}}
			>
				<HardDrive className="w-4 h-4 text-white/80" />
			</motion.div>

			{/* Floating notification cards */}
			{/* Top-right: Linnie message */}
			<motion.div
				className="absolute -top-10 right-[10%] lg:right-[5%] w-56 rounded-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-white/20 shadow-2xl p-3 z-10"
				animate={{ y: [0, -6, 0], x: [0, 4, 0], rotate: [0, 2, 0] }}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 0.2,
				}}
			>
				<div className="flex items-start gap-3">
					<div className="flex-1 min-w-0">
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
								Linnie
							</span>
							<span className="text-xs text-gray-500 dark:text-gray-400">
								10:52 AM
							</span>
						</div>
						<p className="text-sm font-medium text-gray-900 dark:text-white mt-1 flex items-center gap-1">
							Thanks! <span>😊</span>
						</p>
					</div>
					<Image
						src="/c1.jpg"
						alt="Linnie Valdez"
						width={40}
						height={40}
						className="w-10 h-10 rounded-lg object-cover ring-2 ring-red-400/50"
					/>
				</div>
			</motion.div>

			{/* Bottom-right: Bernard message */}
			<motion.div
				className="absolute -bottom-12 right-[5%] lg:right-[10%] w-64 rounded-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-white/20 shadow-2xl p-3 z-10"
				animate={{ y: [0, 6, 0], x: [0, -4, 0], rotate: [0, -2, 0] }}
				transition={{
					duration: 4.5,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 0.6,
				}}
			>
				<div className="flex items-start gap-3">
					<Image
						src="/c2.jpg"
						alt="Bernard Watts"
						width={40}
						height={40}
						className="w-10 h-10 rounded-lg object-cover ring-2 ring-red-400/50"
					/>
					<div className="flex-1 min-w-0">
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-800 dark:text-gray-200">
								Bernard Watts
							</span>
							<span className="text-xs text-gray-500 dark:text-gray-400">
								10:50 AM
							</span>
						</div>
						<p className="text-sm font-medium text-gray-900 dark:text-white mt-1 flex items-center gap-1">
							Design looks great! <span>👍🏾</span>
						</p>
					</div>
				</div>
			</motion.div>

			{/* Top-left: Video call notification */}
			<motion.div
				className="absolute -top-8 -left-14 lg:-left-24 w-60 rounded-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-white/20 shadow-2xl p-3 z-10"
				animate={{ y: [0, 5, 0], x: [0, -3, 0], rotate: [0, -1.5, 0] }}
				transition={{
					duration: 4.8,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
			>
				<div className="flex items-center gap-3">
					<div className="relative">
						<div className="flex -space-x-2">
							<Image
								src="/c1.jpg"
								alt="Caller 1"
								width={32}
								height={32}
								className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
							/>
							<Image
								src="/c2.jpg"
								alt="Caller 2"
								width={32}
								height={32}
								className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
							/>
						</div>
						<motion.div
							className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ duration: 1.5, repeat: Infinity }}
						/>
					</div>
					<div className="flex-1 min-w-0">
						<p className="text-sm font-medium text-gray-900 dark:text-white">
							Video Call Active
						</p>
						<div className="flex items-center gap-1.5 mt-0.5">
							<Video className="w-3 h-3 text-green-500" />
							<span className="text-xs text-green-600 dark:text-green-400 font-medium">
								2 participants • 12:34
							</span>
						</div>
					</div>
				</div>
			</motion.div>

			{/* Bottom-left: Save to drive notification */}
			<motion.div
				className="absolute -bottom-10 left-[5%] lg:-left-20 w-56 rounded-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-white/20 shadow-2xl p-3 z-10"
				animate={{ y: [0, -5, 0], x: [0, 3, 0], rotate: [0, 1, 0] }}
				transition={{
					duration: 5.2,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1.4,
				}}
			>
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
						<HardDrive className="w-5 h-5 text-white" />
					</div>
					<div className="flex-1 min-w-0">
						<p className="text-sm font-medium text-gray-900 dark:text-white">
							File Saved
						</p>
						<div className="flex items-center gap-1.5 mt-0.5">
							<motion.div
								className="w-2 h-2 bg-green-500 rounded-full"
								animate={{ opacity: [1, 0.5, 1] }}
								transition={{ duration: 1.2, repeat: Infinity }}
							/>
							<span className="text-xs text-gray-500 dark:text-gray-400 truncate">
								project_v2.pdf → Drive
							</span>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default function GlassmorphismSectionAlt() {
	return (
		<section
			className="relative py-32 overflow-hidden"
			style={{
				background:
					"linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)",
			}}
		>
			{/* Main gradient overlay */}
			<div
				className="absolute inset-0 opacity-30"
				style={{
					background:
						"radial-gradient(ellipse at 50% 50%, rgba(107,114,128,0.15) 0%, rgba(75,85,99,0.1) 30%, transparent 70%)",
				}}
			/>

			{/* Floating neutral balls - background layer (blurred) */}
			<FloatingBall
				size={300}
				initialX="5%"
				initialY="10%"
				delay={0}
				duration={12}
				blur
			/>
			<FloatingBall
				size={200}
				initialX="80%"
				initialY="5%"
				delay={2}
				duration={10}
				blur
			/>
			<FloatingBall
				size={250}
				initialX="70%"
				initialY="60%"
				delay={1}
				duration={14}
				blur
			/>
			<FloatingBall
				size={180}
				initialX="10%"
				initialY="70%"
				delay={3}
				duration={11}
				blur
			/>

			{/* Floating neutral balls - foreground layer (solid) */}
			<FloatingBall
				size={50}
				initialX="15%"
				initialY="20%"
				delay={0.5}
				duration={8}
			/>
			<FloatingBall
				size={35}
				initialX="85%"
				initialY="25%"
				delay={1}
				duration={9}
			/>
			<FloatingBall
				size={25}
				initialX="25%"
				initialY="75%"
				delay={2}
				duration={7}
			/>
			<FloatingBall
				size={40}
				initialX="75%"
				initialY="70%"
				delay={0}
				duration={10}
			/>
			<FloatingBall
				size={20}
				initialX="50%"
				initialY="15%"
				delay={1.5}
				duration={6}
			/>

			{/* Pulsing glow balls */}
			<PulsingBall size={350} x="15%" y="40%" delay={0} />
			<PulsingBall size={300} x="70%" y="30%" delay={1} />

			{/* Noise texture overlay */}
			<div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3QgZmlsdGVyPSJ1cmwoI2EpIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIi8+PC9zdmc+')]" />

			{/* Subtle grid pattern */}
			<div
				className="absolute inset-0 opacity-[0.02]"
				style={{
					backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
					backgroundSize: "50px 50px",
				}}
			/>

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left side - Content */}
					<div>
						{/* Section header */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="mb-10"
						>
							<motion.span
								className="inline-block text-sm font-medium tracking-wider uppercase mb-4"
								style={{
									background:
										"linear-gradient(90deg, #6B7280 0%, #9CA3AF 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.2 }}
							>
								Why Choose Us
							</motion.span>

							<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
								Built for the{" "}
								<span className="relative inline-block">
									<motion.span
										style={{
											background:
												"linear-gradient(90deg, #9CA3AF 0%, #D1D5DB 100%)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent",
										}}
										whileHover={{ scale: 1.05 }}
										transition={{ type: "spring", stiffness: 300 }}
									>
										future
									</motion.span>
									<motion.span
										className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
										style={{
											background:
												"linear-gradient(90deg, #6B7280 0%, #9CA3AF 100%)",
										}}
										initial={{ scaleX: 0, originX: 0 }}
										whileInView={{ scaleX: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
									/>
								</span>
							</h2>

							<motion.p
								className="text-lg text-white/50 leading-relaxed"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.4 }}
							>
								Experience next-generation collaboration with our cutting-edge
								platform designed for teams that demand excellence.
							</motion.p>
						</motion.div>

						{/* Features list */}
						<div className="space-y-2 mb-10">
							{features.map((feature, index) => (
								<FeatureItem key={feature.title} {...feature} index={index} />
							))}
						</div>

						{/* CTA */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.6 }}
							className="flex items-center gap-4"
						>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									size="lg"
									className="rounded-full text-white shadow-lg border-0 relative overflow-hidden group px-8"
									style={{
										background:
											"linear-gradient(90deg, #4B5563 0%, #6B7280 100%)",
									}}
								>
									<motion.span
										className="absolute inset-0 opacity-0 group-hover:opacity-100"
										style={{
											background:
												"linear-gradient(90deg, #6B7280 0%, #9CA3AF 100%)",
										}}
										transition={{ duration: 0.3 }}
									/>
									<span className="relative z-10 flex items-center gap-2">
										Get Started Free
										<motion.span
											animate={{ x: [0, 3, 0] }}
											transition={{
												duration: 1.5,
												repeat: Infinity,
												ease: "easeInOut",
											}}
										>
											→
										</motion.span>
									</span>
								</Button>
							</motion.div>

							<motion.button
								className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2"
								whileHover={{ x: 3 }}
							>
								Watch Demo
								<span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
									▶
								</span>
							</motion.button>
						</motion.div>
					</div>

					{/* Right side - Dashboard */}
					<DashboardMockup />
				</div>

				{/* Bottom decorative elements */}
				<motion.div
					className="mt-20 flex justify-center gap-2"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.8 }}
				>
					{[...Array(5)].map((_, i) => (
						<motion.div
							key={i}
							className="w-2 h-2 rounded-full"
							style={{
								background: "linear-gradient(90deg, #6B7280 0%, #9CA3AF 100%)",
							}}
							animate={{
								scale: [1, 1.3, 1],
								opacity: [0.3, 0.7, 0.3],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut",
								delay: i * 0.2,
							}}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
}
