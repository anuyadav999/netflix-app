// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNRCvDnLB51jyAXsg0xRmrI-imQxP5uMQ",
  authDomain: "netflix-webapp-2d748.firebaseapp.com",
  projectId: "netflix-webapp-2d748",
  storageBucket: "netflix-webapp-2d748.appspot.com",
  messagingSenderId: "242445368985",
  appId: "1:242445368985:web:80a6f1827674b6b8f34208",
  measurementId: "G-0RRVRFBTH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);