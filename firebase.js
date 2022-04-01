import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBP_R_YfmNDWWGonPj1_R-HwKl3ufsV7q4",
  authDomain: "facebook-clone-82ab4.firebaseapp.com",
  projectId: "facebook-clone-82ab4",
  storageBucket: "facebook-clone-82ab4.appspot.com",
  messagingSenderId: "326206109732",
  appId: "1:326206109732:web:0a91dd033441ee17fac0b1",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
