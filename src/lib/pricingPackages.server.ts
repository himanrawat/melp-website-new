import type { ApiPackage } from "@/types/pricing";

const DEFAULT_PACKAGES_URL =
	"http://139.59.25.211:8090/payment/subscriptionPackage/activePackages/NoVal";

const PACKAGES_URL = (process.env.PRICING_PACKAGES_URL || DEFAULT_PACKAGES_URL).replace(
	/\/$/,
	""
);

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
