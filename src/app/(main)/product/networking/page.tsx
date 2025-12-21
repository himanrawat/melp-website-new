"use client";

import {
	ProductHero,
	ProductFeatures,
	ProductBenefits,
	ProductUseCases,
	ProductCTA,
} from "@/components/product";
import {
	Users,
	Search,
	Shield,
	UserPlus,
	Globe,
	Lock,
	Handshake,
	Building2,
	Briefcase,
	Network,
} from "lucide-react";

const features = [
	{
		title: "Secure Guest Access",
		description:
			"Invite external collaborators with controlled access. They see only what you share.",
		icon: UserPlus,
	},
	{
		title: "Professional Directory",
		description:
			"Search and connect with professionals by title, location, or services offered.",
		icon: Search,
	},
	{
		title: "Controlled Permissions",
		description:
			"Granular access controls let you decide exactly what external users can see and do.",
		icon: Lock,
	},
	{
		title: "Team & Group Integration",
		description:
			"Add external collaborators to specific Teams or Groups without full org access.",
		icon: Users,
	},
	{
		title: "Global Networking",
		description:
			"Build your professional network beyond organizational boundaries. Connect worldwide.",
		icon: Globe,
	},
	{
		title: "Enterprise Security",
		description:
			"All external collaboration is protected by the same enterprise-grade security as internal comms.",
		icon: Shield,
	},
];

const benefits = [
	{
		title: "Build External Networks Easily",
		description:
			"Discover and connect with professionals, vendors, and partners without leaving Melp.",
		icon: Network,
	},
	{
		title: "Add Collaborators Securely",
		description:
			"Invite clients, contractors, and partners to specific spaces with controlled access.",
		icon: UserPlus,
	},
	{
		title: "Maintain Access Control",
		description:
			"IT and admins keep full visibility and control over all external collaborations.",
		icon: Shield,
	},
];

const useCases = [
	{
		title: "Client Collaboration",
		description:
			"Work directly with clients in shared spaces without compromising internal privacy.",
		icon: Briefcase,
		badge: "Popular",
	},
	{
		title: "Vendor & Partner Work",
		description:
			"Collaborate with vendors and partners on joint projects with appropriate access.",
		icon: Handshake,
	},
	{
		title: "Professional Networking",
		description:
			"Expand your professional network. Find experts, service providers, and potential partners.",
		icon: Building2,
	},
];

export default function NetworkingPage() {
	return (
		<div className="bg-background">
			<ProductHero
				icon={Users}
				badge="Secure External Collaboration"
				title="Connect Beyond Your"
				highlightedText="Organization"
				description="Melp lets you securely invite clients, partners, and freelancers into your workspace — without compromising privacy. Search, connect, and collaborate with professionals by title, location, or services offered."
				features={[
					"Build external networks easily",
					"Add collaborators to Teams or Groups",
					"Maintain secure access control",
					"Enterprise-grade security for all",
				]}
				primaryCta={{ text: "Start Networking", href: "/pricing" }}
				secondaryCta={{ text: "Learn More", href: "#demo" }}
				gradient="from-violet-500/20 via-violet-500/5 to-transparent"
			/>

			<ProductFeatures
				label="What It Enables"
				title="Collaboration without boundaries"
				description="Extend your workspace to trusted external collaborators while maintaining security."
				features={features}
			/>

			<ProductBenefits
				label="Results"
				title="Expand your network — safely and intuitively"
				description="Organizations and professionals can broaden collaboration without complexity or security risk."
				benefits={benefits}
				layout="alternating"
			/>

			<ProductUseCases
				label="Perfect For"
				title="Built for modern collaboration"
				description="From client work to vendor partnerships, Melp makes external collaboration seamless."
				useCases={useCases}
			/>

			<ProductCTA
				icon={Users}
				title="Ready to expand your network?"
				description="Join thousands of organizations collaborating beyond their walls with Melp."
				primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
				secondaryCta={{ text: "Schedule Demo", href: "/contact" }}
				features={[
					"Secure guest access",
					"Professional directory",
					"Access controls",
					"Team integration",
				]}
			/>
		</div>
	);
}
