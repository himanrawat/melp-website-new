"use client";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
// import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import CollaborationSection from "@/components/CollaborationSection";
import UseCasesSection from "@/components/UseCasesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SecuritySection from "@/components/SecuritySection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import PlatformsSection from "@/components/PlatformsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import SavingsCalculatorSection from "@/components/SavingsCalculatorSection";
import StackingCardsSection from "@/components/StackingCardsSection";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import { StickyScrollReveal } from "@/components/StickyScrollReveal";
// import EnterpriseChatDashboard from "@/components/dashboard/EnterpriseChatDashboard";
// import { ProductVisualShowcase } from "@/components/ProductVisual";
// import GlassmorphismSection from "@/components/GlassmorphismSection";
// import GlassmorphismSectionAlt from "@/components/GlassmorphismSectionAlt";

export default function Home() {
	const clientLogos = [
		"Acme Corp",
		"Globex",
		"Initech",
		"Umbrella",
		"Stark Ind",
		"Wayne Ent",
	];
	return (
		<div className="bg-background">
			<HeroSection />
			{/* Trust Line */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.9 }}
				className="mt-16 pb-8 mx-auto max-w-7xl"
			>
				<p className="text-sm text-muted-foreground mb-6 text-center">
					AI-powered productivity for 10,000+ teams worldwide
				</p>
				{/* Client Logos */}
				<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
					{clientLogos.map((logo, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
							whileHover={{ scale: 1.05, y: -2 }}
							className="flex h-10 items-center justify-center px-4 text-sm font-medium text-muted-foreground/60 hover:text-muted-foreground transition-colors cursor-pointer"
						>
							{logo}
						</motion.div>
					))}
				</div>
			</motion.div>
			{/* <div className="mt-12">
				<EnterpriseChatDashboard />
			</div> */}
			<StickyScrollReveal />
			<FeaturesSection />
			<FeatureShowcaseSection />
			{/* <GlassmorphismSectionAlt /> */}
			{/* <ProductVisualShowcase
				title="Your Product Title"
				subtitle="Your product description"
				imageSrc="/dark-s1.png"
			/> */}
			{/* <GlassmorphismSection /> */}
			<StackingCardsSection />
			<HowItWorksSection />
			{/* <HorizontalScrollSection /> */}
			<CollaborationSection />
			<IntegrationsSection />
			<SavingsCalculatorSection />
			<UseCasesSection />
			<StatsSection />
			<TestimonialsSection />
			<SecuritySection />
			<PricingSection />
			<CtaSection />
			<PlatformsSection />
		</div>
	);
}
