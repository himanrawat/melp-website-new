import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STATUS_URL = "https://status.melp.us/";

export const metadata: Metadata = {
	title: "System Status | Melp",
	description:
		"Live uptime, maintenance updates, and incident history for Melp services.",
};

export default function StatusPage() {
	return (
		<div className="min-h-screen bg-background">
			<section className="relative overflow-hidden border-b border-border/60 bg-muted/30">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12)_0%,transparent_55%)]" />
				<div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
					<div className="max-w-2xl space-y-4">
						<p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
							System status
						</p>
						<h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
							Melp health and service status
						</h1>
						<p className="text-base text-muted-foreground sm:text-lg">
							Track uptime, incident reports, and maintenance activity across
							Melp services in real time.
						</p>
					</div>
					<div className="flex flex-wrap gap-3">
						<Button variant="brand-primary" size="lg" asChild>
							<a
								href={STATUS_URL}
								target="_blank"
								rel="noreferrer noopener"
							>
								Open status dashboard
							</a>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link href="/resources/help">Visit help center</Link>
						</Button>
					</div>
					<p className="text-xs text-muted-foreground">
						Status opens in a new tab and stays updated automatically.
					</p>
				</div>
			</section>

			<section className="py-10 sm:py-14">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
					<div className="flex flex-wrap items-center justify-between gap-4">
						<div className="space-y-1">
							<h2 className="text-lg font-semibold text-foreground">
								Live dashboard
							</h2>
							<p className="text-sm text-muted-foreground">
								Monitor outages, performance, and upcoming maintenance windows.
							</p>
						</div>
						<a
							href={STATUS_URL}
							target="_blank"
							rel="noreferrer noopener"
							className="text-sm font-medium text-primary hover:text-primary/80"
						>
							Open in new tab
						</a>
					</div>
					<div className="mt-6 overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm">
						<iframe
							title="Melp status dashboard"
							src={STATUS_URL}
							className="h-[75vh] w-full border-0"
							loading="lazy"
						/>
					</div>
					<p className="mt-4 text-sm text-muted-foreground">
						If the embedded dashboard does not load, use the link above.
					</p>
				</div>
			</section>
		</div>
	);
}
