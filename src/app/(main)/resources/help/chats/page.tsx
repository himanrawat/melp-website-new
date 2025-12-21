"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { HelpSidebar } from "../HelpSidebar";
import { sidebarCategories } from "../sidebarData";
import {
	ArrowRight,
	BookText,
	Brain,
	CheckCircle2,
	ChevronRight,
	Globe2,
	Mail,
	MessageCircle,
	MessageSquare,
	MessagesSquare,
	Quote,
	Search,
	Sparkles,
	SpellCheck,
} from "lucide-react";

const pageSections = [
	{ id: "melpai", label: "Melp AI", icon: Brain },
	{ id: "chatTranslation", label: "Translation", icon: Globe2 },
	{ id: "post", label: "Write & Share", icon: BookText },
	{ id: "chatSearch", label: "Smart Search", icon: Search },
	{ id: "quickmessage", label: "Quick Message", icon: MessagesSquare },
	{ id: "emailYourChat", label: "Email Your Chat", icon: Mail },
];

const aiUseCases = [
	{
		title: "Compose high-quality paragraphs",
		description:
			"Enter an idea and let Melp AI create a clear, concise draft you can drop into chat.",
		steps: [
			"Type your idea or a few keywords and click Done.",
			"Melp AI generates a polished paragraph.",
			"Click Accept to add it to your chat box.",
		],
		icon: BookText,
	},
	{
		title: "Respond to previous chats",
		description:
			"Turn on Chat Sense to analyze recent messages and suggest a contextual reply.",
		steps: [
			"Type a few keywords, enable Chat Sense, and click Done.",
			"Review the suggested reply based on recent chat history.",
			"Click Accept to insert it.",
		],
		icon: MessageCircle,
	},
	{
		title: "Customize tone and language",
		description:
			"Switch tone (Professional, Neutral, Informative, Simple, Polite) or translate the draft.",
		steps: [
			"After generating a draft, open Tone & Language Options.",
			"Pick a tone or choose Translate to change languages.",
			"Click Accept to apply.",
		],
		icon: Sparkles,
	},
	{
		title: "Spell and grammar checks",
		description:
			"Keep messages polished with one click after you accept a draft.",
		steps: [
			"Click the Melp AI icon.",
			"Select Spell & Grammar Check.",
			"Corrections apply directly in your chat box.",
		],
		icon: SpellCheck,
	},
];

const translationLanguages = [
	"English",
	"Spanish",
	"Portuguese",
	"French",
	"German",
	"Russian",
	"Indonesian",
	"Hindi",
	"Chinese",
	"Japanese",
	"Korean",
	"Malay",
];

const searchSteps = [
	"Click the Search icon in the top right of any chat, group, or topic.",
	"Use filters for Messages, Files, or Links.",
	"Pick a sender to narrow results to one teammate.",
	"Set a date range such as last week or last month.",
	"Click any result to jump directly to that message.",
];

const quickMessageSteps = [
	"Open the Contacts tab and pick the people you want.",
	"Click Quick Message.",
	"Type your message and send. Each person receives it as a private chat.",
];

const emailChatSteps = [
	"Tap the More icon in the top-right of the chat and choose Email Your Chat.",
	"Select a date range, optionally add a recipient and note.",
	"Click Send to receive a clean PDF copy in your inbox.",
];

export default function ChatsPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
			<div className="flex">
				<HelpSidebar categories={sidebarCategories} defaultExpanded="Chats" />

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
								<li className="font-medium text-foreground">Chats</li>
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
									<MessageSquare className="h-3 w-3" />
									Chats
								</div>

								<div>
									<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
										Chats on Melp: stay connected, stay organized
									</h1>
									<p className="mt-3 max-w-2xl text-lg text-muted-foreground">
										Melp chat keeps you productive with one-on-one, team, and
										group conversations plus AI tools to draft, translate, and
										share without switching apps.
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
							{/* Melp AI */}
							<motion.section
								id="melpai"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Brain className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Melp AI: Draft for Me
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Melp AI helps you write faster and reply with context. Access
										it from any chat by clicking the Melp AI icon in the text
										editor.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										{aiUseCases.map((item) => (
											<div
												key={item.title}
												className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3"
											>
												<div className="flex items-start gap-3">
													<div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
														<item.icon className="h-6 w-6" />
													</div>
													<div>
														<h3 className="font-semibold text-foreground">
															{item.title}
														</h3>
														<p className="text-sm text-muted-foreground">
															{item.description}
														</p>
													</div>
												</div>
												<ul className="space-y-2 text-sm text-muted-foreground">
													{item.steps.map((step) => (
														<li key={step} className="flex gap-2">
															<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
															<span>{step}</span>
														</li>
													))}
												</ul>
											</div>
										))}
									</div>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4 text-sm text-muted-foreground">
										Why use Draft for Me? Boost productivity, improve clarity,
										and adapt tone or language without leaving the chat.
									</div>
								</div>
							</motion.section>

							{/* Translation */}
							<motion.section
								id="chatTranslation"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Globe2 className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Real-time translation on Melp
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Break language barriers across one-on-one chats, groups,
										team topics, and in-call chats. Auto-detection offers
										translation when messages arrive in another language.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<h3 className="font-semibold text-foreground">
												Supported languages
											</h3>
											<p className="text-sm text-muted-foreground">
												Real-time translation for major languages. More are
												regularly added.
											</p>
											<div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
												{translationLanguages.map((lang) => (
													<span
														key={lang}
														className="rounded-full border border-border px-2 py-1"
													>
														{lang}
													</span>
												))}
											</div>
										</div>
										<div className="rounded-xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<h3 className="font-semibold text-foreground">
												Enable the Melp Translator
											</h3>
											<ul className="space-y-2 text-sm text-muted-foreground">
												<li className="flex gap-2">
													<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
													<span>
														Open any chat and click Translate. Toggle the
														translator on and choose your preferred language.
													</span>
												</li>
												<li className="flex gap-2">
													<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
													<span>
														Click Done. Future messages in other languages
														auto-translate in real time.
													</span>
												</li>
											</ul>
											<p className="text-sm text-muted-foreground">
												View translated text or the original anytime. Melp
												remembers your preference.
											</p>
										</div>
									</div>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4 text-sm text-muted-foreground">
										Smooth multilingual communication, instant translation, and
										full chat integration keep global teams productive.
									</div>
								</div>
							</motion.section>

							{/* Write & Share */}
							<motion.section
								id="post"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<BookText className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Write & Share
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Turn long messages into clean, doc-style posts your team can
										read and act on without leaving Melp.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<h3 className="font-semibold text-foreground">
												Auto-convert long text
											</h3>
											<ul className="space-y-2 text-sm text-muted-foreground">
												<li className="flex gap-2">
													<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
													<span>
														Paste 2000+ characters into chat; a popup offers
														Write & Share mode.
													</span>
												</li>
												<li className="flex gap-2">
													<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
													<span>
														Edit in the rich editor with title, bold, bullets,
														and headings.
													</span>
												</li>
												<li className="flex gap-2">
													<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
													<span>Click Share to post it neatly in chat.</span>
												</li>
											</ul>
										</div>
										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<h3 className="font-semibold text-foreground">
												Manual option
											</h3>
											<ul className="space-y-2 text-sm text-muted-foreground">
												<li className="flex gap-2">
													<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
													<span>
														Click the Write & Share icon to start a post.
													</span>
												</li>
												<li className="flex gap-2">
													<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
													<span>Select output as PDF, DOCX, or TXT.</span>
												</li>
												<li className="flex gap-2">
													<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
													<span>
														Format with bold, italics, headings, or bullet
														points.
													</span>
												</li>
											</ul>
											<p className="text-sm text-muted-foreground">
												Pro tips: use headings, add links, combine with
												translation for global updates, and save posts as
												PDF/DOCX when needed.
											</p>
										</div>
									</div>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4 text-sm text-muted-foreground">
										Write & Share makes meeting notes, project updates, and
										proposals easy to read, share, and find without external
										tools.
									</div>
								</div>
							</motion.section>

							{/* Smart Search */}
							<motion.section
								id="chatSearch"
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
										Smart Chat Search
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Find messages, files, and links in seconds across chats,
										groups, or topics.
									</p>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{searchSteps.map((step) => (
											<li key={step} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{step}</span>
											</li>
										))}
									</ul>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4 text-sm text-muted-foreground">
										Instant results and filters mean no more scrolling through
										threads to find what you need.
									</div>
								</div>
							</motion.section>

							{/* Quick Message */}
							<motion.section
								id="quickmessage"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<MessagesSquare className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Quick Message
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Send one message to multiple people without a noisy group
										thread. Each recipient sees it as a private chat.
									</p>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{quickMessageSteps.map((step) => (
											<li key={step} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{step}</span>
											</li>
										))}
									</ul>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4 text-sm text-muted-foreground">
										Perfect for announcements, reminders, or updates without
										group replies.
									</div>
								</div>
							</motion.section>

							{/* Email Your Chat */}
							<motion.section
								id="emailYourChat"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Mail className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Email your chat
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Export chat history as a clean PDF and send it to your
										inbox for archiving, sharing, or onboarding.
									</p>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{emailChatSteps.map((step) => (
											<li key={step} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{step}</span>
											</li>
										))}
									</ul>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4 text-sm text-muted-foreground space-y-1">
										<p>
											Great for project wrap-ups, client handovers, and
											onboarding new teammates.
										</p>
										<p>
											Works across one-on-one chats, groups, and team topics
											without manual copy and paste.
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
