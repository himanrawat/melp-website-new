"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
	ArrowUpRight,
	Clock,
	TrendingUp,
	Sparkles,
	Zap,
	ChevronLeft,
	ChevronRight,
	Search,
	FileText,
	Calendar,
	Tag,
	ChevronDown,
	ArrowDownAZ,
	ArrowUpAZ,
	CalendarDays,
} from "lucide-react";
import type { BlogPost } from "@/lib/wordpress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Helper function
const formatDate = (value: string) =>
	new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	}).format(new Date(value));

// Animation variants
const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.21, 0.47, 0.32, 0.98] as const,
		},
	},
};

const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.21, 0.47, 0.32, 0.98] as const,
		},
	},
};

// Blog Hero Component
export function BlogHero({
	postsCount,
	searchQuery,
}: {
	postsCount: number;
	searchQuery: string;
}) {
	return (
		<section className="relative overflow-hidden bg-background">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
					className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl"
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
					className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-melp-accent/10 via-melp-accent/5 to-transparent blur-3xl"
				/>
				{/* Grid pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202005_1px,transparent_1px),linear-gradient(to_bottom,#22202005_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
			</div>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
				<div className="flex flex-col items-center text-center space-y-8">
					{/* Animated Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
					>
						<Badge
							variant="outline"
							className="rounded-md px-4 py-2 gap-3 border-border/60 bg-background/80 backdrop-blur-sm shadow-lg"
						>
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
								<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
							</span>
							<span className="text-sm font-medium text-foreground">
								Live Feed
							</span>
							<span className="h-1 w-1 rounded-full bg-border" />
							<span className="text-sm text-muted-foreground">Auto-synced</span>
						</Badge>
					</motion.div>

					{/* Main Title */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.7,
							delay: 0.1,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="space-y-4 max-w-4xl"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
							Insights &{" "}
							<span className="relative">
								<span className="bg-gradient-to-r from-primary via-primary/80 to-melp-accent bg-clip-text text-transparent">
									Stories
								</span>
								<motion.span
									initial={{ scaleX: 0 }}
									animate={{ scaleX: 1 }}
									transition={{
										duration: 0.8,
										delay: 0.5,
										ease: [0.21, 0.47, 0.32, 0.98],
									}}
									className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-gradient-to-r from-primary to-melp-accent"
								/>
							</span>
						</h1>
						<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
							Product updates, security notes, and collaboration guides from the
							Melp team
						</p>
					</motion.div>

					{/* Stats Row */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							delay: 0.3,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="flex flex-wrap items-center justify-center gap-4"
					>
						<Badge className="rounded-md px-4 py-2 gap-2">
							<FileText className="h-4 w-4" />
							<span>{postsCount} Articles</span>
						</Badge>
						<Badge
							variant="outline"
							className="rounded-md px-4 py-2 gap-2 border-border/60 bg-background/80"
						>
							<Zap className="h-4 w-4 text-yellow-500" />
							<span>Real-time updates</span>
						</Badge>
						<Badge
							variant="outline"
							className="rounded-md px-4 py-2 gap-2 border-border/60 bg-background/80"
						>
							<Sparkles className="h-4 w-4 text-purple-500" />
							<span>Fresh content</span>
						</Badge>
					</motion.div>
				</div>
			</div>

			{/* Bottom gradient fade */}
			<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
		</section>
	);
}

// Featured Post Component
export function FeaturedPost({ post }: { post: BlogPost }) {
	const href = post.link || `https://www.melp.us/blog/${post.slug}`;

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={fadeInUp}
		>
			<div className="mb-6 flex items-center gap-3">
				<div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-melp-accent">
					<Sparkles className="h-4 w-4 text-primary-foreground" />
				</div>
				<h2 className="text-xl font-semibold text-foreground">
					Featured Article
				</h2>
			</div>

			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				className="group relative block overflow-hidden rounded-md border border-border/50 bg-gradient-to-br from-muted/30 via-background to-muted/20 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-primary/30"
			>
				{/* Hover glow effect */}
				<div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
					<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-melp-accent/5" />
				</div>

				<div className="relative grid gap-0 lg:grid-cols-2">
					{/* Image Section */}
					<div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px] overflow-hidden">
						{post.featuredImage ? (
							<Image
								src={post.featuredImage.url}
								alt={post.featuredImage.alt}
								fill
								sizes="(min-width: 1024px) 50vw, 100vw"
								className="object-cover object-left"
								priority
							/>
						) : (
							<div className="h-full w-full bg-gradient-to-br from-primary/20 via-melp-accent/10 to-transparent" />
						)}
						{/* Overlay gradient */}
						<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background" />
					</div>

					{/* Content Section */}
					<div className="relative flex flex-col justify-center p-8 lg:p-12">
						<div className="space-y-6">
							{/* Meta info */}
							<div className="flex flex-wrap items-center gap-3">
								<Badge className="rounded-md gap-2">
									<TrendingUp className="h-3 w-3" />
									Featured
								</Badge>
								<span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
									<Calendar className="h-4 w-4" />
									{formatDate(post.date)}
								</span>
							</div>

							{/* Title */}
							<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight transition-colors duration-300 group-hover:text-primary">
								{post.title}
							</h3>

							{/* Excerpt */}
							<p className="text-base sm:text-lg text-muted-foreground line-clamp-3 leading-relaxed">
								{post.excerpt}
							</p>

							{/* CTA */}
							<div className="flex items-center gap-3 pt-4">
								<Button className="rounded-md gap-2 shadow-lg transition-all duration-300 group-hover:shadow-primary/25 group-hover:shadow-xl">
									Read Full Article
									<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</a>
		</motion.div>
	);
}

// Blog Card Component
export function BlogCard({
	post,
	index = 0,
}: {
	post: BlogPost;
	index?: number;
}) {
	const href = post.link || `https://www.melp.us/blog/${post.slug}`;

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
				ease: [0.21, 0.47, 0.32, 0.98],
			}}
		>
			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				className="group relative flex h-full flex-col overflow-hidden rounded-md border border-border/50 bg-background shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30"
			>
				{/* Hover glow */}
				<div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-melp-accent/5" />
				</div>

				{/* Image */}
				<div className="relative aspect-[16/10] w-full overflow-hidden">
					{post.featuredImage ? (
						<Image
							src={post.featuredImage.url}
							alt={post.featuredImage.alt}
							fill
							sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 90vw"
							className="object-cover"
						/>
					) : (
						<div className="h-full w-full bg-gradient-to-br from-primary/15 via-melp-accent/10 to-muted/30" />
					)}
					{/* Overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

					{/* Floating badge */}
					<div className="absolute top-3 right-3">
						<Badge
							variant="secondary"
							className="rounded-md bg-background/90 backdrop-blur-sm gap-1.5 shadow-sm"
						>
							<Clock className="h-3 w-3 text-muted-foreground" />
							{formatDate(post.date)}
						</Badge>
					</div>
				</div>

				{/* Content */}
				<div className="relative flex flex-1 flex-col gap-4 p-6">
					{/* Category tag */}
					<div className="flex items-center gap-2">
						<Badge
							variant="secondary"
							className="rounded-md gap-1 bg-primary/10 text-primary border-0"
						>
							<Tag className="h-3 w-3" />
							Article
						</Badge>
					</div>

					{/* Title */}
					<h3 className="text-lg font-semibold text-foreground leading-snug transition-colors duration-300 group-hover:text-primary line-clamp-2">
						{post.title}
					</h3>

					{/* Excerpt */}
					<p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">
						{post.excerpt}
					</p>

					{/* Footer */}
					<div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
						<span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
							Read more
							<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
						</span>
					</div>
				</div>
			</a>
		</motion.div>
	);
}

// Blog Grid Component
export function BlogGrid({ posts }: { posts: BlogPost[] }) {
	if (posts.length === 0) return null;

	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{posts.map((post, index) => (
				<BlogCard key={post.id} post={post} index={index} />
			))}
		</div>
	);
}

// Sortable Blog Section Component
export function SortableBlogSection({
	posts,
	featuredPost,
	currentPage,
	searchQuery,
	totalPages,
}: {
	posts: BlogPost[];
	featuredPost: BlogPost | null;
	currentPage: number;
	searchQuery: string;
	totalPages: number;
}) {
	const [sortBy, setSortBy] = useState<SortOption>("newest");

	const sortedPosts = sortPosts(posts, sortBy);
	const showFeatured = currentPage === 1 && !searchQuery && featuredPost;

	return (
		<div className="space-y-16">
			{/* Featured Post - Only show on first page without search */}
			{showFeatured && <FeaturedPost post={featuredPost} />}

			{/* Blog Grid */}
			<div className="space-y-8">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-3">
						<div className="h-1 w-12 rounded-full bg-linear-to-r from-primary to-primary/50" />
						<h3 className="text-lg font-semibold text-foreground">
							{searchQuery
								? "Search Results"
								: currentPage === 1
								? "Latest Articles"
								: "All Articles"}
						</h3>
					</div>
					<SortDropdown value={sortBy} onChange={setSortBy} />
				</div>

				<BlogGrid posts={showFeatured ? sortedPosts.slice(1) : sortedPosts} />
			</div>

			{/* Pagination */}
			<AnimatedPagination
				currentPage={Number.isNaN(currentPage) ? 1 : currentPage}
				totalPages={totalPages}
				searchQuery={searchQuery}
			/>
		</div>
	);
}

// Empty State Component
export function EmptyState({ searchQuery }: { searchQuery: string }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex flex-col items-center justify-center py-20 text-center"
		>
			<div className="relative mb-8">
				<div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-xl" />
				<div className="relative flex h-24 w-24 items-center justify-center rounded-md bg-gradient-to-br from-muted to-muted/50 border border-border/50">
					<Search className="h-10 w-10 text-muted-foreground" />
				</div>
			</div>
			<h3 className="text-2xl font-bold text-foreground mb-3">
				{searchQuery ? "No results found" : "No articles yet"}
			</h3>
			<p className="text-muted-foreground max-w-md mb-8">
				{searchQuery
					? `We couldn't find any articles matching "${searchQuery}". Try a different search term.`
					: "We're working on fresh content. Check back soon for new articles!"}
			</p>
			{searchQuery && (
				<Button asChild className="rounded-md shadow-lg">
					<Link href="/blog">
						<ChevronLeft className="h-4 w-4" />
						Back to all articles
					</Link>
				</Button>
			)}
		</motion.div>
	);
}

// Category Filter Component (optional enhancement)
export function CategoryFilter() {
	const [activeCategory, setActiveCategory] = useState("all");
	const categories = ["all", "product", "security", "guides", "updates"];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
			className="flex flex-wrap items-center gap-2"
		>
			{categories.map((category) => (
				<Button
					key={category}
					onClick={() => setActiveCategory(category)}
					variant={activeCategory === category ? "default" : "ghost"}
					size="sm"
					className="rounded-md"
				>
					{category.charAt(0).toUpperCase() + category.slice(1)}
				</Button>
			))}
		</motion.div>
	);
}

// Sort Dropdown Component
export type SortOption = "newest" | "oldest" | "a-z" | "z-a";

export function SortDropdown({
	value,
	onChange,
}: {
	value: SortOption;
	onChange: (value: SortOption) => void;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const options: { value: SortOption; label: string; icon: React.ReactNode }[] =
		[
			{
				value: "newest",
				label: "Newest First",
				icon: <CalendarDays className="h-4 w-4" />,
			},
			{
				value: "oldest",
				label: "Oldest First",
				icon: <Calendar className="h-4 w-4" />,
			},
			{
				value: "a-z",
				label: "Title A-Z",
				icon: <ArrowDownAZ className="h-4 w-4" />,
			},
			{
				value: "z-a",
				label: "Title Z-A",
				icon: <ArrowUpAZ className="h-4 w-4" />,
			},
		];

	const currentOption =
		options.find((opt) => opt.value === value) || options[0];

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div ref={dropdownRef} className="relative">
			<Button
				variant="outline"
				onClick={() => setIsOpen(!isOpen)}
				className="rounded-md gap-2"
			>
				{currentOption.icon}
				<span className="hidden sm:inline">{currentOption.label}</span>
				<ChevronDown
					className={`h-4 w-4 transition-transform duration-200 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</Button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -8, scale: 0.96 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -8, scale: 0.96 }}
						transition={{ duration: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
						className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-md border border-border/60 bg-background/98 shadow-xl backdrop-blur-xl"
					>
						<div className="py-1">
							{options.map((option) => (
								<button
									key={option.value}
									onClick={() => {
										onChange(option.value);
										setIsOpen(false);
									}}
									className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
										value === option.value
											? "bg-primary/10 text-primary"
											: "text-foreground hover:bg-muted"
									}`}
								>
									{option.icon}
									{option.label}
								</button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

// Sort utility function
export function sortPosts(posts: BlogPost[], sortBy: SortOption): BlogPost[] {
	const sorted = [...posts];
	switch (sortBy) {
		case "newest":
			return sorted.sort(
				(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
			);
		case "oldest":
			return sorted.sort(
				(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
			);
		case "a-z":
			return sorted.sort((a, b) => a.title.localeCompare(b.title));
		case "z-a":
			return sorted.sort((a, b) => b.title.localeCompare(a.title));
		default:
			return sorted;
	}
}

// Animated Pagination Component
export function AnimatedPagination({
	currentPage,
	totalPages,
	searchQuery,
}: {
	currentPage: number;
	totalPages: number;
	searchQuery: string;
}) {
	if (totalPages <= 1) return null;

	const createHref = (page: number) => {
		const params = new URLSearchParams();
		if (page > 1) params.set("page", String(page));
		if (searchQuery) params.set("q", searchQuery);
		const query = params.toString();
		return query ? `/blog?${query}` : "/blog";
	};

	// Generate page numbers to show
	const getPageNumbers = () => {
		const pages: (number | string)[] = [];
		const delta = 2;

		for (let i = 1; i <= totalPages; i++) {
			if (
				i === 1 ||
				i === totalPages ||
				(i >= currentPage - delta && i <= currentPage + delta)
			) {
				pages.push(i);
			} else if (pages[pages.length - 1] !== "...") {
				pages.push("...");
			}
		}

		return pages;
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="flex items-center justify-center gap-2 pt-8"
		>
			{/* Previous Button */}
			<Button
				variant="outline"
				asChild
				disabled={currentPage === 1}
				className="rounded-md"
			>
				<Link href={createHref(Math.max(1, currentPage - 1))}>
					<ChevronLeft className="h-4 w-4" />
					<span className="hidden sm:inline">Previous</span>
				</Link>
			</Button>

			{/* Page Numbers */}
			<div className="flex items-center gap-1">
				{getPageNumbers().map((page, index) =>
					page === "..." ? (
						<span
							key={`ellipsis-${index}`}
							className="px-3 py-2 text-sm text-muted-foreground"
						>
							...
						</span>
					) : (
						<Button
							key={page}
							variant={currentPage === page ? "default" : "ghost"}
							size="icon"
							asChild
							className="rounded-md h-10 w-10"
						>
							<Link href={createHref(page as number)}>{page}</Link>
						</Button>
					)
				)}
			</div>

			{/* Next Button */}
			<Button
				variant="outline"
				asChild
				disabled={currentPage === totalPages}
				className="rounded-md"
			>
				<Link href={createHref(Math.min(totalPages, currentPage + 1))}>
					<span className="hidden sm:inline">Next</span>
					<ChevronRight className="h-4 w-4" />
				</Link>
			</Button>
		</motion.div>
	);
}
