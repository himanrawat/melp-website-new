"use client";
import { motion } from "motion/react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Button } from "./ui/button";
import {
	MelpAILivecaptionHero,
	MelpAISummaryModal,
	MelpFileSummaryMockup,
	MelpFileTranslationMockup,
} from "./mockups";

const sectionHeader = {
	sectionTitle: "AI Intelligence",
	heading:
		"Understand More. Miss Nothing. Communicate Better.",
	subheading:
		"Translate documents, summarize files, transcribe meetings in real time, draft professional content, and evaluate interviews — AI capabilities built for outcomes, not features.",
};

const content = [
	{
		sectionTitle: "Understand Anything",
		title: "AI File Translation",
		description:
			"Translate any document to any language instantly. Melp creates a translated copy automatically — your original stays untouched, ready to share across global teams.",
		content: <MelpFileTranslationMockup />,
	},
	{
		sectionTitle: "Understand Anything",
		title: "File Summary & Q&A",
		description:
			"Get an instant summary of any document in your preferred language. Ask AI questions to extract key details, find answers, and surface what matters most.",
		content: <MelpFileSummaryMockup />,
	},
	{
		sectionTitle: "Never Miss a Detail",
		title: "Meeting Summary",
		description:
			"Every meeting becomes an actionable summary — key decisions, action items, and takeaways generated automatically. Share instantly so no one falls behind.",
		content: <MelpAISummaryModal contentClassName="min-w-[450px]" />,
	},
	{
		sectionTitle: "Never Miss a Detail",
		title: "Live Transcription & Translation",
		description:
			"Real-time transcription with multilingual translation. Every participant reads in their own language — nothing gets lost in translation or time zones.",
		content: <MelpAILivecaptionHero />,
	},
];

export function StickyScrollReveal() {
	return (
		<section className="w-full py-16 sm:py-24">
			{/* Section Header */}
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
				<motion.span
					className="inline-block text-sm font-medium text-primary tracking-wider uppercase mb-4"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					{sectionHeader.sectionTitle}
				</motion.span>
				<motion.h2
					className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{sectionHeader.heading}
				</motion.h2>
				<motion.p
					className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{sectionHeader.subheading}
				</motion.p>
				{/* <motion.div
					className="mt-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<Button variant="brand-primary" size="lg">
						Get started free
					</Button>
				</motion.div> */}
			</div>

			{/* Sticky Scroll Content */}
			<StickyScroll content={content} />
		</section>
	);
}
