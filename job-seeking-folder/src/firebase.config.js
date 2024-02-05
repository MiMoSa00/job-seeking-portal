// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzrvPD34HZ-1aysDaETV7wtFqnQCGwdE4",
  authDomain: "online-job-seeking.firebaseapp.com",
  projectId: "online-job-seeking",
  storageBucket: "online-job-seeking.appspot.com",
  messagingSenderId: "643171766327",
  appId: "1:643171766327:web:96bbb69f35c5bed665afb2",
  measurementId: "G-5N1D48WTMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};