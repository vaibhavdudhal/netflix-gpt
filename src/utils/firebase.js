



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzWBYCO5mK0GiqTweZAUyJGRUf78hyT5A",
  authDomain: "netflixgpt-vd.firebaseapp.com",
  projectId: "netflixgpt-vd",
  storageBucket: "netflixgpt-vd.appspot.com",
  messagingSenderId: "492843812862",
  appId: "1:492843812862:web:316f4d7817027953f422af",
  measurementId: "G-H0VY59MHV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth=getAuth();