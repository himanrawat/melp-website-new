"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Shield, Lock, Users, Clock } from "lucide-react";

const trustSignals = [
	{
		icon: Shield,
		title: "SOC 2 Type II",
		description: "Certified compliance",
	},
	{
		icon: Lock,
		title: "GDPR Compliant",
		description: "Data protection ready",
	},
	{
		icon: Users,
		title: "SSO & SCIM",
		description: "Enterprise identity",
	},
	{
		icon: Clock,
		title: "99.9% Uptime",
		description: "Reliable by design",
	},
];

const logos = ["Acme Corp", "Globex", "Initech", "Umbrella", "Weyland"];

export function TrustSection() {
	const headerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: headerRef,
		offset: ["start end", "end start"],
	});

	const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);
	const headerOpacity = useTransform(
		scrollYProgress,
		[0, 0.3, 0.6, 1],
		[0, 1, 1, 0]
	);
	const headerScale = useTransform(
		scrollYProgress,
		[0, 0.3, 0.6, 1],
		[0.9, 1, 1, 0.95]
	);

	return (
		<section className="relative z-20 py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<motion.div
				ref={headerRef}
				className="text-center mb-12 lg:mb-16 flex flex-col items-center"
				style={{ opacity: headerOpacity, scale: headerScale, y: headerY }}
			>
				<motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-6">
					Enterprise ready
				</motion.span>

				<motion.h2 className="text-3xl lg:text-5xl font-medium text-neutral-900 dark:text-white mb-3">
					Security teams approve.
				</motion.h2>
				<motion.p className="text-xl lg:text-2xl text-neutral-500 dark:text-neutral-400">
					IT teams relax.
				</motion.p>
			</motion.div>

			{/* Trust Signals Grid */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-16">
				{trustSignals.map((signal, index) => (
					<motion.div
						key={signal.title}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
						viewport={{ once: true }}
						className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
					>
						<div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center mb-4">
							<signal.icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
						</div>
						<h3 className="text-base font-medium text-neutral-900 dark:text-white mb-1">
							{signal.title}
						</h3>
						<p className="text-sm text-neutral-500 dark:text-neutral-400">
							{signal.description}
						</p>
					</motion.div>
				))}
			</div>

			{/* Logo Strip */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="border-t border-neutral-200 dark:border-neutral-800 pt-12"
			>
				<p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-8">
					Trusted by teams at
				</p>
				<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
					{logos.map((logo) => (
						<span
							key={logo}
							className="text-lg font-semibold text-neutral-400 dark:text-neutral-600 tracking-wide uppercase"
						>
							{logo}
						</span>
					))}
				</div>
			</motion.div>
		</section>
	);
}
