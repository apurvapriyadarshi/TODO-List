import firebase from "firebase";

const firebaseApp =firebase.initializeApp({

    apiKey: "AIzaSyDysiCkAnkfiDKS4OqR6vCqQBAuTc1FRR4",
  authDomain: "todo-app-22db2.firebaseapp.com",
  databaseURL: "https://todo-app-22db2.firebaseio.com",
  projectId: "todo-app-22db2",
  storageBucket: "todo-app-22db2.appspot.com",
  messagingSenderId: "493576940334",
  appId: "1:493576940334:web:f1ef51ba34b07282ffa8bf",
  measurementId: "G-7CZ4XHF1QH"
});

const db = firebaseApp.firestore();

export default db;