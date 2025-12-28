import { Metadata } from "next";
import CompareHero from "@/components/compare/CompareHero";
import CompareWhySwitching from "@/components/compare/CompareWhySwitching";
import CompareFeatureTable from "@/components/compare/CompareFeatureTable";
import CompareDifferentiators from "@/components/compare/CompareDifferentiators";
import CompareTestimonials from "@/components/compare/CompareTestimonials";
import CompareFAQ from "@/components/compare/CompareFAQ";
import CompareCTA from "@/components/compare/CompareCTA";

export const metadata: Metadata = {
	title: "Best Microsoft Teams Alternative | Melp App",
	description:
		"Looking for the best Microsoft Teams alternative or a free Teams alternative? Melp is a powerful collaboration tool and digital workplace platform that combines chat, video conferencing, calendar, and team collaboration — all in one app.",
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
		title: "Best Microsoft Teams Alternative | Melp App",
		description:
			"Looking for the best Microsoft Teams alternative? Melp combines chat, video conferencing, calendar, and team collaboration — all in one app.",
		url: "https://melp.us/microsoft-teams-alternative",
		siteName: "Melp",
		type: "website",
	},
};

export default function CompareMicrosoftTeamsPage() {
	return (
		<div className="bg-background">
			{/* Hero with VS Logo Treatment */}
			<CompareHero />

			{/* Why Businesses Are Switching */}
			<CompareWhySwitching />

			{/* Feature Comparison Table */}
			<CompareFeatureTable />

			{/* Key Differentiators */}
			<CompareDifferentiators />

			{/* Testimonials & Social Proof */}
			<CompareTestimonials />

			{/* FAQ Section */}
			<CompareFAQ />

			{/* CTA Section */}
			<CompareCTA />
		</div>
	);
}
