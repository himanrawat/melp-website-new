"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import {
	MelpAILivecaptionHero,
	MelpAISummaryModal,
	MelpFileSummaryMockup,
	MelpFileTranslationMockup,
} from "./mockups";

const content = [
	{
		sectionTitle: "File Intelligence",
		title: "AI File Translation",
		description:
			"Translate any document into your preferred language in seconds. Melp automatically creates a new translated copy, so your original stays untouched and easy to share.",
		content: <MelpFileTranslationMockup />,
	},
	{
		sectionTitle: "Chat Intelligence",
		title: "File Summary in Chat",
		description:
			"Get an instant overview of any shared document in your selected language. Then ask AI questions from the file to quickly find key points, details, and answers.",
		content: <MelpFileSummaryMockup />,
	},
	{
		sectionTitle: "Meeting Intelligence",
		title: "AI Meeting Summary",
		description:
			"Automatically turn meetings into clear summaries with key decisions and takeaways. Share the recap instantly so everyone stays aligned — even if they missed the call.",
		content: <MelpAISummaryModal contentClassName="min-w-[450px]" />,
	},
	{
		sectionTitle: "Real-Time Intelligence",
		title: "Live Transcription & Translation",
		description:
			"Follow conversations as they happen with real-time transcription and multilingual translation. Each participant can read in their own language for faster, clearer collaboration.",
		content: <MelpAILivecaptionHero />,
	},
];

export function StickyScrollReveal() {
	return (
		<div className="w-full py-4">
			<StickyScroll content={content} />
		</div>
	);
}
