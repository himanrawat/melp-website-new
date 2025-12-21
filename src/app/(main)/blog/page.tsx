import type { Metadata } from "next";
import { fetchWordPressPosts, type FetchPostsResult } from "@/lib/wordpress";
import { BookOpen } from "lucide-react";
import SearchBar from "./SearchBar";
import { BlogHero, EmptyState, SortableBlogSection } from "./BlogComponents";

export const metadata: Metadata = {
	title: "Blog | Melp insights, updates, and product stories",
	description:
		"Read the latest Melp product updates, security notes, and collaboration guides.",
};

type BlogPageProps = {
	searchParams?:
		| Promise<{
				page?: string;
				q?: string;
		  }>
		| {
				page?: string;
				q?: string;
		  };
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
	const resolvedSearchParams = await Promise.resolve(searchParams);
	const currentPage = Number(resolvedSearchParams?.page || 1);
	const searchQuery = resolvedSearchParams?.q
		? resolvedSearchParams.q.trim()
		: "";
	let postsResult: FetchPostsResult = { posts: [], total: 0, totalPages: 1 };
	let suggestionSeed: FetchPostsResult = { posts: [], total: 0, totalPages: 1 };

	try {
		postsResult = await fetchWordPressPosts({
			page: Number.isNaN(currentPage) ? 1 : currentPage,
			perPage: 9,
			search: searchQuery,
		});
		suggestionSeed = await fetchWordPressPosts({
			page: 1,
			perPage: 30,
		});
	} catch (error) {
		console.error("Failed to load posts", error);
	}

	const { posts, totalPages, total } = postsResult;
	const popularSuggestions = suggestionSeed.posts.slice(0, 8).map((post) => ({
		title: post.title,
		href: post.link || `https://www.melp.us/blog/${post.slug}`,
	}));

	const featuredPost = posts[0] || null;

	return (
		<div className="bg-background">
			<main className="bg-background">
				{/* Hero Section */}
				<BlogHero postsCount={total} searchQuery={searchQuery} />

				{/* Search & Filter Section */}
				<section className="relative border-b border-border/40 bg-gradient-to-b from-muted/30 to-background">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
						<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
										<BookOpen className="h-4 w-4 text-primary" />
									</div>
									<h2 className="text-xl font-semibold text-foreground">
										{searchQuery
											? `Results for "${searchQuery}"`
											: "Explore Articles"}
									</h2>
								</div>
								<p className="text-sm text-muted-foreground">
									{total} article{total === 1 ? "" : "s"} • Updated in real-time
								</p>
							</div>
							<SearchBar
								defaultValue={searchQuery}
								popularSuggestions={popularSuggestions}
							/>
						</div>
					</div>
				</section>

				{/* Main Content */}
				<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
					{posts.length === 0 ? (
						<EmptyState searchQuery={searchQuery} />
					) : (
						<SortableBlogSection
							posts={posts}
							featuredPost={featuredPost}
							currentPage={Number.isNaN(currentPage) ? 1 : currentPage}
							searchQuery={searchQuery}
							totalPages={totalPages}
						/>
					)}
				</section>
			</main>
		</div>
	);
}
