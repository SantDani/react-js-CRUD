// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//https://firebase.google.com/docs/web/setup#available-services
// Firebase - Auth
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

// Firebase - Firestore
import { getFirestore } from "firebase/firestore";

// Import SDK from file
import {firebaseConfig} from './firebaseConfig.json'


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestoreDB = getFirestore();

export {
  app,
  analytics,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged, 
  firestoreDB
 }