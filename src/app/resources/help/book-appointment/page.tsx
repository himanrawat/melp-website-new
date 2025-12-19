"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpSidebar } from "../HelpSidebar";
import { sidebarCategories } from "../sidebarData";
import {
	ArrowRight,
	Calendar,
	CalendarClock,
	Check,
	CheckCircle2,
	ChevronRight,
	Clock3,
	ClipboardList,
	Link2,
	Settings2,
	Sparkles,
	Users,
} from "lucide-react";

const pageSections = [
	{ id: "settingAvailability", label: "Setting Your Availability", icon: Clock3 },
	{ id: "createEvent", label: "How to Create an Event", icon: Calendar },
	{ id: "ManagingEvent", label: "Managing Your Event", icon: Settings2 },
	{ id: "CustomizeCalendarLink", label: "Customize Your Calendar Link", icon: Link2 },
];

const whatYouCanDo = [
	"Create multiple availability slots so people pick what works for them.",
	"Set your own rules: booking limits, confirmations, and guest permissions.",
	"Customize your public booking link to keep it personal and memorable.",
	"Share anywhere: send to one person or post publicly.",
	"Easily manage bookings: reschedule, add guests, update locations, or cancel.",
];

const availabilitySteps = [
	"From the left sidebar, click My Availability.",
	"Hit New to create a fresh slot.",
	"Pick your start time, end time, and the days you want to be available.",
	"Click Save and you are set.",
];

const availabilityTips = [
	"Create as many slots as you need. Split mornings and afternoons or keep it flexible.",
	"Use More Options on any slot to edit, make default, or delete.",
];

const createEventSteps = [
	"On the booking page, click Create Event Type.",
	"Choose One-on-One, Team Event, or Workshop and click Proceed.",
	"Add Event Name, Description, Location, Time, Duration, and set Public or Private.",
	"Open Availability Options and pick from your saved availability slots.",
	"Open Limits Options to set booking limit, confirmation approvals, and guest permissions.",
	"Click Create Event to publish.",
];

const manageEventActions = [
	"Share: send the booking link instantly.",
	"Edit: update event details anytime.",
	"Make Public/Private: switch visibility with one click.",
	"Turn Off Event: pause new bookings without deleting.",
	"Copy Event Link: grab it quickly for sharing.",
	"Delete Event: remove it from your calendar.",
];

const bookingLinkSteps = [
	"From the sidebar, click My Link.",
	"Enter custom text to keep it short and memorable, then click Save Changes.",
];

const afterBookingSteps = [
	"Go to My Bookings from the sidebar.",
	"Accept, Decline, or Cancel bookings with automatic notifications.",
	"Use More Options on any booking to request a reschedule, add guests, or edit location.",
];

const afterBookingTips = [
	"Use clear event titles and descriptions so attendees know what to expect.",
	"Mark events as Private for sensitive or high-priority meetings.",
	"Limit booking slots on public events to keep your schedule manageable.",
];

export default function BookAppointmentPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
			<Header />

			<div className="flex">
				<HelpSidebar
					categories={sidebarCategories}
					defaultExpanded="Book an Appointment"
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
									Book an appointment
								</li>
							</ol>
						</nav>

						{/* Hero */}
						<motion.section
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="relative mb-12 overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-primary/5 via-primary/10 to-emerald-500/5 p-8 sm:p-10"
						>
							<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
							<div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

							<div className="relative space-y-6">
								<div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
									<Sparkles className="h-3 w-3" />
									Appointments
								</div>

								<div>
									<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
										Book an appointment with Melp
									</h1>
									<p className="mt-3 max-w-2xl text-lg text-muted-foreground">
										Set availability, share a booking link, and let people
										reserve time without back-and-forth. Perfect for one-on-one
										chats, team huddles, or workshops.
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
							{/* Setting Availability */}
							<motion.section
								id="settingAvailability"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Clock3 className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Setting your availability
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Create multiple slots, set rules, and keep bookings organized
										without double-bookings.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<h3 className="font-semibold text-foreground">
												What you can do
											</h3>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{whatYouCanDo.map((item) => (
													<li key={item} className="flex gap-2">
														<CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>

										<div className="rounded-2xl border border-border/50 bg-muted/20 p-5 space-y-3">
											<h3 className="font-semibold text-foreground">
												How to create an availability slot
											</h3>
											<ol className="space-y-2 text-sm text-muted-foreground">
												{availabilitySteps.map((step, index) => (
													<li key={step} className="flex gap-2">
														<span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
															{index + 1}
														</span>
														<span>{step}</span>
													</li>
												))}
											</ol>
											<div className="rounded-lg bg-muted/40 p-3 text-sm text-muted-foreground">
												Tips: {availabilityTips.join(" ")}
											</div>
										</div>
									</div>
								</div>
							</motion.section>

							{/* Create Event */}
							<motion.section
								id="createEvent"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Calendar className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										How to create an event
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Choose the format, add details, and publish in minutes.
									</p>

									<ol className="space-y-3">
										{createEventSteps.map((step, index) => (
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
										Pro tip: use descriptive names and event types so attendees
										can find the right session quickly.
									</div>
								</div>
							</motion.section>

							{/* Managing Event */}
							<motion.section
								id="ManagingEvent"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="mb-6 flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<Settings2 className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Managing your event
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Control everything from the event card with More Options.
									</p>

									<ul className="space-y-2 text-sm text-muted-foreground">
										{manageEventActions.map((item) => (
											<li key={item} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{item}</span>
											</li>
										))}
									</ul>

									<div className="rounded-xl bg-muted/50 border border-border/60 p-4 text-sm text-muted-foreground">
										Use Turn Off Event when you need a pause from new bookings
										without deleting the event.
									</div>
								</div>
							</motion.section>

							{/* Customize Calendar Link */}
							<motion.section
								id="CustomizeCalendarLink"
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
										Customize your calendar link
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-muted-foreground">
										Make your booking link short, simple, and on-brand. Changes
										update instantly.
									</p>

									<ul className="space-y-2 text-sm text-muted-foreground">
										{bookingLinkSteps.map((step) => (
											<li key={step} className="flex gap-2">
												<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
												<span>{step}</span>
											</li>
										))}
									</ul>

									<div className="rounded-xl border border-border/50 bg-muted/20 p-4 space-y-3 text-sm text-muted-foreground">
										<h3 className="font-semibold text-foreground">
											Sharing your calendar link
										</h3>
										<ul className="space-y-2">
											<li className="flex gap-2">
												<Check className="h-4 w-4 text-primary mt-0.5" />
												<span>
													Copy it from the Share dropdown on the booking page or
													your profile menu and send by email.
												</span>
											</li>
											<li className="flex gap-2">
												<Check className="h-4 w-4 text-primary mt-0.5" />
												<span>
													Post it on social channels so anyone can book
													instantly.
												</span>
											</li>
										</ul>
										<p className="text-sm text-muted-foreground">
											When someone clicks your link, all your public events are
											visible.
										</p>
									</div>

									<div className="rounded-xl border border-border/50 bg-muted/20 p-4 space-y-3 text-sm text-muted-foreground">
										<h3 className="font-semibold text-foreground">
											What you can do after a booking
										</h3>
										<ul className="space-y-2">
											{afterBookingSteps.map((step) => (
												<li key={step} className="flex gap-2">
													<ArrowRight className="h-4 w-4 text-zinc-500 mt-0.5" />
													<span>{step}</span>
												</li>
											))}
										</ul>
										<ul className="mt-2 space-y-2">
											{afterBookingTips.map((tip) => (
												<li key={tip} className="flex gap-2">
													<CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
													<span>{tip}</span>
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

			<Footer />
		</div>
	);
}
