"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { HelpSidebar } from "../HelpSidebar";
import { sidebarCategories } from "../sidebarData";
import {
	ArrowRight,
	BookOpen,
	Check,
	CheckCircle2,
	ChevronRight,
	ClipboardList,
	Crown,
	Info,
	Layers,
	Link2,
	ListChecks,
	PlusCircle,
	Sparkles,
	User,
	UserCog,
	UserMinus,
	UserPlus,
	Users,
} from "lucide-react";

const pageSections = [
	{ id: "whatAreTeamsAndTopics", label: "What are Teams & Topics", icon: Layers },
	{ id: "howToCreateTeam", label: "Create a Team", icon: PlusCircle },
	{ id: "howToCreateTopic", label: "Create a Topic", icon: ClipboardList },
	{ id: "howToRemoveMember", label: "Manage Members", icon: UserMinus },
	{ id: "howToAssignRemoveAdmin", label: "Admin Access", icon: Crown },
];

const teamBenefits = [
	"Group related topics and discussions in one place",
	"Keep communication focused and structured",
	"Control who has access to what",
	"Collaborate across departments or companies without losing context",
];

const rolePermissions = [
	{ task: "Create a topic", owner: true, member: false },
	{ task: "Leave a team", owner: true, member: true },
	{ task: "Add members", owner: true, member: false },
	{ task: "Edit team name or description", owner: true, member: false },
	{ task: "Assign or dismiss another admin", owner: true, member: false },
	{ task: "Add a profile picture", owner: true, member: false },
];

const teamSettings = [
	"Add or remove members",
	"Update the team name, description, or image",
	"Promote or demote admins",
];

const topicBenefits = [
	"Keep each discussion separate and organized",
	"Avoid cluttered group chats",
	"Share files, links, and notes that stay attached to the conversation",
	"Stay on track by focusing only on what matters",
];

const createTeamMethods = [
	{
		title: "Create from the Dashboard",
		steps: [
			"From your Dashboard, click Create Team.",
			"Enter a Team Name and an optional description or profile picture.",
			"Add teammates by typing their name or email or selecting them from suggestions.",
			"Click Create and your team is ready.",
		],
	},
	{
		title: "Create from the Team tab",
		steps: [
			"Open the Team tab in the left sidebar.",
			"Click the + Create Team icon.",
			"Fill in the name, optional description/photo, and add teammates.",
			"Hit Create to launch your team.",
		],
	},
	{
		title: "Create from Contacts (fastest)",
		steps: [
			"Open the Contacts tab.",
			"Select more than one user from your contact list and click Create Team.",
			"Enter a Team Name plus optional description/photo.",
			"Click Create and you are good to go.",
		],
	},
];

const createTopicSteps = [
	"Hover on the team where you want a topic and click the three-dot More Options icon.",
	"Select Create Topic.",
	"Give the topic a clear name like Q3 Marketing Plan or Innovation Design.",
	"Add a short description so the team knows what it covers.",
	"Click Create to start collaborating.",
];

const memberAddSteps = [
	"Go to the Teams section from your dashboard.",
	"Select Add Members.",
	"Type the name or email of the people you want to add or pick from your Contact List.",
	"Click Done to add them instantly.",
];

const memberRemoveSteps = [
	"Open the Team Info page of the team you want to manage.",
	"Click Edit Team.",
	"Find the member, click the More icon next to their name, choose Remove, and confirm.",
	"Click Done to complete the update.",
];

const adminRights = [
	"Edit team details like name, description, and profile picture",
	"Promote someone to co-admin from Edit Team",
	"Only admins can manage members or admin rights",
];

const adminAddSteps = [
	"Open the Team Info page of the team you want to manage.",
	"Click Edit Team.",
	"Click the More icon next to the teammate's name, select Make Team Admin, and confirm.",
	"Click Done and they now share admin access.",
];

const adminRemoveSteps = [
	"Open the Team Info page.",
	"Click Edit Team.",
	"Click the More icon next to their name, select Remove Team Admin, and confirm.",
	"Click Done to set them back to a regular member.",
];

export default function TeamsTopicsPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
			<div className="flex">
				<HelpSidebar
					categories={sidebarCategories}
					defaultExpanded="Teams and Topics"
				/>

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
									What are teams and topics
								</li>
							</ol>
						</nav>

						{/* Hero */}
						<motion.section
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="relative mb-12 overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-primary/5 via-primary/10 to-violet-500/5 p-8 sm:p-10"
						>
							<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
							<div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

							<div className="relative space-y-6">
								<div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
									<Layers className="h-3 w-3" />
									Teams & Topics
								</div>

								<div>
									<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
										Organize work with{" "}
										<span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
											Teams & Topics
										</span>
									</h1>
									<p className="mt-3 max-w-2xl text-lg text-muted-foreground">
										Keep projects, people, and conversations organized. Teams
										group the right members together, and Topics keep every
										discussion focused.
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
							{/* What are Teams & Topics */}
							<motion.section
								id="whatAreTeamsAndTopics"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Layers className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										What are Teams & Topics in Melp?
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-lg text-muted-foreground leading-relaxed">
										Melp keeps you organized, connected, and productive. Teams
										bring the right people together and Topics keep every
										conversation on track.
									</p>

									<div className="space-y-4">
										<h3 className="text-xl font-semibold text-foreground">
											Teams: where collaboration begins
										</h3>
										<p className="text-muted-foreground">
											Teams gather people working toward a common goal. Think
											of a team as the workspace for a project, department, or
											shared objective. Conversations, files, and meetings are
											visible only to team members.
										</p>
										<div className="grid gap-3 sm:grid-cols-2">
											<div className="rounded-xl border border-border/50 bg-muted/20 p-4">
												<h4 className="font-semibold text-foreground mb-2">
													Why use Teams?
												</h4>
												<ul className="space-y-2 text-sm text-muted-foreground">
													{teamBenefits.map((item) => (
														<li key={item} className="flex gap-2">
															<Check className="h-4 w-4 text-primary mt-0.5" />
															<span>{item}</span>
														</li>
													))}
												</ul>
											</div>
											<div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
												<h4 className="font-semibold text-foreground">
													Example
												</h4>
												<p className="mt-2 text-sm text-muted-foreground">
													Running a product launch? Create a Product Launch
													team with marketing, design, sales, and engineering.
													Everyone collaborates in one place and uses Topics to
													keep workstreams focused.
												</p>
											</div>
										</div>
									</div>

									<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-4">
										<div className="flex items-center gap-2">
											<User className="h-5 w-5 text-primary" />
											<h4 className="font-semibold text-foreground">
												Team roles
											</h4>
										</div>
										<p className="text-sm text-muted-foreground">
											There are two key roles inside a team:
										</p>
										<ul className="space-y-2 text-sm text-muted-foreground">
											<li className="flex gap-2">
												<Crown className="h-4 w-4 text-amber-500 mt-0.5" />
												<span>
													<strong>Team Admin (Owner)</strong> - creates and
													manages the team
												</span>
											</li>
											<li className="flex gap-2">
												<Users className="h-4 w-4 text-primary mt-0.5" />
												<span>
													<strong>Team Member</strong> - invited users who
													contribute to team activities
												</span>
											</li>
										</ul>

										<div className="overflow-hidden rounded-xl border border-border/50">
											<div className="grid grid-cols-3 bg-muted/40 px-4 py-2 text-sm font-semibold text-foreground">
												<span>Task</span>
												<span className="text-center">Team Owner</span>
												<span className="text-center">Team Member</span>
											</div>
											<div className="divide-y divide-border/60">
												{rolePermissions.map((row) => (
													<div
														key={row.task}
														className="grid grid-cols-3 px-4 py-3 text-sm text-muted-foreground"
													>
														<span>{row.task}</span>
														<span className="flex justify-center">
															{row.owner ? (
																<CheckCircle2 className="h-5 w-5 text-emerald-500" />
															) : (
																<span className="text-xs text-muted-foreground">
																	No
																</span>
															)}
														</span>
														<span className="flex justify-center">
															{row.member ? (
																<CheckCircle2 className="h-5 w-5 text-emerald-500" />
															) : (
																<span className="text-xs text-muted-foreground">
																	No
																</span>
															)}
														</span>
													</div>
												))}
											</div>
										</div>

										<p className="text-sm text-muted-foreground">
											Admins can promote a member to admin or step down
											themselves.
										</p>
									</div>

									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-xl border border-border/50 bg-card p-4 space-y-2">
											<div className="flex items-center gap-2">
												<UserCog className="h-5 w-5 text-primary" />
												<h4 className="font-semibold text-foreground">
													Team settings (admins)
												</h4>
											</div>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{teamSettings.map((item) => (
													<li key={item} className="flex gap-2">
														<ChevronRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{item}</span>
													</li>
												))}
											</ul>
											<div className="rounded-lg bg-muted/40 p-3 text-xs text-muted-foreground">
												When you are added to a team, you are also added to all
												its topics.
											</div>
										</div>
										<div className="rounded-xl border border-border/50 bg-card p-4 space-y-2">
											<div className="flex items-center gap-2">
												<Link2 className="h-5 w-5 text-primary" />
												<h4 className="font-semibold text-foreground">
													External participants
												</h4>
											</div>
											<p className="text-sm text-muted-foreground">
												Melp supports external collaborators. They only see the
												specific team or group they are invited to, not the
												rest of your workspace. It is secure and focused.
											</p>
										</div>
									</div>

									<div className="space-y-4">
										<h3 className="text-xl font-semibold text-foreground">
											Topics: keep conversations focused
										</h3>
										<p className="text-muted-foreground">
											Topics are mini workspaces inside a team. Files,
											messages, links, and media stay attached to the topic so
											you never lose context.
										</p>
										<div className="grid gap-3 sm:grid-cols-2">
											<div className="rounded-xl border border-border/50 bg-muted/20 p-4">
												<h4 className="font-semibold text-foreground mb-2">
													Why topics help
												</h4>
												<ul className="space-y-2 text-sm text-muted-foreground">
													{topicBenefits.map((item) => (
														<li key={item} className="flex gap-2">
															<ListChecks className="h-4 w-4 text-primary mt-0.5" />
															<span>{item}</span>
														</li>
													))}
												</ul>
											</div>
											<div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
												<h4 className="font-semibold text-foreground">
													Guidance
												</h4>
												<p className="mt-2 text-sm text-muted-foreground">
													Every team needs at least one topic. When you create
													a team you are prompted to add a topic to get the
													conversation going.
												</p>
											</div>
										</div>
									</div>
								</div>
							</motion.section>

							{/* Create a Team */}
							<motion.section
								id="howToCreateTeam"
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
										How to create a team
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Collaborate smarter and faster. Pick any of these ways to
										create a team.
									</p>

									<div className="grid gap-4 sm:grid-cols-3">
										{createTeamMethods.map((method) => (
											<div
												key={method.title}
												className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3"
											>
												<div className="flex items-center gap-2">
													<BookOpen className="h-5 w-5 text-primary" />
													<h3 className="font-semibold text-foreground">
														{method.title}
													</h3>
												</div>
												<ul className="space-y-2 text-sm text-muted-foreground">
													{method.steps.map((step) => (
														<li key={step} className="flex gap-2">
															<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
															<span>{step}</span>
														</li>
													))}
												</ul>
											</div>
										))}
									</div>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4 text-sm text-muted-foreground space-y-2">
										<p>
											<strong className="text-foreground">Pro tips:</strong>{" "}
											You can edit the team name, picture, or members later (if
											you are an admin).
										</p>
										<p>
											Every team must have at least one Topic. You will be
											prompted to add one after creation.
										</p>
										<p>Inviting people outside your company is supported.</p>
									</div>
								</div>
							</motion.section>

							{/* Create a Topic */}
							<motion.section
								id="howToCreateTopic"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<ClipboardList className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										How to create a topic
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Topics keep your team focused. Follow these quick steps.
									</p>

									<ol className="space-y-3">
										{createTopicSteps.map((step, index) => (
											<li
												key={step}
												className="flex items-start gap-3 text-sm text-muted-foreground"
											>
												<span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
													{index + 1}
												</span>
												<span>{step}</span>
											</li>
										))}
									</ol>

									<div className="rounded-xl bg-primary/5 border border-primary/40 p-4 text-sm text-muted-foreground">
										<strong className="text-foreground">Pro tip:</strong> Use
										separate topics for weekly planning, feedback reviews,
										task-specific conversations, or file sharing for a given
										project.
									</div>

									<p className="text-sm text-muted-foreground">
										Create a new topic to start organized discussions right
										away. Files and context stay attached to that topic across
										devices.
									</p>
								</div>
							</motion.section>

							{/* Add or Remove members */}
							<motion.section
								id="howToRemoveMember"
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
										How to add or remove team members
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Only Team Admins can add or remove members. If you created
										the team, you are an admin by default.
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
											<strong className="text-foreground">Admin rights:</strong>{" "}
											Only admins can manage members. Regular members will not
											see these options.
										</p>
									</div>
								</div>
							</motion.section>

							{/* Admin Access */}
							<motion.section
								id="howToAssignRemoveAdmin"
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
										Assigning or removing admin access
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Need an extra hand? Promote someone to co-admin or remove
										access when things change. Only Team Admins can do this.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<div className="flex items-center gap-2">
												<Crown className="h-5 w-5 text-primary" />
												<h3 className="font-semibold text-foreground">
													Make someone a Team Admin
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
												<UserCog className="h-5 w-5 text-primary" />
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
											{adminRights.map((item) => (
												<li key={item} className="flex gap-2">
													<Info className="h-4 w-4 text-primary mt-0.5" />
													<span>{item}</span>
												</li>
											))}
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
		</div>
	);
}
