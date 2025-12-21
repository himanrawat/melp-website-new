"use client";

import {
	ProductHero,
	ProductFeatures,
	ProductBenefits,
	ProductUseCases,
	ProductCTA,
} from "@/components/product";
import {
	Users,
	MessageCircle,
	Phone,
	Hash,
	FolderOpen,
	Zap,
	Target,
	Eye,
	Building2,
	Briefcase,
	Layers,
} from "lucide-react";

const features = [
	{
		title: "Topic-Focused Chats",
		description:
			"Create dedicated spaces for specific topics, projects, or initiatives. Keep discussions organized and relevant.",
		icon: Hash,
	},
	{
		title: "Dynamic Team Creation",
		description:
			"Spin up new teams instantly as projects evolve. Add or remove members with a click.",
		icon: Users,
	},
	{
		title: "Group Calls",
		description:
			"Start video or voice calls directly from team channels. No switching apps or sharing links.",
		icon: Phone,
	},
	{
		title: "Shared Resources",
		description:
			"Pin important files, links, and documents to team channels for easy access by all members.",
		icon: FolderOpen,
	},
	{
		title: "Thread Discussions",
		description:
			"Keep detailed discussions in threads to prevent channel clutter while maintaining context.",
		icon: MessageCircle,
	},
	{
		title: "Cross-Team Visibility",
		description:
			"Connect related teams and topics for cross-functional visibility without noise.",
		icon: Layers,
	},
];

const benefits = [
	{
		title: "Faster Issue Resolution",
		description:
			"When everyone relevant is in the same space, problems get solved faster. No hunting for the right person.",
		icon: Zap,
	},
	{
		title: "Higher Context Visibility",
		description:
			"New team members can catch up by scrolling through topic history. Onboarding becomes self-serve.",
		icon: Eye,
	},
	{
		title: "Reduced Project Confusion",
		description:
			"When conversations are organized by topic, nothing gets lost. Every discussion has a home.",
		icon: Target,
	},
];

const useCases = [
	{
		title: "Project Teams",
		description:
			"Create a team for each project with topic channels for different workstreams.",
		icon: Building2,
		badge: "Popular",
	},
	{
		title: "Department Coordination",
		description:
			"Give each department their own space with channels for initiatives, announcements, and discussions.",
		icon: Briefcase,
	},
	{
		title: "Cross-Functional Initiatives",
		description:
			"Bring together members from different teams around shared goals and projects.",
		icon: Layers,
	},
];

export default function TeamsPage() {
	return (
		<div className="bg-background">
			<ProductHero
				icon={Users}
				badge="Teams, Topics & Breakout Groups"
				title="Structure Conversations Around"
				highlightedText="Work"
				description="Melp lets you create Teams and Topics so every discussion stays organized and in context. Instead of chaotic messaging, you get topic-based conversations that match your workflows."
				features={[
					"Topic-focused chats keep discussions organized",
					"Dynamic team creation for evolving projects",
					"Group calls tied to workstreams",
					"Shared resources pinned to channels",
				]}
				primaryCta={{ text: "Create Your Team", href: "/pricing" }}
				secondaryCta={{ text: "See Demo", href: "#demo" }}
				gradient="from-cyan-500/20 via-cyan-500/5 to-transparent"
			/>

			<ProductFeatures
				label="Feature Highlights"
				title="Organization that matches how you work"
				description="Teams and Topics create structure without rigidity. Adapt as your work evolves."
				features={features}
			/>

			<ProductBenefits
				label="Business Outcomes"
				title="Stay organized. Stay productive."
				description="When communication is structured, work flows better."
				benefits={benefits}
				layout="grid"
			/>

			<ProductUseCases
				label="Perfect For"
				title="Built for every organizational structure"
				description="From project teams to cross-functional initiatives, Melp adapts to your needs."
				useCases={useCases}
			/>

			<ProductCTA
				icon={Users}
				title="Ready to organize your team?"
				description="Join thousands of teams working more productively with Melp."
				primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
				secondaryCta={{ text: "Schedule Demo", href: "/contact" }}
				features={[
					"Topic channels",
					"Dynamic teams",
					"Group calls",
					"Shared resources",
				]}
			/>
		</div>
	);
}
