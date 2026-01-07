import { CareerHeroSection } from "@/components/careers/CareerHeroSection";
import { CareerBenefitsSection } from "@/components/careers/CareerBenefitsSection";
import { OpenPositionsSection } from "@/components/careers/OpenPositionsSection";
import CtaSection from "@/components/CtaSection";

export const metadata = {
  title: "Careers | Melp",
  description: "Join the Melp team and help build the future of AI-powered collaboration.",
};

export default function CareersPage() {
  return (
    <div className="bg-background">
      <CareerHeroSection />
      <CareerBenefitsSection />
      <OpenPositionsSection />
      <CtaSection />
    </div>
  );
}
