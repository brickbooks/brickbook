// Firebase imports MUST be from URLs, not npm names
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth,
  browserLocalPersistence,
  setPersistence
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Correct Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBm7PmX1VjRYd_JHr3OPZ7RAglgD1v-rys",
  authDomain: "brick-book-72713.firebaseapp.com",
  projectId: "brick-book-72713",
  storageBucket: "brick-book-72713.appspot.com",
  messagingSenderId: "970832425744",
  appId: "1:970832425744:web:7fccf44e6f53417efd2b95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 🔥 Persist login across page reloads + navigation
setPersistence(auth, browserLocalPersistence)
  .catch((err) => console.error("Persistence error:", err));
