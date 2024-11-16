// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsr12S4GHjlRqvJGP33JS3y8na3ELVIgg",
  authDomain: "requement-project.firebaseapp.com",
  projectId: "requement-project",
  storageBucket: "requement-project.firebasestorage.app",
  messagingSenderId: "589751931472",
  appId: "1:589751931472:web:4192f37d6caa7e4d5a3755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);

