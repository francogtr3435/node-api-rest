// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp1iE30gqUiBPjO3v7D16jsfFLagkqy3E",
  authDomain: "clase-10-28a21.firebaseapp.com",
  projectId: "clase-10-28a21",
  storageBucket: "clase-10-28a21.firebasestorage.app",
  messagingSenderId: "395573332118",
  appId: "1:395573332118:web:02353a85e72c96bf5c1ab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore(app)

export { db}
