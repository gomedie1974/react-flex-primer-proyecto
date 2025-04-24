import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXgype2SXsKl3fyYZcJzA3ptE97R31Avg",
  authDomain: "reactallinshop.firebaseapp.com",
  projectId: "reactallinshop",
  storageBucket: "reactallinshop.firebasestorage.app",
  messagingSenderId: "404476347730",
  appId: "1:404476347730:web:17afe001c7e03078e4268b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);