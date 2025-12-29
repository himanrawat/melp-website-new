import { redirect } from "next/navigation";
import { buildCheckoutUrl } from "@/lib/paymentLinks";

type CheckoutSearchParams = {
	plan?: string;
	billing?: string;
};

export default function CheckoutRedirect({
	searchParams,
}: {
	searchParams: CheckoutSearchParams;
}) {
	const plan = searchParams.plan ?? "plus";
	const billing = searchParams.billing === "monthly" ? "monthly" : "yearly";

	redirect(buildCheckoutUrl(plan, billing));
}
