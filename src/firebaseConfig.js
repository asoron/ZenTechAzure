// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	// Your Firebase config object
	apiKey: "AIzaSyAT9HjMZEyQTNlfdnG9nej5K-UFI3FfRT8",
	authDomain: "azurechat-ef2da.firebaseapp.com",
	projectId: "azurechat-ef2da",
	storageBucket: "azurechat-ef2da.appspot.com",
	messagingSenderId: "472477644017",
	appId: "1:472477644017:web:d81641027442bbb10fa550",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);

export { db };
