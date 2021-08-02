import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDsPHiYInvyhV7VMTVu17qozJU_Ji9l6K4",
    authDomain: "chat-room-d86cc.firebaseapp.com",
    projectId: "chat-room-d86cc",
    storageBucket: "chat-room-d86cc.appspot.com",
    messagingSenderId: "175119699376",
    appId: "1:175119699376:web:0422fb622fef7590661a75",
    measurementId: "G-F9J9PTY8L1"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();


const auth = firebase.auth();
const db = firebase.firestore();

// auth.useEmulator("http://localhost:9099")
// if(window.location.hostname == "localhost") { 
//     db.useEmulator('localhost', '8080')
// }

export {db, auth};
export default firebase;
