import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getStorage } from 'firebase/storage'
//import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyA2LJXkP13MeEHOA8Ooghmbi1H6RRQJreE",
  authDomain: "website-f2fa5.firebaseapp.com",
  projectId: "website-f2fa5",
  storageBucket: "website-f2fa5.appspot.com",
  messagingSenderId: "500925289894",
  appId: "1:500925289894:web:15dc935f68d64881f6ab67",
  measurementId: "G-LCDVWLPPS0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

//const storage = getStorage(firebaseConfig);

//const database = getDatabase(firebaseConfig);

export { app, auth };

//export default storage;
