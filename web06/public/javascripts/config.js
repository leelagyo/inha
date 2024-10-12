// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGJxZsfDSkhe7AcQ-xnylByptIxzJSSwM",
  authDomain: "inha-ff56a.firebaseapp.com",
  projectId: "inha-ff56a",
  storageBucket: "inha-ff56a.appspot.com",
  messagingSenderId: "184251047242",
  appId: "1:184251047242:web:0c63cea4fccf06977af5b3",
  measurementId: "G-Y8ZRTC5KQB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);