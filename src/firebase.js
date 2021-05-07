import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBf9EMAIlxtV10VreBCi3RZpAT5yb1jILI",
  authDomain: "disney-plus-clone-b8a3d.firebaseapp.com",
  projectId: "disney-plus-clone-b8a3d",
  storageBucket: "disney-plus-clone-b8a3d.appspot.com",
  messagingSenderId: "937868895035",
  appId: "1:937868895035:web:3ecd68bab3bc9df8910d1e",
  measurementId: "G-4H2855L67K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;