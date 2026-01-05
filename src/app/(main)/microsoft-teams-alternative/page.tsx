import { Metadata } from "next";
import {
	SectionWrapper,
	SectionLabel,
	SectionTitle,
	SectionDescription,
	FeatureCard,
	FAQAccordion,
	CTAButtons,
	HeroBadge,
	ImagePlaceholder,
} from "@/components/alternative";

export const metadata: Metadata = {
	title: "Best Microsoft Teams Alternative | Melp App",
	description:
		"Looking for the best Microsoft Teams alternative or a free Teams alternative? Melp is a powerful collaboration tool and digital workplace platform that combines chat, video conferencing, calendar, and team collaboration - all in one app.",
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
		title: "Best Microsoft Teams Alternative | Melp App",
		description:
			"Looking for the best Microsoft Teams alternative or a free Teams alternative? Melp is a powerful collaboration tool and digital workplace platform that combines chat, video conferencing, calendar, and team collaboration - all in one app.",
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
						<HeroBadge>Your all-in-one Microsoft Teams alternative</HeroBadge>
					</div>

					<SectionTitle
						as="h1"
						className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-4xl mx-auto leading-[1.1]"
					>
						Your all-in-one{" "}
						<span className="text-primary">Microsoft Teams alternative</span> for
						seamless collaboration
					</SectionTitle>

					<SectionDescription className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto">
						Melp App is a powerful Microsoft Teams alternative that helps your
						business communicate and collaborate with ease. It keeps every
						conversation organized and every project moving smoothly, regardless
						of where your team members work. Teams inside and outside your
						organization can connect in one shared workspace built for clarity and
						results. Melp brings structure to communication, allowing ideas to
						flow naturally and decisions to be made faster. As a modern teams
						alternative, it helps your business stay focused, productive, and truly
						connected without the noise or confusion of juggling multiple tools.
					</SectionDescription>

					<div className="mt-10">
						<CTAButtons />
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
					<SectionLabel>Key reasons businesses are switching:</SectionLabel>
					<SectionTitle className="max-w-3xl mx-auto">
						Why are businesses switching to Microsoft Teams alternatives?
					</SectionTitle>
					<SectionDescription className="mx-auto">
						Businesses are turning to Microsoft Teams alternatives to overcome
						tool overload, scattered communication, and slow collaboration. As
						teams grow and work with external partners, they need a platform that
						keeps everything organized and connected. Melp App simplifies how
						teams communicate, share ideas, and stay aligned - all in one seamless
						workspace.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
					<FeatureCard
						icon="Layers"
						title="Eliminates tool overload"
						description="Eliminates tool overload and scattered workflows."
					/>
					<FeatureCard
						icon="Users"
						title="Smooth external and internal collaboration"
						description="Enables smooth external and internal collaboration."
					/>
					<FeatureCard
						icon="Zap"
						title="Communication speed and clarity"
						description="Improves communication speed and clarity."
					/>
					<FeatureCard
						icon="LayoutGrid"
						title="Well-structured conversations and teamwork"
						description="Keeps conversations and teamwork well-structured."
					/>
					<FeatureCard
						icon="Sparkles"
						title="Productivity and team alignment"
						description="Boosts productivity and team alignment."
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
						<SectionLabel>Why businesses prefer Melp App:</SectionLabel>
						<SectionTitle className="text-2xl sm:text-3xl lg:text-4xl">
							Key reasons Melp App is becoming the preferred Microsoft Teams
							alternative
						</SectionTitle>
						<SectionDescription className="mb-8">
							Melp App gives organizations a smarter way to manage teamwork and
							communication. It replaces scattered tools with one structured space
							built around teams, topics, and real-time interaction. Conversations
							stay organized, and collaboration feels natural whether you're
							working internally or with external partners. Melp adapts to how
							modern teams actually work - helping reduce meeting fatigue,
							eliminate tool overload, and keep communication clear. As a reliable
							alternative to Teams, it connects people, ideas, and workstreams
							effortlessly, turning everyday collaboration into real progress.
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
							title="Communication organized and focused"
							description="Keeps communication organized and focused."
						/>
						<FeatureCard
							icon="Users"
							title="External and cross-functional teamwork"
							description="Supports external and cross-functional teamwork."
						/>
						<FeatureCard
							icon="MessageSquareOff"
							title="Less tool switching and fatigue"
							description="Reduces tool switching and fatigue."
						/>
						<FeatureCard
							icon="Calendar"
							title="Clarity and real-time coordination"
							description="Improves clarity and real-time coordination."
						/>
						<FeatureCard
							icon="Sparkles"
							title="Measurable collaboration outcomes"
							description="Turns collaboration into measurable outcomes."
						/>
					</div>
				</div>
			</SectionWrapper>
			{/* FAQ Section */}
			<SectionWrapper className="bg-background">
				<div className="max-w-3xl mx-auto">
					<div className="text-center mb-12">
						<SectionTitle>Frequently Asked Questions</SectionTitle>
					</div>

					<FAQAccordion
						faqs={[
							{
								question:
									"What is the best Microsoft Teams alternative for modern businesses?",
								answer:
									"The strongest Microsoft Teams alternative for many growing companies is Melp App. It gives teams one dependable place to talk, meet, and share information instead of bouncing between several programs. By keeping everything in a single, organized space, the Melp App helps people stay connected and focused on work that actually matters.",
							},
							{
								question:
									"Which Microsoft Teams alternatives offer better collaboration options?",
								answer:
									"Among today's Microsoft Teams alternatives, Melp AI Digital Workplace draws attention because it keeps communication organized and easy to follow. Conversations are grouped by teams and topics so everyone knows where to find what they need. Whether people work from home or at the office, the Melp App helps them stay coordinated without confusion.",
							},
							{
								question:
									"How do alternatives to Microsoft Teams improve communication?",
								answer:
									"Alternatives to Microsoft Teams aim to make everyday communication smoother. Melp App brings chats, meetings, and shared updates into one place so employees don't have to jump between windows. It keeps information visible, encourages faster replies, and helps departments work together naturally.",
							},
							{
								question:
									"Why do businesses prefer an alternative to Teams for daily collaboration?",
								answer:
									"Many organizations look for an alternative to Teams because they want tools that are lighter, clearer, and easier for everyone to use. Melp App removes the clutter of too many platforms and gives teams a single, steady rhythm for sharing ideas. With Melp AI Digital Workplace, people can focus on the work itself instead of figuring out how to stay in touch.",
							},
							{
								question:
									"Are there any free alternatives to Microsoft Teams for small organizations?",
								answer:
									"Some free alternatives to Microsoft Teams exist, but Melp App offers more than most. Its free plan covers essential communication and meeting tools so small teams can start working together right away. As the business grows, Melp App expands with it - keeping the same smooth experience without extra complexity.",
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
					<SectionTitle className="sm:text-4xl lg:text-5xl">
						Your search stops here.
					</SectionTitle>
					<SectionDescription className="max-w-2xl mx-auto mb-8">
						Experience Melp App and bring effortless communication and teamwork to
						your entire business.
					</SectionDescription>

					<CTAButtons />
				</div>
			</SectionWrapper>

		</>
	);
}
