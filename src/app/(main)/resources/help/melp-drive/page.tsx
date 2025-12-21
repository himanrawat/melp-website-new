"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { HelpSidebar } from "../HelpSidebar";
import { sidebarCategories } from "../sidebarData";
import {
	ArrowRight,
	BookOpen,
	CheckCircle2,
	ChevronRight,
	Cloud,
	File,
	FileSpreadsheet,
	FileText,
	FileType,
	FolderOpen,
	LayoutGrid,
	Link2,
	ListChecks,
	Search,
	Share,
	Shield,
	Sparkles,
	Users,
} from "lucide-react";

const pageSections = [
	{ id: "keyFunction", label: "Key Functionalities", icon: Sparkles },
	{ id: "uploadFile", label: "Upload or Create Files & Folders", icon: FileType },
	{ id: "sharing", label: "Collaboration & Smart Sharing", icon: Share },
	{ id: "melpsuite", label: "Melp Suite", icon: BookOpen },
	{ id: "teamOrganize", label: "Organize Team Folders", icon: FolderOpen },
	{ id: "versionHistory", label: "Search, Filter & Version History", icon: Search },
];

const driveHighlights = [
	"Store everything safely with enterprise-grade security.",
	"Stay organized with documents, spreadsheets, and presentations in one place.",
	"Work together in real time without version confusion.",
	"Create and edit docs, sheets, and slides without switching apps.",
];

const accessDriveSteps = [
	"Open Melp Drive from Dashboard or the left sidebar.",
	"Your Drive dashboard shows My Drive, Recent, and quick actions to create or upload.",
];

const uploadCreateOptions = [
	"Upload a file: document, image, video, audio, or ZIP.",
	"Start a new document in the editor.",
	"Build a spreadsheet with formulas and charts.",
	"Design a presentation with templates and tools.",
	"Create a new folder to keep files grouped.",
];

const sharingPermissions = [
	"Viewer: can only view.",
	"Editor: can view, comment, and edit.",
];

const collaborationFeatures = [
	"Real-time collaboration with multiple users in the same file.",
	"Automatic cloud saving so work is always safe.",
	"Sharing and access controls to decide who can view, comment, or edit.",
];

const shareSteps = [
	"Click More Options on a file or folder.",
	"Select Share.",
	"Choose people, groups, or topics, set View or Edit permissions, and click Send.",
];

const suiteDocsFeatures = [
	"Format text with headings, bold, italics, underline, and bullets.",
	"Insert images, hyperlinks, tables, and page numbers.",
	"Add comments, tag collaborators, and suggest edits.",
];

const suiteSheetsFeatures = [
	"Use functions like SUM, AVERAGE, VLOOKUP, and more.",
	"Apply data validation, conditional formatting, and create charts.",
	"Filter and sort columns and work with multiple sheets.",
];

const suitePptFeatures = [
	"Start from templates and customizable layouts.",
	"Insert media, animations, and transitions.",
	"Use Presenter Mode with slide timer and notes; export to PDF or share live.",
];

const organizeSharedSteps = [
	"Go to Melp Drive and click Shared Files in the sidebar.",
	"Use Shared with Me to see items others shared, and Shared by Me for items you shared.",
	"Sort shared items by Group or Topic.",
	"Use More Options to preview, download, or view details.",
	"Select multiple files or folders for bulk actions like download or removing permissions.",
];

const searchFilters = [
	"Keyword search across Melp Drive.",
	"Filter by file type (Document, Spreadsheet, Presentation, etc.).",
	"Filter by modified date, owner, or shared status.",
];

const versionControl = [
	"Access previous versions anytime.",
	"Restore earlier versions if needed.",
	"Track user changes and activity logs for collaboration visibility.",
];

export default function MelpDrivePage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
			<div className="flex">
				<HelpSidebar categories={sidebarCategories} defaultExpanded="Melp Drive" />

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
								<li className="font-medium text-foreground">Melp Drive</li>
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
									<Cloud className="h-3 w-3" />
									Melp Drive
								</div>

								<div>
									<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
										Melp Drive: your all-in-one smart storage hub
									</h1>
									<p className="mt-3 max-w-2xl text-lg text-muted-foreground">
										Secure, cloud-based storage integrated with Melp. Keep work
										organized, accessible, and collaborative without switching
										apps.
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
							{/* Key Functionalities */}
							<motion.section
								id="keyFunction"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Sparkles className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Key functionalities of Melp Drive
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Say goodbye to scattered files. Melp Drive is your secure
										storage integrated with MelpApp, ready for any project,
										client proposal, or workshop.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<h3 className="font-semibold text-foreground">
												Why you will love it
											</h3>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{driveHighlights.map((item) => (
													<li key={item} className="flex gap-2">
														<CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>
										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<h3 className="font-semibold text-foreground">
												Accessing Melp Drive
											</h3>
											<p className="text-sm text-muted-foreground">
												Access it on web in a few clicks.
											</p>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{accessDriveSteps.map((step) => (
													<li key={step} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{step}</span>
													</li>
												))}
											</ul>
											<p className="text-sm text-muted-foreground">
												One platform, one workspace, infinite possibilities.
											</p>
										</div>
									</div>
								</div>
							</motion.section>

							{/* Upload or Create */}
							<motion.section
								id="uploadFile"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<FileType className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										How to upload or create files and folders
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Organize work effortlessly. Create or upload anything from
										one place.
									</p>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{uploadCreateOptions.map((item) => (
											<li key={item} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{item}</span>
											</li>
										))}
									</ul>
									<p className="text-sm text-muted-foreground">
										Files appear instantly and open in their editor so you can
										start working right away. Use folders to group related work
										for smoother collaboration.
									</p>
								</div>
							</motion.section>

							{/* Sharing */}
							<motion.section
								id="sharing"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Share className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Seamless collaboration and smart sharing
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Share securely with individuals, teams, or groups. You stay
										in control of access.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<h3 className="font-semibold text-foreground">
												Permission controls
											</h3>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{sharingPermissions.map((item) => (
													<li key={item} className="flex gap-2">
														<CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
														<span>{item}</span>
													</li>
												))}
											</ul>
											<h4 className="font-semibold text-foreground">
												Real-time collaboration
											</h4>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{collaborationFeatures.map((item) => (
													<li key={item} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>
										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<h3 className="font-semibold text-foreground">
												Sharing options
											</h3>
											<p className="text-sm text-muted-foreground">
												Share via Melp contacts, topics, or groups with email
												alerts.
											</p>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{shareSteps.map((item) => (
													<li key={item} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{item}</span>
													</li>
												))}
											</ul>
											<p className="text-sm text-muted-foreground">
												Update or remove access anytime. Use Editor access only
												when collaboration is needed; Viewer mode for sensitive
												files.
											</p>
										</div>
									</div>
								</div>
							</motion.section>

							{/* Melp Suite */}
							<motion.section
								id="melpsuite"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<BookOpen className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">Melp Suite</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Create, edit, and collaborate on documents, spreadsheets,
										and presentations in your browser. No extra installs
										needed.
									</p>

									<div className="grid gap-4 sm:grid-cols-3">
										<div className="rounded-xl border border-border/50 bg-muted/20 p-4 space-y-2">
											<div className="flex items-center gap-2">
												<FileText className="h-5 w-5 text-primary" />
												<h3 className="font-semibold text-foreground">
													Documents
												</h3>
											</div>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{suiteDocsFeatures.map((item) => (
													<li key={item} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>

										<div className="rounded-xl border border-border/50 bg-muted/20 p-4 space-y-2">
											<div className="flex items-center gap-2">
												<FileSpreadsheet className="h-5 w-5 text-primary" />
												<h3 className="font-semibold text-foreground">
													Spreadsheets
												</h3>
											</div>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{suiteSheetsFeatures.map((item) => (
													<li key={item} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>

										<div className="rounded-xl border border-border/50 bg-muted/20 p-4 space-y-2">
											<div className="flex items-center gap-2">
												<File className="h-5 w-5 text-primary" />
												<h3 className="font-semibold text-foreground">
													Presentations
												</h3>
											</div>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{suitePptFeatures.map((item) => (
													<li key={item} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>
									</div>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4 text-sm text-muted-foreground">
										How to create files: go to Melp Drive, click New, and choose
										Document, Spreadsheet, or Presentation. Files save
										automatically. Click the title to rename and collaborate in
										real time.
									</div>

									<div className="rounded-xl bg-muted/20 border border-border/50 p-4 text-sm text-muted-foreground">
										<h3 className="font-semibold text-foreground mb-2">
											How to collaborate on documents
										</h3>
										<ul className="space-y-2">
											<li className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>
													From Melp Drive: open More options on a file, click
													Share, set permissions, and send invites.
												</span>
											</li>
											<li className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>
													Inside a document: click the info icon (i) at top
													right, select Manage Access, choose people or groups,
													set View/Edit, and send.
												</span>
											</li>
										</ul>
										<p className="text-sm text-muted-foreground mt-2">
											Editors can change files in real time. Update or revoke
											access anytime.
										</p>
									</div>
								</div>
							</motion.section>

							{/* Organize Team Folders */}
							<motion.section
								id="teamOrganize"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<FolderOpen className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										How to organize team folders
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Keep shared files easy to find by grouping them by team or
										topic.
									</p>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{organizeSharedSteps.map((step) => (
											<li key={step} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{step}</span>
											</li>
										))}
									</ul>
									<p className="text-sm text-muted-foreground">
										Pro tip: regularly review shared folders and sort by Group
										or Topic to keep things clutter-free.
									</p>
								</div>
							</motion.section>

							{/* Search, Filter, Version History */}
							<motion.section
								id="versionHistory"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Search className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Search, filter, and version history
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Find and manage files quickly with built-in search and
										version control.
									</p>

									<h3 className="font-semibold text-foreground">Search and filter</h3>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{searchFilters.map((item) => (
											<li key={item} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{item}</span>
											</li>
										))}
									</ul>

									<h3 className="font-semibold text-foreground">Version control</h3>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{versionControl.map((item) => (
											<li key={item} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{item}</span>
											</li>
										))}
									</ul>

									<p className="text-sm text-muted-foreground">
										Everything auto-saves and syncs. Sharing and collaboration
										are built in. If no files are shared you will see: "No shared
										files or folders."
									</p>
									<p className="text-sm text-muted-foreground">
										Pro tip: use filters and version history together to locate
										older drafts or track changes across projects.
									</p>
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
