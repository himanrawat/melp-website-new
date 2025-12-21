"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { HelpSidebar } from "../HelpSidebar";
import { sidebarCategories } from "../sidebarData";
import {
	BellOff,
	CheckCircle2,
	ChevronRight,
	Clock3,
	FileText,
	Globe,
	Image,
	Key,
	MapPin,
	Phone,
	Sparkles,
	SlidersHorizontal,
	Upload,
	UserCheck,
	UserRound,
} from "lucide-react";

const pageSections = [
	{ id: "SetYourStatus", label: "Set Your Status", icon: Sparkles },
	{ id: "ManageYourAccount", label: "Manage Your Account", icon: UserCheck },
	{ id: "BuildYourProfile", label: "Build Your Profile", icon: UserRound },
	{
		id: "CustomizeYourPreferences",
		label: "Customize Your Preferences",
		icon: SlidersHorizontal,
	},
];

const statusOptions = [
	{ label: "Online", desc: "You are available and active." },
	{ label: "Busy", desc: "You prefer not to be disturbed right now." },
	{ label: "In a Meeting", desc: "You are currently in a call or meeting." },
];

const accountTasks = [
	{
		title: "Update Your Profile Picture",
		icon: Image,
		description:
			"Keep your avatar current so teammates can identify you instantly.",
		steps: [
			"Go to Account Settings.",
			"Click your current profile picture and choose a new image (JPG, PNG, GIF, BMP).",
			"Click Upload Image to save.",
		],
		tip: "Pick a clear, professional photo for quick recognition across Melp.",
	},
	{
		title: "Update Your Display Name",
		icon: UserRound,
		description: "Refresh how your name appears so people can find you easily.",
		steps: [
			"Open Account Settings and stay on the Account tab.",
			"Click your current display name to edit it.",
			"Enter the new name and click Save Changes.",
		],
		tip: "Use your full name or a recognizable nickname for clarity.",
	},
	{
		title: "Change Your Password",
		icon: Key,
		description:
			"Strengthen your account security by updating your password regularly.",
		steps: [
			"Go to Account Settings on the Account tab.",
			"Find Change Password, enter a strong new password, then confirm it.",
			"Click Save and enter the verification code sent to your registered email.",
		],
		tip: "Use a mix of uppercase, lowercase, numbers, and symbols.",
	},
	{
		title: "Change Your Language",
		icon: Globe,
		description: "Switch Melp to the language you are most comfortable with.",
		steps: [
			"Go to Account Settings on the Account tab.",
			"Open the Language dropdown and pick your preferred language.",
			"Click Save Changes to apply it.",
		],
		footer:
			"Supported: English, Chinese, Lao, Spanish, French, Indonesian, Hindi, Russian, Portuguese, German.",
	},
	{
		title: "Verify Your Phone Number",
		icon: Phone,
		description:
			"Link your phone so you can reconnect with your network even if your email changes.",
		steps: [
			"Go to Account Settings on the Account tab.",
			"Enter your mobile number and click Verify.",
			"Enter the SMS OTP and click Submit.",
		],
		tip: "Use Resend Code if you do not get the OTP on the first try.",
	},
];

const profileTasks = [
	{
		title: "Update Role and Organization Details",
		icon: UserCheck,
		description:
			"Keep your designation, department, and company info accurate for better context in chats and meetings.",
		steps: [
			"Go to Account Settings and select the Profile tab.",
			"Click Designation, Department, or Company to edit each field.",
			"Save your updates.",
		],
	},
	{
		title: "Upload Your Resume",
		icon: Upload,
		description:
			"Showcase your background so colleagues understand your expertise at a glance.",
		steps: [
			"From Account Settings, open the Profile tab.",
			"Scroll to the Resume section and click Upload.",
			"Attach your file and click Save.",
		],
	},
	{
		title: 'Edit "About Me"',
		icon: FileText,
		description:
			"Share a short bio about your work style, passions, or goals to help people know you better.",
		steps: [
			"Open the Profile tab in Account Settings.",
			"Find the About Me section and write your bio (watch the character counter).",
			"Click Save to publish it to your profile.",
		],
	},
];

const preferenceTasks = [
	{
		title: "Set Your Location",
		icon: MapPin,
		description:
			"Share where you are based so meetings and collaboration reflect your region.",
		steps: [
			"Go to Account Settings and open the Preferences tab.",
			"Search your city or region in Location and select it.",
			"Click Save to update.",
		],
	},
	{
		title: "Set Your Time Zone",
		icon: Clock3,
		description:
			"Keep your calendar, reminders, and appointments aligned with your local time.",
		steps: [
			"Open the Preferences tab in Account Settings.",
			"Select the correct option from the Time Zone dropdown.",
			"Save your changes.",
		],
	},
	{
		title: "Mute Notifications",
		icon: BellOff,
		description: "Pause alerts when you need uninterrupted focus.",
		steps: [
			"Go to Account Settings > Preferences.",
			"Open Mute Notifications and choose a duration or turn it Off/On.",
			"Save to apply.",
		],
	},
	{
		title: "Allow Public Invitations",
		icon: SlidersHorizontal,
		description: "Control whether anyone can send you public meeting invites.",
		steps: [
			"In the Preferences tab, find Allow Public Invitations.",
			"Toggle it on or off based on your preference.",
			"Click Save to confirm.",
		],
	},
	{
		title: "Silent Notifications on Call",
		icon: BellOff,
		description: "Silence alerts automatically whenever you are on a call.",
		steps: [
			"Open Account Settings and go to Preferences.",
			"Toggle Silent Notifications On Call on.",
			"Save to lock it in.",
		],
	},
];

export default function PersonalizeMelpAppPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
			<div className="flex">
				<HelpSidebar
					categories={sidebarCategories}
					defaultExpanded="Personalize MelpApp"
				/>

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
									Personalize MelpApp
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
									<Sparkles className="h-3 w-3" />
									Personalization
								</div>

								<div>
									<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
										Personalize{" "}
										<span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
											MelpApp
										</span>
									</h1>
									<p className="mt-3 max-w-2xl text-lg text-muted-foreground">
										Make it easy for teammates to recognize you, protect your
										account, and tailor MelpApp to your work style with quick
										tweaks across status, account, profile, and preferences.
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
							{/* Set Your Status */}
							<motion.section
								id="SetYourStatus"
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
										Set Your Status
									</h2>
								</div>

								<div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm space-y-6">
									<p className="text-lg text-muted-foreground leading-relaxed">
										Keeping your status current lets others know when to reach
										you. Update it in seconds so colleagues understand if you
										are available, focused, or on a call.
									</p>

									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-xl border border-border/50 bg-muted/30 p-5">
											<h3 className="text-lg font-semibold text-foreground">
												How to set it
											</h3>
											<ol className="mt-3 space-y-3 text-muted-foreground">
												<li className="flex items-start gap-3">
													<span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-primary/10 text-center text-sm font-semibold text-primary flex justify-center items-center">
														1
													</span>
													<span>
														Click your profile icon in the top-right and select
														<strong> Status</strong>.
													</span>
												</li>
												<li className="flex items-start gap-3">
													<span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-primary/10 text-center text-sm font-semibold text-primary flex justify-center items-center">
														2
													</span>
													<span>
														Choose the status that matches your availability.
													</span>
												</li>
												<li className="flex items-start gap-3">
													<span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-primary/10 text-center text-sm font-semibold text-primary flex justify-center items-center">
														3
													</span>
													<span>Your status updates instantly.</span>
												</li>
											</ol>
										</div>

										<div className="rounded-xl border border-border/50 bg-muted/20 p-5">
											<h3 className="text-lg font-semibold text-foreground">
												Status options
											</h3>
											<div className="mt-3 space-y-3">
												{statusOptions.map((status) => (
													<div
														key={status.label}
														className="flex items-start gap-3 rounded-lg bg-background/60 p-3"
													>
														<CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
														<div>
															<p className="font-medium text-foreground">
																{status.label}
															</p>
															<p className="text-sm text-muted-foreground">
																{status.desc}
															</p>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>

									<div className="rounded-xl border border-border/40 bg-primary/5 p-4">
										<p className="text-sm text-muted-foreground">
											Your updated status is visible to your contacts, helping
											them communicate at the right time.
										</p>
									</div>
								</div>
							</motion.section>

							{/* Manage Your Account */}
							<motion.section
								id="ManageYourAccount"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="flex items-center gap-3 mb-6">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<UserCheck className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Manage Your Account
									</h2>
								</div>

								<p className="text-muted-foreground mb-6">
									Control the essentials: update your details, secure your
									login, and make MelpApp feel like home.
								</p>

								<div className="grid gap-4 sm:grid-cols-2">
									{accountTasks.map((task) => (
										<div
											key={task.title}
											className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm space-y-4"
										>
											<div className="flex items-start gap-3">
												<div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
													<task.icon className="h-6 w-6" />
												</div>
												<div>
													<h3 className="font-semibold text-foreground">
														{task.title}
													</h3>
													<p className="text-sm text-muted-foreground">
														{task.description}
													</p>
												</div>
											</div>

											<ul className="space-y-3">
												{task.steps.map((step) => (
													<li
														key={step}
														className="flex items-start gap-2 text-sm text-muted-foreground"
													>
														<ChevronRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{step}</span>
													</li>
												))}
											</ul>

											{task.tip && (
												<div className="rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
													<strong className="text-foreground">Pro tip:</strong>{" "}
													{task.tip}
												</div>
											)}
											{task.footer && (
												<div className="rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
													{task.footer}
												</div>
											)}
										</div>
									))}
								</div>
							</motion.section>

							{/* Build Your Profile */}
							<motion.section
								id="BuildYourProfile"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="flex items-center gap-3 mb-6">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<UserRound className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Build Your Profile
									</h2>
								</div>

								<p className="text-muted-foreground mb-6">
									Your profile is more than a name. Keep it updated so
									colleagues see your role, organization, and background at a
									glance.
								</p>

								<div className="grid gap-4 sm:grid-cols-2">
									{profileTasks.map((task) => (
										<div
											key={task.title}
											className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm space-y-4"
										>
											<div className="flex items-start gap-3">
												<div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
													<task.icon className="h-6 w-6" />
												</div>
												<div>
													<h3 className="font-semibold text-foreground">
														{task.title}
													</h3>
													<p className="text-sm text-muted-foreground">
														{task.description}
													</p>
												</div>
											</div>
											<ul className="space-y-3">
												{task.steps.map((step) => (
													<li
														key={step}
														className="flex items-start gap-2 text-sm text-muted-foreground"
													>
														<ChevronRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{step}</span>
													</li>
												))}
											</ul>
										</div>
									))}
								</div>
							</motion.section>

							{/* Customize Your Preferences */}
							<motion.section
								id="CustomizeYourPreferences"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="scroll-mt-24"
							>
								<div className="flex items-center gap-3 mb-6">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-500/25">
										<SlidersHorizontal className="h-5 w-5" />
									</div>
									<h2 className="text-2xl font-bold text-foreground">
										Customize Your Preferences
									</h2>
								</div>

								<p className="text-muted-foreground mb-6">
									Dial MelpApp into your rhythm: set your location and time
									zone, control notifications, and decide how others can reach
									you.
								</p>

								<div className="grid gap-4 sm:grid-cols-2">
									{preferenceTasks.map((task) => (
										<div
											key={task.title}
											className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm space-y-4"
										>
											<div className="flex items-start gap-3">
												<div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
													<task.icon className="h-6 w-6" />
												</div>
												<div>
													<h3 className="font-semibold text-foreground">
														{task.title}
													</h3>
													<p className="text-sm text-muted-foreground">
														{task.description}
													</p>
												</div>
											</div>
											<ul className="space-y-3">
												{task.steps.map((step) => (
													<li
														key={step}
														className="flex items-start gap-2 text-sm text-muted-foreground"
													>
														<ChevronRight className="h-4 w-4 text-zinc-500 mt-0.5" />
														<span>{step}</span>
													</li>
												))}
											</ul>
										</div>
									))}
								</div>

								<div className="mt-6 rounded-xl bg-muted/50 border border-border/60 p-4">
									<p className="text-sm text-muted-foreground">
										Once saved, your preferences keep MelpApp personalized and
										distraction-free.
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
								<ChevronRight className="h-4 w-4 rotate-180" />
								Back to Help Center
							</Link>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
