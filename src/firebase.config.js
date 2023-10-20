// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Frb4sCI2QbY4IkHGRBSOmLyDTqo-c-g",
  authDomain: "my-brand-shop-r.firebaseapp.com",
  projectId: "my-brand-shop-r",
  storageBucket: "my-brand-shop-r.appspot.com",
  messagingSenderId: "355876078262",
  appId: "1:355876078262:web:fb0a0b48c1ebf12aba5c17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;