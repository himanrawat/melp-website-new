"use client";

import {
	ProductHero,
	ProductFeatures,
	ProductBenefits,
	ProductUseCases,
	ProductCTA,
} from "@/components/product";
import {
	Globe,
	MessageCircle,
	Phone,
	Zap,
	Users,
	Brain,
	Clock,
	Building2,
	Handshake,
} from "lucide-react";

const features = [
	{
		title: "Automatic Message Translation",
		description:
			"Incoming messages are instantly translated to your preferred language. Reply in your language, and it's translated back.",
		icon: MessageCircle,
	},
	{
		title: "Live Call Translation",
		description:
			"Real-time translation during audio and video calls. Speak naturally while AI handles interpretation.",
		icon: Phone,
	},
	{
		title: "90+ Language Support",
		description:
			"Comprehensive language coverage for global teams. From major world languages to regional dialects.",
		icon: Globe,
	},
	{
		title: "Context-Aware Translation",
		description:
			"AI understands industry terminology, slang, and context for more accurate, natural translations.",
		icon: Brain,
	},
	{
		title: "Instant Processing",
		description:
			"Near-zero latency translation that keeps conversations flowing naturally without awkward pauses.",
		icon: Zap,
	},
	{
		title: "Seamless Integration",
		description:
			"Translation happens automatically within your existing chat and call workflows. No switching apps.",
		icon: Users,
	},
];

const benefits = [
	{
		title: "Better Global Collaboration",
		description:
			"Teams across continents can collaborate as naturally as if they shared an office. Language differences become invisible.",
		icon: Users,
	},
	{
		title: "Lower Miscommunication Risk",
		description:
			"AI-powered translation catches nuances that manual translation might miss. Critical details don't get lost in translation.",
		icon: Brain,
	},
	{
		title: "Faster Decision Making",
		description:
			"No waiting for translators or interpreters. Real-time translation means decisions can be made in the moment.",
		icon: Clock,
	},
];

const useCases = [
	{
		title: "Global Enterprises",
		description:
			"Enable seamless communication between headquarters and regional offices in different countries.",
		icon: Building2,
		badge: "Enterprise",
	},
	{
		title: "International Partnerships",
		description:
			"Collaborate with clients, vendors, and partners worldwide without language barriers.",
		icon: Handshake,
	},
	{
		title: "Distributed Teams",
		description:
			"Hire the best talent globally without language being a limiting factor.",
		icon: Globe,
	},
];

export default function TranslationsPage() {
	return (
		<div className="bg-background">
			<ProductHero
				icon={Globe}
				badge="Real-Time Translation"
				title="Break Language Barriers"
				highlightedText="Instantly"
				description="Melp enables real-time translation directly within chats and live calls — so teams can communicate in different languages without stopping to interpret. Ideal for global organizations where language diversity should never block collaboration."
				features={[
					"Automatic translation of incoming messages",
					"Live translation during audio/video calls",
					"90+ languages supported",
					"Context-aware for accurate meaning",
				]}
				primaryCta={{ text: "Try Translation Free", href: "/pricing" }}
				secondaryCta={{ text: "See Demo", href: "#demo" }}
				gradient="from-green-500/20 via-green-500/5 to-transparent"
			/>

			<ProductFeatures
				label="How It Helps"
				title="Translation that keeps up with conversation"
				description="Our AI-powered translation understands context, industry terms, and natural speech patterns for truly effective communication."
				features={features}
			/>

			<ProductBenefits
				label="Outcomes You'll See"
				title="Enable international teams to operate naturally"
				description="When language barriers disappear, collaboration flourishes."
				benefits={benefits}
				layout="alternating"
			/>

			<ProductUseCases
				label="Perfect For"
				title="Built for global organizations"
				description="From multinational enterprises to international partnerships, Melp translation removes language as a barrier."
				useCases={useCases}
			/>

			<ProductCTA
				icon={Globe}
				title="Ready to go truly global?"
				description="Join thousands of international teams communicating seamlessly with Melp."
				primaryCta={{ text: "Start Translating Free", href: "/pricing" }}
				secondaryCta={{ text: "Schedule Demo", href: "/contact" }}
				features={[
					"90+ languages",
					"Live call translation",
					"Instant processing",
					"Context-aware AI",
				]}
			/>
		</div>
	);
}
