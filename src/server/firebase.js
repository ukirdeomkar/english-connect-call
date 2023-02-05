import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB1b9KE6V8koBw-6hChARm3FqpRep3JYtk",
  authDomain: "english-learn-meet-call.firebaseapp.com",
  databaseURL: "https://english-learn-meet-call-default-rtdb.firebaseio.com",
  projectId: "english-learn-meet-call",
  storageBucket: "english-learn-meet-call.appspot.com",
  messagingSenderId: "148745038431",
  appId: "1:148745038431:web:5ad128723486198e16c9ea",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
