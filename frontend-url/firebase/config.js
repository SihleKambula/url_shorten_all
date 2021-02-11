import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8pz-gkayrSfKO0Z50KMNJ27NNYdB_ebo",
  authDomain: "lillink.firebaseapp.com",
  projectId: "lillink",
  storageBucket: "lillink.appspot.com",
  messagingSenderId: "699680500022",
  appId: "1:699680500022:web:b63aa355166cd31c88eb97",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize firestore and auth
const firestoreDB = firebase.firestore();
const auth = firebase.auth();

export { firestoreDB, auth };
