"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, FileText, FileSpreadsheet, File, ImageIcon } from "lucide-react";
import { useState, useEffect } from "react";

// Message types
type MessageType = "text" | "mention" | "file" | "image" | "reply";

interface FileAttachment {
	name: string;
	type: "pdf" | "word" | "excel" | "generic";
	size: string;
}

interface ReplyContext {
	userName: string;
	message: string;
}

interface ChatMessage {
	id: number;
	user: {
		name: string;
		role: string;
		image: string;
	};
	message: string;
	position: string;
	type: MessageType;
	mentionedUser?: string;
	file?: FileAttachment;
	imageUrl?: string;
	replyTo?: ReplyContext;
}

// Chat conversation data showcasing different features
const chatMessages: ChatMessage[] = [
	{
		id: 1,
		user: {
			name: "Sarah Chen",
			role: "Product Lead",
			image: "/users/user-1.png",
		},
		message: "Hey @marcus, can you review the latest designs before EOD?",
		position: "left-top",
		type: "mention",
		mentionedUser: "marcus",
	},
	{
		id: 2,
		user: {
			name: "Marcus Wright",
			role: "UX Designer",
			image: "/users/user-2.png",
		},
		message: "Here's the design mockup!",
		position: "right-top",
		type: "image",
		imageUrl: "/design.png",
	},
	{
		id: 3,
		user: {
			name: "Emily Torres",
			role: "Marketing Manager",
			image: "/users/user-3.png",
		},
		message: "Sharing the Q4 report",
		position: "right-bottom",
		type: "file",
		file: {
			name: "Q4_Report.pdf",
			type: "pdf",
			size: "2.4 MB",
		},
	},
	{
		id: 4,
		user: {
			name: "David Park",
			role: "Frontend Developer",
			image: "/users/user-4.png",
		},
		message: "Done! Pushed the changes to staging.",
		position: "left-bottom",
		type: "reply",
		replyTo: {
			userName: "Sarah Chen",
			message: "Hey @marcus, can you review the latest designs?",
		},
	},
	{
		id: 5,
		user: {
			name: "Lisa Kumar",
			role: "Engineering Lead",
			image: "/users/user-5.png",
		},
		message: "Here's the timeline",
		position: "left-top",
		type: "file",
		file: {
			name: "Timeline.xlsx",
			type: "excel",
			size: "856 KB",
		},
	},
	{
		id: 6,
		user: {
			name: "James Mitchell",
			role: "DevOps Engineer",
			image: "/users/user-6.png",
		},
		message: "Great work @lisa! Infrastructure is ready for deployment.",
		position: "right-bottom",
		type: "mention",
		mentionedUser: "lisa",
	},
];

// Position configurations for chat bubbles
const positionConfig = {
	"left-top": {
		desktop: "top-[22%] left-[3%]",
		bubbleAlign: "items-start",
	},
	"right-top": {
		desktop: "top-[18%] right-[3%]",
		bubbleAlign: "items-end",
	},
	"left-bottom": {
		desktop: "top-[45%] left-[5%]",
		bubbleAlign: "items-start",
	},
	"right-bottom": {
		desktop: "top-[42%] right-[5%]",
		bubbleAlign: "items-end",
	},
};

// Typing indicator component
function TypingIndicator() {
	return (
		<div className="flex items-center gap-1.5 px-2 py-1">
			<motion.span
				className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full"
				animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1, 0.8] }}
				transition={{ duration: 1, repeat: Infinity, delay: 0 }}
			/>
			<motion.span
				className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full"
				animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1, 0.8] }}
				transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
			/>
			<motion.span
				className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full"
				animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1, 0.8] }}
				transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
			/>
		</div>
	);
}

// Online status indicator with blinking animation
function OnlineIndicator() {
	return (
		<span className="relative flex h-2.5 w-2.5">
			<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
			<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
		</span>
	);
}

// Mention pill component
function MentionPill({ username }: { username: string }) {
	return (
		<span className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-blue-500/20 dark:bg-blue-400/20 text-blue-600 dark:text-blue-400 font-medium text-xs">
			@{username}
		</span>
	);
}

// File attachment icon based on type
function FileIcon({ type }: { type: FileAttachment["type"] }) {
	const iconClass = "w-5 h-5";
	switch (type) {
		case "pdf":
			return <FileText className={`${iconClass} text-red-500`} />;
		case "word":
			return <FileText className={`${iconClass} text-blue-500`} />;
		case "excel":
			return <FileSpreadsheet className={`${iconClass} text-green-500`} />;
		default:
			return <File className={`${iconClass} text-neutral-500`} />;
	}
}

// File attachment component
function FileAttachmentUI({ file }: { file: FileAttachment }) {
	return (
		<div className="flex items-center gap-3 p-2 mt-2 rounded-lg bg-neutral-100/80 dark:bg-neutral-700/50 border border-neutral-200/50 dark:border-neutral-600/50">
			<div className="shrink-0 w-10 h-10 rounded-lg bg-white dark:bg-neutral-800 flex items-center justify-center shadow-sm">
				<FileIcon type={file.type} />
			</div>
			<div className="flex-1 min-w-0">
				<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100 truncate">
					{file.name}
				</p>
				<p className="text-[10px] text-neutral-500 dark:text-neutral-400">
					{file.size}
				</p>
			</div>
		</div>
	);
}

// Image preview component - matches file attachment width behavior
function ImagePreview({ imageUrl, alt }: { imageUrl: string; alt: string }) {
	return (
		<div className="mt-2 rounded-lg overflow-hidden border border-neutral-200/50 dark:border-neutral-600/50">
			<div className="relative w-48 h-24 bg-neutral-100 dark:bg-neutral-700">
				<Image src={imageUrl} alt={alt} fill className="object-cover" />
				<div className="absolute bottom-1 right-1 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-sm">
					<ImageIcon className="w-3 h-3 text-white" />
					<span className="text-[10px] text-white">Image</span>
				</div>
			</div>
		</div>
	);
}

// Reply context component
function ReplyContextUI({ replyTo }: { replyTo: ReplyContext }) {
	return (
		<div className="mb-2 pl-2 border-l-2 border-blue-400 dark:border-blue-500">
			<p className="text-[10px] font-medium text-blue-600 dark:text-blue-400">
				{replyTo.userName}
			</p>
			<p className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate max-w-[180px]">
				{replyTo.message}
			</p>
		</div>
	);
}

// Parse message and render with mentions highlighted
function MessageContent({
	message,
	type,
	mentionedUser,
}: {
	message: string;
	type: MessageType;
	mentionedUser?: string;
}) {
	if (type === "mention" && mentionedUser) {
		const parts = message.split(new RegExp(`(@${mentionedUser})`, "i"));
		return (
			<span>
				{parts.map((part, index) =>
					part.toLowerCase() === `@${mentionedUser}` ? (
						<MentionPill key={index} username={mentionedUser} />
					) : (
						<span key={index}>{part}</span>
					)
				)}
			</span>
		);
	}
	return <span>{message}</span>;
}

// Typewriter text component with mention support
function TypewriterText({
	message,
	type,
	mentionedUser,
	onComplete,
}: {
	message: string;
	type: MessageType;
	mentionedUser?: string;
	onComplete?: () => void;
}) {
	const [displayedText, setDisplayedText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isComplete, setIsComplete] = useState(false);

	useEffect(() => {
		setDisplayedText("");
		setCurrentIndex(0);
		setIsComplete(false);
	}, [message]);

	useEffect(() => {
		if (currentIndex < message.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + message[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, 35);

			return () => clearTimeout(timeout);
		} else if (currentIndex === message.length && !isComplete) {
			setIsComplete(true);
			if (onComplete) {
				onComplete();
			}
		}
	}, [currentIndex, message, onComplete, isComplete]);

	// Show full message with proper formatting once complete
	if (isComplete) {
		return (
			<MessageContent
				message={message}
				type={type}
				mentionedUser={mentionedUser}
			/>
		);
	}

	return (
		<span>
			{displayedText}
			{currentIndex < message.length && (
				<motion.span
					className="inline-block w-0.5 h-4 bg-neutral-600 dark:bg-neutral-300 ml-0.5"
					animate={{ opacity: [1, 0] }}
					transition={{ duration: 0.5, repeat: Infinity }}
				/>
			)}
		</span>
	);
}

interface ChatBubbleProps {
	message: ChatMessage;
	isTyping: boolean;
	showMessage: boolean;
}

function ChatBubble({
	message,
	isTyping,
	showMessage,
}: Readonly<ChatBubbleProps>) {
	const config =
		positionConfig[message.position as keyof typeof positionConfig];
	const isLeft = message.position.includes("left");
	// Fixed width for file, image, reply - dynamic for text, mention
	const needsFixedWidth =
		message.type === "file" ||
		message.type === "image" ||
		message.type === "reply";

	return (
		<motion.div
			className={`absolute hidden lg:flex flex-col gap-2 z-30 ${
				needsFixedWidth ? "w-[280px]" : "max-w-sm"
			} ${config.desktop} ${config.bubbleAlign}`}
			initial={{ opacity: 0, scale: 0.8, y: 20 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			exit={{ opacity: 0, scale: 0.95, y: -10 }}
			transition={{
				duration: 0.5,
				ease: [0.21, 0.47, 0.32, 0.98],
			}}
		>
			{/* User info with online status and role */}
			<div
				className={`flex items-center gap-2.5 ${
					isLeft ? "" : "flex-row-reverse"
				}`}
			>
				<div className="relative">
					<div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-white dark:ring-neutral-700 shadow-lg">
						<Image
							src={message.user.image}
							alt={message.user.name}
							width={44}
							height={44}
							className="object-cover"
						/>
					</div>
					<div className="absolute -bottom-0.5 -right-0.5 p-0.5 bg-white dark:bg-neutral-800 rounded-full">
						<OnlineIndicator />
					</div>
				</div>
				<div
					className={`flex flex-col ${isLeft ? "items-start" : "items-end"}`}
				>
					<span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
						{message.user.name}
					</span>
					<span className="text-xs text-neutral-500 dark:text-neutral-400">
						{message.user.role}
					</span>
				</div>
			</div>

			{/* Glass chat bubble - no tail, sharp corner towards avatar */}
			<motion.div
				className={`relative ${isLeft ? "ml-13" : "mr-13"}`}
				initial={{ scale: 0.95 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.3 }}
			>
				<div
					className={`
						relative px-4 py-3
						bg-white/40 dark:bg-neutral-800/50
						backdrop-blur-xl backdrop-saturate-150
						border border-white/50 dark:border-neutral-500/30
						shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5)]
						dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]
						${
							isLeft
								? "rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-sm"
								: "rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-sm"
						}
					`}
				>
					{isTyping && !showMessage ? (
						<TypingIndicator />
					) : (
						<>
							{/* Reply context if present */}
							{message.type === "reply" && message.replyTo && (
								<ReplyContextUI replyTo={message.replyTo} />
							)}

							{/* Message text */}
							<p className="relative text-sm text-neutral-800 dark:text-neutral-100 leading-relaxed">
								<TypewriterText
									message={message.message}
									type={message.type}
									mentionedUser={message.mentionedUser}
								/>
							</p>

							{/* File attachment if present */}
							{message.type === "file" && message.file && (
								<FileAttachmentUI file={message.file} />
							)}

							{/* Image preview if present */}
							{message.type === "image" && message.imageUrl && (
								<ImagePreview imageUrl={message.imageUrl} alt="Shared image" />
							)}
						</>
					)}
				</div>
			</motion.div>
		</motion.div>
	);
}

// Mobile chat bubble component
function MobileChatBubble({
	message,
	isTyping,
	showMessage,
}: Readonly<ChatBubbleProps>) {
	const isLeft = message.position.includes("left");
	// Fixed width for file, image, reply - dynamic for text, mention
	const needsFixedWidth =
		message.type === "file" ||
		message.type === "image" ||
		message.type === "reply";

	return (
		<motion.div
			className={`flex gap-2 ${isLeft ? "" : "flex-row-reverse"}`}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.4 }}
		>
			<div className="relative shrink-0">
				<div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white dark:ring-neutral-700 shadow-md">
					<Image
						src={message.user.image}
						alt={message.user.name}
						width={36}
						height={36}
						className="object-cover"
					/>
				</div>
				<div className="absolute -bottom-0.5 -right-0.5 p-0.5 bg-white dark:bg-neutral-800 rounded-full">
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
						<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
					</span>
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<div
					className={`flex items-center gap-1.5 ${
						isLeft ? "" : "flex-row-reverse"
					}`}
				>
					<span className="text-xs font-semibold text-neutral-800 dark:text-neutral-100">
						{message.user.name}
					</span>
					<span className="text-[10px] text-neutral-500 dark:text-neutral-400">
						{message.user.role}
					</span>
				</div>
				<div
					className={`
						px-3 py-2
						${needsFixedWidth ? "w-[220px]" : "max-w-[220px]"}
						bg-white/10 dark:bg-neutral-800/50
						backdrop-blur-xl backdrop-saturate-150
						border border-white/50 dark:border-neutral-500/30
						shadow-[0_4px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5)]
						dark:shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
						${
							isLeft
								? "rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-sm"
								: "rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-sm"
						}
					`}
				>
					{isTyping && !showMessage ? (
						<TypingIndicator />
					) : (
						<>
							{message.type === "reply" && message.replyTo && (
								<ReplyContextUI replyTo={message.replyTo} />
							)}
							<p className="text-xs text-neutral-800 dark:text-neutral-100">
								<TypewriterText
									message={message.message}
									type={message.type}
									mentionedUser={message.mentionedUser}
								/>
							</p>
							{message.type === "file" && message.file && (
								<FileAttachmentUI file={message.file} />
							)}
							{message.type === "image" && message.imageUrl && (
								<ImagePreview imageUrl={message.imageUrl} alt="Shared image" />
							)}
						</>
					)}
				</div>
			</div>
		</motion.div>
	);
}

export default function ChatHeroSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(true);
	const [showMessage, setShowMessage] = useState(false);

	// Slower animation cycle timing
	const TYPING_DURATION = 1800;
	const MESSAGE_DURATION = 4500; // Slightly longer to view attachments
	const TOTAL_CYCLE = TYPING_DURATION + MESSAGE_DURATION;

	useEffect(() => {
		const cycle = () => {
			setIsTyping(true);
			setShowMessage(false);

			const typingTimer = setTimeout(() => {
				setIsTyping(false);
				setShowMessage(true);
			}, TYPING_DURATION);

			const nextTimer = setTimeout(() => {
				setCurrentIndex((prev) => (prev + 1) % chatMessages.length);
			}, TOTAL_CYCLE);

			return () => {
				clearTimeout(typingTimer);
				clearTimeout(nextTimer);
			};
		};

		const cleanup = cycle();
		const interval = setInterval(cycle, TOTAL_CYCLE);

		return () => {
			cleanup();
			clearInterval(interval);
		};
	}, [currentIndex]);

	const currentMessage = chatMessages[currentIndex];

	return (
		<section className="relative min-h-[120vh] overflow-hidden bg-neutral-50 dark:bg-neutral-950">
			{/* Subtle grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_40%,transparent_100%)] opacity-50" />

			{/* Center content */}
			<div className="relative z-10 flex flex-col items-center pt-24 sm:pt-32 lg:pt-40 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					{/* Main heading */}
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50"
					>
						Communicate Better
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.15,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed"
					>
						Melp gives you the tools & features you need to create truly
						seamless team communication across departments and time zones.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.3,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
					>
						<Button
							size="lg"
							className="btn-brand-gradient px-8 h-14 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full"
							asChild
						>
							<Link href="/pricing">Start Your 14 Days Free Trial</Link>
						</Button>
					</motion.div>

					{/* Watch intro link */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="mt-8"
					>
						<Link
							href="#demo"
							className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
						>
							<span className="w-10 h-10 rounded-full border-2 border-neutral-300 dark:border-neutral-700 group-hover:border-neutral-400 dark:group-hover:border-neutral-500 flex items-center justify-center transition-colors">
								<Play className="w-4 h-4 ml-0.5" />
							</span>
							<span className="text-sm font-medium">Watch 1 min intro</span>
						</Link>
					</motion.div>

					{/* Product Image */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.6,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						className="mt-16 relative"
					>
						{/* Light mode image */}
						<div className="block dark:hidden">
							<Image
								src="/MelpApp-Messages-light.png"
								alt="Melp Messages Interface"
								width={1200}
								height={800}
								className="rounded-xl shadow-2xl border border-neutral-200/50"
								priority
							/>
						</div>
						{/* Dark mode image */}
						<div className="hidden dark:block">
							<Image
								src="/MelpApp-Messages-dark.png"
								alt="Melp Messages Interface"
								width={1200}
								height={800}
								className="rounded-xl shadow-2xl border border-neutral-800/50"
								priority
							/>
						</div>
					</motion.div>
				</div>

				{/* Mobile: Chat bubbles below content */}
				<div className="lg:hidden mt-12 w-full max-w-sm mx-auto space-y-4 pb-12">
					<AnimatePresence mode="wait">
						<MobileChatBubble
							key={currentMessage.id}
							message={currentMessage}
							isTyping={isTyping}
							showMessage={showMessage}
						/>
					</AnimatePresence>
				</div>
			</div>

			{/* Desktop: Animated chat bubbles */}
			<AnimatePresence mode="wait">
				<ChatBubble
					key={currentMessage.id}
					message={currentMessage}
					isTyping={isTyping}
					showMessage={showMessage}
				/>
			</AnimatePresence>
		</section>
	);
}
