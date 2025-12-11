"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface ProductVisualProps {
	imageSrc?: string;
	imageAlt?: string;
	className?: string;
}

export default function ProductVisual({
	imageSrc = "/S1.png",
	imageAlt = "Product screenshot",
	className = "",
}: ProductVisualProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<section
			ref={containerRef}
			className={`relative min-h-screen overflow-hidden py-20 lg:py-32 ${className}`}
		>
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url('/bg.jpg')" }}
			/>

			{/* Dark overlay for better contrast */}
			<div className="absolute inset-0 bg-black/20 dark:bg-black/40" />

			{/* Floating 3D Abstract Shapes */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Large bubble - top left */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#a5b4fc]/40 to-[#818cf8]/20 dark:from-[#4338ca]/20 dark:to-[#6366f1]/10 blur-3xl"
				/>

				{/* Medium bubble - top right */}
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
					className="absolute top-10 right-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-bl from-[#c4b5fd]/50 to-[#a78bfa]/20 dark:from-[#7c3aed]/25 dark:to-[#8b5cf6]/10 blur-2xl"
				/>

				{/* Small floating orb - right side */}
				<motion.div
					animate={{
						y: [0, -20, 0],
						x: [0, 10, 0],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute top-1/4 right-[5%] w-24 h-24 rounded-full bg-gradient-to-tr from-[#93c5fd]/60 to-[#60a5fa]/30 dark:from-[#3b82f6]/30 dark:to-[#2563eb]/15 blur-xl"
				/>

				{/* Large bubble - bottom right */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
					className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#ddd6fe]/40 to-[#c4b5fd]/20 dark:from-[#6d28d9]/15 dark:to-[#7c3aed]/10 blur-3xl"
				/>

				{/* Medium bubble - bottom left */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
					className="absolute bottom-20 left-[5%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#bfdbfe]/40 to-[#93c5fd]/20 dark:from-[#1e40af]/20 dark:to-[#3b82f6]/10 blur-2xl"
				/>

				{/* Floating orb - left side */}
				<motion.div
					animate={{
						y: [0, 15, 0],
						x: [0, -8, 0],
					}}
					transition={{
						duration: 7,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1,
					}}
					className="absolute top-1/2 left-[8%] w-20 h-20 rounded-full bg-gradient-to-br from-[#e9d5ff]/60 to-[#d8b4fe]/30 dark:from-[#a855f7]/25 dark:to-[#9333ea]/15 blur-lg"
				/>

				{/* Small decorative orb - top center */}
				<motion.div
					animate={{
						y: [0, -12, 0],
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 0.5,
					}}
					className="absolute top-[15%] left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-b from-[#fbcfe8]/50 to-[#f9a8d4]/20 dark:from-[#ec4899]/20 dark:to-[#db2777]/10 blur-xl"
				/>

				{/* Tiny floating spheres */}
				<motion.div
					animate={{ y: [0, -8, 0], opacity: [0.4, 0.7, 0.4] }}
					transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
					className="absolute top-[30%] left-[20%] w-8 h-8 rounded-full bg-gradient-to-tr from-[#a5b4fc]/80 to-[#818cf8]/40 blur-sm"
				/>
				<motion.div
					animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1.5,
					}}
					className="absolute bottom-[35%] right-[15%] w-10 h-10 rounded-full bg-gradient-to-bl from-[#c4b5fd]/70 to-[#a78bfa]/30 blur-sm"
				/>
				<motion.div
					animate={{ y: [0, -6, 0], x: [0, 4, 0], opacity: [0.5, 0.8, 0.5] }}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 2,
					}}
					className="absolute top-[60%] left-[25%] w-6 h-6 rounded-full bg-gradient-to-r from-[#93c5fd]/70 to-[#60a5fa]/40 blur-sm"
				/>
			</div>

			{/* Main Content Container */}
			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 40, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{
						duration: 1,
						ease: [0.21, 0.47, 0.32, 0.98],
					}}
					className="relative mx-auto max-w-6xl"
				>
					{/* Glow Effect Behind Frame */}
					<div className="absolute inset-0 -m-4 rounded-[2.5rem] bg-gradient-to-br from-[#818cf8]/20 via-[#a78bfa]/15 to-[#c084fc]/20 dark:from-[#4338ca]/30 dark:via-[#6d28d9]/25 dark:to-[#7c3aed]/30 blur-2xl" />

					{/* Secondary Glow */}
					<div className="absolute inset-0 -m-2 rounded-[2rem] bg-gradient-to-tr from-[#93c5fd]/15 to-[#ddd6fe]/15 dark:from-[#3b82f6]/15 dark:to-[#8b5cf6]/15 blur-xl" />

					{/* Glassmorphism Frame for Image */}
					<div className="relative rounded-[1.75rem] p-[4px] bg-white/20 dark:bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
						<div className="relative rounded-[1.5rem] overflow-hidden border border-white/40 dark:border-white/20 bg-white/10 dark:bg-black/10 backdrop-blur-md">
							{/* Glassmorphism inner glow */}
							<div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 dark:from-white/10 dark:via-transparent dark:to-white/5 pointer-events-none z-10" />

							{/* Product Screenshot */}
							<div className="relative aspect-[16/10] w-full">
								<img
									src={imageSrc}
									alt={imageAlt}
									className="w-full h-full object-fit object-top"
								/>

								{/* Subtle overlay for polish */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] to-transparent pointer-events-none" />
							</div>
						</div>
					</div>

					{/* Reflection/Shadow beneath */}
					<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-gradient-to-b from-black/10 to-transparent dark:from-black/20 blur-2xl rounded-full" />
				</motion.div>
			</div>

			{/* Subtle Noise Texture Overlay */}
			<div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
		</section>
	);
}

// Standalone version for use in landing pages
export function ProductVisualShowcase({
	title = "Experience the Future of Collaboration",
	subtitle = "A unified workspace designed for modern enterprise teams",
	imageSrc = "/S1.png",
	imageAlt = "Product screenshot",
}: {
	title?: string;
	subtitle?: string;
	imageSrc?: string;
	imageAlt?: string;
}) {
	return (
		<section className="relative min-h-screen overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url('/bg.jpg')" }}
			/>

			{/* Dark overlay for better contrast */}
			<div className="absolute inset-0 bg-black/20 dark:bg-black/40" />

			{/* Floating 3D Abstract Shapes */}
			<FloatingShapes />

			{/* Content */}
			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
						{title}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{subtitle}
					</p>
				</motion.div>

				{/* Product Frame */}
				<ProductFrame imageSrc={imageSrc} imageAlt={imageAlt} />
			</div>

			{/* Noise Texture */}
			<div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
		</section>
	);
}

// Reusable floating shapes component
function FloatingShapes() {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{/* Large bubble - top left */}
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.5, ease: "easeOut" }}
				className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#a5b4fc]/40 to-[#818cf8]/20 dark:from-[#4338ca]/20 dark:to-[#6366f1]/10 blur-3xl"
			/>

			{/* Medium bubble - top right */}
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
				className="absolute top-10 right-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-bl from-[#c4b5fd]/50 to-[#a78bfa]/20 dark:from-[#7c3aed]/25 dark:to-[#8b5cf6]/10 blur-2xl"
			/>

			{/* Small floating orb - right side */}
			<motion.div
				animate={{
					y: [0, -20, 0],
					x: [0, 10, 0],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute top-1/4 right-[5%] w-24 h-24 rounded-full bg-gradient-to-tr from-[#93c5fd]/60 to-[#60a5fa]/30 dark:from-[#3b82f6]/30 dark:to-[#2563eb]/15 blur-xl"
			/>

			{/* Large bubble - bottom right */}
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
				className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#ddd6fe]/40 to-[#c4b5fd]/20 dark:from-[#6d28d9]/15 dark:to-[#7c3aed]/10 blur-3xl"
			/>

			{/* Medium bubble - bottom left */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
				className="absolute bottom-20 left-[5%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#bfdbfe]/40 to-[#93c5fd]/20 dark:from-[#1e40af]/20 dark:to-[#3b82f6]/10 blur-2xl"
			/>

			{/* Floating orb - left side */}
			<motion.div
				animate={{
					y: [0, 15, 0],
					x: [0, -8, 0],
				}}
				transition={{
					duration: 7,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
				className="absolute top-1/2 left-[8%] w-20 h-20 rounded-full bg-gradient-to-br from-[#e9d5ff]/60 to-[#d8b4fe]/30 dark:from-[#a855f7]/25 dark:to-[#9333ea]/15 blur-lg"
			/>

			{/* Tiny floating spheres */}
			<motion.div
				animate={{ y: [0, -8, 0], opacity: [0.4, 0.7, 0.4] }}
				transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
				className="absolute top-[30%] left-[20%] w-8 h-8 rounded-full bg-gradient-to-tr from-[#a5b4fc]/80 to-[#818cf8]/40 blur-sm"
			/>
			<motion.div
				animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1.5,
				}}
				className="absolute bottom-[35%] right-[15%] w-10 h-10 rounded-full bg-gradient-to-bl from-[#c4b5fd]/70 to-[#a78bfa]/30 blur-sm"
			/>
		</div>
	);
}

// Reusable product frame component
function ProductFrame({
	imageSrc = "/S1.png",
	imageAlt = "Product screenshot",
}: {
	imageSrc?: string;
	imageAlt?: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40, scale: 0.95 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{
				duration: 1,
				delay: 0.3,
				ease: [0.21, 0.47, 0.32, 0.98],
			}}
			className="relative mx-auto max-w-6xl"
		>
			{/* Glow Effect Behind Frame */}
			<div className="absolute inset-0 -m-4 rounded-[2.5rem] bg-gradient-to-br from-[#818cf8]/20 via-[#a78bfa]/15 to-[#c084fc]/20 dark:from-[#4338ca]/30 dark:via-[#6d28d9]/25 dark:to-[#7c3aed]/30 blur-2xl" />

			{/* Secondary Glow */}
			<div className="absolute inset-0 -m-2 rounded-[2rem] bg-gradient-to-tr from-[#93c5fd]/15 to-[#ddd6fe]/15 dark:from-[#3b82f6]/15 dark:to-[#8b5cf6]/15 blur-xl" />

			{/* Glassmorphism Frame for Image */}
			<div className="relative rounded-[1.75rem] p-[4px] bg-white/20 dark:bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
				<div className="relative rounded-[1.5rem] overflow-hidden border border-white/40 dark:border-white/20 bg-white/10 dark:bg-black/10 backdrop-blur-md">
					{/* Glassmorphism inner glow */}
					<div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 dark:from-white/10 dark:via-transparent dark:to-white/5 pointer-events-none z-10" />

					{/* Product Screenshot */}
					<div className="relative aspect-[16/10] w-full">
						<img
							src={imageSrc}
							alt={imageAlt}
							className="w-full h-full object-fit object-top"
						/>

						{/* Subtle overlay for polish */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] to-transparent pointer-events-none" />
					</div>
				</div>
			</div>

			{/* Reflection/Shadow beneath */}
			<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-gradient-to-b from-black/10 to-transparent dark:from-black/20 blur-2xl rounded-full" />
		</motion.div>
	);
}
