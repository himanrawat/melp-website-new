"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const footerLinks = {
	Product: [
		{ label: "Features", href: "#features" },
		{ label: "Integrations", href: "#" },
		{ label: "Pricing", href: "#pricing" },
		{ label: "Changelog", href: "#" },
	],
	Company: [
		{ label: "About", href: "#" },
		{ label: "Blog", href: "#" },
		{ label: "Careers", href: "#" },
		{ label: "Press", href: "#" },
	],
	Resources: [
		{ label: "Documentation", href: "#" },
		{ label: "Help Center", href: "#" },
		{ label: "Community", href: "#" },
		{ label: "Contact", href: "#" },
	],
	Legal: [
		{ label: "Privacy", href: "#" },
		{ label: "Terms", href: "#" },
		{ label: "Security", href: "#security" },
		{ label: "Cookies", href: "#" },
	],
};

const socialLinks = [
	{ label: "Twitter", icon: "𝕏" },
	{ label: "LinkedIn", icon: "in" },
	{ label: "GitHub", icon: "⌘" },
];

export default function Footer() {
	return (
		<footer className="bg-muted/30 border-t relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,32,32,0.03)_0%,transparent_50%)]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
					{/* Brand Column */}
					<div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
						<motion.div
							className="flex items-center gap-2 mb-4"
							whileHover={{ scale: 1.02 }}
						>
							<Image
								src="/logo.svg"
								alt="Melp Logo"
								width={80}
								height={0}
								className="w-40 h-auto"
							/>
						</motion.div>
						<p className="text-sm text-muted-foreground max-w-xs mb-6">
							The unified work platform for teams, partners, and clients. Built for enterprises. Designed for people. Powered by AI.
						</p>
						{/* Social Links */}
						<div className="flex gap-3">
							{socialLinks.map((social, index) => (
								<motion.a
									key={index}
									href="#"
									className="w-9 h-9 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
								>
									{social.icon}
								</motion.a>
							))}
						</div>
					</div>

					{/* Link Columns */}
					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
							<h3 className="text-sm font-semibold text-foreground mb-4">
								{category}
							</h3>
							<ul className="space-y-3">
								{links.map((link) => (
									<li key={link.label}>
										<motion.div
											whileHover={{ x: 3 }}
											transition={{ duration: 0.2 }}
										>
											<Link
												href={link.href}
												className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
											>
												{link.label}
												<svg
													className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 5l7 7-7 7"
													/>
												</svg>
											</Link>
										</motion.div>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-8 border-t border-border">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<p className="text-sm text-muted-foreground">
							© 2025 Melp, Inc. All rights reserved.
						</p>
						{/* <div className="flex items-center gap-6">
							<motion.span
								className="text-xs text-muted-foreground/60 flex items-center gap-1"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 }}
							>
								Made with <span className="text-red-400">♥</span> for modern
								teams
							</motion.span>
						</div> */}
					</div>
				</div>
			</div>
		</footer>
	);
}
