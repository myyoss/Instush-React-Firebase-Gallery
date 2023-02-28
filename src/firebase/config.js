import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArUXCdnFPGxXpK7otYJpygYeGbCdEzM1g",
  authDomain: "react-gallery-c55e2.firebaseapp.com",
  projectId: "react-gallery-c55e2",
  storageBucket: "react-gallery-c55e2.appspot.com",
  messagingSenderId: "511823428659",
  appId: "1:511823428659:web:fe653bfec62edb2c2f7746",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
