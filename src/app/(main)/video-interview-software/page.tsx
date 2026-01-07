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
	title: "Video Interview Software Designed for Fair, Secure, and Scalable Hiring | Melp App",
	description:
		"Melp App supports modern hiring teams by bringing interviews, discussions, and decision-making into one secure, structured environment.",
	keywords: [
		"video interview software",
		"virtual interview software",
		"video interviewing platform",
		"secure interview software",
		"hiring platform",
		"interview software for hiring",
		"digital workplace",
	],
	openGraph: {
		title: "Video Interview Software Designed for Fair, Secure, and Scalable Hiring | Melp App",
		description:
			"Melp App supports modern hiring teams by bringing interviews, discussions, and decision-making into one secure, structured environment.",
		url: "https://melp.us/video-interview-software",
		siteName: "Melp",
		type: "website",
	},
};

export default function VideoInterviewSoftwarePage() {
	return (
		<>
			{/* Hero Section */}
			<SectionWrapper className="relative overflow-hidden bg-background pt-24 sm:pt-32 lg:pt-40 pb-20">
				{/* Grid pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#22202008_1px,transparent_1px),linear-gradient(to_bottom,#22202008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]" />

				<div className="relative z-10 text-center">
					<div className="flex items-center justify-center mb-10">
						<HeroBadge>Video Interview Software</HeroBadge>
					</div>

					<SectionTitle
						as="h1"
						className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-4xl mx-auto leading-[1.1]"
					>
						<span className="text-primary">Video Interview Software</span> Designed for Fair, Secure, and Scalable Hiring
					</SectionTitle>

					<SectionDescription className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto">
						Hiring decisions shape long-term business outcomes. The right video interview software enables organizations to evaluate candidates consistently, collaborate efficiently, and move faster without compromising quality. Melp App supports modern hiring teams by bringing interviews, discussions, and decision-making into one secure, structured environment.
					</SectionDescription>

					<SectionDescription className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
						What differentiates Melp App is that interviews do not exist in isolation. Choosing Melp App for interviews also means choosing a unified digital workplace where hiring workflows naturally extend into meetings, internal communication, documentation, professional networking, and ongoing collaboration. Teams continue working in the same environment long after interviews are complete.
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
							description="Hero image showing Melp's video interview platform with hiring workflow features. Display an interview interface with candidate evaluation, team collaboration, and decision-making tools in one connected workspace."
							aspectRatio="aspect-[16/10]"
							size="full"
						/>
					</div>
				</div>
			</SectionWrapper>

			{/* Why Rethink Section */}
			<SectionWrapper className="bg-background">
				<div className="text-center mb-14">
					<SectionLabel>Why Rethink?</SectionLabel>
					<SectionTitle className="max-w-3xl mx-auto">
						Why Hiring Teams Are Rethinking Traditional Interview Workflows
					</SectionTitle>
					<SectionDescription className="mx-auto">
						Many organizations still rely on disconnected tools for hiring. Interviews take place in one system, feedback is shared elsewhere, and decisions are finalized through emails or chats with limited context.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
					<FeatureCard
						icon="AlertCircle"
						title="Inconsistent candidate evaluations"
						description="Without a structured environment, different interviewers may evaluate candidates using varying criteria, leading to inconsistent hiring decisions."
					/>
					<FeatureCard
						icon="Clock"
						title="Delayed hiring decisions"
						description="When feedback and discussions happen across multiple platforms, hiring decisions take longer as teams struggle to consolidate information."
					/>
					<FeatureCard
						icon="Layers"
						title="Lost context between interview rounds"
						description="Important insights from earlier interviews often get lost when teams move between different tools for each stage of the hiring process."
					/>
					<FeatureCard
						icon="Users"
						title="Fragmented collaboration across teams and stakeholders"
						description="Hiring requires input from multiple stakeholders, but disconnected tools make it difficult to collaborate effectively."
					/>
				</div>

				<SectionDescription className="mx-auto text-center">
					A modern video interview software environment keeps interviews, discussions, and next steps connected. With Melp App, hiring teams remain aligned from the first screening call through final decision-making, without switching platforms or losing visibility.
				</SectionDescription>
			</SectionWrapper>

			{/* Benefits Section */}
			<SectionWrapper className="bg-muted/30">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
					<div className="lg:sticky lg:top-24">
						<SectionLabel>How It Helps</SectionLabel>
						<SectionTitle className="text-2xl sm:text-3xl lg:text-4xl">
							How Video Interview Software Improves Hiring Consistency and Speed
						</SectionTitle>
						<SectionDescription className="mb-8">
							Effective video interview software supports structured evaluation while keeping collaboration simple. Melp App helps hiring teams maintain consistency across interviews and reduce manual coordination.
						</SectionDescription>
						<SectionDescription className="mb-8">
							Beyond interviews, teams continue working inside the same platform for internal alignment meetings, hiring reviews, approvals, and follow-up discussions. This continuity ensures interview outcomes translate directly into action, helping organizations move faster with greater confidence.
						</SectionDescription>

						<CTAButtons
							primaryText="Get Started Free"
							className="justify-start mb-10"
						/>

						<ImagePlaceholder
							imageType="Feature Screenshot"
							description="Screenshot showing how hiring teams collaborate on candidate evaluations within Melp. Display interview notes, team discussions, and approval workflows in one unified view."
							aspectRatio="aspect-[4/3]"
							size="full"
						/>
					</div>

					<div className="space-y-5">
						<FeatureCard
							icon="CheckCircle"
							title="Structured evaluation"
							description="Maintain consistency across all interviews with structured evaluation tools that help every interviewer follow the same criteria."
						/>
						<FeatureCard
							icon="Zap"
							title="Reduced manual coordination"
							description="Eliminate the back-and-forth of scheduling, feedback collection, and decision-making by keeping everything in one platform."
						/>
						<FeatureCard
							icon="Users"
							title="Internal alignment"
							description="Use the same platform for internal alignment meetings, hiring reviews, approvals, and follow-up discussions."
						/>
						<FeatureCard
							icon="ArrowRight"
							title="Interview outcomes translate to action"
							description="Continuity ensures interview outcomes translate directly into hiring decisions, helping organizations move faster with greater confidence."
						/>
					</div>
				</div>
			</SectionWrapper>

			{/* Virtual Interview Section */}
			<SectionWrapper className="bg-background">
				<div className="text-center mb-14">
					<SectionLabel>Virtual Interview Software</SectionLabel>
					<SectionTitle className="max-w-3xl mx-auto">
						What Makes a Virtual Interview Software Effective for Modern Teams?
					</SectionTitle>
					<SectionDescription className="mx-auto">
						A reliable virtual interview software solution must fit naturally into everyday work. Hiring overlaps with planning, coordination, onboarding discussions, and cross-functional collaboration.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
					<FeatureCard
						icon="MessageSquare"
						title="Recruiters, hiring managers, and leadership"
						description="Continue communicating through meetings, chat, shared workspaces, and scheduling within the same environment."
					/>
					<FeatureCard
						icon="Network"
						title="Professional networking built-in"
						description="Stay connected with candidates, external professionals, and partner organizations beyond a single interview cycle."
					/>
					<FeatureCard
						icon="LayoutGrid"
						title="Fits naturally into everyday work"
						description="Melp App allows interview workflows to flow directly into broader teamwork seamlessly."
					/>
				</div>

				<ImagePlaceholder
					imageType="Platform Overview"
					description="Visual showing how interview workflows connect to broader teamwork features. Display the connection between video interviews, team messaging, scheduling, and professional networking."
					aspectRatio="aspect-[21/9]"
					size="full"
				/>
			</SectionWrapper>

			{/* Collaboration Beyond Interviews */}
			<SectionWrapper className="bg-muted/30">
				<div className="text-center mb-14">
					<SectionLabel>Video Interviewing Platform</SectionLabel>
					<SectionTitle className="max-w-3xl mx-auto">
						Why a Video Interviewing Platform Must Support Collaboration Beyond Interviews
					</SectionTitle>
					<SectionDescription className="mx-auto">
						A strong video interviewing platform supports everything that happens after the interview call ends. Hiring decisions require internal discussion, alignment across departments, documentation, and sometimes collaboration with external evaluators.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
					<FeatureCard
						icon="MessageCircle"
						title="Discuss candidates internally"
						description="Keep all candidate discussions in one place where every stakeholder can contribute and stay informed."
					/>
					<FeatureCard
						icon="ListCheck"
						title="Coordinate next steps"
						description="Plan follow-up interviews, assessments, and onboarding discussions without switching tools."
					/>
					<FeatureCard
						icon="Users"
						title="Collaborate with external stakeholders"
						description="Work securely with external evaluators, consultants, or partners without breaking context."
					/>
					<FeatureCard
						icon="Link"
						title="Interviews as part of connected workflow"
						description="Interviews become part of a connected workflow rather than isolated meetings, reducing friction and improving decision quality."
					/>
				</div>
			</SectionWrapper>

			{/* Fake Candidates Section */}
			<SectionWrapper className="bg-background">
				<div className="text-center mb-14">
					<SectionLabel>Secure Interviews</SectionLabel>
					<SectionTitle className="max-w-3xl mx-auto">
						Identifying Fake Candidates Through Secure Interviews on Melp App
					</SectionTitle>
					<SectionDescription className="mx-auto">
						Remote hiring has made interviews faster, but it has also increased the risk of impersonation, assisted interviews, and fabricated profiles. Subtle signals such as unusual attention shifts or inconsistent behavior are easy to miss in standard video calls. Melp App helps hiring teams gain clearer visibility into candidate authenticity during interviews without disrupting the conversation.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					<FeatureCard
						icon="Eye"
						title="Detect tab switching or off-screen behavior"
						description="Gain visibility into repeated tab switching or off-screen behavior during critical questions."
					/>
					<FeatureCard
						icon="AlertTriangle"
						title="Identify mismatches"
						description="Spot mismatches between resume claims and real-time explanations during the interview."
					/>
					<FeatureCard
						icon="Shield"
						title="Reduce impersonation risk"
						description="Maintain a consistent interview presence to reduce impersonation risk."
					/>
					<FeatureCard
						icon="Clock"
						title="Spot delayed responses"
						description="Identify delayed or externally guided responses during interviews that may indicate assistance."
					/>
					<FeatureCard
						icon="CheckCircle"
						title="Make confident decisions"
						description="Make confident hiring decisions based on observable engagement patterns throughout the interview."
					/>
				</div>
			</SectionWrapper>

			{/* Security Section */}
			<SectionWrapper className="bg-muted/30">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div>
						<SectionLabel>Enterprise Security</SectionLabel>
						<SectionTitle className="text-2xl sm:text-3xl lg:text-4xl">
							How Secure Interviewing Builds Trust With Candidates and Teams
						</SectionTitle>
						<SectionDescription className="mb-8">
							Hiring involves sensitive personal and professional information. Security and compliance are essential across interviews and all related collaboration.
						</SectionDescription>
						<SectionDescription className="mb-8">
							Melp App is built with enterprise-grade protection and supports global compliance standards, including HIPAA, GDPR, ISO 27001, and SOC 2. Multi-factor authentication and strict access controls help protect accounts, interviews, meetings, chats, and shared files. These safeguards extend across the entire digital workplace, ensuring trust for candidates, recruiters, and organizations alike.
						</SectionDescription>

						<CTAButtons
							primaryText="Learn More About Security"
							className="justify-start"
						/>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<FeatureCard
							icon="Shield"
							title="HIPAA Compliant"
							description="Protect sensitive health information during hiring in healthcare."
						/>
						<FeatureCard
							icon="Globe"
							title="GDPR Compliant"
							description="Meet European data protection requirements for global hiring."
						/>
						<FeatureCard
							icon="Lock"
							title="ISO 27001"
							description="Information security management certified."
						/>
						<FeatureCard
							icon="CheckCircle"
							title="SOC 2"
							description="Security, availability, and confidentiality verified."
						/>
					</div>
				</div>
			</SectionWrapper>

			{/* Why Melp Section */}
			<SectionWrapper className="bg-background">
				<div className="text-center mb-14">
					<SectionLabel>Why Melp App</SectionLabel>
					<SectionTitle className="max-w-3xl mx-auto">
						Why Melp App Supports Hiring, Networking, and Daily Work in One Platform
					</SectionTitle>
					<SectionDescription className="mx-auto">
						As a complete digital workplace, Melp App goes beyond interviews alone. Organizations that choose Melp App for video interviews also gain a unified environment for communication, collaboration, professional networking, document work, scheduling, and AI-assisted workflows.
					</SectionDescription>
					<SectionDescription className="mt-4 mx-auto">
						Interviews become one part of a connected ecosystem where teams hire, collaborate, communicate, and build professional relationships without relying on multiple tools. This reduces complexity, improves visibility, and supports long-term scalability across hiring and everyday business operations.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					<FeatureCard
						icon="MessageSquare"
						title="Communication"
						description="Team chat and messaging integrated with your hiring workflows."
					/>
					<FeatureCard
						icon="Users"
						title="Collaboration"
						description="Work together on hiring decisions with shared workspaces."
					/>
					<FeatureCard
						icon="Network"
						title="Professional Networking"
						description="Build and maintain professional relationships beyond interviews."
					/>
					<FeatureCard
						icon="FileText"
						title="Document Work"
						description="Create and share documents related to hiring and onboarding."
					/>
					<FeatureCard
						icon="Calendar"
						title="Scheduling"
						description="Coordinate interview schedules and team availability seamlessly."
					/>
					<FeatureCard
						icon="Bot"
						title="AI-Assisted Workflows"
						description="Leverage AI to streamline hiring processes and decision-making."
					/>
				</div>
			</SectionWrapper>

			{/* Testimonials Section */}
			<SectionWrapper className="bg-muted/20">
				<div className="text-center mb-14">
					<SectionLabel>Trusted by Teams Worldwide</SectionLabel>
					<SectionTitle>Trusted by Hiring Teams Moving to Modern Workflows</SectionTitle>
					<SectionDescription className="max-w-2xl mx-auto">
						From fast-growing startups to distributed enterprises, hiring teams use Melp to streamline interviews and improve collaboration quality.
					</SectionDescription>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					<TestimonialCard
						quote="Melp transformed our hiring process. Having interviews, discussions, and decisions in one place has cut our time-to-hire significantly."
						author="Sarah Chen"
						role="Head of Talent Acquisition"
						company="TechForward Inc."
						avatar="/users/user-1.png"
					/>
					<TestimonialCard
						quote="The security features give us confidence when hiring for sensitive roles. Plus, the collaboration tools mean we're aligned from first interview to final offer."
						author="Michael Torres"
						role="VP of Human Resources"
						company="SecureHire Solutions"
						avatar="/users/user-3.png"
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
							Common Questions About Video Interview Software
						</SectionTitle>
					</div>

					<FAQAccordion
						faqs={[
							{
								question:
									"What is video interview software?",
								answer:
									"Video interview software enables organizations to conduct remote interviews with candidates. Melp App goes beyond basic video calls by providing a structured environment where interviews, discussions, and decision-making happen in one secure platform.",
							},
							{
								question: "How does Melp App help identify fake candidates?",
								answer:
									"Melp App helps hiring teams gain visibility into candidate authenticity through features that detect unusual behavior like tab switching, delayed responses, and inconsistencies between resume claims and real-time explanations.",
							},
							{
								question:
									"Is Melp App secure for enterprise hiring?",
								answer:
									"Yes. Melp App is built with enterprise-grade protection and supports global compliance standards including HIPAA, GDPR, ISO 27001, and SOC 2. Multi-factor authentication and strict access controls protect all hiring data.",
							},
							{
								question: "How is Melp different from other video interview tools?",
								answer:
									"Melp App is a complete digital workplace, not just an interview tool. Interviews are connected to ongoing collaboration, communication, and professional networking, eliminating the need for multiple disconnected platforms.",
							},
							{
								question: "Can I use Melp App for more than just interviews?",
								answer:
									"Absolutely. Melp App supports communication, collaboration, professional networking, document work, scheduling, and AI-assisted workflows. Teams continue using the same platform long after interviews are complete.",
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
					<SectionLabel>Get Started</SectionLabel>
					<SectionTitle className="sm:text-4xl lg:text-5xl">
						Start Hiring With Clarity and Continue Working Without Disruption
					</SectionTitle>
					<SectionDescription className="max-w-2xl mx-auto mb-8">
						Hiring should not require switching platforms once interviews end. Melp App provides a video interview software environment that naturally extends into collaboration, professional networking, and daily work. Build a hiring process that connects interviews, teams, and ongoing collaboration in one secure digital workplace.
					</SectionDescription>

					<CTAButtons />

					<p className="mt-8 text-sm text-muted-foreground">
						Get started with Melp App today and simplify interviews, teamwork, and professional connections in one place.
					</p>
				</div>
			</SectionWrapper>
		</>
	);
}
