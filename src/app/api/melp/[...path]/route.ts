import { NextRequest, NextResponse } from "next/server";
import { MELP_UPSTREAM_BASE } from "@/lib/api";
import https from "https";

// Ensure Node runtime for access to https.Agent
export const runtime = "nodejs";

// Insecure agent to work around upstream cert CN mismatch on the IP
const agent = new https.Agent({ rejectUnauthorized: false });

const HOP_BY_HOP_HEADERS = new Set([
	"connection",
	"content-length",
	"accept-encoding",
	"host",
	"transfer-encoding",
]);

async function handler(req: NextRequest, { params }: { params: { path?: string[] } }) {
	const targetPath = params.path?.join("/") ?? "";
	const targetUrl = `${MELP_UPSTREAM_BASE}/${targetPath}${req.nextUrl.search}`;

	const headers = new Headers();
	req.headers.forEach((value, key) => {
		if (!HOP_BY_HOP_HEADERS.has(key.toLowerCase())) {
			headers.set(key, value);
		}
	});

	const method = req.method;
	const hasBody = !["GET", "HEAD"].includes(method);
	const body = hasBody ? Buffer.from(await req.arrayBuffer()) : undefined;

	const upstreamResponse = await fetch(targetUrl, {
		method,
		headers,
		body,
		redirect: "manual",
		// Node fetch accepts agent for http/https
		agent,
	});

	const responseHeaders = new Headers();
	upstreamResponse.headers.forEach((value, key) => {
		if (!HOP_BY_HOP_HEADERS.has(key.toLowerCase())) {
			responseHeaders.set(key, value);
		}
	});

	return new NextResponse(upstreamResponse.body, {
		status: upstreamResponse.status,
		headers: responseHeaders,
	});
}

export { handler as GET, handler as POST, handler as PUT, handler as PATCH, handler as DELETE, handler as OPTIONS };
