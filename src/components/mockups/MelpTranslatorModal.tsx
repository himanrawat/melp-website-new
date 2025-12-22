"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronDown, ArrowRightLeft } from "lucide-react";

interface MelpTranslatorModalProps {
	className?: string;
}

const translations = [
	{
		from: "English",
		to: "Spanish",
		original: "Hello, how can I help you today?",
		translated: "Hola, ¿cómo puedo ayudarte hoy?",
	},
	{
		from: "English",
		to: "French",
		original: "Hello, how can I help you today?",
		translated: "Bonjour, comment puis-je vous aider aujourd'hui ?",
	},
	{
		from: "English",
		to: "German",
		original: "Hello, how can I help you today?",
		translated: "Hallo, wie kann ich Ihnen heute helfen?",
	},
	{
		from: "English",
		to: "Japanese",
		original: "Hello, how can I help you today?",
		translated: "こんにちは、今日はどのようにお手伝いできますか？",
	},
	{
		from: "English",
		to: "Portuguese",
		original: "Hello, how can I help you today?",
		translated: "Olá, como posso ajudá-lo hoje?",
	},
];

const languageCodes: Record<string, string> = {
	English: "EN",
	Spanish: "ES",
	French: "FR",
	German: "DE",
	Japanese: "JA",
	Portuguese: "PT",
};

export default function MelpTranslatorModal({
	className = "",
}: MelpTranslatorModalProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTranslating, setIsTranslating] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const [displayedText, setDisplayedText] = useState(
		translations[0].translated
	);
	const [phase, setPhase] = useState<
		"idle" | "selecting" | "translating" | "done"
	>("done");

	useEffect(() => {
		let isMounted = true;
		const timeouts: NodeJS.Timeout[] = [];

		const delay = (ms: number) =>
			new Promise<void>((resolve) => {
				const id = setTimeout(resolve, ms);
				timeouts.push(id);
			});

		const runAnimation = async (index: number) => {
			if (!isMounted) return;

			const currentTranslation = translations[index];
			const nextIndex = (index + 1) % translations.length;
			const nextTranslation = translations[nextIndex];

			// Show dropdown to select new language
			setPhase("selecting");
			setShowDropdown(true);
			await delay(1500);
			if (!isMounted) return;

			// Close dropdown and start translating
			setShowDropdown(false);
			setCurrentIndex(nextIndex);
			setPhase("translating");
			setIsTranslating(true);
			await delay(400);
			if (!isMounted) return;

			// Clear current text
			for (let i = currentTranslation.translated.length; i >= 0; i--) {
				if (!isMounted) return;
				setDisplayedText(currentTranslation.translated.slice(0, i));
				await delay(15);
			}

			// Type new translation
			for (let i = 0; i <= nextTranslation.translated.length; i++) {
				if (!isMounted) return;
				setDisplayedText(nextTranslation.translated.slice(0, i));
				await delay(20);
			}

			setIsTranslating(false);
			setPhase("done");

			// Schedule next animation
			await delay(3000);
			if (isMounted) {
				runAnimation(nextIndex);
			}
		};

		// Start animation cycle after initial delay
		const startDelay = setTimeout(() => {
			if (isMounted) runAnimation(0);
		}, 3000);
		timeouts.push(startDelay);

		return () => {
			isMounted = false;
			timeouts.forEach((id) => clearTimeout(id));
		};
	}, []);

	const current = translations[currentIndex];

	return (
		<div
			className={`relative bg-[#2d2d2d] rounded-xl overflow-hidden border border-gray-700 ${className}`}
		>
			{/* Header */}
			<div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
				<div className="flex items-center gap-2">
					<div className="w-6 h-6 rounded-lg flex items-center justify-center">
						<Image
							src="/melpAI.svg"
							alt="Melp AI"
							width={12}
							height={12}
							className="w-full h-full"
						/>
					</div>
					<span className="text-white font-medium">Translator</span>
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

			{/* Language Selector */}
			<div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
				<div className="flex items-center gap-3">
					{/* From Language */}
					<div className="flex items-center gap-2 px-3 py-1.5 bg-[#3d3d3d] rounded-lg">
						<span className="text-lg">{languageCodes.English}</span>
						<span className="text-white text-sm">{current.from}</span>
					</div>

					{/* Arrow */}
					<motion.div
						animate={isTranslating ? { x: [0, 5, 0] } : {}}
						transition={{ duration: 0.5, repeat: isTranslating ? Infinity : 0 }}
					>
						<ArrowRightLeft className="w-4 h-4 text-gray-500" />
					</motion.div>

					{/* To Language */}
					<div className="relative">
						<motion.div
							className="flex items-center gap-2 px-3 py-1.5 bg-[#3d3d3d] rounded-lg cursor-pointer"
							animate={phase === "selecting" ? { scale: [1, 1.02, 1] } : {}}
							transition={{ duration: 0.3 }}
						>
							<span className="text-lg">{languageCodes[current.to]}</span>
							<span className="text-white text-sm">{current.to}</span>
							<ChevronDown className="w-3 h-3 text-gray-400" />
						</motion.div>

						{/* Dropdown */}
						<AnimatePresence>
							{showDropdown && (
								<motion.div
									initial={{ opacity: 0, y: -5 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -5 }}
									className="absolute top-full left-0 mt-1 w-40 bg-[#3d3d3d] rounded-lg border border-gray-600 shadow-xl z-10 overflow-hidden"
								>
									{translations.map((t, i) => (
										<motion.div
											key={t.to}
											initial={{ backgroundColor: "#3d3d3d" }}
											animate={{
												backgroundColor:
													i === currentIndex ? "#4d4d4d" : "#3d3d3d",
											}}
											className="flex items-center gap-2 px-3 py-2 hover:bg-[#4d4d4d] cursor-pointer"
										>
											<span>{languageCodes[t.to]}</span>
											<span className="text-white text-sm">{t.to}</span>
										</motion.div>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>

			{/* Text Area */}
			<div className="p-4">
				<div className="bg-[#1a1a1a] rounded-lg p-4 min-h-[120px] relative">
					{/* Translating indicator */}
					<AnimatePresence>
						{isTranslating && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 bg-red-500/20 rounded"
							>
								<motion.div
									className="w-2 h-2 bg-red-400 rounded-full"
									animate={{ opacity: [1, 0.5, 1] }}
									transition={{ duration: 0.8, repeat: Infinity }}
								/>
								<span className="text-red-400 text-xs">Translating...</span>
							</motion.div>
						)}
					</AnimatePresence>

					<motion.p
						className="text-gray-200 text-base leading-relaxed"
						animate={{
							color: isTranslating ? "#9ca3af" : "#e5e7eb",
						}}
					>
						{displayedText}
						{isTranslating && (
							<motion.span
								className="inline-block w-0.5 h-5 bg-red-400 ml-0.5"
								animate={{ opacity: [1, 0] }}
								transition={{ duration: 0.4, repeat: Infinity }}
							/>
						)}
					</motion.p>
				</div>
			</div>

			{/* Actions */}
			<div className="flex items-center justify-between px-4 pb-4">
				<div className="flex items-center gap-2">
					<button className="px-3 py-1.5 bg-[#3d3d3d] text-gray-300 text-xs rounded-lg">
						Copy
					</button>
					<button className="px-3 py-1.5 bg-[#3d3d3d] text-gray-300 text-xs rounded-lg">
						Send
					</button>
				</div>
				<span className="text-gray-500 text-xs">
					{displayedText.length} characters
				</span>
			</div>
		</div>
	);
}
