"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import ChallengeSection from "@/components/solutions/ChallengeSection";
import SolutionSection from "@/components/solutions/SolutionSection";
import RolesSection from "@/components/solutions/RolesSection";
import SecurityComplianceSection from "@/components/solutions/SecurityComplianceSection";
import ImpactSection from "@/components/solutions/ImpactSection";
import TestimonialsSection from "@/components/solutions/TestimonialsSection";
import UseCasesSection from "@/components/solutions/UseCasesSection";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";
import {
	Globe2,
	Bot,
	Calendar,
	Globe,
	FolderOpen,
	Handshake,
	Code,
	BarChart3,
	Briefcase,
	UserCog,
} from "lucide-react";

const challenges = [
	"Fragmented tooling: Teams juggle multiple licensed apps for meetings, documentation, and file sharing, creating silos and lost context.",
	"Language barriers: Miscommunication across global offices and clients slows projects and causes errors.",
	"Inefficient sales cycles: Scheduling demos and consultations across regions adds friction to the buyer journey.",
	"Manual documentation: Capturing notes, decisions, and technical discussions wastes valuable engineering time.",
	"Security and compliance risks: Using unintegrated tools increases exposure to data leaks and untracked file sharing.",
	"Knowledge loss: Key insights from meetings and code reviews disappear without a central, searchable knowledge base.",
];

const solutions = [
	{
		title: "One workplace for global teams",
		description:
			"Video conferencing, chat, documentation, and storage all in one platform so teams can collaborate seamlessly without switching tools.",
		icon: Globe2,
	},
	{
		title: "AI-powered documentation",
		description:
			"Automatic meeting summaries and AI-assisted chats so engineers, consultants, and sales teams can capture every decision instantly and eliminate manual reporting.",
		icon: Bot,
	},
	{
		title: "Smart scheduling",
		description:
			"Built-in calendar links and appointment booking so clients can schedule demos or consultations effortlessly, reducing delays and improving conversion speed.",
		icon: Calendar,
	},
	{
		title: "Multilingual collaboration",
		description:
			"Real-time translation in 10+ languages and captions in 90+ so global teams and clients understand complex technical discussions clearly.",
		icon: Globe,
	},
	{
		title: "Centralized document management",
		description:
			"Secure, version-controlled storage with access permissions so project files, reports, and deliverables remain organized and compliant.",
		icon: FolderOpen,
	},
	{
		title: "Cross-enterprise collaboration",
		description:
			"External sharing with clients and vendors so organizations can work securely across company boundaries without losing admin control.",
		icon: Handshake,
	},
];

const roles = [
	{
		title: "Developers & Engineers",
		description:
			"Collaborate across time zones, document decisions instantly, and stay aligned through AI summaries and shared notes.",
		icon: Code,
	},
	{
		title: "Project Managers",
		description:
			"Manage sprints, track deliverables, and coordinate global teams from one unified dashboard.",
		icon: BarChart3,
	},
	{
		title: "Sales & Consulting Teams",
		description:
			"Schedule product demos and client meetings effortlessly, while keeping every conversation logged and searchable.",
		icon: Briefcase,
	},
	{
		title: "Executives & Leaders",
		description:
			"Gain real-time insight into productivity, performance, and client engagement across distributed teams.",
		icon: UserCog,
	},
];

const securityFeatures = [
	{
		title: "Certified compliance",
		description:
			"ISO 27001, SOC 2, and GDPR certified, meeting global enterprise requirements.",
	},
	{
		title: "End-to-end encryption",
		description:
			"Protects every file, meeting, and message from creation to storage.",
	},
	{
		title: "Role-based access controls",
		description:
			"Define who can view, edit, or share assets across teams, clients, and vendors.",
	},
	{
		title: "On-premise or hybrid deployment",
		description:
			"Ideal for organizations handling sensitive client data or regulated industries.",
	},
	{
		title: "Detailed audit trails",
		description:
			"Track every action and change for complete accountability and business continuity.",
	},
	{
		title: "Secure backups",
		description:
			"Redundant, encrypted backups ensure data recovery and business continuity.",
	},
];

const stats = [
	{ value: "50%", label: "faster documentation cycles through AI summaries" },
	{
		value: "40%",
		label: "faster project execution with unified collaboration",
	},
	{
		value: "60%",
		label: "reduction in tool costs by replacing multiple licenses",
	},
];

const testimonials = [
	{
		quote:
			"Our distributed teams across India, Europe, and the US finally work in sync. Melp keeps every project note, summary, and file accessible and secure. It's made cross-continent collaboration feel effortless.",
		author: "Neha S.",
		role: "Delivery Director",
		location: "India",
	},
	{
		quote:
			"Melp helped us streamline demos, client calls, and documentation. Our sales cycle is faster, and our project records are automatically audit-ready.",
		author: "David M.",
		role: "Head of Client Success",
		location: "USA",
	},
];

const useCases = [
	"Software development firms managing global projects and client deliverables.",
	"IT consulting & Managed service providers needing a secure, centralized platform for technical collaboration.",
	"BPO & KPO organizations coordinating large distributed teams across time zones.",
	"System integrators requiring secure client access and version control for complex projects.",
	"Tech startups scaling globally with automated documentation and multilingual collaboration.",
];

export default function ITTechnologyPage() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				<SolutionsHero
					badge="IT & Technology"
					title="A secure, compliant, and AI-powered platform for"
					highlightedText="distributed technology teams"
					description="Unify communication, documentation, and collaboration across continents. Melp helps IT and ITES organizations accelerate projects, automate documentation, and maintain enterprise-grade security."
					primaryCta={{ text: "Get Started for Free", href: "/get-started" }}
					secondaryCta={{ text: "Watch Demo", href: "/demo" }}
				/>
				<ChallengeSection
					title="The challenge"
					subtitle="In the global IT and IT-enabled services (ITES) industry, collaboration is everything, yet complexity often gets in the way. Distributed teams, offshore delivery models, and security demands make coordination harder than it should be."
					challenges={challenges}
				/>
				<SolutionSection
					title="How Melp solves this"
					subtitle="Melp brings distributed teams, clients, and vendors together in one AI-powered workplace built for secure collaboration, automated documentation, and global communication."
					solutions={solutions}
				/>
				<RolesSection
					title="Built with the right people in mind"
					roles={roles}
				/>
				<SecurityComplianceSection
					title="Security & Compliance"
					subtitle="IT collaboration demands the highest security standards. Melp is built to meet them."
					features={securityFeatures}
					badges={["ISO 27001", "SOC 2", "GDPR"]}
				/>
				<ImpactSection
					title="Proven impact"
					subtitle="Other organizations using Melp report:"
					stats={stats}
				/>
				<TestimonialsSection
					title="Here's what others say about Melp"
					testimonials={testimonials}
				/>
				<UseCasesSection title="Melp is great for…" useCases={useCases} />
				<SolutionsCTA
					title="The next level of IT collaboration happens in Melp"
					subtitle="Bring distributed teams together, streamline delivery, and protect every client interaction wherever you work."
					primaryCta={{ text: "See how Melp works", href: "/demo" }}
				/>
			</main>
			<Footer />
		</div>
	);
}
