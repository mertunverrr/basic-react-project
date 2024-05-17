import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBdsdGZjFoweZjtx_MnvSeAB9XkhiAEV3g",
  authDomain: "posts-app-518ed.firebaseapp.com",
  projectId: "posts-app-518ed",
  storageBucket: "posts-app-518ed.appspot.com",
  messagingSenderId: "809009400504",
  appId: "1:809009400504:web:6b9f9549b9a87186e3c24d",
  measurementId: "G-92XNR8HJ7J",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
