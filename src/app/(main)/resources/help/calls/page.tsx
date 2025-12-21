"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { HelpSidebar } from "../HelpSidebar";
import { sidebarCategories } from "../sidebarData";
import {
	ArrowRight,
	Brain,
	Cast,
	CheckCircle2,
	ChevronRight,
	FileText,
	Image,
	Layers,
	Link2,
	MessageSquare,
	Monitor,
	PenSquare,
	PhoneCall,
	PhoneIncoming,
	PhoneOff,
	Sparkles,
	Users,
	Video,
	Volume2,
} from "lucide-react";

const pageSections = [
	{ id: "callSomeoneInNetwork", label: "Voice & Video Calling", icon: PhoneCall },
	{ id: "howToRecieveAudioVideo", label: "Receive Calls", icon: PhoneIncoming },
	{ id: "callConferences", label: "Team & Group Calls", icon: Users },
	{ id: "personalRoom", label: "Personal Room", icon: Link2 },
	{ id: "advancedTool", label: "Advanced In-Call Tools", icon: Sparkles },
];

const callMethods = [
	{
		title: "How to Start a Voice Call",
		icon: PhoneCall,
		description: "Prefer voice-only? Here is how to ring someone immediately.",
		steps: [
			"Open MelpApp and go to the contact you want to call.",
			"Tap the Voice Call icon in the top-right corner.",
			"Wait for them to answer and you are connected.",
		],
		note: "Sit tight - your contact gets the ring and can join as soon as they answer.",
	},
	{
		title: "How to Start a Video Call",
		icon: Video,
		description: "Want a face-to-face conversation? Go video instead.",
		steps: [
			"Open Melp and go to the conversation (person or group).",
			"Hit the Video Call icon in the top-right corner.",
			"As soon as they accept, cameras turn on and you are live.",
		],
		note: "Camera shy? You can always turn video off after joining.",
	},
];

const incomingOptions = [
	{
		title: "Answer",
		icon: PhoneIncoming,
		description: "Ready to chat? Click to jump into the call right away.",
	},
	{
		title: "Decline",
		icon: PhoneOff,
		description: "Not the right time? Decline to dismiss the call.",
	},
	{
		title: "Message",
		icon: MessageSquare,
		description: "Cannot talk? Send a quick response and follow up later.",
	},
];

const conferenceFlows = [
	{
		title: "Start a Team Conference",
		icon: Users,
		steps: [
			"Open the Team you want to meet with.",
			"Click Voice Call for audio or Video Call for a full meeting.",
		],
		note: "Team members receive a call notification and can join instantly.",
	},
	{
		title: "Start a Group Conference",
		icon: Users,
		steps: [
			"Navigate to the Group that needs a call.",
			"Click Voice Call for audio or Video Call for a full meeting.",
		],
		note: "All group members see the call notification and can hop in.",
	},
	{
		title: "Missed the Call? Join In",
		icon: Cast,
		steps: [
			"Open the Active Call section from any device.",
			"Click Join to enter the ongoing call across web, iOS, or Android.",
		],
		note: "Switch devices anytime and stay in sync with your team.",
	},
];

const personalRoomHighlights = [
	{
		title: "Easy Access",
		description:
			"Share your permanent Personal Room link - no re-invites needed. Trusted teammates or clients can join anytime.",
	},
	{
		title: "Instant Connection",
		description:
			"No account needed. External users can join directly using your link, perfect for quick check-ins.",
	},
	{
		title: "Convenience",
		description:
			"Start a meeting on the fly or use the same link for recurring catch-ups with trusted contacts.",
	},
];

const personalRoomSteps = [
	{
		title: "Share Your Personal Room Link",
		steps: [
			"Click your profile icon > My Meeting Room to copy the link instantly.",
			"Paste and share it anywhere - email, message, or any platform.",
		],
	},
	{
		title: "Access Your Personal Room",
		steps: [
			"From the Dashboard, click Go to Room to enter your private space instantly.",
		],
	},
	{
		title: "How Invitees Join",
		steps: [
			"Open the shared link in any browser.",
			"Enter Name and Email, then click Ask to join.",
			"Wait for the host to accept the request.",
		],
	},
	{
		title: "Host: Manage Join Requests",
		steps: [
			"When a request appears, click Go to Room to jump in.",
			"Click Admit to approve and start the call immediately.",
		],
	},
];

const advancedTools = [
	{
		title: "AI Summarization",
		icon: Brain,
		description: "Automatic recaps keep everyone aligned after the call ends.",
		steps: [
			"Moderator clicks Start Recording from the More menu.",
			"Toggle \"Receive detailed meeting summary via email\" and optionally save locally.",
			"A summary is emailed to the moderator when the meeting ends.",
		],
		note: "Only moderators or designated admins can start AI Summarization.",
	},
	{
		title: "Breakout Rooms",
		icon: Layers,
		description:
			"Split a big call into focused rooms and move people between them.",
		steps: [
			"Moderators create Breakout Rooms from the More menu.",
			"Participants can jump between rooms as needed.",
			"Moderators can move users from one room to another anytime.",
		],
	},
	{
		title: "Live Captions",
		icon: MessageSquare,
		description:
			"See spoken words as real-time text, translated to your preferred language.",
		steps: [
			"Turn on Live Captions during the call.",
			"Pick the language you want captions displayed in.",
		],
	},
	{
		title: "Screen Sharing",
		icon: Monitor,
		description:
			"Share your entire screen, a specific window, or a browser tab - ideal for walkthroughs and demos.",
	},
	{
		title: "Whiteboard",
		icon: PenSquare,
		description: "Sketch, brainstorm, and annotate together during the call.",
		steps: [
			"Moderators open the Whiteboard for everyone.",
			"All participants can draw, write, and collaborate in real time.",
			"Download the board anytime to keep your notes.",
		],
		note: "When the moderator closes the Whiteboard, each participant can close it themselves. Late joiners see the latest board until they close it.",
	},
	{
		title: "MelpPad",
		icon: FileText,
		description:
			"A live, collaborative notepad with formatting and drawing tools.",
		steps: [
			"Everyone can type notes or sketch visuals together.",
			"Import documents to work on as a group.",
			"Export or download your notes for future reference.",
		],
	},
	{
		title: "Virtual Background & Face Center",
		icon: Image,
		description:
			"Blur or replace your background and keep your face centered with smart auto-framing.",
		steps: [
			"Open Virtual Background from the More menu during a call.",
			"Choose blur or a replacement image, then enable Face Center if needed.",
		],
		note: "If you already applied a custom virtual background image, Face Center will be disabled to avoid conflicts.",
	},
	{
		title: "Live Streaming",
		icon: Cast,
		description: "Broadcast your call straight to YouTube for webinars or town halls.",
		steps: [
			"From the More menu, click Start Live Stream.",
			"Enter your YouTube channel key and you are live.",
		],
	},
	{
		title: "Share Video",
		icon: Video,
		description: "Play videos in sync for everyone on the call.",
		steps: [
			"Click Share Video from the More menu.",
			"Paste any video link (like YouTube) so everyone can watch together.",
		],
	},
	{
		title: "Share Audio",
		icon: Volume2,
		description: "Stream music, podcasts, or any system sound to all participants.",
		steps: [
			"Select Share Audio from the More menu.",
			"Everyone hears exactly what you share in real time.",
		],
	},
];

export default function CallsHelpPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
			<div className="flex">
				<HelpSidebar categories={sidebarCategories} defaultExpanded="Calls" />

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
									Call someone in your network
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
									<PhoneCall className="h-3 w-3" />
									Voice & Video Calls
								</div>

								<div>
									<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
										Voice & Video Calling on{" "}
										<span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
											Melp
										</span>
									</h1>
									<p className="mt-3 max-w-2xl text-lg text-muted-foreground">
										Stay connected anytime, anywhere with just one click.
										Whether you are checking in with a teammate or jumping into
										a group brainstorm, Melp makes voice and video calling
										effortless.
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
							{/* Voice & Video Calling */}
							<motion.section
								id="callSomeoneInNetwork"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<PhoneCall className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Call someone in your network
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-lg text-muted-foreground leading-relaxed">
										Make voice or video calls in seconds. Start from any chat,
										switch between voice and video, and stay productive without
										leaving Melp.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										{callMethods.map((method) => (
											<div
												key={method.title}
												className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-4"
											>
												<div className="flex items-start gap-3">
													<div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
														<method.icon className="h-6 w-6" />
													</div>
													<div>
														<h3 className="font-semibold text-foreground">
															{method.title}
														</h3>
														<p className="text-sm text-muted-foreground">
															{method.description}
														</p>
													</div>
												</div>
												<ol className="space-y-3">
													{method.steps.map((step, index) => (
														<li
															key={step}
															className="flex items-start gap-3 text-sm text-muted-foreground"
														>
															<span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
																{index + 1}
															</span>
															<span>{step}</span>
														</li>
													))}
												</ol>
												{method.note && (
													<div className="rounded-lg bg-background/80 border border-border/50 p-3 text-sm text-muted-foreground">
														{method.note}
													</div>
												)}
											</div>
										))}
									</div>

									<div className="rounded-xl border border-border/50 bg-primary/5 p-4">
										<h3 className="font-semibold text-foreground">
											Works for one-on-one, groups, or teams
										</h3>
										<p className="text-sm text-muted-foreground mt-1">
											Just tap the Voice or Video Call button in any chat and
											you are in. For the best experience, allow Melp to access
											your microphone and camera in your device settings.
										</p>
									</div>
								</div>
							</motion.section>

							{/* Receive Calls */}
							<motion.section
								id="howToRecieveAudioVideo"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<PhoneIncoming className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Receiving voice or video calls
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										When someone calls you, a real-time pop-up appears across
										all your connected devices - desktop, laptop, tablet, or
										phone. You are always one tap away from joining.
									</p>

									<p className="font-semibold text-foreground">
										Incoming call options: Answer, Decline, or Message
									</p>

									<div className="grid gap-4 sm:grid-cols-3">
										{incomingOptions.map((option) => (
											<div
												key={option.title}
												className="rounded-xl border border-border/50 bg-muted/20 p-4"
											>
												<div className="flex items-center gap-2">
													<option.icon className="h-5 w-5 text-primary" />
													<h4 className="font-semibold text-foreground">
														{option.title}
													</h4>
												</div>
												<p className="mt-2 text-sm text-muted-foreground">
													{option.description}
												</p>
											</div>
										))}
									</div>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4">
										<p className="text-sm text-muted-foreground">
											<strong className="text-foreground">Pro tip:</strong> If
											you are logged in on multiple devices, the call rings on
											all of them. Answer from whichever device is most
											convenient.
										</p>
									</div>
								</div>
							</motion.section>

							{/* Conferences */}
							<motion.section
								id="callConferences"
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
										Team or group conferences
									</h2>
								</div>

								<p className="text-muted-foreground mb-6">
									Bring your team together for quick syncs or deep dives. Host
									voice or video conferences directly inside your Teams or
									Groups - no extra tools required.
								</p>

								<div className="grid gap-4 sm:grid-cols-3">
									{conferenceFlows.map((flow) => (
										<div
											key={flow.title}
											className="rounded-2xl border border-border/50 bg-card p-5 shadow-sm space-y-3"
										>
											<div className="flex items-center gap-2">
												<flow.icon className="h-5 w-5 text-primary" />
												<h3 className="font-semibold text-foreground">
													{flow.title}
												</h3>
											</div>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{flow.steps.map((step) => (
													<li key={step} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{step}</span>
													</li>
												))}
											</ul>
											{flow.note && (
												<div className="rounded-lg bg-muted/40 p-3 text-sm text-muted-foreground">
													{flow.note}
												</div>
											)}
										</div>
									))}
								</div>
							</motion.section>

							{/* Personal Room */}
							<motion.section
								id="personalRoom"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Link2 className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Personal Room - your always-ready meeting space
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Melp's Personal Room is your own virtual conference space - always
										ready, always yours. Share the private link to connect and
										collaborate instantly without scheduling.
									</p>

									<div className="grid gap-4 sm:grid-cols-3">
										{personalRoomHighlights.map((item) => (
											<div
												key={item.title}
												className="rounded-xl border border-border/50 bg-muted/20 p-4"
											>
												<h4 className="font-semibold text-foreground">
													{item.title}
												</h4>
												<p className="mt-2 text-sm text-muted-foreground">
													{item.description}
												</p>
											</div>
										))}
									</div>

									<div className="rounded-xl bg-primary/5 border border-border/60 p-4">
										<p className="text-sm text-muted-foreground">
											<strong className="text-foreground">Note:</strong> The
											link and meeting ID are permanent. Avoid using it for
											back-to-back meetings or with people you do not meet
											regularly for privacy and security.
										</p>
									</div>

									<div className="grid gap-4 sm:grid-cols-2">
										{personalRoomSteps.map((item) => (
											<div
												key={item.title}
												className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3"
											>
												<h4 className="font-semibold text-foreground">
													{item.title}
												</h4>
												<ul className="space-y-2 text-sm text-muted-foreground">
													{item.steps.map((step) => (
														<li key={step} className="flex gap-2">
															<CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
															<span>{step}</span>
														</li>
													))}
												</ul>
											</div>
										))}
									</div>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4">
										<p className="text-sm text-muted-foreground">
											Melp's Personal Room keeps your meetings flexible,
											efficient, and secure - your go-to virtual office anytime.
										</p>
									</div>
								</div>
							</motion.section>

							{/* Advanced Tools */}
							<motion.section
								id="advancedTool"
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
										Advanced in-call tools
									</h2>
								</div>

								<p className="text-muted-foreground mb-6">
									Melp turns every call into a powerful workspace. Access these
									tools from the More menu during a live call.
								</p>

								<div className="grid gap-4 sm:grid-cols-2">
									{advancedTools.map((tool) => (
										<div
											key={tool.title}
											className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm space-y-3"
										>
											<div className="flex items-start gap-3">
												<div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
													<tool.icon className="h-6 w-6" />
												</div>
												<div>
													<h3 className="font-semibold text-foreground">
														{tool.title}
													</h3>
													<p className="text-sm text-muted-foreground">
														{tool.description}
													</p>
												</div>
											</div>

											{tool.steps && (
												<ul className="space-y-2 text-sm text-muted-foreground">
													{tool.steps.map((step) => (
														<li key={step} className="flex gap-2">
															<ChevronRight className="h-4 w-4 text-zinc-500 mt-0.5" />
															<span>{step}</span>
														</li>
													))}
												</ul>
											)}

											{tool.note && (
												<div className="rounded-lg bg-muted/40 p-3 text-sm text-muted-foreground">
													{tool.note}
												</div>
											)}
										</div>
									))}
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
