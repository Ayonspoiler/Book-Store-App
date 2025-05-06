// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
//   // apiKey: import.meta.env.VITE_apiKey,
//   // authDomain: import.meta.env.VITE_authDomain,
//   // projectId: import.meta.env.VITE_projectId,
//   // storageBucket: import.meta.env.VITE_storageBucket,
//   // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
  apiKey:"AIzaSyDc99qx_jQhkNwRU9hWG5Od3XcVZkqRqiA" ,
  authDomain: "book-shop-dc12f.firebaseapp.com",
  projectId: "book-shop-dc12f",
  storageBucket: "book-shop-dc12f.firebasestorage.app",
  messagingSenderId: "919401484594",
  appId: "1:919401484594:web:74f4ffea365f95f83e872b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)