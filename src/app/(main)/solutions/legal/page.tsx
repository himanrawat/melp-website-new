"use client";
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
	PenTool,
	Lock,
	ClipboardList,
	FolderOpen,
	Bot,
	Globe,
	Scale,
	FileText,
	Briefcase,
	User,
} from "lucide-react";

const challenges = [
	"Email-based document sharing creates version control issues and confusion over the latest edits.",
	"Generic collaboration tools lack encryption and access controls suited for legal confidentiality.",
	"No unified audit trail makes it difficult to prove who accessed or modified a document.",
	"Disorganized client communication spreads critical information across multiple channels.",
	"Cross-border cases are slowed by language barriers and inconsistent data protection standards.",
	"Manual meeting documentation wastes time and creates gaps in case records and billing.",
];

const solutions = [
	{
		title: "Secure co-authoring",
		description:
			"Real-time document editing in Melp Suite so multiple attorneys can draft and review contracts simultaneously without version conflicts.",
		icon: PenTool,
	},
	{
		title: "End-to-end encryption & compliance",
		description:
			"Enterprise-grade encryption and role-based access controls so sensitive client information stays fully protected and compliant with legal standards.",
		icon: Lock,
	},
	{
		title: "Comprehensive audit trails",
		description:
			"Automatic logs of every document access, edit, and version so you maintain accountability and can demonstrate compliance at any time.",
		icon: ClipboardList,
	},
	{
		title: "Centralized file management",
		description:
			"Encrypted cloud storage with version control so all case files, contracts, and exhibits remain organized, searchable, and secure.",
		icon: FolderOpen,
	},
	{
		title: "AI-powered summaries & records",
		description:
			"Automated summaries of client calls, meetings, and strategy sessions so lawyers can maintain accurate documentation for case management and billing.",
		icon: Bot,
	},
	{
		title: "Multilingual collaboration",
		description:
			"Real-time translation in 10+ languages and captions in 90+ so cross-border legal work is clear, compliant, and efficient.",
		icon: Globe,
	},
];

const roles = [
	{
		title: "Attorneys",
		description:
			"Draft, edit, and finalize case files collaboratively while maintaining airtight version control and security.",
		icon: Scale,
	},
	{
		title: "Paralegals & Legal Assistants",
		description:
			"Organize case materials, track edits, and prepare client deliverables from a single workspace.",
		icon: FileText,
	},
	{
		title: "Firm Partners",
		description:
			"Gain real-time oversight of document activity, security logs, and firm-wide collaboration.",
		icon: Briefcase,
	},
	{
		title: "Clients",
		description:
			"Review, comment, and approve documents securely, confident that their information is protected.",
		icon: User,
	},
];

const securityFeatures = [
	{
		title: "Compliant from day one",
		description:
			"Adheres to ISO 27001, SOC 2, and GDPR standards for data protection.",
	},
	{
		title: "End-to-end encryption",
		description:
			"Every message, document, and meeting is encrypted across its entire lifecycle.",
	},
	{
		title: "Role-based access controls",
		description:
			"Define who can view, edit, or share documents, down to the folder or case level.",
	},
	{
		title: "On-premise or hybrid deployment",
		description:
			"Ideal for firms managing sensitive cases or operating under strict jurisdictional requirements.",
	},
	{
		title: "Immutable audit trails",
		description:
			"Every action is recorded and traceable to maintain transparency and accountability.",
	},
	{
		title: "Secure backups",
		description:
			"Redundant, encrypted backups ensure continuous protection and recovery of critical legal data.",
	},
];

const stats = [
	{ value: "50%", label: "faster document drafting and review cycles" },
	{
		value: "40%",
		label: "reduction in time spent on administrative documentation",
	},
	{
		value: "100%",
		label: "improved client satisfaction through secure collaboration",
	},
];

const testimonials = [
	{
		quote:
			"Before Melp, we managed case files through endless email threads. Now, every version, comment, and meeting summary is in one secure place. It's a huge time saver.",
		author: "Sofia M.",
		role: "Senior Partner",
		location: "United Kingdom",
	},
	{
		quote:
			"Melp made real-time collaboration between our attorneys and international clients effortless. The audit trails and encryption give us confidence that every action is documented and protected.",
		author: "Sergiu R.",
		role: "Managing Partner",
		location: "Romania",
	},
];

const useCases = [
	"Law firms handling high-stakes cases that require strict confidentiality and audit-ready records.",
	"Corporate legal teams collaborating across departments and geographies while maintaining compliance.",
	"Boutique practices needing an affordable, secure way to manage clients and documents in one workspace.",
	"International legal consultancies working across languages and jurisdictions with real-time translation support.",
	"Legal tech innovators integrating AI-driven automation for documentation and compliance tracking.",
];

export default function LegalPage() {
	return (
		<div className="min-h-screen bg-background">
			<main>
				<SolutionsHero
					badge="Legal & Law Firms"
					title="A secure, compliant, and AI-powered platform for"
					highlightedText="modern legal collaboration"
					description="Melp brings lawyers, clients, and partners together in a secure, organized, and fully encrypted digital workplace."
					primaryCta={{ text: "Try Melp for Free", href: "/get-started" }}
					secondaryCta={{ text: "Watch Demo", href: "/demo" }}
				/>
				<ChallengeSection
					title="The challenge"
					subtitle="In law, every word matters, and so does every detail of how it's shared. Yet many legal teams still rely on fragmented systems that slow collaboration, complicate compliance, and expose sensitive client data to unnecessary risk."
					challenges={challenges}
				/>
				<SolutionSection
					title="How Melp solves this"
					subtitle="Melp provides law firms with a secure, AI-powered digital workplace that simplifies collaboration, protects confidentiality, and automates documentation, so your team can focus on building stronger cases instead of managing files."
					solutions={solutions}
				/>
				<RolesSection
					title="Built with the right people in mind"
					roles={roles}
				/>
				<SecurityComplianceSection
					title="Security & Compliance"
					subtitle="Confidentiality is the foundation of the legal profession, and Melp is built to uphold it."
					features={securityFeatures}
					badges={["ISO 27001", "SOC 2", "GDPR"]}
				/>
				<ImpactSection
					title="Proven impact"
					subtitle="Other firms using Melp report:"
					stats={stats}
				/>
				<TestimonialsSection
					title="Here's what others say about Melp"
					testimonials={testimonials}
				/>
				<UseCasesSection title="Melp is great for…" useCases={useCases} />
				<SolutionsCTA
					title="Redefine how legal teams work."
					subtitle="From case preparation to client consultation, Melp unifies every step of your workflow. Your firm can move faster while staying fully compliant with every regulation."
					primaryCta={{ text: "Try Melp for Free", href: "/get-started" }}
				/>
			</main>
		</div>
	);
}
