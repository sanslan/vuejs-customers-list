import firebase from 'firebase'
require("firebase/firestore")

firebase.initializeApp({
    apiKey: "AIzaSyAXEUAdggXZf8W5Dt13VaDY1Anq6HnOyr0",
    authDomain: "customers-firestore.firebaseapp.com",
    databaseURL: "https://customers-firestore.firebaseio.com",
    projectId: "customers-firestore",
    storageBucket: "customers-firestore.appspot.com",
    messagingSenderId: "585151843717"
});

export var db = firebase.firestore();
// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});
export var storage = firebase.storage();
export default firebase;