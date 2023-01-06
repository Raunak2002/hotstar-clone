import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB9uOxBfuSC8Ss7JrRcWpXby3aIevQSbY4",
    authDomain: "hotstar-clone-93920.firebaseapp.com",
    projectId: "hotstar-clone-93920",
    storageBucket: "hotstar-clone-93920.appspot.com",
    messagingSenderId: "649573575744",
    appId: "1:649573575744:web:ec6fc7cfb572e99143c3a5",
    measurementId: "G-TS7LTQ8ZCM"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseapp);

export {auth, provider, storage};
export default db;