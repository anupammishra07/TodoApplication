// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcmjN0HkhKr6IYpkJlPfFoLrJ1ZMwv31c",
  authDomain: "softtodo-173b6.firebaseapp.com",
  projectId: "softtodo-173b6",
  storageBucket: "softtodo-173b6.appspot.com",
  messagingSenderId: "376331720480",
  appId: "1:376331720480:web:d9886a5b3ec449a72c6945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);