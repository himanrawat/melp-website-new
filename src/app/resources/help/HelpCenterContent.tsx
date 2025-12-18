"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
	ArrowRight,
	CalendarCheck,
	Compass,
	FolderOpen,
	Headphones,
	Layers,
	Mail,
	MessageSquare,
	Phone,
	Search,
	Sparkles,
	Users,
	Video,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HelpSidebar } from "./HelpSidebar";
import { sidebarCategories } from "./sidebarData";

const searchSuggestions = [
	"Billing",
	"Notifications",
	"Integrations",
	"Settings",
];

// Popular topics grid
const popularTopics = [
	{
		title: "Get Started with MelpApp",
		description:
			"MelpApp is an all-in-one communication and AI digital workplace.",
		icon: Compass,
		href: "/resources/help/get-started",
	},
	{
		title: "Personalize MelpApp",
		description: "Make it easier for people to recognize you in MelpApp.",
		icon: Sparkles,
		href: "/resources/help/personalize-melpapp",
	},
	{
		title: "Calls",
		description: "With MelpApp, you can make voice or video calls.",
		icon: Phone,
	},
	{
		title: "Teams and Topics",
		description:
			"With MelpApp - keep projects, people, and conversations organized.",
		icon: Layers,
	},
	{
		title: "Groups",
		description: "Groups can be used for quick discussions or conferences.",
		icon: Users,
	},
	{
		title: "Meetings",
		description:
			"With MelpApp, schedule, join, and manage meetings without the hassle.",
		icon: Video,
	},
	{
		title: "Chats",
		description:
			"Keep all your personal, team, and group chats organized under one roof.",
		icon: MessageSquare,
	},
	{
		title: "Book an Appointment",
		description: "MelpApp makes scheduling simple, fast, and effortless.",
		icon: CalendarCheck,
	},
	{
		title: "Melp Drive",
		description:
			"With MelpDrive keep your work organized, accessible, and collaborative.",
		icon: FolderOpen,
	},
];

export default function HelpCenterContent() {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchFocused, setSearchFocused] = useState(false);
	return (
		<div className="min-h-screen bg-background">
			<div className="flex">
				{/* Sidebar - Notion style */}
				<HelpSidebar
					categories={sidebarCategories}
					defaultExpanded="Getting started"
				/>

				{/* Main Content */}
				<main className="flex-1">
					{/* Hero Section */}
					<section className="border-b px-4 py-16 sm:px-8 lg:px-16 lg:py-20">
						<div className="mx-auto max-w-3xl">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, ease: "easeOut" }}
								className="text-center"
							>
								<h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
									Hi, how can we help you?
								</h1>
							</motion.div>

							{/* Search Box */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
								className="relative mx-auto mt-8 max-w-xl"
							>
								<div
									className={`relative rounded-full border bg-muted/50 transition-all duration-200 ${
										searchFocused
											? "border-foreground/20 bg-background shadow-sm"
											: "border-border"
									}`}
								>
									<Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
									<Input
										placeholder="Search for anything..."
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										onFocus={() => setSearchFocused(true)}
										onBlur={() => setSearchFocused(false)}
										className="h-12 w-full rounded-full border-0 bg-transparent pl-12 pr-4 text-base shadow-none focus-visible:ring-0"
									/>
								</div>

								{/* Search suggestions */}
								<div className="mt-4 flex flex-wrap items-center justify-center gap-2">
									{searchSuggestions.map((suggestion) => (
										<button
											key={suggestion}
											onClick={() => setSearchQuery(suggestion)}
											className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-foreground transition-colors hover:bg-muted"
										>
											{suggestion}
										</button>
									))}
								</div>
							</motion.div>
						</div>
					</section>

					{/* Popular Topics - Notion style grid */}
					<section className="px-4 py-12 sm:px-8 lg:px-16 lg:py-16">
						<div className="mx-auto max-w-4xl">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<h2 className="text-xl font-semibold text-foreground sm:text-2xl">
									Popular topics
								</h2>
							</motion.div>

							<div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
								{popularTopics.map((topic, index) => {
									const Icon = topic.icon;
									return (
										<motion.div
											key={topic.title}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												duration: 0.4,
												delay: 0.15 + index * 0.05,
											}}
										>
											<Link href={topic.href ?? "#"} className="group block">
												{/* Icon */}
												<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background text-foreground">
													<Icon className="h-6 w-6" strokeWidth={1.5} />
												</div>

												{/* Title with arrow */}
												<h3 className="flex items-center gap-1 font-medium text-foreground">
													{topic.title}
													<ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
												</h3>

												{/* Description */}
												<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
													{topic.description}
												</p>
											</Link>
										</motion.div>
									);
								})}
							</div>
						</div>
					</section>

					{/* Divider */}
					<div className="mx-4 border-t sm:mx-8 lg:mx-16" />

					{/* Contact Section */}
					<section className="px-4 py-12 sm:px-8 lg:px-16 lg:py-16">
						<div className="mx-auto max-w-4xl">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-muted/50 p-8 sm:flex-row sm:items-center"
							>
								<div>
									<h2 className="text-xl font-semibold text-foreground">
										Still have questions?
									</h2>
									<p className="mt-1 text-muted-foreground">
										Our support team is here to help.
									</p>
								</div>
								<div className="flex flex-wrap gap-3">
									<Button className="gap-2">
										<Mail className="h-4 w-4" />
										Email us
									</Button>
									<Button variant="outline" className="gap-2">
										<Headphones className="h-4 w-4" />
										Contact support
									</Button>
								</div>
							</motion.div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
