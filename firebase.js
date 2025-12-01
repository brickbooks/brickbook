// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { 
  getAuth,
  browserLocalPersistence,
  setPersistence
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { 
  getFirestore 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyBm7PmX1VjRYd_JHr3OPZ7RAglgD1v-rys",
  authDomain: "brick-book-72713.firebaseapp.com",
  projectId: "brick-book-72713",
  storageBucket: "brick-book-72713.appspot.com",
  messagingSenderId: "970832425744",
  appId: "1:970832425744:web:7fccf44e6f53417efd2b95"
};

// Init
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// STEP 1 — Persist login (required for Email Link Sign-in)
setPersistence(auth, browserLocalPersistence)
  .catch(err => console.error("Auth persistence error:", err));

// STEP 2 — Helpers for squad invite flow
export function saveInviteEmail(email) {
  try {
    window.localStorage.setItem("brickbook_invite_email", email);
  } catch (err) {
    console.error("Could not store invite email:", err);
  }
}

export function loadInviteEmail() {
  try {
    return window.localStorage.getItem("brickbook_invite_email") || "";
  } catch (err) {
    return "";
  }
}
