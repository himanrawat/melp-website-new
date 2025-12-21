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
	Lock,
	Calendar,
	Globe,
	Cloud,
	Handshake,
	Bot,
	Briefcase,
	ClipboardCheck,
	FolderKanban,
	User,
} from "lucide-react";

const challenges = [
	"Disjointed communication across teams, clients, and regulators.",
	"Fragmented tech stacks that increase the risk of data leaks.",
	"Manual reporting and audit preparation that waste valuable time.",
	"Complex compliance requirements that double administrative effort.",
	"Global relationships hindered by language and accessibility barriers.",
	"Sensitive data exchanges through unsecured tools and channels.",
];

const solutions = [
	{
		title: "End-to-end encryption",
		description:
			"Enterprise-grade compliance (SOC 2, ISO, GDPR) so your client data and records remain fully protected and audit-ready at all times.",
		icon: Lock,
	},
	{
		title: "Smart scheduling",
		description:
			"Built-in scheduling tools and permanent meeting rooms so consultants can connect with clients effortlessly and deliver a seamless professional experience.",
		icon: Calendar,
	},
	{
		title: "Real-time translation",
		description:
			"Translation in 10+ languages and live captions in 90+ so your global teams and clients can communicate clearly, without language barriers.",
		icon: Globe,
	},
	{
		title: "Encrypted cloud storage",
		description:
			"Version control and role-based permissions so contracts and financial statements stay organized, accessible, and secure.",
		icon: Cloud,
	},
	{
		title: "Cross-organization collaboration",
		description:
			"Safe connection with external partners, clients or regulators, so you can collaborate without duplicating accounts or compromising data integrity.",
		icon: Handshake,
	},
	{
		title: "AI-powered documentation",
		description:
			"Automatic meeting summaries and transcriptions keep every decision logged and searchable for compliance.",
		icon: Bot,
	},
];

const roles = [
	{
		title: "Financial Advisors",
		description:
			"Conduct secure, compliant client meetings, generate instant AI summaries, and access every document in one place.",
		icon: Briefcase,
	},
	{
		title: "Compliance Officers",
		description:
			"Maintain transparent, audit-ready records and simplify regulatory reporting through automated documentation.",
		icon: ClipboardCheck,
	},
	{
		title: "Administration Teams",
		description:
			"Manage scheduling, data access, and internal communication with full visibility and control.",
		icon: FolderKanban,
	},
	{
		title: "Clients",
		description:
			"Meet, share, and sign documents securely, in their own language, from anywhere in the world.",
		icon: User,
	},
];

const securityFeatures = [
	{
		title: "Compliant from day one",
		description:
			"All communications and records adhere to SOC 2, ISO 27001, and GDPR standards.",
	},
	{
		title: "End-to-end encryption",
		description:
			"Every conversation, file, and transaction is secured across its entire lifecycle.",
	},
	{
		title: "Role-based access controls",
		description:
			"Define exactly who can view, edit, or share sensitive information across teams or partner institutions.",
	},
	{
		title: "On-premise or hybrid deployment",
		description:
			"Designed for organizations with strict data residency requirements or local regulatory constraints.",
	},
	{
		title: "Detailed audit trails",
		description:
			"Every action is logged and recoverable, making compliance reporting and accountability effortless.",
	},
	{
		title: "Secure backups",
		description:
			"Redundant, encrypted backups ensure business continuity and data recovery.",
	},
];

const stats = [
	{ value: "60%", label: "reduction in manual compliance reporting time" },
	{ value: "40%", label: "faster client onboarding and document turnaround" },
	{ value: "70%", label: "fewer tools needed to manage daily workflows" },
];

const testimonials = [
	{
		quote:
			"Melp has helped us bring structure and transparency to our client meetings. The AI summaries and compliance-ready records make audits effortless, while our advisors spend more time focusing on client goals instead of paperwork.",
		author: "Priya N.",
		role: "Vice President",
		location: "India",
	},
	{
		quote:
			"We work with clients across five countries, and Melp has completely changed how we communicate. The real-time translation and AI summaries save hours each week while keeping everything fully secure and traceable.",
		author: "Maria L.",
		role: "Senior Relationship Manager",
		location: "Spain",
	},
];

const useCases = [
	"Banks that want to host secure, compliant consultations across branches and departments while maintaining full audit visibility.",
	"Wealth management firms looking to automate documentation and streamline compliance checks with AI-powered summaries.",
	"Insurance companies managing multilingual communication between clients, agents, and underwriters without risking data breaches.",
	"Fintech startups needing an all-in-one workspace to scale operations securely and meet global compliance standards.",
	"Investment firms & brokerages that rely on fast, precise collaboration across advisors, analysts, and regulators.",
];

export default function FinancialServicesPage() {
	return (
		<div className="min-h-screen bg-background">
			<main>
				<SolutionsHero
					badge="Financial Services"
					title="A secure, compliant, and AI-powered platform for"
					highlightedText="digital-first financial institutions"
					description="Enable seamless, multilingual collaboration across branches, clients, and regulators, without compromising on data privacy or compliance."
					primaryCta={{ text: "Get Started for Free", href: "/get-started" }}
					secondaryCta={{ text: "Watch Demo", href: "/demo" }}
				/>
				<ChallengeSection
					title="The challenge"
					subtitle="In financial services, every interaction carries weight. A single misstep can lead to lost trust, compliance risk, or economic loss. Yet many institutions still rely on systems that slow communication and complicate compliance."
					challenges={challenges}
				/>
				<SolutionSection
					title="How Melp solves this"
					subtitle="Melp brings financial collaboration, documentation, and compliance together, so teams can work better, faster, and safer in one unified workplace."
					solutions={solutions}
				/>
				<RolesSection
					title="Built with the right people in mind"
					roles={roles}
				/>
				<SecurityComplianceSection
					title="Security & Compliance"
					subtitle="Melp is built to protect your clients, your data, and your reputation."
					features={securityFeatures}
					badges={["SOC 2", "ISO 27001", "GDPR"]}
				/>
				<ImpactSection
					title="Proven impact"
					subtitle="Financial institutions using Melp report:"
					stats={stats}
				/>
				<TestimonialsSection
					title="Here's what others have to say about Melp"
					testimonials={testimonials}
				/>
				<UseCasesSection title="Melp is great for…" useCases={useCases} />
				<SolutionsCTA
					title="Lead the next era of financial collaboration"
					subtitle="Accelerate decisions, simplify compliance, and strengthen client relationships in one secure, AI-powered workplace."
					primaryCta={{ text: "Try Melp for Free", href: "/get-started" }}
				/>
			</main>
		</div>
	);
}
