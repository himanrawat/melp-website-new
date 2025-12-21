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
	FlaskConical,
	Bot,
	Calendar,
	Globe,
	FolderOpen,
	Handshake,
	Microscope,
	Hospital,
	ClipboardCheck,
	UserCog,
} from "lucide-react";

const challenges = [
	"Fragmented tools for meetings, data sharing, and documentation.",
	"Manual transcription and compliance reporting.",
	"Miscommunication across global, multilingual teams.",
	"High security demands and audit pressure.",
	"Lost context between R&D, clinical, and regulatory divisions.",
];

const solutions = [
	{
		title: "One platform for all stakeholders",
		description:
			"Connect internal R&D, external partners, CROs, and regulators under one secure, policy-controlled license.",
		icon: FlaskConical,
	},
	{
		title: "AI-powered research documentation",
		description:
			"Automatic meeting summaries, transcriptions, and structured records make every discussion audit-ready by default.",
		icon: Bot,
	},
	{
		title: "Smart scheduling & collaboration",
		description:
			"Built-in calendars, booking links, and meeting rooms keep study reviews, trials, and regulatory meetings on track across time zones.",
		icon: Calendar,
	},
	{
		title: "Multilingual communication",
		description:
			"Real-time translation in 10+ languages and transcription in 90+ make global teams work as if they spoke the same language.",
		icon: Globe,
	},
	{
		title: "Secure document management",
		description:
			"Version-controlled Melp Drive keeps data, trial files, and submissions organized, accessible, and compliant with HIPAA and GDPR.",
		icon: FolderOpen,
	},
	{
		title: "Cross-organization collaboration",
		description:
			"Collaborate with external research partners and regulatory bodies without compromising data security or compliance.",
		icon: Handshake,
	},
];

const roles = [
	{
		title: "Researchers & Scientists",
		description:
			"Capture every insight automatically, share securely, and focus on innovation.",
		icon: Microscope,
	},
	{
		title: "Clinical Teams",
		description:
			"Keep site updates, data reviews, and trial communications centralized.",
		icon: Hospital,
	},
	{
		title: "Regulatory & Compliance",
		description: "Generate documentation that's always inspection-ready.",
		icon: ClipboardCheck,
	},
	{
		title: "Executives & R&D Leaders",
		description:
			"Get visibility into progress and collaboration across the global research network.",
		icon: UserCog,
	},
];

const securityFeatures = [
	{
		title: "HIPAA certified",
		description:
			"Full compliance with healthcare data protection requirements.",
	},
	{
		title: "ISO 27001 & SOC 2",
		description:
			"Enterprise-grade security certifications for data protection.",
	},
	{
		title: "GDPR compliant",
		description: "Full compliance with European data protection regulations.",
	},
	{
		title: "End-to-end encryption",
		description:
			"Every file, meeting, and message is encrypted throughout its lifecycle.",
	},
	{
		title: "Role-based access control",
		description: "Granular permissions for sensitive research data.",
	},
	{
		title: "On-premise or hybrid deployment",
		description:
			"Ideal for sensitive data environments and regulatory requirements.",
	},
];

const stats = [
	{
		value: "70%",
		label: "faster documentation cycles with AI-generated summaries",
	},
	{ value: "60%", label: "faster global coordination between teams" },
	{ value: "50%", label: "reduction in tool costs through consolidation" },
];

const testimonials = [
	{
		quote:
			"Melp transformed how our R&D and regulatory teams communicate. Every discussion is automatically summarized, documented, and accessible. It's like having an AI assistant in every meeting.",
		author: "Arnold L.",
		role: "R&D Director",
		location: "Germany",
	},
	{
		quote:
			"With Melp, collaboration between our labs in the US, Japan, and France feels effortless. Real-time translation and secure file sharing have completely changed how we run global trials.",
		author: "Michael K.",
		role: "Director of Clinical Operations",
		location: "Japan",
	},
];

const useCases = [
	"Pharmaceutical companies conducting global research, clinical trials, and regulatory submissions.",
	"Biotech startups accelerating innovation with secure, AI-powered documentation and collaboration.",
	"Research institutions and universities uniting labs and researchers across borders on one platform.",
	"Healthcare and life sciences enterprises enabling HIPAA-compliant collaboration across teams and partners.",
];

export default function PharmaPage() {
	return (
		<div className="min-h-screen bg-background">
			<main>
				<SolutionsHero
					badge="Pharma & Life Sciences"
					title="A secure, compliant, and AI-powered platform for"
					highlightedText="global research and regulatory collaboration"
					description="Melp unites scientists, partners, and regulators across continents, making collaboration faster, documentation smarter, and compliance effortless."
					primaryCta={{ text: "Get Started for Free", href: "/get-started" }}
					secondaryCta={{ text: "Watch Demo", href: "/demo" }}
				/>
				<ChallengeSection
					title="The challenge"
					subtitle="When research moves faster than your tools. In pharma and life sciences, every inefficiency slows innovation and sometimes costs lives."
					challenges={challenges}
				/>
				<SolutionSection
					title="How Melp transforms collaboration"
					subtitle="Melp gives research organizations one secure, multilingual, and AI-powered workplace for communication and collaboration."
					solutions={solutions}
				/>
				<RolesSection
					title="Built for every role in the ecosystem"
					roles={roles}
				/>
				<SecurityComplianceSection
					title="Security & compliance by design"
					subtitle="Pharma collaboration demands the highest security standards. Melp meets them all."
					features={securityFeatures}
					badges={["HIPAA", "ISO 27001", "SOC 2", "GDPR"]}
				/>
				<ImpactSection
					title="Proven impact"
					subtitle="Organizations using Melp report:"
					stats={stats}
				/>
				<TestimonialsSection
					title="What others say about Melp"
					testimonials={testimonials}
				/>
				<UseCasesSection title="Melp is great for…" useCases={useCases} />
				<SolutionsCTA
					title="The next level of pharma collaboration happens in Melp"
					subtitle="From molecule to market, accelerate every stage of discovery with a secure, multilingual, and intelligent workspace."
					primaryCta={{ text: "See how Melp works", href: "/demo" }}
				/>
			</main>
		</div>
	);
}
