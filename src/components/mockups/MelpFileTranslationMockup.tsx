"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
	FileText,
	MoreVertical,
	Download,
	Share2,
	Globe,
	Trash2,
	Search,
	Grid,
	List,
	Upload,
	Check,
} from "lucide-react";

interface MelpFileTranslationMockupProps {
	className?: string;
}

// Dummy data
const fileData = {
	name: "Annual_Report_2025.pdf",
	size: "3.2 MB",
	date: "Dec 28, 2025",
};

const translatedFileData = {
	name: "Annual_Report_2025_ES.pdf",
	size: "3.4 MB",
	date: "Just now",
};

const languages = [
	{ code: "en", name: "English" },
	{ code: "es", name: "Spanish" },
	{ code: "fr", name: "French" },
	{ code: "de", name: "German" },
];

export default function MelpFileTranslationMockup({
	className = "",
}: MelpFileTranslationMockupProps) {
	// Animation phases
	const [phase, setPhase] = useState(0);
	const [showDropdown, setShowDropdown] = useState(false);
	const [showLanguageSelector, setShowLanguageSelector] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
	const [showLoading, setShowLoading] = useState(false);
	const [progress, setProgress] = useState(0);
	const [showTranslatedFile, setShowTranslatedFile] = useState(false);
	const [optionsHighlight, setOptionsHighlight] = useState(false);

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

			// Reset all states
			setPhase(0);
			setShowDropdown(false);
			setShowLanguageSelector(false);
			setSelectedLanguage(null);
			setShowLoading(false);
			setProgress(0);
			setShowTranslatedFile(false);
			setOptionsHighlight(false);

			// Phase 1: Show initial state
			await delay(500);
			if (!isMounted) return;
			setPhase(1);

			// Phase 2: Highlight options button
			await delay(1200);
			if (!isMounted) return;
			setOptionsHighlight(true);

			// Click options - show dropdown
			await delay(600);
			if (!isMounted) return;
			setShowDropdown(true);
			setPhase(2);

			// Phase 3: Highlight and click Translate option
			await delay(1000);
			if (!isMounted) return;
			setShowDropdown(false);
			setShowLanguageSelector(true);
			setPhase(3);

			// Phase 4: Select Spanish
			await delay(800);
			if (!isMounted) return;
			setSelectedLanguage("es");

			// Click translate button
			await delay(800);
			if (!isMounted) return;
			setShowLanguageSelector(false);
			setShowLoading(true);
			setPhase(4);

			// Animate progress bar
			for (let p = 0; p <= 100; p += 2) {
				if (!isMounted) return;
				setProgress(p);
				await delay(50);
			}

			// Phase 5: Show translated file
			await delay(400);
			if (!isMounted) return;
			setShowLoading(false);
			setShowTranslatedFile(true);
			setOptionsHighlight(false);
			setPhase(5);

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

	return (
		<div
			className={`relative bg-[#0a0a0a] rounded-xl overflow-hidden border ${className}`}
		>
			<div className="h-[420px] flex flex-col">
				{/* Melp Drive Header */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : -10 }}
					transition={{ duration: 0.4 }}
					className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border-b border-gray-800"
				>
					<div className="flex items-center gap-3">
						<Image
							src="/melpAI.svg"
							alt="Melp"
							width={24}
							height={24}
							className="w-6 h-6"
						/>
						<span className="text-white font-semibold">Melp Drive</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="flex items-center gap-2 bg-[#2d2d2d] rounded-lg px-3 py-1.5">
							<Search className="w-4 h-4 text-gray-500" />
							<span className="text-gray-500 text-sm">Search files...</span>
						</div>
						<button className="w-8 h-8 bg-[#2d2d2d] rounded-lg flex items-center justify-center">
							<Grid className="w-4 h-4 text-gray-400" />
						</button>
						<button className="w-8 h-8 bg-[#2d2d2d] rounded-lg flex items-center justify-center">
							<List className="w-4 h-4 text-gray-400" />
						</button>
					</div>
				</motion.div>

				{/* Sub Header */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: phase >= 1 ? 1 : 0 }}
					transition={{ duration: 0.3, delay: 0.1 }}
					className="flex items-center justify-between px-4 py-3 border-b border-gray-800"
				>
					<h2 className="text-white font-medium">My Files</h2>
					<button className="flex items-center gap-2 px-3 py-1.5 bg-red-500 hover:bg-red-600 rounded-lg text-white text-sm font-medium transition-colors">
						<Upload className="w-4 h-4" />
						Upload
					</button>
				</motion.div>

				{/* Files Area */}
				<div
					className="flex-1 p-4 relative"
					style={{
						minWidth: "450px",
					}}
				>
					{/* Original File Card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 20 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="relative"
					>
						<div className="flex items-center justify-between p-3 bg-[#1e1e1e] rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
									<FileText className="w-5 h-5 text-white" />
								</div>
								<div>
									<p className="text-white font-medium text-sm">
										{fileData.name}
									</p>
									<p className="text-gray-500 text-xs">
										{fileData.size} • {fileData.date}
									</p>
								</div>
							</div>
							<motion.button
								animate={{
									boxShadow: optionsHighlight
										? "0 0 0 2px rgba(239, 68, 68, 0.5)"
										: "none",
								}}
								className="w-8 h-8 rounded-lg hover:bg-[#2d2d2d] flex items-center justify-center transition-colors"
							>
								<MoreVertical className="w-4 h-4 text-gray-400" />
							</motion.button>
						</div>

						{/* Dropdown Menu */}
						<AnimatePresence>
							{showDropdown && (
								<motion.div
									initial={{ opacity: 0, y: -10, scale: 0.95 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: -10, scale: 0.95 }}
									transition={{ duration: 0.2 }}
									className="absolute right-0 top-14 w-44 bg-[#2d2d2d] rounded-lg border border-gray-700 shadow-xl z-20 overflow-hidden"
								>
									<div className="py-1">
										<button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:bg-[#3d3d3d] transition-colors">
											<Download className="w-4 h-4" />
											<span className="text-sm">Download</span>
										</button>
										<button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:bg-[#3d3d3d] transition-colors">
											<Share2 className="w-4 h-4" />
											<span className="text-sm">Share</span>
										</button>
										<motion.button
											animate={{
												backgroundColor: "rgba(239, 68, 68, 0.1)",
											}}
											className="w-full flex items-center gap-3 px-4 py-2.5 text-red-400 transition-colors"
										>
											<Globe className="w-4 h-4" />
											<span className="text-sm font-medium">Translate</span>
										</motion.button>
										<button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:bg-[#3d3d3d] transition-colors">
											<Trash2 className="w-4 h-4" />
											<span className="text-sm">Delete</span>
										</button>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>

					{/* Translated File Card */}
					<AnimatePresence>
						{showTranslatedFile && (
							<motion.div
								initial={{ opacity: 0, y: -10, height: 0 }}
								animate={{ opacity: 1, y: 0, height: "auto" }}
								exit={{ opacity: 0, y: -10, height: 0 }}
								transition={{ type: "spring", stiffness: 300, damping: 25 }}
								className="mt-3"
							>
								<div className="flex items-center justify-between p-3 bg-[#1e1e1e] rounded-lg border border-green-500/30 hover:border-green-500/50 transition-colors">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center relative">
											<FileText className="w-5 h-5 text-white" />
											<span className="absolute -bottom-1 -right-1 px-1 py-0.5 bg-blue-500 text-white text-[8px] font-bold rounded">
												ES
											</span>
										</div>
										<div>
											<div className="flex items-center gap-2">
												<p className="text-white font-medium text-sm">
													{translatedFileData.name}
												</p>
												<span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-[10px] rounded flex items-center gap-1">
													<Check className="w-3 h-3" />
													Translated
												</span>
											</div>
											<p className="text-gray-500 text-xs">
												{translatedFileData.size} • {translatedFileData.date}
											</p>
										</div>
									</div>
									<button className="w-8 h-8 rounded-lg hover:bg-[#2d2d2d] flex items-center justify-center transition-colors">
										<MoreVertical className="w-4 h-4 text-gray-400" />
									</button>
								</div>
							</motion.div>
						)}
					</AnimatePresence>

					{/* Language Selector Modal */}
					<AnimatePresence>
						{showLanguageSelector && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="absolute inset-0 bg-black/50 flex items-center justify-center z-30"
							>
								<motion.div
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0.9, opacity: 0 }}
									transition={{ type: "spring", stiffness: 300, damping: 25 }}
									className="bg-[#2d2d2d] rounded-xl p-4 w-[280px] border border-gray-700"
								>
									<h3 className="text-white font-medium text-center mb-4">
										Translate to:
									</h3>
									<div className="grid grid-cols-2 gap-2 mb-4">
										{languages.map((lang) => (
											<motion.button
												key={lang.code}
												animate={{
													borderColor:
														selectedLanguage === lang.code
															? "rgb(239, 68, 68)"
															: "rgb(55, 65, 81)",
													scale: selectedLanguage === lang.code ? 1.02 : 1,
												}}
												transition={{ duration: 0.15 }}
												className={`flex items-center justify-center p-3 rounded-lg border-2 transition-colors ${
													selectedLanguage === lang.code
														? "bg-red-500/10"
														: "bg-[#1a1a1a] hover:bg-[#242424]"
												}`}
											>
												<span
													className={`text-sm font-medium ${
														selectedLanguage === lang.code
															? "text-red-400"
															: "text-gray-300"
													}`}
												>
													{lang.name}
												</span>
											</motion.button>
										))}
									</div>
									<motion.button
										animate={{
											opacity: selectedLanguage ? 1 : 0.5,
										}}
										className="w-full py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors"
									>
										Translate
									</motion.button>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>

					{/* Loading Overlay */}
					<AnimatePresence>
						{showLoading && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="absolute inset-0 bg-black/60 flex items-center justify-center z-30"
							>
								<motion.div
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0.9, opacity: 0 }}
									className="bg-[#2d2d2d] rounded-xl p-6 w-[300px] border border-gray-700 text-center"
								>
									{/* Spinner */}
									<motion.div
										className="w-12 h-12 mx-auto mb-4 rounded-full border-2 border-red-500/20 border-t-red-500"
										animate={{ rotate: 360 }}
										transition={{
											duration: 1,
											repeat: Infinity,
											ease: "linear",
										}}
									/>

									<p className="text-white font-medium mb-2">
										Translating to Spanish...
									</p>

									{/* Progress Bar */}
									<div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden mb-2">
										<motion.div
											className="h-full bg-red-500 rounded-full"
											style={{ width: `${progress}%` }}
										/>
									</div>

									<p className="text-gray-500 text-sm mb-4">{progress}%</p>

									{/* File transformation */}
									<div className="flex items-center justify-center gap-2 text-xs text-gray-400">
										<span className="truncate max-w-[100px]">
											{fileData.name}
										</span>
										<span>→</span>
										<span className="truncate max-w-[100px] text-green-400">
											{translatedFileData.name}
										</span>
									</div>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}
