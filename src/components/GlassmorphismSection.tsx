"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const features = [
	{
		icon: "✨",
		title: "AI Assistant",
		description:
			"Intelligent automation that learns your workflow and adapts to your needs",
	},
	{
		icon: "🚀",
		title: "Lightning Fast",
		description:
			"Optimized performance for seamless experience across all devices",
	},
	{
		icon: "🔒",
		title: "Secure by Design",
		description:
			"Enterprise-grade security built into every layer of our platform",
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
				background: "linear-gradient(135deg, #F14C2F 0%, #FF0059 100%)",
				filter: blur ? "blur(40px)" : "blur(0px)",
				opacity: blur ? 0.4 : 0.15,
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
					"radial-gradient(circle, rgba(241,76,47,0.6) 0%, rgba(255,0,89,0.3) 50%, transparent 70%)",
			}}
			animate={{
				scale: [1, 1.3, 1],
				opacity: [0.3, 0.6, 0.3],
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

function GlassCard({
	icon,
	title,
	description,
	index,
}: {
	icon: string;
	title: string;
	description: string;
	index: number;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const rotateX = useSpring(useTransform(mouseY, [-100, 100], [8, -8]), {
		stiffness: 300,
		damping: 30,
	});
	const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), {
		stiffness: 300,
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
			initial={{ opacity: 0, y: 60, scale: 0.9 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{
				duration: 0.7,
				delay: index * 0.15,
				type: "spring",
				stiffness: 100,
			}}
			style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
			className="relative group cursor-pointer"
		>
			{/* Glow effect behind the card */}
			<motion.div
				className="absolute -inset-1 rounded-3xl opacity-0 blur-xl transition-all duration-500"
				style={{
					background: "linear-gradient(90deg, #F14C2F 0%, #FF0059 100%)",
				}}
				animate={{ opacity: isHovered ? 0.5 : 0 }}
			/>

			{/* Glass card */}
			<div className="relative h-full rounded-2xl border border-white/20 bg-white/10 dark:bg-white/[0.05] backdrop-blur-2xl p-8 shadow-2xl overflow-hidden transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/15 dark:group-hover:bg-white/[0.08]">
				{/* Gradient orb inside */}
				<motion.div
					className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-3xl"
					style={{
						background: "linear-gradient(135deg, #F14C2F 0%, #FF0059 100%)",
					}}
					animate={{
						scale: isHovered ? 1.4 : 1,
						opacity: isHovered ? 0.35 : 0.2,
						rotate: isHovered ? 45 : 0,
					}}
					transition={{ duration: 0.6 }}
				/>

				{/* Moving shimmer effect */}
				<motion.div
					className="absolute inset-0 opacity-0 group-hover:opacity-100"
					style={{
						background:
							"linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
					}}
					animate={{
						x: isHovered ? ["-100%", "200%"] : "-100%",
					}}
					transition={{
						duration: 1.2,
						ease: "easeInOut",
						repeat: isHovered ? Infinity : 0,
						repeatDelay: 0.5,
					}}
				/>

				{/* Subtle inner border glow */}
				<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

				{/* Content */}
				<div className="relative z-10">
					{/* Icon container */}
					<motion.div
						className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg relative overflow-hidden"
						style={{
							background: "linear-gradient(135deg, #F14C2F 0%, #FF0059 100%)",
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
						<span className="text-2xl relative z-10">{icon}</span>
					</motion.div>

					<motion.h3
						className="text-xl font-semibold text-white mb-3"
						animate={{
							x: isHovered ? 5 : 0,
						}}
						transition={{ type: "spring", stiffness: 300, damping: 20 }}
					>
						{title}
					</motion.h3>
					<motion.p
						className="text-white/70 leading-relaxed"
						animate={{
							x: isHovered ? 5 : 0,
						}}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 20,
							delay: 0.05,
						}}
					>
						{description}
					</motion.p>

					{/* Learn more link */}
					<motion.div
						className="mt-6 flex items-center gap-2 text-sm font-medium"
						animate={{
							x: isHovered ? 8 : 0,
						}}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 20,
							delay: 0.1,
						}}
					>
						<span className="text-white/90 group-hover:text-white transition-colors">
							Learn more
						</span>
						<motion.span
							className="text-white"
							animate={{
								x: isHovered ? 5 : 0,
								opacity: isHovered ? 1 : 0.7,
							}}
							transition={{ type: "spring", stiffness: 400, damping: 20 }}
						>
							→
						</motion.span>
					</motion.div>
				</div>

				{/* Bottom gradient line */}
				<motion.div
					className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100"
					style={{
						background: "linear-gradient(90deg, #F14C2F 0%, #FF0059 100%)",
					}}
					initial={{ scaleX: 0 }}
					animate={{
						scaleX: isHovered ? 1 : 0,
					}}
					transition={{ duration: 0.4 }}
				/>
			</div>
		</motion.div>
	);
}

export default function GlassmorphismSection() {
	return (
		<section
			className="relative py-32 overflow-hidden"
			style={{
				background:
					"linear-gradient(135deg, #0a0a0a 0%, #1a0a10 50%, #0a0a0a 100%)",
			}}
		>
			{/* Main gradient overlay */}
			<div
				className="absolute inset-0 opacity-30"
				style={{
					background:
						"radial-gradient(ellipse at 50% 50%, rgba(241,76,47,0.15) 0%, rgba(255,0,89,0.1) 30%, transparent 70%)",
				}}
			/>

			{/* Floating red balls - background layer (blurred) */}
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
			<FloatingBall
				size={220}
				initialX="40%"
				initialY="80%"
				delay={1.5}
				duration={13}
				blur
			/>

			{/* Floating red balls - foreground layer (solid) */}
			<FloatingBall
				size={60}
				initialX="15%"
				initialY="20%"
				delay={0.5}
				duration={8}
			/>
			<FloatingBall
				size={40}
				initialX="85%"
				initialY="25%"
				delay={1}
				duration={9}
			/>
			<FloatingBall
				size={30}
				initialX="25%"
				initialY="75%"
				delay={2}
				duration={7}
			/>
			<FloatingBall
				size={50}
				initialX="75%"
				initialY="70%"
				delay={0}
				duration={10}
			/>
			<FloatingBall
				size={25}
				initialX="50%"
				initialY="15%"
				delay={1.5}
				duration={6}
			/>
			<FloatingBall
				size={35}
				initialX="90%"
				initialY="50%"
				delay={2.5}
				duration={8}
			/>
			<FloatingBall
				size={45}
				initialX="5%"
				initialY="45%"
				delay={0.8}
				duration={11}
			/>
			<FloatingBall
				size={20}
				initialX="60%"
				initialY="85%"
				delay={1.2}
				duration={7}
			/>

			{/* Pulsing glow balls */}
			<PulsingBall size={400} x="20%" y="30%" delay={0} />
			<PulsingBall size={350} x="65%" y="50%" delay={1.5} />
			<PulsingBall size={300} x="40%" y="70%" delay={0.8} />

			{/* Animated gradient mesh */}
			<motion.div
				className="absolute inset-0 pointer-events-none"
				style={{
					background:
						"radial-gradient(circle at 30% 30%, rgba(241,76,47,0.1) 0%, transparent 50%)",
				}}
				animate={{
					background: [
						"radial-gradient(circle at 30% 30%, rgba(241,76,47,0.1) 0%, transparent 50%)",
						"radial-gradient(circle at 70% 60%, rgba(255,0,89,0.1) 0%, transparent 50%)",
						"radial-gradient(circle at 40% 80%, rgba(241,76,47,0.1) 0%, transparent 50%)",
						"radial-gradient(circle at 30% 30%, rgba(241,76,47,0.1) 0%, transparent 50%)",
					],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

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
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<motion.span
						className="inline-block text-sm font-medium tracking-wider uppercase mb-4"
						style={{
							background: "linear-gradient(90deg, #F14C2F 0%, #FF0059 100%)",
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

					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
						Built for the{" "}
						<span className="relative inline-block">
							<motion.span
								style={{
									background:
										"linear-gradient(90deg, #F14C2F 0%, #FF0059 100%)",
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
										"linear-gradient(90deg, #F14C2F 0%, #FF0059 100%)",
								}}
								initial={{ scaleX: 0, originX: 0 }}
								whileInView={{ scaleX: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
							/>
						</span>
					</h2>

					<motion.p
						className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
					>
						Experience next-generation collaboration with our cutting-edge
						platform designed for teams that demand excellence.
					</motion.p>
				</motion.div>

				{/* Glass cards grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<GlassCard key={feature.title} {...feature} index={index} />
					))}
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-20 text-center"
				>
					{/* Glass pill container */}
					<motion.div
						className="inline-flex items-center gap-4 p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg"
						whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
						transition={{ type: "spring", stiffness: 300, damping: 20 }}
					>
						<span className="pl-5 text-white/60 text-sm">
							Ready to transform your workflow?
						</span>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								size="lg"
								className="rounded-full text-white shadow-lg border-0 relative overflow-hidden group"
								style={{
									background:
										"linear-gradient(90deg, #F14C2F 0%, #FF0059 100%)",
								}}
							>
								<motion.span
									className="absolute inset-0 opacity-0 group-hover:opacity-100"
									style={{
										background:
											"linear-gradient(90deg, #FF0059 0%, #F14C2F 100%)",
									}}
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
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
					</motion.div>

					{/* Decorative elements */}
					<motion.div
						className="mt-8 flex justify-center gap-2"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.6 }}
					>
						{[...Array(3)].map((_, i) => (
							<motion.div
								key={i}
								className="w-2 h-2 rounded-full"
								style={{
									background:
										"linear-gradient(90deg, #F14C2F 0%, #FF0059 100%)",
								}}
								animate={{
									scale: [1, 1.3, 1],
									opacity: [0.5, 1, 0.5],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut",
									delay: i * 0.3,
								}}
							/>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
