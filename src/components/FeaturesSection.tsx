"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
	SpotlightCard,
	RevealOnScroll,
	DotBackground,
} from "@/components/ui/aceternity";

type Feature = {
	title: string;
	description: string;
	alt: string;
	imageFit?: string;
	aspectClass?: string;
	gradient?: string;
} & (
	| {
			kind: "image";
			image: string;
			video?: undefined;
	  }
	| {
			kind: "video";
			video: string;
			image?: undefined;
	  }
);

const features: Feature[] = [
	{
		kind: "video",
		title: "AI-Powered Messaging",
		description:
			"Organized channels with instant AI translation and Draft for Me assistance. Write clearly in any tone — professional, casual, or custom.",
		video: "/video/message.mp4",
		alt: "Mobile messaging with instant translation overlay",
		imageFit: "object-cover",
		aspectClass: "aspect-video",
	},
	{
		kind: "video",
		title: "Smart Meetings",
		description:
			"Enterprise-grade video with AI-generated summaries, real-time transcription, and automatic action items — every meeting becomes documentation.",
		video: "/video/call.mp4",
		alt: "Screen sharing during a multi-participant video call",
		imageFit: "object-cover",
		aspectClass: "aspect-video",
	},
	{
		kind: "video",
		title: "Intelligent Drive",
		description:
			"Secure cloud storage with AI file translation and instant summaries. Translate documents to any language; ask questions to find answers fast.",
		video: "/video/drive.mp4",
		alt: "Laptop and mobile view of shared workspace content",
		imageFit: "object-cover",
		aspectClass: "aspect-video",
	},
	{
		kind: "video",
		title: "Professional Network",
		description:
			"Connect with vendors, agencies, and partners on real projects. AI-assisted collaboration across organizational boundaries.",
		video: "/video/network.mp4",
		alt: "Professional contacts list on mobile",
		imageFit: "object-contain",
		aspectClass: "aspect-video",
	},
	{
		kind: "video",
		title: "Real-Time AI Translation",
		description:
			"Live multilingual transcription and translation. Every participant reads in their own language — global teams, zero language barriers.",
		video: "/video/language.mp4",
		alt: "Live captions in multiple languages during a call",
		imageFit: "object-cover",
		aspectClass: "aspect-video",
	},
	{
		kind: "video",
		title: "Smart Scheduling",
		description:
			"AI-assisted scheduling with time zone awareness. Automatic reminders and calendar sync keep distributed teams aligned.",
		video: "/video/calendar.mp4",
		alt: "Team calendar and scheduling dashboard",
		imageFit: "object-cover",
		aspectClass: "aspect-video",
	},
];

export default function FeaturesSection() {
	return (
		<motion.section
			id="product"
			className="relative py-24 sm:py-32 bg-background overflow-hidden isolate"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			<DotBackground className="absolute inset-0 z-0" />

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<RevealOnScroll className="text-center mb-20">
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						AI-First Platform
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						AI built into every workflow
					</h2>
					<p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						Translation, summarization, transcription, and intelligent writing assistance —
						AI capabilities that deliver clarity, save time, and improve quality.
					</p>
				</RevealOnScroll>

				{/* Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feature, index) => (
						<RevealOnScroll key={feature.title} delay={index * 0.1}>
							<SpotlightCard className="h-full group cursor-pointer">
								<div
									className={`relative ${
										feature.aspectClass ?? "aspect-4/3"
									} w-full overflow-hidden rounded-t-xl`}
								>
									{feature.kind === "video" ? (
										<video
											src={feature.video}
											className={`absolute inset-0 h-full w-full ${
												feature.imageFit ?? "object-cover"
											}`}
											autoPlay
											loop
											muted
											playsInline
											preload="metadata"
											aria-label={feature.alt}
										/>
									) : (
										<Image
											src={feature.image}
											alt={feature.alt}
											fill
											className={feature.imageFit ?? "object-cover"}
											sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 100vw"
											priority={index < 2}
										/>
									)}
									<motion.div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>

								{/* Content */}
								<div className="p-6">
									<motion.h3
										className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300"
										whileHover={{ x: 4 }}
									>
										{feature.title}
									</motion.h3>
									<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
										{feature.description}
									</p>

									{/* Learn more link */}
									<motion.div
										className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
										initial={{ x: -10 }}
										whileHover={{ x: 0 }}
									>
										<span>Learn more</span>
										<motion.svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											className="ml-1"
											whileHover={{ x: 4 }}
										>
											<path
												d="M6 12L10 8L6 4"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</motion.svg>
									</motion.div>
								</div>
							</SpotlightCard>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</motion.section>
	);
}
