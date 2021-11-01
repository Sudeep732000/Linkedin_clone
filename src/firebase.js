import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN3ExncJi-meZitZZAFdzOpyk31yLiB7E",
  authDomain: "linkedin-clone-bc4ed.firebaseapp.com",
  projectId: "linkedin-clone-bc4ed",
  storageBucket: "linkedin-clone-bc4ed.appspot.com",
  messagingSenderId: "421295484062",
  appId: "1:421295484062:web:d6dd8c9594ffd1ef4d5f8f",
  measurementId: "G-SBB8V2DDBK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
