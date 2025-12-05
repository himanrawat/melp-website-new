import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import UseCasesSection from "@/components/UseCasesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SecuritySection from "@/components/SecuritySection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import PlatformsSection from "@/components/PlatformsSection";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				<HeroSection />
				<FeaturesSection />
				<HorizontalScrollSection />
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
