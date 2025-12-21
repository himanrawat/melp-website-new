import SolutionsHero from "@/components/solutions/SolutionsHero";
import WhyMelpSection from "@/components/solutions/WhyMelpSection";
import IndustriesGrid from "@/components/solutions/IndustriesGrid";
import CompanySizeSection from "@/components/solutions/CompanySizeSection";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

export const metadata = {
	title: "Solutions | Melp - AI-Powered Digital Workplace",
	description:
		"From IT and education to healthcare, HR, and the public sector, Melp brings people closer, simplifies communication, and secures every interaction.",
};

export default function SolutionsPage() {
	return (
		<div className="min-h-screen bg-background">
			<main>
				<SolutionsHero
					badge="Solutions for Every Industry"
					title="The upgrade in communication and collaboration"
					highlightedText="every industry needs."
					description="From IT and education to healthcare, HR, and the public sector, Melp brings people closer, simplifies communication, and secures every interaction in one AI-powered digital workplace."
					primaryCta={{ text: "Get started for free", href: "/get-started" }}
					secondaryCta={{ text: "Watch Demo", href: "/demo" }}
					trustText="Trusted by teams in 50+ countries | 1000+ organizations worldwide"
				/>
				<WhyMelpSection />
				<IndustriesGrid />
				<CompanySizeSection />
				<SolutionsCTA
					title="All your communication and collaboration tools, reimagined."
					subtitle="Unify communication, boost productivity, and secure every interaction with Melp: the AI-powered workplace built for the future of work."
					primaryCta={{ text: "Get Started for Free", href: "/get-started" }}
					secondaryCta={{ text: "Watch a Demo", href: "/demo" }}
				/>
			</main>
		</div>
	);
}
