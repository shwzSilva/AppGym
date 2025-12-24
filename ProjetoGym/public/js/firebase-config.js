// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVaP6w_DbsRMFZYp3YkFH3WVNDPTL2lMY",
  authDomain: "gym-notion-e3bb0.firebaseapp.com",
  projectId: "gym-notion-e3bb0",
  storageBucket: "gym-notion-e3bb0.firebasestorage.app",
  messagingSenderId: "440017544065",
  appId: "1:440017544065:web:661fb242984778f8d27e80",
  measurementId: "G-BLR816XCKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);