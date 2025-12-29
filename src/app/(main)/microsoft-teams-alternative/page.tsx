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
	title: "Best Microsoft Teams Alternative for Seamless Collaboration | Melp App",
	description:
		"Looking for a Microsoft Teams alternative? Melp App simplifies team communication with structured workspaces, secure messaging, and AI-powered productivity.",
	keywords: [
		"Microsoft Teams alternative",
		"teams alternative",
		"Microsoft Teams alternatives",
		"teams alternatives",
		"alternatives to Microsoft Teams",
		"alternative to Teams",
		"free alternative to Microsoft Teams",
		"free alternatives to Microsoft Teams",
		"collaboration tool",
		"digital workplace platform",
	],
	openGraph: {
		title: "Best Microsoft Teams Alternative for Seamless Collaboration | Melp App",
		description:
			"Looking for a Microsoft Teams alternative? Melp App simplifies team communication with structured workspaces, secure messaging, and AI-powered productivity.",
		url: "https://melp.us/microsoft-teams-alternative",
		siteName: "Melp",
		type: "website",
	},
};

export default function MicrosoftTeamsAlternativePage() {
	return (
		<>
			{/* Hero Section */}
			<SectionWrapper className="relative overflow-hidden bg-background pt-24 sm:pt-32 lg:pt-40 pb-20">
				{/* Grid pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]" />

				<div className="relative z-10 text-center">
					<div className="flex items-center justify-center mb-10">
						<HeroBadge>A Modern Teams Alternative</HeroBadge>
					</div>

					<SectionTitle
						as="h1"
						className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-4xl mx-auto leading-[1.1]"
					>
						<span className="text-primary">Microsoft Teams Alternative</span> for
						Simpler, Smarter Collaboration
					</SectionTitle>

					<SectionDescription className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto">
						Melp App is a modern Microsoft Teams alternative built for teams that
						want structured, secure collaboration without the complexity. Bring
						messaging, meetings, shared workspaces, and AI assistance into one
						lightweight, intuitive platform.
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
							description="Hero image showing Melp's clean, organized workspace interface. Ideally a full-width screenshot of the main dashboard with visible team channels, messaging area, and sidebar navigation. Should highlight simplicity compared to Teams' complex UI."
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
						Why Businesses Are Looking for an Alternative to Microsoft Teams
					</SectionTitle>
					<SectionDescription className="mx-auto">
						Microsoft Teams is a powerful tool for businesses already committed to
						the Microsoft ecosystem. But its depth comes with trade-offs. Many
						teams struggle with Teams&apos; complexity, rigid structure, and
						friction when collaborating across organizations.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
					<FeatureCard
						icon="Layers"
						title="Tool overload and fragmented communication"
						description="Teams requires switching between channels, chats, meetings, files, and apps. Important updates often get buried in long threads or scattered across tools."
					/>
					<FeatureCard
						icon="SlidersHorizontal"
						title="Complex user interface and learning curve"
						description="From permissions and team roles to threaded replies and notifications, Teams can feel unintuitive—especially for non-technical users or external guests."
					/>
					<FeatureCard
						icon="Users"
						title="Challenges with external collaboration"
						description="Working with clients, freelancers, or partners in Teams involves tenant switching, guest access, or admin setup. This slows down external collaboration."
					/>
				</div>

				<ImagePlaceholder
					imageType="Comparison Illustration"
					description="Visual showing the pain of fragmented collaboration tools. Could be an illustration of multiple disconnected app windows (Teams channels, emails, Slack, docs) causing confusion, OR a side-by-side showing cluttered Teams UI vs. clean Melp interface. Avoid direct competitor logos."
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
							Melp App — A Flexible Microsoft Teams Alternative
						</SectionTitle>
						<SectionDescription className="mb-8">
							Melp App is designed for teams who want to communicate clearly,
							collaborate confidently, and stay aligned—without navigating a maze
							of channels or juggling disconnected tools.
						</SectionDescription>

						<CTAButtons
							primaryText="Get Started Free"
							className="justify-start mb-10"
						/>

						<ImagePlaceholder
							imageType="Feature Screenshot"
							description="Screenshot showing Melp's organized workspace structure. Display the team/topic hierarchy, clean sidebar navigation, and how conversations are neatly categorized. Should emphasize the 'organized workspaces' benefit."
							aspectRatio="aspect-[4/3]"
							size="full"
						/>
					</div>

					<div className="space-y-5">
						<FeatureCard
							icon="LayoutGrid"
							title="Organized workspaces, not chaotic channels"
							description="Melp's interface focuses on clarity. Conversations stay structured by team or topic, so context is never lost and updates are easy to find."
						/>
						<FeatureCard
							icon="Layers"
							title="No tool overload"
							description="Melp combines chat, meetings, scheduling, and file sharing in one connected workspace—no need to toggle between apps to get work done."
						/>
						<FeatureCard
							icon="Users"
							title="Built-in external collaboration"
							description="Invite clients, vendors, or freelancers securely—without needing IT or complex identity management. External users can participate with full context."
						/>
						<FeatureCard
							icon="Bot"
							title="AI-powered clarity"
							description="Melp includes automatic meeting summaries, multilingual translation, and real-time collaboration tools that help teams communicate efficiently and stay on track."
						/>
					</div>
				</div>
			</SectionWrapper>

			{/* Differentiators Section */}
			<SectionWrapper className="bg-background">
				<div className="text-center mb-14">
					<SectionLabel>Why Teams Choose Melp</SectionLabel>
					<SectionTitle className="max-w-3xl mx-auto">
						Why Teams Choose Melp Over Traditional Collaboration Suites
					</SectionTitle>
					<SectionDescription className="mx-auto">
						Teams switching from Microsoft Teams are often looking for a clearer,
						more streamlined way to collaborate. Melp provides structure,
						flexibility, and focus—without sacrificing security or scalability.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
					<FeatureCard
						icon="Sparkles"
						title="Less clutter, more clarity"
						description="Conversations are easy to follow. No more buried threads or lost follow-ups."
					/>
					<FeatureCard
						icon="Zap"
						title="Fast onboarding"
						description="New users—including external collaborators—can get started without training or account friction."
					/>
					<FeatureCard
						icon="Globe"
						title="Works across teams and organizations"
						description="Melp adapts to internal and cross-functional collaboration, making it ideal for client-facing or distributed teams."
					/>
					<FeatureCard
						icon="Shield"
						title="Security and compliance by design"
						description="Melp supports SOC 2, GDPR, HIPAA, and enterprise-grade security features like MFA and encrypted communication."
					/>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<ImagePlaceholder
						imageType="Feature Screenshot"
						description="Screenshot showing external collaboration in action. Display a shared workspace with both internal team members and external guests (clients/partners) collaborating together. Highlight how easy it is to invite external users."
						aspectRatio="aspect-video"
						size="full"
					/>
					<ImagePlaceholder
						imageType="Security Visual"
						description="Visual showing Melp's security features and compliance badges. Could be a screenshot of admin security settings, or an illustration featuring SOC 2, GDPR, HIPAA badges with security icons (encryption, MFA, etc.)."
						aspectRatio="aspect-video"
						size="full"
					/>
				</div>
			</SectionWrapper>

			{/* Testimonials Section */}
			<SectionWrapper className="bg-muted/20">
				<div className="text-center mb-14">
					<SectionLabel>Trusted by Teams Worldwide</SectionLabel>
					<SectionTitle>Trusted by Teams Replacing Microsoft Teams</SectionTitle>
					<SectionDescription className="max-w-2xl mx-auto">
						From fast-growing startups to global enterprises, teams use Melp to
						simplify how they collaborate—internally and externally. Melp gives
						you all the benefits of modern collaboration software, without the
						noise, friction, or complexity.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					<TestimonialCard
						quote="We needed a tool that external partners could use without complex onboarding. Melp made collaboration seamless from day one."
						author="Sarah Mitchell"
						role="Head of Operations"
						company="TechVentures Inc."
						avatar="/users/user-1.png"
					/>
					<TestimonialCard
						quote="Teams was too complex for our team. With Melp, everyone knows where to find conversations and how to stay aligned—no training required."
						author="Michael Chen"
						role="CTO"
						company="StartupFlow"
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
							Frequently Asked Questions About Microsoft Teams Alternatives
						</SectionTitle>
					</div>

					<FAQAccordion
						faqs={[
							{
								question:
									"What is the best Microsoft Teams alternative for modern teams?",
								answer:
									"The best Microsoft Teams alternative is one that fits your team's workflow. Melp App helps teams communicate clearly, stay organized, and work across organizations in one secure platform.",
							},
							{
								question:
									"Why are companies switching away from Microsoft Teams?",
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
						Ready to Switch from Microsoft Teams?
					</SectionTitle>
					<SectionDescription className="max-w-2xl mx-auto mb-8">
						If your team wants more clarity, less clutter, and better
						collaboration across departments and organizations—Melp is the
						Microsoft Teams alternative built for you. Start for free or schedule
						a demo today.
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
