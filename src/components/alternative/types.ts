import { ReactNode } from "react";

// ============================================
// Icon Names (string-based to avoid server/client boundary issues)
// ============================================

export type IconName =
	| "Layers"
	| "SlidersHorizontal"
	| "Users"
	| "LayoutGrid"
	| "Bot"
	| "Sparkles"
	| "Zap"
	| "Globe"
	| "Shield"
	| "Video"
	| "MessageSquareOff"
	| "Calendar";

// ============================================
// Section Data Types
// ============================================

export interface HeroData {
	/** Badge text shown above headline (e.g., "A Modern Teams Alternative") */
	badgeText: string;
	/** Main headline - the colored part */
	headlinePrimary: string;
	/** Main headline - the regular part */
	headlineSecondary: string;
	/** Subheadline/description paragraph */
	subheadline: string;
	/** Image placeholder description */
	imageDescription: string;
}

export interface PainPoint {
	icon: IconName;
	title: string;
	description: string;
}

export interface WhySwitchingData {
	/** Section label (e.g., "Why Switch?") */
	label: string;
	/** Section title */
	title: string;
	/** Section description */
	description: string;
	/** Array of pain points to display */
	painPoints: PainPoint[];
	/** Grid columns for pain points (2, 3, or 4) */
	gridCols?: 2 | 3 | 4;
	/** Image placeholder description */
	imageDescription: string;
}

export interface Benefit {
	icon: IconName;
	title: string;
	description: string;
}

export interface BenefitsData {
	/** Section label (e.g., "Why Melp") */
	label: string;
	/** Section title */
	title: string;
	/** Section description */
	description: string;
	/** Array of benefits */
	benefits: Benefit[];
	/** Image placeholder description */
	imageDescription: string;
}

export interface Differentiator {
	icon: IconName;
	title: string;
	description: string;
}

export interface DifferentiatorsData {
	/** Section label */
	label: string;
	/** Section title */
	title: string;
	/** Section description */
	description: string;
	/** Array of differentiators */
	differentiators: Differentiator[];
	/** Grid columns (2, 3, or 4) */
	gridCols?: 2 | 3 | 4;
	/** First image placeholder description */
	image1Description: string;
	/** Second image placeholder description */
	image2Description: string;
}

export interface Testimonial {
	quote: string;
	author: string;
	role: string;
	company: string;
	avatar: string;
}

export interface Rating {
	platform: string;
	rating: string;
	logo: string;
}

export interface TestimonialsData {
	/** Section label */
	label: string;
	/** Section title */
	title: string;
	/** Section description */
	description: string;
	/** Array of testimonials */
	testimonials: Testimonial[];
	/** Array of ratings */
	ratings: Rating[];
}

export interface FAQ {
	question: string;
	answer: string;
}

export interface FAQData {
	/** Section label */
	label: string;
	/** Section title */
	title: string;
	/** Array of FAQs */
	faqs: FAQ[];
}

export interface CTAData {
	/** Section label (e.g., "Ready to Switch?") */
	label: string;
	/** Section title */
	title: string;
	/** Section description */
	description: string;
	/** Bottom note text */
	bottomNote: string;
}

// ============================================
// Section Component Types
// ============================================

export type SectionType =
	| "hero"
	| "why-switching"
	| "benefits"
	| "differentiators"
	| "testimonials"
	| "faq"
	| "cta"
	| "custom";

export interface BaseSection {
	/** Unique identifier for the section */
	id: string;
	/** Type of section */
	type: SectionType;
}

export interface HeroSection extends BaseSection {
	type: "hero";
	data: HeroData;
}

export interface WhySwitchingSection extends BaseSection {
	type: "why-switching";
	data: WhySwitchingData;
}

export interface BenefitsSection extends BaseSection {
	type: "benefits";
	data: BenefitsData;
}

export interface DifferentiatorsSection extends BaseSection {
	type: "differentiators";
	data: DifferentiatorsData;
}

export interface TestimonialsSection extends BaseSection {
	type: "testimonials";
	data: TestimonialsData;
}

export interface FAQSection extends BaseSection {
	type: "faq";
	data: FAQData;
}

export interface CTASection extends BaseSection {
	type: "cta";
	data: CTAData;
}

export interface CustomSection extends BaseSection {
	type: "custom";
	/** Custom React component to render */
	component: ReactNode;
}

export type Section =
	| HeroSection
	| WhySwitchingSection
	| BenefitsSection
	| DifferentiatorsSection
	| TestimonialsSection
	| FAQSection
	| CTASection
	| CustomSection;

// ============================================
// Full Page Configuration
// ============================================

export interface AlternativePageConfig {
	/** Competitor name (e.g., "Microsoft Teams", "Zoom") */
	competitorName: string;
	/** Array of sections in order */
	sections: Section[];
}
