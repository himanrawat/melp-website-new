"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
export default function PrivacyPolicy() {
	const [activeSection, setActiveSection] = useState<string>("overview");

	const fadeIn = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.5 },
	};

	const sections = [
		{ id: "overview", title: "Overview" },
		{
			id: "collecting-using-personal-data",
			title: "Collecting and Using Your Personal Data",
		},
		{
			id: "sources-personal-information",
			title: "Sources of Personal Information",
		},
		{ id: "cookies", title: "Cookies" },
		{ id: "use-personal-data", title: "Use of Your Personal Data" },
		{ id: "retention-personal-data", title: "Retention of Your Personal Data" },
		{ id: "transfer-personal-data", title: "Transfer of Your Personal Data" },
		{ id: "withdrawal-consent", title: "Withdrawal of Consent" },
		{ id: "storage-transfer", title: "Storage and Transfer" },
		{ id: "legal-basis", title: "Legal Basis" },
		{ id: "marketing-opt-outs", title: "Marketing Opt-Outs" },
		{ id: "sharing-of-information", title: "Sharing of Information" },
		{ id: "privacy-of-children", title: "Privacy of Children" },
		{ id: "security", title: "Security" },
		{ id: "changes", title: "Changes to This Policy" },
		{ id: "contact-us", title: "Contact Us" },
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ rootMargin: "-20% 0px -70% 0px" }
		);

		sections.forEach((section) => {
			const element = document.getElementById(section.id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className="min-h-screen bg-neutral-50">
			<main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Breadcrumb */}
				<nav className="text-sm text-neutral-500 mb-8">
					<ol className="flex items-center space-x-2">
						<li>
							<a
								href="/legal/security"
								className="hover:text-neutral-900 transition-colors"
							>
								Security
							</a>
						</li>
						<li>
							<span className="mx-2">/</span>
						</li>
						<li className="text-neutral-900 font-medium">Privacy Policy</li>
					</ol>
				</nav>

				{/* Header */}
				<motion.header
					{...fadeIn}
					className="mb-12 pb-8 border-b border-neutral-200"
				>
					<h1 className="text-4xl font-bold text-neutral-900 mb-3">
						Privacy Policy
					</h1>
					<p className="text-neutral-500">Last updated: April 30, 2025</p>
				</motion.header>

				<div className="flex flex-col lg:flex-row gap-12">
					{/* Table of Contents - Sidebar */}
					<motion.aside
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="lg:w-64 flex-shrink-0"
					>
						<div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
							<h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">
								On this page
							</h3>
							<nav className="space-y-1">
								{sections.map((section) => (
									<a
										key={section.id}
										href={`#${section.id}`}
										className={`block text-sm py-1.5 pl-3 border-l-2 transition-all duration-200 ${
											activeSection === section.id
												? "border-neutral-900 text-neutral-900 font-medium"
												: "border-transparent text-neutral-500 hover:text-neutral-900 hover:border-neutral-300"
										}`}
									>
										{section.title}
									</a>
								))}
							</nav>
						</div>
					</motion.aside>

					{/* Main Content */}
					<motion.main
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="flex-1 prose prose-neutral max-w-none"
					>
						{/* Welcome Section */}
						<section id="overview" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Welcome to Melpapp – Your AI Digital Workspace
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Melpapp Inc. or any of its affiliates or associate companies or
								subsidiaries (hereafter collectively referred as "MelpApp Inc.",
								"Melpapp", "we", "us", or "our"), prescribes this privacy policy
								(the "Privacy Policy" / "Policy"), last updated on the date
								mentioned above, describes how we collect, use, and disclose
								your personal information when you visit or use our website (the
								"Site"), the MelpApp mobile application or desktop application
								(the "App(s)"), the MelpApp email plugins, the MelpApp chrome
								extension and any other website or mobile application or plugins
								that links to this privacy policy in our capacity as a
								controller of your personal information.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								This Privacy Policy explains what information of yours will be
								collected when you access the services, how such personal
								information will be used, and how you can control the
								collection, correction and/or deletion of your personal
								information. We will not use or share your personal information
								with anyone except as described in this Privacy Policy.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								This Privacy Policy has been prepared and is maintained in
								accordance with all applicable national and international laws
								and regulations, in particular, the California Consumer Privacy
								Act (CCPA) and the GDPR (General Data Protection Regulation -
								European Regulations).
							</p>
						</section>

						{/* Collecting Personal Data */}
						<section id="collecting-using-personal-data" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Collecting and Using Your Personal Data
							</h2>

							<h3 className="text-lg font-medium text-neutral-800 mb-3">
								Personal Data
							</h3>
							<p className="text-neutral-700 leading-relaxed mb-4">
								While using our service, we may ask you to provide us with
								certain personally identifiable information that can be used to
								contact or identify you. Personally identifiable information may
								include, but is not limited to:
							</p>
							<ul className="list-disc pl-6 mb-6 space-y-1 text-neutral-700">
								<li>Email address</li>
								<li>First name and last name</li>
								<li>Phone number</li>
								<li>Address, state, province, zip/postal code, city</li>
								<li>Google account and Microsoft account information</li>
								<li>Usage data</li>
							</ul>

							<h3 className="text-lg font-medium text-neutral-800 mb-3">
								Usage Data
							</h3>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Usage data is collected automatically when using the service.
								Usage data may include information such as your device&apos;s
								Internet Protocol address (e.g., IP address), browser type,
								browser version, the pages of our service that you visit, the
								time and date of your visit, the time spent on those pages,
								unique device identifiers and other diagnostic data.
							</p>
						</section>

						{/* Sources of Personal Information */}
						<section id="sources-personal-information" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Sources of Personal Information
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								We obtain the categories of personal information listed above
								from the following categories of sources:
							</p>
							<ul className="list-disc pl-6 space-y-3 text-neutral-700">
								<li>
									<strong>Directly from you.</strong> For example, from the
									forms you complete on our service, preferences you express or
									provide through our service.
								</li>
								<li>
									<strong>Indirectly from you.</strong> For example, from
									observing your activity on our service.
								</li>
								<li>
									<strong>Automatically from you.</strong> For example, through
									cookies we or our service providers set on your device.
								</li>
								<li>
									<strong>From service providers.</strong> For example,
									third-party vendors to monitor and analyze the use of our
									service.
								</li>
								<li>
									<strong>
										Registration and login with Google or Microsoft.
									</strong>{" "}
									By registering on the platform through your Google or
									Microsoft account, you authorize MelpApp to collect, process
									and store your account information.
								</li>
								<li>
									<strong>Google Analytics.</strong> We use Google Analytics to
									collect and analyze certain types of information. Refer to
									Google&apos;s privacy policy:{" "}
									<a
										href="https://policies.google.com/privacy"
										className="text-blue-600 hover:underline"
									>
										https://policies.google.com/privacy
									</a>
								</li>
							</ul>
						</section>

						{/* Cookies */}
						<section id="cookies" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Cookies
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								We use cookies and similar tracking technologies to track the
								activity on our service and store certain information. The
								technologies we use may include:
							</p>
							<ul className="list-disc pl-6 mb-6 space-y-2 text-neutral-700">
								<li>
									<strong>Cookies or Browser Cookies.</strong> A cookie is a
									small file placed on your device. You can instruct your
									browser to refuse all cookies or to indicate when a cookie is
									being sent.
								</li>
								<li>
									<strong>Web Beacons.</strong> Certain sections of our service
									and our emails may contain small electronic files known as web
									beacons that permit the company to count users who have
									visited those pages.
								</li>
							</ul>

							<h3 className="text-lg font-medium text-neutral-800 mb-3">
								Types of Cookies We Use
							</h3>
							<div className="space-y-4">
								<div className="bg-neutral-100 rounded-lg p-4">
									<h4 className="font-medium text-neutral-900">
										Necessary / Essential Cookies
									</h4>
									<p className="text-sm text-neutral-600 mt-1">
										Session cookies administered by us. Essential to provide you
										with services available through the website.
									</p>
								</div>
								<div className="bg-neutral-100 rounded-lg p-4">
									<h4 className="font-medium text-neutral-900">
										Cookies Policy / Notice Acceptance Cookies
									</h4>
									<p className="text-sm text-neutral-600 mt-1">
										Persistent cookies to identify if users have accepted the
										use of cookies on the website.
									</p>
								</div>
								<div className="bg-neutral-100 rounded-lg p-4">
									<h4 className="font-medium text-neutral-900">
										Functionality Cookies
									</h4>
									<p className="text-sm text-neutral-600 mt-1">
										Persistent cookies that remember choices you make when you
										use the website.
									</p>
								</div>
								<div className="bg-neutral-100 rounded-lg p-4">
									<h4 className="font-medium text-neutral-900">
										Tracking and Performance Cookies
									</h4>
									<p className="text-sm text-neutral-600 mt-1">
										Persistent cookies administered by third-parties to track
										information about traffic and usage.
									</p>
								</div>
							</div>
						</section>

						{/* Use of Personal Data */}
						<section id="use-personal-data" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Use of Your Personal Data
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								The company may use personal data for the following purposes:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
								<li>
									<strong>To provide and maintain our service,</strong>{" "}
									including to monitor the usage of our service.
								</li>
								<li>
									<strong>To manage your account:</strong> to manage your
									registration as a user of the service.
								</li>
								<li>
									<strong>For the performance of a contract:</strong> the
									development, compliance and undertaking of the purchase
									contract for products or services.
								</li>
								<li>
									<strong>To contact you:</strong> by email, telephone calls,
									SMS, or other equivalent forms of electronic communication.
								</li>
								<li>
									<strong>To provide you</strong> with news, special offers and
									general information about other goods and services.
								</li>
								<li>
									<strong>To manage your requests:</strong> to attend and manage
									your requests to us.
								</li>
								<li>
									<strong>For business transfers:</strong> to evaluate or
									conduct a merger, divestiture, restructuring, or other sale or
									transfer of assets.
								</li>
								<li>
									<strong>For data protection:</strong> to protect, investigate
									and deter against fraudulent, unauthorized or illegal
									activity.
								</li>
							</ul>

							<p className="text-neutral-700 leading-relaxed mb-4">
								We may share your personal information in the following
								situations:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-neutral-700">
								<li>
									<strong>With service providers:</strong> to monitor and
									analyze the use of our service, for payment processing.
								</li>
								<li>
									<strong>For business transfers:</strong> in connection with
									any merger, sale of company assets, or acquisition.
								</li>
								<li>
									<strong>With affiliates:</strong> we may share your
									information with our affiliates.
								</li>
								<li>
									<strong>With business partners:</strong> to offer you certain
									products, services or promotions.
								</li>
								<li>
									<strong>For legal reasons:</strong> to comply with applicable
									law or respond to legal process.
								</li>
								<li>
									<strong>With your consent:</strong> we may disclose your
									personal information for any other purpose with your consent.
								</li>
							</ul>
						</section>

						{/* Retention */}
						<section id="retention-personal-data" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Retention of Your Personal Data
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								The Company will retain your personal data only for as long as
								is necessary for the purposes set out in this Privacy Policy. We
								will retain and use your personal data to the extent necessary
								to comply with our legal obligations, resolve disputes, and
								enforce our legal agreements and policies.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Usage data is generally retained for a shorter period of time,
								except when this data is used to strengthen the security or to
								improve the functionality of our service, or we are legally
								obligated to retain this data for longer time periods.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								Once the retention period expires, the personal data will be
								deleted. Therefore, the right of access, the right of erasure,
								the right of rectification and the right to data portability
								cannot be asserted once the retention period has expired.
							</p>
						</section>

						{/* Transfer */}
						<section id="transfer-personal-data" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Transfer of Your Personal Data
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Your information, including personal data, is processed at the
								Company&apos;s operating offices and in any other places where
								the parties involved in the processing are located. This
								information may be transferred to and maintained on computers
								located outside of your state, province, country or other
								governmental jurisdiction where data protection laws may differ.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								The Company will take all steps reasonably necessary to ensure
								that your data is treated securely and in accordance with this
								Privacy Policy and no transfer of your personal data will take
								place to an organization or a country unless there are adequate
								controls in place.
							</p>
						</section>

						{/* Withdrawal of Consent */}
						<section id="withdrawal-consent" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Withdrawal of Consent for Personal Data Processing
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Data subjects have the right to withdraw their consent for the
								processing of their personal data at any time. This withdrawal
								will not affect the lawfulness of processing based on consent
								before its withdrawal.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								To withdraw consent:
							</p>
							<ol className="list-decimal pl-6 space-y-2 text-neutral-700">
								<li>
									Contact our Data Protection Officer using the contact details
									provided in the "Contact Us" section.
								</li>
								<li>
									Clearly state your intention to withdraw consent for specific
									personal data processing activities.
								</li>
								<li>Verify your identity when requested.</li>
								<li>
									Upon successful verification, we will acknowledge your request
									and cease processing.
								</li>
							</ol>
							<p className="text-neutral-700 leading-relaxed mt-4">
								For queries related to withdrawal of consent, please contact us
								at{" "}
								<a
									href="mailto:support@melp.us"
									className="text-blue-600 hover:underline"
								>
									support@melp.us
								</a>
								.
							</p>
						</section>

						{/* Storage and Transfer */}
						<section id="storage-transfer" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Storage and Transfer of Personal Information
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Your personal information and files including their backups are
								stored on MelpApp&apos;s servers and the servers of companies we
								hire to provide services to us.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								If you are a resident of the European Economic Area and when
								your personal information is processed outside EEA, we will
								ensure that the recipient offers an adequate level of
								protection, for instance by entering into standard contractual
								clauses for the transfer of personal information as approved by
								the European Commission.
							</p>
						</section>

						{/* Legal Basis */}
						<section id="legal-basis" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Legal Basis
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								If you are a data subject from the European Economic Area, our
								legal basis for collecting and using the personal information
								described above will depend on the personal information
								concerned and the specific context in which we collect it. We
								will normally collect personal information from you only where
								it is needed to perform a contract with you, where the
								processing is in our legitimate interests, or where we have your
								consent. If you have questions concerning the legal basis,
								please contact us at{" "}
								<a
									href="mailto:support@melp.us"
									className="text-blue-600 hover:underline"
								>
									support@melp.us
								</a>
								.
							</p>
						</section>

						{/* Marketing Opt-Outs */}
						<section id="marketing-opt-outs" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Marketing Opt-Outs
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								MelpApp will not send you any unsolicited marketing or
								promotional email without your permission. You may opt-out of
								receiving such marketing emails by following the instructions in
								those messages.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								For interest-based advertising opt-outs, you may use:
							</p>
							<ul className="list-disc pl-6 space-y-1 text-neutral-700">
								<li>
									NAI&apos;s opt-out platform:{" "}
									<a
										href="http://www.networkadvertising.org/choices/"
										className="text-blue-600 hover:underline"
									>
										networkadvertising.org/choices
									</a>
								</li>
								<li>
									EDAA&apos;s opt-out platform:{" "}
									<a
										href="http://www.youronlinechoices.com/"
										className="text-blue-600 hover:underline"
									>
										youronlinechoices.com
									</a>
								</li>
								<li>
									DAA&apos;s opt-out platform:{" "}
									<a
										href="http://optout.aboutads.info/"
										className="text-blue-600 hover:underline"
									>
										optout.aboutads.info
									</a>
								</li>
							</ul>
						</section>

						{/* Sharing of Information */}
						<section id="sharing-of-information" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Sharing of Information
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								We may share your personal information externally with
								third-party service providers, including but not limited to
								companies providing payment processing, network equipment
								management, hosting services, and other services discussed in
								this policy.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								We currently use Stripe, Inc. to manage our payments. Your
								credit card information will be subject to our payment
								processor&apos;s privacy policy in addition to ours.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								We do not sell, trade, or otherwise transfer your personal
								information except in accordance with this policy.
							</p>
						</section>

						{/* Privacy of Children */}
						<section id="privacy-of-children" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Privacy of Children
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								We recognize the importance of children&apos;s safety and
								privacy. We do not request, or knowingly collect, any personally
								identifiable information from children under the age of 16
								except for academic purposes. If a parent or guardian becomes
								aware that their child has provided us with personal
								information, please contact us at{" "}
								<a
									href="mailto:support@melp.us"
									className="text-blue-600 hover:underline"
								>
									support@melp.us
								</a>
								.
							</p>
						</section>

						{/* Security */}
						<section id="security" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Security
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Your personal information is extremely important to us. Your
								information resides on a secure server that only selected
								personnel have access to. Promotional and referral codes are
								random alphanumeric sequences that are encrypted.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								Although we try our best to protect your information, we cannot
								eliminate security risks associated with personal information.
								It is important that you do not share your password with anyone.
							</p>
						</section>

						{/* Changes */}
						<section id="changes" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Changes to This Privacy Policy
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								We may update our Privacy Policy from time to time. We will
								notify you of any changes by posting the new Privacy Policy on
								this page.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								We will let you know via email and/or a prominent notice on our
								service, prior to the change becoming effective and update the
								"Last updated" date at the top of this Privacy Policy.
							</p>
						</section>

						{/* Contact Us */}
						<section id="contact-us" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Contact Us
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-6">
								If you have any questions about this Privacy Policy, you can
								contact us:
							</p>
							<div className="bg-neutral-100 rounded-lg p-6">
								<p className="font-medium text-neutral-900 mb-2">
									MelpApp Inc.
								</p>
								<p className="text-neutral-700">
									400 Alexander Park, Suite 103
								</p>
								<p className="text-neutral-700 mb-4">Princeton, NJ 08540</p>
								<p className="text-neutral-700">
									Email:{" "}
									<a
										href="mailto:support@melp.us"
										className="text-blue-600 hover:underline"
									>
										support@melp.us
									</a>
								</p>
							</div>
						</section>
					</motion.main>
				</div>
			</main>
		</div>
	);
}
