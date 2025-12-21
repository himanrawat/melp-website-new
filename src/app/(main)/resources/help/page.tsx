import type { Metadata } from "next";
import HelpCenterContent from "./HelpCenterContent";

export const metadata: Metadata = {
	title: "Help Center | Melp - Get Started & Find Answers",
	description:
		"Find guidance on getting started with MelpApp, personalizing your workspace, collaborating, meeting, and managing files.",
};

export default function HelpCenterPage() {
	return (
		<div className="min-h-screen bg-background">
			<main>
				<HelpCenterContent />
			</main>
		</div>
	);
}
