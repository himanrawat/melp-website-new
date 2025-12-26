"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { X, Linkedin as LinkedinIcon, Code2 } from "lucide-react";

// Routes that should have dark theme
const DARK_THEME_ROUTES = ["/product/ai"];

const footerLinks = {
	Product: [
		{ label: "Team Chat", href: "/product/chat" },
		{ label: "Video Conferencing", href: "/product/conferencing" },
		{ label: "AI Assistant", href: "/product/ai" },
		{ label: "Melp Drive", href: "/product/drive" },
		{ label: "Calendar", href: "/product/calendar" },
		{ label: "Pricing", href: "/pricing" },
	],
	Company: [
		{ label: "Partners", href: "/partners" },
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
		{ label: "Privacy", href: "/legal/privacy" },
		{ label: "Terms", href: "/legal/terms-conditions" },
		{ label: "Security", href: "/legal/security" },
		{ label: "Cookies", href: "/legal/cookies" },
	],
};

const socialLinks = [
	{ label: "Twitter", iconName: "twitter" },
	{ label: "LinkedIn", iconName: "linkedin" },
	{ label: "GitHub", iconName: "github" },
];

const iconMap: Record<string, React.ReactNode> = {
	twitter: <X className="w-4 h-4" />,
	linkedin: <LinkedinIcon className="w-4 h-4" />,
	github: <Code2 className="w-4 h-4" />,
};

export default function Footer() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const pathname = usePathname();
	const isDarkRoute = DARK_THEME_ROUTES.some((route) =>
		pathname?.startsWith(route)
	);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<footer
			className={`border-t relative overflow-hidden ${
				isDarkRoute ? "bg-black border-white/10" : "bg-muted/30 border-border"
			}`}
		>
			{/* Background decoration */}
			<div
				className={`absolute inset-0 ${
					isDarkRoute
						? "bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05)_0%,transparent_50%)]"
						: "bg-[radial-gradient(ellipse_at_bottom,rgba(34,32,32,0.03)_0%,transparent_50%)]"
				}`}
			/>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
					{/* Brand Column */}
					<div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
						<motion.div
							className="flex items-center gap-2 mb-4"
							whileHover={{ scale: 1.02 }}
						>
							<Image
								src={
									isDarkRoute || (mounted && resolvedTheme === "dark")
										? "/logo-dark.svg"
										: "/logo.svg"
								}
								alt="Melp Logo"
								width={80}
								height={0}
								className="w-40 h-auto"
							/>
						</motion.div>
						<p
							className={`text-sm max-w-xs mb-6 ${
								isDarkRoute ? "text-gray-400" : "text-muted-foreground"
							}`}
						>
							The unified work platform for teams, partners, and clients. Built
							for enterprises. Designed for people. Powered by AI.
						</p>
						{/* Social Links */}
						<div className="flex gap-3">
							{socialLinks.map((social, index) => (
								<motion.a
									key={index}
									href="#"
									className={`w-9 h-9 rounded-lg border flex items-center justify-center text-sm transition-all ${
										isDarkRoute
											? "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50"
											: "bg-muted/50 border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
									}`}
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
								>
									{iconMap[social.iconName]}
								</motion.a>
							))}
						</div>
					</div>

					{/* Link Columns */}
					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
							<h3
								className={`text-sm font-semibold mb-4 ${
									isDarkRoute ? "text-white" : "text-foreground"
								}`}
							>
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
												className={`text-sm transition-colors inline-flex items-center gap-1 group ${
													isDarkRoute
														? "text-gray-400 hover:text-white"
														: "text-muted-foreground hover:text-foreground"
												}`}
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
				<div
					className={`mt-12 pt-8 border-t ${
						isDarkRoute ? "border-white/10" : "border-border"
					}`}
				>
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<p
							className={`text-sm ${
								isDarkRoute ? "text-gray-500" : "text-muted-foreground"
							}`}
						>
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
