import { AlternativePageConfig } from "../types";

export const zoomConfig: AlternativePageConfig = {
	competitorName: "Zoom",
	sections: [
		{
			id: "hero",
			type: "hero",
			data: {
				badgeText: "A Modern Zoom Alternative",
				headlinePrimary: "Zoom Alternative",
				headlineSecondary: "for Modern Business Collaboration",
				subheadline:
					"Melp App is a modern Zoom alternative built for teams that need more than video meetings. Support continuous collaboration—before, during, and after meetings—in one structured digital workspace.",
				imageDescription:
					"Hero image showing Melp's unified collaboration workspace. Display a view that includes both messaging AND a meeting/video call interface together, emphasizing 'more than just meetings'. Should show the before/during/after meeting workflow in one connected space.",
			},
		},
		{
			id: "why-switching",
			type: "why-switching",
			data: {
				label: "Why Switch?",
				title: "Why Businesses Are Looking for an Alternative to Zoom",
				description:
					"Zoom is widely adopted for video meetings because it is easy to use and reliable for live communication. However, as teams grow and work becomes more cross-functional, many organizations begin to experience limitations with a meeting-first approach.",
				painPoints: [
					{
						icon: "Video",
						title: "Meeting-first tools leave gaps between calls",
						description:
							"Zoom meetings end, but work continues. Decisions, ideas, and next steps often move into emails, chat apps, documents, or task tools—splitting context across platforms.",
					},
					{
						icon: "MessageSquareOff",
						title: "Conversations lose continuity after meetings",
						description:
							"When discussions exist only inside meetings, teams struggle to track outcomes. Important information is frequently lost once the call ends, making follow-through harder.",
					},
					{
						icon: "Calendar",
						title: "Too many meetings create fatigue",
						description:
							"Because meetings are the primary way to collaborate, teams often schedule calls for updates that could happen asynchronously. Over time, this leads to calendar overload and reduced focus.",
					},
					{
						icon: "Users",
						title: "External collaboration lacks a shared workspace",
						description:
							"Zoom works well for inviting guests to meetings, but ongoing collaboration with clients, vendors, or partners typically requires additional tools to maintain shared context.",
					},
				],
				gridCols: 2,
				imageDescription:
					"Visual illustrating meeting fatigue and fragmented workflows. Could show a cluttered calendar full of meetings, OR a timeline showing how context is lost after meetings end (meeting → emails → docs → tasks scattered). Emphasize the 'before, during, after' problem.",
			},
		},
		{
			id: "benefits",
			type: "benefits",
			data: {
				label: "Why Melp",
				title: "Melp App — A Complete Zoom Alternative",
				description:
					"Melp App is designed for teams who want more than meetings. Communicate clearly, collaborate continuously, and keep context alive—before, during, and after every call.",
				benefits: [
					{
						icon: "LayoutGrid",
						title: "Continuous collaboration, not just calls",
						description:
							"Melp connects meetings to ongoing conversations. Discussions, decisions, and follow-ups stay in one place—so nothing gets lost between calls.",
					},
					{
						icon: "Layers",
						title: "Reduce meeting overload",
						description:
							"With structured messaging and async collaboration, teams can resolve more without scheduling another call. Meetings become optional, not mandatory.",
					},
					{
						icon: "Users",
						title: "Built-in external collaboration",
						description:
							"Invite clients, vendors, or freelancers into shared workspaces—not just meetings. Everyone stays aligned with full context, not just calendar invites.",
					},
					{
						icon: "Bot",
						title: "AI-powered meeting summaries",
						description:
							"Melp automatically captures meeting notes, action items, and key decisions. Never miss a follow-up or forget what was discussed.",
					},
				],
				imageDescription:
					"Screenshot showing the before/during/after workflow. Display how a meeting connects to its related channel or workspace, with pre-meeting notes, during-meeting chat, and post-meeting summary all visible in one unified view.",
			},
		},
		{
			id: "differentiators",
			type: "differentiators",
			data: {
				label: "Why Teams Choose Melp",
				title: "Why Teams Choose Melp Over Meeting-Only Tools",
				description:
					"Teams switching from Zoom are often looking for a way to reduce meeting overload while improving collaboration quality. Melp provides the complete package—meetings plus everything around them.",
				differentiators: [
					{
						icon: "Sparkles",
						title: "Context that persists",
						description:
							"Conversations don't end when the meeting does. Everything stays connected and searchable.",
					},
					{
						icon: "Zap",
						title: "Fewer meetings, better outcomes",
						description:
							"Async-first collaboration means teams resolve more without scheduling another call.",
					},
					{
						icon: "Globe",
						title: "Works across time zones",
						description:
							"Melp supports distributed teams with async messaging, recorded meetings, and AI summaries.",
					},
					{
						icon: "Shield",
						title: "Enterprise-grade security",
						description:
							"Melp supports SOC 2, GDPR, HIPAA, and security features like MFA and end-to-end encryption.",
					},
				],
				gridCols: 4,
				image1Description:
					"Screenshot showing async collaboration in action. Display a workspace with messages, shared files, and a completed meeting with its summary—all connected. Emphasize that work continues without constant live calls.",
				image2Description:
					"Visual showing Melp's AI meeting features. Could show a meeting summary with action items extracted, or the AI assistant helping capture key decisions and next steps.",
			},
		},
		{
			id: "testimonials",
			type: "testimonials",
			data: {
				label: "Trusted by Teams Worldwide",
				title: "Trusted by Teams Moving Beyond Zoom",
				description:
					"From fast-growing startups to distributed enterprises, teams use Melp to reduce meeting overload and improve collaboration quality. Get more done with fewer calls.",
				testimonials: [
					{
						quote:
							"We cut our meeting time in half after switching to Melp. The async collaboration features mean we only meet when we really need to.",
						author: "David Park",
						role: "VP of Engineering",
						company: "CloudScale Systems",
						avatar: "/users/user-3.png",
					},
					{
						quote:
							"Zoom was great for calls, but we needed more. Melp gives us meetings plus everything around them—context, follow-ups, and continuous collaboration.",
						author: "Jennifer Walsh",
						role: "Director of Operations",
						company: "GlobalTech Partners",
						avatar: "/users/user-1.png",
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
				title: "Frequently Asked Questions About Zoom Alternatives",
				faqs: [
					{
						question:
							"What is the best Zoom alternative for business collaboration?",
						answer:
							"The best Zoom alternative depends on how teams work. For organizations that need collaboration beyond live meetings, Melp App provides a more complete digital workplace.",
					},
					{
						question: "Why do teams look for alternatives to Zoom?",
						answer:
							"Teams often seek alternatives when meetings become excessive, conversations lose context, or collaboration requires multiple disconnected tools.",
					},
					{
						question: "Are there free alternatives to Zoom for growing teams?",
						answer:
							"Yes. Melp App offers a free plan that allows teams to start collaborating quickly without complex setup, making it suitable for early-stage and growing organizations.",
					},
					{
						question: "How is Melp different from Zoom?",
						answer:
							"Zoom is primarily built for video meetings. Melp focuses on ongoing collaboration, supporting communication before, during, and after meetings in one shared workspace.",
					},
					{
						question: "Can Melp replace Zoom completely?",
						answer:
							"For many teams, yes. Melp supports meetings while also reducing the need for constant calls through structured, asynchronous collaboration.",
					},
				],
			},
		},
		{
			id: "cta",
			type: "cta",
			data: {
				label: "Ready to Switch?",
				title: "Ready to Move Beyond Zoom?",
				description:
					"If your team wants fewer meetings, better collaboration, and context that persists—Melp is the Zoom alternative built for modern work. Start for free or schedule a demo today.",
				bottomNote:
					"No credit card required • Free migration support • Cancel anytime",
			},
		},
	],
};
