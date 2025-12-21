"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { SidebarCategory } from "./sidebarData";

interface HelpSidebarProps {
	readonly categories: SidebarCategory[];
	readonly defaultExpanded?: string | null;
	readonly className?: string;
}

export function HelpSidebar({
	categories,
	defaultExpanded = null,
	className = "",
}: HelpSidebarProps) {
	const [expandedCategory, setExpandedCategory] = useState<string | null>(
		defaultExpanded
	);
	const [activeItem, setActiveItem] = useState<string | null>(null);
	const pathname = usePathname();

	const toggleCategory = (title: string) => {
		setExpandedCategory(expandedCategory === title ? null : title);
	};

	// Check if a link is active based on pathname and hash
	const isLinkActive = (href: string | undefined) => {
		if (!href) return false;
		const [linkPath, linkHash] = href.split("#");
		const currentHash = activeItem;

		// Check if the path matches
		if (linkPath !== pathname) return false;

		// If there's a hash, check if it matches
		if (linkHash && currentHash) {
			return linkHash === currentHash;
		}

		return !linkHash && !currentHash;
	};

	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const id = decodeURIComponent(hash.replace("#", ""));
			setActiveItem(id);
			const el = document.getElementById(id);
			if (el) {
				requestAnimationFrame(() => {
					el.scrollIntoView({ behavior: "smooth", block: "start" });
				});
			}
		}

		// Auto-expand the category that contains the active item
		if (hash) {
			const hashId = decodeURIComponent(hash.replace("#", ""));
			for (const category of categories) {
				const hasActiveItem = category.items.some((item) =>
					item.href?.includes(`#${hashId}`)
				);
				if (hasActiveItem) {
					setExpandedCategory(category.title);
					break;
				}
			}
		}
	}, [pathname, categories]);

	// Listen for hash changes
	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash;
			if (hash) {
				const id = decodeURIComponent(hash.replace("#", ""));
				setActiveItem(id);
			} else {
				setActiveItem(null);
			}
		};

		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	return (
		<aside
			className={`hidden w-64 shrink-0 border-r bg-background lg:block ${className}`}
		>
			<div className="sticky top-16 h-screen overflow-y-auto scrollbar-thin px-4 py-8">
				<h2 className="mb-4 text-sm font-semibold text-foreground">
					Reference Docs
				</h2>
				<nav className="space-y-0.5">
					{categories.map((category) => (
						<div key={category.title}>
							<button
								onClick={() => toggleCategory(category.title)}
								className="group flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
							>
								<span>{category.title}</span>
								{category.items.length > 0 && (
									<ChevronDown
										className={`h-4 w-4 text-muted-foreground/60 transition-transform duration-200 ${
											expandedCategory === category.title ? "rotate-180" : ""
										}`}
									/>
								)}
								{category.items.length === 0 && (
									<ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground/60" />
								)}
							</button>
							<AnimatePresence>
								{expandedCategory === category.title &&
									category.items.length > 0 && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.2 }}
											className="overflow-hidden"
										>
											<div className="ml-4 py-1 relative border-l-2 border-neutral-200">
												{category.items.map((item) => {
													const isActive = isLinkActive(item.href);
													return (
														<Link
															key={item.label}
															href={item.href ?? "#"}
															scroll={false}
															onClick={(e) => {
																if (item.href) {
																	const hash = item.href.split("#")[1];
																	if (hash) {
																		setActiveItem(hash);
																		// Smooth scroll to element
																		const el = document.getElementById(hash);
																		if (el) {
																			e.preventDefault();
																			el.scrollIntoView({
																				behavior: "smooth",
																				block: "start",
																			});
																		}
																	}
																}
															}}
															className={`relative block w-full py-1.5 pl-3 text-left text-sm transition-colors duration-200 ${
																item.label === "See all"
																	? "text-primary hover:text-primary/80"
																	: isActive
																	? "text-neutral-900 font-medium"
																	: "text-neutral-500 hover:text-neutral-900"
															}`}
														>
															{isActive && item.label !== "See all" && (
																<motion.span
																	layoutId={`sidebar-indicator-${category.title}`}
																	className="absolute -left-[2px] top-0 bottom-0 w-0.5 bg-neutral-900"
																	transition={{
																		type: "spring",
																		stiffness: 350,
																		damping: 30,
																	}}
																/>
															)}
															{item.label}
														</Link>
													);
												})}
											</div>
										</motion.div>
									)}
							</AnimatePresence>
						</div>
					))}
				</nav>
			</div>
		</aside>
	);
}
