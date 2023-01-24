// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhSLVKjOC3y1osXqj8osfbd74V7bL1EMw",
  authDomain: "netflix-clone-425d1.firebaseapp.com",
  projectId: "netflix-clone-425d1",
  storageBucket: "netflix-clone-425d1.appspot.com",
  messagingSenderId: "1009791749929",
  appId: "1:1009791749929:web:01c697f7ca6cd810887138",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
