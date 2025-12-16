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
	ctaVariant: "default" | "outline" | "secondary";
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
		description: "Perfect for trying out Melp",
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
		cta: "Get Started Free",
		ctaVariant: "outline",
	},
	{
		id: "plus",
		name: "Plus",
		description: "For power users who want more",
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
		cta: "Start Free Trial",
		ctaVariant: "default",
	},
];

// ============================================
// Business Plans (3 plans)
// ============================================

export const businessPlans: PricingPlan[] = [
	{
		id: "team",
		name: "Team",
		description: "For small teams getting started",
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
		cta: "Start Free Trial",
		ctaVariant: "outline",
	},
	{
		id: "business",
		name: "Business",
		description: "For growing organizations",
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
		cta: "Start Free Trial",
		ctaVariant: "default",
	},
	{
		id: "enterprise",
		name: "Enterprise",
		description: "For large organizations with custom needs",
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
		cta: "Contact Sales",
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
				plans: { free: "1", plus: "10" },
			},
			{
				name: "Storage",
				plans: { free: "10 GB", plus: "100 GB" },
			},
			{
				name: "Chat history",
				plans: { free: "3 Months", plus: "9 Months" },
			},
		],
	},
	{
		category: "Meetings & Calls",
		features: [
			{
				name: "Participants",
				plans: { free: "5", plus: "30" },
			},
			{
				name: "Screen sharing",
				plans: { free: true, plus: true },
			},
			{
				name: "Customized backgrounds",
				plans: { free: true, plus: true },
			},
			{
				name: "Visual effects",
				plans: { free: true, plus: true },
			},
			{
				name: "Single meeting duration",
				plans: { free: "1 hour", plus: "3 hours" },
			},
			{
				name: "Personal Room",
				plans: { free: "5 meetings/month", plus: "50 meetings/month" },
			},
			{
				name: "Group/Teams Meeting",
				plans: { free: "5 meetings/month", plus: "50 meetings/month" },
			},
			{
				name: "Chat available after call",
				plans: { free: true, plus: true },
			},
			{
				name: "Meeting recordings",
				plans: { free: "5 meetings/month", plus: "50 meetings/month" },
			},
			{
				name: "Administrator controls for meeting room",
				plans: { free: true, plus: true },
			},
			{
				name: "Breakout rooms",
				plans: { free: false, plus: true },
			},
			{
				name: "Noise suppression",
				plans: { free: false, plus: true },
			},
			{
				name: "Scheduled meetings",
				plans: { free: "10 meetings/month", plus: "50 meetings/month" },
			},
			{
				name: "Melp Whiteboard",
				plans: { free: false, plus: true },
			},
			{
				name: "Melp Pad",
				plans: { free: true, plus: true },
			},
			{
				name: "Speech to text translation (90 languages)",
				plans: { free: "5/month", plus: "100/month" },
			},
			{
				name: "Webinar (Live Streaming)",
				plans: { free: false, plus: true },
			},
			{
				name: "Polls",
				plans: { free: "2 per meeting", plus: "5 per meeting" },
			},
			{
				name: "Live Calls",
				plans: { free: true, plus: true },
			},
		],
	},
	{
		category: "AI Features",
		features: [
			{
				name: "AI meeting Summary",
				plans: { free: "5 meetings/month", plus: "100 meetings/month" },
			},
			{
				name: "AI chatbot",
				plans: { free: true, plus: true },
			},
			{
				name: "AI real time chat translation",
				plans: { free: "100/month", plus: "Unlimited" },
			},
			{
				name: "Draft for me",
				plans: { free: "10/month", plus: "50/month" },
			},
			{
				name: "Evaluation Mode",
				plans: { free: false, plus: true },
			},
			{
				name: "Evaluation Mode + Question craft with JD and resume",
				plans: { free: false, plus: true },
			},
		],
	},
	{
		category: "Messaging",
		features: [
			{
				name: "Unlimited chat messages",
				plans: { free: true, plus: true },
			},
			{
				name: "File attachments in chat",
				plans: { free: true, plus: true },
			},
			{
				name: "Max file upload size",
				plans: { free: "20 MB", plus: "50 MB" },
			},
			{
				name: "Number of Teams/Topics",
				plans: { free: "5 Teams/Topics", plus: "25 Teams & 10 Topics" },
			},
			{
				name: "Number of Groups",
				plans: { free: "5 Groups", plus: "25 Groups" },
			},
			{
				name: "Chat group size",
				plans: { free: "5", plus: "30" },
			},
			{
				name: "Share Links",
				plans: { free: true, plus: true },
			},
			{
				name: "Write & Share",
				plans: { free: "5/month", plus: "50/month" },
			},
			{
				name: "Email your chat",
				plans: { free: "5/month", plus: "50/month" },
			},
			{
				name: "Chat History",
				plans: { free: "3 Months", plus: "9 Months" },
			},
			{
				name: "Global search through chats, groups, files",
				plans: { free: true, plus: true },
			},
			{
				name: "Pinned Messages",
				plans: { free: true, plus: true },
			},
		],
	},
	{
		category: "Calendar",
		features: [
			{
				name: "Sync Calendars Google/Microsoft",
				plans: { free: true, plus: true },
			},
			{
				name: "Create event types",
				plans: { free: true, plus: true },
			},
			{
				name: "Share Calendar for bookings",
				plans: { free: true, plus: true },
			},
			{
				name: "Manage availability",
				plans: { free: true, plus: true },
			},
			{
				name: "Customise Calendar Link",
				plans: { free: true, plus: true },
			},
		],
	},
	{
		category: "Network",
		features: [
			{
				name: "Bulk Invite",
				plans: { free: false, plus: true },
			},
			{
				name: "Invite people",
				plans: { free: true, plus: true },
			},
			{
				name: "Import Contacts",
				plans: { free: true, plus: true },
			},
			{
				name: "Contact search",
				plans: { free: true, plus: true },
			},
			{
				name: "Sort Contact filters",
				plans: { free: true, plus: true },
			},
		],
	},
	{
		category: "Melp Office Suite",
		features: [
			{
				name: "Create Docs, Sheets & Presentations",
				plans: { free: true, plus: true },
			},
			{
				name: "Cloud storage for files & documents",
				plans: { free: "10 GB", plus: "100 GB" },
			},
			{
				name: "Collaborative Editing",
				plans: { free: "2 Users", plus: "7 Users" },
			},
			{
				name: "Document Translation in 10 Languages",
				plans: { free: "5 Docs/month", plus: "25 Docs/month" },
			},
		],
	},
	{
		category: "Administration & Support",
		features: [
			{
				name: "Admin Panel",
				plans: { free: false, plus: true },
			},
			{
				name: "AI Chatbot",
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
				plans: { team: "29", business: "99", enterprise: "100+" },
			},
			{
				name: "Storage",
				plans: { team: "250 GB", business: "500 GB", enterprise: "1 TB" },
			},
			{
				name: "Chat history",
				plans: { team: "9 Months", business: "12 Months", enterprise: "Unlimited" },
			},
		],
	},
	{
		category: "Meetings & Calls",
		features: [
			{
				name: "Participants",
				plans: { team: "50", business: "100", enterprise: "300" },
			},
			{
				name: "Screen sharing",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Customized backgrounds",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Visual effects",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Single meeting duration",
				plans: { team: "4 hours", business: "8 hours", enterprise: "24 hours" },
			},
			{
				name: "Personal Room",
				plans: { team: "100 meetings/month", business: "Unlimited", enterprise: "Unlimited" },
			},
			{
				name: "Group/Teams Meeting",
				plans: { team: "100 meetings/month", business: "Unlimited", enterprise: "Unlimited" },
			},
			{
				name: "Chat available after call",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Meeting recordings",
				plans: { team: "100 meetings/month", business: "Unlimited", enterprise: "Unlimited" },
			},
			{
				name: "Administrator controls for meeting room",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Breakout rooms",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Noise suppression",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Scheduled meetings",
				plans: { team: "100 meetings/month", business: "Unlimited", enterprise: "Unlimited" },
			},
			{
				name: "Melp Whiteboard",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Melp Pad",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Speech to text translation (90 languages)",
				plans: { team: "150/month", business: "Unlimited", enterprise: "Unlimited" },
			},
			{
				name: "Webinar (Live Streaming)",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Polls",
				plans: { team: "5 per meeting", business: "10 per meeting", enterprise: "Unlimited" },
			},
			{
				name: "Live Calls",
				plans: { team: true, business: true, enterprise: true },
			},
		],
	},
	{
		category: "AI Features",
		features: [
			{
				name: "AI meeting Summary",
				plans: { team: "150 meetings/month", business: "250 meetings/month", enterprise: "Unlimited" },
			},
			{
				name: "AI chatbot",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "AI real time chat translation",
				plans: { team: "Unlimited", business: "Unlimited", enterprise: "Unlimited" },
			},
			{
				name: "Draft for me",
				plans: { team: "75/month", business: "150/month", enterprise: "Unlimited" },
			},
			{
				name: "Evaluation Mode",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Evaluation Mode + Question craft with JD and resume",
				plans: { team: true, business: true, enterprise: true },
			},
		],
	},
	{
		category: "Messaging",
		features: [
			{
				name: "Unlimited chat messages",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "File attachments in chat",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Max file upload size",
				plans: { team: "50 MB", business: "50 MB", enterprise: "50 MB" },
			},
			{
				name: "Number of Teams/Topics",
				plans: { team: "25 Teams & 10 Topics", business: "100 Teams & 10 Topics", enterprise: "Unlimited" },
			},
			{
				name: "Number of Groups",
				plans: { team: "25 Groups", business: "100 Groups", enterprise: "Unlimited" },
			},
			{
				name: "Chat group size",
				plans: { team: "30", business: "100", enterprise: "300" },
			},
			{
				name: "Share Links",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Write & Share",
				plans: { team: "50/month", business: "100/month", enterprise: "Unlimited" },
			},
			{
				name: "Email your chat",
				plans: { team: "50/month", business: "100/month", enterprise: "Unlimited" },
			},
			{
				name: "Chat History",
				plans: { team: "9 Months", business: "12 Months", enterprise: "Unlimited" },
			},
			{
				name: "Global search through chats, groups, files",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Pinned Messages",
				plans: { team: true, business: true, enterprise: true },
			},
		],
	},
	{
		category: "Calendar",
		features: [
			{
				name: "Sync Calendars Google/Microsoft",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Create event types",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Share Calendar for bookings",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Manage availability",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Customise Calendar Link",
				plans: { team: true, business: true, enterprise: true },
			},
		],
	},
	{
		category: "Network",
		features: [
			{
				name: "Bulk Invite",
				plans: { team: false, business: "1,000 per CSV", enterprise: "1,500 per CSV" },
			},
			{
				name: "Invite people",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Import Contacts",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Contact search",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Sort Contact filters",
				plans: { team: true, business: true, enterprise: true },
			},
		],
	},
	{
		category: "Melp Office Suite",
		features: [
			{
				name: "Create Docs, Sheets & Presentations",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "Cloud storage for files & documents",
				plans: { team: "250 GB", business: "500 GB", enterprise: "1 TB" },
			},
			{
				name: "Collaborative Editing",
				plans: { team: "10 Users", business: "20 Users", enterprise: "Unlimited" },
			},
			{
				name: "Document Translation in 10 Languages",
				plans: { team: "5 Docs/month", business: "25 Docs/month", enterprise: "Unlimited" },
			},
		],
	},
	{
		category: "Administration & Support",
		features: [
			{
				name: "Admin Panel",
				plans: { team: true, business: true, enterprise: true },
			},
			{
				name: "AI Chatbot",
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
		question: "Can I switch between plans?",
		answer:
			"Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the credit will be applied to future billing.",
	},
	{
		question: "Is there a free trial?",
		answer:
			"Yes, all paid plans come with a 14-day free trial. No credit card required to start. You can explore all features before committing.",
	},
	{
		question: "What payment methods do you accept?",
		answer:
			"We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and wire transfers for Enterprise plans.",
	},
	{
		question: "Can I cancel anytime?",
		answer:
			"Absolutely. There are no long-term contracts. You can cancel your subscription at any time and continue using the service until the end of your billing period.",
	},
	{
		question: "Do you offer discounts for nonprofits or education?",
		answer:
			"Yes! We offer special pricing for nonprofits, educational institutions, and open-source projects. Contact our sales team for details.",
	},
];
