

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnhsw134vrMv50jxr5v5sTgHRDHmSsWaM",
  authDomain: "react-journal-new.firebaseapp.com",
  projectId: "react-journal-new",
  storageBucket: "react-journal-new.appspot.com",
  messagingSenderId: "748646843433",
  appId: "1:748646843433:web:9cc25d51a55127eeb94838"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);