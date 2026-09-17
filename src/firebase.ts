import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyC6bANa5Cxw0v55fqs_bdV9vUcN_dVlqW4",
  authDomain: "banking-tayari-nepal.firebaseapp.com",
  projectId: "banking-tayari-nepal",
  storageBucket: "banking-tayari-nepal.firebasestorage.app",
  messagingSenderId: "389241557756",
  appId: "1:389241557756:web:740ccb16e263838ea9fd79",
  measurementId: "G-3YT3FCML6L"
};

export const app: FirebaseApp = getApps().length > 0 
  ? getApp() 
  : initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

export default app;
