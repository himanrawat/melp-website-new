"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const DARK_THEME_ROUTES = ["/product/ai"];

export default function MainLayout({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const isDarkRoute = DARK_THEME_ROUTES.some((route) =>
		pathname?.startsWith(route)
	);

	return (
		<div
			className={`min-h-screen flex flex-col ${
				isDarkRoute ? "bg-black" : "bg-background"
			}`}
		>
			<Header />
			<div className="flex-1">{children}</div>
			<Footer />
		</div>
	);
}
