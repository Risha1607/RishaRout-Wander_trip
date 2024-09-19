
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDVX747b31sRqwBWxC2Ch7LSBbM5vjJNog",
  authDomain: "wanderwise-c89ee.firebaseapp.com",
  projectId: "wanderwise-c89ee",
  storageBucket: "wanderwise-c89ee.appspot.com",
  messagingSenderId: "956877237123",
  appId: "1:956877237123:web:2a37771ac995b6d733a4b6",
  measurementId: "G-H1N3E880KH"
};


export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);