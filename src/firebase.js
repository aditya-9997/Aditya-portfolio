import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBup1cHCc7R3I1SJTEVe7GS4uODmHrA3g8",
    authDomain: "aditya-a25fb.firebaseapp.com",
    projectId: "aditya-a25fb",
    storageBucket: "aditya-a25fb.appspot.com",
    messagingSenderId: "764483884567",
    appId: "1:764483884567:web:d3a1e418d16fe080e76e52"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };