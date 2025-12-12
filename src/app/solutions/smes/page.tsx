"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import FeatureHighlightSection from "@/components/solutions/FeatureHighlightSection";
import SecurityComplianceSection from "@/components/solutions/SecurityComplianceSection";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";
import {
	FileText,
	Globe,
	PenTool,
	Bot,
	MessageCircle,
	Video,
	Calendar,
	Cloud,
	FileSpreadsheet,
	Palette,
	Search,
	Zap,
	Building2,
	Handshake,
	Home,
} from "lucide-react";

const aiFeatures = [
	{
		title: "AI meeting summaries & transcripts",
		description: "Get instant notes after every call.",
		icon: FileText,
	},
	{
		title: "Smart speech-to-text translation",
		description: "Collaborate seamlessly in 90+ languages.",
		icon: Globe,
	},
	{
		title: "Writing assistant",
		description: "Draft proposals, emails, or reports in seconds.",
		icon: PenTool,
	},
	{
		title: "24/7 Melp Assistant",
		description:
			"Ask questions, find files, or get instant support without waiting in line.",
		icon: Bot,
	},
];

const communicationFeatures = [
	{
		title: "Chat & messaging",
		description: "Real-time translation and searchable history.",
		icon: MessageCircle,
	},
	{
		title: "Video meetings",
		description:
			"HD quality, whiteboards, breakout rooms, and unlimited recording.",
		icon: Video,
	},
	{
		title: "Smart calendar",
		description:
			"Schedule meetings across time zones and avoid double bookings.",
		icon: Calendar,
	},
	{
		title: "Melp Drive",
		description:
			"Secure cloud storage that keeps everything organized and accessible.",
		icon: Cloud,
	},
];

const collaborationFeatures = [
	{
		title: "Melp Suite",
		description: "Work on docs, sheets, and slides in real time.",
		icon: FileSpreadsheet,
	},
	{
		title: "Whiteboards",
		description: "Map ideas, brainstorm, and plan visually.",
		icon: Palette,
	},
	{
		title: "Unified search",
		description: "Find messages, files, and notes instantly.",
		icon: Search,
	},
	{
		title: "AI summaries",
		description: "Catch up on any project in seconds.",
		icon: Zap,
	},
];

const securityFeatures = [
	{
		title: "End-to-end encryption",
		description: "All chats, calls, and files are fully encrypted.",
	},
	{
		title: "Enterprise compliance",
		description: "SOC 2, HIPAA, ISO 27001, and GDPR compliant.",
	},
	{
		title: "Granular admin controls",
		description: "Role-based access and permission management.",
	},
	{
		title: "Flexible deployment",
		description: "Cloud or on-premises deployment options.",
	},
];

export default function SMEsPage() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				<SolutionsHero
					badge="Small & Medium Enterprises"
					title="A platform that works as"
					highlightedText="hard as you do"
					description="Melp brings all the must-have tools your team needs to collaborate and communicate into one AI-powered digital workplace. At a price that makes sense for a growing business like yours."
					primaryCta={{ text: "Get started for FREE", href: "/get-started" }}
					trustText="No credit card required"
				/>

				{/* Challenge Section - Custom for SMEs */}
				<section className="py-16 sm:py-24 bg-muted/30">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
									The traditional way of working is{" "}
									<span className="text-destructive">chaotic.</span>
								</h2>
								<p className="text-lg text-muted-foreground mb-4">
									Growing businesses often rely on too many tools: one for chat,
									another for meetings, and another for storage, another for
									translations, and so on.
								</p>
								<p className="text-lg text-muted-foreground mb-4">
									It works at first, but as your team and client list grow,
									things get messy.
								</p>
								<p className="text-lg text-muted-foreground">
									Work spreads across apps, subscriptions pile up, and being
									inefficient starts to cost real money.
								</p>
							</div>
							<div className="relative aspect-square rounded-2xl bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20 overflow-hidden">
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="grid grid-cols-3 gap-3 p-8 w-full h-full">
										{[...Array(9)].map((_, i) => (
											<div
												key={i}
												className="rounded-lg bg-destructive/10 border border-destructive/20 animate-pulse"
												style={{ animationDelay: `${i * 0.1}s` }}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Melp Solution - Custom for SMEs */}
				<section className="py-16 sm:py-24 bg-background">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 overflow-hidden order-2 lg:order-1">
								<div className="absolute inset-0 flex items-center justify-center p-8">
									<div className="w-full h-full rounded-xl bg-card border border-border shadow-2xl overflow-hidden">
										<div className="h-8 bg-muted border-b border-border flex items-center px-4 gap-2">
											<div className="w-3 h-3 rounded-full bg-destructive/50" />
											<div className="w-3 h-3 rounded-full bg-yellow-500/50" />
											<div className="w-3 h-3 rounded-full bg-green-500/50" />
										</div>
										<div className="p-4 h-[calc(100%-2rem)] flex gap-3">
											<div className="w-16 bg-muted rounded-lg" />
											<div className="flex-1 bg-muted/50 rounded-lg" />
										</div>
									</div>
								</div>
							</div>
							<div className="order-1 lg:order-2">
								<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
									The Melp Way
								</span>
								<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
									This is where <span className="text-primary">Melp</span> comes
									in
								</h2>
								<p className="text-lg text-muted-foreground mb-4">
									Melp brings everything together in one secure, AI-powered
									workplace built for SMEs.
								</p>
								<p className="text-lg text-muted-foreground mb-4">
									Chat, meet, store, share, and create without jumping between
									apps or paying for add-ons you don&apos;t need.
								</p>
								<p className="text-lg text-muted-foreground">
									It&apos;s simple to set up, easy to manage, and affordable as
									you grow.
								</p>
							</div>
						</div>
					</div>
				</section>

				<FeatureHighlightSection
					badge="Melp AI"
					title="A built-in partner"
					subtitle="Unlike other platforms that make you pay extra for AI, we include it from day one. Automate meeting notes, translate in real time, and turn conversations into clear action points."
					features={aiFeatures}
					ctaText="Replace tool chaos with Melp"
					ctaHref="/get-started"
				/>

				<FeatureHighlightSection
					badge="Communicate"
					title="Communicate better"
					subtitle="Keep every message, meeting, and file in one place. With Melp, your team can stay connected and organized wherever they work."
					features={communicationFeatures}
					ctaText="Try Melp for Free"
					ctaHref="/get-started"
					reversed
				/>

				<FeatureHighlightSection
					badge="Collaborate"
					title="Collaborate better"
					subtitle="Create, share, and edit together without paying for multiple tools. Melp helps your team move faster, no matter where or how you work."
					features={collaborationFeatures}
					ctaText="Try Melp for Free"
					ctaHref="/get-started"
				/>

				{/* Cross-Company Collaboration */}
				<section className="py-16 sm:py-24 bg-muted/30">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
							Work across companies{" "}
							<span className="text-primary">without limits</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
							Invite clients, vendors, and external partners to collaborate in
							your workplace, at no extra cost. With Melp, you can keep projects
							moving without worrying about extra licenses or security breaches.
						</p>
						<div className="relative aspect-video max-w-4xl mx-auto rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/20 overflow-hidden">
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="flex gap-8">
									{[Building2, Handshake, Home].map((Icon, i) => (
										<div
											key={Icon.displayName || i}
											className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center"
										>
											<Icon className="w-10 h-10 text-primary" />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				<SecurityComplianceSection
					title="Stay secure while you scale"
					subtitle="Your data deserves enterprise-grade protection, even if you're not an enterprise. Melp keeps your business data private, compliant, and always secure."
					features={securityFeatures}
					badges={["SOC 2", "HIPAA", "ISO 27001", "GDPR"]}
				/>

				<SolutionsCTA
					title="Work smarter. Spend less."
					subtitle="Join the growing number of small and mid-sized businesses using Melp to save time, reduce costs, and simplify collaboration."
					primaryCta={{ text: "Get started for free", href: "/get-started" }}
				/>
			</main>
			<Footer />
		</div>
	);
}
