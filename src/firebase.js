import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA0v6HObT_WtqopLKM8FJ7NQQ7MYqviRYc",
  authDomain: "shop-6260a.firebaseapp.com",
  projectId: "shop-6260a",
  storageBucket: "shop-6260a.appspot.com",
  messagingSenderId: "232675971942",
  appId: "1:232675971942:web:08da670026733dd64d6ea7",
  measurementId: "G-0LMXDEQ85S",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
