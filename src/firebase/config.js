// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbfMPPCFrBEhDSSPdtbwBd32bG06uATQo",
  authDomain: "rjs-proyecto-3b4fb.firebaseapp.com",
  projectId: "rjs-proyecto-3b4fb",
  storageBucket: "rjs-proyecto-3b4fb.appspot.com",
  messagingSenderId: "468299836191",
  appId: "1:468299836191:web:77f29726b77e92fefbde2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
