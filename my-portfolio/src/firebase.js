// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1cOsS1jyXyklYycIRaNFWMILjSHjqZvM",
  authDomain: "my-portfolio-1ea2f.firebaseapp.com",
  projectId: "my-portfolio-1ea2f",
  storageBucket: "my-portfolio-1ea2f.firebasestorage.app",
  messagingSenderId: "624893578102",
  appId: "1:624893578102:web:4bd291dfee66c929e24857",
  measurementId: "G-B2WE78MKJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;