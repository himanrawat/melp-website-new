import type { ApiPackage, ApiPlanComparisonSegment } from "@/types/pricing";

const DEFAULT_PACKAGES_URL =
	"http://139.59.25.211:8090/payment/subscriptionPackage/activePackages/NoVal";

const PACKAGES_URL = (process.env.PRICING_PACKAGES_URL || DEFAULT_PACKAGES_URL).replace(
	/\/$/,
	""
);

const DEFAULT_COMPARISON_URL =
	"http://139.59.25.211:8090/payment/pricing/plan-comparison";

const COMPARISON_URL = (
	process.env.PRICING_COMPARISON_URL || DEFAULT_COMPARISON_URL
).replace(/\/$/, "");

const API_TOKEN = process.env.PAYMENTS_API_TOKEN;

type PackagesApiResponse = {
	status: string;
	message: string;
	data: ApiPackage[];
};

type ComparisonApiResponse = {
	status: string;
	message: string;
	data: {
		segments: ApiPlanComparisonSegment[];
	};
};

export async function fetchPackages(): Promise<ApiPackage[]> {
	const headers: Record<string, string> = {
		Accept: "application/json",
	};

	if (API_TOKEN) {
		headers.Authorization = `Bearer ${API_TOKEN}`;
	}

	const response = await fetch(PACKAGES_URL, {
		headers,
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error(
			`Failed to fetch pricing packages: ${response.status} ${response.statusText}`
		);
	}

	const payload = (await response.json()) as PackagesApiResponse;

	if (!payload || payload.status !== "SUCCESS" || !Array.isArray(payload.data)) {
		throw new Error("Unexpected pricing packages response format.");
	}

	return payload.data;
}

export async function fetchPlanComparison(): Promise<ApiPlanComparisonSegment[]> {
	const headers: Record<string, string> = {
		Accept: "application/json",
	};

	if (API_TOKEN) {
		headers.Authorization = `Bearer ${API_TOKEN}`;
	}

	const response = await fetch(COMPARISON_URL, {
		headers,
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error(
			`Failed to fetch plan comparison: ${response.status} ${response.statusText}`
		);
	}

	const payload = (await response.json()) as ComparisonApiResponse;

	if (
		!payload ||
		payload.status !== "SUCCESS" ||
		!payload.data ||
		!Array.isArray(payload.data.segments)
	) {
		throw new Error("Unexpected plan comparison response format.");
	}

	return payload.data.segments;
}
