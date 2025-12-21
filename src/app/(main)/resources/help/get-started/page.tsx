"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { HelpSidebar } from "../HelpSidebar";
import { sidebarCategories } from "../sidebarData";
import {
	ChevronRight,
	Sparkles,
	Users,
	Video,
	MessageSquare,
	FolderOpen,
	Calendar,
	Brain,
	Globe,
	Shield,
	Zap,
	ArrowRight,
	CheckCircle2,
	Mail,
	Upload,
	Share2,
	Key,
	Building2,
	User,
	Lightbulb,
	Lock,
} from "lucide-react";

const pageSections = [
	{ id: "welcome", label: "Welcome to MelpApp", icon: Sparkles },
	{ id: "features", label: "Features", icon: Zap },
	{ id: "create-account", label: "Create Account", icon: User },
	{ id: "invite-others", label: "Invite Others", icon: Users },
	{ id: "forgot-password", label: "Forgot Password", icon: Key },
];

const featureCards = [
	{
		icon: Video,
		title: "Voice & Video Calls",
		desc: "Crystal-clear HD calls for 1-on-1s or team conferences",
	},
	{
		icon: MessageSquare,
		title: "Real-Time Messaging",
		desc: "Instant, organized chat with smart notifications",
	},
	{
		icon: FolderOpen,
		title: "Melp Drive",
		desc: "Secure file storage, sharing, and collaboration",
	},
	{
		icon: Calendar,
		title: "Book Appointments",
		desc: "Seamless scheduling with calendar integrations",
	},
	{
		icon: Brain,
		title: "AI Summarization",
		desc: "Auto-generated meeting summaries and action items",
	},
	{
		icon: Globe,
		title: "Live Translation",
		desc: "Real-time chat and caption translation",
	},
];

export default function GetStartedPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
			<div className="flex">
				{/* Shared Sidebar */}
				<HelpSidebar
					categories={sidebarCategories}
					defaultExpanded="Getting started"
				/>

				{/* Main Content */}
				<main className="flex-1">
					<div className="mx-auto max-w-4xl px-4 py-10 sm:px-8 lg:px-12 lg:py-12">
						{/* Breadcrumb */}
						<nav aria-label="Breadcrumb" className="mb-8">
							<ol className="flex items-center gap-2 text-sm">
								<li>
									<Link
										href="/resources/help"
										className="text-muted-foreground hover:text-primary transition-colors"
									>
										Help Center
									</Link>
								</li>
								<ChevronRight className="h-4 w-4 text-muted-foreground/50" />
								<li className="font-medium text-foreground">
									Get Started with MelpApp
								</li>
							</ol>
						</nav>

						{/* Hero Section */}
						<motion.section
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="relative mb-12 overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-primary/5 via-primary/10 to-[#ee4136]/5 p-8 sm:p-10"
						>
							<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
							<div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#ee4136]/10 blur-3xl" />

							<div className="relative">
								<div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
									<Sparkles className="h-3 w-3" />
									Getting Started
								</div>

								<h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
									Get Started with{" "}
									<span className="bg-gradient-to-r from-primary to-[#ee4136] bg-clip-text text-transparent">
										MelpApp
									</span>
								</h1>

								<p className="mt-4 max-w-2xl text-lg text-muted-foreground">
									Everything you need to understand MelpApp, set up your
									account, and bring your team on board for seamless
									collaboration.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
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

						{/* Content Sections */}
						<div className="space-y-16">
							{/* Welcome Section */}
							<motion.section
								id="welcome"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="flex items-center gap-3 mb-6">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Sparkles className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Welcome to MelpApp
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm">
									<p className="text-lg text-muted-foreground leading-relaxed">
										Welcome to{" "}
										<strong className="text-foreground">MelpApp</strong>, the
										all-in-one communication and AI digital workspace built to
										supercharge your workflow. Whether you're managing a
										fast-paced team, hosting meetings across time zones, or
										staying organized—MelpApp makes it effortless.
									</p>

									<div className="mt-8 grid gap-4 sm:grid-cols-3">
										{[
											{
												icon: Zap,
												title: "Stay Connected",
												desc: "Real-time chat, voice, and video across all devices",
											},
											{
												icon: Brain,
												title: "AI-Powered",
												desc: "Smart notifications and built-in AI support",
											},
											{
												icon: Shield,
												title: "Secure",
												desc: "Enterprise-grade security for your data",
											},
										].map((item) => (
											<div
												key={item.title}
												className="rounded-xl border border-border/40 bg-muted/30 p-4"
											>
												<item.icon className="h-6 w-6 text-primary mb-3" />
												<h4 className="font-semibold text-foreground">
													{item.title}
												</h4>
												<p className="mt-1 text-sm text-muted-foreground">
													{item.desc}
												</p>
											</div>
										))}
									</div>

									<div className="mt-8 rounded-xl bg-gradient-to-r from-primary/10 to-[#ee4136]/10 p-6">
										<h4 className="font-semibold text-foreground mb-3">
											Why Teams Choose MelpApp
										</h4>
										<ul className="space-y-2">
											{[
												"Eliminate app-switching chaos with unified workspace",
												"Supercharge team collaboration with AI assistance",
												"Organize everything—without the noise",
											].map((item) => (
												<li
													key={item}
													className="flex items-start gap-2 text-muted-foreground"
												>
													<CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</motion.section>

							{/* Features Section */}
							<motion.section
								id="features"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="flex items-center gap-3 mb-6">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Zap className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Powerful Features
									</h2>
								</div>

								<p className="text-muted-foreground mb-8 max-w-2xl">
									MelpApp isn't just another communication tool—it's your smart
									workspace for seamless digital teamwork with everything you
									need in one streamlined platform.
								</p>

								<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
									{featureCards.map((feature) => (
										<div
											key={feature.title}
											className="group rounded-2xl border border-border/50 bg-card p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
										>
											<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors group-hover:bg-zinc-700 group-hover:text-white">
												<feature.icon className="h-6 w-6" />
											</div>
											<h4 className="mt-4 font-semibold text-foreground">
												{feature.title}
											</h4>
											<p className="mt-2 text-sm text-muted-foreground">
												{feature.desc}
											</p>
										</div>
									))}
								</div>

								<div className="mt-8 rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm">
									<h3 className="text-lg font-semibold text-foreground mb-4">
										All Features Include
									</h3>
									<div className="grid gap-3 sm:grid-cols-2">
										{[
											"Personal Room—your always-on virtual meeting space",
											"Breakout Rooms for focused discussions",
											"Draft for Me—AI writing assistant",
											"MelpAssistant—24/7 smart support",
											"Smart Chat Search—find anything instantly",
											"OneDrive & Calendar integrations",
											"Teams & Groups management",
											"Network expansion tools",
										].map((item) => (
											<div key={item} className="flex items-start gap-2">
												<CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
												<span className="text-sm text-muted-foreground">
													{item}
												</span>
											</div>
										))}
									</div>
								</div>
							</motion.section>

							{/* Create Account Section */}
							<motion.section
								id="create-account"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-32"
							>
								<div className="flex items-center gap-3 mb-6">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<User className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Create Your Account
									</h2>
								</div>

								<div className="space-y-6">
									{/* Account Types */}
									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
											<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
												<Building2 className="h-6 w-6" />
											</div>
											<h4 className="mt-4 font-semibold text-foreground">
												Business User
											</h4>
											<p className="mt-2 text-sm text-muted-foreground">
												Sign up with your company domain (you@company.com) to
												automatically connect to your organization's workspace
												or create a new one for your team.
											</p>
										</div>
										<div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
											<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
												<User className="h-6 w-6" />
											</div>
											<h4 className="mt-4 font-semibold text-foreground">
												Individual User
											</h4>
											<p className="mt-2 text-sm text-muted-foreground">
												Sign up with a personal email (Gmail, Yahoo) to build
												your professional network and connect with people who
												share similar skills.
											</p>
										</div>
									</div>

									{/* Sign Up Steps */}
									<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm">
										<h3 className="text-lg font-semibold text-foreground mb-6">
											How to Sign Up
										</h3>
										<div className="space-y-4">
											{[
												{
													step: 1,
													text: "Go to www.melp.us and click Try For Free",
												},
												{
													step: 2,
													text: "Enter your Full Name and Email Address",
												},
												{
													step: 3,
													text: "Set a strong password for your account",
												},
												{ step: 4, text: "Click Create Account" },
												{
													step: 5,
													text: "Check your inbox and verify your email",
												},
											].map((item) => (
												<div key={item.step} className="flex items-start gap-4">
													<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
														{item.step}
													</div>
													<p className="text-muted-foreground pt-1">
														{item.text}
													</p>
												</div>
											))}
										</div>

										<div className="mt-6 rounded-xl bg-muted/50 p-4">
											<p className="text-sm text-muted-foreground">
												<strong className="text-foreground">
													Quick Sign Up:
												</strong>{" "}
												You can also sign up instantly with Google or Microsoft
												by clicking "Continue with Google" or "Continue with
												Microsoft" on the sign-up page.
											</p>
										</div>
									</div>
								</div>
							</motion.section>

							{/* Invite Others Section */}
							<motion.section
								id="invite-others"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="flex items-center gap-3 mb-6">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Users className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Invite Others
									</h2>
								</div>

								<p className="text-muted-foreground mb-8">
									MelpApp makes it simple to connect with anyone—colleagues,
									freelancers, clients, or community members.
								</p>

								<div className="grid gap-4 sm:grid-cols-2">
									{[
										{
											icon: Mail,
											title: "Email Invite",
											desc: "Send invites from Dashboard or Network tab",
											steps: [
												"Go to Dashboard → Invite Contacts",
												"Enter email address",
												"Click Invite",
											],
										},
										{
											icon: Upload,
											title: "Bulk CSV Upload",
											desc: "Invite entire lists at once",
											steps: [
												"Go to Network → Bulk Upload",
												"Download sample CSV template",
												"Upload filled file",
											],
										},
										{
											icon: Globe,
											title: "Import Contacts",
											desc: "Pull contacts from Google or Microsoft",
											steps: [
												"Go to Network → Import Contacts",
												"Select Google or Microsoft",
												"Authorize and select contacts",
											],
										},
										{
											icon: Share2,
											title: "Share on Social",
											desc: "Spread the word on social media",
											steps: [
												"Go to Network → Share Melp",
												"Choose platform",
												"Post your invite link",
											],
										},
									].map((method) => (
										<div
											key={method.title}
											className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm"
										>
											<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
												<method.icon className="h-6 w-6" />
											</div>
											<h4 className="mt-4 font-semibold text-foreground">
												{method.title}
											</h4>
											<p className="mt-1 text-sm text-muted-foreground">
												{method.desc}
											</p>
											<ul className="mt-4 space-y-2">
												{method.steps.map((step, i) => (
													<li
														key={i}
														className="flex items-center gap-2 text-sm text-muted-foreground"
													>
														<ArrowRight className="h-4 w-4 text-zinc-500" />
														{step}
													</li>
												))}
											</ul>
										</div>
									))}
								</div>

								<div className="mt-6 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 p-4">
									<p className="text-sm text-muted-foreground">
										<strong className="text-foreground flex items-center gap-2"><Lightbulb className="w-4 h-4" /> Tip:</strong> If
										invitees don't see the email, ask them to check their spam
										folder or visit{" "}
										<a
											href="https://www.melp.us"
											className="text-primary hover:underline"
										>
											melp.us
										</a>{" "}
										directly.
									</p>
								</div>
							</motion.section>

							{/* Forgot Password Section */}
							<motion.section
								id="forgot-password"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="flex items-center gap-3 mb-6">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Key className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Forgot Your Password?
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm">
									<p className="text-muted-foreground mb-6">
										No worries—resetting your Melp password is quick and secure.
										Just follow these steps:
									</p>

									<div className="space-y-4">
										{[
											{
												step: 1,
												text: "Go to the Melp Sign-In page and click Forgot Password?",
											},
											{
												step: 2,
												text: "Enter your registered email address and click Send",
											},
											{
												step: 3,
												text: "Check your inbox for the Password Reset Email",
											},
											{
												step: 4,
												text: "Click the Reset Password link in the email",
											},
											{
												step: 5,
												text: "Enter and confirm your new password, then click Reset Password",
											},
										].map((item) => (
											<div key={item.step} className="flex items-start gap-4">
												<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
													{item.step}
												</div>
												<p className="text-muted-foreground pt-1">
													{item.text}
												</p>
											</div>
										))}
									</div>

									<div className="mt-6 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 p-4">
										<p className="text-sm text-muted-foreground">
											<strong className="text-foreground flex items-center gap-2">
												<Lock className="w-4 h-4" /> Security Tip:
											</strong>{" "}
											Make sure your new password is strong and unique—use a mix
											of letters, numbers, and symbols for added security.
										</p>
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
