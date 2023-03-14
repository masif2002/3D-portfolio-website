// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaoSog1xRUpcs9bZtAaqKIL9uEuRf5tJg",
  authDomain: "d-portfolio-91a66.firebaseapp.com",
  projectId: "d-portfolio-91a66",
  storageBucket: "d-portfolio-91a66.appspot.com",
  messagingSenderId: "85020278184",
  appId: "1:85020278184:web:b2ed5daea9cb4e8ec7319d",
  measurementId: "G-JD2SNEXHHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);