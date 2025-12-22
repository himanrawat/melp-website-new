"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
	ArrowUpRight,
	Loader2,
	Search,
	Sparkles,
	X,
	TrendingUp,
	Clock,
} from "lucide-react";

type Suggestion = {
	title: string;
	href: string;
};

interface SearchBarProps {
	defaultValue: string;
	popularSuggestions: Suggestion[];
}

export default function SearchBar({
	defaultValue,
	popularSuggestions,
}: SearchBarProps) {
	const router = useRouter();
	const [value, setValue] = useState(defaultValue);
	const [focused, setFocused] = useState(false);
	const [liveSuggestions, setLiveSuggestions] = useState<Suggestion[]>([]);
	const [loading, setLoading] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const abortRef = useRef<AbortController | null>(null);

	const useLive = value.trim().length >= 2;
	const suggestionList = useMemo(() => {
		if (useLive) return liveSuggestions;
		const query = value.trim().toLowerCase();
		if (!query) return popularSuggestions.slice(0, 6);
		return popularSuggestions
			.filter((item) => item.title.toLowerCase().includes(query))
			.slice(0, 6);
	}, [liveSuggestions, popularSuggestions, useLive, value]);

	// Handle clicks outside to close dropdown
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setFocused(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	useEffect(() => {
		if (!useLive) {
			setLiveSuggestions([]);
			return;
		}

		if (abortRef.current) abortRef.current.abort();
		const controller = new AbortController();
		abortRef.current = controller;

		const fetchSuggestions = async () => {
			try {
				setLoading(true);
				const res = await fetch(
					`https://www.melp.us/blog/wp-json/wp/v2/posts?search=${encodeURIComponent(
						value.trim()
					)}&per_page=6&orderby=relevance&_fields=title,link,slug`,
					{ signal: controller.signal, cache: "no-store" }
				);
				if (!res.ok) throw new Error("Failed to fetch suggestions");
				const data: {
					title?: { rendered?: string };
					link?: string;
					slug?: string;
				}[] = await res.json();
				setLiveSuggestions(
					data.map((item) => ({
						title: stripHtml(item.title?.rendered || "Untitled"),
						href: item.link || `https://www.melp.us/blog/${item.slug || ""}`,
					}))
				);
			} catch (error) {
				if (controller.signal.aborted) return;
				console.warn("[SEARCH_SUGGESTIONS] error", error);
				setLiveSuggestions([]);
			} finally {
				if (!controller.signal.aborted) {
					setLoading(false);
				}
			}
		};

		const debounceTimer = setTimeout(fetchSuggestions, 300);
		return () => {
			clearTimeout(debounceTimer);
			controller.abort();
		};
	}, [useLive, value]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const query = value.trim();
		setFocused(false);
		if (!query) {
			router.push("/blog");
			return;
		}
		const params = new URLSearchParams();
		params.set("q", query);
		router.push(`/blog?${params.toString()}`);
	};

	const clearSearch = () => {
		setValue("");
		inputRef.current?.focus();
	};

	return (
		<div ref={containerRef} className="relative w-full max-w-md">
			<form
				onSubmit={handleSubmit}
				className="flex items-center gap-2 rounded-md border-2 border-border/60 bg-background px-3 py-2 shadow-sm transition-all duration-300 focus-within:border-primary/60 focus-within:shadow-lg focus-within:shadow-primary/10 hover:border-border"
			>
				{/* Search Icon with animation */}
				<motion.span
					className="flex-shrink-0 text-muted-foreground"
					animate={{ scale: focused ? 1.1 : 1 }}
					transition={{ duration: 0.2 }}
				>
					<Search className="h-5 w-5" />
				</motion.span>

				{/* Input Field */}
				<input
					ref={inputRef}
					type="text"
					name="q"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onFocus={() => setFocused(true)}
					placeholder="Search articles..."
					className="flex-1 bg-transparent py-1.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/70"
				/>

				{/* Clear Button */}
				<AnimatePresence>
					{value && (
						<motion.button
							type="button"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.15 }}
							onClick={clearSearch}
							className="flex-shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
						>
							<X className="h-4 w-4" />
						</motion.button>
					)}
				</AnimatePresence>

				{/* Search Button */}
				<motion.button
					type="submit"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					className="flex-shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
				>
					Search
				</motion.button>
			</form>

			{/* Suggestions Dropdown */}
			<AnimatePresence>
				{focused && (
					<motion.div
						initial={{ opacity: 0, y: -10, scale: 0.98 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -10, scale: 0.98 }}
						transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
						className="absolute z-50 mt-3 w-full overflow-hidden rounded-md border border-border/60 bg-background/98 shadow-2xl backdrop-blur-xl"
					>
						{/* Header */}
						<div className="flex items-center justify-between border-b border-border/40 px-4 py-3 bg-muted/30">
							<div className="flex items-center gap-2">
								{loading ? (
									<Loader2 className="h-4 w-4 animate-spin text-primary" />
								) : useLive ? (
									<TrendingUp className="h-4 w-4 text-primary" />
								) : (
									<Sparkles className="h-4 w-4 text-primary" />
								)}
								<span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
									{loading
										? "Searching..."
										: useLive
										? "Live Results"
										: "Popular Searches"}
								</span>
							</div>
							{suggestionList.length > 0 && (
								<span className="text-xs text-muted-foreground">
									{suggestionList.length} result
									{suggestionList.length !== 1 ? "s" : ""}
								</span>
							)}
						</div>

						{/* Suggestions List */}
						<div className="max-h-80 overflow-y-auto">
							{suggestionList.length === 0 ? (
								<div className="flex flex-col items-center justify-center py-8 px-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/50 mb-3">
										<Search className="h-5 w-5 text-muted-foreground" />
									</div>
									<p className="text-sm font-medium text-foreground">
										No matches found
									</p>
									<p className="text-xs text-muted-foreground mt-1">
										Try a different search term
									</p>
								</div>
							) : (
								<div className="py-2">
									{suggestionList.map((item, index) => (
										<motion.div
											key={item.href}
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.2, delay: index * 0.05 }}
										>
											<Link
												href={item.href}
												onClick={() => setFocused(false)}
												className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/60"
											>
												<div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary/20">
													<Clock className="h-4 w-4 text-primary" />
												</div>
												<span className="flex-1 text-sm text-foreground line-clamp-1 group-hover:text-primary transition-colors">
													{item.title}
												</span>
												<ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
											</Link>
										</motion.div>
									))}
								</div>
							)}
						</div>

						{/* Footer hint */}
						<div className="border-t border-border/40 px-4 py-2.5 bg-muted/20">
							<p className="text-xs text-muted-foreground text-center">
								Press{" "}
								<kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium">
									Enter
								</kbd>{" "}
								to search
							</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, "").trim();
