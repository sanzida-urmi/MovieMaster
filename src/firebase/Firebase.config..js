// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm1AV2h3i_6BGrhxcGQlPyBNIVj0U2K_o",
  authDomain: "moviemaster-3c210.firebaseapp.com",
  projectId: "moviemaster-3c210",
  storageBucket: "moviemaster-3c210.firebasestorage.app",
  messagingSenderId: "438736000389",
  appId: "1:438736000389:web:d64e8a34e896bbdff760ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);