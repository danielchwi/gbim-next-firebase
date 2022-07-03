// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCawUc4jpMGJSRj5TWsesXKABL5_LlT9ik",
  authDomain: "gbimaleber.firebaseapp.com",
  projectId: "gbimaleber",
  storageBucket: "gbimaleber.appspot.com",
  messagingSenderId: "867752343254",
  appId: "1:867752343254:web:33eb8cac5101f7cb75fb77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)