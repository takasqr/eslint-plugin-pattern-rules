import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions } from 'firebase/functions';
import { getFirestore, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FB_APP_ID
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const functions = getFunctions(app);
const db = getFirestore();
const auth = getAuth();

if (import.meta.env.MODE === 'development') {

  // Firebase Authentication エミュレーターを初期化
  import('firebase/auth').then(({ connectAuthEmulator }) => {
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
  });

  // Firebase Firestore エミュレーターを初期化
  import('firebase/firestore').then(({ connectFirestoreEmulator }) => {
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
  });
}