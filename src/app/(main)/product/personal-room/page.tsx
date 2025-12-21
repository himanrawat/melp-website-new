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
	Link,
	Video,
	Clock,
	Boxes,
	MessageCircle,
	Bookmark,
	Zap,
	GraduationCap,
	Heart,
	UsersRound,
} from "lucide-react";

const features = [
	{
		title: "Persistent Personal Link",
		description:
			"Your personal room link never changes. Share it once, use it forever. No new links for every meeting.",
		icon: Link,
	},
	{
		title: "Always-On Space",
		description:
			"Your room is always ready. Team members can join anytime without scheduling or waiting for approval.",
		icon: Clock,
	},
	{
		title: "Breakout Rooms",
		description:
			"Split large sessions into smaller focused groups. Perfect for workshops, training, and collaborative sessions.",
		icon: Boxes,
	},
	{
		title: "Integrated Chat",
		description:
			"Persistent chat in your room keeps context across meetings. Questions and notes are always there.",
		icon: MessageCircle,
	},
	{
		title: "Guest Access",
		description:
			"Invite external partners, clients, or collaborators with secure, controlled access to your room.",
		icon: Users,
	},
	{
		title: "Recording & Playback",
		description:
			"Record sessions for those who couldn't attend. Automatic transcripts make content searchable.",
		icon: Video,
	},
];

const benefits = [
	{
		title: "No Scheduling Required",
		description:
			"Your room is always open. Drop in for quick conversations, office hours, or spontaneous collaboration.",
		icon: Clock,
	},
	{
		title: "Same Link, Every Time",
		description:
			"No more sharing new links for every meeting. Your personal link becomes your virtual office address.",
		icon: Link,
	},
	{
		title: "Dynamic Collaboration",
		description:
			"Break into smaller groups on the fly. Reconvene when ready. Keeps large sessions productive.",
		icon: Boxes,
	},
];

const useCases = [
	{
		title: "Teaching & Training",
		description:
			"Host classes, workshops, and training sessions with breakout rooms for group exercises.",
		icon: GraduationCap,
		badge: "Education",
	},
	{
		title: "Mentorship & Coaching",
		description:
			"Create a consistent space for 1:1 sessions. Your mentees always know where to find you.",
		icon: Heart,
	},
	{
		title: "Peer Discussions",
		description:
			"Quick check-ins, pair programming, design reviews — all in your always-available room.",
		icon: UsersRound,
	},
];

export default function PersonalRoomPage() {
	return (
		<div className="bg-background">
			<ProductHero
				icon={Users}
				badge="Personal Room & Breakout Spaces"
				title="Your Always-On"
				highlightedText="Meeting Space"
				description="Each Melp user gets a dedicated Personal Room — a persistent meeting hub that team members or external partners can join anytime. No scheduling or codes necessary."
				features={[
					"Personal link stays the same, every meeting",
					"Perfect for recurring conversations",
					"Breakout rooms for focused group work",
					"Instant access for invited participants",
				]}
				primaryCta={{ text: "Get Your Room", href: "/pricing" }}
				secondaryCta={{ text: "See How It Works", href: "#demo" }}
				gradient="from-rose-500/20 via-rose-500/5 to-transparent"
			/>

			<ProductFeatures
				label="Key Features"
				title="Your virtual office, always ready"
				description="Personal Rooms give you a persistent space that's uniquely yours."
				features={features}
			/>

			<ProductBenefits
				label="Benefits"
				title="Keep collaboration dynamic and on-demand"
				description="No more scheduling overhead. Your room is ready when you are."
				benefits={benefits}
				layout="alternating"
			/>

			<ProductUseCases
				label="Ideal For"
				title="Built for every collaboration style"
				description="From formal training to casual catch-ups, Personal Rooms adapt to your needs."
				useCases={useCases}
			/>

			<ProductCTA
				icon={Users}
				title="Ready for your own meeting space?"
				description="Join thousands of professionals with their own virtual office."
				primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
				secondaryCta={{ text: "Schedule Demo", href: "/contact" }}
				features={[
					"Persistent link",
					"Breakout rooms",
					"Guest access",
					"Recording",
				]}
			/>
		</div>
	);
}
