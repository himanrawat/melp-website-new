"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import MelpTranslatorModal from "@/components/mockups/MelpTranslatorModal";
import MelpAISummaryModal from "@/components/mockups/MelpAISummaryModal";
import MelpLiveCaptions from "@/components/mockups/MelpLiveCaptions";
import MelpEvaluationPanel from "@/components/mockups/MelpEvaluationPanel";
import MelpChatPanel from "@/components/mockups/MelpChatPanel";

export function BentoFeatures() {
	const headerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: headerRef,
		offset: ["start end", "end start"],
	});

	const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);
	const headerOpacity = useTransform(
		scrollYProgress,
		[0, 0.3, 0.6, 1],
		[0, 1, 1, 0]
	);
	const headerScale = useTransform(
		scrollYProgress,
		[0, 0.3, 0.6, 1],
		[0.9, 1, 1, 0.95]
	);

	const features = [
		{
			title: "Translate any file",
			description:
				"Pick a language in Melp Drive and we return a fresh copy without touching the original layout.",
			skeleton: <MelpTranslatorModal className="mt-4 scale-95 origin-top" />,
			className: "col-span-1 lg:col-span-3",
			cardBg: "bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900",
		},
		{
			title: "Instant file summaries",
			description:
				"Open a file in Melp Chats, ask for a summary, and follow up in the language you prefer.",
			skeleton: <MelpAISummaryModal className="mt-4 scale-95 origin-top" />,
			className: "col-span-1 lg:col-span-3",
			cardBg: "bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800/50 dark:to-neutral-900",
		},
		{
			title: "Real-time transcription",
			description:
				"Live multilingual captions keep everyone in sync across calls and presentations.",
			skeleton: <MelpLiveCaptions className="mt-4" expanded />,
			className: "col-span-1 lg:col-span-6",
			cardBg: "bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900",
		},
		{
			title: "AI evaluation mode",
			description:
				"See tab switches, eye gaze, and AI-suggested questions tailored to the JD and resume.",
			skeleton: <MelpEvaluationPanel className="mt-4 scale-95 origin-top" />,
			className: "col-span-1 lg:col-span-3",
			cardBg: "bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800/50 dark:to-neutral-900",
		},
		{
			title: "Draft for me",
			description:
				"Turn rough notes into polished responses in any tone - professional, casual, or concise.",
			skeleton: <MelpChatPanel className="mt-4 scale-95 origin-top" />,
			className: "col-span-1 lg:col-span-3",
			cardBg: "bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900",
		},
	];

	return (
		<section className="relative z-20 py-10 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<motion.div
				ref={headerRef}
				className="text-center mb-12 flex flex-col items-center"
				style={{ opacity: headerOpacity, scale: headerScale, y: headerY }}
			>
				<motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-500/10 text-[#EE4136] text-sm font-medium mb-6">
					<svg
						className="w-5 h-5"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.4663 22C11.2835 17.739 11.2835 17.739 11.4663 22C8.6409 15.7182 6.50125 13.7431 0 11.4663C4.26101 11.2835 4.26101 11.2835 0 11.4663C6.2818 8.6409 8.25686 6.50125 10.5337 0C10.7165 4.26101 10.7165 4.26101 10.5337 0C13.3591 6.2818 15.4988 8.25686 22 10.5337C17.739 10.7165 17.739 10.7165 22 10.5337C15.7182 13.3591 13.7431 15.4988 11.4663 22Z"
							fill="currentColor"
						/>
					</svg>
					Melp AI
				</motion.span>

				<motion.h2 className="text-3xl lg:text-5xl font-medium text-neutral-900 dark:text-white mb-4">
					Where your work
				</motion.h2>
				<motion.h2 className="text-3xl lg:text-5xl font-medium text-neutral-700 dark:text-neutral-300">
					meets instant assistance
				</motion.h2>
			</motion.div>

			<div className="relative">
				<div className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-5">
					{features.map((feature) => (
						<FeatureCard
							key={feature.title}
							className={feature.className}
							backgroundClassName={feature.cardBg}
						>
							<FeatureTitle>{feature.title}</FeatureTitle>
							{feature.description && (
								<FeatureDescription>{feature.description}</FeatureDescription>
							)}
							<div className="h-full w-full">{feature.skeleton}</div>
						</FeatureCard>
					))}
				</div>
			</div>
		</section>
	);
}

const FeatureCard = ({
	children,
	className,
	backgroundClassName,
}: {
	children?: React.ReactNode;
	className?: string;
	backgroundClassName?: string;
}) => {
	return (
		<div
			className={cn(
				`p-6 sm:p-8 relative overflow-hidden rounded-2xl bg-[#F8FAFF] dark:bg-neutral-900 transition-colors border border-neutral-200/60 dark:border-neutral-700/50 shadow-sm hover:shadow-md dark:shadow-none`,
				backgroundClassName,
				className
			)}
		>
			{children}
		</div>
	);
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
	return (
		<p className="text-left tracking-tight text-neutral-900 dark:text-white text-xl md:text-2xl font-medium">
			{children}
		</p>
	);
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
	return (
		<p className="text-sm md:text-base text-left text-neutral-500 dark:text-neutral-400 mt-2 max-w-sm">
			{children}
		</p>
	);
};
