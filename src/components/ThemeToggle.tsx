"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
	const { theme, setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<div className="w-9 h-9 rounded-lg bg-muted/50 border border-border" />
		);
	}

	const isDark = resolvedTheme === "dark";

	return (
		<motion.button
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="relative w-9 h-9 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:bg-muted hover:border-primary/50 transition-all"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
		>
			<AnimatePresence mode="wait" initial={false}>
				{isDark ? (
					<motion.svg
						key="sun"
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="text-foreground"
						initial={{ opacity: 0, rotate: -90, scale: 0 }}
						animate={{ opacity: 1, rotate: 0, scale: 1 }}
						exit={{ opacity: 0, rotate: 90, scale: 0 }}
						transition={{ duration: 0.2 }}
					>
						<circle cx="12" cy="12" r="4" />
						<path d="M12 2v2" />
						<path d="M12 20v2" />
						<path d="m4.93 4.93 1.41 1.41" />
						<path d="m17.66 17.66 1.41 1.41" />
						<path d="M2 12h2" />
						<path d="M20 12h2" />
						<path d="m6.34 17.66-1.41 1.41" />
						<path d="m19.07 4.93-1.41 1.41" />
					</motion.svg>
				) : (
					<motion.svg
						key="moon"
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="text-foreground"
						initial={{ opacity: 0, rotate: 90, scale: 0 }}
						animate={{ opacity: 1, rotate: 0, scale: 1 }}
						exit={{ opacity: 0, rotate: -90, scale: 0 }}
						transition={{ duration: 0.2 }}
					>
						<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
					</motion.svg>
				)}
			</AnimatePresence>
		</motion.button>
	);
}
