import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-TbrOOamvPc8vmpAguCvM66FvgcbCubc",
  authDomain: "c-productions.firebaseapp.com",
  projectId: "c-productions",
  storageBucket: "c-productions.appspot.com",
  messagingSenderId: "287512484062",
  appId: "1:287512484062:web:965ed911fbe4cb63898a4f",
  measurementId: "G-8RENRXBMJV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("hello world")