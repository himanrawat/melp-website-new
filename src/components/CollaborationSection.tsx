"use client";

import { motion } from "framer-motion";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { RevealOnScroll } from "@/components/ui/aceternity";
import { FileText, PenTool, BarChart3, Lightbulb, Check } from "lucide-react";

const collaborationTools = [
	{
		name: "Sarah Chen",
		role: "Designer",
		color: "#8b5cf6",
		avatar: "SC",
		tool: "Notepad",
		toolIcon: FileText,
		toolColor: "violet",
	},
	{
		name: "Marcus Rodriguez",
		role: "Developer",
		color: "#06b6d4",
		avatar: "MR",
		tool: "Whiteboard",
		toolIcon: PenTool,
		toolColor: "cyan",
	},
	{
		name: "Emily Watson",
		role: "Product Manager",
		color: "#f59e0b",
		avatar: "EW",
		tool: "Polls",
		toolIcon: BarChart3,
		toolColor: "amber",
	},
];

const TitleComponent = ({
	name,
	avatar,
	color,
}: {
	name: string;
	avatar: string;
	color: string;
}) => (
	<div className="flex items-center gap-2">
		<div
			className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
			style={{ backgroundColor: color }}
		>
			{avatar}
		</div>
		<span className="font-medium">{name}</span>
	</div>
);

export default function CollaborationSection() {
	return (
		<motion.section
			className="py-20 sm:py-32 bg-muted/20 relative overflow-hidden"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			viewport={{ once: false, margin: "-100px" }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			{/* Background decoration */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,32,32,0.03)_0%,transparent_70%)]" />

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
						Real-time Collaboration
					</motion.span>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						Work together, seamlessly
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
						See your team&apos;s cursors in real-time. Collaborate on documents,
						designs, and ideas like you&apos;re in the same room.
					</p>
				</RevealOnScroll>

				{/* Interactive Collaboration Demo */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
					{collaborationTools.map((collaborator, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false }}
							transition={{ duration: 0.5, delay: index * 0.15 }}
						>
							<FollowerPointerCard
								title={
									<TitleComponent
										name={collaborator.name}
										avatar={collaborator.avatar}
										color={collaborator.color}
									/>
								}
								className="h-full"
							>
								<div className="relative bg-card rounded-xl border shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
									{/* Card Header */}
									<div className="p-4 border-b border-border/50 flex items-center justify-between">
										<div className="flex items-center gap-3">
											<div
												className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
												style={{ backgroundColor: collaborator.color }}
											>
												{collaborator.avatar}
											</div>
											<div>
												<p className="font-medium text-sm text-foreground">
													{collaborator.name}
												</p>
												<p className="text-xs text-muted-foreground">
													{collaborator.role}
												</p>
											</div>
										</div>
										<div className="flex items-center gap-1">
											<span
												className="w-2 h-2 rounded-full animate-pulse"
												style={{ backgroundColor: collaborator.color }}
											/>
											<span className="text-xs text-muted-foreground">
												Active now
											</span>
										</div>
									</div>

									{/* Card Content - Tool Preview */}
									<div className="p-6 h-[240px]">
										{/* Notepad Tool */}
										{index === 0 && (
											<div className="space-y-3">
												<div className="flex items-center gap-2 mb-4">
													<collaborator.toolIcon className="w-5 h-5 text-violet-500" />
													<span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
														{collaborator.tool}
													</span>
												</div>
												<div className="bg-muted/30 rounded-lg p-4 border border-border/50">
													<div className="space-y-2 text-sm">
														<p className="text-foreground">
															<span className="text-violet-500 font-medium">
																Meeting Notes - Q4 Planning
															</span>
														</p>
														<p className="text-muted-foreground text-xs">
															• Discussed new feature roadmap
														</p>
														<p className="text-muted-foreground text-xs">
															• Budget allocation for Q1
														</p>
														<p className="text-muted-foreground text-xs">
															• Team expansion timeline
														</p>
														<div className="flex items-center gap-1 mt-3 pt-2 border-t border-border/50">
															<span className="w-1.5 h-4 bg-violet-500 animate-pulse rounded-sm" />
															<span className="text-xs text-muted-foreground italic">
																Sarah is typing...
															</span>
														</div>
													</div>
												</div>
											</div>
										)}

										{/* Whiteboard Tool */}
										{index === 1 && (
											<div className="space-y-3">
												<div className="flex items-center gap-2 mb-4">
													<collaborator.toolIcon className="w-5 h-5 text-cyan-500" />
													<span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
														{collaborator.tool}
													</span>
												</div>
												<div className="bg-muted/30 rounded-lg p-4 border border-border/50 relative overflow-hidden">
													{/* Whiteboard Canvas */}
													<div className="flex flex-wrap gap-3">
														<div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500/30 to-cyan-600/10 flex items-center justify-center border-2 border-dashed border-cyan-500/40">
															<Lightbulb className="w-5 h-5 text-cyan-500" />
														</div>
														<div className="w-20 h-14 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/10 flex items-center justify-center">
															<span className="text-xs text-center text-muted-foreground">
																User Flow
															</span>
														</div>
														<div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/10 flex items-center justify-center">
															<Check className="w-5 h-5 text-emerald-500" />
														</div>
													</div>
													{/* Drawing line effect */}
													<svg
														className="absolute bottom-4 left-4 w-24 h-8"
														viewBox="0 0 100 30"
													>
														<path
															d="M0,15 Q25,5 50,15 T100,15"
															stroke="#06b6d4"
															strokeWidth="2"
															fill="none"
															strokeLinecap="round"
															className="animate-pulse"
														/>
													</svg>
													<div className="flex items-center gap-2 mt-4 pt-2 border-t border-border/50">
														<div className="flex -space-x-1">
															<div className="w-4 h-4 rounded-full bg-cyan-500 border border-background" />
															<div className="w-4 h-4 rounded-full bg-violet-500 border border-background" />
														</div>
														<span className="text-xs text-muted-foreground">
															2 people drawing
														</span>
													</div>
												</div>
											</div>
										)}

										{/* Polls Tool */}
										{index === 2 && (
											<div className="space-y-3">
												<div className="flex items-center gap-2 mb-4">
													<collaborator.toolIcon className="w-5 h-5 text-amber-500" />
													<span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
														{collaborator.tool}
													</span>
												</div>
												<div className="bg-muted/30 rounded-lg p-4 border border-border/50">
													<p className="text-sm font-medium text-foreground mb-3">
														Which feature should we prioritize?
													</p>
													<div className="space-y-2">
														<div className="relative">
															<div className="flex justify-between text-xs mb-1">
																<span className="text-muted-foreground">
																	Dark Mode
																</span>
																<span className="text-amber-500 font-medium">
																	45%
																</span>
															</div>
															<div className="h-2 bg-muted rounded-full overflow-hidden">
																<div className="h-full bg-amber-500 rounded-full w-[45%]" />
															</div>
														</div>
														<div className="relative">
															<div className="flex justify-between text-xs mb-1">
																<span className="text-muted-foreground">
																	Mobile App
																</span>
																<span className="text-amber-500/70 font-medium">
																	35%
																</span>
															</div>
															<div className="h-2 bg-muted rounded-full overflow-hidden">
																<div className="h-full bg-amber-500/70 rounded-full w-[35%]" />
															</div>
														</div>
														<div className="relative">
															<div className="flex justify-between text-xs mb-1">
																<span className="text-muted-foreground">
																	API Access
																</span>
																<span className="text-amber-500/50 font-medium">
																	20%
																</span>
															</div>
															<div className="h-2 bg-muted rounded-full overflow-hidden">
																<div className="h-full bg-amber-500/50 rounded-full w-[20%]" />
															</div>
														</div>
													</div>
													<p className="text-xs text-muted-foreground mt-3 pt-2 border-t border-border/50">
														12 votes • Poll ends in 2 days
													</p>
												</div>
											</div>
										)}
									</div>
								</div>
							</FollowerPointerCard>
						</motion.div>
					))}
				</div>

				{/* Bottom CTA */}
				<motion.div
					className="text-center mt-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<p className="text-muted-foreground mb-4">
						Experience the future of team collaboration
					</p>
					<motion.button
						className="text-sm font-medium text-primary hover:underline underline-offset-4 inline-flex items-center gap-1"
						whileHover={{ x: 3 }}
					>
						See collaboration in action
						<svg
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</motion.button>
				</motion.div>
			</div>
		</motion.section>
	);
}
