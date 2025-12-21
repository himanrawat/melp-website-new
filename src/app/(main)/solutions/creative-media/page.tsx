"use client";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import ChallengeSection from "@/components/solutions/ChallengeSection";
import SolutionSection from "@/components/solutions/SolutionSection";
import RolesSection from "@/components/solutions/RolesSection";
import ImpactSection from "@/components/solutions/ImpactSection";
import TestimonialsSection from "@/components/solutions/TestimonialsSection";
import UseCasesSection from "@/components/solutions/UseCasesSection";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";
import {
	Palette,
	Bot,
	Globe,
	FolderOpen,
	MonitorPlay,
	PenTool,
	Clapperboard,
	Pencil,
	Smartphone,
	Mic,
} from "lucide-react";

const challenges = [
	"Too many platforms for meetings, brainstorming, file sharing, and live events fragment the creative process.",
	"Language barriers during global streams or online events limit engagement and reach.",
	"Lack of central control over assets leads to confusion, duplicate work, and lost files.",
	"Chaotic file management makes it hard for teams to find and reuse creative materials.",
	"Disconnected collaboration slows down projects and drains creative energy.",
];

const solutions = [
	{
		title: "One creative workplace",
		description:
			"Video meetings, project planning, content docs, and file sharing in one place so teams can brainstorm, produce, and store without switching tools.",
		icon: Palette,
	},
	{
		title: "AI-powered summaries & repurposing",
		description:
			"Automatic transcripts and summaries from webinars or meetings so you can instantly turn long discussions into ready-to-use content or briefs.",
		icon: Bot,
	},
	{
		title: "Multilingual broadcasting",
		description:
			"Real-time translation in 10+ languages and captions in 90+ so live events and campaigns reach audiences anywhere in the world.",
		icon: Globe,
	},
	{
		title: "Centralized content management",
		description:
			"Encrypted storage with version control and role-based access so creative assets stay organized, protected, and easily retrievable.",
		icon: FolderOpen,
	},
	{
		title: "HD streaming environments",
		description:
			"Permanent personal rooms and built-in YouTube integration so creators and agencies can host branded live sessions without technical hassle.",
		icon: MonitorPlay,
	},
	{
		title: "Collaborative production tools",
		description:
			"Melp Suite (Docs, Sheets, Slides) enables real-time co-creation so teams can plan campaigns, draft scripts, and design assets together.",
		icon: PenTool,
	},
];

const roles = [
	{
		title: "Creative Directors",
		description:
			"Coordinate global campaigns, manage teams, and keep brand assets consistent.",
		icon: Clapperboard,
	},
	{
		title: "Designers & Copywriters",
		description:
			"Co-create assets, brainstorm ideas, and share updates in one secure, collaborative space.",
		icon: Pencil,
	},
	{
		title: "Content Creators",
		description:
			"Stream, repurpose, and publish multilingual content with ease.",
		icon: Smartphone,
	},
	{
		title: "Event Teams",
		description:
			"Host webinars, manage events, and broadcast with real-time translation support.",
		icon: Mic,
	},
];

const stats = [
	{ value: "60%", label: "faster execution and delivery of assets" },
	{ value: "50%", label: "improvement in global audience reach" },
	{
		value: "70%",
		label: "fewer tools needed for planning, streaming, and collaboration",
	},
];

const testimonials = [
	{
		quote:
			"Our team used to jump between five different tools. Now, everything from client meetings to content approvals happens in one place. We work faster and stay more creative.",
		author: "Elena R.",
		role: "Creative Director",
		location: "Spain",
	},
	{
		quote:
			"Melp lets us broadcast globally with captions in multiple languages. It's a game changer for live events: inclusive, professional, and seamless.",
		author: "Ajani K.",
		role: "Head of Digital Production",
		location: "Jamaica",
	},
];

const useCases = [
	"Creative agencies managing campaigns, clients, and teams across time zones.",
	"Marketing departments running content creation, reviews, and live events from one collaborative platform.",
	"Content creators & influencers who need a professional environment to host, record, and repurpose content.",
	"Media & Entertainment teams coordinating video, script, and design production securely at scale.",
	"Event & Production companies hosting multilingual broadcasts and post-event collaboration.",
];

export default function CreativeMediaPage() {
	return (
		<div className="min-h-screen bg-background">
			<main>
				<SolutionsHero
					badge="Media, Entertainment & Creative Agencies"
					title="A secure, collaborative, and AI-powered platform for"
					highlightedText="creative teams"
					description="Empower marketers, agencies, and creators to collaborate, create, and broadcast from one multilingual, AI-driven workplace."
					primaryCta={{ text: "Get Started for Free", href: "/get-started" }}
					secondaryCta={{ text: "Watch Demo", href: "/demo" }}
				/>
				<ChallengeSection
					title="The challenge"
					subtitle="Creative work thrives on freedom, but today's workflows are anything but. Most teams juggle too many tools, scattered files, and inconsistent communication."
					challenges={challenges}
				/>
				<SolutionSection
					title="How Melp solves this"
					subtitle="Melp unifies collaboration, content creation, and audience engagement into one secure, AI-powered workspace. This way, creative professionals can focus on what they do best: creating."
					solutions={solutions}
				/>
				<RolesSection
					title="Built with the right people in mind"
					roles={roles}
				/>
				<ImpactSection
					title="Proven impact"
					subtitle="Creative teams using Melp report:"
					stats={stats}
				/>
				<TestimonialsSection
					title="Here's what others have to say about Melp"
					testimonials={testimonials}
				/>
				<UseCasesSection title="Melp is great for…" useCases={useCases} />
				<SolutionsCTA
					title="Lead the next era of creative collaboration"
					subtitle="Create faster, collaborate smarter, and reach audiences everywhere, all within one secure, AI-powered workspace built for modern creative professionals."
					primaryCta={{ text: "Try Melp for Free", href: "/get-started" }}
				/>
			</main>
		</div>
	);
}
