import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-IF66tVGAORtCYxZjGiiEP-4y_HfK1Ks",
  authDomain: "slack-clone-b7fb2.firebaseapp.com",
  projectId: "slack-clone-b7fb2",
  storageBucket: "slack-clone-b7fb2.appspot.com",
  messagingSenderId: "507640876587",
  appId: "1:507640876587:web:aac386e992a8e9e331e46e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider };
export {db}