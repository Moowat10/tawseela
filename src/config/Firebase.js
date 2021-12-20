import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdMoKvJVZrlaZJcpVKrC5E-XbQo2QWoX4",
  authDomain: "tawseela-df890.firebaseapp.com",
  projectId: "tawseela-df890",
  storageBucket: "tawseela-df890.appspot.com",
  messagingSenderId: "338844875196",
  appId: "1:338844875196:web:c68fd364129362b7c7d3b9",
  measurementId: "G-4Y7FDSJY66",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
