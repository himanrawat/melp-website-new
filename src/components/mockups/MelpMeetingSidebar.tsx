"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
	Mic,
	MicOff,
	Video,
	VideoOff,
	Monitor,
	MessageSquare,
	Users,
	Settings,
	Phone,
	Sparkles,
	FileText,
	Languages,
} from "lucide-react";

interface Participant {
	id: number;
	name: string;
	isSpeaking: boolean;
	isMuted: boolean;
}

interface MelpMeetingSidebarProps {
	className?: string;
	showControls?: boolean;
}

const participants: Participant[] = [
	{ id: 1, name: "John Smith", isSpeaking: true, isMuted: false },
	{ id: 2, name: "Sarah Wilson", isSpeaking: false, isMuted: false },
	{ id: 3, name: "Mike Johnson", isSpeaking: false, isMuted: true },
	{ id: 4, name: "Emily Davis", isSpeaking: false, isMuted: false },
];

const aiFeatures = [
	{ icon: FileText, label: "AI Summary", active: true },
	{ icon: Languages, label: "Live Captions", active: true },
	{ icon: Sparkles, label: "Smart Notes", active: false },
];

export default function MelpMeetingSidebar({
	className = "",
	showControls = true,
}: MelpMeetingSidebarProps) {
	const [speakingId, setSpeakingId] = useState(1);
	const [meetingTime, setMeetingTime] = useState(0);

	useEffect(() => {
		// Rotate speaking indicator
		const speakingInterval = setInterval(() => {
			setSpeakingId((prev) => {
				const ids = participants.filter((p) => !p.isMuted).map((p) => p.id);
				const currentIdx = ids.indexOf(prev);
				return ids[(currentIdx + 1) % ids.length];
			});
		}, 3000);

		// Update meeting time
		const timeInterval = setInterval(() => {
			setMeetingTime((prev) => prev + 1);
		}, 1000);

		return () => {
			clearInterval(speakingInterval);
			clearInterval(timeInterval);
		};
	}, []);

	const formatTime = (seconds: number) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins.toString().padStart(2, "0")}:${secs
			.toString()
			.padStart(2, "0")}`;
	};

	return (
		<div
			className={`relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 ${className}`}
		>
			{/* Main Video Area */}
			<div className="relative h-40 bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a]">
				{/* Grid of participants */}
				<div className="grid grid-cols-2 gap-1 p-2 h-full">
					{participants.map((participant) => (
						<motion.div
							key={participant.id}
							className={`relative rounded-lg overflow-hidden bg-[#3d3d3d] ${
								speakingId === participant.id ? "ring-2 ring-green-500" : ""
							}`}
							animate={
								speakingId === participant.id ? { scale: [1, 1.02, 1] } : {}
							}
							transition={{
								duration: 0.5,
								repeat: speakingId === participant.id ? Infinity : 0,
							}}
						>
							{/* Avatar */}
							<div className="w-full h-full flex items-center justify-center">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
									<span className="text-white text-xs font-medium">
										{participant.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</span>
								</div>
							</div>

							{/* Name & Status */}
							<div className="absolute bottom-1 left-1 right-1 flex items-center justify-between">
								<span className="text-white text-[10px] truncate bg-black/50 px-1 rounded">
									{participant.name.split(" ")[0]}
								</span>
								{participant.isMuted ? (
									<MicOff className="w-3 h-3 text-red-400" />
								) : speakingId === participant.id ? (
									<motion.div className="flex items-center gap-0.5">
										{[1, 2, 3].map((i) => (
											<motion.div
												key={i}
												className="w-0.5 bg-green-400 rounded-full"
												animate={{ height: ["4px", "8px", "4px"] }}
												transition={{
													duration: 0.4,
													repeat: Infinity,
													delay: i * 0.1,
												}}
											/>
										))}
									</motion.div>
								) : null}
							</div>
						</motion.div>
					))}
				</div>

				{/* Meeting Info Overlay */}
				<div className="absolute top-2 left-2 flex items-center gap-2">
					<div className="flex items-center gap-1 px-2 py-1 bg-red-500/20 rounded">
						<motion.div
							className="w-1.5 h-1.5 bg-red-500 rounded-full"
							animate={{ opacity: [1, 0.5, 1] }}
							transition={{ duration: 1, repeat: Infinity }}
						/>
						<span className="text-red-400 text-[10px] font-medium">REC</span>
					</div>
					<span className="text-white text-[10px] bg-black/50 px-2 py-1 rounded">
						{formatTime(meetingTime)}
					</span>
				</div>
			</div>

			{/* AI Features Panel */}
			<div className="border-t border-gray-800 p-3">
				<div className="flex items-center gap-2 mb-2">
					<Sparkles className="w-4 h-4 text-red-400" />
					<span className="text-white text-sm font-medium">AI Features</span>
				</div>
				<div className="flex gap-2">
					{aiFeatures.map((feature) => (
						<motion.button
							key={feature.label}
							className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs ${
								feature.active
									? "bg-red-500/20 text-red-400 border border-red-500/30"
									: "bg-[#2d2d2d] text-gray-400 border border-gray-700"
							}`}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<feature.icon className="w-3 h-3" />
							{feature.label}
						</motion.button>
					))}
				</div>
			</div>

			{/* Participants List */}
			<div className="border-t border-gray-800 p-3">
				<div className="flex items-center justify-between mb-2">
					<div className="flex items-center gap-2">
						<Users className="w-4 h-4 text-gray-400" />
						<span className="text-gray-300 text-sm">
							Participants ({participants.length})
						</span>
					</div>
				</div>
				<div className="space-y-1">
					{participants.slice(0, 3).map((participant) => (
						<div key={participant.id} className="flex items-center gap-2 py-1">
							<div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
								<span className="text-white text-[8px]">
									{participant.name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</span>
							</div>
							<span className="text-gray-300 text-xs flex-1">
								{participant.name}
							</span>
							{participant.isMuted ? (
								<MicOff className="w-3 h-3 text-red-400" />
							) : (
								<Mic className="w-3 h-3 text-gray-500" />
							)}
						</div>
					))}
					{participants.length > 3 && (
						<button className="text-gray-500 text-xs hover:text-gray-300">
							+{participants.length - 3} more
						</button>
					)}
				</div>
			</div>

			{/* Controls */}
			{showControls && (
				<div className="border-t border-gray-800 p-3 bg-[#242424]">
					<div className="flex items-center justify-center gap-3">
						<motion.button
							className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<Mic className="w-4 h-4 text-white" />
						</motion.button>
						<motion.button
							className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<Video className="w-4 h-4 text-white" />
						</motion.button>
						<motion.button
							className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<Monitor className="w-4 h-4 text-white" />
						</motion.button>
						<motion.button
							className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<MessageSquare className="w-4 h-4 text-white" />
						</motion.button>
						<motion.button
							className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<Phone className="w-4 h-4 text-white rotate-135" />
						</motion.button>
					</div>
				</div>
			)}
		</div>
	);
}
