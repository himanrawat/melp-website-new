const paymentBaseUrl = (
	process.env.NEXT_PUBLIC_PAYMENT_BASE_URL || "http://localhost:3001"
).replace(/\/$/, "");

function buildPaymentUrl(path: string) {
	return `${paymentBaseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildCheckoutUrl(planId: string, billing: "yearly" | "monthly") {
	const params = new URLSearchParams({ plan: planId, billing });
	return buildPaymentUrl(`/checkout?${params.toString()}`);
}

export { paymentBaseUrl, buildPaymentUrl };
