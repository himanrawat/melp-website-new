"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
	Menu,
	X,
	ChevronDown,
	MessageCircle,
	Bot,
	Languages,
	Video,
	HardDrive,
	Calendar,
	Users,
	FileDown,
	Network,
	Subtitles,
	Sparkles,
} from "lucide-react";

const productLinks = [
	{ name: "Chat", href: "/product/chat", icon: MessageCircle },
	{ name: "AI", href: "/product/ai", icon: Bot },
	{ name: "Translations", href: "/product/translations", icon: Languages },
	{ name: "Conferencing", href: "/product/conferencing", icon: Video },
	{ name: "Drive", href: "/product/drive", icon: HardDrive },
	{ name: "Calendar", href: "/product/calendar", icon: Calendar },
	{ name: "Teams", href: "/product/teams", icon: Users },
	{ name: "Export", href: "/product/export", icon: FileDown },
	{ name: "Networking", href: "/product/networking", icon: Network },
	{ name: "Captions", href: "/product/captions", icon: Subtitles },
	{ name: "AI Assistant", href: "/product/assistant", icon: Sparkles },
];

const navLinks = [
	{ name: "Solutions", href: "/solutions" },
	{ name: "Pricing", href: "/pricing" },
	{ name: "Resources", href: "/resources/help" },
];

interface DarkLayoutProps {
	children: React.ReactNode;
}

export default function DarkLayout({ children }: DarkLayoutProps) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="min-h-screen bg-black text-white">
			{/* Dark Navbar */}
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? "bg-black/80 backdrop-blur-xl border-b border-white/10"
						: "bg-transparent"
				}`}
			>
				<nav className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-2">
							<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
								<span className="text-white font-bold text-lg">M</span>
							</div>
							<span className="text-white font-semibold text-xl">Melp</span>
						</Link>

						{/* Desktop Nav */}
						<div className="hidden md:flex items-center gap-8">
							{/* Product Dropdown */}
							<div
								className="relative"
								onMouseEnter={() => setIsProductMenuOpen(true)}
								onMouseLeave={() => setIsProductMenuOpen(false)}
							>
								<button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
									Product
									<ChevronDown
										className={`w-4 h-4 transition-transform ${
											isProductMenuOpen ? "rotate-180" : ""
										}`}
									/>
								</button>

								{/* Dropdown Menu */}
								{isProductMenuOpen && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 10 }}
										className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-2"
									>
										{productLinks.map((link) => (
											<Link
												key={link.name}
												href={link.href}
												className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
											>
												<link.icon className="w-4 h-4 text-red-400" />
												<span className="text-gray-300">{link.name}</span>
											</Link>
										))}
									</motion.div>
								)}
							</div>

							{/* Other Nav Links */}
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="text-gray-300 hover:text-white transition-colors"
								>
									{link.name}
								</Link>
							))}
						</div>

						{/* CTA Buttons */}
						<div className="hidden md:flex items-center gap-4">
							<Link
								href="#"
								className="text-gray-300 hover:text-white transition-colors"
							>
								Sign In
							</Link>
							<Link
								href="#"
								className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
							>
								Get Started
							</Link>
						</div>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden text-white"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>

					{/* Mobile Menu */}
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden mt-4 py-4 border-t border-white/10"
						>
							<div className="flex flex-col gap-4">
								<Link
									href="/product/ai"
									className="text-gray-300 hover:text-white"
								>
									Product
								</Link>
								{navLinks.map((link) => (
									<Link
										key={link.name}
										href={link.href}
										className="text-gray-300 hover:text-white"
									>
										{link.name}
									</Link>
								))}
								<div className="flex flex-col gap-2 mt-4">
									<Link href="#" className="text-gray-300 hover:text-white">
										Sign In
									</Link>
									<Link
										href="#"
										className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-lg text-center"
									>
										Get Started
									</Link>
								</div>
							</div>
						</motion.div>
					)}
				</nav>
			</header>

			{/* Main Content */}
			<main>{children}</main>

			{/* Dark Footer */}
			<footer className="bg-gray-950 border-t border-white/10">
				<div className="container mx-auto px-4 py-16">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{/* Logo & Description */}
						<div className="md:col-span-1">
							<Link href="/" className="flex items-center gap-2 mb-4">
								<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
									<span className="text-white font-bold text-lg">M</span>
								</div>
								<span className="text-white font-semibold text-xl">Melp</span>
							</Link>
							<p className="text-gray-400 text-sm mb-4">
								The all-in-one platform for secure business communication
								powered by AI.
							</p>
						</div>

						{/* Product Links */}
						<div>
							<h4 className="text-white font-semibold mb-4">Product</h4>
							<ul className="space-y-2">
								{productLinks.slice(0, 6).map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-gray-400 hover:text-white text-sm transition-colors"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Company Links */}
						<div>
							<h4 className="text-white font-semibold mb-4">Company</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="/solutions"
										className="text-gray-400 hover:text-white text-sm transition-colors"
									>
										Solutions
									</Link>
								</li>
								<li>
									<Link
										href="/pricing"
										className="text-gray-400 hover:text-white text-sm transition-colors"
									>
										Pricing
									</Link>
								</li>
								<li>
									<Link
										href="/resources/blog"
										className="text-gray-400 hover:text-white text-sm transition-colors"
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										href="/resources/help"
										className="text-gray-400 hover:text-white text-sm transition-colors"
									>
										Help Center
									</Link>
								</li>
							</ul>
						</div>

						{/* Legal Links */}
						<div>
							<h4 className="text-white font-semibold mb-4">Legal</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="/legal/privacy"
										className="text-gray-400 hover:text-white text-sm transition-colors"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href="/legal/terms-conditions"
										className="text-gray-400 hover:text-white text-sm transition-colors"
									>
										Terms of Service
									</Link>
								</li>
								<li>
									<Link
										href="/legal/security"
										className="text-gray-400 hover:text-white text-sm transition-colors"
									>
										Security
									</Link>
								</li>
								<li>
									<Link
										href="/legal/cookies"
										className="text-gray-400 hover:text-white text-sm transition-colors"
									>
										Cookie Policy
									</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-gray-500 text-sm">
							© {new Date().getFullYear()} Melp. All rights reserved.
						</p>
						<div className="flex items-center gap-6">
							<span className="text-gray-500 text-sm">Follow us</span>
							<div className="flex items-center gap-4">
								{["Twitter", "LinkedIn", "GitHub"].map((social) => (
									<a
										key={social}
										href="#"
										className="text-gray-400 hover:text-white text-sm transition-colors"
									>
										{social}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
