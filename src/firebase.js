import firebase from "firebase/app";
import "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDWqWnFi_S9oAFQp4Yb4muh9cenrNCQwtI",
  authDomain: "disneyplus-clone-b1225.firebaseapp.com",
  projectId: "disneyplus-clone-b1225",
  storageBucket: "disneyplus-clone-b1225.appspot.com",
  messagingSenderId: "944833203245",
  appId: "1:944833203245:web:8da8caaec7768fbf557ca4",
  measurementId: "G-TQF90F9ELN",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
