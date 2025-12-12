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
	Factory,
	Store,
	Landmark,
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
		description: "Real-time communication and searchable history.",
		icon: MessageCircle,
	},
	{
		title: "HD video conferencing",
		description:
			"Unlimited meetings, recordings, and streaming for global events.",
		icon: Video,
	},
	{
		title: "Smart calendar",
		description: "Manage scheduling across departments and time zones.",
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

export default function EnterprisesPage() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				<SolutionsHero
					badge="Enterprises"
					title="A platform for total control and"
					highlightedText="limitless collaboration"
					description="Melp gives enterprises the freedom to collaborate securely across teams, partners, and subsidiaries, with built-in compliance, enterprise-grade security, and flexible cloud or on-prem deployment available."
					primaryCta={{ text: "Get started for FREE", href: "/get-started" }}
					trustText="No credit card required"
				/>

				{/* Challenge Section - Custom for Enterprises */}
				<section className="py-16 sm:py-24 bg-muted/30">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<span className="inline-block text-sm font-medium text-destructive mb-4 tracking-wider uppercase">
									The Traditional Way
								</span>
								<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
									The traditional way of working is{" "}
									<span className="text-destructive">chaotic.</span>
								</h2>
								<p className="text-lg text-muted-foreground mb-4">
									Most enterprises operate across multiple systems, tools, and
									subsidiaries, but their collaboration platforms weren&apos;t
									built for that scale.
								</p>
								<p className="text-lg text-muted-foreground mb-4">
									Each new division or partner adds more domains, more licenses,
									and more admin overhead.
								</p>
								<p className="text-lg text-muted-foreground">
									Data silos multiply, security becomes harder to control, and
									global collaboration turns into a compliance nightmare.
								</p>
							</div>
							<div className="relative aspect-square rounded-2xl bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20 overflow-hidden">
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="grid grid-cols-4 gap-2 p-8 w-full h-full">
										{[...Array(16)].map((_, i) => (
											<div
												key={i}
												className="rounded-lg bg-destructive/10 border border-destructive/20 animate-pulse"
												style={{ animationDelay: `${i * 0.05}s` }}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Melp Solution - Custom for Enterprises */}
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
										<div className="p-4 h-[calc(100%-2rem)] grid grid-cols-3 gap-3">
											<div className="bg-muted rounded-lg" />
											<div className="col-span-2 bg-muted/50 rounded-lg" />
											<div className="col-span-3 bg-muted/30 rounded-lg" />
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
									Melp unifies communication and collaboration tools, in one
									secure AI-powered workplace.
								</p>
								<p className="text-lg text-muted-foreground">
									Work seamlessly across domains, clients, and vendors with
									centralized control, flexible deployment, and full compliance
									guaranteed.
								</p>
							</div>
						</div>
					</div>
				</section>

				<FeatureHighlightSection
					badge="Melp AI"
					title="A built-in partner"
					subtitle="Empower every team with AI that scales. Melp's built-in AI tools enhance collaboration, automate admin work, and deliver insights without additional costs."
					features={aiFeatures}
					ctaText="Break down silos with Melp"
					ctaHref="/get-started"
				/>

				<FeatureHighlightSection
					badge="Communicate"
					title="Communicate better"
					subtitle="Keep every message, meeting, and file organized. Bring all your internal and external communication into one secure platform."
					features={communicationFeatures}
					ctaText="Try Melp for Free"
					ctaHref="/get-started"
					reversed
				/>

				<FeatureHighlightSection
					badge="Collaborate"
					title="Collaborate better"
					subtitle="Create, share, and edit together without paying for multiple tools. Empower teams to create and manage content securely, across borders and business units."
					features={collaborationFeatures}
					ctaText="Try Melp for Free"
					ctaHref="/get-started"
				/>

				{/* Cross-Enterprise Collaboration */}
				<section className="py-16 sm:py-24 bg-muted/30">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
							Work securely{" "}
							<span className="text-primary">across companies</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
							Enable secure cross-enterprise collaboration without losing
							control. Invite clients, vendors, or subsidiaries into one
							workplace and maintain full admin visibility and policy
							management.
						</p>
						<div className="relative aspect-video max-w-4xl mx-auto rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/20 overflow-hidden">
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="flex gap-8">
									{[Building2, Factory, Store, Landmark].map((Icon, i) => (
										<div
											key={Icon.displayName || i}
											className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center"
										>
											<Icon className="w-8 h-8 text-primary" />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				<SecurityComplianceSection
					title="Stay secure while you scale"
					subtitle="Security is not an add-on. It's Melp's foundation. Melp keeps your business data private, compliant, and always secure."
					features={securityFeatures}
					badges={["SOC 2", "HIPAA", "ISO 27001", "GDPR"]}
				/>

				{/* Enterprise Integrations */}
				<section className="py-16 sm:py-24 bg-background">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
							Integrate Melp into your{" "}
							<span className="text-primary">enterprise ecosystem</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
							Melp integrates with tools your teams already use (Microsoft 365,
							Outlook, OneDrive, and Google Workspace), creating one cohesive
							digital ecosystem without workflow disruption.
						</p>
						<div className="flex flex-wrap justify-center gap-6">
							{[
								"Microsoft 365",
								"Outlook",
								"OneDrive",
								"Google Workspace",
								"Google Drive",
							].map((tool, i) => (
								<div
									key={i}
									className="px-6 py-4 bg-card rounded-xl border border-border shadow-sm"
								>
									<span className="font-medium text-foreground">{tool}</span>
								</div>
							))}
						</div>
					</div>
				</section>

				<SolutionsCTA
					title="One AI-powered, budget-friendly workplace"
					subtitle="Unify your teams, partners, and clients in one AI-powered digital ecosystem with enterprise-grade security and deployment flexibility."
					primaryCta={{ text: "Get started for free", href: "/get-started" }}
				/>
			</main>
			<Footer />
		</div>
	);
}
