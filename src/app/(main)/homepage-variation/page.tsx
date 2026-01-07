import { HeroSection } from "@/components/homepage-variation-component/HeroSection";
import { ProblemSection } from "@/components/homepage-variation-component/ProblemSection";
import { DifferenceSection } from "@/components/homepage-variation-component/DifferenceSection";
import { BentoFeatures } from "@/components/homepage-variation-component/BentoFeatures";
import { StackingCards } from "@/components/homepage-variation-component/StackingCards";
import CustomerTestimonialsSection from "@/components/ui/customer-testimonials-section";
import CtaSection from "@/components/CtaSection";
import PlatformsSection from "@/components/PlatformsSection";
import SecuritySection from "@/components/SecuritySection";
import SavingsCalculatorSection from "@/components/SavingsCalculatorSection";

export const metadata = {
	title: "MELP - One Workspace. Zero Friction.",
	description:
		"MELP is an AI-native workspace that brings chat, meetings, files, and intelligence into one place. Stop switching tools. Start understanding your work.",
};

export default function HomePage() {
	return (
		<main className="min-h-screen max-w-[1296px] mx-auto">
			<HeroSection />
			<ProblemSection />
			<DifferenceSection />
			<BentoFeatures />
			<StackingCards />
			<SavingsCalculatorSection />
			<SecuritySection />
			<CustomerTestimonialsSection />
			<CtaSection />
			<PlatformsSection />
		</main>
	);
}
