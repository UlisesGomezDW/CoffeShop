import firebase from 'firebase/app'
import 'firebase/auth'
var firebaseConfig = {
  apiKey: "AIzaSyAJmN1sj1OQkN12EMzgoCUdkUPzEpYBk10",
  authDomain: "users-97b31.firebaseapp.com",
  databaseURL: "https://users-97b31.firebaseio.com",
  projectId: "users-97b31",
  storageBucket: "users-97b31.appspot.com",
  messagingSenderId: "794543387537",
  appId: "1:794543387537:web:cb42cd7f1792015f7fa030"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(snap => snap.user);
}
export function logOutwithGoogle() {
  return firebase.auth().signOut();
}
