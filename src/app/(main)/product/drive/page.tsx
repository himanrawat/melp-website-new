"use client";

import {
	ProductHero,
	ProductFeatures,
	ProductBenefits,
	ProductUseCases,
	ProductCTA,
	ProductHowItWorks,
} from "@/components/product";
import {
	Cloud,
	FileText,
	Share2,
	Search,
	Lock,
	Eye,
	FolderOpen,
	Link,
	Users,
	Shield,
	Building2,
	Briefcase,
} from "lucide-react";

const features = [
	{
		title: "Centralized Storage",
		description:
			"All your files in one secure, searchable location. No more hunting through email attachments or shared drives.",
		icon: FolderOpen,
	},
	{
		title: "In-Browser Preview",
		description:
			"Preview any file type without downloading. PDFs, images, videos, documents — all viewable instantly.",
		icon: Eye,
	},
	{
		title: "Smart Link Sharing",
		description:
			"Share files with teammates or external collaborators using secure, expiring links with granular permissions.",
		icon: Link,
	},
	{
		title: "Powerful Search",
		description:
			"Find any file in seconds with full-text search across documents, metadata, and conversation context.",
		icon: Search,
	},
	{
		title: "Version Control",
		description:
			"Track changes, restore previous versions, and see who modified what. Complete file history at your fingertips.",
		icon: FileText,
	},
	{
		title: "Enterprise Security",
		description:
			"End-to-end encryption, access controls, and compliance features that meet the strictest requirements.",
		icon: Lock,
	},
];

const benefits = [
	{
		title: "No More App-Switching",
		description:
			"Files live where your conversations happen. Share, preview, and collaborate without leaving Melp.",
		icon: Cloud,
	},
	{
		title: "Always Accessible",
		description:
			"Access your files from anywhere, on any device. Desktop, mobile, or web — your files are always there.",
		icon: Eye,
	},
	{
		title: "Connected to Context",
		description:
			"Files are tied to conversations and meetings, so nothing gets lost in email or external drives.",
		icon: Link,
	},
];

const useCases = [
	{
		title: "Team Documentation",
		description:
			"Store and share team docs, guidelines, and resources in one organized, searchable space.",
		icon: Users,
		badge: "Popular",
	},
	{
		title: "Project Files",
		description:
			"Keep project assets, deliverables, and references organized alongside project conversations.",
		icon: FolderOpen,
	},
	{
		title: "Client Sharing",
		description:
			"Share files securely with external clients and partners using expiring links and access controls.",
		icon: Briefcase,
	},
];

const howItWorksSteps = [
	{
		title: "Upload Your Files",
		description:
			"Drag and drop files directly into conversations or upload to your personal or team drives.",
		icon: Cloud,
	},
	{
		title: "Organize & Find",
		description:
			"Create folders, add tags, and use powerful search to keep everything organized and accessible.",
		icon: Search,
	},
	{
		title: "Share & Collaborate",
		description:
			"Share with teammates or external users using secure links with customizable permissions.",
		icon: Share2,
	},
];

export default function DrivePage() {
	return (
		<div className="bg-background">
			<ProductHero
				icon={Cloud}
				badge="Melp Drive"
				title="Secure File Management —"
				highlightedText="Without App-Switching"
				description="Melp Drive integrates file storage directly into your workflow. Upload, organize, preview, and share documents with your team — all securely and without juggling tools."
				features={[
					"Centralized file storage that's safe and searchable",
					"Preview any file type without downloading",
					"Secure link sharing for teams and external collaborators",
					"Files tied to conversations and meetings",
				]}
				primaryCta={{ text: "Try Melp Drive Free", href: "/pricing" }}
				secondaryCta={{ text: "Learn More", href: "#features" }}
				gradient="from-amber-500/20 via-amber-500/5 to-transparent"
			/>

			<ProductFeatures
				label="What It Delivers"
				title="File management reimagined"
				description="Melp Drive isn't just storage — it's intelligent file management designed for modern teams."
				features={features}
			/>

			<ProductHowItWorks
				label="How It Works"
				title="Simple, secure, seamless"
				description="Get started with Melp Drive in minutes."
				steps={howItWorksSteps}
			/>

			<ProductBenefits
				label="Why It Matters"
				title="Secure, searchable, always accessible"
				description="Files are where they should be — connected to your work, not lost in silos."
				benefits={benefits}
				layout="grid"
			/>

			<ProductUseCases
				label="Perfect For"
				title="Built for every file sharing need"
				description="From internal documentation to client deliverables, Melp Drive handles it all."
				useCases={useCases}
			/>

			<ProductCTA
				icon={Cloud}
				title="Ready to organize your files?"
				description="Join thousands of teams managing files more effectively with Melp Drive."
				primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
				secondaryCta={{ text: "Schedule Demo", href: "/contact" }}
				features={[
					"Secure storage",
					"File preview",
					"Smart search",
					"Link sharing",
				]}
			/>
		</div>
	);
}
