// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmgt-49553.firebaseapp.com",
  projectId: "taskmgt-49553",
  storageBucket: "taskmgt-49553.firebasestorage.app",
  messagingSenderId: "442092525589",
  appId: "1:442092525589:web:f5fe97c8e9f193d2a1161c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);