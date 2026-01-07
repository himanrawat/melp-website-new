"use client";

import Image from "next/image";
import { motion } from "motion/react";

export interface Integration {
	name: string;
	logo: string;
	position: "top" | "top-right" | "right" | "bottom-right" | "bottom" | "bottom-left" | "left" | "top-left";
	size?: "sm" | "md" | "lg";
}

export interface IntegrationsDiagramProps {
	integrations?: Integration[];
	centerIcon?: string;
	centerBackground?: string;
	showConnectors?: boolean;
	animated?: boolean;
	className?: string;
}

const defaultIntegrations: Integration[] = [
	{ name: "HubSpot", logo: "/integrations/hubspot.png", position: "top-left", size: "sm" },
	{ name: "Salesforce", logo: "/integrations/salesforce.png", position: "top-left", size: "md" },
	{ name: "Slack", logo: "/integrations/slack.png", position: "top", size: "md" },
	{ name: "Google Drive", logo: "/integrations/google-drive.png", position: "top", size: "md" },
	{ name: "Microsoft Teams", logo: "/integrations/teams.png", position: "top-right", size: "lg" },
	{ name: "Microsoft Word", logo: "/integrations/word.png", position: "right", size: "md" },
	{ name: "OneDrive", logo: "/integrations/onedrive.png", position: "right", size: "md" },
	{ name: "Office 365", logo: "/integrations/office.png", position: "bottom-right", size: "md" },
	{ name: "LinkedIn", logo: "/integrations/linkedin.png", position: "bottom", size: "lg" },
	{ name: "Zoom", logo: "/integrations/zoom.png", position: "bottom", size: "md" },
	{ name: "Twitter", logo: "/integrations/twitter.png", position: "bottom-left", size: "md" },
	{ name: "Asana", logo: "/integrations/asana.png", position: "left", size: "md" },
	{ name: "Jira", logo: "/integrations/jira.png", position: "top-left", size: "md" },
	{ name: "Gmail", logo: "/integrations/gmail.png", position: "top-right", size: "md" },
	{ name: "Notion", logo: "/integrations/notion.png", position: "bottom-left", size: "md" },
];

const positionStyles = {
	"top-left": { top: "8%", left: "8%", angle: 225 },
	"top": { top: "2%", left: "50%", transform: "translateX(-50%)", angle: 270 },
	"top-right": { top: "8%", right: "8%", angle: 315 },
	"right": { top: "50%", right: "2%", transform: "translateY(-50%)", angle: 0 },
	"bottom-right": { bottom: "8%", right: "8%", angle: 45 },
	"bottom": { bottom: "2%", left: "50%", transform: "translateX(-50%)", angle: 90 },
	"bottom-left": { bottom: "8%", left: "8%", angle: 135 },
	"left": { top: "50%", left: "2%", transform: "translateY(-50%)", angle: 180 },
};

const sizeStyles = {
	sm: "w-9 h-9",
	md: "w-12 h-12",
	lg: "w-16 h-16",
};

const iconSizes = {
	sm: 20,
	md: 28,
	lg: 40,
};

export default function IntegrationsDiagram({
	integrations = defaultIntegrations,
	centerIcon = "/logo-short.svg",
	centerBackground = "#EE4136",
	showConnectors = true,
	animated = true,
	className = "",
}: IntegrationsDiagramProps) {
	return (
		<div className={`relative w-full h-[400px] md:h-[500px] ${className}`}>
			{/* Center Hub */}
			<motion.div
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl z-20"
				style={{ backgroundColor: centerBackground }}
				initial={animated ? { scale: 0, rotate: -180 } : false}
				animate={animated ? { scale: 1, rotate: 0 } : false}
				transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
			>
				<Image
					src={centerIcon}
					alt="Central Hub"
					width={44}
					height={44}
					className="w-10 h-10 md:w-11 md:h-11"
				/>
			</motion.div>

			{/* Integration Icons */}
			{integrations.map((integration, index) => {
				const position = positionStyles[integration.position];
				const size = integration.size || "md";
				const delay = animated ? index * 0.08 : 0;

				return (
					<div key={`${integration.name}-${index}`}>
						{/* Connector Line */}
						{showConnectors && (
							<motion.div
								className="absolute left-1/2 top-1/2 origin-center pointer-events-none z-0"
								style={{
									width: "2px",
									height: "120px",
									background: "linear-gradient(to bottom, rgba(148, 148, 148, 0.3), transparent)",
									transform: `translate(-50%, -50%) rotate(${position.angle}deg)`,
								}}
								initial={animated ? { scaleY: 0 } : false}
								animate={animated ? { scaleY: 1 } : false}
								transition={{ delay: delay, duration: 0.4 }}
							/>
						)}

						{/* Integration Icon */}
						<motion.div
							className={`absolute ${sizeStyles[size]} rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100 group hover:shadow-xl transition-shadow cursor-pointer z-10`}
							style={position}
							initial={animated ? { opacity: 0, scale: 0 } : false}
							animate={animated ? { opacity: 1, scale: 1 } : false}
							transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
							whileHover={{ scale: 1.15, zIndex: 30 }}
						>
							<Image
								src={integration.logo}
								alt={integration.name}
								width={iconSizes[size]}
								height={iconSizes[size]}
								className="object-contain"
								unoptimized
							/>

							{/* Tooltip on hover */}
							<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
								<div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
									{integration.name}
								</div>
							</div>
						</motion.div>
					</div>
				);
			})}

			{/* Pulsing rings around center */}
			{animated && [1, 2, 3].map((ring) => (
				<motion.div
					key={ring}
					className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 pointer-events-none"
					style={{
						width: `${ring * 80 + 100}px`,
						height: `${ring * 80 + 100}px`,
					}}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{
						scale: [1, 1.05, 1],
						opacity: [0.1, 0.3, 0.1],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						delay: ring * 0.4,
					}}
				/>
			))}
		</div>
	);
}
