import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import CollaborationSection from "@/components/CollaborationSection";
import UseCasesSection from "@/components/UseCasesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SecuritySection from "@/components/SecuritySection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import PlatformsSection from "@/components/PlatformsSection";
import Footer from "@/components/Footer";
import IntegrationsSection from "@/components/IntegrationsSection";
import SavingsCalculatorSection from "@/components/SavingsCalculatorSection";

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				<HeroSection />
				<FeaturesSection />
				<HowItWorksSection />
				<HorizontalScrollSection />
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
			</main>
			<Footer />
		</div>
	);
}
