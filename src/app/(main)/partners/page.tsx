"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
	ArrowRight,
	CheckCircle2,
	Globe2,
	Handshake,
	ShieldCheck,
	MessageSquare,
	Video,
	Bot,
	Lock,
	Building2,
	Code2,
	Headphones,
	BarChart3,
	FileText,
	X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

type FormState = {
	firstName: string;
	lastName: string;
	workEmail: string;
	company: string;
	website: string;
	role: string;
	region: string;
	partnerType: string;
	focus: string;
	message: string;
};

const initialFormState: FormState = {
	firstName: "",
	lastName: "",
	workEmail: "",
	company: "",
	website: "",
	role: "",
	region: "",
	partnerType: "",
	focus: "",
	message: "",
};

// Trusted by logos (hero section)
const trustedByLogos = [
	"Acme Corp",
	"TechFlow",
	"Innovate Inc",
	"DataSync",
	"CloudFirst",
	"NextGen",
	"Apex Solutions",
];

// Actual partner companies data
const partnerCompanies = [
	{
		name: "Nexus Technologies",
		description:
			"Enterprise IT consulting firm deploying Melp for Fortune 500 clients across North America and Europe.",
		category: "reseller",
	},
	{
		name: "CloudBridge Solutions",
		description:
			"Cloud migration specialists integrating Melp into unified communication stacks for mid-market businesses.",
		category: "reseller",
	},
	{
		name: "Apex Consulting",
		description:
			"Digital transformation consultancy helping enterprises modernize their collaboration infrastructure with Melp.",
		category: "consulting",
	},
	{
		name: "TechWave Partners",
		description:
			"Regional technology distributor bringing Melp to small and medium businesses across APAC markets.",
		category: "reseller",
	},
	{
		name: "Innovate Systems",
		description:
			"Systems integrator specializing in healthcare and finance sectors, implementing secure Melp deployments.",
		category: "technology",
	},
	{
		name: "GlobalComm Advisory",
		description:
			"Telecommunications consultancy advising enterprises on unified communications strategy with Melp.",
		category: "consulting",
	},
];

// Partner categories
const partnerCategories = [
	{ id: "all", label: "All Partners" },
	{ id: "reseller", label: "Resellers" },
	{ id: "technology", label: "Technology" },
	{ id: "consulting", label: "Consulting" },
];

// Partner types for "Who we partner with"
const partnerTypes = [
	{
		title: "Channel & Resellers",
		description:
			"Bring Melp to your customers with bundled offerings and white-label solutions.",
		icon: Handshake,
		benefits: [
			"Revenue sharing models",
			"Co-marketing support",
			"Dedicated partner portal",
		],
	},
	{
		title: "Technology Partners",
		description:
			"Integrate your product with Melp to create powerful combined solutions.",
		icon: Code2,
		benefits: [
			"API & SDK access",
			"Technical documentation",
			"Joint go-to-market",
		],
	},
	{
		title: "Services Partners",
		description:
			"Deploy, implement, and support Melp for enterprise customers worldwide.",
		icon: Headphones,
		benefits: [
			"Certification program",
			"Implementation playbooks",
			"Priority support",
		],
	},
];

// Value propositions
const valueProps = [
	{
		title: "Own the experience",
		description:
			"White-label Melp with your branding. Deliver a seamless communication platform your customers will love.",
	},
	{
		title: "Get to market faster",
		description:
			"Extend your capabilities quickly without spending months building from scratch. Launch in weeks, not years.",
	},
	{
		title: "Grow your value",
		description:
			"Acquire and retain more customers by offering a more complete and holistic collaboration solution.",
	},
];

// Features/capabilities
const capabilities = [
	{ label: "Encrypted messaging", icon: Lock },
	{ label: "HD video calls", icon: Video },
	{ label: "AI assistant", icon: Bot },
	{ label: "File sharing", icon: FileText },
	{ label: "Screen sharing", icon: MessageSquare },
	{ label: "Analytics", icon: BarChart3 },
	{ label: "SSO & SAML", icon: ShieldCheck },
	{ label: "API access", icon: Code2 },
];

export default function PartnersPage() {
	const [form, setForm] = useState<FormState>(initialFormState);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [activeCategory, setActiveCategory] = useState("all");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const requiredFields = useMemo(
		() => ["firstName", "lastName", "workEmail", "company", "partnerType"],
		[]
	);

	// Lock body scroll when modal is open
	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isModalOpen]);

	const validateEmail = (value: string) =>
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

	const validate = () => {
		const nextErrors: Record<string, string> = {};

		requiredFields.forEach((field) => {
			if (!(form as Record<string, string>)[field]?.trim()) {
				nextErrors[field] = "Required";
			}
		});

		if (form.workEmail && !validateEmail(form.workEmail)) {
			nextErrors.workEmail = "Enter a valid email";
		}

		setErrors(nextErrors);
		return Object.keys(nextErrors).length === 0;
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!validate()) return;

		setIsSubmitting(true);
		await new Promise((resolve) => setTimeout(resolve, 900));
		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	const handleChange = (field: keyof FormState, value: string) => {
		setForm((prev) => ({ ...prev, [field]: value }));
		if (errors[field]) {
			setErrors((prev) => {
				const { [field]: _removed, ...rest } = prev;
				return rest;
			});
		}
	};

	const openModal = () => {
		setIsModalOpen(true);
		setIsSubmitted(false);
		setForm(initialFormState);
		setErrors({});
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const filteredPartners =
		activeCategory === "all"
			? partnerCompanies
			: partnerCompanies.filter((p) => p.category === activeCategory);

	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section - Sandbar Style */}
			<section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-3xl mx-auto">
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6"
						>
							Partners
						</motion.p>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
						>
							Deliver complete collaboration, with less work
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
						>
							Add enterprise-grade messaging, video, and AI capabilities to your
							platform. Offer your customers the collaboration tools they need,
							without the hassle of building it yourself.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<Button
								variant="brand-primary"
								size="lg"
								className="h-12 px-8 text-base"
								onClick={openModal}
							>
								Get a demo
								<ArrowRight className="w-4 h-4 ml-1" />
							</Button>
						</motion.div>
					</div>

					{/* Partner Logos */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="mt-16 pt-10 border-t border-border"
					>
						<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
							{trustedByLogos.map((logo, index) => (
								<span
									key={index}
									className="text-sm font-medium text-muted-foreground/60 hover:text-muted-foreground transition-colors"
								>
									{logo}
								</span>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Partner Companies Section */}
			<section className="py-20 bg-muted/30">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col lg:flex-row gap-12">
						{/* Sidebar Categories */}
						<div className="lg:w-64 shrink-0">
							<div className="sticky top-24 space-y-2">
								{partnerCategories.map((category) => (
									<button
										key={category.id}
										onClick={() => setActiveCategory(category.id)}
										className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
											activeCategory === category.id
												? "bg-foreground text-background"
												: "text-muted-foreground hover:text-foreground hover:bg-muted"
										}`}
									>
										<span>{category.label}</span>
										{activeCategory === category.id && (
											<span className="w-1.5 h-6 bg-background/30 rounded-full" />
										)}
									</button>
								))}
							</div>
						</div>

						{/* Partner Cards Grid */}
						<div className="flex-1">
							<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
								{filteredPartners.map((partner, index) => (
									<motion.div
										key={partner.name}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.4, delay: index * 0.05 }}
									>
										<Card className="h-full bg-background hover:shadow-md transition-shadow border-border/60">
											<CardHeader className="pb-3">
												<div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-3">
													<Building2 className="w-5 h-5 text-foreground" />
												</div>
												<CardTitle className="text-base font-semibold">
													{partner.name}
												</CardTitle>
											</CardHeader>
											<CardContent>
												<p className="text-sm text-muted-foreground leading-relaxed mb-4">
													{partner.description}
												</p>
												<a
													href="#"
													className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
												>
													Learn more
													<ArrowRight className="w-3.5 h-3.5" />
												</a>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Who We Partner With Section */}
			<section className="py-20">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-[1fr,2fr] gap-12 items-start">
						<div>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4"
							>
								Who we partner with
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 }}
								className="text-muted-foreground"
							>
								If you&apos;re building communication solutions, we can help.
							</motion.p>
						</div>

						<div className="grid sm:grid-cols-3 gap-8">
							{partnerTypes.map((type, index) => {
								const Icon = type.icon;
								return (
									<motion.div
										key={type.title}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
										className="space-y-4"
									>
										<div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
											<Icon className="w-5 h-5 text-foreground" />
										</div>
										<div>
											<h3 className="font-semibold text-foreground mb-2">
												{type.title}
											</h3>
											<p className="text-sm text-muted-foreground leading-relaxed">
												{type.description}
											</p>
										</div>
									</motion.div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* Value Propositions */}
			<section className="py-20 border-t border-border">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
					<div className="grid sm:grid-cols-3 gap-12">
						{valueProps.map((prop, index) => (
							<motion.div
								key={prop.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="space-y-3"
							>
								<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
									{index === 0
										? "Own the experience"
										: index === 1
										? "Get to market faster"
										: "Grow your value"}
								</p>
								<h3 className="text-lg font-semibold text-foreground">
									{prop.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{prop.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-muted/30">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-[1fr,2fr] gap-12 items-start">
						<div>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
							>
								Features
							</motion.p>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 }}
								className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4"
							>
								All the building blocks you need
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.2 }}
								className="text-muted-foreground"
							>
								Everything your customers need for modern collaboration, built
								into one platform.
							</motion.p>
						</div>

						<div className="grid sm:grid-cols-2 gap-8">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="space-y-4"
							>
								<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
									Communication
								</p>
								<h3 className="font-semibold text-foreground">
									Messaging & Calling
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									Secure, encrypted messaging with HD video and voice calls.
									Support for 1:1 and group conversations with AI-powered
									features.
								</p>
								<a
									href="#"
									className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
								>
									Explore Messaging
									<ArrowRight className="w-3.5 h-3.5" />
								</a>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 }}
								className="space-y-4"
							>
								<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
									Intelligence
								</p>
								<h3 className="font-semibold text-foreground">AI Assistant</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									Get smart summaries, real-time translation, and intelligent
									routing. Choose from 100+ AI-powered features or customize for
									your needs.
								</p>
								<a
									href="#"
									className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
								>
									Explore AI
									<ArrowRight className="w-3.5 h-3.5" />
								</a>
							</motion.div>
						</div>
					</div>

					{/* Capability Tags */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mt-16 pt-10 border-t border-border"
					>
						<div className="flex flex-wrap gap-3">
							{capabilities.map((cap) => {
								const Icon = cap.icon;
								return (
									<div
										key={cap.label}
										className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-foreground"
									>
										<Icon className="w-4 h-4 text-muted-foreground" />
										{cap.label}
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Testimonial Section */}
			<section className="py-20">
				<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<div className="text-6xl text-muted-foreground/30 font-serif mb-6">
							&ldquo;
						</div>
						<blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed mb-8">
							Partnering with Melp transformed how we deliver collaboration to
							our enterprise customers. The integration was seamless, and our
							clients love the AI-powered features that set us apart from
							competitors.
						</blockquote>
						<div className="flex items-center justify-center gap-4">
							<div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
								<Building2 className="w-6 h-6 text-muted-foreground" />
							</div>
							<div className="text-left">
								<p className="font-semibold text-foreground">Sarah Chen</p>
								<p className="text-sm text-muted-foreground">
									VP of Partnerships @ TechFlow
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 bg-foreground text-background">
				<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
					>
						Partner with us.
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="text-lg text-background/70 mb-10 max-w-xl mx-auto"
					>
						Talk to our team to learn how we can help you deliver world-class
						collaboration, with less.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						<Button
							variant="brand-primary"
							size="lg"
							className="h-12 px-8 text-base"
							onClick={openModal}
						>
							Contact Sales
						</Button>
					</motion.div>
				</div>
			</section>

			{/* Form Modal */}
			<AnimatePresence>
				{isModalOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
							onClick={closeModal}
						/>

						{/* Modal */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 20 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-2xl sm:w-full z-50 max-h-[90vh] overflow-auto rounded-xl bg-background shadow-2xl"
						>
							{/* Modal Header */}
							<div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between z-10">
								<div>
									<h2 className="text-xl font-semibold text-foreground">
										Partner with Melp
									</h2>
									<p className="text-sm text-muted-foreground">
										Tell us about your partnership goals
									</p>
								</div>
								<button
									onClick={closeModal}
									className="p-2 rounded-lg transition-colors cursor-pointer"
								>
									<X className="w-5 h-5 text-muted-foreground" />
								</button>
							</div>

							{/* Modal Content */}
							<div className="p-6">
								{isSubmitted ? (
									<div className="space-y-6 text-center py-8">
										<div className="mx-auto w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
											<CheckCircle2 className="w-8 h-8" />
										</div>
										<div className="space-y-2">
											<h4 className="text-xl font-semibold">
												Application received
											</h4>
											<p className="text-muted-foreground">
												Thanks for your interest. Our partnerships team will
												reach out with next steps shortly.
											</p>
										</div>
										<div className="flex justify-center gap-3">
											<Button variant="brand-primary" onClick={closeModal}>
												Close
											</Button>
											<Button variant="outline" asChild>
												<a href="/resources">Explore resources</a>
											</Button>
										</div>
									</div>
								) : (
									<form onSubmit={handleSubmit} className="space-y-5">
										<div className="grid gap-4 sm:grid-cols-2">
											<div className="space-y-2">
												<Label htmlFor="firstName">
													First name <span className="text-destructive">*</span>
												</Label>
												<Input
													id="firstName"
													placeholder="Alex"
													value={form.firstName}
													onChange={(e) =>
														handleChange("firstName", e.target.value)
													}
													aria-invalid={!!errors.firstName}
													autoComplete="given-name"
												/>
												{errors.firstName && (
													<p className="text-xs text-destructive">
														{errors.firstName}
													</p>
												)}
											</div>
											<div className="space-y-2">
												<Label htmlFor="lastName">
													Last name <span className="text-destructive">*</span>
												</Label>
												<Input
													id="lastName"
													placeholder="Rivera"
													value={form.lastName}
													onChange={(e) =>
														handleChange("lastName", e.target.value)
													}
													aria-invalid={!!errors.lastName}
													autoComplete="family-name"
												/>
												{errors.lastName && (
													<p className="text-xs text-destructive">
														{errors.lastName}
													</p>
												)}
											</div>
										</div>

										<div className="grid gap-4 sm:grid-cols-2">
											<div className="space-y-2">
												<Label htmlFor="workEmail">
													Work email <span className="text-destructive">*</span>
												</Label>
												<Input
													id="workEmail"
													type="email"
													placeholder="alex@company.com"
													value={form.workEmail}
													onChange={(e) =>
														handleChange("workEmail", e.target.value)
													}
													aria-invalid={!!errors.workEmail}
													autoComplete="email"
												/>
												{errors.workEmail && (
													<p className="text-xs text-destructive">
														{errors.workEmail}
													</p>
												)}
											</div>
											<div className="space-y-2">
												<Label htmlFor="role">Role / title</Label>
												<Input
													id="role"
													placeholder="Head of Partnerships"
													value={form.role}
													onChange={(e) => handleChange("role", e.target.value)}
													autoComplete="organization-title"
												/>
											</div>
										</div>

										<div className="grid gap-4 sm:grid-cols-2">
											<div className="space-y-2">
												<Label htmlFor="company">
													Company <span className="text-destructive">*</span>
												</Label>
												<Input
													id="company"
													placeholder="Acme Corp"
													value={form.company}
													onChange={(e) =>
														handleChange("company", e.target.value)
													}
													aria-invalid={!!errors.company}
													autoComplete="organization"
												/>
												{errors.company && (
													<p className="text-xs text-destructive">
														{errors.company}
													</p>
												)}
											</div>
											<div className="space-y-2">
												<Label htmlFor="website">Company website</Label>
												<Input
													id="website"
													placeholder="https://"
													value={form.website}
													onChange={(e) =>
														handleChange("website", e.target.value)
													}
													autoComplete="url"
												/>
											</div>
										</div>

										<div className="grid gap-4 sm:grid-cols-2">
											<div className="space-y-2">
												<Label htmlFor="region">Primary region</Label>
												<div className="flex items-center gap-2">
													<Globe2 className="w-4 h-4 text-muted-foreground shrink-0" />
													<Input
														id="region"
														placeholder="North America, EMEA, APAC..."
														value={form.region}
														onChange={(e) =>
															handleChange("region", e.target.value)
														}
													/>
												</div>
											</div>
											<div className="space-y-2">
												<Label>
													Partner type{" "}
													<span className="text-destructive">*</span>
												</Label>
												<Select
													value={form.partnerType}
													onValueChange={(value) =>
														handleChange("partnerType", value)
													}
												>
													<SelectTrigger aria-invalid={!!errors.partnerType}>
														<SelectValue placeholder="Select a track" />
													</SelectTrigger>
													<SelectContent>
														<SelectGroup>
															<SelectLabel>Tracks</SelectLabel>
															<SelectItem value="channel">
																Channel / Reseller
															</SelectItem>
															<SelectItem value="technology">
																Technology
															</SelectItem>
															<SelectItem value="services">
																Services & Implementation
															</SelectItem>
															<SelectItem value="consulting">
																Consulting / Advisory
															</SelectItem>
														</SelectGroup>
													</SelectContent>
												</Select>
												{errors.partnerType && (
													<p className="text-xs text-destructive">
														{errors.partnerType}
													</p>
												)}
											</div>
										</div>

										<div className="space-y-2">
											<Label htmlFor="message">Partnership goals</Label>
											<textarea
												id="message"
												rows={3}
												placeholder="Tell us about your customers, goals, and how you want to collaborate."
												value={form.message}
												onChange={(e) =>
													handleChange("message", e.target.value)
												}
												className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
											/>
										</div>

										<div className="flex flex-wrap items-center gap-3 justify-between pt-2">
											<div className="flex items-center gap-2 text-sm text-muted-foreground">
												<ShieldCheck className="w-4 h-4" />
												<span>We keep your info private and secure.</span>
											</div>
											<Button
												type="submit"
												variant="brand-primary"
												disabled={isSubmitting}
											>
												{isSubmitting ? "Submitting..." : "Submit application"}
											</Button>
										</div>
									</form>
								)}
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}
