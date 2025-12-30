import { redirect } from "next/navigation";
import { buildCheckoutUrl } from "@/lib/paymentLinks";

type CheckoutSearchParams = {
	plan?: string;
	billing?: string;
	packageId?: string;
	billingCycle?: string;
	checkoutId?: string;
};

export default function CheckoutRedirect({
	searchParams,
}: {
	searchParams: CheckoutSearchParams;
}) {
	const packageId = searchParams.packageId ?? searchParams.plan ?? "plus";
	const rawBilling = searchParams.billingCycle ?? searchParams.billing;
	const billingCycle = rawBilling === "MONTHLY" || rawBilling === "monthly"
		? "MONTHLY"
		: "YEARLY";
	const checkoutId = searchParams.checkoutId ?? packageId;

	redirect(buildCheckoutUrl({ packageId, billingCycle, checkoutId }));
}
