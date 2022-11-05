// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcFP79sOc3KCzgPFB3NHB-_kGP_GxPLTc",
  authDomain: "base-arcolo.firebaseapp.com",
  projectId: "base-arcolo",
  storageBucket: "base-arcolo.appspot.com",
  messagingSenderId: "530576127024",
  appId: "1:530576127024:web:261f456ff60ee1d11329f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoneInit = () => app