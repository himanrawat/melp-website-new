import { Metadata } from "next";
import {
	AlternativePageTemplate,
	microsoftTeamsConfig,
} from "@/components/alternative";

export const metadata: Metadata = {
	title: "Best Microsoft Teams Alternative for Seamless Collaboration | Melp App",
	description:
		"Looking for a Microsoft Teams alternative? Melp App simplifies team communication with structured workspaces, secure messaging, and AI-powered productivity.",
	keywords: [
		"Microsoft Teams alternative",
		"teams alternative",
		"Microsoft Teams alternatives",
		"teams alternatives",
		"alternatives to Microsoft Teams",
		"alternative to Teams",
		"free alternative to Microsoft Teams",
		"free alternatives to Microsoft Teams",
		"collaboration tool",
		"digital workplace platform",
	],
	openGraph: {
		title: "Best Microsoft Teams Alternative for Seamless Collaboration | Melp App",
		description:
			"Looking for a Microsoft Teams alternative? Melp App simplifies team communication with structured workspaces, secure messaging, and AI-powered productivity.",
		url: "https://melp.us/microsoft-teams-alternative",
		siteName: "Melp",
		type: "website",
	},
};

export default function MicrosoftTeamsAlternativePage() {
	return <AlternativePageTemplate config={microsoftTeamsConfig} />;
}
