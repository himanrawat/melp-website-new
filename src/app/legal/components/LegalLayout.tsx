import Link from "next/link";
import type { ReactNode } from "react";

export interface LegalSection {
	id: string;
	title: string;
	description?: string;
	bullets?: string[];
	content?: ReactNode;
}

interface SummaryItem {
	title: string;
	description: string;
}

interface LegalLayoutProps {
	readonly title: string;
	readonly subtitle: string;
	readonly lastUpdated: string;
	readonly summary?: SummaryItem[];
	readonly sections: LegalSection[];
	readonly contactEmail?: string;
}

export default function LegalLayout({
	title,
	subtitle,
	lastUpdated,
	summary = [],
	sections,
	contactEmail = "legal@melp.com",
}: LegalLayoutProps) {
	return (
		<main className="bg-background">
			<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
				<section className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/30 p-8 sm:p-10">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,80,255,0.08),transparent_35%)]" />
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.07),transparent_32%)]" />

					<div className="relative">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-2">
							Melp Legal
						</p>
						<h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
							{title}
						</h1>
						<p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">
							{subtitle}
						</p>
						<div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
							<span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-3 py-1 border border-border/60">
								<span className="h-2 w-2 rounded-full bg-primary/80" />
								Last updated {lastUpdated}
							</span>
							<span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
								We keep this document current
							</span>
						</div>
					</div>

					{summary.length > 0 && (
						<div className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{summary.map((item) => (
								<div
									key={item.title}
									className="rounded-2xl border border-border/60 bg-background/70 p-4 shadow-sm"
								>
									<p className="text-sm font-semibold text-foreground">
										{item.title}
									</p>
									<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
										{item.description}
									</p>
								</div>
							))}
						</div>
					)}
				</section>

				<div className="grid gap-8 lg:grid-cols-[280px,1fr]">
					<aside className="space-y-6">
						<div className="sticky top-28 rounded-2xl border border-border/60 bg-muted/30 p-4">
							<h3 className="text-sm font-semibold text-foreground">
								In this document
							</h3>
							<div className="mt-3 space-y-2">
								{sections.map((section) => (
									<Link
										key={section.id}
										href={`#${section.id}`}
										className="group flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
									>
										<span className="h-1.5 w-1.5 rounded-full bg-primary/70 transition-all group-hover:w-2.5" />
										<span>{section.title}</span>
									</Link>
								))}
							</div>
						</div>
						<div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
							<h3 className="text-sm font-semibold text-foreground">
								Need to talk to us?
							</h3>
							<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
								Our legal and compliance teams respond quickly to requests.
								Email{" "}
								<a
									className="text-primary hover:text-primary/80 font-medium"
									href={`mailto:${contactEmail}`}
								>
									{contactEmail}
								</a>{" "}
								or reach out via your account manager.
							</p>
						</div>
					</aside>

					<div className="space-y-8">
						{sections.map((section) => (
							<article
								key={section.id}
								id={section.id}
								className="scroll-mt-28 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm"
							>
								<div className="flex items-start justify-between gap-3">
									<div>
										<h2 className="text-xl font-semibold text-foreground">
											{section.title}
										</h2>
										{section.description && (
											<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
												{section.description}
											</p>
										)}
									</div>
									<Link
										href={`#${section.id}`}
										className="text-xs text-muted-foreground hover:text-primary transition-colors"
									>
										#
									</Link>
								</div>

								{section.content && (
									<div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
										{section.content}
									</div>
								)}

								{section.bullets && (
									<ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
										{section.bullets.map((bullet, bulletIndex) => (
											<li
												key={`${section.id}-${bulletIndex}`}
												className="flex gap-2"
											>
												<span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
												<span>{bullet}</span>
											</li>
										))}
									</ul>
								)}
							</article>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
