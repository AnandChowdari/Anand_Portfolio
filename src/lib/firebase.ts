import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCuuYfdKjM7eLkKj-5-RAUr4Tl6TUT2VU",
  authDomain: "anand-s-portfolio.firebaseapp.com",
  projectId: "anand-s-portfolio",
  storageBucket: "anand-s-portfolio.appspot.com",
  messagingSenderId: "153573073104",
  appId: "1:153573073104:web:8e188cb41c634843577ed5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
