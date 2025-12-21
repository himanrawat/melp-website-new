"use client";

import {
	ProductHero,
	ProductFeatures,
	ProductBenefits,
	ProductUseCases,
	ProductCTA,
} from "@/components/product";
import {
	Captions,
	Sparkles,
	FileText,
	Languages,
	Accessibility,
	Brain,
	Mic,
	ListChecks,
	Headphones,
	Globe,
} from "lucide-react";

const features = [
	{
		title: "Real-Time Captions",
		description:
			"Speech-to-text captions appear instantly during meetings, making every word visible.",
		icon: Captions,
	},
	{
		title: "AI Meeting Summaries",
		description:
			"Automatically generate concise summaries with key points, decisions, and action items.",
		icon: Sparkles,
	},
	{
		title: "Full Transcriptions",
		description:
			"Complete, searchable transcripts of every meeting. Never miss a detail again.",
		icon: FileText,
	},
	{
		title: "Multi-Language Support",
		description:
			"Captions and summaries available in multiple languages for global teams.",
		icon: Languages,
	},
	{
		title: "Accessibility First",
		description:
			"Designed for deaf and hard-of-hearing users, supporting inclusive workplaces.",
		icon: Accessibility,
	},
	{
		title: "Smart Action Items",
		description:
			"AI extracts action items and assigns them automatically to the right people.",
		icon: ListChecks,
	},
];

const benefits = [
	{
		title: "Inclusive Meetings",
		description:
			"Live captions ensure everyone can participate fully, regardless of hearing ability.",
		icon: Accessibility,
	},
	{
		title: "Never Miss Key Points",
		description:
			"AI summaries capture decisions, action items, and key discussion points automatically.",
		icon: Brain,
	},
	{
		title: "Searchable Meeting History",
		description:
			"Full transcripts make it easy to find any conversation or decision from past meetings.",
		icon: FileText,
	},
];

const useCases = [
	{
		title: "Accessible Workplaces",
		description:
			"Support deaf and hard-of-hearing colleagues with real-time captions in every meeting.",
		icon: Headphones,
		badge: "Accessibility",
	},
	{
		title: "Global Teams",
		description:
			"Multi-language captions and translations help international teams understand each other.",
		icon: Globe,
	},
	{
		title: "Meeting Documentation",
		description:
			"Auto-generate meeting notes, summaries, and action items for perfect documentation.",
		icon: ListChecks,
	},
];

export default function CaptionsPage() {
	return (
		<div className="bg-background">
			<ProductHero
				icon={Captions}
				badge="Live Captions & AI Summarization"
				title="Hear Every Word, Even"
				highlightedText="in Text"
				description="Melp provides real-time captions during meetings and automatically generates AI-powered summaries. Perfect for accessibility, documentation, and never missing a key point."
				features={[
					"Real-time speech-to-text captions",
					"AI-generated meeting summaries",
					"Action items extraction",
					"Full searchable transcripts",
				]}
				primaryCta={{ text: "Try Live Captions", href: "/pricing" }}
				secondaryCta={{ text: "See It in Action", href: "#demo" }}
				gradient="from-pink-500/20 via-pink-500/5 to-transparent"
			/>

			<ProductFeatures
				label="Capabilities"
				title="AI-powered meeting intelligence"
				description="From real-time captions to smart summaries, Melp makes every meeting more accessible and productive."
				features={features}
			/>

			<ProductBenefits
				label="Impact"
				title="Meetings that work for everyone"
				description="Accessibility features and smart documentation help teams collaborate better."
				benefits={benefits}
				layout="grid"
			/>

			<ProductUseCases
				label="Use Cases"
				title="Built for inclusive, productive meetings"
				description="Whether for accessibility or efficiency, live captions and AI summaries transform how teams meet."
				useCases={useCases}
			/>

			<ProductCTA
				icon={Captions}
				title="Make your meetings accessible"
				description="Join organizations using Melp to create inclusive, well-documented meetings."
				primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
				secondaryCta={{ text: "Schedule Demo", href: "/contact" }}
				features={[
					"Live captions",
					"AI summaries",
					"Action items",
					"Full transcripts",
				]}
			/>
		</div>
	);
}
