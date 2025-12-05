"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navLinks = [
	{ label: "Product", href: "#product" },
	{ label: "Use Cases", href: "#use-cases" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Resources", href: "#resources" },
	{ label: "Security", href: "#security" },
];

export default function Header() {
	return (
		<motion.header
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md"
		>
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<div className="flex items-center gap-2">
					<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
						M
					</div>
					<span className="text-xl font-semibold tracking-tight">Melp</span>
				</div>

				{/* Navigation Links - Hidden on mobile */}
				<nav className="hidden md:flex items-center gap-1">
					{navLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
						>
							{link.label}
						</a>
					))}
				</nav>

				{/* CTA Buttons */}
				<div className="flex items-center gap-2">
					<Button variant="ghost" size="sm" className="hidden sm:inline-flex">
						Log in
					</Button>
					<Button size="sm">Get Started</Button>
				</div>
			</div>
		</motion.header>
	);
}
