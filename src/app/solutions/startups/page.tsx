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
	Rocket,
	Handshake,
	Briefcase,
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
		title: "AI summaries",
		description: "Catch up on any project in seconds.",
		icon: Zap,
	},
	{
		title: "Unified search",
		description: "Find messages, files, and notes instantly.",
		icon: Search,
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

export default function StartupsPage() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				<SolutionsHero
					badge="Startups"
					title="A platform built for"
					highlightedText="speed and growth"
					description="Melp gives startups the essential collaboration and communication tools they need to scale faster. Move quicker, stay organized, and break barriers without breaking your budget."
					primaryCta={{ text: "Get started for FREE", href: "/get-started" }}
					trustText="No credit card required"
				/>

				{/* Challenge Section - Custom for Startups */}
				<section className="py-16 sm:py-24 bg-muted/30">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<span className="inline-block text-sm font-medium text-destructive mb-4 tracking-wider uppercase">
									The Traditional Way
								</span>
								<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
									Startups need to move fast, but tools often{" "}
									<span className="text-destructive">slow you down.</span>
								</h2>
								<p className="text-lg text-muted-foreground mb-4">
									When every new hire adds another app, things quickly get
									messy.
								</p>
								<p className="text-lg text-muted-foreground mb-4">
									Chat in one place, files in another, meetings in a third… and
									before you know it, your small team is drowning in big
									inefficiencies.
								</p>
							</div>
							<div className="relative aspect-square rounded-2xl bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20 overflow-hidden">
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="relative w-3/4 h-3/4">
										{[...Array(5)].map((_, i) => (
											<div
												key={i}
												className="absolute rounded-lg bg-destructive/10 border border-destructive/20 w-20 h-20 animate-pulse"
												style={{
													top: `${20 + i * 10}%`,
													left: `${10 + i * 15}%`,
													animationDelay: `${i * 0.2}s`,
												}}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Melp Solution - Custom for Startups */}
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
									Replace tool chaos with one{" "}
									<span className="text-primary">AI-powered workplace</span>
								</h2>
								<p className="text-lg text-muted-foreground mb-4">
									Melp replaces this tool chaos with one AI-powered workplace
									built for startups.
								</p>
								<p className="text-lg text-muted-foreground mb-4">
									Chat, meet, create, store, and share, all in one secure
									platform that grows with you.
								</p>
								<p className="text-lg text-muted-foreground">
									Simple to launch, easy to scale, and priced for teams that
									move fast.
								</p>
							</div>
						</div>
					</div>
				</section>

				<FeatureHighlightSection
					badge="Melp AI"
					title="Your built-in co-pilot"
					subtitle="Unlike other platforms that make you pay extra for AI, we include it from day one. Automate meeting notes, translate in real time, and turn conversations into clear action points."
					features={aiFeatures}
					ctaText="Replace tool chaos with Melp"
					ctaHref="/get-started"
				/>

				<FeatureHighlightSection
					badge="Communicate"
					title="Communicate faster"
					subtitle="Stay connected, wherever you're building from. With Melp, your entire team, be it remote or hybrid, can collaborate in real time."
					features={communicationFeatures}
					ctaText="Try Melp for Free"
					ctaHref="/get-started"
					reversed
				/>

				<FeatureHighlightSection
					badge="Collaborate"
					title="Collaborate better"
					subtitle="Build together in real time. From early ideas to investor updates, Melp keeps every document, slide, and spreadsheet safe and organized."
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
									{[Rocket, Handshake, Briefcase].map((Icon, i) => (
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
					subtitle="Your data deserves enterprise-grade protection, at a startup-friendly budget. Melp keeps your business data private, compliant, and always secure."
					features={securityFeatures}
					badges={["SOC 2", "HIPAA", "ISO 27001", "GDPR"]}
				/>

				{/* Global Collaboration */}
				<section className="py-16 sm:py-24 bg-background">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
									Work across borders,{" "}
									<span className="text-primary">without barriers</span>
								</h2>
								<p className="text-lg text-muted-foreground mb-4">
									Hire and collaborate globally from day one.
								</p>
								<p className="text-lg text-muted-foreground">
									Melp&apos;s real-time translation and cross-company
									collaboration let you work seamlessly with clients, investors,
									and partners, wherever they are.
								</p>
							</div>
							<div className="relative aspect-square rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/20 overflow-hidden">
								<div className="absolute inset-0 flex items-center justify-center">
									<Globe className="w-32 h-32 text-primary" />
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Integrations */}
				<section className="py-16 sm:py-24 bg-muted/30">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
							Integrate your{" "}
							<span className="text-primary">favorite tools</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
							Melp works alongside Google Drive, OneDrive, Outlook, and
							Microsoft 365 — so you can keep your favorite tools while
							simplifying how you use them.
						</p>
						<div className="flex flex-wrap justify-center gap-6">
							{["Google Drive", "OneDrive", "Outlook", "Microsoft 365"].map(
								(tool, i) => (
									<div
										key={i}
										className="px-6 py-4 bg-card rounded-xl border border-border shadow-sm"
									>
										<span className="font-medium text-foreground">{tool}</span>
									</div>
								)
							)}
						</div>
					</div>
				</section>

				<SolutionsCTA
					title="Scale faster. Spend less."
					subtitle="Launch in days, not weeks. Join the new generation of founders using Melp to streamline communication, cut costs, and grow without limits."
					primaryCta={{ text: "Try Melp for Free", href: "/get-started" }}
				/>
			</main>
			<Footer />
		</div>
	);
}
