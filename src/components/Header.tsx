"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/aceternity";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
	MessageCircle,
	Video,
	Cloud,
	Sparkles,
	Puzzle,
	Building2,
	TrendingUp,
	Landmark,
	GraduationCap,
	Heart,
	Globe,
	HelpCircle,
	FileText,
	Tag,
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
	Bot,
	FolderKanban,
	Search,
	Mic,
	Download,
	Rocket,
	type LucideIcon,
} from "lucide-react";

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
				title: "Features",
				items: [
					{
						label: "Messaging & Channels",
						href: "/platform/messaging",
						description: "Real-time messaging with organized channels",
						icon: MessageCircle,
					},
					{
						label: "Meetings & Calls",
						href: "/platform/meetings",
						description: "HD video conferencing and voice calls",
						icon: Video,
					},
					{
						label: "File Sharing",
						href: "/platform/files",
						description: "Share and collaborate on files seamlessly",
						icon: Cloud,
					},
					{
						label: "AI Assistant",
						href: "/platform/ai",
						description: "Smart workflows powered by AI",
						icon: Sparkles,
						badge: "New",
					},
				],
			},
			{
				title: "Capabilities",
				items: [
					{
						label: "Enterprise Search",
						href: "/platform/search",
						description: "Find answers instantly",
						icon: Search,
					},
					{
						label: "Automation",
						href: "/platform/automation",
						description: "Handles manual tasks automatically",
						icon: Bot,
					},
					{
						label: "Projects",
						href: "/platform/projects",
						description: "Manage any project with ease",
						icon: FolderKanban,
					},
					{
						label: "Integrations",
						href: "/platform/integrations",
						description: "Connect with 500+ apps",
						icon: Puzzle,
					},
				],
			},
		],
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
				title: "By Industry",
				items: [
					{
						label: "Technology",
						href: "/solutions/technology",
						description: "Built for tech teams",
						icon: Zap,
					},
					{
						label: "Healthcare",
						href: "/solutions/healthcare",
						description: "HIPAA-compliant communication",
						icon: Heart,
					},
					{
						label: "Education",
						href: "/solutions/education",
						description: "Connect classrooms and campuses",
						icon: GraduationCap,
					},
					{
						label: "Government",
						href: "/solutions/government",
						description: "Secure solutions for public sector",
						icon: Landmark,
					},
				],
			},
			{
				title: "By Company Size",
				items: [
					{
						label: "Enterprise",
						href: "/solutions/enterprise",
						description: "Scale across your organization",
						icon: Building2,
					},
					{
						label: "Small & Medium Business",
						href: "/solutions/smb",
						description: "Powerful tools for growing teams",
						icon: TrendingUp,
					},
					{
						label: "Startups",
						href: "/solutions/startups",
						description: "Move fast and stay connected",
						icon: Rocket,
					},
				],
			},
			{
				title: "By Use Case",
				highlighted: true,
				items: [
					{
						label: "Remote Teams",
						href: "/solutions/remote",
						description: "Unite distributed workforces",
						icon: Globe,
					},
					{
						label: "Collaboration",
						href: "/solutions/collaboration",
						description: "Work better together",
						icon: Users,
					},
					{
						label: "Project Management",
						href: "/solutions/projects",
						description: "Deliver projects on time",
						icon: FolderKanban,
					},
					{
						label: "Sales & Business",
						href: "/solutions/sales",
						description: "Close deals faster",
						icon: Briefcase,
					},
				],
			},
		],
	},
	{
		label: "Pricing",
		href: "/pricing",
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
						label: "Documentation",
						href: "/resources/docs",
						description: "Technical guides and API reference",
						icon: FileText,
					},
					{
						label: "Blog",
						href: "/resources/blog",
						description: "Insights and industry trends",
						icon: Newspaper,
					},
				],
			},
			{
				title: "Discover",
				items: [
					{
						label: "Case Studies",
						href: "/resources/case-studies",
						description: "Success stories from customers",
						icon: BarChart3,
					},
					{
						label: "Release Notes",
						href: "/resources/releases",
						description: "Latest updates and features",
						icon: Tag,
						badge: "v2.5",
					},
					{
						label: "Webinars",
						href: "/resources/webinars",
						description: "Live and on-demand sessions",
						icon: Mic,
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
];

// ============================================
// Animation Variants
// ============================================

const dropdownVariants = {
	hidden: {
		opacity: 0,
		y: 10,
		scale: 0.96,
	},
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
		transition: {
			duration: 0.12,
			ease: "easeOut" as const,
		},
	},
};

const categoryVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.02,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -6 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring" as const,
			stiffness: 500,
			damping: 30,
		},
	},
};

const mobileMenuVariants = {
	hidden: { x: "100%" },
	visible: {
		x: 0,
		transition: {
			type: "spring" as const,
			stiffness: 300,
			damping: 30,
		},
	},
	exit: {
		x: "100%",
		transition: {
			type: "spring" as const,
			stiffness: 400,
			damping: 40,
		},
	},
};

// ============================================
// DropdownItem Component
// ============================================

interface DropdownMenuItemProps {
	item: DropdownItem;
	onClose: () => void;
	isHighlighted?: boolean;
}

function DropdownMenuItem({
	item,
	onClose,
	isHighlighted,
}: DropdownMenuItemProps) {
	const Icon = item.icon;

	return (
		<motion.div variants={itemVariants}>
			<Link href={item.href} onClick={onClose}>
				<motion.div
					className={`group flex items-center gap-3 py-2.5 px-3 rounded-lg transition-colors cursor-pointer ${
						isHighlighted ? "hover:bg-white/10" : "hover:bg-muted"
					}`}
					whileHover={{ x: 2 }}
					transition={{ type: "spring", stiffness: 400, damping: 25 }}
				>
					<div
						className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
							isHighlighted ? "bg-white/10" : "bg-muted"
						}`}
					>
						<Icon
							className={`w-4 h-4 ${
								isHighlighted ? "text-white/80" : "text-muted-foreground"
							}`}
							strokeWidth={1.75}
						/>
					</div>
					<div className="flex-1 min-w-0">
						<div className="flex items-center gap-2">
							<span
								className={`text-sm font-medium ${
									isHighlighted ? "text-white" : "text-foreground"
								}`}
							>
								{item.label}
							</span>
							{item.badge && (
								<span
									className={`px-1.5 py-0.5 text-[10px] font-medium rounded ${
										isHighlighted
											? "bg-white/20 text-white"
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
									isHighlighted ? "text-white/50" : "text-muted-foreground"
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
}

function NavDropdown({ item, isOpen, onOpen, onClose }: NavDropdownProps) {
	const handleMouseEnter = useCallback(() => {
		onOpen();
	}, [onOpen]);

	const handleMouseLeave = useCallback(() => {
		onClose();
	}, [onClose]);

	// Simple link without dropdown
	if (!item.categories) {
		return (
			<Link href={item.href || "/"}>
				<motion.span
					className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg cursor-pointer inline-block"
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.98 }}
				>
					{item.label}
				</motion.span>
			</Link>
		);
	}

	// Check if it's the Solutions menu (3 columns with highlighted section)
	const isSolutions = item.label === "Solutions";
	const hasHighlightedCategory = item.categories.some((cat) => cat.highlighted);

	return (
		<div
			className="relative"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<motion.button
				className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1.5 group cursor-pointer ${
					isOpen
						? "text-foreground"
						: "text-muted-foreground hover:text-foreground"
				}`}
				whileHover={{ y: -2 }}
				whileTap={{ scale: 0.98 }}
			>
				{item.label}
				<motion.div
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.2, ease: "easeInOut" }}
				>
					<ChevronDown
						className="w-3.5 h-3.5 text-muted-foreground/70"
						strokeWidth={2}
					/>
				</motion.div>
			</motion.button>

			{/* Invisible bridge to prevent hover gap */}
			{isOpen && <div className="absolute left-0 right-0 h-4 top-full" />}

			<AnimatePresence>
				{isOpen && (
					<motion.div
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="fixed left-0 right-0 top-16 w-full flex justify-center px-6"
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<motion.div
							className="w-full max-w-6xl bg-background border border-border/50 rounded-xl shadow-xl shadow-black/5 dark:shadow-black/20 overflow-hidden"
							layoutId={`dropdown-${item.label}`}
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
													<h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 pb-2 border-b border-border/50">
														{category.title}
													</h3>
													<div className="space-y-1">
														{category.items.map((dropdownItem) => (
															<DropdownMenuItem
																key={dropdownItem.label}
																item={dropdownItem}
																onClose={onClose}
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
										className="w-80 bg-muted/30 border-l border-border/50 p-8"
									>
										{item.categories
											.filter((cat) => cat.highlighted)
											.map((category) => (
												<div key={category.title}>
													<h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 pb-2 border-b border-border/50">
														{category.title}
													</h3>
													<div className="space-y-1">
														{category.items.map((dropdownItem) => (
															<DropdownMenuItem
																key={dropdownItem.label}
																item={dropdownItem}
																onClose={onClose}
															/>
														))}
													</div>
												</div>
											))}
									</motion.div>
								)}

								{/* Featured Section */}
								{item.featured && !hasHighlightedCategory && (
									<motion.div
										variants={itemVariants}
										className="w-72 bg-muted/30 border-l border-border/50 p-8 flex flex-col"
									>
										<div className="flex-1">
											<motion.div
												className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5"
												whileHover={{ scale: 1.05 }}
												transition={{ type: "spring", stiffness: 400 }}
											>
												<item.featured.icon
													className="w-7 h-7 text-primary"
													strokeWidth={1.5}
												/>
											</motion.div>
											<h4 className="text-lg font-semibold text-foreground mb-2">
												{item.featured.title}
											</h4>
											<p className="text-sm text-muted-foreground leading-relaxed mb-6">
												{item.featured.description}
											</p>
										</div>
										<Link href={item.featured.href} onClick={onClose}>
											<motion.button
												className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
												whileHover={{ x: 4 }}
												transition={{ type: "spring", stiffness: 400 }}
											>
												{item.featured.cta}
												<ArrowRight className="w-4 h-4" />
											</motion.button>
										</Link>
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
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
	const [expandedItem, setExpandedItem] = useState<string | null>(null);
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

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
						className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
						onClick={onClose}
					/>

					{/* Menu */}
					<motion.div
						variants={mobileMenuVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-background border-l border-border z-50 lg:hidden overflow-y-auto"
					>
						{/* Header */}
						<div className="flex items-center justify-between p-4 border-b border-border/60">
							<Image
								src={
									mounted && resolvedTheme === "dark"
										? "/logo-dark.svg"
										: "/logo.svg"
								}
								alt="Melp"
								width={90}
								height={28}
							/>
							<motion.button
								onClick={onClose}
								className="w-10 h-10 rounded-full bg-muted/80 flex items-center justify-center hover:bg-muted transition-colors"
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
												className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-muted/80 transition-colors"
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
														className="w-4 h-4 text-muted-foreground"
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
																	<h4 className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/60 px-3 mb-2">
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
																						className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted/80 transition-colors"
																						whileTap={{ scale: 0.98 }}
																						whileHover={{ x: 3 }}
																					>
																						<div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
																							<Icon
																								className="w-4 h-4 text-primary"
																								strokeWidth={1.75}
																							/>
																						</div>
																						<div className="flex items-center gap-2">
																							<span className="text-[13px] font-medium">
																								{subItem.label}
																							</span>
																							{subItem.badge && (
																								<span className="px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide bg-primary/15 text-primary rounded-full">
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
												className="p-3 rounded-xl hover:bg-muted/80 transition-colors"
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
						<div className="p-4 mt-4 border-t border-border/60 space-y-3">
							<Link href="/login" onClick={onClose} className="block">
								<Button
									variant="outline"
									className="w-full h-11 rounded-xl text-[14px] font-medium"
								>
									Sign in
								</Button>
							</Link>
							<Link href="/signup" onClick={onClose} className="block">
								<Button className="w-full h-11 rounded-xl bg-primary hover:bg-primary/90 text-[14px] font-medium shadow-lg shadow-primary/25">
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
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleOpenDropdown = useCallback((label: string) => {
		// Clear any pending close timeout
		if (closeTimeoutRef.current) {
			clearTimeout(closeTimeoutRef.current);
			closeTimeoutRef.current = null;
		}
		setOpenDropdown(label);
	}, []);

	const handleCloseDropdown = useCallback(() => {
		// Clear any existing timeout first
		if (closeTimeoutRef.current) {
			clearTimeout(closeTimeoutRef.current);
		}
		// Delay close to allow moving between nav items
		closeTimeoutRef.current = setTimeout(() => {
			setOpenDropdown(null);
		}, 100);
	}, []);

	return (
		<motion.header
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
			className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl backdrop-saturate-150"
		>
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2.5">
					<motion.div
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="flex items-center gap-2.5"
					>
						<Image
							src={
								mounted && resolvedTheme === "dark"
									? "/logo-dark.svg"
									: "/logo.svg"
							}
							alt="Melp"
							width={100}
							height={32}
							className="w-40 h-auto"
							priority
						/>
					</motion.div>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex items-center gap-0.5">
					{navItems.map((item) => (
						<NavDropdown
							key={item.label}
							item={item}
							isOpen={openDropdown === item.label}
							onOpen={() => handleOpenDropdown(item.label)}
							onClose={handleCloseDropdown}
						/>
					))}
				</nav>

				{/* Right Section */}
				<div className="flex items-center gap-3">
					<ThemeToggle />

					{/* Desktop CTA */}
					<div className="hidden lg:flex items-center gap-4">
						<Link href="/login">
							<motion.span
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
								whileHover={{ y: -1 }}
							>
								Sign in
							</motion.span>
						</Link>
						<Link href="/signup">
							<MagneticButton>
								<Button
									size="sm"
									className="px-5 h-9 bg-primary hover:bg-primary/80 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 font-medium group"
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
						className="lg:hidden w-10 h-10 rounded-full bg-muted/60 flex items-center justify-center hover:bg-muted transition-colors"
						onClick={() => setMobileMenuOpen(true)}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Menu className="w-5 h-5" strokeWidth={1.75} />
					</motion.button>
				</div>
			</div>

			{/* Mobile Menu */}
			<MobileMenu
				isOpen={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
			/>
		</motion.header>
	);
}
