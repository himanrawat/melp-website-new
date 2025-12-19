"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpSidebar } from "../HelpSidebar";
import { sidebarCategories } from "../sidebarData";
import {
	ArrowRight,
	CheckCircle2,
	ChevronRight,
	ClipboardList,
	Crown,
	Info,
	LayoutList,
	Layers,
	MessageSquare,
	PlusCircle,
	Sparkles,
	UserMinus,
	UserPlus,
	Users,
	Video,
} from "lucide-react";

const pageSections = [
	{ id: "differenceTeamGroup", label: "Teams vs Groups", icon: Layers },
	{ id: "howToCreateGroup", label: "Create a Group", icon: PlusCircle },
	{
		id: "howToAddOrRemoveGroupMembers",
		label: "Manage Members",
		icon: UserMinus,
	},
	{
		id: "howToAddOrRemoveGroupAdminAccess",
		label: "Admin Access",
		icon: Crown,
	},
];

const groupBestUses = [
	"Casual chats with colleagues, friends, or contacts",
	"Brainstorming sessions for early ideas",
	"Instant voice or video meetings",
	"Quick alignment across team members or departments",
	"Temporary conversations like event planning or announcements",
];

const groupFeatures = [
	"Single chat screen for all conversations",
	"Voice and video call support",
	"No topics to set up",
	"Add members quickly",
	"Ideal for quick decisions and instant interactions",
];

const teamBestUses = [
	"Structured projects with multiple deliverables",
	"Cross-functional collaboration",
	"Department-based workspaces",
	"Organizing discussions by topic or task",
	"File sharing, scheduled meetings, and focused teamwork",
];

const teamFeatures = [
	"Multiple topics for organized conversations",
	"Role assignment (Admin or Member)",
	"Topic-specific files, notes, and chats",
	"More control and permissions for admins",
	"External collaborators can be added securely",
	"Centralized space for everything related to your project",
];

const comparisonRows = [
	{
		feature: "Purpose",
		teams: "Long-term project collaboration",
		groups: "Quick, informal discussion",
	},
	{ feature: "Setup", teams: "Structured (requires a topic)", groups: "Instant (no topic needed)" },
	{ feature: "Chat organization", teams: "Multiple topics", groups: "Single chat thread" },
	{
		feature: "Permissions",
		teams: "Admins can manage members and settings",
		groups: "All members have equal permissions",
	},
	{
		feature: "Use case",
		teams: "Product teams, departments, client workspaces",
		groups: "Idea sharing, quick syncs, casual chats",
	},
	{ feature: "File sharing", teams: "Per-topic organization", groups: "Shared in one chat thread" },
	{
		feature: "Voice and video calls",
		teams: "Integrated into topics",
		groups: "Available instantly",
	},
	{
		feature: "External members",
		teams: "Controlled and secure",
		groups: "Add easily with limited control",
	},
	{
		feature: "Ideal duration",
		teams: "Ongoing",
		groups: "Temporary or ad hoc",
	},
];

const decisionRows = [
	{ goal: "Quickly sharing an idea with a few people", choice: "Group" },
	{ goal: "Running a short-term discussion or call", choice: "Group" },
	{ goal: "Organizing a full project or campaign", choice: "Team" },
	{ goal: "Keeping your team's conversations neat and searchable", choice: "Team" },
	{ goal: "Collaborating across departments", choice: "Team" },
	{ goal: "Brainstorming without structure", choice: "Group" },
	{ goal: "Assigning responsibilities and managing permissions", choice: "Team" },
];

const createGroupDashboardSteps = [
	"From your Dashboard, click Create Group.",
	"Add your group name and any optional details.",
	"Select members from your contacts.",
	"Hit Create and you are all set.",
];

const createGroupSteps = [
	"Head to the left sidebar and open the Group tab.",
	"Click the Create Group icon.",
	"Fill in the group name, optional description or photo, and add members.",
	"Click Add Members, type names or emails to invite, or select from the list.",
	"Click Create to start chatting.",
];

const memberAddSteps = [
	"Open the Group tab.",
	"Open the group and click the group name to open Group Details, then click Edit.",
	"Type the name or email of the person you want to add or pick from your contact list.",
	"Click Done to add them and notify instantly.",
];

const memberRemoveSteps = [
	"Open the Group tab.",
	"Open the group, click the group name to open Group Details, then click Edit.",
	"Find the member, click the More icon, select Remove, and confirm.",
	"Click Done to finish and remove them from the group.",
];

const adminAddSteps = [
	"Open the Group tab.",
	"Open the group, click the group name to open Group Details, then click Edit.",
	"Find the member, click the More icon, select Make Group Admin, and confirm.",
	"Click Done and they now share admin access.",
];

const adminRemoveSteps = [
	"Open the Group tab.",
	"Open the group, click the group name to open Group Details, then click Edit.",
	"Find the admin, click the More icon, select Remove Group Admin, and confirm.",
	"Click Done to set them back to a regular member.",
];

export default function CreateGroupPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
			<Header />

			<div className="flex">
				<HelpSidebar categories={sidebarCategories} defaultExpanded="Groups" />

				<main className="flex-1">
					<div className="mx-auto max-w-4xl px-4 py-10 sm:px-8 lg:px-12 lg:py-12">
						{/* Breadcrumb */}
						<nav aria-label="Breadcrumb" className="mb-8">
							<ol className="flex items-center gap-2 text-sm">
								<li>
									<Link
										href="/resources/help"
										className="text-muted-foreground transition-colors hover:text-primary"
									>
										Help Center
									</Link>
								</li>
								<ChevronRight className="h-4 w-4 text-muted-foreground/50" />
								<li className="font-medium text-foreground">
									Difference between Teams and Groups
								</li>
							</ol>
						</nav>

						{/* Hero */}
						<motion.section
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="relative mb-12 overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-primary/5 via-primary/10 to-sky-500/5 p-8 sm:p-10"
						>
							<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
							<div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

							<div className="relative space-y-6">
								<div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
									<Users className="h-3 w-3" />
									Groups
								</div>

								<div>
									<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
										Teams vs. Groups on{" "}
										<span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
											Melp
										</span>
									</h1>
									<p className="mt-3 max-w-2xl text-lg text-muted-foreground">
										Use Groups for speed and Teams for structure. Pick the
										right workspace for quick chats or long-term projects.
									</p>
								</div>

								<div className="flex flex-wrap gap-3">
									{pageSections.map((section) => {
										const Icon = section.icon;
										return (
											<a
												key={section.id}
												href={`#${section.id}`}
												className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
											>
												<Icon className="h-4 w-4 opacity-60 group-hover:opacity-100" />
												{section.label}
											</a>
										);
									})}
								</div>
							</div>
						</motion.section>

						<div className="space-y-16">
							{/* Teams vs Groups */}
							<motion.section
								id="differenceTeamGroup"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Users className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Teams vs. Groups on Melp
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Melp gives you both Teams and Groups so you can move fast or
										work with more structure. Use the one that fits your
										workflow.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<div className="flex items-center gap-2">
												<MessageSquare className="h-5 w-5 text-primary" />
												<h3 className="font-semibold text-foreground">
													What is a Group?
												</h3>
											</div>
											<p className="text-sm text-muted-foreground">
												Groups are simple, quick, and flexible. Perfect for
												informal conversations, instant catch-ups, or fast
												decision-making. Create a group in seconds and start
												chatting or calling immediately.
											</p>
											<h4 className="text-sm font-semibold text-foreground">
												Best used for
											</h4>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{groupBestUses.map((item) => (
													<li key={item} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{item}</span>
													</li>
												))}
											</ul>
											<h4 className="text-sm font-semibold text-foreground">
												Key features
											</h4>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{groupFeatures.map((item) => (
													<li key={item} className="flex gap-2">
														<CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
														<span>{item}</span>
													</li>
												))}
											</ul>
											<div className="rounded-lg bg-muted/40 p-3 text-sm text-muted-foreground">
												<strong className="text-foreground">Example:</strong>{" "}
												Have a lightbulb moment for 2-3 teammates? Create a
												group, drop the idea, and get instant feedback.
											</div>
										</div>

										<div className="rounded-xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<div className="flex items-center gap-2">
												<Layers className="h-5 w-5 text-primary" />
												<h3 className="font-semibold text-foreground">
													What is a Team?
												</h3>
											</div>
											<p className="text-sm text-muted-foreground">
												Teams are built for structure and long-term work. Each
												team is a workspace with multiple topics to keep
												workstreams organized across roles and stages.
											</p>
											<h4 className="text-sm font-semibold text-foreground">
												Best used for
											</h4>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{teamBestUses.map((item) => (
													<li key={item} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{item}</span>
													</li>
												))}
											</ul>
											<h4 className="text-sm font-semibold text-foreground">
												Key features
											</h4>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{teamFeatures.map((item) => (
													<li key={item} className="flex gap-2">
														<CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
														<span>{item}</span>
													</li>
												))}
											</ul>
											<div className="rounded-lg bg-primary/5 border border-primary/30 p-3 text-sm text-muted-foreground">
												<strong className="text-foreground">Example:</strong>{" "}
												Running a product launch? Create a Team and topics like
												Design Assets, Feature QA, and Go-to-Market Plan so
												everyone stays focused.
											</div>
										</div>
									</div>

									<div className="rounded-2xl border border-border/50 bg-background p-4 sm:p-6">
										<h3 className="font-semibold text-foreground mb-4">
											Feature comparison
										</h3>
										<div className="overflow-hidden rounded-xl border border-border/50">
											<div className="grid grid-cols-3 bg-muted/40 px-4 py-2 text-sm font-semibold text-foreground">
												<span>Feature</span>
												<span className="text-center">Teams</span>
												<span className="text-center">Groups</span>
											</div>
											<div className="divide-y divide-border/60">
												{comparisonRows.map((row) => (
													<div
														key={row.feature}
														className="grid grid-cols-3 px-4 py-3 text-sm text-muted-foreground"
													>
														<span>{row.feature}</span>
														<span className="text-center">{row.teams}</span>
														<span className="text-center">{row.groups}</span>
													</div>
												))}
											</div>
										</div>
									</div>

									<div className="rounded-2xl border border-border/50 bg-card p-4 sm:p-6">
										<h3 className="font-semibold text-foreground mb-4">
											Which one should you use?
										</h3>
										<div className="overflow-hidden rounded-xl border border-border/50">
											<div className="grid grid-cols-2 bg-muted/40 px-4 py-2 text-sm font-semibold text-foreground">
												<span>If your goal is...</span>
												<span className="text-center">Go with...</span>
											</div>
											<div className="divide-y divide-border/60">
												{decisionRows.map((row) => (
													<div
														key={row.goal}
														className="grid grid-cols-2 px-4 py-3 text-sm text-muted-foreground"
													>
														<span>{row.goal}</span>
														<span className="text-center font-semibold text-foreground">
															{row.choice}
														</span>
													</div>
												))}
											</div>
										</div>
										<p className="mt-4 text-sm text-muted-foreground">
											At Melp, productivity starts with clarity and control.
											Use Groups for speed and Teams for structure.
										</p>
									</div>
								</div>
							</motion.section>

							{/* Create a Group */}
							<motion.section
								id="howToCreateGroup"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<PlusCircle className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										How to create a group
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Need a quick place to chat or meet? Start a group in
										seconds for fast conversations, sync-ups, or casual team
										chats.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<div className="flex items-center gap-2">
												<LayoutList className="h-5 w-5 text-primary" />
												<h3 className="font-semibold text-foreground">
													Create from the Dashboard
												</h3>
											</div>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{createGroupDashboardSteps.map((step) => (
													<li key={step} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{step}</span>
													</li>
												))}
											</ul>
										</div>

										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<div className="flex items-center gap-2">
												<ClipboardList className="h-5 w-5 text-primary" />
												<h3 className="font-semibold text-foreground">
													Step-by-step guide
												</h3>
											</div>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{createGroupSteps.map((step) => (
													<li key={step} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{step}</span>
													</li>
												))}
											</ul>
										</div>
									</div>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4 text-sm text-muted-foreground space-y-2">
										<p>
											<strong className="text-foreground">Quick tips:</strong>{" "}
											Groups are great for quick discussions and do not require
											topics.
										</p>
										<p>Use them for instant calls, chats, or informal updates.</p>
										<p>Add or remove members anytime if you are the group
											creator.</p>
										<p>
											Pro tip: keep group names short and clear (for example,
											Design Team) and add a picture for quick recognition.
										</p>
									</div>
								</div>
							</motion.section>

							{/* Add or Remove Group Members */}
							<motion.section
								id="howToAddOrRemoveGroupMembers"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<UserPlus className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										How to add or remove group members
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Group admins control membership. As the creator you are the
										admin by default.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<div className="flex items-center gap-2">
												<UserPlus className="h-5 w-5 text-primary" />
												<h3 className="font-semibold text-foreground">
													Add members
												</h3>
											</div>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{memberAddSteps.map((step) => (
													<li key={step} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{step}</span>
													</li>
												))}
											</ul>
										</div>

										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<div className="flex items-center gap-2">
												<UserMinus className="h-5 w-5 text-primary" />
												<h3 className="font-semibold text-foreground">
													Remove members
												</h3>
											</div>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{memberRemoveSteps.map((step) => (
													<li key={step} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{step}</span>
													</li>
												))}
											</ul>
										</div>
									</div>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4">
										<p className="text-sm text-muted-foreground">
											<strong className="text-foreground">Admin permissions:</strong>{" "}
											Only group admins can add or remove members, edit the
											group name, photo, or description, and manage roles.
										</p>
										<p className="text-sm text-muted-foreground mt-2">
											Regularly review members so only the right people stay in
											the conversation.
										</p>
									</div>
								</div>
							</motion.section>

							{/* Admin Access */}
							<motion.section
								id="howToAddOrRemoveGroupAdminAccess"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Crown className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Assigning or removing admin rights
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Need a co-pilot to run the group? Promote someone to admin
										or remove admin rights in a few clicks. Only the group
										admin who created the group can assign or remove admin
										rights; co-admins cannot demote the main admin.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<div className="flex items-center gap-2">
												<Crown className="h-5 w-5 text-primary" />
												<h3 className="font-semibold text-foreground">
													Make someone a Group Admin
												</h3>
											</div>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{adminAddSteps.map((step) => (
													<li key={step} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{step}</span>
													</li>
												))}
											</ul>
										</div>

										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<div className="flex items-center gap-2">
												<Users className="h-5 w-5 text-primary" />
												<h3 className="font-semibold text-foreground">
													Remove admin rights
												</h3>
											</div>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{adminRemoveSteps.map((step) => (
													<li key={step} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{step}</span>
													</li>
												))}
											</ul>
										</div>
									</div>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4">
										<ul className="space-y-2 text-sm text-muted-foreground">
											<li className="flex gap-2">
												<Info className="h-4 w-4 text-primary mt-0.5" />
												<span>
													Only the main group admin can assign or revoke admin
													access.
												</span>
											</li>
											<li className="flex gap-2">
												<Info className="h-4 w-4 text-primary mt-0.5" />
												<span>
													Admins can edit group details and manage members and
													roles.
												</span>
											</li>
											<li className="flex gap-2">
												<Info className="h-4 w-4 text-primary mt-0.5" />
												<span>Co-admins cannot demote the main admin.</span>
											</li>
										</ul>
									</div>
								</div>
							</motion.section>
						</div>

						{/* Back to Help Center */}
						<div className="mt-16 flex justify-center">
							<Link
								href="/resources/help"
								className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
							>
								<ArrowRight className="h-4 w-4 rotate-180" />
								Back to Help Center
							</Link>
						</div>
					</div>
				</main>
			</div>

			<Footer />
		</div>
	);
}
