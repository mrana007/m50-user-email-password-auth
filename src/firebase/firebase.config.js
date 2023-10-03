// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpk02c6GM71KkNpzHSpk1UNpVGIJrLSGc",
  authDomain: "user-email-password-auth-943ae.firebaseapp.com",
  projectId: "user-email-password-auth-943ae",
  storageBucket: "user-email-password-auth-943ae.appspot.com",
  messagingSenderId: "587415781388",
  appId: "1:587415781388:web:c0965280c38331061fae29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;