// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr5NbGe663qxPV1domUrA1U-L_YXdXmKk",
  authDomain: "restuarant-menu-8c081.firebaseapp.com",
  projectId: "restuarant-menu-8c081",
  storageBucket: "restuarant-menu-8c081.firebasestorage.app",
  messagingSenderId: "1065456641710",
  appId: "1:1065456641710:web:2875b7e5406740b0d8ef3f",
  measurementId: "G-BX047XRNPV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
