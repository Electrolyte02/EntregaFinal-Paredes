// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqi9w81FYUBAQUylIACdtotV7cmGJU6yA",
  authDomain: "entrega-final-coder.firebaseapp.com",
  projectId: "entrega-final-coder",
  storageBucket: "entrega-final-coder.appspot.com",
  messagingSenderId: "778286172360",
  appId: "1:778286172360:web:29f5000ee74b9533743dfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase =()=> app;