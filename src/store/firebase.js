import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4Jhnp7b8zy5BVz1CvSBqe5HptnRVcVZs",
  authDomain: "instagram-mern-c301b.firebaseapp.com",
  databaseURL: "https://instagram-mern-c301b.firebaseio.com",
  projectId: "instagram-mern-c301b",
  storageBucket: "instagram-mern-c301b.appspot.com",
  messagingSenderId: "931984464443",
  appId: "1:931984464443:web:5c38e0aa8139159c7b5a1e"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
