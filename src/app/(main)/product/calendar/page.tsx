"use client";

import {
	ProductHero,
	ProductFeatures,
	ProductBenefits,
	ProductUseCases,
	ProductCTA,
} from "@/components/product";
import {
	Calendar,
	Clock,
	Globe2,
	RefreshCw,
	Users,
	Bell,
	Link,
	Zap,
	Building2,
	Briefcase,
	MapPin,
} from "lucide-react";

const features = [
	{
		title: "Centralized Scheduling",
		description:
			"View and manage all your meetings in one place. No more switching between calendar apps.",
		icon: Calendar,
	},
	{
		title: "Time Zone Intelligence",
		description:
			"Automatically detect and display times in each participant's local timezone. Never schedule a 3am meeting again.",
		icon: Globe2,
	},
	{
		title: "Calendar Sync",
		description:
			"Sync with Google Calendar, Office 365, and other popular calendar apps with just a few clicks.",
		icon: RefreshCw,
	},
	{
		title: "Team Availability",
		description:
			"See when your team is available at a glance. Find the perfect meeting time instantly.",
		icon: Users,
	},
	{
		title: "Smart Reminders",
		description:
			"Never miss a meeting with intelligent reminders across email, push notifications, and in-app alerts.",
		icon: Bell,
	},
	{
		title: "Booking Links",
		description:
			"Share your availability with external contacts. Let them book time that works for both of you.",
		icon: Link,
	},
];

const benefits = [
	{
		title: "No Time Zone Confusion",
		description:
			"Schedule meetings across the globe with confidence. Everyone sees the meeting in their local time automatically.",
		icon: Globe2,
	},
	{
		title: "Sync Everything",
		description:
			"Connect your existing calendars and see all your events in one unified view. No more double-booking.",
		icon: RefreshCw,
	},
	{
		title: "Save Hours Weekly",
		description:
			"Eliminate back-and-forth scheduling emails. Share availability and let others book directly.",
		icon: Clock,
	},
];

const useCases = [
	{
		title: "Distributed Teams",
		description:
			"Coordinate across time zones effortlessly with smart scheduling that respects everyone's working hours.",
		icon: MapPin,
		badge: "Popular",
	},
	{
		title: "Client Appointments",
		description:
			"Let clients book meetings directly from your availability. Professional, convenient, no back-and-forth.",
		icon: Briefcase,
	},
	{
		title: "Multi-Region Collaboration",
		description:
			"Find optimal meeting times for participants across multiple regions automatically.",
		icon: Building2,
	},
];

export default function CalendarPage() {
	return (
		<div className="bg-background">
			<ProductHero
				icon={Calendar}
				badge="Smart Calendar & Scheduling"
				title="Sync Events Across Time Zones"
				highlightedText="Effortlessly"
				description="Melp's integrated calendar helps you plan meetings, view team availability, and manage time zone differences — all in one place. Sync with Google Calendar or Office 365 with a few clicks."
				features={[
					"Centralized scheduling across teams",
					"Automatic sync with external calendars",
					"Time zone conflict avoidance",
					"One-click booking links",
				]}
				primaryCta={{ text: "Try Calendar Free", href: "/pricing" }}
				secondaryCta={{ text: "See It Work", href: "#demo" }}
				gradient="from-teal-500/20 via-teal-500/5 to-transparent"
			/>

			<ProductFeatures
				label="Core Features"
				title="Scheduling that actually works"
				description="Built for modern teams who work across time zones and juggle multiple calendars."
				features={features}
			/>

			<ProductBenefits
				label="Core Value"
				title="Make scheduling simple and conflict-proof"
				description="Spend less time coordinating and more time collaborating."
				benefits={benefits}
				layout="alternating"
			/>

			<ProductUseCases
				label="Perfect For"
				title="Built for every scheduling scenario"
				description="From internal team syncs to client bookings, Melp Calendar handles it all."
				useCases={useCases}
			/>

			<ProductCTA
				icon={Calendar}
				title="Ready to fix your scheduling?"
				description="Join thousands of teams saving hours every week with smarter scheduling."
				primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
				secondaryCta={{ text: "Schedule Demo", href: "/contact" }}
				features={[
					"Time zone smart",
					"Calendar sync",
					"Booking links",
					"Team availability",
				]}
			/>
		</div>
	);
}
