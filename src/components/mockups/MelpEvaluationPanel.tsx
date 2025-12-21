"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
	Sparkles,
	Upload,
	FileText,
	CheckCircle,
	AlertCircle,
} from "lucide-react";

interface EvaluationItem {
	id: number;
	label: string;
	score: number;
	status: "good" | "warning" | "checking";
}

interface MelpEvaluationPanelProps {
	className?: string;
}

const evaluationItems: EvaluationItem[] = [
	{ id: 1, label: "Relevant Experience", score: 92, status: "good" },
	{ id: 2, label: "Technical Skills Match", score: 85, status: "good" },
	{ id: 3, label: "Education", score: 78, status: "good" },
	{ id: 4, label: "Communication", score: 65, status: "warning" },
	{ id: 5, label: "Leadership", score: 88, status: "good" },
];

export default function MelpEvaluationPanel({
	className = "",
}: MelpEvaluationPanelProps) {
	const [phase, setPhase] = useState<
		"upload" | "processing" | "analyzing" | "results"
	>("upload");
	const [uploadProgress, setUploadProgress] = useState(0);
	const [visibleItems, setVisibleItems] = useState<number[]>([]);
	const [overallScore, setOverallScore] = useState(0);

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
			setPhase("upload");
			setUploadProgress(0);
			setVisibleItems([]);
			setOverallScore(0);

			await delay(800);
			if (!isMounted) return;

			// Upload phase
			setPhase("processing");
			for (let p = 0; p <= 100; p += 4) {
				if (!isMounted) return;
				setUploadProgress(p);
				await delay(30);
			}

			if (!isMounted) return;
			await delay(300);

			// Analyzing phase
			if (!isMounted) return;
			setPhase("analyzing");
			await delay(1500);

			// Results phase
			if (!isMounted) return;
			setPhase("results");

			// Show items one by one
			for (const item of evaluationItems) {
				if (!isMounted) return;
				setVisibleItems((prev) => [...prev, item.id]);
				await delay(300);
			}

			// Animate overall score
			const targetScore = 82;
			for (let s = 0; s <= targetScore; s += 2) {
				if (!isMounted) return;
				setOverallScore(s);
				await delay(20);
			}
			if (!isMounted) return;
			setOverallScore(targetScore);

			// Wait and restart
			await delay(4000);
		};

		runAnimation();
		const interval = setInterval(runAnimation, 12000);
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
					<div className="w-7 h-7 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
						<FileText className="w-4 h-4 text-white" />
					</div>
					<span className="text-white font-medium">MelpAI Evaluation</span>
				</div>
				<div className="flex items-center gap-1 px-2 py-0.5 bg-red-500/10 rounded">
					<Sparkles className="w-3 h-3 text-red-400" />
					<span className="text-xs text-red-400">AI Powered</span>
				</div>
			</div>

			{/* Content */}
			<div className="p-4 min-h-[280px]">
				{/* Upload Phase */}
				<AnimatePresence mode="wait">
					{phase === "upload" && (
						<motion.div
							key="upload"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="flex flex-col items-center justify-center py-8"
						>
							<motion.div
								className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-600 flex items-center justify-center mb-4"
								animate={{ borderColor: ["#4b5563", "#ef4444", "#4b5563"] }}
								transition={{ duration: 2, repeat: Infinity }}
							>
								<Upload className="w-8 h-8 text-gray-400" />
							</motion.div>
							<p className="text-gray-300 text-sm mb-1">Drop CV here</p>
							<p className="text-gray-500 text-xs">PDF, DOC, or DOCX</p>
						</motion.div>
					)}

					{/* Processing Phase */}
					{phase === "processing" && (
						<motion.div
							key="processing"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="flex flex-col items-center justify-center py-8"
						>
							<motion.div
								className="w-16 h-16 rounded-xl bg-[#3d3d3d] flex items-center justify-center mb-4"
								animate={{ scale: [1, 1.05, 1] }}
								transition={{ duration: 0.5, repeat: Infinity }}
							>
								<FileText className="w-8 h-8 text-red-400" />
							</motion.div>
							<p className="text-gray-300 text-sm mb-3">Uploading resume...</p>
							<div className="w-48 h-2 bg-[#3d3d3d] rounded-full overflow-hidden">
								<motion.div
									className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
									style={{ width: `${uploadProgress}%` }}
								/>
							</div>
							<p className="text-gray-500 text-xs mt-2">{uploadProgress}%</p>
						</motion.div>
					)}

					{/* Analyzing Phase */}
					{phase === "analyzing" && (
						<motion.div
							key="analyzing"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="flex flex-col items-center justify-center py-8"
						>
							<motion.div
								className="w-16 h-16 rounded-full border-2 border-red-500/20 border-t-red-500"
								animate={{ rotate: 360 }}
								transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
							/>
							<p className="text-gray-300 text-sm mt-4">Analyzing with AI...</p>
							<div className="flex gap-1 mt-2">
								{["Skills", "Experience", "Education"].map((item, i) => (
									<motion.span
										key={item}
										className="px-2 py-0.5 bg-[#3d3d3d] text-gray-400 text-xs rounded"
										animate={{ opacity: [0.5, 1, 0.5] }}
										transition={{
											duration: 1,
											repeat: Infinity,
											delay: i * 0.2,
										}}
									>
										{item}
									</motion.span>
								))}
							</div>
						</motion.div>
					)}

					{/* Results Phase */}
					{phase === "results" && (
						<motion.div
							key="results"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							{/* Overall Score */}
							<div className="flex items-center justify-between mb-4 p-3 bg-[#1a1a1a] rounded-lg">
								<div>
									<p className="text-gray-400 text-xs">Overall Match Score</p>
									<p className="text-white font-medium">John_Doe_Resume.pdf</p>
								</div>
								<div className="relative w-14 h-14">
									<svg className="w-14 h-14 -rotate-90">
										<circle
											cx="28"
											cy="28"
											r="24"
											fill="none"
											stroke="#3d3d3d"
											strokeWidth="4"
										/>
										<motion.circle
											cx="28"
											cy="28"
											r="24"
											fill="none"
											stroke="#ef4444"
											strokeWidth="4"
											strokeLinecap="round"
											strokeDasharray={150}
											strokeDashoffset={150 - (overallScore / 100) * 150}
										/>
									</svg>
									<div className="absolute inset-0 flex items-center justify-center">
										<span className="text-white font-bold text-sm">
											{overallScore}%
										</span>
									</div>
								</div>
							</div>

							{/* Evaluation Items */}
							<div className="space-y-2">
								{evaluationItems
									.filter((item) => visibleItems.includes(item.id))
									.map((item) => (
										<motion.div
											key={item.id}
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0 }}
											className="flex items-center gap-3 p-2 bg-[#1a1a1a] rounded-lg"
										>
											{item.status === "good" ? (
												<CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
											) : (
												<AlertCircle className="w-4 h-4 text-yellow-400 shrink-0" />
											)}
											<span className="text-gray-300 text-sm flex-1">
												{item.label}
											</span>
											<div className="w-20 h-1.5 bg-[#3d3d3d] rounded-full overflow-hidden">
												<motion.div
													className={`h-full rounded-full ${
														item.status === "good"
															? "bg-green-500"
															: "bg-yellow-500"
													}`}
													initial={{ width: 0 }}
													animate={{ width: `${item.score}%` }}
													transition={{ duration: 0.5, delay: 0.2 }}
												/>
											</div>
											<span className="text-gray-400 text-xs w-8 text-right">
												{item.score}%
											</span>
										</motion.div>
									))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Footer */}
			<div className="flex items-center justify-between px-4 py-3 border-t border-gray-700 bg-[#242424]">
				<span className="text-gray-500 text-xs">
					Position: Senior Developer
				</span>
				<button className="px-3 py-1.5 bg-red-500 text-white text-xs font-medium rounded-lg">
					View Full Report
				</button>
			</div>
		</div>
	);
}
