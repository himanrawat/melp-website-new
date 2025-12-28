"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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

export default function CompareFAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section className="py-16 sm:py-24 bg-background">
			<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
						Frequently Asked Questions
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
						Common questions about Microsoft Teams alternatives
					</h2>
				</motion.div>

				{/* FAQ Accordion */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="space-y-4"
				>
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="rounded-xl border border-border/50 bg-card/50 overflow-hidden"
						>
							<button
								onClick={() =>
									setOpenIndex(openIndex === index ? null : index)
								}
								className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
							>
								<span className="font-medium text-foreground pr-4">
									{faq.question}
								</span>
								<ChevronDown
									className={cn(
										"w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200",
										openIndex === index && "rotate-180"
									)}
								/>
							</button>
							<div
								className={cn(
									"overflow-hidden transition-all duration-300",
									openIndex === index
										? "max-h-96 opacity-100"
										: "max-h-0 opacity-0"
								)}
							>
								<div className="px-5 pb-5 text-muted-foreground leading-relaxed">
									{faq.answer}
								</div>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
