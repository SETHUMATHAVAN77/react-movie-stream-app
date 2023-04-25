// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLSNAoDn9nHD6jhCy3JEaoRmB56nZuxDo",
  authDomain: "stream-it-e83ee.firebaseapp.com",
  projectId: "stream-it-e83ee",
  storageBucket: "stream-it-e83ee.appspot.com",
  messagingSenderId: "733957313844",
  appId: "1:733957313844:web:aca110b7d731de728fc161",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// db- data base
export const db = getFirestore(app);

export const firestore = getFirestore(app);
export const storage = getStorage(app);
