"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/aceternity";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
	{ label: "Product", href: "#product" },
	{ label: "Use Cases", href: "#use-cases" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Resources", href: "#resources" },
	{ label: "Security", href: "#security" },
];

export default function Header() {
	const [hoveredLink, setHoveredLink] = useState<string | null>(null);

	return (
		<motion.header
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
			className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl backdrop-saturate-150"
		>
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<motion.div
					className="flex items-center gap-2.5 cursor-pointer"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					<Image
						src="/logo.svg"
						alt="Melp Logo"
						width={80}
						height={0}
						className="w-40 h-auto"
					/>
				</motion.div>

				{/* Navigation Links - Hidden on mobile */}
				<nav className="hidden md:flex items-center gap-1 relative">
					{navLinks.map((link) => (
						<motion.a
							key={link.label}
							href={link.href}
							className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg"
							onMouseEnter={() => setHoveredLink(link.label)}
							onMouseLeave={() => setHoveredLink(null)}
							whileHover={{ y: -1 }}
							whileTap={{ scale: 0.98 }}
						>
							{hoveredLink === link.label && (
								<motion.span
									layoutId="navbar-hover"
									className="absolute inset-0 bg-muted rounded-lg -z-10"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
								/>
							)}
							{link.label}
						</motion.a>
					))}
				</nav>

				{/* CTA Buttons */}
				<div className="flex items-center gap-3">
					<ThemeToggle />
					<motion.div
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="hidden sm:block"
					>
						<Button
							variant="ghost"
							size="sm"
							className="text-muted-foreground hover:text-foreground"
						>
							Log in
						</Button>
					</motion.div>
					<MagneticButton>
						<Button
							size="sm"
							className="shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
						>
							<motion.span
								className="flex items-center gap-2"
								whileHover={{ x: 2 }}
							>
								Get Started
								<motion.svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									initial={{ x: 0 }}
									whileHover={{ x: 3 }}
									transition={{ type: "spring", stiffness: 400 }}
								>
									<path
										d="M1 6H11M11 6L6 1M11 6L6 11"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</motion.svg>
							</motion.span>
						</Button>
					</MagneticButton>
				</div>
			</div>
		</motion.header>
	);
}
