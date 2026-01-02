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
import { SlackStyleHeading } from "@/components/headings/SlackStyleHeading";
import { EncryptedStyleHeading } from "@/components/headings/EncryptedStyleHeading";
// import EnterpriseChatDashboard from "@/components/dashboard/EnterpriseChatDashboard";
// import { ProductVisualShowcase } from "@/components/ProductVisual";
// import GlassmorphismSection from "@/components/GlassmorphismSection";
// import GlassmorphismSectionAlt from "@/components/GlassmorphismSectionAlt";

export default function Home() {
	return (
		<div className="bg-background">
			{/* Heading Components Preview */}
			<section className="py-20 px-4 space-y-24 max-w-5xl mx-auto">
				{/* Slack Style Heading */}
				<div className="text-center space-y-4">
					<SlackStyleHeading
						prefix="Make"
						suffix="Intelligent"
						highlightWord="work"
						cycleWords={[
							"Knowledge",
							"Communication",
							"Collaboration",
							"Decisions",
							"translation",
						]}
						wordDuration={800}
						loopDelay={5000}
						className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
						rotatingClassName="bg-gradient-to-r from-[#F14C2F] to-[#FF0059] bg-clip-text text-transparent"
					/>
				</div>
			</section>
		</div>
	);
}
