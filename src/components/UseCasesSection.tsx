"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { GlowingBorderCard, RevealOnScroll } from "@/components/ui/aceternity";

const industryUseCases = [
	{
		title: "Technology",
		description:
			"AI summaries for sprint reviews, instant translation for global teams, and meeting transcripts that become searchable documentation.",
		gradient: "from-violet-500/20 via-purple-500/10",
		image: "/assets/video-gallery-grid.png",
		alt: "Technology teams collaborating in a video gallery grid",
	},
	{
		title: "Healthcare",
		description:
			"AI-powered multilingual communication for care teams. Instant document translation and compliant meeting summaries.",
		gradient: "from-emerald-500/20 via-green-500/10",
		image: "/assets/team-collaboration-translation.png",
		alt: "Healthcare professionals collaborating with translation assistance",
	},
	{
		title: "Finance",
		description:
			"AI summaries of client meetings, translated compliance documents, and intelligent drafting for client communications.",
		gradient: "from-blue-500/20 via-cyan-500/10",
		image: "/assets/video-call-invite-panel.png",
		alt: "Client meeting invite panel during a secure video call",
	},
	{
		title: "Professional Services",
		description:
			"AI extracts key details from client documents. Meeting summaries with action items. Draft proposals in any professional tone.",
		image: "/assets/meeting-scheduling-ui-collage.png",
		alt: "Scheduling and invitation UI for professional services projects",
		imageFit: "object-contain",
	},
	{
		title: "Agencies",
		description:
			"AI translation for global creative briefs. Summarize client feedback instantly. Draft responses in the right tone.",
		gradient: "from-pink-500/20 via-rose-500/10",
		image: "/assets/live-broadcast-thumbnail-collage.png",
		alt: "Live broadcast and recording controls for creative teams",
	},
	{
		title: "Manufacturing",
		description:
			"Real-time translation across supplier languages. AI summaries of supply chain updates. Instant document translation.",
		gradient: "from-slate-500/20 via-gray-500/10",
		image: "/assets/mobile-meeting-scheduling-screens.png",
		alt: "Mobile scheduling for distributed manufacturing teams",
		imageFit: "object-contain",
	},
];

const roleUseCases = [
	{
		title: "Product Teams",
		description:
			"AI summarizes stakeholder meetings. Translate PRDs for global teams. Ask questions to extract requirements from any document.",
		gradient: "from-indigo-500/20 via-blue-500/10",
		image: "/assets/mobile-groups-teams-screens.png",
		alt: "Mobile view of product team groups and threads",
		imageFit: "object-contain",
	},
	{
		title: "Engineering",
		description:
			"AI meeting summaries capture technical decisions. Translate documentation for distributed teams. Q&A from spec documents.",
		gradient: "from-cyan-500/20 via-teal-500/10",
	},
	{
		title: "Marketing",
		description:
			"AI drafts campaign copy in any tone. Translate assets for global markets. Summarize campaign performance reports instantly.",
		gradient: "from-orange-500/20 via-amber-500/10",
	},
	{
		title: "Sales",
		description:
			"AI summaries of client calls with action items. Draft follow-ups professionally. Translate proposals for international deals.",
		gradient: "from-green-500/20 via-emerald-500/10",
		image: "/assets/customer-support-call-collage.png",
		alt: "Sales demo style video call with quick access actions",
		imageFit: "object-contain",
	},
	{
		title: "HR & People",
		description:
			"AI evaluation mode for interviews with integrity signals. Generate questions from job descriptions. Summarize candidate sessions.",
		gradient: "from-purple-500/20 via-violet-500/10",
	},
	{
		title: "Operations",
		description:
			"AI summaries of vendor meetings. Translate supplier documents. Extract key details from contracts and SOWs.",
		gradient: "from-red-500/20 via-rose-500/10",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.4 },
	},
};

type UseCaseCardProps = Readonly<{
	title: string;
	description: string;
	gradient?: string;
	image?: string;
	imageFit?: string;
	alt?: string;
}>;

function UseCaseCard({
	title,
	description,
	gradient,
	image,
	imageFit,
	alt,
}: UseCaseCardProps) {
	return (
		<motion.div variants={itemVariants}>
			<GlowingBorderCard className="h-full">
				<div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-xl bg-muted">
					{image ? (
						<>
							<Image
								src={image}
								alt={alt ?? title}
								fill
								className={imageFit ?? "object-cover"}
								sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
							/>
							{gradient && (
								<div
									className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-70 mix-blend-multiply`}
								/>
							)}
						</>
					) : (
						<>
							{gradient && (
								<div
									className={`absolute inset-0 bg-gradient-to-br ${gradient} to-transparent`}
								/>
							)}
							<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
							<motion.div
								className="w-14 h-14 rounded-full border-2 border-primary/30 bg-primary/10 relative z-10 flex items-center justify-center"
								whileHover={{ scale: 1.1 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							/>
						</>
					)}
				</div>
				{/* Content */}
				<div className="p-6 bg-card rounded-b-xl">
					<h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
						{title}
					</h3>
					<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
						{description}
					</p>
				</div>
			</GlowingBorderCard>
		</motion.div>
	);
}

export default function UseCasesSection() {
	return (
		<motion.section
			id="use-cases"
			className="py-20 sm:py-32 bg-background relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
		>
			{/* Background decoration */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,32,32,0.03)_0%,transparent_70%)]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<RevealOnScroll className="text-center mb-12">
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						AI Use Cases
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						AI outcomes for every team
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
						Translation, summarization, intelligent drafting, and interview evaluation —
						AI that delivers value across industries and roles.
					</p>
				</RevealOnScroll>

				{/* Tabs */}
				<Tabs defaultValue="industry" className="w-full">
					<div className="flex justify-center mb-10">
						<TabsList className="bg-muted/50 p-1 rounded-full">
							<TabsTrigger
								value="industry"
								className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
							>
								By Industry
							</TabsTrigger>
							<TabsTrigger
								value="role"
								className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
							>
								By Role
							</TabsTrigger>
						</TabsList>
					</div>

					<TabsContent value="industry">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
						>
							{industryUseCases.map((useCase) => (
								<UseCaseCard key={useCase.title} {...useCase} />
							))}
						</motion.div>
					</TabsContent>

					<TabsContent value="role">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
						>
							{roleUseCases.map((useCase) => (
								<UseCaseCard key={useCase.title} {...useCase} />
							))}
						</motion.div>
					</TabsContent>
				</Tabs>
			</div>
		</motion.section>
	);
}
