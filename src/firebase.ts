import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgZvT2LFs-r8QyZ-Il-LduDUvnBzlExnc",
  authDomain: "discord-clone-390bf.firebaseapp.com",
  projectId: "discord-clone-390bf",
  storageBucket: "discord-clone-390bf.appspot.com",
  messagingSenderId: "617222256504",
  appId: "1:617222256504:web:48f8efcd3670f64d687a8d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider, db};