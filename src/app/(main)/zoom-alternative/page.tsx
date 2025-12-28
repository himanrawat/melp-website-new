import { Metadata } from "next";
import { AlternativePageTemplate, zoomConfig } from "@/components/alternative";

export const metadata: Metadata = {
	title: "Best Zoom Alternative for Business Collaboration | Melp App",
	description:
		"Looking for a Zoom alternative? Melp App is a secure, all-in-one digital workplace that goes beyond meetings. Start free today.",
	keywords: [
		"Zoom alternative",
		"Zoom alternatives",
		"alternatives to Zoom",
		"alternative to Zoom",
		"free alternative to Zoom",
		"free alternatives to Zoom",
		"video conferencing alternative",
		"collaboration tool",
		"digital workplace platform",
	],
	openGraph: {
		title: "Best Zoom Alternative for Business Collaboration | Melp App",
		description:
			"Looking for a Zoom alternative? Melp App is a secure, all-in-one digital workplace that goes beyond meetings. Start free today.",
		url: "https://melp.us/zoom-alternative",
		siteName: "Melp",
		type: "website",
	},
};

export default function ZoomAlternativePage() {
	return <AlternativePageTemplate config={zoomConfig} />;
}
