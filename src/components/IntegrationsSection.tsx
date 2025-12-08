"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/aceternity";
import { ArrowRight, ExternalLink } from "lucide-react";

// Orbital integration logos - actual brand logos
const orbitalIntegrations = [
	{
		name: "Google Drive",
		logo: "https://www.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png",
	},
	{
		name: "OneDrive",
		logo: "/onedrive.svg",
	},
	{
		name: "Google Calendar",
		logo: "https://www.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png",
	},
	{
		name: "Outlook",
		logo: "/outlook-calendar.svg",
	},
	{
		name: "Jira",
		logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
	},
	{
		name: "Salesforce",
		logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
	},
	{
		name: "Asana",
		logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg",
	},
];

// Integration list data - available integrations
const integrations = [
	{
		name: "Google Drive",
		description: "Sync files & documents",
		logo: "https://www.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png",
	},
	{
		name: "OneDrive",
		description: "Access your cloud storage",
		logo: "/onedrive.svg",
	},
	{
		name: "Google Calendar",
		description: "Schedule meetings instantly",
		logo: "https://www.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png",
	},
	{
		name: "Outlook Calendar",
		description: "Sync your Microsoft calendar",
		logo: "/outlook-calendar.svg",
	},
	{
		name: "Jira",
		description: "Track projects & tasks",
		logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
	},
	{
		name: "Salesforce",
		description: "Connect your CRM data",
		logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
	},
];

// Orbiting logo component
const OrbitingLogo = ({
	integration,
	index,
	total,
	orbitRadius,
	duration,
}: {
	integration: (typeof orbitalIntegrations)[0];
	index: number;
	total: number;
	orbitRadius: number;
	duration: number;
}) => {
	const startAngle = (index / total) * 360;

	return (
		<motion.div
			className="absolute left-1/2 top-1/2"
			style={{
				width: orbitRadius * 2,
				height: orbitRadius * 2,
				marginLeft: -orbitRadius,
				marginTop: -orbitRadius,
				zIndex: 20,
			}}
			animate={{
				rotate: [startAngle, startAngle + 360],
			}}
			transition={{
				duration,
				repeat: Infinity,
				ease: "linear",
			}}
		>
			<motion.div
				className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-xl p-2 flex items-center justify-center shadow-lg border border-border/50"
				style={{
					background: "hsl(var(--background))",
				}}
				animate={{
					rotate: [-startAngle, -(startAngle + 360)],
				}}
				transition={{
					duration,
					repeat: Infinity,
					ease: "linear",
				}}
				whileHover={{ scale: 1.2 }}
			>
				<Image
					src={integration.logo}
					alt={integration.name}
					width={28}
					height={28}
					className="w-7 h-7 object-contain"
					unoptimized
				/>
			</motion.div>
		</motion.div>
	);
};

export default function IntegrationsSection() {
	return (
		<section className="py-20 sm:py-32 relative overflow-hidden">
			{/* Subtle background */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(238,65,54,0.03)_0%,transparent_60%)]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<RevealOnScroll className="text-center mb-16">
					<motion.span
						className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false }}
						transition={{ duration: 0.4 }}
					>
						All-in-One Platform
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						Your tools, unified in Melp
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
						Bring all your favorite apps together. Melp connects with the tools
						you already love so you can collaborate without switching tabs.
					</p>
				</RevealOnScroll>

				{/* Main Integration Visual */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left - Orbital Animation Canvas */}
					<motion.div
						className="relative h-[400px] lg:h-[450px]"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: false }}
						transition={{ duration: 0.6 }}
					>
						{/* Pulsing rings - below logos */}
						{[1, 2, 3].map((ring) => (
							<motion.div
								key={ring}
								className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#EE4136]/15"
								style={{
									width: `${ring * 90 + 80}px`,
									height: `${ring * 90 + 80}px`,
									zIndex: 5,
								}}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: false }}
								animate={{
									scale: [1, 1.03, 1],
									opacity: [0.2, 0.4, 0.2],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: ring * 0.4,
								}}
							/>
						))}

						{/* Central Hub - Melp Logo */}
						<motion.div
							className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl flex items-center justify-center overflow-hidden bg-transparent"
							style={{
								boxShadow:
									"0 0 40px rgba(238, 65, 54, 0.35), 0 0 80px rgba(238, 65, 54, 0.15)",
								zIndex: 30,
							}}
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							viewport={{ once: false }}
							transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
						>
							<Image
								src="/logo-short.svg"
								alt="Melp"
								width={56}
								height={56}
								className="w-full h-full"
							/>
						</motion.div>

						{/* Orbiting logos - above the rings */}
						{orbitalIntegrations.map((integration, index) => (
							<OrbitingLogo
								key={integration.name}
								integration={integration}
								index={index}
								total={orbitalIntegrations.length}
								orbitRadius={160}
								duration={30}
							/>
						))}
					</motion.div>

					{/* Right - Integration List */}
					<motion.div
						className="space-y-3"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: false }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						{integrations.map((integration, index) => (
							<motion.div
								key={integration.name}
								className="group flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border/50 hover:border-[#EE4136]/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{ delay: index * 0.08 }}
								whileHover={{ x: 5 }}
							>
								<div className="flex items-center gap-4">
									<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-muted/50">
										<Image
											src={integration.logo}
											alt={integration.name}
											width={24}
											height={24}
											className="w-6 h-6 object-contain"
											unoptimized
										/>
									</div>
									<div>
										<p className="font-medium text-foreground">
											{integration.name}
										</p>
										<p className="text-sm text-muted-foreground">
											{integration.description}
										</p>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
										Integrate
									</span>
									<ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
								</div>
							</motion.div>
						))}

						{/* View All Button */}
						<motion.button
							className="w-full mt-4 py-3 px-4 rounded-xl border border-dashed border-border hover:border-[#EE4136]/40 text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2"
							whileHover={{ scale: 1.01 }}
							whileTap={{ scale: 0.99 }}
						>
							<ExternalLink className="w-4 h-4" />
							<span className="text-sm font-medium">
								Explore 50+ integrations
							</span>
						</motion.button>
					</motion.div>
				</div>

				{/* Bottom Stats */}
				<motion.div
					className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					{[
						{ value: "50+", label: "Integrations" },
						{ value: "2M+", label: "Messages synced daily" },
						{ value: "99.9%", label: "Uptime" },
						{ value: "<100ms", label: "Sync latency" },
					].map((stat) => (
						<div
							key={stat.label}
							className="text-center p-4 rounded-xl bg-muted/30 border border-border/50"
						>
							<p className="text-2xl font-bold text-foreground">{stat.value}</p>
							<p className="text-sm text-muted-foreground">{stat.label}</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
