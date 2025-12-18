import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpCenterContent from "./HelpCenterContent";

export const metadata: Metadata = {
	title: "Help Center | Melp - Get Started & Find Answers",
	description:
		"Find guidance on getting started with MelpApp, personalizing your workspace, collaborating, meeting, and managing files.",
};

export default function HelpCenterPage() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				<HelpCenterContent />
			</main>
			<Footer />
		</div>
	);
}
