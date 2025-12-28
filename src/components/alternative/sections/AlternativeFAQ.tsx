"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQData } from "../types";

interface AlternativeFAQProps {
	data: FAQData;
}

export default function AlternativeFAQ({ data }: AlternativeFAQProps) {
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
						{data.label}
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
						{data.title}
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
					{data.faqs.map((faq, index) => (
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
								<h3 className="font-medium text-foreground pr-4">
									{faq.question}
								</h3>
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
