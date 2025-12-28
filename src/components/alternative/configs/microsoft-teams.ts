import { AlternativePageConfig } from "../types";

export const microsoftTeamsConfig: AlternativePageConfig = {
	competitorName: "Microsoft Teams",
	sections: [
		{
			id: "hero",
			type: "hero",
			data: {
				badgeText: "A Modern Teams Alternative",
				headlinePrimary: "Microsoft Teams Alternative",
				headlineSecondary: "for Simpler, Smarter Collaboration",
				subheadline:
					"Melp App is a modern Microsoft Teams alternative built for teams that want structured, secure collaboration without the complexity. Bring messaging, meetings, shared workspaces, and AI assistance into one lightweight, intuitive platform.",
				imageDescription:
					"Hero image showing Melp's clean, organized workspace interface. Ideally a full-width screenshot of the main dashboard with visible team channels, messaging area, and sidebar navigation. Should highlight simplicity compared to Teams' complex UI.",
			},
		},
		{
			id: "why-switching",
			type: "why-switching",
			data: {
				label: "Why Switch?",
				title: "Why Businesses Are Looking for an Alternative to Microsoft Teams",
				description:
					"Microsoft Teams is a powerful tool for businesses already committed to the Microsoft ecosystem. But its depth comes with trade-offs. Many teams struggle with Teams' complexity, rigid structure, and friction when collaborating across organizations.",
				painPoints: [
					{
						icon: "Layers",
						title: "Tool overload and fragmented communication",
						description:
							"Teams requires switching between channels, chats, meetings, files, and apps. Important updates often get buried in long threads or scattered across tools.",
					},
					{
						icon: "SlidersHorizontal",
						title: "Complex user interface and learning curve",
						description:
							"From permissions and team roles to threaded replies and notifications, Teams can feel unintuitive—especially for non-technical users or external guests.",
					},
					{
						icon: "Users",
						title: "Challenges with external collaboration",
						description:
							"Working with clients, freelancers, or partners in Teams involves tenant switching, guest access, or admin setup. This slows down external collaboration.",
					},
				],
				gridCols: 3,
				imageDescription:
					"Visual showing the pain of fragmented collaboration tools. Could be an illustration of multiple disconnected app windows (Teams channels, emails, Slack, docs) causing confusion, OR a side-by-side showing cluttered Teams UI vs. clean Melp interface. Avoid direct competitor logos.",
			},
		},
		{
			id: "benefits",
			type: "benefits",
			data: {
				label: "Why Melp",
				title: "Melp App — A Flexible Microsoft Teams Alternative",
				description:
					"Melp App is designed for teams who want to communicate clearly, collaborate confidently, and stay aligned—without navigating a maze of channels or juggling disconnected tools.",
				benefits: [
					{
						icon: "LayoutGrid",
						title: "Organized workspaces, not chaotic channels",
						description:
							"Melp's interface focuses on clarity. Conversations stay structured by team or topic, so context is never lost and updates are easy to find.",
					},
					{
						icon: "Layers",
						title: "No tool overload",
						description:
							"Melp combines chat, meetings, scheduling, and file sharing in one connected workspace—no need to toggle between apps to get work done.",
					},
					{
						icon: "Users",
						title: "Built-in external collaboration",
						description:
							"Invite clients, vendors, or freelancers securely—without needing IT or complex identity management. External users can participate with full context.",
					},
					{
						icon: "Bot",
						title: "AI-powered clarity",
						description:
							"Melp includes automatic meeting summaries, multilingual translation, and real-time collaboration tools that help teams communicate efficiently and stay on track.",
					},
				],
				imageDescription:
					"Screenshot showing Melp's organized workspace structure. Display the team/topic hierarchy, clean sidebar navigation, and how conversations are neatly categorized. Should emphasize the 'organized workspaces' benefit.",
			},
		},
		{
			id: "differentiators",
			type: "differentiators",
			data: {
				label: "Why Teams Choose Melp",
				title: "Why Teams Choose Melp Over Traditional Collaboration Suites",
				description:
					"Teams switching from Microsoft Teams are often looking for a clearer, more streamlined way to collaborate. Melp provides structure, flexibility, and focus—without sacrificing security or scalability.",
				differentiators: [
					{
						icon: "Sparkles",
						title: "Less clutter, more clarity",
						description:
							"Conversations are easy to follow. No more buried threads or lost follow-ups.",
					},
					{
						icon: "Zap",
						title: "Fast onboarding",
						description:
							"New users—including external collaborators—can get started without training or account friction.",
					},
					{
						icon: "Globe",
						title: "Works across teams and organizations",
						description:
							"Melp adapts to internal and cross-functional collaboration, making it ideal for client-facing or distributed teams.",
					},
					{
						icon: "Shield",
						title: "Security and compliance by design",
						description:
							"Melp supports SOC 2, GDPR, HIPAA, and enterprise-grade security features like MFA and encrypted communication.",
					},
				],
				gridCols: 4,
				image1Description:
					"Screenshot showing external collaboration in action. Display a shared workspace with both internal team members and external guests (clients/partners) collaborating together. Highlight how easy it is to invite external users.",
				image2Description:
					"Visual showing Melp's security features and compliance badges. Could be a screenshot of admin security settings, or an illustration featuring SOC 2, GDPR, HIPAA badges with security icons (encryption, MFA, etc.).",
			},
		},
		{
			id: "testimonials",
			type: "testimonials",
			data: {
				label: "Trusted by Teams Worldwide",
				title: "Trusted by Teams Replacing Microsoft Teams",
				description:
					"From fast-growing startups to global enterprises, teams use Melp to simplify how they collaborate—internally and externally. Melp gives you all the benefits of modern collaboration software, without the noise, friction, or complexity.",
				testimonials: [
					{
						quote:
							"We needed a tool that external partners could use without complex onboarding. Melp made collaboration seamless from day one.",
						author: "Sarah Mitchell",
						role: "Head of Operations",
						company: "TechVentures Inc.",
						avatar: "/users/user-1.png",
					},
					{
						quote:
							"Teams was too complex for our team. With Melp, everyone knows where to find conversations and how to stay aligned—no training required.",
						author: "Michael Chen",
						role: "CTO",
						company: "StartupFlow",
						avatar: "/users/user-2.png",
					},
				],
				ratings: [
					{ platform: "G2 Crowd", rating: "4.8", logo: "/g2-logo.svg" },
					{ platform: "Capterra", rating: "4.7", logo: "/capterra-logo.svg" },
				],
			},
		},
		{
			id: "faq",
			type: "faq",
			data: {
				label: "Frequently Asked Questions",
				title: "Frequently Asked Questions About Microsoft Teams Alternatives",
				faqs: [
					{
						question:
							"What is the best Microsoft Teams alternative for modern teams?",
						answer:
							"The best Microsoft Teams alternative is one that fits your team's workflow. Melp App helps teams communicate clearly, stay organized, and work across organizations in one secure platform.",
					},
					{
						question: "Why are companies switching away from Microsoft Teams?",
						answer:
							"Many teams find Microsoft Teams overwhelming due to its interface complexity, heavy structure, and difficulty onboarding external users. Alternatives like Melp offer a lighter, more intuitive experience.",
					},
					{
						question: "Are there free alternatives to Microsoft Teams?",
						answer:
							"Yes. Melp offers a free plan with structured messaging, meetings, file sharing, and AI summaries—making it ideal for small and growing teams.",
					},
					{
						question: "How is Melp different from Teams?",
						answer:
							"Melp focuses on simplicity and structure. It reduces tool overload, simplifies external collaboration, and supports multilingual, AI-assisted communication—all in one platform.",
					},
				],
			},
		},
		{
			id: "cta",
			type: "cta",
			data: {
				label: "Ready to Switch?",
				title: "Ready to Switch from Microsoft Teams?",
				description:
					"If your team wants more clarity, less clutter, and better collaboration across departments and organizations—Melp is the Microsoft Teams alternative built for you. Start for free or schedule a demo today.",
				bottomNote:
					"No credit card required • Free migration support • Cancel anytime",
			},
		},
	],
};
