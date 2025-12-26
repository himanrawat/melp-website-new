"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
	{
		question: "How is Melp different from Microsoft Teams?",
		answer:
			"While Teams is deeply integrated into the Microsoft 365 ecosystem and requires that ecosystem to function fully, Melp works standalone or alongside any tools you already use. Melp focuses on simplicity, external collaboration, and getting teams productive from day one without weeks of training.",
	},
	{
		question: "Can I migrate my data from Microsoft Teams to Melp?",
		answer:
			"Yes! We offer migration tools and dedicated support to help you transition smoothly. Our team can assist with importing chat history, files, and user accounts. Most teams complete their migration within a few days.",
	},
	{
		question: "Does Melp support external collaboration like Teams?",
		answer:
			"Melp excels at external collaboration. Unlike Teams where external sharing can be complex and limited, Melp makes it seamless to invite clients, vendors, and partners into shared spaces without requiring them to have a Microsoft account.",
	},
	{
		question: "Is Melp secure enough for enterprise use?",
		answer:
			"Absolutely. Melp is SOC 2 Type II certified, GDPR compliant, and HIPAA ready. We offer enterprise-grade security features including SSO, data encryption at rest and in transit, audit logs, and admin controls for compliance.",
	},
	{
		question: "What does Melp cost compared to Microsoft Teams?",
		answer:
			"Melp offers transparent, straightforward pricing without the complexity of Microsoft's bundled licensing. Our free tier is generous for small teams, and our paid plans are competitively priced. You pay for what you use, not for an entire ecosystem.",
	},
	{
		question: "Can I use Melp alongside Microsoft Teams during transition?",
		answer:
			"Yes! Many organizations run both during their transition period. Melp doesn't require you to go all-in from day one. You can gradually migrate teams and workflows at your own pace.",
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
						FAQ
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
						Common questions about switching
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
										"w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
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
