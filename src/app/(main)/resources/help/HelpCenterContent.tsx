"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { Card } from "@/components/ui/card";
import { HelpSidebar } from "./HelpSidebar";
import { sidebarCategories } from "./sidebarData";

const searchSuggestions = [
	{
		label: "Create Account",
		href: "/resources/help/get-started#create-account",
	},
	{
		label: "Manage Your Account",
		href: "/resources/help/personalize-melpapp#ManageYourAccount",
	},
	{
		label: "Voice & Video Calling",
		href: "/resources/help/calls#callSomeoneInNetwork",
	},
	{
		label: "Create a Group",
		href: "/resources/help/create-group#howToCreateGroup",
	},
	{
		label: "Schedule a Meeting",
		href: "/resources/help/schedule-meeting#howToScheduleMeeting",
	},
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
		href: "/resources/help/calls",
	},
	{
		title: "Teams and Topics",
		description:
			"With MelpApp - keep projects, people, and conversations organized.",
		icon: Layers,
		href: "/resources/help/teams-topic",
	},
	{
		title: "Groups",
		description: "Groups can be used for quick discussions or conferences.",
		icon: Users,
		href: "/resources/help/create-group",
	},
	{
		title: "Meetings",
		description:
			"With MelpApp, schedule, join, and manage meetings without the hassle.",
		icon: Video,
		href: "/resources/help/schedule-meeting",
	},
	{
		title: "Chats",
		description:
			"Keep all your personal, team, and group chats organized under one roof.",
		icon: MessageSquare,
		href: "/resources/help/chats",
	},
	{
		title: "Book an Appointment",
		description: "MelpApp makes scheduling simple, fast, and effortless.",
		icon: CalendarCheck,
		href: "/resources/help/book-appointment",
	},
	{
		title: "Melp Drive",
		description:
			"With MelpDrive keep your work organized, accessible, and collaborative.",
		icon: FolderOpen,
		href: "/resources/help/melp-drive",
	},
];

export default function HelpCenterContent() {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchFocused, setSearchFocused] = useState(false);
	const router = useRouter();

	// Flatten help topics (sub-nav items) for search suggestions
	const helpTopics = useMemo(
		() =>
			sidebarCategories.flatMap((category) =>
				category.items.map((item) => ({
					label: item.label,
					href: item.href ?? "#",
					category: category.title,
				}))
			),
		[]
	);

	const curatedDefaults = useMemo(() => {
		// Pick diverse topics across pages to avoid only "Getting started"
		const priority = [
			"/resources/help/get-started#create-account",
			"/resources/help/personalize-melpapp#ManageYourAccount",
			"/resources/help/calls#callSomeoneInNetwork",
			"/resources/help/create-group#howToCreateGroup",
			"/resources/help/schedule-meeting#howToScheduleMeeting",
			"/resources/help/melp-drive#keyFunction",
		];
		const mapped = priority
			.map((href) => helpTopics.find((topic) => topic.href === href))
			.filter(Boolean) as typeof helpTopics;
		return mapped.slice(0, 6);
	}, [helpTopics]);

	const filteredTopics = useMemo(() => {
		const query = searchQuery.trim().toLowerCase();
		if (!query) return curatedDefaults;
		return helpTopics
			.filter((topic) => topic.label.toLowerCase().includes(query))
			.slice(0, 8);
	}, [curatedDefaults, helpTopics, searchQuery]);

	const handleNavigate = (href: string) => {
		setSearchFocused(false);
		router.push(href, { scroll: false });
		const hash = href.includes("#") ? href.split("#")[1] : "";
		if (hash) {
			setTimeout(() => {
				const el = document.getElementById(hash);
				if (el) {
					el.scrollIntoView({ behavior: "smooth", block: "start" });
				}
			}, 200);
		}
	};
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
								className="relative mx-auto mt-8 max-w-2xl"
							>
								<div
									className={`relative rounded-md border bg-muted/50 transition-all duration-200 ${
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
										onBlur={() =>
											setTimeout(() => setSearchFocused(false), 120)
										}
										className="h-12 w-full rounded-md border-0 bg-transparent pl-12 pr-4 text-base shadow-none focus-visible:ring-0"
									/>
								</div>

								{searchFocused && (
									<Card className="absolute left-0 right-0 z-20 mt-2 border border-border bg-white shadow-soft dark:bg-neutral-900">
										{filteredTopics.length > 0 ? (
											<ul className="divide-y divide-border/80">
												{filteredTopics.map((topic) => (
													<li key={`${topic.category}-${topic.label}`}>
														<button
															type="button"
															onMouseDown={(e) => e.preventDefault()}
															onClick={() => handleNavigate(topic.href)}
															className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-muted/50"
														>
															<span className="font-medium text-foreground">
																{topic.label}
															</span>
															<span className="text-xs text-muted-foreground">
																in {topic.category}
															</span>
														</button>
													</li>
												))}
											</ul>
										) : (
											<div className="px-4 py-3 text-sm text-muted-foreground">
												No matching topics yet. Try a different keyword.
											</div>
										)}
									</Card>
								)}

								{/* Search suggestions */}
								<div className="mt-4 flex flex-wrap items-center justify-center gap-2">
									{searchSuggestions.map((suggestion) => (
										<button
											type="button"
											key={suggestion.label}
											onClick={() => handleNavigate(suggestion.href)}
											className="rounded-md border border-border bg-background px-4 py-1.5 text-sm text-foreground transition-colors hover:bg-muted"
										>
											{suggestion.label}
										</button>
									))}
								</div>
							</motion.div>
						</div>
					</section>

					{/* Popular Topics - Notion style grid */}
					<section className="px-4 py-12 sm:px-8 lg:px-16 lg:py-20">
						<div className="mx-auto max-w-5xl">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="mb-10"
							>
								<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
									Popular topics
								</h2>
								<p className="mt-2 text-muted-foreground">
									Explore guides and tutorials to get the most out of MelpApp
								</p>
							</motion.div>

							<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{popularTopics.map((topic, index) => {
									const Icon = topic.icon;
									return (
										<motion.div
											key={topic.title}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												duration: 0.4,
												delay: 0.15 + index * 0.04,
											}}
										>
											<Link
												href={topic.href ?? "#"}
												className="group relative flex h-full flex-col rounded-xl border border-border/60 bg-background p-5 transition-all duration-200 hover:border-border hover:bg-muted/40 hover:shadow-sm"
											>
												{/* Icon with subtle background */}
												<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted/80 text-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
													<Icon className="h-5 w-5" strokeWidth={1.5} />
												</div>

												{/* Title */}
												<h3 className="text-[15px] font-medium leading-snug text-foreground">
													{topic.title}
												</h3>

												{/* Description */}
												<p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
													{topic.description}
												</p>

												{/* Subtle arrow indicator */}
												<div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-all duration-200 group-hover:opacity-100">
													<span>Learn more</span>
													<ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
												</div>
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
