
// require("dotenv").config();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGcJBWVpwMLDa4eW-7_yh6MyDRXfmUIBQ",
  authDomain: "react-chat-8f189.firebaseapp.com",
  projectId: "react-chat-8f189",
  storageBucket: "react-chat-8f189.appspot.com",
  messagingSenderId: "58940142770",
  appId: "1:58940142770:web:e6d8ec988acb1503da05ab",
  measurementId: "G-6V2WN8505T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);