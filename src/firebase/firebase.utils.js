import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBzh1gLwRl5c0UZ9JLbpoXy3CB9oBtoN6Y",
  authDomain: "crwn-clothing-site.firebaseapp.com",
  databaseURL: "https://crwn-clothing-site.firebaseio.com",
  projectId: "crwn-clothing-site",
  storageBucket: "",
  messagingSenderId: "44454636027",
  appId: "1:44454636027:web:8b6b802d053c6eecf3c35e",
  measurementId: "G-S0Z8ZP39NY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
