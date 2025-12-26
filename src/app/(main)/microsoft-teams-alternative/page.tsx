import { Metadata } from "next";
import {
	TeamsAlternativeHero,
	WhySwitchingSection,
	TeamsComparisonSection,
	TeamsFAQSection,
} from "@/components/alternatives";
import SecuritySection from "@/components/SecuritySection";
import CtaSection from "@/components/CtaSection";
import IntegrationsSection from "@/components/IntegrationsSection";

export const metadata: Metadata = {
	title: "Best Microsoft Teams Alternative | Melp App",
	description:
		"Looking for the best Microsoft Teams alternative or a free Teams alternative? Melp is a powerful collaboration tool and digital workplace platform that combines chat, video conferencing, calendar, and team collaboration — all in one app.",
	keywords: [
		"Microsoft Teams alternative",
		"teams alternative",
		"teams alternatives",
		"Microsoft Teams alternatives",
		"alternatives to Microsoft Teams",
		"alternative to Teams",
		"free alternative to Microsoft Teams",
		"free alternatives to Microsoft Teams",
		"collaboration tool",
		"team communication app",
		"digital workplace",
	],
	openGraph: {
		title: "Best Microsoft Teams Alternative | Melp App",
		description:
			"Looking for the best Microsoft Teams alternative? Melp combines chat, video conferencing, calendar, and team collaboration — all in one app.",
		url: "https://melp.us/microsoft-teams-alternative",
		siteName: "Melp",
		type: "website",
	},
};

export default function MicrosoftTeamsAlternativePage() {
	return (
		<div className="bg-background">
			{/* Hero Section */}
			<TeamsAlternativeHero />

			{/* Why Businesses Are Switching */}
			<WhySwitchingSection />

			{/* Comparison Section */}
			<div id="comparison">
				<TeamsComparisonSection />
			</div>

			{/* Integrations - Show that Melp works with other tools */}
			<IntegrationsSection />

			{/* Security Section - Trust signals */}
			<SecuritySection />

			{/* FAQ Section */}
			<TeamsFAQSection />

			{/* CTA Section */}
			<CtaSection />
		</div>
	);
}
