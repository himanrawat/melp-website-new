"use client";

import {
	ProductHero,
	ProductFeatures,
	ProductBenefits,
	ProductUseCases,
	ProductCTA,
} from "@/components/product";
import {
	MessageCircle,
	Users,
	Bell,
	RefreshCw,
	Mail,
	Search,
	Zap,
	Globe,
	Building2,
	Laptop,
} from "lucide-react";

const features = [
	{
		title: "Topic-Based Threads",
		description:
			"Keep discussions organized by project, topic, or context. Never lose important conversations in endless chat streams.",
		icon: MessageCircle,
	},
	{
		title: "One-on-One & Group Chats",
		description:
			"Flexible conversation styles for every situation — from quick DMs to full team discussions.",
		icon: Users,
	},
	{
		title: "Smart Notifications",
		description:
			"AI-powered notifications that surface important messages when you need them, reducing noise and distraction.",
		icon: Bell,
	},
	{
		title: "Real-Time Sync",
		description:
			"Stay connected across all devices with instant message synchronization. Never miss a beat.",
		icon: RefreshCw,
	},
	{
		title: "Searchable History",
		description:
			"Find any message, file, or conversation instantly with powerful search across your entire chat history.",
		icon: Search,
	},
	{
		title: "Lightning Fast",
		description:
			"Built for speed with optimistic updates and real-time delivery. Messages arrive in milliseconds.",
		icon: Zap,
	},
];

const benefits = [
	{
		title: "Eliminate Endless Email Chains",
		description:
			"Stop drowning in email threads. Group chat keeps conversations flowing naturally without the formality and delays of traditional email.",
		icon: Mail,
	},
	{
		title: "Keep Conversations Relevant & Searchable",
		description:
			"Every message is indexed and searchable. Find what you need in seconds, not hours. Context is always preserved.",
		icon: Search,
	},
	{
		title: "Smooth Context-Rich Exchanges",
		description:
			"Support fast-moving environments with real-time messaging that keeps everyone on the same page, no matter how fast things change.",
		icon: Zap,
	},
];

const useCases = [
	{
		title: "Cross-Functional Communication",
		description:
			"Break down silos between departments. Engineering, design, marketing, and sales can collaborate in dedicated channels.",
		icon: Building2,
		badge: "Popular",
	},
	{
		title: "Remote Team Syncs",
		description:
			"Keep distributed teams connected with async-friendly messaging that works across time zones.",
		icon: Globe,
	},
	{
		title: "Project Coordination",
		description:
			"Organize conversations around projects, milestones, and deliverables for crystal-clear context.",
		icon: Laptop,
	},
];

export default function ChatPage() {
	return (
		<div className="bg-background">
			<ProductHero
				icon={MessageCircle}
				badge="Real-Time Communication"
				title="Group Chat & Messaging Built for"
				highlightedText="Productivity"
				description="Communicate instantly across departments, projects, and topics — all in one organized space. Whether it's everyday coordination or urgent problem-solving, Melp keeps conversations flowing without fragmentation."
				features={[
					"Topic-based threads for organized discussions",
					"Smart notifications that surface what matters",
					"Real-time sync across all your devices",
					"Powerful search across entire chat history",
				]}
				primaryCta={{ text: "Start Messaging Free", href: "/pricing" }}
				secondaryCta={{ text: "Watch Demo", href: "#demo" }}
				gradient="from-blue-500/20 via-blue-500/5 to-transparent"
			/>

			<ProductFeatures
				label="What Makes It Powerful"
				title="Everything you need for seamless team communication"
				description="Melp Chat is designed from the ground up for modern teams who need speed, organization, and clarity."
				features={features}
			/>

			<ProductBenefits
				label="Why Teams Love It"
				title="Communication that actually works"
				description="Transform how your team communicates with features designed for the way modern teams work."
				benefits={benefits}
				layout="alternating"
			/>

			<ProductUseCases
				label="Perfect For"
				title="Built for every team scenario"
				description="From startups to enterprises, Melp Chat adapts to your workflow."
				useCases={useCases}
			/>

			<ProductCTA
				icon={MessageCircle}
				title="Ready to transform team communication?"
				description="Join thousands of teams already using Melp to communicate more effectively."
				primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
				secondaryCta={{ text: "Schedule Demo", href: "/contact" }}
				features={[
					"Instant messaging",
					"Topic threads",
					"Smart notifications",
					"Cross-device sync",
				]}
			/>
		</div>
	);
}
