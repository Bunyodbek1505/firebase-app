

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCWw_Nk_VZrX9JuxkBmZ7xslm2SWWqDRB8",
    authDomain: "online-shop-ae756.firebaseapp.com",
    projectId: "online-shop-ae756",
    storageBucket: "online-shop-ae756.appspot.com",
    messagingSenderId: "1003693125530",
    appId: "1:1003693125530:web:795bec745c153878e25423"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export  const db = getFirestore(app)
export const storage = getStorage(app)


export default app