"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, Sparkles, Volume2 } from "lucide-react";

interface Caption {
	id: number;
	speaker: string;
	text: string;
	original: string;
	timestamp: string;
}

interface MelpLiveCaptionsProps {
	className?: string;
}

const captions: Caption[] = [
	{
		id: 1,
		speaker: "John",
		text: "Let's review the quarterly numbers first.",
		original: "Let's review the quarterly numbers first.",
		timestamp: "0:01",
	},
	{
		id: 2,
		speaker: "Sarah",
		text: "Revenue is up 15% compared to last quarter.",
		original: "Revenue is up 15% compared to last quarter.",
		timestamp: "0:05",
	},
	{
		id: 3,
		speaker: "John",
		text: "That's excellent progress on the growth targets.",
		original: "That's excellent progress on the growth targets.",
		timestamp: "0:10",
	},
	{
		id: 4,
		speaker: "Mike",
		text: "Customer acquisition costs decreased too.",
		original: "Customer acquisition costs decreased too.",
		timestamp: "0:15",
	},
];

const translations: Record<string, Caption[]> = {
	English: captions,
	Spanish: [
		{
			id: 1,
			speaker: "John",
			text: "Revisemos primero los números trimestrales.",
			original: "Let's review the quarterly numbers first.",
			timestamp: "0:01",
		},
		{
			id: 2,
			speaker: "Sarah",
			text: "Los ingresos aumentaron un 15% en comparación con el trimestre anterior.",
			original: "Revenue is up 15% compared to last quarter.",
			timestamp: "0:05",
		},
		{
			id: 3,
			speaker: "John",
			text: "Ese es un excelente progreso en los objetivos de crecimiento.",
			original: "That's excellent progress on the growth targets.",
			timestamp: "0:10",
		},
		{
			id: 4,
			speaker: "Mike",
			text: "Los costos de adquisición de clientes también disminuyeron.",
			original: "Customer acquisition costs decreased too.",
			timestamp: "0:15",
		},
	],
	French: [
		{
			id: 1,
			speaker: "John",
			text: "Examinons d'abord les chiffres trimestriels.",
			original: "Let's review the quarterly numbers first.",
			timestamp: "0:01",
		},
		{
			id: 2,
			speaker: "Sarah",
			text: "Le chiffre d'affaires est en hausse de 15% par rapport au trimestre dernier.",
			original: "Revenue is up 15% compared to last quarter.",
			timestamp: "0:05",
		},
		{
			id: 3,
			speaker: "John",
			text: "C'est une excellente progression sur les objectifs de croissance.",
			original: "That's excellent progress on the growth targets.",
			timestamp: "0:10",
		},
		{
			id: 4,
			speaker: "Mike",
			text: "Les coûts d'acquisition des clients ont également diminué.",
			original: "Customer acquisition costs decreased too.",
			timestamp: "0:15",
		},
	],
};

const languages = ["English", "Spanish", "French"];
const languageCodes: Record<string, string> = {
	English: "EN",
	Spanish: "ES",
	French: "FR",
};

export default function MelpLiveCaptions({
	className = "",
}: MelpLiveCaptionsProps) {
	const [visibleCaptions, setVisibleCaptions] = useState<number[]>([]);
	const [currentLanguage, setCurrentLanguage] = useState("English");
	const [showDropdown, setShowDropdown] = useState(false);
	const [typingText, setTypingText] = useState("");
	const [currentCaptionIndex, setCurrentCaptionIndex] = useState(0);
	const [phase, setPhase] = useState<"streaming" | "switching" | "translating">(
		"streaming"
	);

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
			setVisibleCaptions([]);
			setCurrentLanguage("English");
			setPhase("streaming");

			const currentCaptions = translations.English;

			// Stream captions one by one
			for (let i = 0; i < currentCaptions.length; i++) {
				if (!isMounted) return;
				setCurrentCaptionIndex(i);
				const caption = currentCaptions[i];

				// Type effect for current caption
				for (let j = 0; j <= caption.text.length; j++) {
					if (!isMounted) return;
					setTypingText(caption.text.slice(0, j));
					await delay(30);
				}

				if (!isMounted) return;
				setVisibleCaptions((prev) => [...prev, caption.id]);
				setTypingText("");
				await delay(600);
			}

			if (!isMounted) return;
			await delay(800);

			// Switch language
			if (!isMounted) return;
			setPhase("switching");
			setShowDropdown(true);
			await delay(1000);
			if (!isMounted) return;
			setCurrentLanguage("Spanish");
			setShowDropdown(false);

			// Translate effect
			if (!isMounted) return;
			setPhase("translating");
			await delay(500);
			if (!isMounted) return;
			setVisibleCaptions([1, 2, 3, 4]);

			if (!isMounted) return;
			await delay(2500);

			// Switch to French
			if (!isMounted) return;
			setPhase("switching");
			setShowDropdown(true);
			await delay(800);
			if (!isMounted) return;
			setCurrentLanguage("French");
			setShowDropdown(false);
			setPhase("translating");

			if (!isMounted) return;
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

	const currentCaptions = translations[currentLanguage] || translations.English;

	return (
		<div
			className={`relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 ${className}`}
		>
			{/* Video Preview Area */}
			<div className="relative h-32 bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] flex items-center justify-center">
				{/* Fake video grid */}
				<div className="grid grid-cols-2 gap-2 p-3">
					{[1, 2, 3, 4].map((i) => (
						<div
							key={i}
							className="w-16 h-12 bg-[#3d3d3d] rounded-lg overflow-hidden"
						>
							<div className="w-full h-full flex items-center justify-center">
								<div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
							</div>
						</div>
					))}
				</div>

				{/* Language Selector Overlay */}
				<div className="absolute top-2 right-2">
					<div className="relative">
						<motion.button
							className="flex items-center gap-2 px-3 py-1.5 bg-[#2d2d2d]/90 backdrop-blur rounded-lg border border-gray-700"
							animate={phase === "switching" ? { scale: [1, 1.05, 1] } : {}}
						>
							<span className="text-sm">{languageCodes[currentLanguage]}</span>
							<span className="text-white text-xs">{currentLanguage}</span>
							<ChevronDown className="w-3 h-3 text-gray-400" />
						</motion.button>

						<AnimatePresence>
							{showDropdown && (
								<motion.div
									initial={{ opacity: 0, y: -5 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -5 }}
									className="absolute top-full right-0 mt-1 w-32 bg-[#2d2d2d] rounded-lg border border-gray-700 shadow-xl overflow-hidden z-10"
								>
									{languages.map((lang) => (
										<motion.div
											key={lang}
											className={`flex items-center gap-2 px-3 py-2 cursor-pointer ${
												lang === currentLanguage ? "bg-[#3d3d3d]" : ""
											}`}
											whileHover={{ backgroundColor: "#3d3d3d" }}
										>
											<span>{languageCodes[lang]}</span>
											<span className="text-white text-xs">{lang}</span>
										</motion.div>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>

				{/* Live indicator */}
				<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 bg-red-500/20 rounded">
					<motion.div
						className="w-2 h-2 bg-red-500 rounded-full"
						animate={{ opacity: [1, 0.5, 1] }}
						transition={{ duration: 1, repeat: Infinity }}
					/>
					<span className="text-red-400 text-xs font-medium">LIVE</span>
				</div>
			</div>

			{/* Captions Area */}
			<div className="border-t border-gray-800">
				{/* Header */}
				<div className="flex items-center justify-between px-3 py-2 bg-[#242424] border-b border-gray-800">
					<div className="flex items-center gap-2">
						<Sparkles className="w-4 h-4 text-red-400" />
						<span className="text-white text-sm font-medium">
							Live Captions
						</span>
						<span className="text-xs text-gray-400">
							• Translated to {currentLanguage}
						</span>
					</div>
					<Volume2 className="w-4 h-4 text-gray-400" />
				</div>

				{/* Captions List */}
				<div className="p-3 h-[160px] overflow-hidden space-y-2">
					<AnimatePresence>
						{currentCaptions
							.filter((c) => visibleCaptions.includes(c.id))
							.map((caption) => (
								<motion.div
									key={`${caption.id}-${currentLanguage}`}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0 }}
									className="flex items-start gap-2"
								>
									<span className="text-gray-500 text-xs w-10 shrink-0">
										{caption.timestamp}
									</span>
									<div>
										<span className="text-blue-400 text-sm font-medium">
											{caption.speaker}:
										</span>
										<motion.span
											className="text-gray-200 text-sm ml-1"
											initial={phase === "translating" ? { opacity: 0.5 } : {}}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.3 }}
										>
											{caption.text}
										</motion.span>
									</div>
								</motion.div>
							))}
					</AnimatePresence>

					{/* Currently typing caption */}
					{typingText && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="flex items-start gap-2"
						>
							<span className="text-gray-500 text-xs w-10 shrink-0">
								{captions[currentCaptionIndex]?.timestamp}
							</span>
							<div>
								<span className="text-blue-400 text-sm font-medium">
									{captions[currentCaptionIndex]?.speaker}:
								</span>
								<span className="text-gray-200 text-sm ml-1">
									{typingText}
									<motion.span
										className="inline-block w-0.5 h-4 bg-white ml-0.5"
										animate={{ opacity: [1, 0] }}
										transition={{ duration: 0.4, repeat: Infinity }}
									/>
								</span>
							</div>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
}
