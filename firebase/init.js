import firebase from 'firebase';
import firestore from 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyDGu908Dx3j83ej-foRVhxkpHHC-fpKGRI",
  authDomain: "uratraining-e4b27.firebaseapp.com",
  databaseURL: "https://uratraining-e4b27.firebaseio.com",
  projectId: "uratraining-e4b27",
  storageBucket: "uratraining-e4b27.appspot.com",
  messagingSenderId: "150480677051",
  appId: "1:150480677051:web:e2d1ec93d0e0bdfe09e19e",
  measurementId: "G-W4NX58P2GG"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Export firestore database
export default firebaseApp.firestore();
