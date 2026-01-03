"use client";

import { useEffect, useRef } from "react";

type GoogleIDCredential = { credential?: string; select_by?: string };
type GoogleOneTap = {
	initialize: (options: {
		client_id: string;
		callback: (response: GoogleIDCredential) => void;
		cancel_on_tap_outside?: boolean;
	}) => void;
	prompt: (notification?: (promptResult: unknown) => void) => void;
};

declare global {
	interface Window {
		google?: { accounts?: { id?: GoogleOneTap } };
	}
}

export default function LoginPage() {
	const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
	const initializedRef = useRef(false);

	// Load GIS script once on this page
	useEffect(() => {
		if (!clientId) {
			console.warn("Missing NEXT_PUBLIC_GOOGLE_CLIENT_ID.");
			return;
		}
		const existingScript = document.getElementById("google-identity-services");
		if (existingScript) {
			return;
		}
		const script = document.createElement("script");
		script.id = "google-identity-services";
		script.src = "https://accounts.google.com/gsi/client";
		script.async = true;
		script.defer = true;
		document.head.appendChild(script);
	}, [clientId]);

	// Initialize One Tap and prompt automatically when ready
	useEffect(() => {
		if (!clientId) return;

		const interval = setInterval(() => {
			const google = window.google;
			if (!google?.accounts?.id || initializedRef.current) return;
			google.accounts.id.initialize({
				client_id: clientId,
				callback: (response) => {
					console.log("Google One Tap credential:", response);
				},
				cancel_on_tap_outside: false,
			});
			google.accounts.id.prompt();
			initializedRef.current = true;
		}, 200);

		return () => clearInterval(interval);
	}, [clientId]);

	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="max-w-md w-full text-center space-y-4">
				<h1 className="text-2xl font-semibold">Sign in</h1>
				<p className="text-muted-foreground">
					Google One Tap will appear automatically. If you don&apos;t see it,
					check that third-party cookies are allowed and this origin is added
					to your Google OAuth client.
				</p>
			</div>
		</div>
	);
}
