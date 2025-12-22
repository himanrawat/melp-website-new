"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { GlowingBorderCard, RevealOnScroll } from "@/components/ui/aceternity";

const industryUseCases = [
	{
		title: "Technology",
		description:
			"Unite engineering teams, vendors, and partners across continents. Ship faster with AI-powered workflows and structured collaboration.",
		gradient: "from-violet-500/20 via-purple-500/10",
	},
	{
		title: "Healthcare",
		description:
			"Secure, compliant communication for care teams, partners, and agencies. Coordinate seamlessly with trust engineered at every layer.",
		gradient: "from-emerald-500/20 via-green-500/10",
	},
	{
		title: "Finance",
		description:
			"Connect clients, partners, and internal teams. Enterprise-grade security meets lightning-fast deal flow and compliance tracking.",
		gradient: "from-blue-500/20 via-cyan-500/10",
	},
	{
		title: "Professional Services",
		description:
			"One workspace for consultants, clients, and vendors. A professional graph where real projects come together.",
		gradient: "from-amber-500/20 via-yellow-500/10",
	},
	{
		title: "Agencies",
		description:
			"Collaborate with clients and vendors like you're in the same room. Instant sharing, precision permissions, frictionless teamwork.",
		gradient: "from-pink-500/20 via-rose-500/10",
	},
	{
		title: "Manufacturing",
		description:
			"Connect the shop floor to global suppliers and partners. Real-time updates with instant translation across languages.",
		gradient: "from-slate-500/20 via-gray-500/10",
	},
];

const roleUseCases = [
	{
		title: "Product Teams",
		description:
			"From roadmap to launch, keep teams and external partners aligned. Where complexity transforms into focus.",
		gradient: "from-indigo-500/20 via-blue-500/10",
	},
	{
		title: "Engineering",
		description:
			"Async-first collaboration with context. Connect distributed teams and vendors where conversations flow naturally.",
		gradient: "from-cyan-500/20 via-teal-500/10",
	},
	{
		title: "Marketing",
		description:
			"Coordinate with agencies, vendors, and internal teams. Intelligence guides every campaign moment.",
		gradient: "from-orange-500/20 via-amber-500/10",
	},
	{
		title: "Sales",
		description:
			"Close deals with real-time client collaboration. Partners, vendors, and customers united in deal rooms.",
		gradient: "from-green-500/20 via-emerald-500/10",
	},
	{
		title: "HR & People",
		description:
			"Onboard global teams seamlessly. Build culture across rooms, cities, and continents.",
		gradient: "from-purple-500/20 via-violet-500/10",
	},
	{
		title: "Operations",
		description:
			"Automate workflows with vendors and partners. AI summaries and intelligent routing reduce noise.",
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

function UseCaseCard({
	title,
	description,
	gradient,
}: {
	title: string;
	description: string;
	gradient: string;
}) {
	return (
		<motion.div variants={itemVariants}>
			<GlowingBorderCard className="h-full">
				{/* Image Placeholder */}
				<div
					className={`relative aspect-[16/10] w-full bg-gradient-to-br ${gradient} to-transparent flex items-center justify-center overflow-hidden rounded-t-xl`}
				>
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
					<motion.div
						className="w-14 h-14 rounded-full border-2 border-primary/30 bg-primary/10 relative z-10"
						whileHover={{ scale: 1.1 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
					/>
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
						Use Cases
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						Partners. Clients. Vendors. United.
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
						Whether you&apos;re connecting with internal teams or global partners, Melp adapts to your workflow.
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
							{industryUseCases.map((useCase, index) => (
								<UseCaseCard key={index} {...useCase} />
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
							{roleUseCases.map((useCase, index) => (
								<UseCaseCard key={index} {...useCase} />
							))}
						</motion.div>
					</TabsContent>
				</Tabs>
			</div>
		</motion.section>
	);
}
