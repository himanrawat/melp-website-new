"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { FileText, ChevronRight, Check } from "lucide-react";

interface SummaryItem {
	id: number;
	text: string;
	category: "key-point" | "action" | "decision";
}

interface MelpAISummaryModalProps {
	className?: string;
}

const summaryItems: SummaryItem[] = [
	{ id: 1, text: "Q1 revenue exceeded targets by 15%", category: "key-point" },
	{
		id: 2,
		text: "New product launch scheduled for March 15th",
		category: "decision",
	},
	{
		id: 3,
		text: "Sarah to finalize marketing budget by Friday",
		category: "action",
	},
	{ id: 4, text: "Customer retention improved to 92%", category: "key-point" },
	{ id: 5, text: "Expand engineering team by 3 hires", category: "action" },
];

const categoryColors = {
	"key-point": {
		bg: "bg-blue-500/20",
		text: "text-blue-400",
		label: "Key Point",
	},
	action: {
		bg: "bg-green-500/20",
		text: "text-green-400",
		label: "Action Item",
	},
	decision: {
		bg: "bg-purple-500/20",
		text: "text-purple-400",
		label: "Decision",
	},
};

export default function MelpAISummaryModal({
	className = "",
}: MelpAISummaryModalProps) {
	const [visibleItems, setVisibleItems] = useState<number[]>([]);
	const [isGenerating, setIsGenerating] = useState(false);
	const [activeTab, setActiveTab] = useState<"summary" | "transcript">(
		"summary"
	);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		let isMounted = true;
		const timers: ReturnType<typeof setTimeout>[] = [];

		const delay = (ms: number) =>
			new Promise<void>((resolve) => {
				const timeout = setTimeout(resolve, ms);
				timers.push(timeout);
			});

		const runAnimation = async () => {
			if (!isMounted) return;
			// Reset
			setVisibleItems([]);
			setIsGenerating(true);
			setProgress(0);
			setActiveTab("summary");

			// Show progress
			for (let p = 0; p <= 100; p += 5) {
				if (!isMounted) return;
				setProgress(p);
				await delay(50);
			}

			if (!isMounted) return;
			setIsGenerating(false);
			await delay(300);

			// Show items one by one
			for (const item of summaryItems) {
				if (!isMounted) return;
				setVisibleItems((prev) => [...prev, item.id]);
				await delay(400);
			}

			if (!isMounted) return;
			// Wait and restart
			await delay(4000);
		};

		runAnimation();
		const interval = setInterval(runAnimation, 10000);
		return () => {
			isMounted = false;
			clearInterval(interval);
			timers.forEach(clearTimeout);
		};
	}, []);

	return (
		<div
			className={`relative bg-[#2d2d2d] rounded-xl overflow-hidden border border-gray-700 ${className}`}
		>
			{/* Header */}
			<div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
				<div className="flex items-center gap-2">
					<div className="w-7 h-7 rounded-lg flex items-center justify-center">
						<FileText className="w-4 h-4 text-white" />
					</div>
					<div>
						<span className="text-white font-medium block">
							AI Meeting Summary
						</span>
						<span className="text-gray-400 text-xs">Q1 Strategy Review</span>
					</div>
				</div>
				<div className="flex items-center gap-1 px-2 py-0.5 bg-red-500/10 rounded">
					<Image
						src="/melpAI.svg"
						alt="Melp AI"
						width={12}
						height={12}
						className="w-3 h-3"
					/>
					<span className="text-xs text-red-400">Melp AI</span>
				</div>
			</div>

			{/* Tabs */}
			<div className="flex border-b border-gray-700">
				<button
					onClick={() => setActiveTab("summary")}
					className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
						activeTab === "summary"
							? "text-white border-b-2 border-red-500"
							: "text-gray-400 hover:text-gray-300"
					}`}
				>
					Summary
				</button>
				<button
					onClick={() => setActiveTab("transcript")}
					className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
						activeTab === "transcript"
							? "text-white border-b-2 border-red-500"
							: "text-gray-400 hover:text-gray-300"
					}`}
				>
					Full Transcript
				</button>
			</div>

			{/* Content */}
			<div
				className="p-4 h-80 overflow-y-auto scrollbar-hide"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				{/* Generating State */}
				<AnimatePresence>
					{isGenerating && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="flex flex-col items-center justify-center py-8"
						>
							<motion.div
								className="w-12 h-12 rounded-full border-2 border-red-500/20 border-t-red-500"
								animate={{ rotate: 360 }}
								transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
							/>
							<p className="text-gray-300 mt-4 text-sm">Analyzing meeting...</p>
							<div className="w-48 h-1.5 bg-[#3d3d3d] rounded-full mt-3 overflow-hidden">
								<motion.div
									className="h-full rounded-full"
									style={{ width: `${progress}%` }}
								/>
							</div>
							<p className="text-gray-500 text-xs mt-2">{progress}%</p>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Summary Items */}
				{!isGenerating && (
					<div className="space-y-3">
						<AnimatePresence>
							{summaryItems
								.filter((item) => visibleItems.includes(item.id))
								.map((item, index) => (
									<motion.div
										key={item.id}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											type: "spring",
											stiffness: 300,
											damping: 25,
										}}
										className="flex items-start gap-3 p-3 bg-[#1a1a1a] rounded-lg"
									>
										<div
											className={`w-6 h-6 rounded flex items-center justify-center shrink-0 ${
												categoryColors[item.category].bg
											}`}
										>
											<Check
												className={`w-3 h-3 ${
													categoryColors[item.category].text
												}`}
											/>
										</div>
										<div className="flex-1">
											<p className="text-gray-200 text-sm">{item.text}</p>
											<span
												className={`text-xs ${
													categoryColors[item.category].text
												} mt-1 inline-block`}
											>
												{categoryColors[item.category].label}
											</span>
										</div>
										<ChevronRight className="w-4 h-4 text-gray-500" />
									</motion.div>
								))}
						</AnimatePresence>
					</div>
				)}
			</div>

			{/* Footer */}
			<div className="flex items-center justify-between px-4 py-3 border-t border-gray-700 bg-[#242424]">
				<div className="flex items-center gap-2 text-gray-400 text-xs">
					<span>Meeting Duration: 45 min</span>
					<span>•</span>
					<span>4 Participants</span>
				</div>
				<button className="px-3 py-1.5 bg-red-500 text-white text-xs font-medium rounded-lg flex items-center gap-1">
					<FileText className="w-3 h-3" />
					Export
				</button>
			</div>
		</div>
	);
}
