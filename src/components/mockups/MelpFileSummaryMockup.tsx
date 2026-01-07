"use client";

import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { FileText, X, Send } from "lucide-react";

interface MelpFileSummaryMockupProps {
	className?: string;
}

// Dummy data
const fileData = {
	name: "Q4_Sales_Report.docx",
	size: "156 KB",
	sender: "Sarah Johnson",
	badge: "CO-WORKER",
	timestamp: "10:32 AM",
};

const summaryData = {
	overview:
		"This document presents the quarterly sales performance for Q4 2025, comparing results against targets and previous quarters.",
	keyFindings: [
		"Revenue increased by 23% compared to Q3",
		"Top performing region: North America",
		"New client acquisitions exceeded target by 15%",
		"Product line expansion contributed 30% of growth",
	],
};

const qaData = {
	question: "What was the total revenue for Q4?",
	answer:
		"The total revenue for Q4 2025 was $4.2 million, representing a 23% increase from Q3's $3.4 million. This exceeded the quarterly target of $3.8 million by 10.5%.",
};

export default function MelpFileSummaryMockup({
	className = "",
}: MelpFileSummaryMockupProps) {
	// Animation phases
	const [phase, setPhase] = useState(0);
	const [showPanel, setShowPanel] = useState(false);
	const [overviewText, setOverviewText] = useState("");
	const [visibleFindings, setVisibleFindings] = useState<number[]>([]);
	const [showAskSection, setShowAskSection] = useState(false);
	const [questionText, setQuestionText] = useState("");
	const [answerText, setAnswerText] = useState("");
	const [isButtonClicked, setIsButtonClicked] = useState(false);

	const panelRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let isMounted = true;
		const timers: ReturnType<typeof setTimeout>[] = [];

		const delay = (ms: number) =>
			new Promise<void>((resolve) => {
				const timeout = setTimeout(resolve, ms);
				timers.push(timeout);
			});

		const typeText = async (
			text: string,
			setter: React.Dispatch<React.SetStateAction<string>>,
			speed: number = 30
		) => {
			const words = text.split(" ");
			for (const word of words) {
				if (!isMounted) return;
				setter((prev) => (prev ? prev + " " + word : word));
				await delay(speed + Math.random() * 20);
			}
		};

		const runAnimation = async () => {
			if (!isMounted) return;

			// Reset all states
			setPhase(0);
			setShowPanel(false);
			setOverviewText("");
			setVisibleFindings([]);
			setShowAskSection(false);
			setQuestionText("");
			setAnswerText("");
			setIsButtonClicked(false);

			// Phase 1: Show chat area with file message
			await delay(500);
			if (!isMounted) return;
			setPhase(1);

			// Phase 2: Click summarize button
			await delay(1500);
			if (!isMounted) return;
			setIsButtonClicked(true);
			await delay(300);
			if (!isMounted) return;
			setIsButtonClicked(false);

			// Phase 3: Show summary panel
			await delay(400);
			if (!isMounted) return;
			setShowPanel(true);
			setPhase(3);

			// Phase 4: Type overview
			await delay(600);
			if (!isMounted) return;
			await typeText(summaryData.overview, setOverviewText, 25);

			// Phase 5: Show key findings one by one
			await delay(400);
			for (let i = 0; i < summaryData.keyFindings.length; i++) {
				if (!isMounted) return;
				setVisibleFindings((prev) => [...prev, i]);
				await delay(400);
			}

			// Phase 6: Show ask section
			await delay(600);
			if (!isMounted) return;
			setShowAskSection(true);

			// Phase 7: Type question
			await delay(500);
			if (!isMounted) return;
			await typeText(qaData.question, setQuestionText, 40);

			// Phase 8: Click ASK button and show answer
			await delay(800);
			if (!isMounted) return;
			await typeText(qaData.answer, setAnswerText, 20);

			// Hold final state
			await delay(4000);

			// Restart
			if (isMounted) {
				runAnimation();
			}
		};

		runAnimation();

		return () => {
			isMounted = false;
			timers.forEach(clearTimeout);
		};
	}, []);

	// Auto-scroll panel
	useEffect(() => {
		if (panelRef.current) {
			panelRef.current.scrollTop = panelRef.current.scrollHeight;
		}
	}, [overviewText, visibleFindings, questionText, answerText]);

	return (
		<div
			className={`relative bg-[#0a0a0a] rounded-xl overflow-hidden ${className}`}
		>
			<div className="flex h-[420px]">
				{/* Left Side - Chat Area */}
				<div className="flex-1 bg-[#1a1a1a] p-4 flex flex-col">
					{/* Chat Header */}
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : -10 }}
						transition={{ duration: 0.4 }}
						className="flex items-center gap-3 pb-3 border-b border-gray-800"
					>
						<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
							<span className="text-white font-medium">
								{fileData.sender.charAt(0)}
							</span>
						</div>
						<div>
							<div className="flex items-center gap-2">
								<span className="text-white font-medium">
									{fileData.sender}
								</span>
								<span className="text-[10px] px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded">
									{fileData.badge}
								</span>
							</div>
							<span className="text-gray-500 text-xs">Online</span>
						</div>
					</motion.div>

					{/* Chat Content */}
					<div className="flex-1 flex flex-col justify-end py-4">
						{/* File Message */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 20 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="bg-[#2d2d2d] rounded-lg p-3 max-w-[280px]"
						>
							{/* File Card */}
							<div className="flex items-center gap-3 p-2 bg-[#1a1a1a] rounded-md">
								<div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
									<FileText className="w-5 h-5 text-white" />
								</div>
								<div className="flex-1 min-w-0">
									<p className="text-white text-sm font-medium truncate">
										{fileData.name}
									</p>
									<p className="text-gray-500 text-xs">{fileData.size}</p>
								</div>
							</div>

							{/* Summarize Button */}
							<div className="flex items-center justify-between mt-3">
								<motion.button
									animate={{
										scale: isButtonClicked ? 0.95 : 1,
										boxShadow:
											phase >= 1 && phase < 3
												? "0 0 0 2px rgba(239, 68, 68, 0.5)"
												: "none",
									}}
									transition={{ duration: 0.15 }}
									className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium rounded-md transition-colors"
								>
									Summarize
								</motion.button>
								<span className="text-gray-500 text-xs">
									{fileData.timestamp}
								</span>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Right Side - Summary Panel */}
				<motion.div
					initial={{ x: "100%", opacity: 0 }}
					animate={{
						x: showPanel ? 0 : "100%",
						opacity: showPanel ? 1 : 0,
					}}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
					className="w-[320px] bg-[#1e1e1e] border-l border-gray-800 flex flex-col"
				>
					{/* Panel Header */}
					<div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
						<div>
							<h3 className="text-white font-medium text-sm">File summary</h3>
							<p className="text-gray-500 text-xs">
								Stay in the chat while we summarize
							</p>
						</div>
						<button className="w-6 h-6 rounded hover:bg-gray-700 flex items-center justify-center">
							<X className="w-4 h-4 text-gray-400" />
						</button>
					</div>

					{/* Panel Content */}
					<div
						ref={panelRef}
						className="flex-1 overflow-y-auto p-4 space-y-4"
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
					>
						{/* File Info */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: showPanel ? 1 : 0 }}
							transition={{ delay: 0.2 }}
							className="flex items-center gap-3 p-2 bg-[#2d2d2d] rounded-lg"
						>
							<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
								<FileText className="w-4 h-4 text-white" />
							</div>
							<div className="flex-1 min-w-0">
								<p className="text-white text-sm font-medium truncate">
									{fileData.name}
								</p>
								<p className="text-gray-500 text-xs">{fileData.size}</p>
							</div>
							<span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded">
								Ready
							</span>
						</motion.div>

						{/* Summary Section */}
						<div>
							<h4 className="text-white font-medium text-sm mb-2">Summary</h4>

							{/* Overview */}
							{overviewText && (
								<div className="mb-3">
									<p className="text-gray-400 text-xs font-medium mb-1">
										Overview
									</p>
									<p className="text-gray-300 text-xs leading-relaxed">
										{overviewText}
										{overviewText.length < summaryData.overview.length && (
											<motion.span
												className="inline-block w-0.5 h-3 bg-red-500 ml-1 align-middle"
												animate={{ opacity: [1, 0] }}
												transition={{ duration: 0.4, repeat: Infinity }}
											/>
										)}
									</p>
								</div>
							)}

							{/* Key Findings */}
							{visibleFindings.length > 0 && (
								<div>
									<p className="text-gray-400 text-xs font-medium mb-2">
										Key Findings
									</p>
									<ul className="space-y-1.5">
										{summaryData.keyFindings.map((finding, index) => (
											<motion.li
												key={index}
												initial={{ opacity: 0, x: -10 }}
												animate={{
													opacity: visibleFindings.includes(index) ? 1 : 0,
													x: visibleFindings.includes(index) ? 0 : -10,
												}}
												transition={{ duration: 0.3 }}
												className="flex items-start gap-2 text-gray-300 text-xs"
											>
												<span className="text-red-400 mt-0.5">•</span>
												<span>{finding}</span>
											</motion.li>
										))}
									</ul>
								</div>
							)}
						</div>

						{/* Ask About File Section */}
						{showAskSection && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4 }}
								className="border-t border-gray-700 pt-4"
							>
								<h4 className="text-white font-medium text-sm mb-3">
									Ask about this file
								</h4>

								{/* User Question */}
								{questionText && (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-2 mb-3"
									>
										<p className="text-blue-300 text-xs">
											{questionText}
											{questionText.length < qaData.question.length && (
												<motion.span
													className="inline-block w-0.5 h-3 bg-blue-400 ml-1 align-middle"
													animate={{ opacity: [1, 0] }}
													transition={{ duration: 0.4, repeat: Infinity }}
												/>
											)}
										</p>
									</motion.div>
								)}

								{/* AI Answer */}
								{answerText && (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										className="bg-[#2d2d2d] rounded-lg p-2 mb-3"
									>
										<p className="text-gray-300 text-xs leading-relaxed">
											{answerText}
											{answerText.length < qaData.answer.length && (
												<motion.span
													className="inline-block w-0.5 h-3 bg-red-500 ml-1 align-middle"
													animate={{ opacity: [1, 0] }}
													transition={{ duration: 0.4, repeat: Infinity }}
												/>
											)}
										</p>
									</motion.div>
								)}

								{/* Input Field */}
								<div className="flex items-center gap-2">
									<div className="flex-1 bg-[#2d2d2d] rounded-lg px-3 py-2">
										<span className="text-gray-500 text-xs">
											Ask a question...
										</span>
									</div>
									<button className="w-8 h-8 bg-red-500 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
										<Send className="w-4 h-4 text-white" />
									</button>
								</div>
							</motion.div>
						)}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
