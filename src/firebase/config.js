// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC0vopWojQ0x2netJ-SjblBhirHzCcNUO8",
  authDomain: "ecommerce-4e257.firebaseapp.com",
  projectId: "ecommerce-4e257",
  storageBucket: "ecommerce-4e257.appspot.com",
  messagingSenderId: "1026899923376",
  appId: "1:1026899923376:web:299ec6ecefa5edbb50c675",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
