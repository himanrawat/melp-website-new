"use client";

import React from "react";
import {
	AppWindow,
	Calendar,
	CalendarDays,
	CheckCircle,
	Clock3,
	Contact,
	FileText,
	Filter,
	HardDrive,
	Image,
	Languages,
	LayoutGrid,
	Mic,
	MoreVertical,
	Network,
	Paperclip,
	Phone,
	Search,
	Settings,
	Smile,
	Sparkles,
	Users,
	UsersRound,
	Video,
} from "lucide-react";

export default function EnterpriseChatDashboard() {
	const conversations = [
		{
			name: "Priya Nair",
			role: "LEADERSHIP",
			preview: "Launch runbook locked for Friday 09:00 EST",
			date: "Today",
			avatar: "PN",
		},
		{
			name: "Marcus Lee",
			role: "NETWORK",
			preview: "Firewall policy bundle validated",
			date: "Dec 18",
			avatar: "ML",
		},
		{
			name: "Elena Novak",
			role: "CO-WORKER",
			preview: "Telemetry dashboard handoff ready",
			date: "Dec 12",
			avatar: "EN",
		},
		{
			name: "Executive Brief",
			role: "LEADERSHIP",
			preview: "Deck updated with risk owners",
			date: "Dec 10",
			avatar: "EB",
		},
		{
			name: "Ops Command",
			role: "CO-WORKER",
			preview: "Shift roster confirmed",
			date: "Dec 05",
			avatar: "OC",
		},
		{
			name: "Vendor Desk",
			role: "NETWORK",
			preview: "SLA addendum reviewed",
			date: "Nov 22",
			avatar: "VD",
		},
		{
			name: "Change Control",
			role: "NETWORK",
			preview: "Rollback tested in staging",
			date: "Nov 12",
			avatar: "CC",
		},
		{
			name: "Risk & Compliance",
			role: "CO-WORKER",
			preview: "Audit items cleared",
			date: "Nov 02",
			avatar: "RC",
		},
	];

	const messages = [
		{
			sender: "Priya Nair",
			initials: "PN",
			text: "Confirming we are go for the Friday launch window. Any open risks we need to flag for ELT?",
			time: "09:08 AM",
			date: "Dec 17, 2025",
			isYou: false,
		},
		{
			sender: "Marcus Lee",
			initials: "ML",
			text: "Network change set validated; rollback runbook is signed. Telemetry probes are green in pre-prod.",
			time: "09:10 AM",
			isYou: false,
		},
		{
			sender: "Elena Novak",
			initials: "EN",
			text: "Analytics dashboards are pinned to the launch workspace. SLO alerts will page the on-call rotation immediately.",
			time: "09:12 AM",
			isYou: false,
		},
		{
			sender: "You",
			text: "Launch brief for ELT\n1. Customer comms: approved and scheduled.\n2. Pricing & checkout: interactive tiers live; rollback tested.\n3. Observability: dashboards pinned; alerts page rotation immediately.\n4. Support: command channel staffed; DR plan printed and onsite.",
			time: "09:14 AM",
			isYou: true,
		},
		{
			sender: "Priya Nair",
			initials: "PN",
			text: "Great. Please drop a 3-line summary for ELT before 11:30 and attach to the deck.",
			time: "09:15 AM",
			isYou: false,
		},
		{
			sender: "You",
			text: "On it. I'll send the summary and add it to the deck within 10 minutes.",
			time: "09:16 AM",
			isYou: true,
		},
	];

	const primaryNav = [
		{ label: "Dashboard", icon: LayoutGrid },
		{ label: "Recents", icon: Clock3, badge: 3, active: true },
	];

	const secondaryNav = [
		{ label: "Contacts", icon: Contact },
		{ label: "Teams", icon: Users },
		{ label: "Groups", icon: UsersRound },
		{ label: "Calendar", icon: CalendarDays },
		{ label: "Network", icon: Network },
		{ label: "Melp Drive", icon: HardDrive },
		{ label: "Apps", icon: AppWindow },
		{ label: "Melp Assistant", icon: Sparkles },
	];

	const getInitials = (name = "") =>
		name
			.split(" ")
			.map((part) => part[0])
			.filter(Boolean)
			.join("")
			.slice(0, 2)
			.toUpperCase();

	return (
		<div className="w-full h-screen bg-white flex flex-col font-sans antialiased max-w-7xl mx-auto">
			{/* Top Navigation */}
			<div className="h-16 bg-white border-b border-slate-200 flex items-center justify-center shadow-sm">
				{/* <div className="grid grid-cols-[auto,1fr,auto] items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8 gap-6"> */}
				<div className="flex justify-between w-full px-4 sm:px-6 lg:px-8 gap-6">
					<div className="flex items-center gap-3">
						<img src="/logo.svg" alt="Melp logo" className="h-auto w-28" />
					</div>

					<div className="w-full max-w-lg justify-self-center">
						<div className="relative">
							<Search
								className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
								strokeWidth={1.7}
							/>
							<input
								type="text"
								placeholder="Search messages, files, contacts..."
								className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-300 transition-all"
							/>
						</div>
					</div>

					<div className="flex items-center gap-4 justify-self-end">
						<button className="px-4 py-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-medium rounded-md shadow-md hover:shadow-lg transition-all">
							LIVE CALLS
						</button>
						<div className="flex items-center gap-[clamp(8px,1.5vw,12px)] text-slate-500">
							<Video
								className="w-6 h-6 hover:text-slate-700 cursor-pointer transition-colors"
								strokeWidth={1.7}
							/>
							<Phone
								className="w-6 h-6 hover:text-slate-700 cursor-pointer transition-colors"
								strokeWidth={1.7}
							/>
							<Calendar
								className="w-6 h-6 hover:text-slate-700 cursor-pointer transition-colors"
								strokeWidth={1.7}
							/>
							<Search
								className="w-6 h-6 hover:text-slate-700 cursor-pointer transition-colors"
								strokeWidth={1.7}
							/>
							<MoreVertical
								className="w-6 h-6 hover:text-slate-700 cursor-pointer transition-colors"
								strokeWidth={1.7}
							/>
						</div>
						<div className="w-9 h-9 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-md">
							JD
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-1 overflow-hidden justify-center bg-white">
				<div className="flex w-full max-w-7xl">
					{/* Left Sidebar */}
					<div className="w-56 bg-white border-r border-slate-200 flex flex-col shadow-sm shrink-0">
						<div className="p-4 space-y-1">
							{primaryNav.map((item, i) => {
								const Icon = item.icon;
								return (
									<div
										key={i}
								className={`flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer transition-all ${
											item.active
												? "bg-rose-50 text-rose-600"
												: "text-slate-600 hover:bg-slate-50"
										}`}
									>
										<Icon
											className={`w-5 h-5 ${
												item.active ? "text-rose-500" : "text-slate-400"
											}`}
											strokeWidth={1.7}
										/>
										<span className="text-sm font-medium">{item.label}</span>
										{item.badge && (
											<span className="ml-auto bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full">
												{item.badge}
											</span>
										)}
									</div>
								);
							})}

							<div className="pl-8 space-y-1 pt-1">
								{["Calls", "Messages", "Topics", "Groups", "Meetings"].map(
									(sub, i) => (
										<div
											key={i}
											className={`px-3 py-2 rounded-md text-sm cursor-pointer transition-all ${
												sub === "Messages"
													? "bg-slate-100 text-slate-800 font-medium"
													: "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
											}`}
										>
											{sub}
											{sub === "Groups" && (
												<span className="ml-2 bg-slate-300 text-slate-600 text-xs px-1.5 py-0.5 rounded">
													1
												</span>
											)}
										</div>
									)
								)}
							</div>
						</div>

						<div className="border-t border-slate-100 p-4 space-y-1">
							{secondaryNav.map((item, i) => {
								const Icon = item.icon;
								return (
									<div
										key={i}
										className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50 cursor-pointer transition-all"
									>
										<span className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center">
											<Icon
												className="w-4 h-4 text-slate-500"
												strokeWidth={1.7}
											/>
										</span>
										<span className="text-sm">{item.label}</span>
									</div>
								);
							})}
						</div>
					</div>

					{/* Conversation List */}
					<div className="w-80 bg-white border-r border-slate-200 flex flex-col shrink-0">
						<div className="p-4 border-b border-slate-100 flex items-center justify-between">
							<div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide">
								<span className="text-slate-500">Recents</span>
								<span className="text-slate-400">/</span>
								<span className="text-rose-500">Messages</span>
							</div>
							<div className="flex items-center gap-[clamp(6px,1vw,8px)] text-slate-400">
								<Search
									className="w-4 h-4 hover:text-slate-600 cursor-pointer transition-colors"
									strokeWidth={1.8}
								/>
								<Filter
									className="w-4 h-4 hover:text-slate-600 cursor-pointer transition-colors"
									strokeWidth={1.8}
								/>
							</div>
						</div>

						<div className="flex-1 overflow-y-auto">
							{conversations.map((conv, i) => (
								<div
									key={i}
									className={`flex items-center gap-3 px-4 py-3 border-b border-slate-50 cursor-pointer transition-all ${
										i === 0 ? "bg-slate-50" : "hover:bg-slate-50"
									}`}
								>
									<div className="w-11 h-11 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center text-slate-600 text-sm font-medium flex-shrink-0 shadow-sm">
										{conv.avatar}
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-center gap-2">
											<span className="text-sm font-medium text-slate-800 truncate">
												{conv.name}
											</span>
											<span
												className={`text-xs px-1.5 py-0.5 rounded font-medium ${
													conv.role === "LEADERSHIP"
														? "bg-amber-100 text-amber-700"
														: conv.role === "NETWORK"
														? "bg-blue-100 text-blue-700"
														: "bg-slate-100 text-slate-600"
												}`}
											>
												{conv.role}
											</span>
										</div>
										<p className="text-xs text-slate-500 truncate mt-0.5">
											{conv.preview}
										</p>
									</div>
									<span className="text-xs text-slate-400 flex-shrink-0">
										{conv.date}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Main Chat Area */}
					<div className="flex-1 flex flex-col bg-slate-50">
						{/* Chat Header */}
						{/* <div className="h-16 bg-white border-b border-slate-200 grid grid-cols-[auto,1fr,auto] items-center px-6 shadow-sm"> */}
						<div className="h-16 bg-white border-b border-slate-200 flex justify-between items-center px-6 shadow-sm">
							<div className="flex items-center gap-2">
								<div className="w-10 h-10 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full flex items-center justify-center text-white font-medium shadow-md">
									PN
								</div>
								<div className="leading-tight">
									<div className="font-medium text-slate-800">Priya Nair</div>
									<div className="text-[11px] text-emerald-500 flex items-center gap-1">
										<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
										Active now
									</div>
								</div>
							</div>

							<div className="flex justify-center">
								<div className="flex items-center gap-4">
									<span className="text-sm text-rose-600 font-semibold border-b-2 border-rose-500 pb-2 px-2">
										MESSAGES
									</span>
									<span className="text-sm text-slate-500 pb-2 px-2 hover:text-slate-700 cursor-pointer">
										FILES
									</span>
									<span className="text-sm text-slate-500 pb-2 px-2 hover:text-slate-700 cursor-pointer">
										LINKS
									</span>
								</div>
							</div>

							<div className="flex items-center justify-end gap-[clamp(8px,1.5vw,12px)] text-slate-500">
								<Video
									className="w-6 h-6 hover:text-slate-700 cursor-pointer transition-colors"
									strokeWidth={1.7}
								/>
								<Phone
									className="w-6 h-6 hover:text-slate-700 cursor-pointer transition-colors"
									strokeWidth={1.7}
								/>
								<Calendar
									className="w-6 h-6 hover:text-slate-700 cursor-pointer transition-colors"
									strokeWidth={1.7}
								/>
								<Search
									className="w-6 h-6 hover:text-slate-700 cursor-pointer transition-colors"
									strokeWidth={1.7}
								/>
								<MoreVertical
									className="w-6 h-6 hover:text-slate-700 cursor-pointer transition-colors"
									strokeWidth={1.7}
								/>
							</div>
						</div>

						{/* Messages */}
						<div className="flex-1 overflow-hidden p-6 space-y-4 bg-white">
							{messages.map((msg, i) => (
								<div key={i}>
									{msg.date && (
										<div className="flex items-center gap-4 my-6">
											<div className="flex-1 h-px bg-slate-200" />
											<span className="text-xs text-slate-400 font-medium">
												{msg.date}
											</span>
											<div className="flex-1 h-px bg-slate-200" />
										</div>
									)}
									<div
										className={`flex ${
											msg.isYou ? "justify-end" : "justify-start"
										}`}
									>
										<div className={`max-w-xl ${msg.isYou ? "order-2" : ""}`}>
											{!msg.isYou && (
												<div className="flex items-center gap-2 mb-1">
													<div className="w-8 h-8 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full flex items-center justify-center text-white text-xs font-medium shadow-sm">
														{msg.initials || getInitials(msg.sender)}
													</div>
													<span className="text-sm font-medium text-slate-700">
														{msg.sender}
													</span>
												</div>
											)}
											<div
												className={`px-4 py-3 rounded-md shadow-sm ${
													msg.isYou
														? "bg-rose-50 text-slate-800 border border-rose-100"
														: "bg-slate-100 text-slate-800 border border-slate-200"
												}`}
											>
												<p className="text-sm leading-relaxed tracking-[0.0025em] whitespace-pre-line">
													{msg.text}
												</p>
												{msg.hasFile && (
													<div
														className={`mt-3 flex items-center gap-3 p-2.5 rounded-md ${
															msg.isYou ? "bg-slate-600/50" : "bg-slate-50"
														}`}
													>
														<div className="w-10 h-10 bg-rose-500 rounded-md flex items-center justify-center shadow-sm">
															<FileText
																className="w-5 h-5 text-white"
																strokeWidth={1.7}
															/>
														</div>
														<div>
															<div
																className={`text-sm font-medium ${
																	msg.isYou ? "text-white" : "text-slate-700"
																}`}
															>
																{msg.fileName}
															</div>
															<div
																className={`text-xs ${
																	msg.isYou
																		? "text-slate-300"
																		: "text-slate-400"
																}`}
															>
																{msg.fileSize}
															</div>
														</div>
													</div>
												)}
											</div>
											<div
												className={`flex items-center gap-2 mt-1 ${
													msg.isYou ? "justify-end" : "justify-start"
												}`}
											>
												<span className="text-xs text-slate-400">
													{msg.time}
												</span>
												{msg.isYou && (
													<CheckCircle
														className="w-4 h-4 text-emerald-500"
														strokeWidth={2}
													/>
												)}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Message Input */}
						<div className="p-4 bg-white border-t border-slate-200">
							<div className="flex items-center gap-3 bg-slate-50 rounded-md px-4 py-3 border border-slate-200">
								<Sparkles className="w-5 h-5 text-rose-400" strokeWidth={1.7} />
								<input
									type="text"
									placeholder="Write a message or ask Melp AI..."
									className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none"
								/>
								<span className="text-xs text-slate-400">0 / 2000</span>
							</div>
							<div className="flex items-center justify-between mt-3 px-2">
								<div className="flex items-center gap-[clamp(12px,2vw,16px)] text-slate-400">
									<Paperclip
										className="w-6 h-6 hover:text-slate-600 cursor-pointer transition-colors"
										strokeWidth={1.7}
									/>
									<Smile
										className="w-6 h-6 hover:text-slate-600 cursor-pointer transition-colors"
										strokeWidth={1.7}
									/>
									<Image
										className="w-6 h-6 hover:text-slate-600 cursor-pointer transition-colors"
										strokeWidth={1.7}
									/>
									<FileText
										className="w-6 h-6 hover:text-slate-600 cursor-pointer transition-colors"
										strokeWidth={1.7}
									/>
								</div>
								<div className="flex items-center gap-[clamp(8px,1.5vw,12px)]">
									<button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white text-sm font-medium rounded-md shadow-md hover:shadow-lg transition-all">
										<Languages className="w-4 h-4" strokeWidth={2} />
										TRANSLATE
									</button>
									<Mic
										className="w-6 h-6 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
										strokeWidth={1.7}
									/>
									<Settings
										className="w-6 h-6 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
										strokeWidth={1.7}
									/>
									<button className="px-6 py-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-medium rounded-md shadow-md hover:shadow-lg transition-all">
										SEND
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
