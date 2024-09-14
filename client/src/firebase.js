// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-site-30c32.firebaseapp.com",
  projectId: "blog-site-30c32",
  storageBucket: "blog-site-30c32.appspot.com",
  messagingSenderId: "306433537124",
  appId: "1:306433537124:web:b39d4e03c5d106fa079b71"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);