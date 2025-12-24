"use client";

import { motion } from "motion/react";
import Link from "next/link";

const certifications = [
	{
		id: "soc2",
		name: "SOC 2 TYPE II",
		icon: "/logo-AICPA-SOC.svg",
	},
	{
		id: "iso",
		name: "ISO 27001",
		icon: "/iso.png",
	},
	{
		id: "gdpr",
		name: "GDPR",
		icon: "/logo-gdpr.svg",
	},
	{
		id: "hipaa",
		name: "HIPAA",
		icon: "/HIPAA-Logo.svg",
	},
];

export default function SecuritySection() {
	return (
		<section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Main content area */}
				<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
					{/* Left side - Text content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="lg:max-w-md"
					>
						<span
							className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
							style={{ opacity: 1, transform: "none" }}
						>
							Enterprise Security
						</span>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-2">
							Your data stays private and under your control
						</h2>
						<p className="text-muted-foreground text-lg mb-8">
							Melp encrypts data in transit and at rest, doesn’t use your information for ads, and limits access based on roles, so your organization stays in charge of its own privacy.
						</p>

						{/* Trust indicators */}
						<div className="flex items-center gap-6 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={1.5}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
									/>
								</svg>
								<span className="uppercase tracking-wider text-xs font-medium">
									99.99% Uptime
								</span>
							</div>
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={1.5}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
									/>
								</svg>
								<span className="uppercase tracking-wider text-xs font-medium">
									24/7 Support
								</span>
							</div>
						</div>
					</motion.div>

					{/* Right side - Certification badges in a row */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex-1"
					>
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
							{certifications.map((cert, index) => (
								<motion.div
									key={cert.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
									className="flex flex-col items-center text-center group"
								>
									{/* Badge icon */}
									<div className="h-20 sm:h-24 flex items-center justify-center mb-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
										<img
											src={cert.icon}
											alt={cert.name}
											className="max-h-full max-w-[80px] sm:max-w-[100px] object-contain"
										/>
									</div>
									{/* Badge name */}
									<span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
										{cert.name}
									</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				{/* Learn more link */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="mt-12 pt-8 border-t border-border/50"
				>
					<Link
						href="/security"
						className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						Learn more about our security practices
						<svg
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
