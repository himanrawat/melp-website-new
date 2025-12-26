// Upstream bases (update here if hosts change)
// export const MELP_API_BASE = "https://139.59.25.211:9000";
export const MELP_API_BASE =
	process.env.NEXT_PUBLIC_MELP_API_BASE || "https://static-dev.melpapp.com";
export const PAYMENT_API_BASE =
	process.env.NEXT_PUBLIC_PAYMENT_API_BASE || "https://static-dev.melpapp.com";
export const MELP_SESSION_BASE =
	process.env.NEXT_PUBLIC_MELP_SESSION_BASE || "https://bang.prd.melp.us:5003/MelpService";
const MELP_SESSION_PATH =
	process.env.NEXT_PUBLIC_MELP_SESSION_PATH || "generatewebmelpsession";
export const MELP_UPSTREAM_BASE =
	process.env.MELP_UPSTREAM_BASE || process.env.NEXT_PUBLIC_MELP_UPSTREAM_BASE || MELP_API_BASE;

export const API_ENDPOINTS = {
	checkEmail: `${MELP_API_BASE}/MelpService/checkemail/v1`,
	melpSignup: `${MELP_API_BASE}/MelpService/melpsignup/v1`,
	paymentCheckout: `${PAYMENT_API_BASE}/payment/checkout`,
	getSession: `${MELP_SESSION_BASE}/${MELP_SESSION_PATH}`,
};
	
export const API_TIMEOUT_MS = 15000;

export function logApi(message: string, data?: unknown) {
	// Centralized logging hook (console for now; swap for a logger later)
	// eslint-disable-next-line no-console
	console.log(`[API] ${message}`, data ?? "");
}
