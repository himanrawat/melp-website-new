"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import {
	Video,
	Mic,
	MoreVertical,
	Phone,
	Sparkles,
	Volume2,
} from "lucide-react";

interface MelpAILivecaptionHeroProps {
	className?: string;
}

interface Speaker {
	name: string;
	country: string;
	language: string;
	targetLanguage: string;
	video: string;
	avatarColor: string;
}

interface ConversationMessage {
	id: number;
	speaker: "sara" | "james";
	originalText: string;
	translatedText: string;
}

interface DisplayedMessage {
	id: number;
	speaker: "sara" | "james";
	originalText: string;
	translatedText: string;
}

const speakers: Record<string, Speaker> = {
	sara: {
		name: "Sara",
		country: "England",
		language: "English",
		targetLanguage: "Spanish",
		video: "/video/sara.mp4",
		avatarColor: "from-pink-500 to-rose-600",
	},
	james: {
		name: "James",
		country: "Spain",
		language: "Spanish",
		targetLanguage: "English",
		video: "/video/james.mp4",
		avatarColor: "from-blue-500 to-indigo-600",
	},
};

const conversation: ConversationMessage[] = [
	{
		id: 1,
		speaker: "sara",
		originalText:
			"Good morning everyone, let's start with the quarterly review.",
		translatedText:
			"Buenos días a todos, comencemos con la revisión trimestral.",
	},
	{
		id: 2,
		speaker: "james",
		originalText: "He preparado las cifras de ventas para la región EMEA.",
		translatedText: "I've prepared the sales figures for the EMEA region.",
	},
	{
		id: 3,
		speaker: "sara",
		originalText:
			"That's great James. Can you walk us through the key highlights?",
		translatedText:
			"Eso es genial James. ¿Puedes guiarnos a través de los puntos clave?",
	},
	{
		id: 4,
		speaker: "james",
		originalText:
			"Por supuesto. Los ingresos aumentaron un 23% en comparación con el trimestre anterior.",
		translatedText:
			"Of course. Revenue increased by 23% compared to last quarter.",
	},
	{
		id: 5,
		speaker: "sara",
		originalText: "Impressive numbers. What about customer acquisition costs?",
		translatedText:
			"Números impresionantes. ¿Qué hay de los costos de adquisición de clientes?",
	},
	{
		id: 6,
		speaker: "james",
		originalText:
			"Logramos reducir el CAC en un 15% a través de campañas dirigidas.",
		translatedText:
			"We managed to reduce CAC by 15% through targeted campaigns.",
	},
];

export default function MelpAILivecaptionHero({
	className = "",
}: MelpAILivecaptionHeroProps) {
	const [isExpanded] = useState(true);
	const [visibleMessages, setVisibleMessages] = useState<DisplayedMessage[]>(
		[]
	);
	const [displayedOriginal, setDisplayedOriginal] = useState("");
	const [displayedTranslation, setDisplayedTranslation] = useState("");
	const [isStreamingOriginal, setIsStreamingOriginal] = useState(false);
	const [isStreamingTranslation, setIsStreamingTranslation] = useState(false);
	const [currentSpeaker, setCurrentSpeaker] = useState<"sara" | "james">(
		"sara"
	);
	const transcriptRef = useRef<HTMLDivElement>(null);

	// Auto-scroll to bottom when new messages appear
	useEffect(() => {
		if (transcriptRef.current) {
			transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
		}
	}, [visibleMessages, displayedOriginal, displayedTranslation]);

	// Conversation streaming effect with translation
	useEffect(() => {
		let isMounted = true;
		const timers: ReturnType<typeof setTimeout>[] = [];

		const delay = (ms: number) =>
			new Promise<void>((resolve) => {
				const timeout = setTimeout(resolve, ms);
				timers.push(timeout);
			});

		const streamConversation = async () => {
			if (!isMounted) return;

			// Reset for new cycle
			setVisibleMessages([]);
			setDisplayedOriginal("");
			setDisplayedTranslation("");

			for (let msgIndex = 0; msgIndex < conversation.length; msgIndex++) {
				if (!isMounted) return;

				const message = conversation[msgIndex];
				setCurrentSpeaker(message.speaker);
				setDisplayedOriginal("");
				setDisplayedTranslation("");

				// Small pause before speaker starts
				await delay(400);

				// Stream original text first
				setIsStreamingOriginal(true);
				const originalWords = message.originalText.split(" ");
				for (const word of originalWords) {
					if (!isMounted) return;
					setDisplayedOriginal((prev) => (prev ? prev + " " + word : word));
					await delay(50 + Math.random() * 30);
				}

				if (!isMounted) return;
				setIsStreamingOriginal(false);

				// Small pause before translation
				await delay(600);

				// Stream translated text
				setIsStreamingTranslation(true);
				const translatedWords = message.translatedText.split(" ");
				for (const word of translatedWords) {
					if (!isMounted) return;
					setDisplayedTranslation((prev) => (prev ? prev + " " + word : word));
					await delay(40 + Math.random() * 25);
				}

				if (!isMounted) return;
				setIsStreamingTranslation(false);

				// Add completed message to visible messages
				setVisibleMessages((prev) => [...prev, message]);
				setDisplayedOriginal("");
				setDisplayedTranslation("");

				// Pause between messages
				await delay(1200);
			}

			// Wait before restarting
			if (!isMounted) return;
			await delay(3000);

			// Restart the conversation
			if (isMounted) {
				streamConversation();
			}
		};

		streamConversation();

		return () => {
			isMounted = false;
			timers.forEach(clearTimeout);
		};
	}, []);

	const activeSpeaker = speakers[currentSpeaker];
	const isStreaming = isStreamingOriginal || isStreamingTranslation;

	return (
		<div
			className={`relative bg-[#0a0a0a] rounded-xl overflow-hidden ${className}`}
		>
			<div className="flex">
				{/* Left Side - Video Call Panel */}
				<div className="relative flex-1 p-4">
					{/* Video Frame with Blue Border */}
					<div className="relative rounded-lg overflow-hidden border-[3px] border-blue-500 shadow-lg shadow-blue-500/20">
						{/* Speaker Video */}
						<div className="relative aspect-[4/3] bg-[#1a1a1a]">
							<AnimatePresence mode="wait">
								<motion.video
									key={currentSpeaker}
									src={activeSpeaker.video}
									autoPlay
									loop
									muted
									playsInline
									className="w-full h-full object-cover"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
								/>
							</AnimatePresence>
							{/* Speaker name overlay */}
							<div className="absolute bottom-2 left-2 flex items-center gap-2 px-2 py-1 bg-black/60 rounded-md">
								<div
									className={`w-6 h-6 rounded-full bg-gradient-to-br ${activeSpeaker.avatarColor} flex items-center justify-center`}
								>
									<span className="text-white text-xs font-medium">
										{activeSpeaker.name.charAt(0)}
									</span>
								</div>
								<span className="text-white text-sm font-medium">
									{activeSpeaker.name}
								</span>
							</div>
						</div>
					</div>

					{/* Translation Indicator */}
					<div className="flex items-center gap-2 mt-4 text-gray-400">
						<Sparkles className="w-4 h-4 text-yellow-500" />
						<span className="text-sm">
							Translating {activeSpeaker.name} from {activeSpeaker.language} to{" "}
							{activeSpeaker.targetLanguage}...
						</span>
					</div>

					{/* Control Buttons - Rectangular with rounded-md */}
					<div className="flex items-center justify-center gap-3 mt-6">
						{/* Camera Button */}
						<button className="w-10 h-10 bg-[#2d2d2d] hover:bg-[#3d3d3d] rounded-md flex items-center justify-center transition-colors">
							<Video className="w-5 h-5 text-white" />
						</button>

						{/* Speaker Button - Active */}
						<button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-md flex items-center justify-center transition-colors">
							<Volume2 className="w-5 h-5 text-white" />
						</button>

						{/* Mic Button */}
						<button className="w-10 h-10 bg-[#2d2d2d] hover:bg-[#3d3d3d] rounded-md flex items-center justify-center transition-colors">
							<Mic className="w-5 h-5 text-white" />
						</button>

						{/* More Options Button */}
						<button className="w-10 h-10 bg-[#2d2d2d] hover:bg-[#3d3d3d] rounded-md flex items-center justify-center transition-colors">
							<MoreVertical className="w-5 h-5 text-white" />
						</button>

						{/* Hang Up Button */}
						<button className="w-12 h-10 bg-red-600 hover:bg-red-700 rounded-md flex items-center justify-center transition-colors">
							<Phone className="w-5 h-5 text-white rotate-[135deg]" />
						</button>
					</div>
				</div>

				{/* Right Side - AI Notes Panel */}
				<div className="w-[320px] bg-[#1e1e1e] rounded-xl m-4 ml-0 border border-gray-800 flex flex-col">
					{/* Header */}
					<div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
						<Image
							src="/melpAI.svg"
							alt="Melp AI"
							width={20}
							height={20}
							className="w-5 h-5"
						/>
						<span className="text-white font-medium">
							Melp&apos;s AI Summary
						</span>
					</div>

					{/* Live Transcription Section */}
					<div className="flex-1 flex flex-col min-h-0">
						<AnimatePresence>
							{isExpanded && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: "auto", opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.2 }}
									className="flex-1 overflow-hidden"
								>
									<div
										ref={transcriptRef}
										className="px-4 pb-4 mt-4 space-y-4 max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
									>
										{/* Completed messages */}
										{visibleMessages.map((message) => {
											const speaker = speakers[message.speaker];
											return (
												<motion.div
													key={message.id}
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													className="flex gap-2"
												>
													<div
														className={`w-6 h-6 rounded-full bg-gradient-to-br ${speaker.avatarColor} flex items-center justify-center shrink-0 mt-0.5`}
													>
														<span className="text-white text-[10px] font-medium">
															{speaker.name.charAt(0)}
														</span>
													</div>
													<div className="flex-1 min-w-0">
														<span className="text-gray-400 text-xs font-medium block">
															{speaker.name} ({speaker.language})
														</span>
														<p className="text-gray-500 text-xs leading-relaxed italic">
															{message.originalText}
														</p>
														<p className="text-gray-200 text-sm leading-relaxed mt-1">
															{message.translatedText}
														</p>
													</div>
												</motion.div>
											);
										})}

										{/* Currently streaming message */}
										{isStreaming &&
											(displayedOriginal || displayedTranslation) && (
												<motion.div
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													className="flex gap-2"
												>
													<div
														className={`w-6 h-6 rounded-full bg-gradient-to-br ${activeSpeaker.avatarColor} flex items-center justify-center shrink-0 mt-0.5`}
													>
														<span className="text-white text-[10px] font-medium">
															{activeSpeaker.name.charAt(0)}
														</span>
													</div>
													<div className="flex-1 min-w-0">
														<span className="text-gray-400 text-xs font-medium block">
															{activeSpeaker.name} ({activeSpeaker.language})
														</span>
														{displayedOriginal && (
															<p className="text-gray-500 text-xs leading-relaxed italic">
																{displayedOriginal}
																{isStreamingOriginal && (
																	<motion.span
																		className="inline-block w-0.5 h-3 bg-gray-500 ml-1 align-middle"
																		animate={{ opacity: [1, 0] }}
																		transition={{
																			duration: 0.4,
																			repeat: Infinity,
																		}}
																	/>
																)}
															</p>
														)}
														{displayedTranslation && (
															<p className="text-gray-200 text-sm leading-relaxed mt-1">
																{displayedTranslation}
																{isStreamingTranslation && (
																	<motion.span
																		className="inline-block w-0.5 h-4 bg-blue-500 ml-1 align-middle"
																		animate={{ opacity: [1, 0] }}
																		transition={{
																			duration: 0.4,
																			repeat: Infinity,
																		}}
																	/>
																)}
															</p>
														)}
													</div>
												</motion.div>
											)}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
}
