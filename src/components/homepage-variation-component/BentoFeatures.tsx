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
			title: "Instant translation",
			description:
				"Documents stay formatted. Meaning stays intact. Any language, any file.",
			skeleton: <MelpTranslatorModal className="mt-4 scale-95 origin-top" />,
			className: "col-span-1 lg:col-span-3",
			cardBg: "bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900",
		},
		{
			title: "Smart summaries",
			description:
				"Get the point in seconds. Ask follow-ups in any language you prefer.",
			skeleton: <MelpAISummaryModal className="mt-4 scale-95 origin-top" />,
			className: "col-span-1 lg:col-span-3",
			cardBg: "bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800/50 dark:to-neutral-900",
		},
		{
			title: "Live understanding",
			description:
				"Every word captured. Every language supported. Real-time clarity for every call.",
			skeleton: <MelpLiveCaptions className="mt-4" expanded />,
			className: "col-span-1 lg:col-span-6",
			cardBg: "bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900",
		},
		{
			title: "Interview intelligence",
			description:
				"AI-powered insights that keep interviews fair, focused, and effective.",
			skeleton: <MelpEvaluationPanel className="mt-4 scale-95 origin-top" />,
			className: "col-span-1 lg:col-span-3",
			cardBg: "bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800/50 dark:to-neutral-900",
		},
		{
			title: "Write with AI",
			description:
				"From rough notes to polished messages. Your tone, perfected.",
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
			>
				<motion.span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
				Melp AI
			</motion.span>

				<motion.h2 className="text-3xl lg:text-5xl font-medium text-neutral-900 dark:text-white mb-4">
					AI that understands.
				</motion.h2>
				<motion.h2 className="text-3xl lg:text-5xl font-medium text-neutral-700 dark:text-neutral-300">
					AI that acts.
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
