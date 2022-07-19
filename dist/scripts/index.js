import {initializeApp} from "../_snowpack/pkg/firebase/app.js";
import {getAnalytics} from "../_snowpack/pkg/firebase/analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyDe1TsocxMZXlxyAtnpSyReylRhKt2URZE",
  authDomain: "lighting-company-3588d.firebaseapp.com",
  projectId: "lighting-company-3588d",
  storageBucket: "lighting-company-3588d.appspot.com",
  messagingSenderId: "1097820145690",
  appId: "1:1097820145690:web:c8c6553a7dcdff2d1f29a3",
  measurementId: "G-SXCY1RTWCZ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
