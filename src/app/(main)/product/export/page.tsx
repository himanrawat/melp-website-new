"use client";

import {
	ProductHero,
	ProductFeatures,
	ProductBenefits,
	ProductUseCases,
	ProductCTA,
} from "@/components/product";
import {
	FileText,
	Download,
	Calendar,
	MessageCircle,
	ClipboardList,
	Shield,
	Briefcase,
	Scale,
	FileCheck,
} from "lucide-react";

const features = [
	{
		title: "Clean PDF Format",
		description:
			"Export chats as professionally formatted PDFs that look great and are easy to read.",
		icon: FileText,
	},
	{
		title: "Date Range Selection",
		description:
			"Choose specific time periods to export. Get exactly the conversations you need.",
		icon: Calendar,
	},
	{
		title: "Optional Annotations",
		description:
			"Add notes, context, or highlights to exported chats for additional clarity.",
		icon: ClipboardList,
	},
	{
		title: "Thread Preservation",
		description:
			"Exports maintain thread structure so context and reply relationships are clear.",
		icon: MessageCircle,
	},
	{
		title: "Attachment References",
		description:
			"Shared files are referenced with links or can be included in the export package.",
		icon: Download,
	},
	{
		title: "Secure Handling",
		description:
			"Exports respect permission levels. Sensitive content stays protected.",
		icon: Shield,
	},
];

const benefits = [
	{
		title: "Professional Archive Format",
		description:
			"PDFs are universally readable and look professional for client handoffs, reports, and documentation.",
		icon: FileText,
	},
	{
		title: "Include Context & Notes",
		description:
			"Add date ranges, annotations, and optional notes to provide full context with exports.",
		icon: ClipboardList,
	},
	{
		title: "Perfect for Compliance",
		description:
			"Meeting summaries, decision records, and milestone documentation — all in audit-ready format.",
		icon: Shield,
	},
];

const useCases = [
	{
		title: "Client Handoffs",
		description:
			"Share project discussions and decisions with clients in a clean, professional format.",
		icon: Briefcase,
		badge: "Popular",
	},
	{
		title: "Compliance & Audits",
		description:
			"Maintain records of important discussions for regulatory compliance and audits.",
		icon: Scale,
	},
	{
		title: "Meeting Documentation",
		description:
			"Export meeting chats as official records with decisions, action items, and context.",
		icon: FileCheck,
	},
];

export default function ExportPage() {
	return (
		<div className="bg-background">
			<ProductHero
				icon={FileText}
				badge="Email Chat Export (PDF)"
				title="Turn Conversations into"
				highlightedText="Shareable Records"
				description="Need to save a discussion for documentation, compliance, or reporting? Melp lets you export chats as clean PDFs — perfect for reference, client handoffs, or audits."
				features={[
					"Clean, professional archive format",
					"Include date ranges and optional notes",
					"Ideal for meeting summaries and milestones",
					"Thread structure preserved",
				]}
				primaryCta={{ text: "Try Export Free", href: "/pricing" }}
				secondaryCta={{ text: "See Example", href: "#demo" }}
				gradient="from-slate-500/20 via-slate-500/5 to-transparent"
			/>

			<ProductFeatures
				label="Key Features"
				title="Context that travels outside the platform"
				description="Export exactly what you need, formatted exactly how you want it."
				features={features}
			/>

			<ProductBenefits
				label="Key Benefits"
				title="Professional documentation made easy"
				description="Transform chat conversations into polished, shareable documents."
				benefits={benefits}
				layout="grid"
			/>

			<ProductUseCases
				label="Perfect For"
				title="Built for documentation needs"
				description="From client reports to compliance records, chat export handles it all."
				useCases={useCases}
			/>

			<ProductCTA
				icon={FileText}
				title="Ready to document your conversations?"
				description="Join thousands of teams creating professional records with Melp."
				primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
				secondaryCta={{ text: "Schedule Demo", href: "/contact" }}
				features={[
					"PDF export",
					"Date selection",
					"Annotations",
					"Thread preservation",
				]}
			/>
		</div>
	);
}
