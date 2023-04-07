// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC1ActZi05TmzSJVl4LhrDRxsP3J-iV-8",
  authDomain: "mon-portfolio-710b4.firebaseapp.com",
  projectId: "mon-portfolio-710b4",
  storageBucket: "mon-portfolio-710b4.appspot.com",
  messagingSenderId: "757231594065",
  appId: "1:757231594065:web:b4963b221ca31336e5a670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };