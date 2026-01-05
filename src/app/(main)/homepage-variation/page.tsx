import React from "react";
import { HeroSection } from "@/components/homepage-variation-component/HeroSection";
import { BentoFeatures } from "@/components/homepage-variation-component/BentoFeatures";
import { StackingCards } from "@/components/homepage-variation-component/StackingCards";
import CustomerTestimonialsSection from "@/components/ui/customer-testimonials-section";

export const metadata = {
	title: "Melp - Work Faster, Work Flexible",
	description:
		"MelpApp’s AI-powered platform enables teams and individuals to work faster and more flexibly than ever before.",
};

export default function AppleHomePage() {
	// Use the generated image path. Ideally, this should be moved to public, but for now we reference it directly or assuming it's imported.
	// Since we cannot "import" from the artifacts folder directly in Next.js without it being in public,
	// I will assume the user or I need to move it.
	// HOWEVER, for this demo, I will use a placeholder or the absolute path if possible, but Next.js won't allow absolute local paths easily.
	// STRATEGY: I will assume the image will be placed in `public/melp_iphone_mockup.png`.
	// I will Instruct the user (or use a tool if I could) to move it.
	// actually, I can use the tool `write_to_file` to copy the content if I read it first, but I can't read binary.
	// I will rely on the fact that I should probably put it in `public` if I want it to load.
	// BUT: I generated it in artifacts.
	// I will use a relative path assuming it gets moved, or I will try to use `fs` to copy it if I had a copy tool.
	// STARTING STRATEGY: Reference a public URL or place it in public.
	// Since I can write files, I can't move binary files easily without `run_command`.

	return (
		<main className="min-h-screen max-w-[1296px] mx-auto">
			<HeroSection />
			<BentoFeatures />
			<StackingCards />
			<CustomerTestimonialsSection />
		</main>
	);
}
