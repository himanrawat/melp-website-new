"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
	{
		question: "What is the best Microsoft Teams alternative for modern businesses?",
		answer:
			"The strongest Microsoft Teams alternative for many growing companies is Melp App. It gives teams one dependable place to talk, meet, and share information instead of bouncing between several programs. By keeping everything in a single, organized space, the Melp App helps people stay connected and focused on work that actually matters.",
	},
	{
		question: "Which Microsoft Teams alternatives offer better collaboration options?",
		answer:
			"Among today's Microsoft Teams alternatives, Melp AI Digital Workplace draws attention because it keeps communication organized and easy to follow. Conversations are grouped by teams and topics so everyone knows where to find what they need. Whether people work from home or at the office, the Melp App helps them stay coordinated without confusion.",
	},
	{
		question: "How do alternatives to Microsoft Teams improve communication?",
		answer:
			"Alternatives to Microsoft Teams aim to make everyday communication smoother. Melp App brings chats, meetings, and shared updates into one place so employees don't have to jump between windows. It keeps information visible, encourages faster replies, and helps departments work together naturally.",
	},
	{
		question: "Why do businesses prefer an alternative to Teams for daily collaboration?",
		answer:
			"Many organizations look for an alternative to Teams because they want tools that are lighter, clearer, and easier for everyone to use. Melp App removes the clutter of too many platforms and gives teams a single, steady rhythm for sharing ideas. With Melp AI Digital Workplace, people can focus on the work itself instead of figuring out how to stay in touch.",
	},
	{
		question: "Are there any free alternatives to Microsoft Teams for small organizations?",
		answer:
			"Some free alternatives to Microsoft Teams exist, but Melp App offers more than most. Its free plan covers essential communication and meeting tools so small teams can start working together right away. As the business grows, Melp App expands with it—keeping the same smooth experience without extra complexity.",
	},
];

function FAQItem({
	question,
	answer,
	isOpen,
	onClick,
	index,
}: {
	question: string;
	answer: string;
	isOpen: boolean;
	onClick: () => void;
	index: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.1 }}
			className="border-b border-border/50 last:border-b-0"
		>
			<button
				onClick={onClick}
				className="w-full py-6 flex items-start justify-between gap-4 text-left group"
			>
				<span className="text-base sm:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
					{question}
				</span>
				<motion.div
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.2 }}
					className="flex-shrink-0 mt-1"
				>
					<ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
				</motion.div>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="overflow-hidden"
					>
						<p className="pb-6 text-muted-foreground leading-relaxed pr-8">
							{answer}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export default function TeamsFAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section className="py-16 sm:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30">
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
						FAQ
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Everything you need to know about switching from Microsoft Teams to Melp.
					</p>
				</motion.div>

				{/* FAQ List */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 sm:p-8"
				>
					{faqs.map((faq, index) => (
						<FAQItem
							key={index}
							question={faq.question}
							answer={faq.answer}
							isOpen={openIndex === index}
							onClick={() => setOpenIndex(openIndex === index ? null : index)}
							index={index}
						/>
					))}
				</motion.div>

				{/* Additional Help */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-12 text-center"
				>
					<p className="text-muted-foreground mb-4">
						Still have questions? We&apos;re here to help.
					</p>
					<a
						href="/contact"
						className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
					>
						Contact our team
						<svg
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</motion.div>
			</div>
		</section>
	);
}
