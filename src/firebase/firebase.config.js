// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN7m4c8hyp4htdI2Q4KlolidYfndm-O7c",
  authDomain: "coffee-store-d797e.firebaseapp.com",
  projectId: "coffee-store-d797e",
  storageBucket: "coffee-store-d797e.firebasestorage.app",
  messagingSenderId: "975433534627",
  appId: "1:975433534627:web:a2e5380a7d6531c2ee8316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);