"use client";

import { CBC, pkcs7Pad } from "aes-js";
import { API_ENDPOINTS, API_TIMEOUT_MS, logApi } from "./api";

const SESSION_STORAGE_KEY = "tempsessionId";
const DEVICE_COOKIE_KEY = "melpdeviceid";
const DEVICE_COOKIE_MAX_AGE_SECONDS = 360 * 24 * 60 * 60; // 360 days
const DEVICE_TYPE = "2";
const SESSION_DEVICE = "2";
const encoder = new TextEncoder();

let inFlightSession: Promise<string> | null = null;

function getCookie(name: string): string | null {
	if (typeof document === "undefined") return null;
	const value = document.cookie
		.split(";")
		.map((c) => c.trim())
		.find((c) => c.startsWith(`${name}=`));
	return value ? decodeURIComponent(value.split("=")[1]) : null;
}

function setCookie(name: string, value: string, maxAgeSeconds: number) {
	if (typeof document === "undefined") return;
	document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax`;
}

function getOrCreateDeviceId(): string {
	const existing = getCookie(DEVICE_COOKIE_KEY);
	if (existing) return existing.replace(/["']/g, "");

	const random = Math.floor(100000 + Math.random() * 900000);
	const generated = `${random}${Date.now()}`.replace(/["']/g, "");
	setCookie(DEVICE_COOKIE_KEY, generated, DEVICE_COOKIE_MAX_AGE_SECONDS);
	return generated;
}

function bytesToBigIntString(bytes: Uint8Array): string {
	let hex = "";
	bytes.forEach((b) => {
		hex += b.toString(16).padStart(2, "0");
	});
	// Convert to BigInt decimal to match legacy expectations
	return BigInt(`0x${hex}`).toString(10);
}

function bigIntStringToBytes(value: string): Uint8Array {
	const bn = BigInt(value);
	let hex = bn.toString(16);
	if (hex.length % 2 === 1) {
		hex = `0${hex}`;
	}

	// Ensure 32-byte length for P-256 coordinates
	while (hex.length < 64) {
		hex = `00${hex}`;
	}

	const bytes = new Uint8Array(hex.length / 2);
	for (let i = 0; i < hex.length; i += 2) {
		bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
	}
	return bytes;
}

function hexToBytes(hex: string): Uint8Array {
	const clean = hex.startsWith("0x") ? hex.slice(2) : hex;
	if (clean.length % 2 !== 0) {
		throw new Error("Invalid hex string");
	}
	const bytes = new Uint8Array(clean.length / 2);
	for (let i = 0; i < clean.length; i += 2) {
		bytes[i / 2] = parseInt(clean.slice(i, i + 2), 16);
	}
	return bytes;
}

async function generateClientKeyPair() {
	const keyPair = await crypto.subtle.generateKey(
		{ name: "ECDH", namedCurve: "P-256" },
		true,
		["deriveBits"]
	);

	const raw = new Uint8Array(await crypto.subtle.exportKey("raw", keyPair.publicKey));
	if (raw[0] !== 0x04) throw new Error("Unexpected public key format");

	const x = raw.slice(1, 33);
	const y = raw.slice(33);

	return {
		xDec: bytesToBigIntString(x),
		yDec: bytesToBigIntString(y),
		privateKey: keyPair.privateKey,
	};
}

async function deriveSharedSecret(privateKey: CryptoKey, serverXDec: string, serverYDec: string): Promise<{ sharedHex: string; hashedHex: string } | null> {
	try {
		const xBytes = bigIntStringToBytes(serverXDec);
		const yBytes = bigIntStringToBytes(serverYDec);
		const raw = new Uint8Array(1 + xBytes.length + yBytes.length);
		raw[0] = 0x04;
		raw.set(xBytes, 1);
		raw.set(yBytes, 1 + xBytes.length);

		const serverPublicKey = await crypto.subtle.importKey(
			"raw",
			raw,
			{ name: "ECDH", namedCurve: "P-256" },
			false,
			[]
		);

		const sharedBits = await crypto.subtle.deriveBits(
			{ name: "ECDH", public: serverPublicKey },
			privateKey,
			256
		);
		const sharedArray = new Uint8Array(sharedBits);
		const sharedHex = Array.from(sharedArray, (b) => b.toString(16).padStart(2, "0")).join("");

		const hashBuffer = await crypto.subtle.digest("SHA-256", sharedArray);
		const hashHex = Array.from(new Uint8Array(hashBuffer), (b) => b.toString(16).padStart(2, "0")).join("");

		return { sharedHex, hashedHex: hashHex };
	} catch (error) {
		logApi("session derive key failed", error);
		return null;
	}
}

async function requestServerSession(email?: string): Promise<string> {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

	try {
		const deviceId = getOrCreateDeviceId();
		const existingSession = window.localStorage.getItem(SESSION_STORAGE_KEY) || "";
		const normalizedEmail = (email || "").trim();

		// Avoid hitting the backend with an empty email when no session exists yet
		if (!normalizedEmail && !existingSession) {
			return "";
		}

		const { xDec, yDec, privateKey } = await generateClientKeyPair();

		const body = new URLSearchParams({
			deviceid: deviceId,
			device: SESSION_DEVICE,
			client_x: xDec,
			client_y: yDec,
			sessionid: existingSession,
			devicetype: DEVICE_TYPE,
		});
		if (normalizedEmail) {
			body.append("email", normalizedEmail);
		}

		const response = await fetch(API_ENDPOINTS.getSession, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body,
			cache: "no-store",
			signal: controller.signal,
		});

		let payload: any = null;
		try {
			payload = await response.json();
		} catch {
			// Ignore parse errors; handled below
		}

		logApi("session request response", { ok: response.ok, payload });

		const statusOk = response.ok && payload?.status === "SUCCESS";
		const sessionId =
			typeof payload?.sessionid === "string"
				? payload.sessionid
				: typeof payload?.sessionId === "string"
					? payload.sessionId
					: "";

		if (!statusOk || !sessionId) {
			throw new Error("Session request failed");
		}

		window.localStorage.setItem(SESSION_STORAGE_KEY, sessionId);

		const serverX = payload.server_x || payload.serverX;
		const serverY = payload.server_y || payload.serverY;
		if (serverX && serverY) {
			window.localStorage.setItem("tempSX", serverX);
			window.localStorage.setItem("tempSY", serverY);

			const shared = await deriveSharedSecret(privateKey, serverX, serverY);
			if (shared) {
				window.localStorage.setItem("tempK", shared.sharedHex);
				window.localStorage.setItem("tempHKey", shared.hashedHex);
			}
		}

		return sessionId;
	} finally {
		clearTimeout(timer);
	}
}

export async function ensureSessionId(email?: string): Promise<string> {
	if (typeof window === "undefined") return "";

	try {
		const cached = window.localStorage.getItem(SESSION_STORAGE_KEY);
		if (cached && cached.trim()) return cached.trim();
	} catch (error) {
		logApi("session cache read failed", error);
	}

	if (!inFlightSession) {
		inFlightSession = requestServerSession(email).catch((error) => {
			logApi("session fetch failed", error);
			return "";
		});
	}

	const sessionId = await inFlightSession;
	inFlightSession = null;

	if (sessionId && sessionId.trim()) return sessionId.trim();

	// Fallback to an ephemeral ID only if the server session could not be obtained
	const fallback =
		typeof crypto !== "undefined" && crypto.randomUUID
			? crypto.randomUUID()
			: Date.now().toString();

	try {
		window.localStorage.setItem(SESSION_STORAGE_KEY, fallback);
	} catch (error) {
		logApi("session fallback cache write failed", error);
	}

	logApi("session fallback generated", { fallback });
	return fallback;
}

export async function ensureSessionContext(email?: string): Promise<{
	sessionId: string;
	keyHex: string;
	keyBytes: Uint8Array;
}> {
	const sessionId = await ensureSessionId(email);
	const keyHex = (typeof window !== "undefined" && window.localStorage.getItem("tempHKey")) || "";

	if (!sessionId || !keyHex) {
		throw new Error("Session or session key unavailable");
	}

	let keyBytes: Uint8Array;
	try {
		keyBytes = hexToBytes(keyHex);
	} catch (error) {
		logApi("session key parse failed", error);
		throw new Error("Session key invalid");
	}

	return { sessionId, keyHex, keyBytes };
}

export function encryptWithSessionKey(plaintext: string, keyBytes: Uint8Array): string {
	const iv = keyBytes.slice(0, 16);
	const aesCbc = new CBC(keyBytes, iv);
	const padded = pkcs7Pad(encoder.encode(plaintext));
	const ciphertext = aesCbc.encrypt(padded);

	let binary = "";
	ciphertext.forEach((b) => {
		binary += String.fromCharCode(b);
	});
	return btoa(binary);
}
