"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { SidebarCategory } from "./sidebarData";

interface HelpSidebarProps {
	categories: SidebarCategory[];
	defaultExpanded?: string | null;
	className?: string;
}

export function HelpSidebar({
	categories,
	defaultExpanded = null,
	className = "",
}: HelpSidebarProps) {
	const [expandedCategory, setExpandedCategory] = useState<string | null>(
		defaultExpanded
	);

	const toggleCategory = (title: string) => {
		setExpandedCategory(expandedCategory === title ? null : title);
	};

	return (
		<aside className={`hidden w-64 shrink-0 border-r bg-background lg:block ${className}`}>
			<div className="sticky top-0 h-screen overflow-y-auto px-4 py-8">
				<h2 className="mb-4 text-sm font-semibold text-foreground">
					Reference Docs
				</h2>
				<nav className="space-y-0.5">
					{categories.map((category) => (
						<div key={category.title}>
							<button
								onClick={() => toggleCategory(category.title)}
								className="group flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
											<div className="ml-2 border-l border-border py-1 pl-3">
												{category.items.map((item) => (
													<Link
														key={item.label}
														href={item.href ?? "#"}
														className={`block w-full py-1 text-left text-sm transition-colors hover:text-foreground ${
															item.label === "See all"
																? "text-primary hover:text-primary/80"
																: "text-muted-foreground"
														}`}
													>
														{item.label}
													</Link>
												))}
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
