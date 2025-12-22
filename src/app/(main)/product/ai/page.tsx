"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
	MessageSquare,
	Languages,
	FileText,
	Mic,
	Brain,
	ClipboardCheck,
	Check,
	ArrowRight,
	Zap,
	Shield,
	Globe,
	Users,
	BarChart3,
	Lightbulb,
	TrendingUp,
	Award,
	ChevronRight,
} from "lucide-react";
import { CounterAnimation, RevealOnScroll } from "@/components/ui/aceternity";
import {
	MelpChatPanel,
	MelpTranslatorModal,
	MelpAISummaryModal,
	MelpLiveCaptions,
	MelpAIAssistant,
	MelpEvaluationPanel,
} from "@/components/mockups";

// Hero features data
const heroFeatures = [
	{
		id: "draft",
		title: "Draft For Me",
		subtitle: "AI-powered message drafting",
		description:
			"Generate professional messages in seconds. Choose your tone, context, and let AI craft the perfect response.",
		icon: MessageSquare,
		color: "from-blue-500 to-cyan-500",
		mockup: "chat",
	},
	{
		id: "translate",
		title: "Real-time Translation",
		subtitle: "Break language barriers instantly",
		description:
			"Translate messages across 50+ languages in real-time. Communicate seamlessly with global teams.",
		icon: Languages,
		color: "from-purple-500 to-pink-500",
		mockup: "translator",
	},
	{
		id: "summary",
		title: "AI Meeting Summary",
		subtitle: "Never miss a detail",
		description:
			"Get instant summaries of your meetings with key points, action items, and decisions automatically extracted.",
		icon: FileText,
		color: "from-orange-500 to-red-500",
		mockup: "summary",
	},
	{
		id: "captions",
		title: "Live Captions",
		subtitle: "Real-time transcription",
		description:
			"Live captions with speaker identification and multi-language support for inclusive meetings.",
		icon: Mic,
		color: "from-green-500 to-emerald-500",
		mockup: "captions",
	},
	{
		id: "assistant",
		title: "AI Assistant",
		subtitle: "Your intelligent companion",
		description:
			"Ask anything, get instant answers. From scheduling to research, your AI assistant has you covered.",
		icon: Brain,
		color: "from-violet-500 to-purple-500",
		mockup: "assistant",
	},
	{
		id: "evaluation",
		title: "Smart Evaluation",
		subtitle: "AI-powered assessments",
		description:
			"Evaluate CVs, proposals, and documents with AI-driven scoring and detailed feedback.",
		icon: ClipboardCheck,
		color: "from-rose-500 to-pink-500",
		mockup: "evaluation",
	},
];

// Stats data
const stats = [
	{ id: "time-saved", value: 85, suffix: "%", label: "Time Saved on Drafts" },
	{ id: "languages", value: 50, suffix: "+", label: "Languages Supported" },
	{ id: "accuracy", value: 99, suffix: "%", label: "Transcription Accuracy" },
	{ id: "speed", value: 10, suffix: "x", label: "Faster Summaries" },
];

// Benefits data
const benefits = [
	{
		id: "faster",
		icon: Zap,
		title: "10x Faster Communication",
		description:
			"Draft messages, translate content, and summarize meetings in seconds instead of minutes.",
		color: "text-yellow-400",
	},
	{
		id: "global",
		icon: Globe,
		title: "Global Collaboration",
		description:
			"Break down language barriers with real-time translation across 50+ languages.",
		color: "text-blue-400",
	},
	{
		id: "secure",
		icon: Shield,
		title: "Enterprise Security",
		description:
			"SOC 2 Type II certified with end-to-end encryption. Your data stays yours.",
		color: "text-green-400",
	},
	{
		id: "inclusive",
		icon: Users,
		title: "Inclusive Meetings",
		description:
			"Live captions and transcriptions make every meeting accessible to everyone.",
		color: "text-purple-400",
	},
];

// Use cases data
const useCases = [
	{
		id: "sales",
		icon: BarChart3,
		title: "Sales Teams",
		description:
			"Close deals faster with AI-drafted proposals and real-time translation for global clients.",
		stat: "45% faster deal closure",
	},
	{
		id: "hr",
		icon: Users,
		title: "HR & Recruiting",
		description:
			"Evaluate candidates with AI-powered CV analysis and conduct inclusive interviews.",
		stat: "3x more candidates reviewed",
	},
	{
		id: "product",
		icon: Lightbulb,
		title: "Product Teams",
		description:
			"Capture every insight from meetings with AI summaries and action item tracking.",
		stat: "Zero missed action items",
	},
	{
		id: "global-teams",
		icon: Globe,
		title: "Global Teams",
		description:
			"Collaborate seamlessly across languages with real-time translation and captions.",
		stat: "50+ languages supported",
	},
];

// Hero Section Component
function HeroSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	// Auto-cycle through features
	useEffect(() => {
		if (isHovered) return;
		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % heroFeatures.length);
		}, 6000);
		return () => clearInterval(interval);
	}, [isHovered]);

	const activeFeature = heroFeatures[activeIndex];
	const Icon = activeFeature.icon;

	const renderMockup = () => {
		switch (activeFeature.mockup) {
			case "chat":
				return <MelpChatPanel />;
			case "translator":
				return <MelpTranslatorModal />;
			case "summary":
				return <MelpAISummaryModal />;
			case "captions":
				return <MelpLiveCaptions />;
			case "assistant":
				return <MelpAIAssistant />;
			case "evaluation":
				return <MelpEvaluationPanel />;
			default:
				return <MelpChatPanel />;
		}
	};

	return (
		<section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
				<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-[150px]" />
			</div>

			{/* Grid Pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

			<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Content */}
					<div className="text-center lg:text-left">
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
						>
							<Image
								src="/melpAI.svg"
								alt="Melp AI"
								width={16}
								height={16}
								className="w-4 h-4"
							/>
							<span className="text-sm text-gray-300">
								Powered by Advanced AI
							</span>
						</motion.div>

						{/* Dynamic Title */}
						<div className="mb-6">
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 }}
								className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
							>
								Work smarter with
							</motion.h1>
							<AnimatePresence mode="wait">
								<motion.div
									key={`title-${activeIndex}`}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.5 }}
									className="flex items-center gap-3 justify-center lg:justify-start"
								>
									<div
										className={`p-3 rounded-xl bg-gradient-to-br ${activeFeature.color}`}
									>
										<Icon className="w-6 h-6 text-white" />
									</div>
									<span
										className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${activeFeature.color} bg-clip-text text-transparent`}
									>
										{activeFeature.title}
									</span>
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Dynamic Description */}
						<AnimatePresence mode="wait">
							<motion.p
								key={`desc-${activeIndex}`}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
							>
								{activeFeature.description}
							</motion.p>
						</AnimatePresence>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
						>
							<button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg text-white hover:opacity-90 transition-all flex items-center justify-center gap-2">
								Get Started Free
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</button>
							<button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-lg text-white hover:bg-white/10 transition-all">
								Watch Demo
							</button>
						</motion.div>

						{/* Trust Indicators */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
							className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500"
						>
							<span className="flex items-center gap-2">
								<Check className="w-4 h-4 text-green-400" />
								Free forever
							</span>
							<span className="flex items-center gap-2">
								<Check className="w-4 h-4 text-green-400" />
								No credit card
							</span>
							<span className="flex items-center gap-2">
								<Check className="w-4 h-4 text-green-400" />
								SOC 2 certified
							</span>
						</motion.div>

						{/* Feature Pills */}
						<div className="mt-10 flex flex-wrap gap-2 justify-center lg:justify-start">
							{heroFeatures.map((feature, index) => (
								<button
									key={feature.id}
									onClick={() => setActiveIndex(index)}
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
									className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
										index === activeIndex
											? `bg-gradient-to-r ${feature.color} text-white`
											: "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
									}`}
								>
									{feature.title}
								</button>
							))}
						</div>
					</div>

					{/* Right Mockup */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2 }}
						className="relative"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						{/* Glow Effect */}
						<div
							className={`absolute -inset-4 bg-gradient-to-r ${activeFeature.color} opacity-20 blur-3xl rounded-3xl`}
						/>

						{/* Mockup Container */}
						<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm">
							<AnimatePresence mode="wait">
								<motion.div
									key={`mockup-${activeIndex}`}
									initial={{ opacity: 0, x: 50 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -50 }}
									transition={{ duration: 0.4 }}
								>
									{renderMockup()}
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Floating Elements */}
						<motion.div
							animate={{ y: [0, -10, 0] }}
							transition={{ duration: 3, repeat: Infinity }}
							className="absolute -top-6 -right-6 p-3 bg-gray-800 rounded-xl border border-white/10 shadow-xl"
						>
							<Image
								src="/melpAI.svg"
								alt="Melp AI"
								width={24}
								height={24}
								className="w-full h-full"
							/>
						</motion.div>
						<motion.div
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 4, repeat: Infinity, delay: 1 }}
							className="absolute -bottom-4 -left-4 p-3 bg-gray-800 rounded-xl border border-white/10 shadow-xl"
						>
							<Brain className="w-6 h-6 text-pink-400" />
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

// Social Proof Section
function SocialProofSection() {
	// Trusted brand names for display
	const trustedBrands = [
		"Logo one",
		"Logo two",
		"Logo three",
		"Logo four",
		"Logo five",
		"Logo six",
		"Logo seven",
		"Logo eight",
	];

	return (
		<section className="py-20 border-t border-white/5">
			<div className="max-w-7xl mx-auto px-6">
				{/* Stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
					{stats.map((stat) => (
						<RevealOnScroll key={stat.id} delay={0.1}>
							<div className="text-center">
								<div className="text-4xl md:text-5xl font-bold text-white mb-2">
									<CounterAnimation value={stat.value} suffix={stat.suffix} />
								</div>
								<div className="text-gray-400">{stat.label}</div>
							</div>
						</RevealOnScroll>
					))}
				</div>

				{/* Trusted By */}
				<div className="text-center mb-8">
					<p className="text-sm text-gray-500 uppercase tracking-wider">
						Trusted by leading companies worldwide
					</p>
				</div>
				<div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
					{trustedBrands.map((brand) => (
						<div
							key={brand}
							className="text-gray-500 font-semibold text-lg hover:text-gray-300 transition-colors"
						>
							{brand}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

// AI Features Showcase Section - ClickUp Brain Style
function AIFeaturesShowcase() {
	const features = [
		{
			id: "draft",
			badge: "AI Drafting",
			title: "Draft messages in seconds",
			subtitle: "with AI that understands context",
			description:
				"Generate professional messages instantly. Choose your tone, provide context, and let AI craft the perfect response. From emails to chat messages, Draft For Me handles it all.",
			highlights: [
				"Multiple tone options",
				"Context-aware responses",
				"One-click generation",
			],
			icon: MessageSquare,
			color: "from-blue-500 to-cyan-500",
			mockup: <MelpChatPanel />,
		},
		{
			id: "translate",
			badge: "Real-time Translation",
			title: "Break language barriers",
			subtitle: "instantly across 50+ languages",
			description:
				"Communicate with anyone, anywhere. Our AI translation preserves meaning and tone, ensuring your message lands perfectly in any language.",
			highlights: [
				"50+ languages",
				"Context preservation",
				"Instant translation",
			],
			icon: Languages,
			color: "from-purple-500 to-pink-500",
			mockup: <MelpTranslatorModal />,
		},
		{
			id: "summary",
			badge: "Meeting Intelligence",
			title: "Never miss a detail",
			subtitle: "with AI-powered meeting summaries",
			description:
				"Get comprehensive meeting summaries in seconds. Key points, action items, and decisions are automatically extracted and organized for easy reference.",
			highlights: [
				"Auto key points",
				"Action item tracking",
				"Decision logging",
			],
			icon: FileText,
			color: "from-orange-500 to-red-500",
			mockup: <MelpAISummaryModal />,
		},
		{
			id: "captions",
			badge: "Accessibility",
			title: "Make every meeting inclusive",
			subtitle: "with live captions & transcription",
			description:
				"Real-time captions with speaker identification and multi-language support. Everyone can follow along, regardless of hearing ability or language.",
			highlights: [
				"Speaker identification",
				"Multi-language support",
				"Real-time accuracy",
			],
			icon: Mic,
			color: "from-green-500 to-emerald-500",
			mockup: <MelpLiveCaptions />,
		},
		{
			id: "assistant",
			badge: "AI Assistant",
			title: "Your intelligent companion",
			subtitle: "for any question or task",
			description:
				"Ask anything, get instant answers. From scheduling meetings to researching topics, your AI assistant is always ready to help.",
			highlights: ["Natural language", "Context memory", "Task automation"],
			icon: Brain,
			color: "from-violet-500 to-purple-500",
			mockup: <MelpAIAssistant />,
		},
		{
			id: "evaluation",
			badge: "Smart Analysis",
			title: "Evaluate with precision",
			subtitle: "using AI-powered scoring",
			description:
				"Review CVs, proposals, and documents with AI-driven analysis. Get detailed scores, strengths, and areas for improvement in seconds.",
			highlights: [
				"Detailed scoring",
				"Actionable feedback",
				"Bias-free analysis",
			],
			icon: ClipboardCheck,
			color: "from-rose-500 to-pink-500",
			mockup: <MelpEvaluationPanel />,
		},
	];

	return (
		<section className="py-24">
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<RevealOnScroll>
					<div className="text-center mb-20">
						<span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
							AI Features
						</span>
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
							Everything you need,{" "}
							<span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
								powered by AI
							</span>
						</h2>
						<p className="text-lg text-gray-400 max-w-2xl mx-auto">
							A comprehensive suite of AI tools designed to enhance
							communication, boost productivity, and enable global
							collaboration.
						</p>
					</div>
				</RevealOnScroll>

				{/* Feature Showcase - Alternating Layout */}
				<div className="space-y-32">
					{features.map((feature, index) => {
						const isReversed = index % 2 === 1;
						const Icon = feature.icon;

						return (
							<RevealOnScroll key={feature.id}>
								<div
									className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
										isReversed ? "lg:flex-row-reverse" : ""
									}`}
								>
									{/* Content Side */}
									<div
										className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}
									>
										{/* Badge */}
										<div
											className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r ${feature.color} bg-opacity-10 mb-6`}
										>
											<Icon className="w-4 h-4 text-white" />
											<span className="text-sm font-medium text-white">
												{feature.badge}
											</span>
										</div>

										{/* Title */}
										<h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
											{feature.title}
										</h3>
										<h4
											className={`text-2xl md:text-3xl font-bold bg-linear-to-r ${feature.color} bg-clip-text text-transparent mb-6`}
										>
											{feature.subtitle}
										</h4>

										{/* Description */}
										<p className="text-lg text-gray-400 mb-8">
											{feature.description}
										</p>

										{/* Highlights */}
										<div className="flex flex-wrap gap-3 mb-8">
											{feature.highlights.map((highlight) => (
												<span
													key={highlight}
													className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
												>
													<Check className="w-4 h-4 text-green-400" />
													{highlight}
												</span>
											))}
										</div>

										{/* CTA */}
										<a
											href="https://www.app.melp.us/spa/index#signup"
											className={`group inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r ${feature.color} rounded-sm font-semibold text-white hover:opacity-90 transition-all`}
										>
											Get Started
											<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
										</a>
									</div>

									{/* Mockup Side */}
									<div
										className={`relative ${
											isReversed ? "lg:order-1" : "lg:order-2"
										}`}
									>
										{/* Glow Effect */}
										<div
											className={`absolute -inset-8 bg-linear-to-r ${feature.color} opacity-15 blur-3xl rounded-3xl`}
										/>

										{/* Mockup Container */}
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.6, delay: 0.2 }}
											className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900/80 backdrop-blur-xs shadow-2xl"
										>
											{feature.mockup}
										</motion.div>

										{/* Floating Accent */}
										<motion.div
											animate={{ y: [0, -8, 0] }}
											transition={{ duration: 3, repeat: Infinity }}
											className={`absolute -top-4 ${
												isReversed ? "-left-4" : "-right-4"
											} p-3 bg-linear-to-br ${
												feature.color
											} rounded-xl shadow-xl`}
										>
											<Icon className="w-5 h-5 text-white" />
										</motion.div>
									</div>
								</div>
							</RevealOnScroll>
						);
					})}
				</div>
			</div>
		</section>
	);
}

// Benefits Section
function BenefitsSection() {
	return (
		<section className="py-24 relative">
			{/* Background */}
			<div className="absolute inset-0 bg-linear-to-b from-purple-500/5 via-transparent to-transparent" />

			<div className="relative max-w-7xl mx-auto px-6">
				<RevealOnScroll>
					<div className="text-center mb-16">
						<span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-6">
							Why Choose Melp AI
						</span>
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
							Benefits that{" "}
							<span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
								transform work
							</span>
						</h2>
					</div>
				</RevealOnScroll>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{benefits.map((benefit) => (
						<RevealOnScroll key={benefit.id} delay={0.1}>
							<motion.div
								whileHover={{ y: -5 }}
								className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all h-full"
							>
								<div
									className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${benefit.color}`}
								>
									<benefit.icon className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-2">
									{benefit.title}
								</h3>
								<p className="text-gray-400">{benefit.description}</p>
							</motion.div>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
}

// Use Cases Section
function UseCasesSection() {
	return (
		<section className="py-24">
			<div className="max-w-7xl mx-auto px-6">
				<RevealOnScroll>
					<div className="text-center mb-16">
						<span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
							Use Cases
						</span>
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
							Built for every{" "}
							<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
								team
							</span>
						</h2>
						<p className="text-lg text-gray-400 max-w-2xl mx-auto">
							See how different teams use Melp AI to transform their workflows.
						</p>
					</div>
				</RevealOnScroll>

				<div className="grid md:grid-cols-2 gap-6">
					{useCases.map((useCase) => (
						<RevealOnScroll key={useCase.id} delay={0.1}>
							<motion.div
								whileHover={{ scale: 1.02 }}
								className="group p-8 rounded-2xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all"
							>
								<div className="flex items-start gap-4">
									<div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
										<useCase.icon className="w-7 h-7 text-blue-400" />
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-semibold text-white mb-2">
											{useCase.title}
										</h3>
										<p className="text-gray-400 mb-4">{useCase.description}</p>
										<div className="flex items-center gap-2">
											<TrendingUp className="w-4 h-4 text-green-400" />
											<span className="text-sm text-green-400 font-medium">
												{useCase.stat}
											</span>
										</div>
									</div>
									<ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
								</div>
							</motion.div>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
}

// CTA Section
function CTASection() {
	return (
		<section className="py-24 relative overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
			</div>

			<div className="relative max-w-4xl mx-auto px-6 text-center">
				<RevealOnScroll>
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
						<Award className="w-4 h-4 text-yellow-400" />
						<span className="text-sm text-gray-300">
							Rated #1 AI Communication Tool
						</span>
					</div>
				</RevealOnScroll>

				<RevealOnScroll delay={0.1}>
					<h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
						Ready to transform{" "}
						<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
							how you work?
						</span>
					</h2>
				</RevealOnScroll>

				<RevealOnScroll delay={0.2}>
					<p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
						Join thousands of teams already using Melp AI to communicate
						smarter, collaborate globally, and achieve more.
					</p>
				</RevealOnScroll>

				<RevealOnScroll delay={0.3}>
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
						<button className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg text-white hover:opacity-90 transition-all flex items-center justify-center gap-2">
							Get Started Free
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</button>
						<button className="px-10 py-5 bg-white/5 border border-white/10 rounded-xl font-semibold text-lg text-white hover:bg-white/10 transition-all">
							Schedule Demo
						</button>
					</div>
				</RevealOnScroll>

				<RevealOnScroll delay={0.4}>
					<div className="flex items-center justify-center gap-8 text-sm text-gray-500">
						<span className="flex items-center gap-2">
							<Check className="w-4 h-4 text-green-400" />
							Free forever plan
						</span>
						<span className="flex items-center gap-2">
							<Check className="w-4 h-4 text-green-400" />
							No credit card required
						</span>
						<span className="flex items-center gap-2">
							<Check className="w-4 h-4 text-green-400" />
							Cancel anytime
						</span>
					</div>
				</RevealOnScroll>
			</div>
		</section>
	);
}

// Main AI Page Component
export default function AIPage() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HeroSection />
			<SocialProofSection />
			<AIFeaturesShowcase />
			<BenefitsSection />
			<UseCasesSection />
			<CTASection />
		</div>
	);
}
