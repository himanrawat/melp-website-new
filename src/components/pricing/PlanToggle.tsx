"use client";

import { motion } from "framer-motion";
import { User, Building2 } from "lucide-react";

interface PlanToggleProps {
	isBusinessPlan: boolean;
	onToggle: (isBusiness: boolean) => void;
}

export default function PlanToggle({
	isBusinessPlan,
	onToggle,
}: PlanToggleProps) {
	return (
		<div className="flex flex-col items-center gap-4">
			{/* Toggle Container */}
			<div className="relative inline-flex items-center p-1 bg-muted rounded-full">
				{/* Sliding Background */}
				<motion.div
					className="absolute top-1 bottom-1 bg-background rounded-full shadow-md"
					initial={false}
					animate={{
						x: isBusinessPlan ? "100%" : "0%",
						width: isBusinessPlan ? "calc(50% - 4px)" : "calc(50% - 4px)",
					}}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 35,
					}}
					style={{
						left: 4,
					}}
				/>

				{/* Individual Button */}
				<button
					onClick={() => onToggle(false)}
					className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
						!isBusinessPlan
							? "text-foreground"
							: "text-muted-foreground hover:text-foreground/80"
					}`}
				>
					<motion.div
						animate={{ scale: !isBusinessPlan ? 1.1 : 1 }}
						transition={{ type: "spring", stiffness: 400, damping: 20 }}
					>
						<User className="w-4 h-4" />
					</motion.div>
					<span>Individual</span>
				</button>

				{/* Business Button */}
				<button
					onClick={() => onToggle(true)}
					className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
						isBusinessPlan
							? "text-foreground"
							: "text-muted-foreground hover:text-foreground/80"
					}`}
				>
					<motion.div
						animate={{ scale: isBusinessPlan ? 1.1 : 1 }}
						transition={{ type: "spring", stiffness: 400, damping: 20 }}
					>
						<Building2 className="w-4 h-4" />
					</motion.div>
					<span>Business</span>
				</button>
			</div>

			{/* Subtitle */}
			<motion.p
				key={isBusinessPlan ? "business" : "individual"}
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 10 }}
				transition={{ duration: 0.2 }}
				className="text-sm text-muted-foreground"
			>
				{isBusinessPlan
					? "Plans designed for teams and organizations"
					: "Plans for personal use and freelancers"}
			</motion.p>
		</div>
	);
}
