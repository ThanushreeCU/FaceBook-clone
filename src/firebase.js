import Firebase from "firebase"


const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyDf7RugaWq37N0yGMO6QyiXlQxreFR-v78",
    authDomain: "facebook-clone-eb035.firebaseapp.com",
    projectId: "facebook-clone-eb035",
    storageBucket: "facebook-clone-eb035.appspot.com",
    messagingSenderId: "304978494156",
    appId: "1:304978494156:web:66e6083b7e504289ea3869",
    measurementId: "G-FG17BZE2XK"
  });

const db = firebaseApp.firestore();

export default db;

