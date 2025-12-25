import {
	LucideIcon,
	Zap,
	Users,
	Building2,
	Crown,
	Sparkles,
} from "lucide-react";

// ============================================
// Types
// ============================================

export interface PlanFeature {
	text: string;
	included: boolean;
	highlight?: boolean;
}

export interface PricingPlan {
	id: string;
	name: string;
	description: string;
	icon: LucideIcon;
	monthlyPrice: number | null; // null for custom pricing
	yearlyPrice: number | null;
	currency: string;
	popular?: boolean;
	bestValue?: boolean;
	discount?: string; // e.g., "Save 20%"
	basePlan?: string; // e.g., "Free" - shows "Everything in Free, plus:"
	features: PlanFeature[];
	cta: string;
	ctaVariant: "brand-primary" | "outline" | "secondary";
}

export interface ComparisonFeature {
	category: string;
	features: {
		name: string;
		tooltip?: string;
		plans: Record<string, boolean | string>; // plan id -> included/value
	}[];
}

// ============================================
// Individual Plans (2 plans)
// ============================================

export const individualPlans: PricingPlan[] = [
	{
		id: "free",
		name: "Free",
		description: "For individuals getting started with Melp",
		icon: Zap,
		monthlyPrice: 0,
		yearlyPrice: 0,
		currency: "$",
		features: [
			{ text: "1 user", included: true },
			{ text: "10 GB storage", included: true },
			{ text: "5 Teams, Topics & Groups", included: true },
			{ text: "5 participants per meeting", included: true },
			{ text: "1 hour meeting duration", included: true },
			{ text: "5 meeting recordings", included: true },
			{ text: "10 scheduled meetings/month", included: true },
			{ text: "Essential AI features", included: true },
			{ text: "20 MB file uploads", included: true },
			{ text: "3 months chat history", included: true },
		],
		cta: "Get started",
		ctaVariant: "outline",
	},
	{
		id: "plus",
		name: "Plus",
		description: "For power users and small groups",
		icon: Sparkles,
		monthlyPrice: 7,
		yearlyPrice: 5,
		currency: "$",
		popular: true,
		discount: "Save 22%",
		basePlan: "Free",
		features: [
			{ text: "Up to 10 users", included: true },
			{ text: "100 GB storage", included: true },
			{ text: "30 participants per meeting", included: true },
			{ text: "3 hour meeting duration", included: true },
			{ text: "Breakout rooms", included: true, highlight: true },
			{ text: "100 scheduled meetings/month", included: true },
			{ text: "AI meeting summaries", included: true, highlight: true },
			{ text: "Enhanced AI tools", included: true },
			{ text: "50 MB file uploads", included: true },
			{ text: "9 months chat history", included: true },
		],
		cta: "Get started",
		ctaVariant: "brand-primary",
	},
];

// ============================================
// Business Plans (3 plans)
// ============================================

export const businessPlans: PricingPlan[] = [
	{
		id: "team",
		name: "Team",
		description: "For small teams collaborating together",
		icon: Users,
		monthlyPrice: 8,
		yearlyPrice: 6,
		currency: "$",
		discount: "Save 25%",
		features: [
			{ text: "Up to 100 users", included: true },
			{ text: "250 GB storage", included: true },
			{ text: "25 Teams, Topics & Groups", included: true },
			{ text: "50 participants per meeting", included: true },
			{ text: "4 hour meeting duration", included: true },
			{ text: "150 scheduled meetings/month", included: true },
			{ text: "AI recording & summaries", included: true, highlight: true },
			{ text: "Full AI toolkit", included: true },
			{ text: "Melp Evaluation Mode", included: true, highlight: true },
			{ text: "50 MB file uploads", included: true },
		],
		cta: "Get started",
		ctaVariant: "outline",
	},
	{
		id: "business",
		name: "Business",
		description: "Advanced tools for growing companies",
		icon: Building2,
		monthlyPrice: 12,
		yearlyPrice: 9,
		currency: "$",
		popular: true,
		discount: "Save 25%",
		basePlan: "Team",
		features: [
			{ text: "Up to 500 users", included: true },
			{ text: "500 GB storage", included: true },
			{ text: "100 Teams, Topics & Groups", included: true },
			{ text: "100 participants per meeting", included: true },
			{ text: "8 hour meeting duration", included: true },
			{ text: "Unlimited meetings", included: true, highlight: true },
			{ text: "Business app integrations", included: true },
			{ text: "12 months chat history", included: true },
			{ text: "CSV bulk invite (1,000 users)", included: true, highlight: true },
			{ text: "Priority support", included: true },
		],
		cta: "Get started",
		ctaVariant: "brand-primary",
	},
	{
		id: "enterprise",
		name: "Enterprise",
		description: "Advanced controls and support for large teams",
		icon: Crown,
		monthlyPrice: null,
		yearlyPrice: null,
		currency: "$",
		bestValue: true,
		basePlan: "Business",
		features: [
			{ text: "500+ users", included: true },
			{ text: "1 TB storage", included: true },
			{ text: "Unlimited Teams, Topics & Groups", included: true, highlight: true },
			{ text: "Unlimited meeting participants", included: true },
			{ text: "Unlimited meeting duration", included: true },
			{ text: "Unlimited AI capabilities", included: true, highlight: true },
			{ text: "Unlimited recordings", included: true },
			{ text: "CSV bulk invite (1,500 users)", included: true },
			{ text: "Unlimited chat history", included: true },
			{ text: "Dedicated support", included: true, highlight: true },
		],
		cta: "Contact sales",
		ctaVariant: "secondary",
	},
];

// ============================================
// Feature Comparison Data
// ============================================

export const individualComparison: ComparisonFeature[] = [
	{
		category: "Usage",
		features: [
			{
				name: "Maximum number of users",
				tooltip: "Total number of user accounts you can have in your workspace",
				plans: { free: "1", plus: "10" },
			},
			{
				name: "Storage",
				tooltip: "Cloud storage for files, documents, and media",
				plans: { free: "10 GB", plus: "100 GB" },
			},
			{
				name: "Chat history",
				tooltip: "How long your message history is retained and searchable",
				plans: { free: "3 Months", plus: "9 Months" },
			},
		],
	},
	{
		category: "Meetings & Calls",
		features: [
			{
				name: "Participants",
				tooltip: "Maximum number of people who can join a single meeting",
				plans: { free: "5", plus: "30" },
			},
			{
				name: "Screen sharing",
				tooltip: "Share your screen or specific windows during meetings",
				plans: { free: true, plus: true },
			},
			{
				name: "Customized backgrounds",
				tooltip: "Replace your background with images or blur effects",
				plans: { free: true, plus: true },
			},
			{
				name: "Visual effects",
				tooltip: "Apply filters and visual enhancements during video calls",
				plans: { free: true, plus: true },
			},
			{
				name: "Single meeting duration",
				tooltip: "Maximum length of a single meeting session",
				plans: { free: "1 hour", plus: "3 hours" },
			},
			{
				name: "Personal Room",
				tooltip: "Your dedicated meeting space with a permanent link",
				plans: { free: "5 meetings/month", plus: "50 meetings/month" },
			},
			{
				name: "Group/Teams Meeting",
				tooltip: "Meetings within your teams and groups",
				plans: { free: "5 meetings/month", plus: "50 meetings/month" },
			},
			{
				name: "Chat available after call",
				tooltip: "Continue conversations in chat after meetings end",
				plans: { free: true, plus: true },
			},
			{
				name: "Meeting recordings",
				tooltip: "Record meetings for later playback and sharing",
				plans: { free: "5 meetings/month", plus: "50 meetings/month" },
			},
			{
				name: "Administrator controls for meeting room",
				tooltip: "Mute participants, manage permissions, and control meeting flow",
				plans: { free: true, plus: true },
			},
			{
				name: "Breakout rooms",
				tooltip: "Split participants into smaller groups for discussions",
				plans: { free: false, plus: true },
			},
			{
				name: "Noise suppression",
				tooltip: "AI-powered background noise reduction during calls",
				plans: { free: false, plus: true },
			},
			{
				name: "Scheduled meetings",
				tooltip: "Pre-schedule meetings with calendar invites",
				plans: { free: "10 meetings/month", plus: "50 meetings/month" },
			},
			{
				name: "Melp Whiteboard",
				tooltip: "Collaborative digital whiteboard for brainstorming",
				plans: { free: false, plus: true },
			},
			{
				name: "Melp Pad",
				tooltip: "Real-time collaborative note-taking during meetings",
				plans: { free: true, plus: true },
			},
			{
				name: "Speech to text translation (90 languages)",
				tooltip: "Live transcription and translation in 90+ languages",
				plans: { free: "5/month", plus: "100/month" },
			},
			{
				name: "Webinar (Live Streaming)",
				tooltip: "Host large-scale presentations and live events",
				plans: { free: false, plus: true },
			},
			{
				name: "Polls",
				tooltip: "Create interactive polls during meetings",
				plans: { free: "2 per meeting", plus: "5 per meeting" },
			},
			{
				name: "Live Calls",
				tooltip: "Instant voice and video calls to your contacts",
				plans: { free: true, plus: true },
			},
		],
	},
	{
		category: "AI Features",
		features: [
			{
				name: "AI meeting summary",
				tooltip: "Automatic meeting notes with key points and action items",
				plans: { free: "5 meetings/month", plus: "100 meetings/month" },
			},
			{
				name: "AI chatbot",
				tooltip: "AI assistant to help with questions and tasks",
				plans: { free: true, plus: true },
			},
			{
				name: "AI real-time chat translation",
				tooltip: "Instant message translation for multilingual teams",
				plans: { free: "100/month", plus: "Unlimited" },
			},
			{
				name: "Draft for me",
				tooltip: "AI-powered message and document drafting",
				plans: { free: "10/month", plus: "50/month" },
			},
			{
				name: "Evaluation Mode",
				tooltip: "AI-assisted interview evaluation and scoring",
				plans: { free: false, plus: true },
			},
			{
				name: "Question craft with JD and resume",
				tooltip: "Generate interview questions based on job descriptions and resumes",
				plans: { free: false, plus: true },
			},
		],
	},
	{
		category: "Messaging",
		features: [
			{
				name: "Unlimited chat messages",
				tooltip: "Send unlimited messages across all conversations",
				plans: { free: true, plus: true },
			},
			{
				name: "File attachments in chat",
				tooltip: "Share files directly in chat conversations",
				plans: { free: true, plus: true },
			},
			{
				name: "Max file upload size",
				tooltip: "Maximum size for individual file uploads",
				plans: { free: "20 MB", plus: "50 MB" },
			},
			{
				name: "Number of Teams/Topics",
				tooltip: "Organize conversations into teams and topic channels",
				plans: { free: "5 Teams/Topics", plus: "25 Teams & 10 Topics" },
			},
			{
				name: "Number of Groups",
				tooltip: "Private group chats for focused discussions",
				plans: { free: "5 Groups", plus: "25 Groups" },
			},
			{
				name: "Chat group size",
				tooltip: "Maximum members in a single group chat",
				plans: { free: "5", plus: "30" },
			},
			{
				name: "Share Links",
				tooltip: "Share URLs with rich previews in chat",
				plans: { free: true, plus: true },
			},
			{
				name: "Write & Share",
				tooltip: "Create and share formatted documents directly",
				plans: { free: "5/month", plus: "50/month" },
			},
			{
				name: "Email your chat",
				tooltip: "Export chat conversations to email",
				plans: { free: "5/month", plus: "50/month" },
			},
			{
				name: "Chat history",
				tooltip: "Access and search past conversations",
				plans: { free: "3 Months", plus: "9 Months" },
			},
			{
				name: "Global search",
				tooltip: "Search across all chats, groups, and files",
				plans: { free: true, plus: true },
			},
			{
				name: "Pinned messages",
				tooltip: "Pin important messages for quick access",
				plans: { free: true, plus: true },
			},
		],
	},
	{
		category: "Calendar",
		features: [
			{
				name: "Sync with Google/Microsoft Calendar",
				tooltip: "Two-way sync with your existing calendar",
				plans: { free: true, plus: true },
			},
			{
				name: "Create event types",
				tooltip: "Define different meeting types with custom settings",
				plans: { free: true, plus: true },
			},
			{
				name: "Share calendar for bookings",
				tooltip: "Let others book time on your calendar",
				plans: { free: true, plus: true },
			},
			{
				name: "Manage availability",
				tooltip: "Set your working hours and availability windows",
				plans: { free: true, plus: true },
			},
			{
				name: "Custom calendar link",
				tooltip: "Personalized booking link for scheduling",
				plans: { free: true, plus: true },
			},
		],
	},
	{
		category: "Network",
		features: [
			{
				name: "Bulk invite",
				tooltip: "Invite multiple users at once via CSV upload",
				plans: { free: false, plus: true },
			},
			{
				name: "Invite people",
				tooltip: "Send invitations to join your workspace",
				plans: { free: true, plus: true },
			},
			{
				name: "Import contacts",
				tooltip: "Import contacts from other platforms",
				plans: { free: true, plus: true },
			},
			{
				name: "Contact search",
				tooltip: "Find contacts quickly across your network",
				plans: { free: true, plus: true },
			},
			{
				name: "Contact filters",
				tooltip: "Filter and sort contacts by various criteria",
				plans: { free: true, plus: true },
			},
		],
	},
	{
		category: "Melp Office Suite",
		features: [
			{
				name: "Docs, Sheets & Presentations",
				tooltip: "Create and edit documents, spreadsheets, and slides",
				plans: { free: true, plus: true },
			},
			{
				name: "Cloud storage",
				tooltip: "Store and access files from anywhere",
				plans: { free: "10 GB", plus: "100 GB" },
			},
			{
				name: "Collaborative editing",
				tooltip: "Work on documents together in real-time",
				plans: { free: "2 Users", plus: "7 Users" },
			},
			{
				name: "Document translation",
				tooltip: "Translate documents into 10+ languages",
				plans: { free: "5 Docs/month", plus: "25 Docs/month" },
			},
		],
	},
	{
		category: "Administration & Support",
		features: [
			{
				name: "Admin panel",
				tooltip: "Manage users, permissions, and workspace settings",
				plans: { free: false, plus: true },
			},
			{
				name: "AI support chatbot",
				tooltip: "Get instant help from our AI assistant",
				plans: { free: true, plus: true },
			},
		],
	},
];

export const businessComparison: ComparisonFeature[] = [
	{
		category: "Usage",
		features: [
			{
				name: "Maximum number of users",
				tooltip: "Total number of user accounts you can have in your workspace",
				plans: { team: "100", business: "500", enterprise: "500+" },
			},
			{
				name: "Storage",
				tooltip: "Cloud storage for files, documents, and media",
				plans: { team: "250 GB", business: "500 GB", enterprise: "1 TB" },
			},
			{
				name: "Chat history",
				tooltip: "How long your message history is retained and searchable",
				plans: { team: "9 Months", business: "12 Months", enterprise: "Unlimited" },
			},
		],
	},
	{
		category: "Meetings & Calls",
		features: [
			{
				name: "Participants",
				tooltip: "Maximum number of people who can join a single meeting",
				plans: { team: "50", business: "100", enterprise: "300" },
			},
			{
				name: "Screen sharing",
				tooltip: "Share your screen or specific windows during meetings",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Customized backgrounds",
				tooltip: "Replace your background with images or blur effects",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Visual effects",
				tooltip: "Apply filters and visual enhancements during video calls",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Single meeting duration",
				tooltip: "Maximum length of a single meeting session",
				plans: { team: "4 hours", business: "8 hours", enterprise: "24 hours" },
			},
			{
				name: "Personal Room",
				tooltip: "Your dedicated meeting space with a permanent link",
				plans: { team: "100 meetings/month", business: "Unlimited", enterprise: "Unlimited" },
			},
			{
				name: "Group/Teams Meeting",
				tooltip: "Meetings within your teams and groups",
				plans: { team: "100 meetings/month", business: "Unlimited", enterprise: "Unlimited" },
			},
			{
				name: "Chat available after call",
				tooltip: "Continue conversations in chat after meetings end",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Meeting recordings",
				tooltip: "Record meetings for later playback and sharing",
				plans: { team: "100 meetings/month", business: "Unlimited", enterprise: "Unlimited" },
			},
			{
				name: "Administrator controls",
				tooltip: "Mute participants, manage permissions, and control meeting flow",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Breakout rooms",
				tooltip: "Split participants into smaller groups for discussions",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Noise suppression",
				tooltip: "AI-powered background noise reduction during calls",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Scheduled meetings",
				tooltip: "Pre-schedule meetings with calendar invites",
				plans: { team: "100 meetings/month", business: "Unlimited", enterprise: "Unlimited" },
			},
			{
				name: "Melp Whiteboard",
				tooltip: "Collaborative digital whiteboard for brainstorming",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Melp Pad",
				tooltip: "Real-time collaborative note-taking during meetings",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Speech to text translation (90 languages)",
				tooltip: "Live transcription and translation in 90+ languages",
				plans: { team: "150/month", business: "Unlimited", enterprise: "Unlimited" },
			},
			{
				name: "Webinar (Live Streaming)",
				tooltip: "Host large-scale presentations and live events",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Polls",
				tooltip: "Create interactive polls during meetings",
				plans: { team: "5 per meeting", business: "10 per meeting", enterprise: "Unlimited" },
			},
			{
				name: "Live Calls",
				tooltip: "Instant voice and video calls to your contacts",
				plans: { team: true, business: true, enterprise: true },
			},
		],
	},
	{
		category: "AI Features",
		features: [
			{
				name: "AI meeting summary",
				tooltip: "Automatic meeting notes with key points and action items",
				plans: { team: "150 meetings/month", business: "250 meetings/month", enterprise: "Unlimited" },
			},
			{
				name: "AI chatbot",
				tooltip: "AI assistant to help with questions and tasks",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "AI real-time chat translation",
				tooltip: "Instant message translation for multilingual teams",
				plans: { team: "Unlimited", business: "Unlimited", enterprise: "Unlimited" },
			},
			{
				name: "Draft for me",
				tooltip: "AI-powered message and document drafting",
				plans: { team: "75/month", business: "150/month", enterprise: "Unlimited" },
			},
			{
				name: "Evaluation Mode",
				tooltip: "AI-assisted interview evaluation and scoring",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Question craft with JD and resume",
				tooltip: "Generate interview questions based on job descriptions and resumes",
				plans: { team: true, business: true, enterprise: true },
			},
		],
	},
	{
		category: "Messaging",
		features: [
			{
				name: "Unlimited chat messages",
				tooltip: "Send unlimited messages across all conversations",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "File attachments in chat",
				tooltip: "Share files directly in chat conversations",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Max file upload size",
				tooltip: "Maximum size for individual file uploads",
				plans: { team: "50 MB", business: "50 MB", enterprise: "50 MB" },
			},
			{
				name: "Number of Teams/Topics",
				tooltip: "Organize conversations into teams and topic channels",
				plans: { team: "25 Teams & 10 Topics", business: "100 Teams & 10 Topics", enterprise: "Unlimited" },
			},
			{
				name: "Number of Groups",
				tooltip: "Private group chats for focused discussions",
				plans: { team: "25 Groups", business: "100 Groups", enterprise: "Unlimited" },
			},
			{
				name: "Chat group size",
				tooltip: "Maximum members in a single group chat",
				plans: { team: "30", business: "100", enterprise: "300" },
			},
			{
				name: "Share Links",
				tooltip: "Share URLs with rich previews in chat",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Write & Share",
				tooltip: "Create and share formatted documents directly",
				plans: { team: "50/month", business: "100/month", enterprise: "Unlimited" },
			},
			{
				name: "Email your chat",
				tooltip: "Export chat conversations to email",
				plans: { team: "50/month", business: "100/month", enterprise: "Unlimited" },
			},
			{
				name: "Chat history",
				tooltip: "Access and search past conversations",
				plans: { team: "9 Months", business: "12 Months", enterprise: "Unlimited" },
			},
			{
				name: "Global search",
				tooltip: "Search across all chats, groups, and files",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Pinned messages",
				tooltip: "Pin important messages for quick access",
				plans: { team: true, business: true, enterprise: true },
			},
		],
	},
	{
		category: "Calendar",
		features: [
			{
				name: "Sync with Google/Microsoft Calendar",
				tooltip: "Two-way sync with your existing calendar",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Create event types",
				tooltip: "Define different meeting types with custom settings",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Share calendar for bookings",
				tooltip: "Let others book time on your calendar",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Manage availability",
				tooltip: "Set your working hours and availability windows",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Custom calendar link",
				tooltip: "Personalized booking link for scheduling",
				plans: { team: true, business: true, enterprise: true },
			},
		],
	},
	{
		category: "Network",
		features: [
			{
				name: "Bulk invite",
				tooltip: "Invite multiple users at once via CSV upload",
				plans: { team: false, business: "1,000 per CSV", enterprise: "1,500 per CSV" },
			},
			{
				name: "Invite people",
				tooltip: "Send invitations to join your workspace",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Import contacts",
				tooltip: "Import contacts from other platforms",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Contact search",
				tooltip: "Find contacts quickly across your network",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Contact filters",
				tooltip: "Filter and sort contacts by various criteria",
				plans: { team: true, business: true, enterprise: true },
			},
		],
	},
	{
		category: "Melp Office Suite",
		features: [
			{
				name: "Docs, Sheets & Presentations",
				tooltip: "Create and edit documents, spreadsheets, and slides",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Cloud storage",
				tooltip: "Store and access files from anywhere",
				plans: { team: "250 GB", business: "500 GB", enterprise: "1 TB" },
			},
			{
				name: "Collaborative editing",
				tooltip: "Work on documents together in real-time",
				plans: { team: "10 Users", business: "20 Users", enterprise: "Unlimited" },
			},
			{
				name: "Document translation",
				tooltip: "Translate documents into 10+ languages",
				plans: { team: "5 Docs/month", business: "25 Docs/month", enterprise: "Unlimited" },
			},
		],
	},
	{
		category: "Administration & Support",
		features: [
			{
				name: "Admin panel",
				tooltip: "Manage users, permissions, and workspace settings",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Priority support",
				tooltip: "Faster response times and dedicated support channels",
				plans: { team: false, business: true, enterprise: true },
			},
			{
				name: "Dedicated support",
				tooltip: "Personal account manager and custom onboarding",
				plans: { team: false, business: false, enterprise: true },
			},
			{
				name: "AI support chatbot",
				tooltip: "Get instant help from our AI assistant",
				plans: { team: true, business: true, enterprise: true },
			},
		],
	},
];

// ============================================
// FAQ Data
// ============================================

export const pricingFAQs = [
	{
		question: "How does billing work?",
		answer:
			"You can choose between monthly or annual billing. Annual plans save you up to 25% compared to monthly pricing. All plans are billed per user, and you can add or remove users at any time.",
	},
	{
		question: "Can I change my plan later?",
		answer:
			"Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you'll be charged the prorated difference for the remainder of your billing cycle. Downgrades take effect at the start of your next billing period.",
	},
	{
		question: "Is there a free trial for paid plans?",
		answer:
			"All paid plans include a 14-day free trial with full access to all features. No credit card required to start. At the end of your trial, you can choose to subscribe or continue with the Free plan.",
	},
	{
		question: "What happens when I reach my plan limits?",
		answer:
			"We'll notify you when you're approaching your plan limits. You can upgrade anytime to unlock more capacity. Your existing data and work are never deleted if you exceed limits—you just won't be able to add more until you upgrade.",
	},
	{
		question: "Do you offer discounts for teams or annual billing?",
		answer:
			"Yes, annual billing saves up to 25% compared to monthly plans. We also offer special pricing for nonprofits, educational institutions, and startups. Contact our sales team to learn more.",
	},
	{
		question: "How do I cancel my subscription?",
		answer:
			"You can cancel your subscription anytime from your account settings. There are no long-term contracts or cancellation fees. You'll continue to have access until the end of your current billing period.",
	},
	{
		question: "What payment methods do you accept?",
		answer:
			"We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Enterprise customers can also pay via invoice with NET-30 terms.",
	},
];
