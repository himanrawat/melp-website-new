"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQ {
	question: string;
	answer: string;
}

interface FAQAccordionProps {
	faqs: FAQ[];
	className?: string;
}

export default function FAQAccordion({ faqs, className }: FAQAccordionProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className={cn("space-y-4", className)}
		>
			{faqs.map((faq, index) => (
				<div
					key={index}
					className="rounded-xl border border-border/50 bg-card/50 overflow-hidden"
				>
					<button
						onClick={() => setOpenIndex(openIndex === index ? null : index)}
						className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
					>
						<h3 className="font-medium text-foreground pr-4">{faq.question}</h3>
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
							openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
						)}
					>
						<div className="px-5 pb-5 text-muted-foreground leading-relaxed">
							{faq.answer}
						</div>
					</div>
				</div>
			))}
		</motion.div>
	);
}
