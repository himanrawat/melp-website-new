"use client";

import { motion } from "motion/react";

const brands = [
	{ name: "Google" },
	{ name: "Microsoft" },
	{ name: "Amazon" },
	{ name: "Meta" },
	{ name: "Stripe" },
	{ name: "Salesforce" },
	{ name: "Shopify" },
	{ name: "Slack" },
];

export default function TrustedBrands() {
	// Duplicate brands array for seamless infinite scroll
	const duplicatedBrands = [...brands, ...brands, ...brands];

	return (
		<section className="py-8 bg-muted/5 border-y">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-8">
					{/* Text */}
					<div className="flex-shrink-0">
						<p className="text-sm font-medium text-muted-foreground tracking-wider uppercase whitespace-nowrap">
							Trusted by teams at
						</p>
					</div>

					{/* Scrolling Logos Container */}
					<div className="flex-1 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
						{/* Scrolling content */}
						<motion.div
							className="flex gap-12 items-center"
							animate={{
								x: [0, -1920], // Adjust based on total width
							}}
							transition={{
								x: {
									repeat: Infinity,
									repeatType: "loop",
									duration: 60,
									ease: "linear",
								},
							}}
						>
							{duplicatedBrands.map((brand, index) => (
								<div
									key={`${brand.name}-${index}`}
									className="flex-shrink-0 text-muted-foreground/70 hover:text-muted-foreground transition-colors duration-300"
								>
									<div className="h-12 w-32 rounded-lg bg-muted/30 flex items-center justify-center border border-border/50">
										<span className="text-sm font-semibold">{brand.name}</span>
									</div>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
