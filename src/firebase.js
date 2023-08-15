// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn8q3Ay92pSpG4AvSXWdFGxAaERsVIPFw",
  authDomain: "ankit-portfolio-58f85.firebaseapp.com",
  projectId: "ankit-portfolio-58f85",
  storageBucket: "ankit-portfolio-58f85.appspot.com",
  messagingSenderId: "560247629142",
  appId: "1:560247629142:web:f3cde1e2222a9b346522f7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(); 