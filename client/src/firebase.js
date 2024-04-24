// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cbc34.firebaseapp.com",
  projectId: "mern-estate-cbc34",
  storageBucket: "mern-estate-cbc34.appspot.com",
  messagingSenderId: "969330860873",
  appId: "1:969330860873:web:b3793e8b0d38272a2cb098"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);