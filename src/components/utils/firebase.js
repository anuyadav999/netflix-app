// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4ksr_7KOzi-YbIO-1QT87ZOwvMcZ4k1I",
  authDomain: "netflix-app-84131.firebaseapp.com",
  projectId: "netflix-app-84131",
  storageBucket: "netflix-app-84131.appspot.com",
  messagingSenderId: "831847018310",
  appId: "1:831847018310:web:c9156f36aadeee2bacff47",
  measurementId: "G-4J93NPPXV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);