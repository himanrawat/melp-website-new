import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen bg-background flex flex-col">
			<Header />
			<div className="flex-1">{children}</div>
			<Footer />
		</div>
	);
}
