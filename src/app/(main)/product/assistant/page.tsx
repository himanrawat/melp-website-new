"use client";

import {
	ProductHero,
	ProductFeatures,
	ProductBenefits,
	ProductUseCases,
	ProductCTA,
} from "@/components/product";
import {
	Bot,
	MessageCircleQuestion,
	Zap,
	Clock,
	BookOpen,
	Lightbulb,
	Headphones,
	LifeBuoy,
	Sparkles,
	Search,
	HelpCircle,
	Brain,
} from "lucide-react";

const features = [
	{
		title: "24/7 Instant Support",
		description:
			"Get help anytime, day or night. MelpAssistant is always available to answer questions.",
		icon: Clock,
	},
	{
		title: "Context-Aware Help",
		description:
			"MelpAssistant understands what you're working on and provides relevant suggestions.",
		icon: Brain,
	},
	{
		title: "Feature Guidance",
		description:
			"Learn how to use any Melp feature with step-by-step guidance from your AI assistant.",
		icon: BookOpen,
	},
	{
		title: "Smart Suggestions",
		description:
			"Get proactive tips and recommendations to work smarter and more efficiently.",
		icon: Lightbulb,
	},
	{
		title: "Self-Serve Troubleshooting",
		description:
			"Resolve common issues instantly without waiting for human support.",
		icon: LifeBuoy,
	},
	{
		title: "Quick Answers",
		description:
			"Ask anything about Melp and get accurate, instant answers in natural language.",
		icon: MessageCircleQuestion,
	},
];

const benefits = [
	{
		title: "Instant Answers, Always",
		description:
			"No waiting for support tickets. Get the help you need the moment you need it.",
		icon: Zap,
	},
	{
		title: "Learn as You Work",
		description:
			"Discover features and best practices naturally through contextual suggestions.",
		icon: Sparkles,
	},
	{
		title: "Reduce Support Load",
		description:
			"Self-serve troubleshooting means fewer tickets for your IT team to handle.",
		icon: Headphones,
	},
];

const useCases = [
	{
		title: "New User Onboarding",
		description:
			"Help new team members learn Melp quickly with guided, interactive assistance.",
		icon: BookOpen,
		badge: "Popular",
	},
	{
		title: "Feature Discovery",
		description:
			"Ask MelpAssistant how to do something and discover features you didn't know existed.",
		icon: Search,
	},
	{
		title: "Quick Troubleshooting",
		description:
			"Resolve issues fast with AI-powered diagnostics and step-by-step fixes.",
		icon: HelpCircle,
	},
];

export default function AssistantPage() {
	return (
		<div className="bg-background">
			<ProductHero
				icon={Bot}
				badge="Built-In AI Assistant"
				title="Meet Your Personal"
				highlightedText="MelpAssistant"
				description="MelpAssistant is your built-in AI helper, available 24/7 to answer questions, guide you through features, and help you troubleshoot — all without leaving the app."
				features={[
					"24/7 instant in-app support",
					"Context-aware assistance",
					"Feature guidance & tips",
					"Self-serve troubleshooting",
				]}
				primaryCta={{ text: "Try MelpAssistant", href: "/pricing" }}
				secondaryCta={{ text: "See Demo", href: "#demo" }}
				gradient="from-emerald-500/20 via-emerald-500/5 to-transparent"
			/>

			<ProductFeatures
				label="Capabilities"
				title="Your AI-powered help center"
				description="MelpAssistant combines the knowledge of a support team with the speed of AI."
				features={features}
			/>

			<ProductBenefits
				label="Benefits"
				title="Support that scales with your team"
				description="Empower users to find answers themselves while reducing support overhead."
				benefits={benefits}
				layout="alternating"
			/>

			<ProductUseCases
				label="Perfect For"
				title="AI assistance for every situation"
				description="From onboarding to troubleshooting, MelpAssistant is there when you need it."
				useCases={useCases}
			/>

			<ProductCTA
				icon={Bot}
				title="Ready to meet your AI assistant?"
				description="Join teams using MelpAssistant to get instant help and work smarter."
				primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
				secondaryCta={{ text: "Schedule Demo", href: "/contact" }}
				features={[
					"24/7 availability",
					"Context-aware help",
					"Feature guidance",
					"Self-serve support",
				]}
			/>
		</div>
	);
}
