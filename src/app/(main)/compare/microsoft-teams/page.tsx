import { Metadata } from "next";
import CompareHero from "@/components/compare/CompareHero";
import CompareFeatureTable from "@/components/compare/CompareFeatureTable";
import CompareDifferentiators from "@/components/compare/CompareDifferentiators";
import CompareTestimonials from "@/components/compare/CompareTestimonials";
import CompareFAQ from "@/components/compare/CompareFAQ";
import CompareCTA from "@/components/compare/CompareCTA";

export const metadata: Metadata = {
	title: "Melp vs Microsoft Teams | Feature Comparison",
	description:
		"Compare Melp and Microsoft Teams side by side. See why modern teams choose Melp as their Microsoft Teams alternative for seamless collaboration, external communication, and AI-powered features.",
	keywords: [
		"Melp vs Teams",
		"Melp vs Microsoft Teams",
		"Microsoft Teams comparison",
		"Teams alternative comparison",
		"collaboration tool comparison",
		"team communication comparison",
	],
	openGraph: {
		title: "Melp vs Microsoft Teams | Feature Comparison",
		description:
			"Compare Melp and Microsoft Teams side by side. See why modern teams choose Melp for seamless collaboration.",
		url: "https://melp.us/compare/microsoft-teams",
		siteName: "Melp",
		type: "website",
	},
};

export default function CompareMicrosoftTeamsPage() {
	return (
		<div className="bg-background">
			{/* Hero with VS Logo Treatment */}
			<CompareHero />

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
