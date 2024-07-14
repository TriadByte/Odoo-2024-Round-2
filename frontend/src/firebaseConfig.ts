// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWmdmRJWd5MTPsIv1qFibT067Q8GVtcAc",
  authDomain: "template-project-5370b.firebaseapp.com",
  projectId: "template-project-5370b",
  storageBucket: "template-project-5370b.appspot.com",
  messagingSenderId: "877711291068",
  appId: "1:877711291068:web:f46d64b794148743a116b9",
  measurementId: "G-4NX3JM1JL1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const fs = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, db, fs, googleProvider};
