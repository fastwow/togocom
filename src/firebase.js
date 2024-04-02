// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHvZ6qA-45PJjdKn30VRnJAsYAlRIAS7E",
  authDomain: "togocom-5aa8b.firebaseapp.com",
  projectId: "togocom-5aa8b",
  storageBucket: "togocom-5aa8b.appspot.com",
  messagingSenderId: "274460105127",
  appId: "1:274460105127:web:613cd7a57f606394423e82",
  measurementId: "G-R96EVPZ55G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
