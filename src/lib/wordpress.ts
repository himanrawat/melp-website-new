const DEFAULT_WP_REST_BASE = "https://www.melp.us/blog/wp-json/wp/v2";

type WPFeaturedMedia = {
	id?: number;
	source_url?: string;
	alt_text?: string;
	title?: {
		rendered?: string;
	};
};

type WPPost = {
	id: number;
	slug: string;
	date: string;
	link: string;
	title?: {
		rendered?: string;
	};
	excerpt?: {
		rendered?: string;
	};
	_embedded?: {
		"wp:featuredmedia"?: WPFeaturedMedia[];
	};
};

export type BlogPost = {
	id: number;
	slug: string;
	date: string;
	title: string;
	excerpt: string;
	link: string;
	featuredImage?: {
		url: string;
		alt: string;
	};
	readingTimeMinutes?: number;
};

const WP_REST_ENDPOINT = (process.env.WP_REST_ENDPOINT || DEFAULT_WP_REST_BASE).replace(
	/\/$/,
	""
);

const stripHtml = (value: string | undefined) =>
	(value || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

const decodeHtmlEntities = (value: string) =>
	value
		.replace(/&nbsp;/gi, " ")
		.replace(/&amp;/gi, "&")
		.replace(/&quot;/gi, '"')
		.replace(/&#039;/gi, "'")
		.replace(/&rsquo;/gi, "'")
		.replace(/&lsquo;/gi, "'")
		.replace(/&ldquo;/gi, '"')
		.replace(/&rdquo;/gi, '"')
		.replace(/&mdash;/gi, "-")
		.replace(/&ndash;/gi, "-");

const truncate = (value: string, maxLength = 220) =>
	value.length > maxLength ? `${value.slice(0, maxLength).trimEnd()}...` : value;

const calculateReadingTime = (text: string) => {
	const words = text.split(/\s+/).filter(Boolean).length;
	if (!words) return undefined;
	return Math.max(1, Math.round(words / 180));
};

const normalizePost = (post: WPPost): BlogPost => {
	const cleanTitle = decodeHtmlEntities(stripHtml(post.title?.rendered) || "Untitled");
	const cleanExcerpt = truncate(
		decodeHtmlEntities(stripHtml(post.excerpt?.rendered) || " "),
		220
	);

	const media = post._embedded?.["wp:featuredmedia"]?.[0];
	const featuredImage =
		media?.source_url && media.source_url.length > 0
			? {
					url: media.source_url,
					alt: decodeHtmlEntities(
						stripHtml(media.alt_text || media.title?.rendered || cleanTitle)
					),
			  }
			: undefined;

	const readingTimeMinutes = calculateReadingTime(cleanExcerpt);

	return {
		id: post.id,
		slug: post.slug,
		date: post.date,
		title: cleanTitle,
		excerpt: cleanExcerpt,
		link: post.link,
		featuredImage,
		readingTimeMinutes,
	};
};

export interface FetchPostsResult {
	posts: BlogPost[];
	total: number;
	totalPages: number;
}

export async function fetchWordPressPosts({
	page = 1,
	perPage = 9,
	search = "",
}: {
	page?: number;
	perPage?: number;
	search?: string;
} = {}): Promise<FetchPostsResult> {
	const params = new URLSearchParams({
		per_page: String(perPage),
		page: String(page),
		_embed: "true",
	});

	if (search.trim()) {
		params.set("search", search.trim());
		params.set("orderby", "relevance");
	}

	const url = `${WP_REST_ENDPOINT}/posts?${params.toString()}`;

	const response = await fetch(url, {
		cache: "no-store",
	});

	if (!response.ok) {
		// If user is on a page beyond the available total pages, retry page 1
		if (response.status === 400 && page > 1) {
			console.warn(
				"[WP_FETCH] 400 response, retrying page 1",
				JSON.stringify({ page, perPage, search })
			);
			return fetchWordPressPosts({ page: 1, perPage, search });
		}
		throw new Error(
			`Failed to fetch WordPress posts: ${response.status} ${response.statusText}`
		);
	}

	const totalPages = Number(response.headers.get("x-wp-totalpages") || 1);
	const total = Number(response.headers.get("x-wp-total") || 0);
	const data = (await response.json()) as WPPost[];

	console.log(
		"[WP_FETCH] success",
		JSON.stringify({
			url,
			page,
			perPage,
			search,
			total,
			totalPages,
			count: data.length,
		})
	);

	return {
		posts: data.map(normalizePost),
		total,
		totalPages,
	};
}
