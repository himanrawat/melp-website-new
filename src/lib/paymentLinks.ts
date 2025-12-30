const paymentBaseUrl = (
	process.env.NEXT_PUBLIC_PAYMENT_BASE_URL ||
	"http://localhost:3001"
).replace(/\/$/, "");

function buildPaymentUrl(path: string) {
	return `${paymentBaseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export type CheckoutParams = {
	packageId: string;
	billingCycle: "MONTHLY" | "YEARLY";
	checkoutId: string;
	minquantity?: number;
	maxquantity?: number;
};

export function buildCheckoutUrl(
	planId: string,
	billing: "yearly" | "monthly"
): string;
export function buildCheckoutUrl(params: CheckoutParams): string;
export function buildCheckoutUrl(
	paramsOrPlanId: CheckoutParams | string,
	billing?: "yearly" | "monthly"
) {
	const params: CheckoutParams =
		typeof paramsOrPlanId === "string"
			? {
					packageId: paramsOrPlanId,
					billingCycle: billing === "monthly" ? "MONTHLY" : "YEARLY",
					checkoutId: paramsOrPlanId
			  }
			: paramsOrPlanId;

	const query = new URLSearchParams({
		packageId: params.packageId,
		billingCycle: params.billingCycle,
		checkoutId: params.checkoutId,
	});

	return buildPaymentUrl(`/payment?${query.toString()}`);
}

export { paymentBaseUrl, buildPaymentUrl };
