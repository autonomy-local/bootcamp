import { initializeApp, getApps, getApp } from "firebase/app";
import type { FirebaseOptions, FirebaseApp } from "firebase/app";
import { e } from "vitest/dist/reporters-rzC174PQ";

// Please replace the following with your own Firebase project configuration
const config: FirebaseOptions = {
	apiKey: "AIzaSyCufXqBISlE69lDtlBXLpMOhgea6iQiD98",
	authDomain: "autonmy-bootcamp.firebaseapp.com",
	databaseURL:
		"https://autonmy-bootcamp-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "autonmy-bootcamp",
	storageBucket: "autonmy-bootcamp.appspot.com",
	messagingSenderId: "615325021990",
	appId: "1:615325021990:web:d1171349f06a5c89f673e7",
	measurementId: "G-H9MYV5GXX8",
};

// 初期化された FirebaseApp インスタンスを返す
// すでに初期化されている場合はそれを返す
export function getFirebaseApp(): FirebaseApp {
	// send the configuration to initializeApp
	if (import.meta.env.VITE_ENVIRONMENT === "development") {
		console.log("Firebase configuration", config);
	}
	if (getApps().length === 0) {
		return initializeApp(config);
	}
	return getApp();
}
