"use client";

import IntegrationsDiagram, { Integration } from "./IntegrationsDiagram";

/**
 * Example usage of IntegrationsDiagram component
 * This file demonstrates all available props and variants
 */

// Example 1: Default configuration with all integrations
export function DefaultIntegrationsDiagram() {
	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold mb-4">Default Configuration</h2>
			<IntegrationsDiagram />
		</div>
	);
}

// Example 2: Custom integrations with different sizes
export function CustomIntegrationsDiagram() {
	const customIntegrations: Integration[] = [
		{ name: "Slack", logo: "/integrations/slack.png", position: "top", size: "lg" },
		{ name: "Google Drive", logo: "/integrations/google-drive.png", position: "top-right", size: "md" },
		{ name: "Zoom", logo: "/integrations/zoom.png", position: "right", size: "md" },
		{ name: "Asana", logo: "/integrations/asana.png", position: "bottom-right", size: "sm" },
		{ name: "LinkedIn", logo: "/integrations/linkedin.png", position: "bottom", size: "lg" },
		{ name: "Teams", logo: "/integrations/teams.png", position: "bottom-left", size: "md" },
		{ name: "Jira", logo: "/integrations/jira.png", position: "left", size: "md" },
		{ name: "Salesforce", logo: "/integrations/salesforce.png", position: "top-left", size: "sm" },
	];

	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold mb-4">Custom Integrations (8 apps)</h2>
			<IntegrationsDiagram integrations={customIntegrations} />
		</div>
	);
}

// Example 3: Without connectors
export function NoConnectorsDiagram() {
	const integrations: Integration[] = [
		{ name: "Slack", logo: "/integrations/slack.png", position: "top", size: "md" },
		{ name: "Teams", logo: "/integrations/teams.png", position: "right", size: "md" },
		{ name: "Zoom", logo: "/integrations/zoom.png", position: "bottom", size: "md" },
		{ name: "Google Meet", logo: "/integrations/google-meet.png", position: "left", size: "md" },
	];

	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold mb-4">Without Connectors</h2>
			<IntegrationsDiagram integrations={integrations} showConnectors={false} />
		</div>
	);
}

// Example 4: Without animations (static)
export function StaticDiagram() {
	const integrations: Integration[] = [
		{ name: "Salesforce", logo: "/integrations/salesforce.png", position: "top-left", size: "md" },
		{ name: "HubSpot", logo: "/integrations/hubspot.png", position: "top", size: "md" },
		{ name: "LinkedIn", logo: "/integrations/linkedin.png", position: "top-right", size: "md" },
		{ name: "Gmail", logo: "/integrations/gmail.png", position: "right", size: "md" },
		{ name: "Outlook", logo: "/integrations/outlook.png", position: "bottom-right", size: "md" },
		{ name: "Slack", logo: "/integrations/slack.png", position: "bottom", size: "md" },
	];

	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold mb-4">Static (No Animations)</h2>
			<IntegrationsDiagram integrations={integrations} animated={false} />
		</div>
	);
}

// Example 5: Minimal with few integrations
export function MinimalDiagram() {
	const integrations: Integration[] = [
		{ name: "Slack", logo: "/integrations/slack.png", position: "top", size: "lg" },
		{ name: "Google Drive", logo: "/integrations/google-drive.png", position: "right", size: "lg" },
		{ name: "Zoom", logo: "/integrations/zoom.png", position: "bottom", size: "lg" },
		{ name: "Teams", logo: "/integrations/teams.png", position: "left", size: "lg" },
	];

	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold mb-4">Minimal (4 main integrations)</h2>
			<IntegrationsDiagram integrations={integrations} />
		</div>
	);
}

// Example 6: Custom center icon and background
export function CustomCenterDiagram() {
	const integrations: Integration[] = [
		{ name: "Slack", logo: "/integrations/slack.png", position: "top", size: "md" },
		{ name: "Teams", logo: "/integrations/teams.png", position: "top-right", size: "md" },
		{ name: "Zoom", logo: "/integrations/zoom.png", position: "right", size: "md" },
		{ name: "LinkedIn", logo: "/integrations/linkedin.png", position: "bottom-right", size: "md" },
		{ name: "Gmail", logo: "/integrations/gmail.png", position: "bottom", size: "md" },
		{ name: "Asana", logo: "/integrations/asana.png", position: "left", size: "md" },
	];

	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold mb-4">Custom Center Color</h2>
			<IntegrationsDiagram
				integrations={integrations}
				centerIcon="/logo-short.svg"
				centerBackground="#2563EB"
			/>
		</div>
	);
}

// Example 7: Different sizes demonstration
export function SizeVariantsDiagram() {
	const integrations: Integration[] = [
		{ name: "Large Top", logo: "/integrations/slack.png", position: "top", size: "lg" },
		{ name: "Medium Right", logo: "/integrations/teams.png", position: "right", size: "md" },
		{ name: "Small Bottom", logo: "/integrations/zoom.png", position: "bottom", size: "sm" },
		{ name: "Large Left", logo: "/integrations/linkedin.png", position: "left", size: "lg" },
		{ name: "Small Top Right", logo: "/integrations/gmail.png", position: "top-right", size: "sm" },
		{ name: "Medium Bottom Left", logo: "/integrations/asana.png", position: "bottom-left", size: "md" },
	];

	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold mb-4">Different Size Variants (sm, md, lg)</h2>
			<IntegrationsDiagram integrations={integrations} />
		</div>
	);
}

// All examples showcase component
export default function IntegrationsDiagramShowcase() {
	return (
		<div className="space-y-16 pb-16">
			<div className="text-center py-8">
				<h1 className="text-4xl font-bold mb-4">IntegrationsDiagram Component</h1>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					A flexible React component for displaying integration diagrams with
					customizable icons, positions, sizes, and animations.
				</p>
			</div>

			<DefaultIntegrationsDiagram />
			<div className="border-t border-border" />

			<CustomIntegrationsDiagram />
			<div className="border-t border-border" />

			<MinimalDiagram />
			<div className="border-t border-border" />

			<NoConnectorsDiagram />
			<div className="border-t border-border" />

			<StaticDiagram />
			<div className="border-t border-border" />

			<CustomCenterDiagram />
			<div className="border-t border-border" />

			<SizeVariantsDiagram />
		</div>
	);
}
