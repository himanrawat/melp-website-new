"use client";

import {
	ProductHero,
	ProductFeatures,
	ProductBenefits,
	ProductUseCases,
	ProductCTA,
} from "@/components/product";
import {
	Video,
	Mic,
	Subtitles,
	Users,
	Boxes,
	Monitor,
	Wifi,
	Shield,
	Globe,
	Building2,
	Home,
} from "lucide-react";

const features = [
	{
		title: "HD Video & Voice",
		description:
			"Crystal-clear video and audio quality that makes every participant feel present. Up to 4K resolution support.",
		icon: Video,
	},
	{
		title: "Live Captions",
		description:
			"Real-time captions help everyone follow along, regardless of hearing ability or language preference.",
		icon: Subtitles,
	},
	{
		title: "Breakout Rooms",
		description:
			"Split large meetings into smaller focused groups for workshops, brainstorming, or team discussions.",
		icon: Boxes,
	},
	{
		title: "Screen Sharing",
		description:
			"Share your entire screen, specific windows, or individual tabs with one click. Annotate in real-time.",
		icon: Monitor,
	},
	{
		title: "No Downloads Required",
		description:
			"Join meetings directly from your browser. No apps, no plugins, no IT headaches.",
		icon: Wifi,
	},
	{
		title: "Enterprise Security",
		description:
			"End-to-end encryption, waiting rooms, and host controls keep your meetings secure and private.",
		icon: Shield,
	},
];

const benefits = [
	{
		title: "No Hardware Needed",
		description:
			"High-quality meetings with just a browser and built-in camera. No expensive video conferencing equipment required.",
		icon: Monitor,
	},
	{
		title: "No Codes or PINs",
		description:
			"Simple meeting links that work every time. No more confused participants struggling with access codes.",
		icon: Wifi,
	},
	{
		title: "One Platform, All Meetings",
		description:
			"From 1:1 calls to company-wide town halls — one tool handles it all. No switching between apps.",
		icon: Users,
	},
];

const useCases = [
	{
		title: "Remote Teams",
		description:
			"Keep distributed teams connected with face-to-face communication that builds trust and rapport.",
		icon: Globe,
		badge: "Popular",
	},
	{
		title: "Hybrid Workplaces",
		description:
			"Bridge the gap between in-office and remote workers with seamless video conferencing.",
		icon: Building2,
	},
	{
		title: "Client Meetings",
		description:
			"Present professionally to clients with reliable, high-quality video that makes a great impression.",
		icon: Home,
	},
];

export default function ConferencingPage() {
	return (
		<div className="bg-background">
			<ProductHero
				icon={Video}
				badge="Voice & Video Conferencing"
				title="High-Quality Meetings —"
				highlightedText="No Hardware Needed"
				description="Melp's integrated voice and video conferencing lets teams connect live without codes, pins, or third-party tools. Every call feels seamless and responsive, from quick check-ins to full-team presentations."
				features={[
					"HD voice and video for clear communication",
					"Built-in live captions for accessibility",
					"Breakout rooms for focused collaboration",
					"No downloads or plugins required",
				]}
				primaryCta={{ text: "Start Meeting Free", href: "/pricing" }}
				secondaryCta={{ text: "Watch Demo", href: "#demo" }}
				gradient="from-indigo-500/20 via-indigo-500/5 to-transparent"
			/>

			<ProductFeatures
				label="Standout Features"
				title="Everything you need for better meetings"
				description="Built for real work, Melp Conferencing removes the friction from video meetings so you can focus on what matters."
				features={features}
			/>

			<ProductBenefits
				label="Designed For Real Work"
				title="Meetings that just work"
				description="Teams can host 1:1 calls, team meetings, or large conferences with ease — no siloed apps required."
				benefits={benefits}
				layout="grid"
			/>

			<ProductUseCases
				label="Perfect For"
				title="Bring everyone together in one place"
				description="Remote, hybrid, and distributed teams all benefit from seamless video conferencing."
				useCases={useCases}
			/>

			<ProductCTA
				icon={Video}
				title="Ready for better meetings?"
				description="Join thousands of teams running more effective meetings with Melp."
				primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
				secondaryCta={{ text: "Schedule Demo", href: "/contact" }}
				features={[
					"HD video",
					"Live captions",
					"Breakout rooms",
					"No downloads",
				]}
			/>
		</div>
	);
}
