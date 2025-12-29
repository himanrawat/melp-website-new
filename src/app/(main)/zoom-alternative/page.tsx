import { Metadata } from "next";
import {
	SectionWrapper,
	SectionLabel,
	SectionTitle,
	SectionDescription,
	FeatureCard,
	TestimonialCard,
	RatingBadge,
	FAQAccordion,
	TrustIndicators,
	CTAButtons,
	HeroBadge,
	ImagePlaceholder,
} from "@/components/alternative";

export const metadata: Metadata = {
	title: "Best Zoom Alternative for Business Collaboration | Melp App",
	description:
		"Looking for a Zoom alternative? Melp App is a secure, all-in-one digital workplace that goes beyond meetings. Start free today.",
	keywords: [
		"Zoom alternative",
		"Zoom alternatives",
		"alternatives to Zoom",
		"alternative to Zoom",
		"free alternative to Zoom",
		"free alternatives to Zoom",
		"video conferencing alternative",
		"collaboration tool",
		"digital workplace platform",
	],
	openGraph: {
		title: "Best Zoom Alternative for Business Collaboration | Melp App",
		description:
			"Looking for a Zoom alternative? Melp App is a secure, all-in-one digital workplace that goes beyond meetings. Start free today.",
		url: "https://melp.us/zoom-alternative",
		siteName: "Melp",
		type: "website",
	},
};

export default function ZoomAlternativePage() {
	return (
		<>
			{/* Hero Section */}
			<SectionWrapper className="relative overflow-hidden bg-background pt-24 sm:pt-32 lg:pt-40 pb-20">
				{/* Grid pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]" />

				<div className="relative z-10 text-center">
					<div className="flex items-center justify-center mb-10">
						<HeroBadge>A Modern Zoom Alternative</HeroBadge>
					</div>

					<SectionTitle
						as="h1"
						className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-4xl mx-auto leading-[1.1]"
					>
						<span className="text-primary">Zoom Alternative</span> for Modern
						Business Collaboration
					</SectionTitle>

					<SectionDescription className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto">
						Melp App is a modern Zoom alternative built for teams that need more
						than video meetings. Support continuous collaboration—before, during,
						and after meetings—in one structured digital workspace.
					</SectionDescription>

					<div className="mt-10">
						<CTAButtons />
					</div>

					<div className="mt-12">
						<TrustIndicators />
					</div>

					<div className="mt-16">
						<ImagePlaceholder
							imageType="Product Screenshot"
							description="Hero image showing Melp's unified collaboration workspace. Display a view that includes both messaging AND a meeting/video call interface together, emphasizing 'more than just meetings'. Should show the before/during/after meeting workflow in one connected space."
							aspectRatio="aspect-[16/10]"
							size="full"
						/>
					</div>
				</div>
			</SectionWrapper>

			{/* Why Switch Section */}
			<SectionWrapper className="bg-background">
				<div className="text-center mb-14">
					<SectionLabel>Why Switch?</SectionLabel>
					<SectionTitle className="max-w-3xl mx-auto">
						Why Businesses Are Looking for an Alternative to Zoom
					</SectionTitle>
					<SectionDescription className="mx-auto">
						Zoom is widely adopted for video meetings because it is easy to use
						and reliable for live communication. However, as teams grow and work
						becomes more cross-functional, many organizations begin to experience
						limitations with a meeting-first approach.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
					<FeatureCard
						icon="Video"
						title="Meeting-first tools leave gaps between calls"
						description="Zoom meetings end, but work continues. Decisions, ideas, and next steps often move into emails, chat apps, documents, or task tools—splitting context across platforms."
					/>
					<FeatureCard
						icon="MessageSquareOff"
						title="Conversations lose continuity after meetings"
						description="When discussions exist only inside meetings, teams struggle to track outcomes. Important information is frequently lost once the call ends, making follow-through harder."
					/>
					<FeatureCard
						icon="Calendar"
						title="Too many meetings create fatigue"
						description="Because meetings are the primary way to collaborate, teams often schedule calls for updates that could happen asynchronously. Over time, this leads to calendar overload and reduced focus."
					/>
					<FeatureCard
						icon="Users"
						title="External collaboration lacks a shared workspace"
						description="Zoom works well for inviting guests to meetings, but ongoing collaboration with clients, vendors, or partners typically requires additional tools to maintain shared context."
					/>
				</div>

				<ImagePlaceholder
					imageType="Comparison Illustration"
					description="Visual illustrating meeting fatigue and fragmented workflows. Could show a cluttered calendar full of meetings, OR a timeline showing how context is lost after meetings end (meeting → emails → docs → tasks scattered). Emphasize the 'before, during, after' problem."
					aspectRatio="aspect-[21/9]"
					size="full"
				/>
			</SectionWrapper>

			{/* Benefits Section */}
			<SectionWrapper className="bg-muted/30">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
					<div className="lg:sticky lg:top-24">
						<SectionLabel>Why Melp</SectionLabel>
						<SectionTitle className="text-2xl sm:text-3xl lg:text-4xl">
							Melp App — A Complete Zoom Alternative
						</SectionTitle>
						<SectionDescription className="mb-8">
							Melp App is designed for teams who want more than meetings.
							Communicate clearly, collaborate continuously, and keep context
							alive—before, during, and after every call.
						</SectionDescription>

						<CTAButtons
							primaryText="Get Started Free"
							className="justify-start mb-10"
						/>

						<ImagePlaceholder
							imageType="Feature Screenshot"
							description="Screenshot showing the before/during/after workflow. Display how a meeting connects to its related channel or workspace, with pre-meeting notes, during-meeting chat, and post-meeting summary all visible in one unified view."
							aspectRatio="aspect-[4/3]"
							size="full"
						/>
					</div>

					<div className="space-y-5">
						<FeatureCard
							icon="LayoutGrid"
							title="Continuous collaboration, not just calls"
							description="Melp connects meetings to ongoing conversations. Discussions, decisions, and follow-ups stay in one place—so nothing gets lost between calls."
						/>
						<FeatureCard
							icon="Layers"
							title="Reduce meeting overload"
							description="With structured messaging and async collaboration, teams can resolve more without scheduling another call. Meetings become optional, not mandatory."
						/>
						<FeatureCard
							icon="Users"
							title="Built-in external collaboration"
							description="Invite clients, vendors, or freelancers into shared workspaces—not just meetings. Everyone stays aligned with full context, not just calendar invites."
						/>
						<FeatureCard
							icon="Bot"
							title="AI-powered meeting summaries"
							description="Melp automatically captures meeting notes, action items, and key decisions. Never miss a follow-up or forget what was discussed."
						/>
					</div>
				</div>
			</SectionWrapper>

			{/* Differentiators Section */}
			<SectionWrapper className="bg-background">
				<div className="text-center mb-14">
					<SectionLabel>Why Teams Choose Melp</SectionLabel>
					<SectionTitle className="max-w-3xl mx-auto">
						Why Teams Choose Melp Over Meeting-Only Tools
					</SectionTitle>
					<SectionDescription className="mx-auto">
						Teams switching from Zoom are often looking for a way to reduce
						meeting overload while improving collaboration quality. Melp provides
						the complete package—meetings plus everything around them.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
					<FeatureCard
						icon="Sparkles"
						title="Context that persists"
						description="Conversations don't end when the meeting does. Everything stays connected and searchable."
					/>
					<FeatureCard
						icon="Zap"
						title="Fewer meetings, better outcomes"
						description="Async-first collaboration means teams resolve more without scheduling another call."
					/>
					<FeatureCard
						icon="Globe"
						title="Works across time zones"
						description="Melp supports distributed teams with async messaging, recorded meetings, and AI summaries."
					/>
					<FeatureCard
						icon="Shield"
						title="Enterprise-grade security"
						description="Melp supports SOC 2, GDPR, HIPAA, and security features like MFA and end-to-end encryption."
					/>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<ImagePlaceholder
						imageType="Feature Screenshot"
						description="Screenshot showing async collaboration in action. Display a workspace with messages, shared files, and a completed meeting with its summary—all connected. Emphasize that work continues without constant live calls."
						aspectRatio="aspect-video"
						size="full"
					/>
					<ImagePlaceholder
						imageType="AI Features"
						description="Visual showing Melp's AI meeting features. Could show a meeting summary with action items extracted, or the AI assistant helping capture key decisions and next steps."
						aspectRatio="aspect-video"
						size="full"
					/>
				</div>
			</SectionWrapper>

			{/* Testimonials Section */}
			<SectionWrapper className="bg-muted/20">
				<div className="text-center mb-14">
					<SectionLabel>Trusted by Teams Worldwide</SectionLabel>
					<SectionTitle>Trusted by Teams Moving Beyond Zoom</SectionTitle>
					<SectionDescription className="max-w-2xl mx-auto">
						From fast-growing startups to distributed enterprises, teams use Melp
						to reduce meeting overload and improve collaboration quality. Get more
						done with fewer calls.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					<TestimonialCard
						quote="We cut our meeting time in half after switching to Melp. The async collaboration features mean we only meet when we really need to."
						author="David Park"
						role="VP of Engineering"
						company="CloudScale Systems"
						avatar="/users/user-3.png"
					/>
					<TestimonialCard
						quote="Zoom was great for calls, but we needed more. Melp gives us meetings plus everything around them—context, follow-ups, and continuous collaboration."
						author="Jennifer Walsh"
						role="Director of Operations"
						company="GlobalTech Partners"
						avatar="/users/user-1.png"
					/>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
					<RatingBadge platform="G2 Crowd" rating="4.8" />
					<RatingBadge platform="Capterra" rating="4.7" />
				</div>
			</SectionWrapper>

			{/* FAQ Section */}
			<SectionWrapper className="bg-background">
				<div className="max-w-3xl mx-auto">
					<div className="text-center mb-12">
						<SectionLabel>Frequently Asked Questions</SectionLabel>
						<SectionTitle>
							Frequently Asked Questions About Zoom Alternatives
						</SectionTitle>
					</div>

					<FAQAccordion
						faqs={[
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
								question:
									"Are there free alternatives to Zoom for growing teams?",
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
						]}
					/>
				</div>
			</SectionWrapper>

			{/* CTA Section */}
			<SectionWrapper className="bg-gradient-to-b from-muted/30 via-background to-muted/30 overflow-hidden relative">
				{/* Grid pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)]" />

				<div className="relative text-center">
					<SectionLabel>Ready to Switch?</SectionLabel>
					<SectionTitle className="sm:text-4xl lg:text-5xl">
						Ready to Move Beyond Zoom?
					</SectionTitle>
					<SectionDescription className="max-w-2xl mx-auto mb-8">
						If your team wants fewer meetings, better collaboration, and context
						that persists—Melp is the Zoom alternative built for modern work.
						Start for free or schedule a demo today.
					</SectionDescription>

					<CTAButtons />

					<p className="mt-8 text-sm text-muted-foreground">
						No credit card required • Free migration support • Cancel anytime
					</p>
				</div>
			</SectionWrapper>
		</>
	);
}
