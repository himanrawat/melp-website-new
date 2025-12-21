"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { HelpSidebar } from "../HelpSidebar";
import { sidebarCategories } from "../sidebarData";
import {
	AlarmCheck,
	AlarmClockCheck,
	ArrowRight,
	CalendarClock,
	CalendarPlus,
	ChevronRight,
	Clock3,
	Link2,
	Mail,
	MessageCircle,
	Radio,
	Repeat,
	Sparkles,
	Video,
} from "lucide-react";

const pageSections = [
	{ id: "howToScheduleMeeting", label: "Schedule a Meeting", icon: CalendarPlus },
	{ id: "joinMeeting", label: "Join a Meeting", icon: Video },
	{
		id: "howToScheduleMeetingNonMelper",
		label: "Invite Non-Melp Users",
		icon: Mail,
	},
	{
		id: "howToScheduleRecurringMeeting",
		label: "Recurring Meetings",
		icon: Repeat,
	},
	{ id: "bookAnAppointment", label: "Book an Appointment", icon: AlarmClockCheck },
	{ id: "calendarSyncing", label: "Calendar Syncing", icon: CalendarClock },
	{ id: "recordMeeting", label: "Record a Meeting", icon: Radio },
];

const schedulingSteps = [
	"Go to Dashboard or Calendar and click Create Meeting.",
	"Add the Title, Invitees, Description, Date, Time, Duration, Reminder, and Recurrence if needed. Upload attachments like an agenda if you want.",
	"Click Create. Invites go out instantly and the meeting is added to everyone in Melp.",
];

const joinLiveCallSteps = [
	"Click the Live Call button to open the live call panel.",
	"Find the meeting in progress and hit Join.",
];

const joinRecentSteps = [
	"Open the Recent tab and pick Meetings from the side menu.",
	"Browse recent meetings and click Join on the one you need.",
];

const joinEmailSteps = [
	"Open the Melp meeting invite email.",
	"Click the meeting link or Join button inside the email.",
];

const nonMelpSteps = [
	"Go to Calendar or Dashboard and click Create Meeting.",
	"Fill in Title, Description, Date, Time, Duration, Reminder, and Recurrence if needed. Attach any files.",
	"In Add Invitees, type the email of the non-Melp attendee.",
	"Click Create. The invite is sent to their email.",
];

const nonMelpFollowUp = [
	"They get an email invitation with a Join Meeting link.",
	"Clicking the link prompts them to enter name and email and sends a join request to you.",
	"If you approve, they enter the meeting with video, voice, and chat. If you decline, they see that the request was not approved.",
];

const recurringSteps = [
	"Click Create Meeting from Dashboard or Calendar.",
	"Fill in meeting info: Title, Invitees, Time slot, Reminders, and optional attachments.",
	"Choose the Recurrence type: Once, Daily, Weekly, or Monthly.",
	"Click Create to schedule the series.",
];

const recurringBenefits = [
	"Each instance has its own reminders and notifications.",
	"Edit or delete one meeting or the whole series.",
	"Create exceptions by rescheduling a single instance without changing the series.",
];

const editMeetingSteps = [
	"Open your Calendar and find the meeting.",
	"Click the Edit icon next to it.",
	"Update invitees, time, description, or recurrence pattern.",
	"Click Update to save.",
];

const bookAppointmentSteps = [
	"Open the Book an Appointment flow from your dashboard.",
	"Set your availability window, meeting duration, buffer times, and breaks.",
	"Share your booking link so others can pick a slot that fits your schedule.",
];

const calendarSyncSteps = [
	"Connect your Google or Outlook calendar from Settings.",
	"Grant permission so Melp can read busy or free time.",
	"Your Melp meetings and appointments stay in sync with your external calendar.",
];

const recordMeetingSteps = [
	"Start your meeting and click Record.",
	"Let participants know the session is being recorded.",
	"Stop recording when finished; the recording is saved per your workspace rules.",
];

export default function ScheduleMeetingPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
			<div className="flex">
				<HelpSidebar
					categories={sidebarCategories}
					defaultExpanded="Meetings"
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
								<li className="font-medium text-foreground">Meetings</li>
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
									<Video className="h-3 w-3" />
									Meetings
								</div>

								<div>
									<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
										Meetings with Melp: A Productivity Essential
									</h1>
									<p className="mt-3 max-w-2xl text-lg text-muted-foreground">
										Join, schedule, and run meetings without downloads or
										context switching. Everything you need to stay productive is
										in one place.
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
							{/* Schedule a Meeting */}
							<motion.section
								id="howToScheduleMeeting"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<CalendarPlus className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										How to schedule a meeting
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Plan it, set it, and get back to work. Melp makes scheduling
										fast so you spend less time planning and more time doing.
									</p>

									<ol className="space-y-3">
										{schedulingSteps.map((step, index) => (
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

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4 text-sm text-muted-foreground">
										Invites go out by email and show up on the Melp calendar for
										all invitees automatically.
									</div>
								</div>
							</motion.section>

							{/* Join a Meeting */}
							<motion.section
								id="joinMeeting"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Video className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										How to join a meeting
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Join from browser or app in seconds. No installs required.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<h3 className="font-semibold text-foreground">
												Join from Live Call
											</h3>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{joinLiveCallSteps.map((step) => (
													<li key={step} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{step}</span>
													</li>
												))}
											</ul>
											<p className="text-sm text-muted-foreground">
												No digging, no searching. One click and you are live.
											</p>
										</div>

										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<h3 className="font-semibold text-foreground">
												Join from Recent or Email
											</h3>
											<h4 className="text-sm font-semibold text-foreground">
												Recent tab
											</h4>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{joinRecentSteps.map((step) => (
													<li key={step} className="flex gap-2">
														<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{step}</span>
													</li>
												))}
											</ul>
											<h4 className="text-sm font-semibold text-foreground">
												Email invite
											</h4>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{joinEmailSteps.map((step) => (
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
											No account? You can still join as a guest. For the best
											experience, download Melp from the Download Center on your
											device.
										</p>
									</div>
								</div>
							</motion.section>

							{/* Invite Non-Melp Users */}
							<motion.section
								id="howToScheduleMeetingNonMelper"
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
										Schedule with someone outside Melp
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Invite anyone even if they do not have a Melp account.
									</p>

									<ol className="space-y-3">
										{nonMelpSteps.map((step, index) => (
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

									<div className="rounded-xl bg-muted/20 border border-border/50 p-4 space-y-2 text-sm text-muted-foreground">
										<h3 className="font-semibold text-foreground">
											What happens next
										</h3>
										<ul className="space-y-2">
											{nonMelpFollowUp.map((item) => (
												<li key={item} className="flex gap-2">
													<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
													<span>{item}</span>
												</li>
											))}
										</ul>
										<p className="text-xs text-muted-foreground">
											Tip: non-Melp users can join without an account, but
											signing up gives them full feature access.
										</p>
									</div>
								</div>
							</motion.section>

							{/* Recurring Meetings */}
							<motion.section
								id="howToScheduleRecurringMeeting"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Repeat className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Recurring meetings in Melp
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Set it once and stay on track for daily standups, weekly
										syncs, or monthly check-ins.
									</p>

									<h3 className="font-semibold text-foreground">
										Why recurring meetings help
									</h3>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{recurringBenefits.map((item) => (
											<li key={item} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{item}</span>
											</li>
										))}
									</ul>

									<h3 className="font-semibold text-foreground">
										How to schedule a recurring meeting
									</h3>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{recurringSteps.map((step) => (
											<li key={step} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{step}</span>
											</li>
										))}
									</ul>

									<h3 className="font-semibold text-foreground">
										How to edit a meeting
									</h3>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{editMeetingSteps.map((step) => (
											<li key={step} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{step}</span>
											</li>
										))}
									</ul>

									<p className="text-sm text-muted-foreground">
										For recurring meetings, choose whether changes apply to the
										current instance or the current and all future instances.
									</p>
								</div>
							</motion.section>

							{/* Book an Appointment */}
							<motion.section
								id="bookAnAppointment"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<AlarmClockCheck className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Book an appointment
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Let others schedule time with you automatically based on
										your availability.
									</p>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{bookAppointmentSteps.map((step) => (
											<li key={step} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{step}</span>
											</li>
										))}
									</ul>
								</div>
							</motion.section>

							{/* Calendar Syncing */}
							<motion.section
								id="calendarSyncing"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<CalendarClock className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Calendar syncing
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-4">
									<p className="text-muted-foreground">
										Sync Melp with your existing calendars to avoid conflicts
										and keep everything in one view.
									</p>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{calendarSyncSteps.map((step) => (
											<li key={step} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{step}</span>
											</li>
										))}
									</ul>
								</div>
							</motion.section>

							{/* Record a Meeting */}
							<motion.section
								id="recordMeeting"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Radio className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Record a meeting
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-4">
									<p className="text-muted-foreground">
										Capture meetings for teammates who cannot attend or for
										action item review.
									</p>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{recordMeetingSteps.map((step) => (
											<li key={step} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{step}</span>
											</li>
										))}
									</ul>
									<p className="text-xs text-muted-foreground">
										Note: follow your workspace policy for storage, access, and
										notifications when recording.
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
