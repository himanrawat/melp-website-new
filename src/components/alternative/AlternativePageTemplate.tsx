"use client";

import {
	AlternativeHero,
	AlternativeWhySwitching,
	AlternativeBenefits,
	AlternativeDifferentiators,
	AlternativeTestimonials,
	AlternativeFAQ,
	AlternativeCTA,
} from "./sections";
import { Section, AlternativePageConfig } from "./types";

interface AlternativePageTemplateProps {
	config: AlternativePageConfig;
}

function renderSection(section: Section) {
	switch (section.type) {
		case "hero":
			return <AlternativeHero key={section.id} data={section.data} />;
		case "why-switching":
			return <AlternativeWhySwitching key={section.id} data={section.data} />;
		case "benefits":
			return <AlternativeBenefits key={section.id} data={section.data} />;
		case "differentiators":
			return (
				<AlternativeDifferentiators key={section.id} data={section.data} />
			);
		case "testimonials":
			return <AlternativeTestimonials key={section.id} data={section.data} />;
		case "faq":
			return <AlternativeFAQ key={section.id} data={section.data} />;
		case "cta":
			return <AlternativeCTA key={section.id} data={section.data} />;
		case "custom":
			return <div key={section.id}>{section.component}</div>;
		default:
			return null;
	}
}

export default function AlternativePageTemplate({
	config,
}: AlternativePageTemplateProps) {
	return (
		<div className="bg-background">
			{config.sections.map((section) => renderSection(section))}
		</div>
	);
}
