// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDUyXy4xqSr3GqLHx_LSrIFdHnDL1-qUQU",
  authDomain: "clone-fb8e6.firebaseapp.com",
  projectId: "clone-fb8e6",
  storageBucket: "clone-fb8e6.appspot.com",
  messagingSenderId: "1046437354649",
  appId: "1:1046437354649:web:8263cc0dddcfcf48406c08",
  measurementId: "G-V8V46BN242"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};