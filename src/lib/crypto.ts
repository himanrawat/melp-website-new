"use client";

import { CBC, pkcs7Pad, pkcs7Strip } from "aes-js";

const SESSION_ID_LENGTH = 12;
const IV_LENGTH = 16;
const encoder = new TextEncoder();
const decoder = new TextDecoder();

const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export interface EphemeralCrypto {
	sessionId: string;
	keyBytes: Uint8Array;
}

/**
 * Create a per-page ephemeral session with a random sessionId and derived AES key.
 * Server-side decryption: derive key = SHA-256(sessionId), split first 16 bytes as IV, decrypt AES-CBC with PKCS7.
 */
export async function createEphemeralCrypto(): Promise<EphemeralCrypto> {
	const sessionId = generateSessionId();
	const digest = await crypto.subtle.digest("SHA-256", encoder.encode(sessionId));
	const keyBytes = new Uint8Array(digest);
	return { sessionId, keyBytes };
}

export function encrypt(plaintext: string, keyBytes: Uint8Array): string {
	const iv = randomBytes(IV_LENGTH);
	const aesCbc = new CBC(keyBytes, iv);
	const padded = pkcs7Pad(encoder.encode(plaintext));
	const ciphertext = aesCbc.encrypt(padded);

	// Concatenate IV || ciphertext and return base64
	const combined = new Uint8Array(iv.length + ciphertext.length);
	combined.set(iv);
	combined.set(ciphertext, iv.length);
	return bytesToBase64(combined);
}

export function decrypt(ciphertextB64: string, keyBytes: Uint8Array): string {
	const combined = base64ToBytes(ciphertextB64);
	const iv = combined.slice(0, IV_LENGTH);
	const ciphertext = combined.slice(IV_LENGTH);

	const aesCbc = new CBC(keyBytes, iv);
	const decrypted = aesCbc.decrypt(ciphertext);
	const unpadded = pkcs7Strip(decrypted);
	return decoder.decode(unpadded);
}

function randomBytes(length: number): Uint8Array {
	const bytes = new Uint8Array(length);
	crypto.getRandomValues(bytes);
	return bytes;
}

function generateSessionId(): string {
	const bytes = randomBytes(SESSION_ID_LENGTH);
	let result = "";
	for (let i = 0; i < SESSION_ID_LENGTH; i += 1) {
		result += charset[bytes[i] % charset.length];
	}
	return result;
}

function bytesToBase64(bytes: Uint8Array): string {
	let binary = "";
	bytes.forEach((b) => {
		binary += String.fromCharCode(b);
	});
	return btoa(binary);
}

function base64ToBytes(base64: string): Uint8Array {
	const binary = atob(base64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i += 1) {
		bytes[i] = binary.charCodeAt(i);
	}
	return bytes;
}
