// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlZrEaz7wXGZr9yV83aZ5iQECgi5hEg3E",
  authDomain: "nextjs-assignment-81f36.firebaseapp.com",
  projectId: "nextjs-assignment-81f36",
  storageBucket: "nextjs-assignment-81f36.appspot.com",
  messagingSenderId: "860428909467",
  appId: "1:860428909467:web:74855c076e467fa3d4bf3e",
  measurementId: "G-SRV8ELWMS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };