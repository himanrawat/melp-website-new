"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X, ChevronDown } from "lucide-react";
import Link from "next/link";

type CookiePreferences = {
	necessary: boolean;
	analytics: boolean;
	marketing: boolean;
};

export default function CookieConsent() {
	const [isVisible, setIsVisible] = useState(false);
	const [showSettings, setShowSettings] = useState(false);
	const [preferences, setPreferences] = useState<CookiePreferences>({
		necessary: true,
		analytics: false,
		marketing: false,
	});

	useEffect(() => {
		const consent = localStorage.getItem("melp-cookie-consent");
		if (!consent) {
			const timer = setTimeout(() => setIsVisible(true), 1500);
			return () => clearTimeout(timer);
		}
	}, []);

	const saveAndClose = (prefs: CookiePreferences) => {
		localStorage.setItem("melp-cookie-consent", JSON.stringify(prefs));
		localStorage.setItem("melp-cookie-consent-date", new Date().toISOString());
		setIsVisible(false);
	};

	const handleAccept = () => {
		saveAndClose({ necessary: true, analytics: true, marketing: true });
	};

	const handleDecline = () => {
		saveAndClose({ necessary: true, analytics: false, marketing: false });
	};

	const handleSave = () => {
		saveAndClose(preferences);
	};

	const togglePreference = (key: keyof CookiePreferences) => {
		if (key === "necessary") return;
		setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ y: 20, opacity: 0, scale: 0.95 }}
					animate={{ y: 0, opacity: 1, scale: 1 }}
					exit={{ y: 20, opacity: 0, scale: 0.95 }}
					transition={{ type: "spring", damping: 25, stiffness: 300 }}
					className="fixed bottom-4 right-4 z-[9999] w-[340px] max-w-[calc(100vw-2rem)]"
				>
					<div className="relative rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden">
						{/* Close button */}
						<button
							onClick={handleDecline}
							className="absolute top-2 right-2 p-1 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground z-10"
							aria-label="Close"
						>
							<X className="w-4 h-4" />
						</button>

						<div className="p-4">
							{/* Header */}
							<div className="flex items-center gap-2 mb-2">
								<Cookie className="w-4 h-4 text-primary" />
								<span className="text-sm font-semibold text-foreground">
									Cookie Notice
								</span>
							</div>

							{/* Message */}
							<p className="text-xs text-muted-foreground leading-relaxed mb-3">
								We use cookies to improve your experience.{" "}
								<Link
									href="/legal/cookies"
									className="text-primary hover:underline"
								>
									Learn more
								</Link>
							</p>

							{/* Settings panel */}
							<AnimatePresence>
								{showSettings && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.2 }}
										className="overflow-hidden"
									>
										<div className="space-y-2 mb-3 pt-2 border-t border-border">
											{/* Necessary */}
											<div className="flex items-center justify-between py-1.5">
												<div>
													<span className="text-xs font-medium text-foreground">
														Necessary
													</span>
													<span className="ml-1.5 text-[10px] px-1 py-0.5 rounded bg-muted text-muted-foreground">
														Required
													</span>
												</div>
												<div className="w-8 h-5 rounded-full bg-primary flex items-center justify-end px-0.5">
													<div className="w-4 h-4 rounded-full bg-white" />
												</div>
											</div>

											{/* Analytics */}
											<button
												onClick={() => togglePreference("analytics")}
												className="w-full flex items-center justify-between py-1.5"
											>
												<span className="text-xs font-medium text-foreground">
													Analytics
												</span>
												<div
													className={`w-8 h-5 rounded-full flex items-center px-0.5 transition-colors ${
														preferences.analytics
															? "bg-primary justify-end"
															: "bg-muted-foreground/30 justify-start"
													}`}
												>
													<div className="w-4 h-4 rounded-full bg-white" />
												</div>
											</button>

											{/* Marketing */}
											<button
												onClick={() => togglePreference("marketing")}
												className="w-full flex items-center justify-between py-1.5"
											>
												<span className="text-xs font-medium text-foreground">
													Marketing
												</span>
												<div
													className={`w-8 h-5 rounded-full flex items-center px-0.5 transition-colors ${
														preferences.marketing
															? "bg-primary justify-end"
															: "bg-muted-foreground/30 justify-start"
													}`}
												>
													<div className="w-4 h-4 rounded-full bg-white" />
												</div>
											</button>
										</div>
									</motion.div>
								)}
							</AnimatePresence>

							{/* Buttons */}
							<div className="flex gap-2">
								{showSettings ? (
									<>
										<button
											onClick={handleSave}
											className="flex-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-medium transition-colors"
										>
											Save
										</button>
										<button
											onClick={() => setShowSettings(false)}
											className="flex-1 px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/80 border border-border text-foreground text-xs font-medium transition-colors"
										>
											Cancel
										</button>
									</>
								) : (
									<>
										<button
											onClick={handleAccept}
											className="flex-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-medium transition-colors"
										>
											Accept
										</button>
										<button
											onClick={handleDecline}
											className="flex-1 px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/80 border border-border text-foreground text-xs font-medium transition-colors"
										>
											Decline
										</button>
										<button
											onClick={() => setShowSettings(true)}
											className="px-2 py-1.5 rounded-lg hover:bg-muted border border-border text-muted-foreground hover:text-foreground text-xs transition-colors"
											aria-label="Customize"
										>
											<ChevronDown className="w-4 h-4" />
										</button>
									</>
								)}
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
