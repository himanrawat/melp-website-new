import HeroSection from "@/components/HeroSection";
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
// import EnterpriseChatDashboard from "@/components/dashboard/EnterpriseChatDashboard";
// import { ProductVisualShowcase } from "@/components/ProductVisual";
// import GlassmorphismSection from "@/components/GlassmorphismSection";
// import GlassmorphismSectionAlt from "@/components/GlassmorphismSectionAlt";

export default function Home() {
	return (
		<div className="bg-background">
			<HeroSection />
			{/* <div className="mt-12">
				<EnterpriseChatDashboard />
			</div> */}
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
