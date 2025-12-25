"use client";

import { useState, useRef, useCallback, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/aceternity";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
	MessageCircle,
	Video,
	Cloud,
	Sparkles,
	Building2,
	TrendingUp,
	Landmark,
	Heart,
	Globe,
	HelpCircle,
	FileText,
	Shield,
	ShieldCheck,
	Cookie,
	BarChart3,
	Newspaper,
	Users,
	Briefcase,
	Mail,
	ChevronDown,
	Menu,
	X,
	ArrowRight,
	Zap,
	FolderKanban,
	Mic,
	Download,
	Rocket,
	type LucideIcon,
} from "lucide-react";

// Routes that should use dark theme header
const DARK_THEME_ROUTES = ["/product/ai"];

// ============================================
// Types
// ============================================

interface DropdownItem {
	label: string;
	href: string;
	description?: string;
	icon: LucideIcon;
	badge?: string;
}

interface DropdownCategory {
	title: string;
	items: DropdownItem[];
	highlighted?: boolean;
}

interface NavItemConfig {
	label: string;
	href?: string;
	categories?: DropdownCategory[];
	inputSection?: {
		title: string;
		placeholder: string;
		buttonText: string;
		icon: LucideIcon;
	};
	featured?: {
		title: string;
		description: string;
		cta: string;
		href: string;
		icon: LucideIcon;
	};
}

// ============================================
// Navigation Data
// ============================================

const navItems: NavItemConfig[] = [
	{
		label: "Platform",
		categories: [
			{
				title: "Collaboration",
				items: [
					{
						label: "Audio-Video Conferencing",
						href: "/product/conferencing",
						description: "HD video meetings and voice calls",
						icon: Video,
					},
					{
						label: "Team Chat",
						href: "/product/chat",
						description: "Real-time messaging for teams",
						icon: MessageCircle,
					},
					{
						label: "Networking",
						href: "/product/networking",
						description: "Connect and build relationships",
						icon: Users,
					},
					{
						label: "Scheduling & Calendar",
						href: "/product/calendar",
						description: "Smart scheduling for your team",
						icon: FolderKanban,
					},
					{
						label: "Melp Drive",
						href: "/product/drive",
						description: "Secure file storage and sharing",
						icon: Cloud,
					},
				],
			},
			{
				title: "Productivity",
				items: [
					{
						label: "AI Assistant",
						href: "/product/ai",
						description: "Smart workflows powered by AI",
						icon: Sparkles,
						badge: "New",
					},
					{
						label: "Teams & Topics",
						href: "/product/teams",
						description: "Organize with teams and breakout groups",
						icon: Users,
					},
					{
						label: "Translations",
						href: "/product/translations",
						description: "Real-time translation in 90+ languages",
						icon: Globe,
					},
					{
						label: "Live Captions",
						href: "/product/captions",
						description: "Real-time captions & AI summaries",
						icon: Mic,
					},
					{
						label: "Export & Archive",
						href: "/product/export",
						description: "Export chats to PDF or email",
						icon: Mail,
					},
					{
						label: "Personal Room",
						href: "/product/personal-room",
						description: "Your private meeting space",
						icon: Video,
					},
				],
			},
		],
		inputSection: {
			title: "Enter Meeting Link",
			placeholder: "Paste meeting link here...",
			buttonText: "Join",
			icon: Video,
		},
		featured: {
			title: "Try Melp Desktop App",
			description: "For a faster, more seamless experience",
			cta: "Download App",
			href: "/download",
			icon: Download,
		},
	},
	{
		label: "Solutions",
		categories: [
			{
				title: "By Company Size",
				items: [
					{
						label: "Enterprises",
						href: "/solutions/enterprises",
						description: "Scale across your organization",
						icon: Building2,
					},
					{
						label: "Small & Medium-Sized Businesses",
						href: "/solutions/smes",
						description: "Powerful tools for growing teams",
						icon: TrendingUp,
					},
					{
						label: "Start-ups",
						href: "/solutions/startups",
						description: "Move fast and stay connected",
						icon: Rocket,
					},
				],
			},
			{
				title: "By Industry",
				items: [
					{
						label: "IT & Technology",
						href: "/solutions/it-technology",
						description: "Built for tech teams",
						icon: Zap,
					},
					{
						label: "Pharma & Life Sciences",
						href: "/solutions/pharma",
						description: "Secure R&D collaboration",
						icon: Heart,
					},
					{
						label: "Legal & Law Firms",
						href: "/solutions/legal",
						description: "Confidential client communication",
						icon: Landmark,
					},
					{
						label: "Financial Services",
						href: "/solutions/financial-services",
						description: "Compliant financial solutions",
						icon: Briefcase,
					},
					{
						label: "Creative & Media",
						href: "/solutions/creative-media",
						description: "Collaborate on creative projects",
						icon: Sparkles,
					},
					{
						label: "View All Solutions",
						href: "/solutions",
						description: "Explore all solutions",
						icon: ArrowRight,
					},
				],
			},
		],
	},
	{
		label: "Resources",
		categories: [
			{
				title: "Learn",
				items: [
					{
						label: "Help Center",
						href: "/resources/help",
						description: "Get support and find answers",
						icon: HelpCircle,
					},
					{
						label: "Success Stories",
						href: "/resources/success-stories",
						description: "See how teams succeed with Melp",
						icon: BarChart3,
					},
					{
						label: "Blog",
						href: "/resources/blog",
						description: "Insights and industry trends",
						icon: Newspaper,
					},
					{
						label: "Webinars",
						href: "/resources/webinars",
						description: "Live and on-demand sessions",
						icon: Mic,
					},
					{
						label: "FAQs",
						href: "/resources/faqs",
						description: "Frequently asked questions",
						icon: HelpCircle,
					},
				],
			},
			{
				title: "Legal",
				items: [
					{
						label: "Privacy",
						href: "/legal/privacy",
						description: "How we protect your data",
						icon: Shield,
					},
					{
						label: "Terms",
						href: "/legal/terms-conditions",
						description: "Terms of service",
						icon: FileText,
					},
					{
						label: "Security",
						href: "/legal/security",
						description: "Enterprise-grade protection",
						icon: ShieldCheck,
					},
					{
						label: "Cookies",
						href: "/legal/cookies",
						description: "Cookie policy",
						icon: Cookie,
					},
				],
			},
		],
		featured: {
			title: "Contact Sales",
			description: "Talk to our team about enterprise solutions",
			cta: "Get in touch",
			href: "/contact",
			icon: Mail,
		},
	},
	{ label: "Pricing", href: "/pricing" },
];

// ============================================
// Animation Variants
// ============================================

const dropdownVariants = {
	hidden: { opacity: 0, y: 10, scale: 0.96 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring" as const,
			stiffness: 400,
			damping: 25,
			staggerChildren: 0.015,
		},
	},
	exit: {
		opacity: 0,
		y: 8,
		scale: 0.96,
		transition: { duration: 0.12, ease: "easeOut" as const },
	},
};

const categoryVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.02 } },
};

const itemVariants = {
	hidden: { opacity: 0, x: -6 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: "spring" as const, stiffness: 500, damping: 30 },
	},
};

const mobileMenuVariants = {
	hidden: { x: "100%" },
	visible: {
		x: 0,
		transition: { type: "spring" as const, stiffness: 300, damping: 30 },
	},
	exit: {
		x: "100%",
		transition: { type: "spring" as const, stiffness: 400, damping: 40 },
	},
};

// ============================================
// DropdownItem Component
// ============================================

interface DropdownMenuItemProps {
	readonly item: DropdownItem;
	readonly onClose: () => void;
	readonly isHighlighted?: boolean;
	readonly isDarkRoute?: boolean;
}

function DropdownMenuItem({
	item,
	onClose,
	isHighlighted,
	isDarkRoute = false,
}: DropdownMenuItemProps) {
	const Icon = item.icon;

	return (
		<motion.div variants={itemVariants}>
			<Link href={item.href} onClick={onClose}>
				<motion.div
					className={`group flex items-center gap-3 py-2.5 px-3 rounded-lg transition-colors cursor-pointer ${
						isHighlighted
							? isDarkRoute
								? "hover:bg-white/10"
								: "hover:bg-white/10"
							: isDarkRoute
							? "hover:bg-white/5"
							: "hover:bg-muted"
					}`}
					whileHover={{ x: 2 }}
					transition={{ type: "spring", stiffness: 400, damping: 25 }}
				>
					<div
						className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
							isHighlighted
								? isDarkRoute
									? "bg-purple-500/20"
									: "bg-white/10"
								: isDarkRoute
								? "bg-white/10"
								: "bg-muted"
						}`}
					>
						<Icon
							className={`w-4 h-4 ${
								isHighlighted
									? isDarkRoute
										? "text-purple-300"
										: "text-white/80"
									: isDarkRoute
									? "text-gray-200"
									: "text-muted-foreground"
							}`}
							strokeWidth={1.75}
						/>
					</div>
					<div className="flex-1 min-w-0">
						<div className="flex items-center gap-2">
							<span
								className={`text-sm font-medium ${
									isHighlighted
										? isDarkRoute
											? "text-white"
											: "text-white"
										: isDarkRoute
										? "text-gray-100"
										: "text-foreground"
								}`}
							>
								{item.label}
							</span>
							{item.badge && (
								<span
									className={`px-1.5 py-0.5 text-[10px] font-medium rounded ${
										isHighlighted
											? isDarkRoute
												? "bg-purple-500/20 text-purple-200"
												: "bg-white/20 text-white"
											: isDarkRoute
											? "bg-purple-500/10 text-purple-300"
											: "bg-primary/10 text-primary"
									}`}
								>
									{item.badge}
								</span>
							)}
						</div>
						{item.description && (
							<p
								className={`text-xs mt-0.5 ${
									isHighlighted
										? isDarkRoute
											? "text-gray-300"
											: "text-white/50"
										: isDarkRoute
										? "text-gray-400"
										: "text-muted-foreground"
								}`}
							>
								{item.description}
							</p>
						)}
					</div>
				</motion.div>
			</Link>
		</motion.div>
	);
}

// ============================================
// NavDropdown Component
// ============================================

interface NavDropdownProps {
	item: NavItemConfig;
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	scrolled: boolean;
	isDarkRoute?: boolean;
}

function NavDropdown({
	item,
	isOpen,
	onOpen,
	onClose,
	scrolled,
	isDarkRoute = false,
}: NavDropdownProps) {
	const [isHovered, setIsHovered] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	// Simple link without dropdown
	if (!item.categories) {
		return (
			<Link href={item.href || "/"}>
				<motion.div
					className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg flex items-center cursor-pointer group ${
						isDarkRoute
							? "text-gray-300 hover:text-white"
							: "text-muted-foreground hover:text-foreground"
					}`}
					whileHover={{ y: -1 }}
					whileTap={{ scale: 0.98 }}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<span className="relative">
						{item.label}
						<motion.span
							className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full ${
								isDarkRoute ? "bg-purple-500" : "bg-primary"
							}`}
							initial={{ width: 0 }}
							animate={{ width: isHovered ? "100%" : 0 }}
							transition={{ duration: 0.2 }}
						/>
					</span>
				</motion.div>
			</Link>
		);
	}

	const isSolutions = item.label === "Solutions";
	const hasHighlightedCategory = item.categories.some((cat) => cat.highlighted);

	// Dynamic top position based on scroll state
	const dropdownTop = scrolled ? "top-16" : "top-20";

	return (
		<div
			ref={containerRef}
			className="relative"
			onMouseEnter={onOpen}
			onMouseLeave={onClose}
		>
			<motion.button
				className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1.5 group cursor-pointer ${
					isDarkRoute
						? isOpen
							? "text-white"
							: "text-gray-300 hover:text-white"
						: isOpen
						? "text-foreground"
						: "text-muted-foreground hover:text-foreground"
				}`}
				whileHover={{ y: -1 }}
				whileTap={{ scale: 0.98 }}
			>
				<span className="relative">
					{item.label}
					<motion.span
						className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full ${
							isDarkRoute ? "bg-purple-500" : "bg-primary"
						}`}
						initial={{ width: 0 }}
						animate={{ width: isOpen ? "100%" : 0 }}
						transition={{ duration: 0.2 }}
					/>
				</span>
				<motion.div
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.2, ease: "easeInOut" }}
				>
					<ChevronDown
						className={`w-3.5 h-3.5 ${
							isDarkRoute ? "text-gray-400" : "text-muted-foreground/70"
						}`}
						strokeWidth={2}
					/>
				</motion.div>
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className={`fixed left-0 right-0 ${dropdownTop} w-full flex justify-center px-6 z-50`}
					>
						<motion.div
							className={`w-full max-w-6xl border shadow-xl overflow-hidden ${
								isDarkRoute
									? "bg-gray-950/95 border-white/20 shadow-purple-500/20 backdrop-blur-md"
									: "bg-background border-border/50 shadow-black/5 dark:shadow-black/20"
							}`}
						>
							<div className="flex">
								{/* Main content area */}
								<div className="flex-1 p-8">
									<div
										className={`grid gap-12 ${
											isSolutions
												? "grid-cols-2"
												: item.categories.filter((cat) => !cat.highlighted)
														.length > 2
												? "grid-cols-3"
												: "grid-cols-2"
										}`}
									>
										{item.categories
											.filter((cat) => !cat.highlighted)
											.map((category) => (
												<motion.div
													key={category.title}
													variants={categoryVariants}
												>
													<h3
														className={`text-xs font-semibold uppercase tracking-wider mb-4 pb-2 border-b ${
															isDarkRoute
																? "text-gray-400 border-white/10"
																: "text-muted-foreground border-border/50"
														}`}
													>
														{category.title}
													</h3>
													<div className="space-y-1">
														{category.items.map((dropdownItem) => (
															<DropdownMenuItem
																key={dropdownItem.label}
																item={dropdownItem}
																onClose={onClose}
																isDarkRoute={isDarkRoute}
															/>
														))}
													</div>
												</motion.div>
											))}
									</div>
								</div>

								{/* Highlighted category sidebar */}
								{hasHighlightedCategory && (
									<motion.div
										variants={categoryVariants}
										className={`w-80 border-l p-8 ${
											isDarkRoute
												? "bg-white/5 border-white/10"
												: "bg-muted/30 border-border/50"
										}`}
									>
										{item.categories
											.filter((cat) => cat.highlighted)
											.map((category) => (
												<div key={category.title}>
													<h3
														className={`text-xs font-semibold uppercase tracking-wider mb-4 pb-2 border-b ${
															isDarkRoute
																? "text-gray-400 border-white/10"
																: "text-muted-foreground border-border/50"
														}`}
													>
														{category.title}
													</h3>
													<div className="space-y-1">
														{category.items.map((dropdownItem) => (
															<DropdownMenuItem
																key={dropdownItem.label}
																item={dropdownItem}
																onClose={onClose}
																isDarkRoute={isDarkRoute}
															/>
														))}
													</div>
												</div>
											))}
									</motion.div>
								)}

								{/* Input Section + Featured Section */}
								{(item.inputSection || item.featured) &&
									!hasHighlightedCategory && (
										<motion.div
											variants={itemVariants}
											className={`w-72 border-l p-8 flex flex-col ${
												isDarkRoute
													? "bg-white/5 border-white/10"
													: "bg-muted/30 border-border/50"
											}`}
										>
											{item.inputSection && (
												<div
													className={`mb-6 pb-6 border-b ${
														isDarkRoute ? "border-white/10" : "border-border/50"
													}`}
												>
													<div className="flex items-center gap-2 mb-3">
														<item.inputSection.icon
															className={`w-4 h-4 ${
																isDarkRoute ? "text-purple-400" : "text-primary"
															}`}
															strokeWidth={1.75}
														/>
														<h4
															className={`text-sm font-semibold ${
																isDarkRoute ? "text-white" : "text-foreground"
															}`}
														>
															{item.inputSection.title}
														</h4>
													</div>
													<form
														onSubmit={(e) => {
															e.preventDefault();
															const form = e.target as HTMLFormElement;
															const input = form.elements.namedItem(
																"meetingLink"
															) as HTMLInputElement;
															if (input.value)
																globalThis.location.href = input.value;
														}}
														className="flex flex-col gap-2"
													>
														<input
															type="text"
															name="meetingLink"
															placeholder={item.inputSection.placeholder}
															className={`w-full px-3 py-2 text-sm rounded-lg border transition-all focus:outline-none focus:ring-2 ${
																isDarkRoute
																	? "border-white/10 bg-white/5 text-white placeholder-gray-500 focus:ring-purple-500/50 focus:border-purple-500"
																	: "border-border bg-background text-foreground focus:ring-primary/50 focus:border-primary"
															}`}
														/>
														<Button
															type="submit"
															size="sm"
															className={`w-full h-9 font-medium ${
																isDarkRoute
																	? "bg-purple-600 hover:bg-purple-700"
																	: "bg-primary hover:bg-primary/90"
															}`}
														>
															{item.inputSection.buttonText}
														</Button>
													</form>
												</div>
											)}
											{item.featured && (
												<div className="flex-1 flex flex-col">
													<div className="flex-1">
														<motion.div
															className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
																isDarkRoute
																	? "bg-purple-500/10"
																	: "bg-primary/10"
															}`}
															whileHover={{ scale: 1.05 }}
															transition={{ type: "spring", stiffness: 400 }}
														>
															<item.featured.icon
																className={`w-7 h-7 ${
																	isDarkRoute
																		? "text-purple-400"
																		: "text-primary"
																}`}
																strokeWidth={1.5}
															/>
														</motion.div>
														<h4
															className={`text-lg font-semibold mb-2 ${
																isDarkRoute ? "text-white" : "text-foreground"
															}`}
														>
															{item.featured.title}
														</h4>
														<p
															className={`text-sm leading-relaxed mb-6 ${
																isDarkRoute
																	? "text-gray-400"
																	: "text-muted-foreground"
															}`}
														>
															{item.featured.description}
														</p>
													</div>
													<Link href={item.featured.href} onClick={onClose}>
														<motion.button
															className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
																isDarkRoute
																	? "text-purple-400 hover:text-purple-300"
																	: "text-primary hover:text-primary/80"
															}`}
															whileHover={{ x: 4 }}
															transition={{ type: "spring", stiffness: 400 }}
														>
															{item.featured.cta}
															<ArrowRight className="w-4 h-4" />
														</motion.button>
													</Link>
												</div>
											)}
										</motion.div>
									)}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

// ============================================
// MobileMenu Component
// ============================================

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
	isDarkRoute?: boolean;
}

function MobileMenu({ isOpen, onClose, isDarkRoute = false }: MobileMenuProps) {
	const [expandedItem, setExpandedItem] = useState<string | null>(null);
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const toggleItem = (label: string) => {
		setExpandedItem(expandedItem === label ? null : label);
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
						onClick={onClose}
					/>

					{/* Menu */}
					<motion.div
						variants={mobileMenuVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className={`fixed top-0 right-0 h-full w-[85%] max-w-sm border-l z-50 lg:hidden overflow-y-auto ${
							isDarkRoute
								? "bg-gray-900 border-white/10"
								: "bg-background border-border"
						}`}
					>
						{/* Header */}
						<div
							className={`sticky top-0 flex items-center justify-between p-4 border-b ${
								isDarkRoute
									? "border-white/10 bg-gray-900"
									: "border-border/60 bg-background"
							}`}
						>
							<Image
								src={
									isDarkRoute || (mounted && resolvedTheme === "dark")
										? "/logo-dark.svg"
										: "/logo.svg"
								}
								alt="Melp"
								width={90}
								height={28}
							/>
							<motion.button
								onClick={onClose}
								className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
									isDarkRoute
										? "bg-white/10 hover:bg-white/20 text-white"
										: "bg-muted/80 hover:bg-muted"
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<X className="w-5 h-5" strokeWidth={1.75} />
							</motion.button>
						</div>

						{/* Navigation */}
						<div className="p-4 space-y-1">
							{navItems.map((item) => (
								<div key={item.label}>
									{item.categories ? (
										<>
											<motion.button
												className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
													isDarkRoute
														? "hover:bg-white/10 text-white"
														: "hover:bg-muted/80"
												}`}
												onClick={() => toggleItem(item.label)}
												whileTap={{ scale: 0.98 }}
											>
												<span className="font-medium text-[15px]">
													{item.label}
												</span>
												<motion.div
													animate={{
														rotate: expandedItem === item.label ? 180 : 0,
													}}
													transition={{ duration: 0.2 }}
												>
													<ChevronDown
														className={`w-4 h-4 ${
															isDarkRoute
																? "text-gray-400"
																: "text-muted-foreground"
														}`}
														strokeWidth={2}
													/>
												</motion.div>
											</motion.button>

											<AnimatePresence>
												{expandedItem === item.label && (
													<motion.div
														initial={{ height: 0, opacity: 0 }}
														animate={{ height: "auto", opacity: 1 }}
														exit={{ height: 0, opacity: 0 }}
														transition={{ duration: 0.25, ease: "easeInOut" }}
														className="overflow-hidden"
													>
														<div className="pl-2 py-2 space-y-4">
															{item.categories.map((category) => (
																<div key={category.title}>
																	<h4
																		className={`text-[10px] font-semibold uppercase tracking-widest px-3 mb-2 ${
																			isDarkRoute
																				? "text-gray-500"
																				: "text-muted-foreground/60"
																		}`}
																	>
																		{category.title}
																	</h4>
																	<div className="space-y-0.5">
																		{category.items.map((subItem) => {
																			const Icon = subItem.icon;
																			return (
																				<Link
																					key={subItem.label}
																					href={subItem.href}
																					onClick={onClose}
																				>
																					<motion.div
																						className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${
																							isDarkRoute
																								? "hover:bg-white/10"
																								: "hover:bg-muted/80"
																						}`}
																						whileTap={{ scale: 0.98 }}
																						whileHover={{ x: 3 }}
																					>
																						<div
																							className={`w-8 h-8 rounded-lg flex items-center justify-center ${
																								isDarkRoute
																									? "bg-purple-500/20"
																									: "bg-primary/10"
																							}`}
																						>
																							<Icon
																								className={`w-4 h-4 ${
																									isDarkRoute
																										? "text-purple-400"
																										: "text-primary"
																								}`}
																								strokeWidth={1.75}
																							/>
																						</div>
																						<div className="flex items-center gap-2">
																							<span
																								className={`text-[13px] font-medium ${
																									isDarkRoute
																										? "text-white"
																										: ""
																								}`}
																							>
																								{subItem.label}
																							</span>
																							{subItem.badge && (
																								<span
																									className={`px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide rounded-full ${
																										isDarkRoute
																											? "bg-purple-500/20 text-purple-400"
																											: "bg-primary/15 text-primary"
																									}`}
																								>
																									{subItem.badge}
																								</span>
																							)}
																						</div>
																					</motion.div>
																				</Link>
																			);
																		})}
																	</div>
																</div>
															))}
														</div>
													</motion.div>
												)}
											</AnimatePresence>
										</>
									) : (
										<Link href={item.href || "/"} onClick={onClose}>
											<motion.div
												className={`p-3 rounded-xl transition-colors ${
													isDarkRoute
														? "hover:bg-white/10 text-white"
														: "hover:bg-muted/80"
												}`}
												whileTap={{ scale: 0.98 }}
											>
												<span className="font-medium text-[15px]">
													{item.label}
												</span>
											</motion.div>
										</Link>
									)}
								</div>
							))}
						</div>

						{/* CTA Buttons */}
						<div
							className={`p-4 mt-4 border-t space-y-3 ${
								isDarkRoute ? "border-white/10" : "border-border/60"
							}`}
						>
							<Link href="/login" onClick={onClose} className="block">
								<Button
									variant="outline"
									className={`w-full h-11 rounded-xl text-[14px] font-medium ${
										isDarkRoute
											? "border-white/20 text-white hover:bg-white/10"
											: ""
									}`}
								>
									Sign in
								</Button>
							</Link>
							<Link href="/signup" onClick={onClose} className="block">
								<Button
									className={`w-full h-11 rounded-xl text-[14px] font-medium shadow-lg ${
										isDarkRoute
											? "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 shadow-purple-500/25"
											: "bg-primary hover:bg-primary/90 shadow-primary/25"
									}`}
								>
									Get Started Free
								</Button>
							</Link>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}

// ============================================
// Header Component
// ============================================

export default function Header() {
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const navRef = useRef<HTMLElement>(null);
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const pathname = usePathname();

	// Check if current route should use dark theme
	const isDarkRoute = DARK_THEME_ROUTES.some((route) =>
		pathname?.startsWith(route)
	);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Scroll detection with hysteresis
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = globalThis.scrollY;
			setScrolled((prevScrolled) => {
				if (prevScrolled) return currentScrollY > 10;
				return currentScrollY > 50;
			});
		};

		globalThis.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => globalThis.removeEventListener("scroll", handleScroll);
	}, []);

	// Close dropdown when mouse leaves the entire nav area
	const handleNavMouseLeave = useCallback(() => {
		setActiveDropdown(null);
	}, []);

	const handleDropdownOpen = useCallback((label: string) => {
		setActiveDropdown(label);
	}, []);

	const handleDropdownClose = useCallback(() => {
		setActiveDropdown(null);
	}, []);

	return (
		<Fragment>
			<motion.header
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
				className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out ${
					isDarkRoute
						? scrolled
							? "border-b border-white/10 bg-black/80 backdrop-blur-xl shadow-lg shadow-black/20"
							: "border-b border-transparent bg-transparent"
						: scrolled
						? "border-b border-border/40 bg-background/80 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5 dark:shadow-black/20"
						: "border-b border-transparent bg-transparent"
				}`}
			>
				<div
					className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-out ${
						scrolled ? "h-16" : "h-20"
					}`}
				>
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center gap-2.5 group"
						onClick={handleDropdownClose}
					>
						<motion.div
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
							className="flex items-center gap-2.5 relative"
						>
							<motion.div className="absolute inset-0 bg-primary/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<Image
								src={
									isDarkRoute || (mounted && resolvedTheme === "dark")
										? "/logo-dark.svg"
										: "/logo.svg"
								}
								alt="Melp"
								width={100}
								height={32}
								className={`h-auto relative transition-all duration-300 ease-out ${
									scrolled ? "w-32" : "w-40"
								}`}
								priority
							/>
						</motion.div>
					</Link>

					{/* Desktop Navigation */}
					<nav
						ref={navRef}
						className={`hidden lg:flex items-center gap-0.5 ${
							isDarkRoute ? "[&_*]:text-gray-300 [&_*]:hover:text-white" : ""
						}`}
						onMouseLeave={handleNavMouseLeave}
					>
						{navItems.map((item) => (
							<NavDropdown
								key={item.label}
								item={item}
								isOpen={activeDropdown === item.label}
								onOpen={() => handleDropdownOpen(item.label)}
								onClose={handleDropdownClose}
								scrolled={scrolled}
								isDarkRoute={isDarkRoute}
							/>
						))}
					</nav>

					{/* Right Section */}
					<div className="flex items-center gap-3">
						{!isDarkRoute && <ThemeToggle />}

						{/* Desktop CTA */}
						<div className="hidden lg:flex items-center gap-4">
							<Link href="/login" onClick={handleDropdownClose}>
								<motion.span
									className={`text-sm font-medium transition-colors cursor-pointer ${
										isDarkRoute
											? "text-gray-300 hover:text-white"
											: "text-muted-foreground hover:text-foreground"
									}`}
									whileHover={{ y: -1 }}
								>
									Sign in
								</motion.span>
							</Link>
							<Link href="/signup" onClick={handleDropdownClose}>
								<MagneticButton>
									<Button
										size="sm"
										className="px-5 h-9 shadow-lg transition-all duration-300 font-medium group btn-brand-gradient hover:brightness-105"
									>
										<span className="flex items-center gap-1.5">
											Start for free
											<motion.svg
												width="14"
												height="14"
												viewBox="0 0 16 16"
												fill="none"
												className="group-hover:translate-x-0.5 transition-transform"
											>
												<path
													d="M3 8H13M13 8L8 3M13 8L8 13"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</motion.svg>
										</span>
									</Button>
								</MagneticButton>
							</Link>
						</div>

						{/* Mobile Menu Button */}
						<motion.button
							className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
								isDarkRoute
									? "bg-white/10 hover:bg-white/20 text-white"
									: "bg-muted/60 hover:bg-muted"
							}`}
							onClick={() => setMobileMenuOpen(true)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Menu className="w-5 h-5" strokeWidth={1.75} />
						</motion.button>
					</div>
				</div>
			</motion.header>

			{/* Mobile Menu - Rendered outside header to avoid stacking context issues */}
			<MobileMenu
				isOpen={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
				isDarkRoute={isDarkRoute}
			/>
		</Fragment>
	);
}
