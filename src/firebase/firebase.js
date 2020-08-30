import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCoHsKPSC3Xi7L1TXyBqI8yRMPXMUo5rn0",
    authDomain: "whatsapp-clone-e56d0.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-e56d0.firebaseio.com",
    projectId: "whatsapp-clone-e56d0",
    storageBucket: "whatsapp-clone-e56d0.appspot.com",
    messagingSenderId: "789506745176",
    appId: "1:789506745176:web:7dba4003e1b208b5d5bb2d",
    measurementId: "G-V626HREQGK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider =  new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;