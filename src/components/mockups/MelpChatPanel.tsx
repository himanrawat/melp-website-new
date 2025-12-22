"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Check, Globe } from "lucide-react";

interface Message {
	id: number;
	sender: "user" | "ai";
	text: string;
	typing?: boolean;
}

interface MelpChatPanelProps {
	className?: string;
	showDraftModal?: boolean;
}

export default function MelpChatPanel({
	className = "",
	showDraftModal = true,
}: MelpChatPanelProps) {
	const [messages, setMessages] = useState<Message[]>([]);
	const [showModal, setShowModal] = useState(false);
	const [promptText, setPromptText] = useState("");
	const [aiResponse, setAiResponse] = useState("");
	const [showTags, setShowTags] = useState(false);
	const [phase, setPhase] = useState(0);

	const userPrompt =
		"Help me respond to this client about the Q1 partnership proposal";
	const fullResponse =
		"Thank you for reaching out regarding the Q1 partnership. I've reviewed your proposal and I'm pleased to confirm our interest in moving forward. Let's schedule a call this week to discuss implementation details and next steps.";

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
			setMessages([]);
			setShowModal(false);
			setPromptText("");
			setAiResponse("");
			setShowTags(false);
			setPhase(0);

			// Phase 1: Show user message
			await delay(500);
			if (!isMounted) return;
			setMessages([
				{ id: 1, sender: "user", text: "I need help drafting a response..." },
			]);
			setPhase(1);

			// Phase 2: Show Draft For Me modal
			await delay(1000);
			if (!isMounted) return;
			setShowModal(true);
			setPhase(2);

			// Phase 3: Type prompt
			await delay(500);
			if (!isMounted) return;
			for (let i = 0; i <= userPrompt.length; i++) {
				if (!isMounted) return;
				setPromptText(userPrompt.slice(0, i));
				await delay(30);
			}
			if (!isMounted) return;
			setPhase(3);

			// Phase 4: Click done, show AI typing
			await delay(800);
			if (!isMounted) return;
			setShowModal(false);
			setMessages((prev) => [
				...prev,
				{ id: 2, sender: "ai", text: "", typing: true },
			]);
			setPhase(4);

			// Phase 5: Type AI response
			await delay(500);
			if (!isMounted) return;
			for (let i = 0; i <= fullResponse.length; i++) {
				if (!isMounted) return;
				setAiResponse(fullResponse.slice(0, i));
				await delay(15);
			}
			if (!isMounted) return;
			setMessages((prev) =>
				prev.map((m) =>
					m.id === 2 ? { ...m, text: fullResponse, typing: false } : m
				)
			);
			setPhase(5);

			// Phase 6: Show tags
			await delay(300);
			if (!isMounted) return;
			setShowTags(true);
			setPhase(6);

			// Wait and restart
			await delay(3000);
		};

		let loopTimeout: ReturnType<typeof setTimeout> | null = null;

		const startLoop = async () => {
			await runAnimation();
			if (!isMounted) return;
			loopTimeout = setTimeout(startLoop, 0);
		};

		startLoop();

		return () => {
			isMounted = false;
			if (loopTimeout) clearTimeout(loopTimeout);
			timers.forEach(clearTimeout);
		};
	}, []);

	return (
		<div
			className={`relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 ${className}`}
		>
			{/* Chat Header */}
			<div className="flex items-center gap-3 px-4 py-3 border-b border-gray-800 bg-[#242424]">
				<Image
					src="/profile.jpg"
					alt="Marcos Taylor"
					width={32}
					height={32}
					className="w-8 h-8 rounded-sm object-cover"
				/>
				<div>
					<div className="text-white text-sm font-medium">Marcos Taylor</div>
					<div className="text-green-400 text-xs flex items-center gap-1">
						<span className="w-1.5 h-1.5 rounded-full bg-green-400" />
						Online
					</div>
				</div>
			</div>

			{/* Messages Area */}
			<div className="p-4 h-[280px] overflow-hidden">
				<AnimatePresence mode="popLayout">
					{messages.map((msg) => (
						<motion.div
							key={msg.id}
							initial={{
								opacity: 0,
								x: msg.sender === "user" ? 20 : -20,
								y: 10,
							}}
							animate={{ opacity: 1, x: 0, y: 0 }}
							exit={{ opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 25 }}
							className={`flex mb-3 ${
								msg.sender === "user" ? "justify-end" : "justify-start"
							}`}
						>
							{msg.sender === "ai" && (
								<div className="w-7 h-7 rounded-lg flex items-center justify-center mr-2 shrink-0">
									<Image
										src="/melpAI.svg"
										alt="Melp AI"
										width={16}
										height={16}
										className="w-full h-full"
									/>
								</div>
							)}
							<div
								className={`max-w-[80%] rounded-xl px-3 py-2 ${
									msg.sender === "user"
										? "bg-[#3d3d3d] text-white rounded-br-none"
										: "bg-[#2a2a2a] border border-red-500/20 text-gray-200 rounded-bl-none"
								}`}
							>
								{msg.typing ? (
									<div className="flex items-center gap-1 py-1">
										<motion.span
											className="w-2 h-2 bg-gray-400 rounded-full"
											animate={{ opacity: [0.3, 1, 0.3] }}
											transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
										/>
										<motion.span
											className="w-2 h-2 bg-gray-400 rounded-full"
											animate={{ opacity: [0.3, 1, 0.3] }}
											transition={{
												duration: 0.8,
												repeat: Infinity,
												delay: 0.2,
											}}
										/>
										<motion.span
											className="w-2 h-2 bg-gray-400 rounded-full"
											animate={{ opacity: [0.3, 1, 0.3] }}
											transition={{
												duration: 0.8,
												repeat: Infinity,
												delay: 0.4,
											}}
										/>
									</div>
								) : (
									<p className="text-sm leading-relaxed">
										{msg.sender === "ai" ? aiResponse : msg.text}
									</p>
								)}

								{/* Tone Tags */}
								{msg.sender === "ai" && showTags && !msg.typing && (
									<motion.div
										initial={{ opacity: 0, y: 5 }}
										animate={{ opacity: 1, y: 0 }}
										className="flex gap-2 mt-2"
									>
										<span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-300 rounded">
											Professional
										</span>
										<span className="px-2 py-0.5 text-xs bg-pink-500/20 text-pink-300 rounded">
											Friendly
										</span>
									</motion.div>
								)}
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</div>

			{/* Draft For Me Modal */}
			<AnimatePresence>
				{showModal && showDraftModal && (
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						transition={{ type: "spring", stiffness: 300, damping: 25 }}
						className="absolute inset-x-4 bottom-16 bg-[#2d2d2d] rounded-xl border border-gray-700 p-4 shadow-2xl"
					>
						<div className="flex items-center gap-2 mb-3">
							<span className="text-white font-medium">Draft For Me</span>
							<div className="flex items-center gap-1 px-2 py-0.5 bg-red-500/10 rounded">
								<Image
									src="/melpAI.svg"
									alt="Melp AI"
									width={12}
									height={12}
									className="w-4 h-4"
								/>
								<span className="text-xs text-red-400">Melp AI</span>
							</div>
						</div>
						<p className="text-gray-400 text-xs mb-3">
							Just type what you want to say, and we'll turn it into a clear,
							well-written response in seconds.
						</p>
						<div className="bg-[#1a1a1a] rounded-lg p-3 mb-3 min-h-[60px]">
							<p className="text-gray-300 text-sm">
								{promptText}
								<motion.span
									className="inline-block w-0.5 h-4 bg-white ml-0.5"
									animate={{ opacity: [1, 0] }}
									transition={{ duration: 0.5, repeat: Infinity }}
								/>
							</p>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="w-4 h-4 rounded border border-gray-600" />
								<span className="text-gray-400 text-xs">
									Use Conversation History
								</span>
								<div className="w-8 h-4 bg-red-500 rounded-full relative">
									<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full" />
								</div>
							</div>
							<div className="flex items-center gap-3">
								<span className="text-gray-500 text-xs">
									{promptText.length}/200
								</span>
								<button className="px-4 py-1.5 bg-red-500 text-white text-sm font-medium rounded-lg">
									DONE
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Input Bar */}
			<div className="absolute bottom-0 left-0 right-0 p-3 bg-[#242424] border-t border-gray-800">
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-1 px-2 py-1 bg-red-500/10 rounded">
						<Image
							src="/melpAI.svg"
							alt="Melp AI"
							width={12}
							height={12}
							className="w-3 h-3"
						/>
						<span className="text-xs text-red-400">Melp's AI</span>
					</div>
					<div className="flex-1 text-gray-500 text-sm">
						Write a message or ask Melp AI...
					</div>
					<button className="px-3 py-1 bg-[#3d3d3d] text-gray-300 text-xs rounded flex items-center gap-1">
						<Globe className="w-3 h-3" /> TRANSLATE
					</button>
				</div>
			</div>
		</div>
	);
}
