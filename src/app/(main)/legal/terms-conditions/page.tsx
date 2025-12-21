"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
export default function TermsConditions() {
	const [activeSection, setActiveSection] = useState<string>("overview");

	const fadeIn = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.5 },
	};

	const sections: { id: string; title: string }[] = [
		{ id: "overview", title: "Overview" },
		{ id: "agreement-to-terms", title: "Agreement to Terms" },
		{ id: "intellectual-property", title: "Intellectual Property Rights" },
		{ id: "user-representations", title: "User Representations" },
		{ id: "user-registration", title: "User Registration" },
		{ id: "fees-payment", title: "Fees & Payment" },
		{ id: "subscription", title: "Subscription" },
		{ id: "refund-policy", title: "Refund Policy" },
		{ id: "prohibited-activities", title: "Prohibited Activities" },
		{ id: "license-to-use", title: "License to Use" },
		{ id: "user-generated-content", title: "User Generated Content" },
		{ id: "contribution-license", title: "Contribution License" },
		{ id: "social-media", title: "Social Media" },
		{ id: "submissions", title: "Submissions" },
		{ id: "advertisers", title: "Advertisers" },
		{ id: "site-management", title: "Site Management" },
		{ id: "privacy-policy", title: "Privacy Policy" },
		{ id: "personal-data-analysis", title: "Personal Data Analysis" },
		{ id: "term-termination", title: "Term and Termination" },
		{
			id: "modifications-interruptions",
			title: "Modifications and Interruptions",
		},
		{ id: "governing-law", title: "Governing Law" },
		{ id: "dispute-resolution", title: "Dispute Resolution" },
		{ id: "corrections", title: "Corrections" },
		{ id: "disclaimer", title: "Disclaimer" },
		{ id: "limitation-liability", title: "Limitation of Liability" },
		{ id: "indemnification", title: "Indemnification" },
		{ id: "user-data", title: "User Data" },
		{ id: "electronic-communications", title: "Electronic Communications" },
		{ id: "responsible-use", title: "Responsible Use and Conduct" },
		{ id: "account-terms", title: "Account Terms" },
		{ id: "affiliate-marketing", title: "Affiliate Marketing" },
		{ id: "limitations-warranties", title: "Limitations of Warranties" },
		{ id: "copyrights-trademarks", title: "Copyrights & Trademarks" },
		{ id: "spam-policy", title: "Spam Policy" },
		{ id: "third-party-links", title: "Third Party Links" },
		{ id: "feedback-reviews", title: "Feedback and Reviews" },
		{ id: "dmca-notice", title: "DMCA Notice" },
		{ id: "miscellaneous", title: "Miscellaneous" },
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
						<li className="text-neutral-900 font-medium">Terms & Conditions</li>
					</ol>
				</nav>

				{/* Header */}
				<motion.header
					{...fadeIn}
					className="mb-12 pb-8 border-b border-neutral-200"
				>
					<h1 className="text-4xl font-bold text-neutral-900 mb-3">
						Terms & Conditions
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
								Welcome to MelpApp – Your AI Digital Workspace
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								This website is owned and operated by MelpApp Inc., having its
								registered office at MelpApp Inc., 1600 Broadway, New York City,
								New York. By using our MelpApp services, you are agreeing to be
								bound by our terms and conditions.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								By visiting our website and accessing the information, services,
								and products we provide, you understand and agree to accept and
								adhere to the following terms and conditions as stated in this
								policy (hereafter referred to as 'User Agreement'), along with
								the terms and conditions as stated in our{" "}
								<Link href="/privacy" className="text-blue-600 hover:underline">
									Privacy Policy
								</Link>
								.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								We reserve the right to change this User Agreement from time to
								time without notice. You acknowledge and agree that it is your
								responsibility to review this User Agreement periodically to
								familiarize yourself with any modifications.
							</p>
						</section>

						{/* Agreement to Terms */}
						<section id="agreement-to-terms" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Agreement to Terms
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								These Terms of Use constitute a legally binding agreement made
								between you, whether personally or on behalf of an entity
								("User") and MelpApp Inc., doing business as MelpApp ("MelpApp",
								"we", "us", or "our"), concerning your access to and use of the
								https://www.melp.us/ website as well as any other media form,
								media channel, mobile website or mobile application related,
								linked, or otherwise connected thereto (collectively, the
								"Site").
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								We are registered in New Jersey and have our registered office
								at MelpApp Inc., 1600 Broadway, New York City, New York and
								corporate office at MelpApp Inc., 400 Alexander Park, Suite 103,
								Princeton, NJ 08540.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								<strong>
									If you do not agree with all of these Terms of Use, then you
									are expressly prohibited from using the Site and you must
									discontinue use immediately.
								</strong>
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								The information provided on the Site is not intended for
								distribution to or use by any person or entity in any
								jurisdiction or country where such distribution or use would be
								contrary to law or regulation.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								The Site is intended for users who are at least 18 years old.
								Persons under the age of 18 are not permitted to use or register
								for the Site.
							</p>
						</section>

						{/* Intellectual Property Rights */}
						<section id="intellectual-property" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Intellectual Property Rights
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Unless otherwise indicated, the Site is our proprietary property
								and all source code, databases, functionality, software, website
								designs, audio, video, text, photographs, and graphics on the
								Site (collectively, the "Content") and the trademarks, service
								marks, and logos contained therein (the "Marks") are owned or
								controlled by us or licensed to us, and are protected by
								copyright and trademark laws.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								Provided that you are eligible to use the Site, you are granted
								a limited license to access and use the Site and to download or
								print a copy of any portion of the Content to which you have
								properly gained access solely for your personal, non-commercial
								use. We reserve all rights not expressly granted to you in and
								to the Site, the Content and the Marks.
							</p>
						</section>

						{/* User Representations */}
						<section id="user-representations" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								User Representations
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								By using the Site, you represent and warrant that:
							</p>
							<ul className="list-disc pl-6 mb-4 space-y-2 text-neutral-700">
								<li>
									All registration information you submit will be true,
									accurate, current, and complete
								</li>
								<li>
									You will maintain the accuracy of such information and
									promptly update such registration information as necessary
								</li>
								<li>
									You have the legal capacity and you agree to comply with these
									Terms of Use
								</li>
								<li>
									You are not a minor in the jurisdiction in which you reside
								</li>
								<li>
									You will not access the Site through automated or non-human
									means, whether through a bot, script or otherwise
								</li>
								<li>
									You will not use the Site for any illegal or unauthorized
									purpose
								</li>
								<li>
									Your use of the Site will not violate any applicable law or
									regulation
								</li>
							</ul>
							<p className="text-neutral-700 leading-relaxed">
								If you provide any information that is untrue, inaccurate, not
								current, or incomplete, we have the right to suspend or
								terminate your account and refuse any and all current or future
								use of the Site.
							</p>
						</section>

						{/* User Registration */}
						<section id="user-registration" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								User Registration
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Users will be able to register on the platform by providing a
								valid email address and choosing a password. Users can also
								register and open an account through their Google and Microsoft
								account. You are responsible for maintaining the confidentiality
								of your password and account information, and are fully
								responsible for all activities that occur under your password or
								account.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Users can cancel their accounts at any time and for any reason
								through the user's account settings or by sending us their
								request through our contact information.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								MelpApp reserves the right to terminate your account or your
								access immediately, with or without notice, and without
								liability to you, if MelpApp believes that you have violated any
								of these terms, provided MelpApp with false or misleading
								information, or interfered with any other party's use of the
								platform or service.
							</p>
						</section>

						{/* Fees & Payment */}
						<section id="fees-payment" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Fees & Payment
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								We accept the following forms of payment:
							</p>
							<ul className="list-disc pl-6 mb-4 space-y-1 text-neutral-700">
								<li>
									Credit/debit card (Visa, Master, Discover, Amex, Diners, etc.)
								</li>
							</ul>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Payments will be processed through our payment processor Stripe.
								Payment of the subscription fee will be automatically charged to
								your credit/debit card on each corresponding billing date.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								If your card is declined, you will receive an error message. No
								payment will be charged to your card and no order will be
								processed. There may be a pending transaction on your account
								until your card issuing bank withdraws the authorization
								(usually 2 to 5 working days).
							</p>
							<p className="text-neutral-700 leading-relaxed">
								Before making any payment, kindly go through Stripe's terms of
								use and privacy policy at{" "}
								<a
									href="https://stripe.com/en-in/privacy"
									className="text-blue-600 hover:underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									https://stripe.com/privacy
								</a>
								.
							</p>
						</section>

						{/* Subscription */}
						<section id="subscription" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Subscription
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								MelpApp offers its services and use of the platform through
								subscriptions. Users will be able to access a free trial of our
								subscriptions before upgrading to a paid subscription. The user
								will be able to cancel the free period at any time before
								upgrading to a paid subscription.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Subscriptions will be billed monthly on each monthly billing
								date. Subscriptions include automatic recurring payments. You
								authorize MelpApp to renew your subscription and to charge you
								periodically and progressively on each billing date.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								To cancel subscriptions, users must submit a cancellation
								request through our contact information or can access in the
								account settings, in the billing section.
							</p>
						</section>

						{/* Refund Policy */}
						<section id="refund-policy" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								No Refund Policy and Non-Cancellation Policy
							</h2>
							<div className="bg-neutral-100 rounded-lg p-6">
								<p className="text-neutral-700 leading-relaxed mb-4">
									<strong>All purchases are non-refundable.</strong> You agree
									that all payments are non-cancellable for the initial
									subscription term or the then-current renewal term, as
									applicable, and are final and non-refundable, unless otherwise
									agreed to by us, required by law, or set forth in your order
									form.
								</p>
								<p className="text-neutral-700 leading-relaxed">
									If you are unsatisfied with our services, please email us at{" "}
									<a
										href="mailto:support@melp.us"
										className="text-blue-600 hover:underline"
									>
										support@melp.us
									</a>
								</p>
							</div>
						</section>

						{/* Prohibited Activities */}
						<section id="prohibited-activities" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Prohibited Activities
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								You may not access or use the Site for any purpose other than
								that for which we make the Site available. As a user of the
								Site, you agree not to:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-neutral-700">
								<li>
									Systematically retrieve data or other content from the Site to
									create or compile a collection, database, or directory without
									written permission
								</li>
								<li>
									Trick, defraud, or mislead us and other users, especially in
									any attempt to learn sensitive account information
								</li>
								<li>
									Circumvent, disable, or otherwise interfere with
									security-related features of the Site
								</li>
								<li>
									Disparage, tarnish, or otherwise harm, in our opinion, us
									and/or the Site
								</li>
								<li>
									Use any information obtained from the Site to harass, abuse,
									or harm another person
								</li>
								<li>
									Make improper use of our support services or submit false
									reports of abuse
								</li>
								<li>
									Use the Site in a manner inconsistent with any applicable laws
									or regulations
								</li>
								<li>
									Upload or transmit viruses, Trojan horses, or other harmful
									material
								</li>
								<li>
									Engage in any automated use of the system, such as using
									scripts or data mining tools
								</li>
								<li>
									Delete the copyright or other proprietary rights notice from
									any Content
								</li>
								<li>Attempt to impersonate another user or person</li>
								<li>
									Interfere with, disrupt, or create an undue burden on the Site
									or connected networks
								</li>
								<li>
									Copy or adapt the Site's software, including Flash, PHP, HTML,
									JavaScript, or other code
								</li>
								<li>
									Use the Site as part of any effort to compete with us or for
									any commercial enterprise
								</li>
							</ul>
						</section>

						{/* License to Use */}
						<section id="license-to-use" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								License to Use the Platform
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								MelpApp grants you a personal, worldwide, royalty-free,
								non-assignable and non-exclusive license to use the platform.
								This license is for the sole purpose of allowing you to use and
								enjoy the functionality available on the platform.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								You may not copy, modify, distribute, sell or lease any part of
								the platform or the software contained therein, nor may you
								reverse engineer or attempt to extract the source code of such
								software, unless such restrictions are prohibited by law, or you
								have our written permission.
							</p>
						</section>

						{/* User Generated Content */}
						<section id="user-generated-content" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								User Generated Content & Contributions
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								We may provide you with the opportunity to create, submit, post,
								display, transmit, perform, publish, distribute, or broadcast
								content and materials to us or on the Site (collectively,
								"Contributions"). When you create or make available any
								Contributions, you represent and warrant that:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-neutral-700">
								<li>
									Your Contributions do not infringe the proprietary rights of
									any third party
								</li>
								<li>
									You are the creator and owner of or have the necessary
									licenses and permissions
								</li>
								<li>
									You have written consent from identifiable individuals in your
									Contributions
								</li>
								<li>
									Your Contributions are not false, inaccurate, or misleading
								</li>
								<li>
									Your Contributions are not unsolicited advertising or spam
								</li>
								<li>
									Your Contributions are not obscene, lewd, violent, harassing,
									or otherwise objectionable
								</li>
								<li>
									Your Contributions do not violate any applicable law,
									regulation, or rule
								</li>
								<li>
									Your Contributions do not violate the privacy or publicity
									rights of any third party
								</li>
							</ul>
						</section>

						{/* Contribution License */}
						<section id="contribution-license" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Contribution License
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								You and the Site agree that we may access, store, process, and
								use any information and personal data that you provide following
								the terms of the{" "}
								<Link href="/privacy" className="text-blue-600 hover:underline">
									Privacy Policy
								</Link>{" "}
								and your choices.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								We do not assert any ownership over your Contributions. You
								retain full ownership of all of your Contributions and any
								intellectual property rights associated with your Contributions.
							</p>
						</section>

						{/* Social Media */}
						<section id="social-media" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Social Media
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								As part of the functionality of the Site, you may link your
								account with online accounts you have with third-party service
								providers (each such account, a "Third-Party Account"). By
								granting us access to any Third-Party Accounts, you understand
								that we may access, make available, and store any content that
								you have provided to and stored in your Third-Party Account.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								Please note that your relationship with the third-party service
								providers associated with your Third-Party Accounts is governed
								solely by your agreement(s) with such third-party service
								providers.
							</p>
						</section>

						{/* Submissions */}
						<section id="submissions" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Submissions
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								You acknowledge and agree that any questions, comments,
								suggestions, ideas, feedback, or other information regarding the
								Site ("Submissions") provided by you to us are non-confidential
								and shall become our sole property. We shall own exclusive
								rights, including all intellectual property rights, and shall be
								entitled to the unrestricted use and dissemination of these
								Submissions for any lawful purpose.
							</p>
						</section>

						{/* Advertisers */}
						<section id="advertisers" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Advertisers
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								We allow advertisers to display their advertisements and other
								information in certain areas of the Site. If you are an
								advertiser, you shall take full responsibility for any
								advertisements you place on the Site and any services provided
								on the Site or products sold through those advertisements. We
								simply provide the space to place such advertisements, and we
								have no other relationship with advertisers.
							</p>
						</section>

						{/* Site Management */}
						<section id="site-management" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Site Management
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								We reserve the right, but not the obligation, to: (1) Monitor
								the Site for violations of these Terms of Use; (2) Take
								appropriate legal action against anyone who violates the law or
								these Terms of Use; (3) Refuse, restrict access to, limit the
								availability of, or disable any of your Contributions; (4)
								Remove from the Site or otherwise disable all files and content
								that are excessive in size or burdensome to our systems; and (5)
								Otherwise manage the Site in a manner designed to protect our
								rights and property.
							</p>
						</section>

						{/* Privacy Policy */}
						<section id="privacy-policy" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Privacy Policy
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								We care about data privacy and security. By using the Site, you
								agree to be bound by our Privacy Policy posted on the Site.
								Please be advised the Site is hosted in India. If you access the
								Site from any other region of the world with laws governing
								personal data collection that differ from applicable laws in
								India, then through your continued use of the Site, you are
								transferring your data to India. You may access the Privacy
								Policy at{" "}
								<Link href="/privacy" className="text-blue-600 hover:underline">
									Privacy Policy
								</Link>
								.
							</p>
						</section>

						{/* Personal Data Analysis Agreement */}
						<section id="personal-data-analysis" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Personal Data Analysis Agreement
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								By signing in with MelpApp, you provide your free and voluntary
								consent to MelpApp for the below purposes:
							</p>
							<ul className="list-disc pl-6 mb-6 space-y-2 text-neutral-700">
								<li>
									MelpApp will process your personal data for the explicit
									purpose of creating and maintaining your account on our
									platform
								</li>
								<li>
									The processing of your personal data is based on your explicit
									consent provided during account creation
								</li>
								<li>
									We may share your personal data with carefully selected
									third-party service providers solely when necessary
								</li>
								<li>
									Your personal data may be transferred to locations outside the
									European Economic Area (EEA) with appropriate safeguards
								</li>
								<li>
									Your personal data will be retained as long as your account
									remains active
								</li>
							</ul>
							<p className="text-neutral-700 leading-relaxed mb-4">
								In accordance with applicable data protection laws, you have the
								right to:
							</p>
							<ul className="list-disc pl-6 space-y-1 text-neutral-700">
								<li>Access the personal data we hold about you</li>
								<li>Rectify any inaccuracies in your personal data</li>
								<li>Erase your personal data under certain conditions</li>
								<li>
									Restrict or object to the processing of your personal data
								</li>
								<li>Receive your personal data in a portable format</li>
								<li>
									Lodge a complaint with the relevant data protection authority
								</li>
							</ul>
						</section>

						{/* Term and Termination */}
						<section id="term-termination" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Term and Termination
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								These Terms of Use shall remain in full force and effect while
								you use the Site. We reserve the right to deny access to and use
								of the Site to any person for any reason or for no reason,
								including for breach of any representation, warranty, or
								covenant contained in these Terms of Use.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								If we terminate or suspend your account for any reason, you are
								prohibited from registering and creating a new account under
								your name, a fake or borrowed name, or the name of any third
								party.
							</p>
						</section>

						{/* Modifications and Interruptions */}
						<section id="modifications-interruptions" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Modifications and Interruptions
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								We reserve the right to change, modify, or remove the contents
								of the Site at any time or for any reason at our sole discretion
								without notice. We also reserve the right to modify or
								discontinue all or part of the Site without notice at any time.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								We cannot guarantee the Site will be available at all times. We
								may experience hardware, software, or other problems or need to
								perform maintenance related to the Site, resulting in
								interruptions, delays, or errors.
							</p>
						</section>

						{/* Governing Law */}
						<section id="governing-law" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Governing Law
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								These Terms shall be governed by and defined following the laws
								of the United States. MelpApp Inc. and yourself irrevocably
								consent that the courts of United States at New Jersey shall
								have exclusive jurisdiction to resolve any dispute which may
								arise in connection with these Terms.
							</p>
						</section>

						{/* Dispute Resolution */}
						<section id="dispute-resolution" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Dispute Resolution
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								The user agrees that any dispute, claim or controversy arising
								out of or relating to these Terms and Conditions shall be
								resolved by binding arbitration between the user and MelpApp,
								provided that each party retains the right to bring an
								individual action in a court of competent jurisdiction.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								You agree to initiate a formal dispute proceeding by sending us
								a communication through our contact information. If we are
								unable to resolve your dispute satisfactorily, you must initiate
								the dispute resolution process before an accredited arbitration
								organization.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								To the fullest extent permitted by law, you agree that you will
								not file, join or participate in any class action lawsuit in
								connection with any claim, dispute or controversy that may arise
								in connection with your use of the platform.
							</p>
						</section>

						{/* Corrections */}
						<section id="corrections" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Corrections
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								There may be information on the Site that contains typographical
								errors, inaccuracies, or omissions. We reserve the right to
								correct any errors, inaccuracies, or omissions and to change or
								update the information on the Site at any time, without prior
								notice.
							</p>
						</section>

						{/* Disclaimer */}
						<section id="disclaimer" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Disclaimer
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								The Site is provided on an AS-IS and AS-AVAILABLE basis. You
								agree that your use of the Site and our services will be at your
								sole risk. To the fullest extent permitted by law, we disclaim
								all warranties, express or implied, in connection with the Site
								and your use thereof, including the implied warranties of
								merchantability, fitness for a particular purpose, and
								non-infringement.
							</p>
						</section>

						{/* Limitation of Liability */}
						<section id="limitation-liability" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Limitation of Liability
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								In no event will we or our directors, employees, or agents be
								liable to you or any third party for any direct, indirect,
								consequential, exemplary, incidental, special, or punitive
								damages, including lost profit, lost revenue, loss of data, or
								other damages arising from your use of the Site, even if we have
								been advised of the possibility of such damages. Our liability
								to you for any cause whatsoever will at all times be limited to
								the amount paid, if any, by you to us during the six (6) month
								period prior to any cause of action arising.
							</p>
						</section>

						{/* Indemnification */}
						<section id="indemnification" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Indemnification
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								You agree to defend, indemnify, and hold us harmless, including
								our subsidiaries, affiliates, and all of our respective
								officers, agents, partners, and employees, from and against any
								loss, damage, liability, claim, or demand, including reasonable
								attorneys' fees and expenses, made by any third party due to or
								arising out of: (1) Use of the Site; (2) Breach of these Terms
								of Use; (3) Any breach of your representations and warranties;
								(4) Your violation of the rights of a third party; or (5) Any
								overt harmful act toward any other user of the Site.
							</p>
						</section>

						{/* User Data */}
						<section id="user-data" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								User Data
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								We will maintain certain data that you transmit to the Site for
								the purpose of managing the performance of the Site, as well as
								data relating to your use of the Site. Although we perform
								regular routine backups of data, you are solely responsible for
								all data that you transmit or that relates to any activity you
								have undertaken using the Site.
							</p>
						</section>

						{/* Electronic Communications */}
						<section id="electronic-communications" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Electronic Communications, Transactions, and Signatures
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								Visiting the Site, sending us emails, and completing online
								forms constitute electronic communications. You consent to
								receive electronic communications, and you agree that all
								agreements, notices, disclosures, and other communications we
								provide to you electronically satisfy any legal requirement that
								such communication be in writing.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								You hereby agree to the use of electronic signatures, contracts,
								orders, and other records, and to electronic delivery of
								notices, policies, and records of transactions initiated or
								completed by us or via the Site.
							</p>
						</section>

						{/* Responsible Use and Conduct */}
						<section id="responsible-use" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Responsible Use and Conduct
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								In order to access our services, you may be required to provide
								certain information about yourself as part of the registration
								process. You agree that any information you provide will always
								be accurate, correct, and up to date.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								You are responsible for maintaining the confidentiality of any
								login information associated with any account you use to access
								our services.
							</p>
							<p className="text-neutral-700 leading-relaxed mb-4">
								By using our communication tools, you agree that you will not
								upload, post, share, or otherwise distribute any content that:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-neutral-700">
								<li>
									Is illegal, threatening, defamatory, abusive, harassing,
									degrading, intimidating, fraudulent, deceptive, invasive,
									racist, or contains inappropriate language
								</li>
								<li>
									Infringes on any trademark, patent, trade secret, copyright,
									or other proprietary right
								</li>
								<li>
									Contains any type of unauthorized or unsolicited advertising
								</li>
								<li>
									Impersonates any person or entity, including any MelpApp
									employees or representatives
								</li>
							</ul>
						</section>

						{/* Account Terms */}
						<section id="account-terms" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Account Terms
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								To access and use the services, you must register for a MelpApp
								account. To complete your account registration, you must provide
								us with your full legal name, business address, phone number, a
								valid email address, and any other information indicated as
								required.
							</p>
							<div className="bg-neutral-100 rounded-lg p-4 mb-4">
								<p className="text-neutral-700">
									<strong>Age Restrictions:</strong> You must be the older of:
									(i) 16 years, or (ii) at least the age of majority in the
									jurisdiction where you reside and from which you use the
									services.
								</p>
							</div>
							<p className="text-neutral-700 leading-relaxed">
								You are responsible for keeping your password secure. MelpApp
								cannot and will not be liable for any loss or damage from your
								failure to maintain the security of your account and password.
							</p>
						</section>

						{/* Affiliate Marketing */}
						<section id="affiliate-marketing" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Affiliate Marketing and Advertising
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								The owner of the company, through the app and its services, may
								engage in affiliate marketing whereby the owner receives a
								commission on or percentage of the sale of services on or
								through the app. The owner may also accept advertising and
								sponsorship from commercial businesses or receive other forms of
								advertising compensation.
							</p>
						</section>

						{/* Limitations of Warranties */}
						<section id="limitations-warranties" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Limitations of Warranties
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								By using our MelpApp, you understand and agree that all services
								we provide are "as is" and "as available". This means that we do
								not represent or warrant to you that:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-neutral-700">
								<li>
									Your use of services will be uninterrupted or error-free
								</li>
								<li>
									MelpApp will review information and services for accuracy or
									preserve them without loss
								</li>
								<li>
									MelpApp shall not be liable for delays, interruptions, or
									service failures inherent in internet use
								</li>
							</ul>
						</section>

						{/* Copyrights & Trademarks */}
						<section id="copyrights-trademarks" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Copyrights & Trademarks
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								All content and materials available on MelpApp, including but
								not limited to text, graphics, app name, code, images and logos
								are the intellectual property of MelpApp Inc., and are protected
								by applicable copyright and trademark law.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								You must not use any part of the materials on the app platform
								for commercial purposes without obtaining a license to do so
								from us or our licensors.
							</p>
						</section>

						{/* Spam Policy */}
						<section id="spam-policy" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Spam Policy
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								You are strictly prohibited from using the app or any of the
								owner's services for illegal spam activities, including
								gathering email addresses and personal information from others
								or sending any mass commercial emails.
							</p>
						</section>

						{/* Third Party Links */}
						<section id="third-party-links" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Third Party Links & Content
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								The company may occasionally post links to third-party websites
								or other services. You agree that the company is not responsible
								or liable for any loss or damage caused as a result of your use
								of any third-party services linked to from our app MelpApp.
							</p>
						</section>

						{/* Feedback and Reviews */}
						<section id="feedback-reviews" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Feedback and Reviews
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								MelpApp Inc. welcomes any ideas and/or suggestions regarding
								improvements or additions to the services. By submitting
								feedback to MelpApp, you waive any and all rights in the
								feedback and MelpApp is free to implement and use the feedback
								as provided by you or as modified by MelpApp.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								Any reviews of services that you submit must be accurate to the
								best of your knowledge, and must not be illegal, obscene,
								threatening, defamatory, invasive of privacy, infringing of
								intellectual property rights, or otherwise objectionable.
							</p>
						</section>

						{/* DMCA Notice */}
						<section id="dmca-notice" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								DMCA Notice and Takedown Procedure
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-4">
								MelpApp supports the protection of intellectual property and
								asks MelpApp merchants to do the same. It's our policy to
								respond to all notices of alleged copyright infringement.
							</p>
							<p className="text-neutral-700 leading-relaxed">
								If someone believes that one of our merchants is infringing
								their intellectual property rights, they can send a DMCA notice
								to MelpApp's designated agent. Upon receiving a DMCA notice, we
								may remove or disable access to the materials claimed to be a
								copyright infringement.
							</p>
						</section>

						{/* Miscellaneous */}
						<section id="miscellaneous" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Miscellaneous
							</h2>
							<p className="text-neutral-700 leading-relaxed">
								These Terms of Use and any policies or operating rules posted by
								us on the Site constitute the entire agreement and understanding
								between you and us. Our failure to exercise or enforce any right
								or provision of these Terms of Use shall not operate as a waiver
								of such right or provision. We may assign any or all of our
								rights and obligations to others at any time. If any provision
								of these Terms of Use is determined to be unlawful, void, or
								unenforceable, that provision is deemed severable and does not
								affect the validity of any remaining provisions.
							</p>
						</section>

						{/* Contact Us */}
						<section id="contact-us" className="mb-12">
							<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
								Contact Us
							</h2>
							<p className="text-neutral-700 leading-relaxed mb-6">
								If you have any questions about these Terms & Conditions, you
								can contact us:
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
			</div>
		</div>
	);
}
