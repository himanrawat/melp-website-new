import type { Metadata } from "next";
import LegalLayout, { type LegalSection } from "../components/LegalLayout";

export const metadata: Metadata = {
	title: "Security Overview | Melp",
	description: "How Melp protects data across infrastructure, product, and operations.",
};

const summary = [
	{
		title: "Encryption everywhere",
		description:
			"TLS in transit and strong encryption at rest protect messages, meetings, and files by default.",
	},
	{
		title: "Tight access control",
		description:
			"SSO, SAML, MFA, and role-based permissions ensure only the right people can reach the right data.",
	},
	{
		title: "Resilience built-in",
		description:
			"Redundant infrastructure, tested backups, and disaster recovery plans keep Melp available.",
	},
];

const sections: LegalSection[] = [
	{
		id: "architecture-and-encryption",
		title: "Architecture and encryption",
		description:
			"Our stack is built on hardened cloud infrastructure with layered controls to safeguard customer data.",
		bullets: [
			"All traffic is encrypted in transit using modern TLS; data at rest uses strong encryption (for example AES-256) with managed keys.",
			"Secrets are stored in dedicated secrets management systems with strict access policies and audit logs.",
			"Production and corporate environments are segmented, with least-privilege access between services.",
		],
	},
	{
		id: "identity-and-access",
		title: "Identity and access management",
		description:
			"We verify identity, minimize privileges, and give admins granular controls over user access.",
		bullets: [
			"Support for SSO/SAML, SCIM, and MFA so organizations can enforce centralized identity requirements.",
			"Role-based access control for meetings, messaging, file sharing, and admin capabilities.",
			"Just-in-time and time-bound access for Melp personnel with approvals, logging, and revocation.",
		],
	},
	{
		id: "network-and-infrastructure",
		title: "Network and infrastructure security",
		description:
			"Layers of protection guard against intrusion, abuse, and data exfiltration.",
		bullets: [
			"Web application firewalls, DDoS protections, and rate limiting shield public endpoints.",
			"Security patches and dependency updates are applied on a defined cadence with emergency procedures for critical vulnerabilities.",
			"Automated backups and encryption for stored assets, including media and document storage.",
		],
	},
	{
		id: "logging-and-monitoring",
		title: "Monitoring and detection",
		description:
			"Centralized telemetry and alerting provide visibility across systems and user activity.",
		bullets: [
			"Comprehensive logging of authentication, administrative actions, and data access with retention for investigations.",
			"Automated alerts for anomalous activity and system health, routed to on-call engineers 24/7.",
			"Regular vulnerability scanning and external penetration testing to validate controls.",
		],
	},
	{
		id: "secure-development",
		title: "Secure development lifecycle",
		description:
			"Security is built into how we design, build, and release new features.",
		bullets: [
			"Code changes undergo peer review, automated testing, and dependency scanning before release.",
			"Secrets are never stored in source control; automated checks enforce policies in CI/CD pipelines.",
			"Employees complete regular security and privacy training with role-specific modules for engineers and support.",
		],
	},
	{
		id: "incident-response",
		title: "Incident response",
		description:
			"A documented, tested playbook guides how we detect, triage, and communicate about incidents.",
		bullets: [
			"Dedicated on-call responders follow runbooks for security events and service disruptions.",
			"Customers receive timely notifications about incidents that affect their data or availability.",
			"Post-incident reviews drive corrective actions and measurable follow-ups.",
		],
	},
	{
		id: "business-continuity",
		title: "Business continuity and resilience",
		description:
			"Melp is engineered for high availability and rapid recovery from disruptions.",
		bullets: [
			"Regularly tested backups with defined recovery point (RPO) and recovery time objectives (RTO).",
			"Regional redundancy and failover strategies for critical services where supported by the cloud provider.",
			"Capacity planning and load testing to maintain performance during growth or traffic spikes.",
		],
	},
	{
		id: "compliance-and-audits",
		title: "Compliance and audits",
		description:
			"We align our controls with recognized standards and provide documentation to enterprise customers.",
		bullets: [
			"Security controls are mapped to common frameworks such as SOC 2 and ISO 27001 where applicable.",
			"Data processing agreements and subprocessors lists are available to customers on request.",
			"Audit evidence and penetration test summaries can be shared under NDA to support due diligence.",
		],
	},
];

export default function SecurityPage() {
	return (
		<div className="min-h-screen bg-background">
			<LegalLayout
				title="Security Overview"
				subtitle="An overview of how Melp secures your data—from encryption and access controls to monitoring, incident response, and resilience."
				lastUpdated="December 19, 2025"
				summary={summary}
				sections={sections}
				contactEmail="security@melp.com"
			/>
		</div>
	);
}
