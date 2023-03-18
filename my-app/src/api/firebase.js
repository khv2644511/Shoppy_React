import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

// https://firebase.google.com/docs/auth/web/google-signin

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);

// 사용자가 로그인 할 때 함수 실행
export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

// 사용자가 로그아웃 할 때 실행되는 함수
export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChanged(callback) {
  // 1. 사용자가 있는 경우에(로그인한 경우)
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
