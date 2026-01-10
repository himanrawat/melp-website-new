import type { ApiPackage } from "@/types/pricing";

const DEFAULT_API_BASE_URL = "http://139.59.25.211:8090";
const DEFAULT_PACKAGES_ENDPOINT =
	"/payment/subscriptionPackage/activePackages/NoVal";

const API_BASE_URL = (
	process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_API_BASE_URL
).replace(/\/$/, "");
const PACKAGES_ENDPOINT =
	process.env.PRICING_PACKAGES_ENDPOINT || DEFAULT_PACKAGES_ENDPOINT;

const PACKAGES_URL = `${API_BASE_URL}${
	PACKAGES_ENDPOINT.startsWith("/") ? "" : "/"
}${PACKAGES_ENDPOINT}`;

const API_TOKEN = process.env.PAYMENTS_API_TOKEN;

type PackagesApiResponse = {
	status: string;
	message: string;
	data: ApiPackage[];
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
