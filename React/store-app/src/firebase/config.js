// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsbIfIFssW6MLNerbYMHWPBop0ZrxQzNU",
  authDomain: "auth-app-967ae.firebaseapp.com",
  projectId: "auth-app-967ae",
  storageBucket: "auth-app-967ae.appspot.com",
  messagingSenderId: "475910902221",
  appId: "1:475910902221:web:2b0d8c88beb95174edf484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore auth service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
