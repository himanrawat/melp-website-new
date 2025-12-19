"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
// import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// export const metadata: Metadata = {
// 	title: "Cookie Policy | Melp",
// 	description:
// 		"How Melp uses cookies and similar technologies and how you can control them.",
// };

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
};

const sections = [
	{ id: "overview", title: "Overview" },
	{ id: "understanding-cookies", title: "Understanding Cookies" },
	{ id: "cookies-settings", title: "Cookies Settings" },
	{ id: "categories-of-cookies", title: "Categories of Cookies" },
	{ id: "how-to-control-cookies", title: "How to Control Cookies" },
	{ id: "changes-to-cookies-policy", title: "Changes to This Policy" },
	{ id: "contact-us", title: "Contact Us" },
];

export default function CookiesPage() {
	const [activeSection, setActiveSection] = useState<string>("overview");

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
		<div className="min-h-screen bg-background">
			<Header />
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Breadcrumb */}
				<nav className="text-sm text-neutral-500 mb-8">
					<ol className="flex items-center space-x-2">
						<li>
							<a href="#" className="hover:text-neutral-900 transition-colors">
								Security
							</a>
						</li>
						<li>
							<span className="mx-2">/</span>
						</li>
						<li className="text-neutral-900 font-medium">Cookies Policy</li>
					</ol>
				</nav>

				{/* Header */}
				<motion.header
					{...fadeIn}
					className="mb-12 pb-8 border-b border-neutral-200"
				>
					<h1 className="text-4xl font-bold text-neutral-900 mb-3">
						Cookies Policy
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
						{/* Overview */}
						<section id="overview" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Overview
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								This Cookies Policy applies to all the users of MelpApp
								services, including the users of its features and other
								services. This cookie policy explains how and why cookies and
								other similar technologies may be stored on and accessed from
								your device when you visit or use the website/app.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								This cookie policy should be read together with our{" "}
								<Link href="/privacy" className="text-blue-600 hover:underline">
									Privacy Policy
								</Link>{" "}
								and our{" "}
								<Link href="/terms" className="text-blue-600 hover:underline">
									Terms and Conditions
								</Link>
								.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								This MelpApp is a digital property and operated by MelpApp Inc.
								We are committed to protecting and respecting your data's
								security.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								Our cookie policy is subject to change at any time without
								notice. To make sure you are aware of any changes, please review
								this policy periodically.
							</p>
						</section>

						{/* Understanding Cookies */}
						<section id="understanding-cookies" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Understanding Cookies
							</h2>
							<div className="bg-neutral-100 rounded-lg p-6">
								<p className="text-neutral-700 leading-relaxed">
									Cookies are small text files that are stored on your computer
									or mobile device when you visit a website. They allow the
									website to recognize your device and remember if you have been
									to the website before.
								</p>
							</div>
						</section>

						{/* Cookies Settings */}
						<section id="cookies-settings" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Cookies Settings
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								If you do not want cookies to be dropped on your device, you can
								adjust the settings of your internet browser to reject the
								setting of all or some cookies and to alert you when a cookie is
								placed on your device. For further information about how to do
								so, please refer to your browser's 'help', 'tool', or 'edit'
								section.
							</p>
							<div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
								<p className="text-amber-800 text-sm">
									<strong>Please note:</strong> If you use your browser settings
									to block all cookies, including strictly necessary cookies,
									you may not be able to access or use all or parts of the
									functionalities of the website.
								</p>
							</div>
							<p className="text-neutral-700 leading-relaxed">
								If you want to remove previously-stored cookies, you can
								manually delete the cookies at any time. However, this will not
								prevent the website from placing further cookies on your device
								unless and until you adjust your internet browser setting as
								described above.
							</p>
						</section>

						{/* Categories of Cookies */}
						<section id="categories-of-cookies" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Categories of Cookies
							</h2>

							{/* Strictly Necessary Cookies */}
							<div className="mb-8">
								<h3 className="text-xl font-medium text-neutral-800 mb-4">
									Strictly Necessary Cookies
								</h3>
								<div className="space-y-4">
									<div className="bg-neutral-100 rounded-lg p-5">
										<h4 className="font-medium text-neutral-900 mb-2">Core</h4>
										<p className="text-neutral-700 text-sm">
											Essential for fundamental website functionality, secure
											logins, and continuous order progress. They maintain user
											sessions for seamless navigation without repeated login
											authentication.
										</p>
									</div>
									<div className="bg-neutral-100 rounded-lg p-5">
										<h4 className="font-medium text-neutral-900 mb-2">
											Technical Performance
										</h4>
										<p className="text-neutral-700 text-sm">
											Detect potential browsing issues, optimize technical
											performance, and execute load balancing for uninterrupted
											website operation.
										</p>
									</div>
									<div className="bg-neutral-100 rounded-lg p-5">
										<h4 className="font-medium text-neutral-900 mb-2">
											Necessary Settings
										</h4>
										<p className="text-neutral-700 text-sm">
											Imperative for recording and preserving user settings
											critical to proper website functioning, including language
											preferences, currency selection, time zone configurations,
											browser specifications, and multimedia player settings.
										</p>
									</div>
									<div className="bg-neutral-100 rounded-lg p-5">
										<h4 className="font-medium text-neutral-900 mb-2">
											Session Cookies
										</h4>
										<p className="text-neutral-700 text-sm">
											Session cookies are used to log in to the website with
											your respective credentials and password. They keep users
											logged in and are temporary—deleted from the device or
											browser when the session is closed and the browser is
											closed. We use session cookies to keep the session open
											when using our services and to identify you on our system
											each time you log on to the website.
										</p>
									</div>
								</div>
							</div>

							{/* Functional Cookies */}
							<div className="mb-8">
								<h3 className="text-xl font-medium text-neutral-800 mb-4">
									Functional Cookies
								</h3>
								<div className="bg-neutral-100 rounded-lg p-5">
									<h4 className="font-medium text-neutral-900 mb-2">
										Enhanced Functionality and Customization
									</h4>
									<p className="text-neutral-700 text-sm">
										Enhance website functionality with customizations and
										additional features, like displaying video clips with
										support explanations and retaining user preferences for
										streamlined interactions.
									</p>
								</div>
							</div>

							{/* Performance Cookies */}
							<div className="mb-8">
								<h3 className="text-xl font-medium text-neutral-800 mb-4">
									Performance Cookies
								</h3>
								<div className="space-y-4">
									<div className="bg-neutral-100 rounded-lg p-5">
										<h4 className="font-medium text-neutral-900 mb-2">
											Analytics
										</h4>
										<p className="text-neutral-700 text-sm">
											Gather comprehensive usage and performance data, including
											user interactions like mouse movements and clicks. Improve
											website performance, assess user engagement, and gain
											insights into user behaviour. May originate from MelpApp
											or third-party analytics providers.
										</p>
									</div>
									<div className="bg-neutral-100 rounded-lg p-5">
										<h4 className="font-medium text-neutral-900 mb-2">
											Third-Party Cookies
										</h4>
										<p className="text-neutral-700 text-sm">
											Third-party cookies may come from partners or third-party
											companies that provide functional web services or tools
											for our website and the optimal functioning and operation
											of our services. We use third-party cookies responsibly
											and for the sole purpose of providing optimal functioning
											of the platform and services. You may opt out of these
											cookies by following the cookie removal information
											contained in this document or the technical information of
											the browser from which you access our website and
											services.
										</p>
									</div>
								</div>
							</div>

							{/* Targeting Cookies */}
							<div className="mb-8">
								<h3 className="text-xl font-medium text-neutral-800 mb-4">
									Targeting Cookies
								</h3>
								<div className="bg-neutral-100 rounded-lg p-5">
									<h4 className="font-medium text-neutral-900 mb-2">
										Advertising
									</h4>
									<p className="text-neutral-700 text-sm">
										Enable MelpApp and advertising partners to collect relevant
										user data for tailoring advertising content. Users may grant
										consent for personalized advertising from third-party
										partners or opt-out of such targeted advertising.
									</p>
								</div>
							</div>

							{/* Social Media Cookies */}
							<div className="mb-8">
								<h3 className="text-xl font-medium text-neutral-800 mb-4">
									Social Media Cookies
								</h3>
								<div className="bg-neutral-100 rounded-lg p-5">
									<p className="text-neutral-700 text-sm mb-3">
										Facilitate seamless sharing of MelpApp content on social
										media platforms when users are logged into their respective
										accounts. Disabling targeting cookies may hinder the ability
										to share MelpApp content on social media.
									</p>
									<p className="text-neutral-700 text-sm">
										These cookies allow you to interact with social networks
										through certain actions such as the "like" button. They also
										allow you to interact with the contents of each social
										network and share website content on social networks. The
										way these cookies are used and the information collected is
										governed by the privacy policies of each social network.
									</p>
								</div>
							</div>
						</section>

						{/* How to Control Cookies */}
						<section id="how-to-control-cookies" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								How to Control Cookies
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Except for strictly necessary cookies, you can accept or decline
								categories or individual cookies.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-6">
								You can exercise control over cookies through the adjustment of
								settings within your internet browser. While the majority of web
								browsers are configured to automatically accept cookies, they
								also afford you the option to manage these cookies by either
								blocking or deleting them. To achieve this, you may navigate to
								the relevant controls within your browser, typically found under
								"settings," then "privacy," and finally "cookies."
							</p>

							<h3 className="text-lg font-medium text-neutral-800 mb-4">
								Desktop Browsers
							</h3>
							<div className="space-y-3 mb-6">
								<div className="flex items-start gap-3 p-4 bg-neutral-100 rounded-lg">
									<span className="font-medium text-neutral-900 min-w-32">
										Microsoft Edge:
									</span>
									<a
										href="https://support.microsoft.com/en-us/office/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline text-sm break-all"
									>
										support.microsoft.com/en-us/office/delete-cookies-in-microsoft-edge
									</a>
								</div>
								<div className="flex items-start gap-3 p-4 bg-neutral-100 rounded-lg">
									<span className="font-medium text-neutral-900 min-w-32">
										Firefox:
									</span>
									<a
										href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline text-sm break-all"
									>
										support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
									</a>
								</div>
								<div className="flex items-start gap-3 p-4 bg-neutral-100 rounded-lg">
									<span className="font-medium text-neutral-900 min-w-32">
										Chrome:
									</span>
									<a
										href="https://support.google.com/chrome/answer/95647?hl=en"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline text-sm break-all"
									>
										support.google.com/chrome/answer/95647
									</a>
								</div>
								<div className="flex items-start gap-3 p-4 bg-neutral-100 rounded-lg">
									<span className="font-medium text-neutral-900 min-w-32">
										Safari:
									</span>
									<a
										href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline text-sm break-all"
									>
										support.apple.com/guide/safari/manage-cookies-and-website-data
									</a>
								</div>
							</div>

							<h3 className="text-lg font-medium text-neutral-800 mb-4">
								Mobile Devices
							</h3>
							<p className="text-neutral-700 leading-relaxed mb-4">
								In cases where you access the website through an iOS or Android
								mobile device, please follow the instructions below to delete or
								block cookies on your device:
							</p>
							<div className="space-y-3">
								<div className="flex items-start gap-3 p-4 bg-neutral-100 rounded-lg">
									<span className="font-medium text-neutral-900 min-w-32">
										Android:
									</span>
									<a
										href="https://support.google.com/answer/32050"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline text-sm break-all"
									>
										support.google.com/answer/32050
									</a>
								</div>
								<div className="flex items-start gap-3 p-4 bg-neutral-100 rounded-lg">
									<span className="font-medium text-neutral-900 min-w-32">
										iOS:
									</span>
									<a
										href="https://support.apple.com/en-us/HT201265"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline text-sm break-all"
									>
										support.apple.com/en-us/HT201265
									</a>
								</div>
							</div>
						</section>

						{/* Changes to This Cookies Policy */}
						<section id="changes-to-cookies-policy" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Changes to This Cookies Policy
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								We may update our Cookies Policy from time to time. We will
								notify you of any changes by posting the new Cookies Policy on
								this page.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								We will let you know via email and/or a prominent notice on our
								service, prior to the change becoming effective and update the
								"Last updated" date at the top of this Cookies Policy.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								You are advised to review this Cookies Policy periodically for
								any changes. Changes to this Cookies Policy are effective when
								they are posted on this page.
							</p>
						</section>

						{/* Contact Us */}
						<section id="contact-us" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Contact Us
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-6">
								If you have any questions about our use of cookies or this
								Cookies Policy, please contact us:
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
							<p className="text-neutral-700 leading-relaxed mt-6">
								For more information about how we handle your personal data,
								please refer to our{" "}
								<Link href="/privacy" className="text-blue-600 hover:underline">
									Privacy Policy
								</Link>
								.
							</p>
						</section>
					</motion.main>
				</div>
			</div>
			<Footer />
		</div>
	);
}
