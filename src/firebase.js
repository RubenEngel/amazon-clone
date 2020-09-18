import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBQwA6m1jWfh3H3pF0ZOYX98lraf9coyk0",
  authDomain: "clone-15eb5.firebaseapp.com",
  databaseURL: "https://clone-15eb5.firebaseio.com",
  projectId: "clone-15eb5",
  storageBucket: "clone-15eb5.appspot.com",
  messagingSenderId: "554583106953",
  appId: "1:554583106953:web:6654d4f0284aa0d00b2d58"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db, auth} 