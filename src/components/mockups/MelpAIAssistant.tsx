"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";

interface MelpAIAssistantProps {
	className?: string;
}

const conversations = [
	{
		question: "What were the key points from today's meeting?",
		answer:
			"Today's meeting covered: 1) Q1 revenue exceeded targets by 15%, 2) New product launch set for March 15th, 3) Customer retention improved to 92%, and 4) Decision to expand the engineering team.",
	},
	{
		question: "Summarize the partnership proposal from Acme Corp",
		answer:
			"Acme Corp proposes a 3-year partnership with 20% revenue sharing, joint marketing campaigns, and exclusive API access. Key terms include $500K minimum annual commitment and 90-day cancellation notice.",
	},
	{
		question: "Draft a follow-up email to the client",
		answer:
			"Subject: Following Up on Our Discussion\n\nDear [Client],\n\nThank you for your time today. I wanted to follow up on the key points we discussed and confirm our next steps. Please let me know if you have any questions.\n\nBest regards",
	},
];

export default function MelpAIAssistant({
	className = "",
}: MelpAIAssistantProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [questionText, setQuestionText] = useState("");
	const [answerText, setAnswerText] = useState("");
	const [phase, setPhase] = useState<
		"idle" | "typing-question" | "thinking" | "typing-answer" | "complete"
	>("idle");
	const [showResponse, setShowResponse] = useState(false);

	useEffect(() => {
		let isMounted = true;
		let timeoutId: NodeJS.Timeout;

		const delay = (ms: number) =>
			new Promise<void>((resolve) => {
				timeoutId = setTimeout(resolve, ms);
			});

		const runAnimation = async () => {
			if (!isMounted) return;

			const conversation = conversations[currentIndex];

			// Reset state
			setQuestionText("");
			setAnswerText("");
			setShowResponse(false);
			setPhase("idle");

			await delay(800);
			if (!isMounted) return;

			// Type question
			setPhase("typing-question");
			for (let i = 0; i <= conversation.question.length; i++) {
				if (!isMounted) return;
				setQuestionText(conversation.question.slice(0, i));
				await delay(35);
			}

			await delay(400);
			if (!isMounted) return;

			// Thinking
			setPhase("thinking");
			setShowResponse(true);
			await delay(1500);
			if (!isMounted) return;

			// Type answer
			setPhase("typing-answer");
			for (let i = 0; i <= conversation.answer.length; i++) {
				if (!isMounted) return;
				setAnswerText(conversation.answer.slice(0, i));
				await delay(12);
			}

			setPhase("complete");
			await delay(4000);
			if (!isMounted) return;

			// Move to next conversation
			setCurrentIndex((prev) => (prev + 1) % conversations.length);
		};

		runAnimation();

		return () => {
			isMounted = false;
			clearTimeout(timeoutId);
		};
	}, [currentIndex]);

	return (
		<div
			className={`relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 ${className}`}
		>
			{/* Header */}
			<div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#242424]">
				<div className="flex items-center gap-3">
					<div className="w-8 h-8 rounded-lg flex items-center justify-center">
						<Bot className="w-5 h-5 text-white" />
					</div>
					<div>
						<span className="text-white font-medium block">
							Melp AI Assistant
						</span>
						<span className="text-green-400 text-xs flex items-center gap-1">
							<span className="w-1.5 h-1.5 rounded-full bg-green-400" />
							Ready to help
						</span>
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
					<span className="text-xs text-red-400">AI Powered</span>
				</div>
			</div>

			{/* Suggestions */}
			<div className="px-4 py-3 border-b border-gray-800">
				<p className="text-gray-400 text-xs mb-2">Quick prompts:</p>
				<div className="flex flex-wrap gap-2">
					<button className="px-2.5 py-1 bg-[#2d2d2d] text-gray-300 text-xs rounded-full border border-gray-700 hover:border-red-500/50 transition-colors">
						Summarize meeting
					</button>
					<button className="px-2.5 py-1 bg-[#2d2d2d] text-gray-300 text-xs rounded-full border border-gray-700 hover:border-red-500/50 transition-colors">
						Draft response
					</button>
					<button className="px-2.5 py-1 bg-[#2d2d2d] text-gray-300 text-xs rounded-full border border-gray-700 hover:border-red-500/50 transition-colors">
						Find action items
					</button>
				</div>
			</div>

			{/* Chat Area */}
			<div className="p-4 min-h-[220px] space-y-4">
				{/* User Message */}
				<AnimatePresence>
					{questionText && (
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex justify-end"
						>
							<div className="flex items-start gap-2 max-w-[85%]">
								<div className="bg-[#3d3d3d] rounded-xl rounded-br-none px-3 py-2">
									<p className="text-gray-200 text-sm">
										{questionText}
										{phase === "typing-question" && (
											<motion.span
												className="inline-block w-0.5 h-4 bg-white ml-0.5"
												animate={{ opacity: [1, 0] }}
												transition={{ duration: 0.4, repeat: Infinity }}
											/>
										)}
									</p>
								</div>
								<div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0">
									<User className="w-3 h-3 text-white" />
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* AI Response */}
				<AnimatePresence>
					{showResponse && (
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex justify-start"
						>
							<div className="flex items-start gap-2 max-w-[85%]">
								<div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0">
									<Image
										src="/melpAI.svg"
										alt="Melp AI"
										width={12}
										height={12}
										className="w-3 h-3"
									/>
								</div>
								<div className="bg-[#2d2d2d] border border-red-500/20 rounded-xl rounded-bl-none px-3 py-2">
									{phase === "thinking" ? (
										<div className="flex items-center gap-2 py-1">
											<motion.div className="flex items-center gap-1">
												<motion.span
													className="w-2 h-2 bg-red-400 rounded-full"
													animate={{
														scale: [1, 1.2, 1],
														opacity: [0.5, 1, 0.5],
													}}
													transition={{
														duration: 0.8,
														repeat: Infinity,
														delay: 0,
													}}
												/>
												<motion.span
													className="w-2 h-2 bg-red-400 rounded-full"
													animate={{
														scale: [1, 1.2, 1],
														opacity: [0.5, 1, 0.5],
													}}
													transition={{
														duration: 0.8,
														repeat: Infinity,
														delay: 0.2,
													}}
												/>
												<motion.span
													className="w-2 h-2 bg-red-400 rounded-full"
													animate={{
														scale: [1, 1.2, 1],
														opacity: [0.5, 1, 0.5],
													}}
													transition={{
														duration: 0.8,
														repeat: Infinity,
														delay: 0.4,
													}}
												/>
											</motion.div>
											<span className="text-gray-400 text-xs">Thinking...</span>
										</div>
									) : (
										<p className="text-gray-200 text-sm whitespace-pre-wrap">
											{answerText}
											{phase === "typing-answer" && (
												<motion.span
													className="inline-block w-0.5 h-4 bg-red-400 ml-0.5"
													animate={{ opacity: [1, 0] }}
													transition={{ duration: 0.4, repeat: Infinity }}
												/>
											)}
										</p>
									)}
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Input Bar */}
			<div className="p-3 border-t border-gray-800 bg-[#242424]">
				<div className="flex items-center gap-2 bg-[#1a1a1a] rounded-lg px-3 py-2">
					<input
						type="text"
						placeholder="Ask anything about your workspace..."
						className="flex-1 bg-transparent text-gray-300 text-sm placeholder:text-gray-500 outline-none"
						readOnly
					/>
					<button className="w-8 h-8 rounded-lg flex items-center justify-center">
						<Send className="w-4 h-4 text-white" />
					</button>
				</div>
			</div>
		</div>
	);
}
