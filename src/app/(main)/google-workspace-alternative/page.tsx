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
	title: "Best Google Workspace Alternative for Team Collaboration | Melp App",
	description:
		"Looking for a Google Workspace alternative? Melp App offers structured, secure collaboration that keeps teams aligned. Start free today.",
	keywords: [
		"Google Workspace alternative",
		"Google Workspace alternatives",
		"alternative to Google Workspace",
		"Google Workspace free alternative",
		"Google Workspace alternatives free",
		"collaboration tool",
		"digital workplace platform",
	],
	openGraph: {
		title: "Best Google Workspace Alternative for Team Collaboration | Melp App",
		description:
			"Looking for a Google Workspace alternative? Melp App offers structured, secure collaboration that keeps teams aligned. Start free today.",
		url: "https://melp.us/google-workspace-alternative",
		siteName: "Melp",
		type: "website",
	},
};

export default function GoogleWorkspaceAlternativePage() {
	return (
		<>
			{/* Hero Section */}
			<SectionWrapper className="relative overflow-hidden bg-background pt-24 sm:pt-32 lg:pt-40 pb-20">
				{/* Grid pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]" />

				<div className="relative z-10 text-center">
					<div className="flex items-center justify-center mb-10">
						<HeroBadge>A Modern Workspace Alternative</HeroBadge>
					</div>

					<SectionTitle
						as="h1"
						className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-4xl mx-auto leading-[1.1]"
					>
						<span className="text-primary">Google Workspace Alternative</span> for
						Structured Team Collaboration
					</SectionTitle>

					<SectionDescription className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto">
						Melp App offers a more structured and focused way for teams to
						communicate, collaborate, and stay aligned in one secure digital
						workplace. Bring everything together into shared spaces where work
						stays visible and coordination feels natural.
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
							description="Hero image showing Melp's unified workspace interface. Display the organized dashboard with team channels, shared spaces, and integrated communication—highlighting how everything stays connected in one place."
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
						Why Teams Start Considering Google Workspace Alternatives
					</SectionTitle>
					<SectionDescription className="mx-auto">
						As teams grow, work spreads across conversations, follow-ups depend on
						memory, and decisions lose context. What once felt manageable starts
						to feel messy. People are busy, but progress feels slower than it
						should.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
					<FeatureCard
						icon="Layers"
						title="Conversations spread everywhere"
						description="Too many conversations happen across email, chat, and meetings. Important discussions get scattered and hard to follow."
					/>
					<FeatureCard
						icon="MessageSquareOff"
						title="Decisions hard to trace"
						description="Decisions are made but become hard to trace later. Teams lose the context of why and when things were decided."
					/>
					<FeatureCard
						icon="Users"
						title="Lost shared context"
						description="Teams lose shared context as people and projects increase. New members struggle to understand what happened before."
					/>
					<FeatureCard
						icon="Calendar"
						title="Time wasted searching"
						description="Time is wasted searching for updates instead of doing real work. Finding the right information takes longer than it should."
					/>
					<FeatureCard
						icon="Globe"
						title="Cross-team coordination is harder"
						description="Coordination becomes difficult when working across teams or with external partners. Boundaries create friction."
					/>
					<FeatureCard
						icon="SlidersHorizontal"
						title="Work feels heavier than it should"
						description="When clarity slips, work feels heavier. Teams naturally look for alternatives that keep everything connected."
					/>
				</div>

				<ImagePlaceholder
					imageType="Comparison Illustration"
					description="Visual showing scattered tools and fragmented communication (emails, docs, chat, calendar) versus Melp's unified approach where everything stays connected and organized."
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
							A More Balanced Alternative for Daily Collaboration
						</SectionTitle>
						<SectionDescription className="mb-8">
							Many companies searching for an alternative to Google Workspace want
							smoother day-to-day coordination, not just email and documents. Melp
							App supports how people actually work by keeping discussions easy to
							follow and collaboration consistent across teams.
						</SectionDescription>

						<CTAButtons
							primaryText="Get Started Free"
							className="justify-start mb-10"
						/>

						<ImagePlaceholder
							imageType="Feature Screenshot"
							description="Screenshot showing Melp's organized workspace with clear team structure, visible updates, and easy-to-follow discussions. Emphasize the predictable workflow and reduced time searching for context."
							aspectRatio="aspect-[4/3]"
							size="full"
						/>
					</div>

					<div className="space-y-5">
						<FeatureCard
							icon="LayoutGrid"
							title="Work feels more predictable"
							description="Updates stay visible and teams spend less time searching for context. This leads to better focus and steady progress across projects."
						/>
						<FeatureCard
							icon="Users"
							title="Collaboration beyond your organization"
							description="Clients, partners, freelancers, and vendors can work together with clear boundaries and shared understanding in a unified environment."
						/>
						<FeatureCard
							icon="Zap"
							title="Easy to adopt from day one"
							description="Start working together quickly with a clear structure from the first day. As your team grows, the same workspace supports more complex collaboration."
						/>
						<FeatureCard
							icon="Bot"
							title="AI-driven clarity"
							description="Faster alignment supported by AI that helps capture decisions, summarize discussions, and keep everyone on the same page."
						/>
					</div>
				</div>
			</SectionWrapper>

			{/* Security Section */}
			<SectionWrapper className="bg-background">
				<div className="text-center mb-14">
					<SectionLabel>Enterprise Security</SectionLabel>
					<SectionTitle className="max-w-3xl mx-auto">
						Secure Collaboration You Can Trust
					</SectionTitle>
					<SectionDescription className="mx-auto">
						Security and compliance are key concerns when evaluating Google
						Workspace alternatives. Melp App is built to support regulated
						industries and global teams with enterprise-grade protection.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
					<FeatureCard
						icon="Shield"
						title="GDPR Compliant"
						description="Full compliance with European data protection regulations for global teams."
					/>
					<FeatureCard
						icon="Shield"
						title="HIPAA Ready"
						description="Suitable for healthcare and other regulated industries with strict requirements."
					/>
					<FeatureCard
						icon="Shield"
						title="ISO 27001"
						description="Information security management standards you can rely on."
					/>
					<FeatureCard
						icon="Shield"
						title="End-to-End Encryption"
						description="Multi-factor authentication and encryption keep your data protected."
					/>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<ImagePlaceholder
						imageType="Security Visual"
						description="Visual showing Melp's security features—admin controls, encryption indicators, and compliance badges (GDPR, HIPAA, ISO 27001, SOC 2)."
						aspectRatio="aspect-video"
						size="full"
					/>
					<ImagePlaceholder
						imageType="External Collaboration"
						description="Screenshot showing secure external collaboration—internal team working with clients/partners in a shared workspace with clear permission boundaries."
						aspectRatio="aspect-video"
						size="full"
					/>
				</div>
			</SectionWrapper>

			{/* One Platform Section */}
			<SectionWrapper className="bg-muted/30">
				<div className="text-center mb-14">
					<SectionLabel>One Digital Workplace</SectionLabel>
					<SectionTitle className="max-w-3xl mx-auto">
						One Platform That Replaces Tool Sprawl
					</SectionTitle>
					<SectionDescription className="mx-auto">
						Melp App is more than a productivity suite. It brings collaboration,
						communication, AI support, external teamwork, and professional
						networking into one unified platform.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
					<FeatureCard
						icon="Layers"
						title="Conversations stay organized"
						description="Discussions remain easy to follow, with context preserved across time and teams."
					/>
					<FeatureCard
						icon="Users"
						title="Smooth external collaboration"
						description="Work seamlessly with clients, partners, and vendors without switching tools."
					/>
					<FeatureCard
						icon="Video"
						title="Meetings with clear outcomes"
						description="Meetings lead to documented decisions instead of confusion and lost action items."
					/>
					<FeatureCard
						icon="Bot"
						title="AI-powered alignment"
						description="Faster alignment supported by AI that captures key decisions and next steps."
					/>
					<FeatureCard
						icon="Shield"
						title="Secure and compliant"
						description="Confidence from working in a secure environment that meets regulatory standards."
					/>
					<FeatureCard
						icon="Sparkles"
						title="Professional networking built in"
						description="Build professional connections within the platform without switching between tools."
					/>
				</div>

				<ImagePlaceholder
					imageType="Platform Overview"
					description="Visual showing Melp as a unified platform—highlighting how collaboration, communication, meetings, AI, and external teamwork come together in one place."
					aspectRatio="aspect-[21/9]"
					size="full"
				/>
			</SectionWrapper>

			{/* Testimonials Section */}
			<SectionWrapper className="bg-muted/20">
				<div className="text-center mb-14">
					<SectionLabel>Trusted by Teams Worldwide</SectionLabel>
					<SectionTitle>
						Trusted by Teams Switching from Google Workspace
					</SectionTitle>
					<SectionDescription className="max-w-2xl mx-auto">
						From early-stage startups to growing enterprises, teams use Melp to
						reduce tool overload and bring communication back together. Work with
						clarity, collaborate with confidence.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					<TestimonialCard
						quote="We were drowning in scattered emails and docs. Melp brought everything together—now our team actually knows what's happening without endless searching."
						author="Rachel Torres"
						role="Operations Manager"
						company="GrowthLabs"
						avatar="/users/user-1.png"
					/>
					<TestimonialCard
						quote="The transition from Google Workspace was smooth. Melp gives us the structure we needed without adding complexity. Our external partners love it too."
						author="James Liu"
						role="Head of Partnerships"
						company="NexGen Solutions"
						avatar="/users/user-2.png"
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
							Frequently Asked Questions About Google Workspace Alternatives
						</SectionTitle>
					</div>

					<FAQAccordion
						faqs={[
							{
								question:
									"What is the best Google Workspace alternative for teams?",
								answer:
									"The best Google Workspace alternative depends on your team's needs. For organizations wanting structured collaboration beyond email and docs, Melp App provides a unified digital workplace where work stays visible and coordination feels natural.",
							},
							{
								question:
									"Why do teams look for alternatives to Google Workspace?",
								answer:
									"Teams often seek alternatives when conversations spread across too many tools, decisions become hard to trace, and coordination gets harder as the team grows. Melp helps bring communication and collaboration back into one connected place.",
							},
							{
								question:
									"Is there a free Google Workspace alternative for small teams?",
								answer:
									"Yes. Melp App allows teams to start working together quickly with a clear structure from day one. The free plan is designed for early-stage teams that want professional collaboration without complexity.",
							},
							{
								question: "How is Melp different from Google Workspace?",
								answer:
									"Google Workspace focuses on individual productivity tools (email, docs, sheets). Melp focuses on team collaboration—keeping discussions organized, supporting external partnerships, and providing AI-driven clarity in one unified workspace.",
							},
							{
								question: "Is Melp secure enough for regulated industries?",
								answer:
									"Yes. Melp App supports GDPR, HIPAA, and ISO 27001 standards. With multi-factor authentication and end-to-end encryption, it's suitable for healthcare, finance, and other regulated industries.",
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
						Try Melp as Your Google Workspace Alternative
					</SectionTitle>
					<SectionDescription className="max-w-2xl mx-auto mb-8">
						Work with clarity. Collaborate with confidence. Grow together in one
						connected digital workplace. Melp App gives teams a calmer, more
						organized way to work together.
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
