import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMAmq8lFQrPHfC_Zn9lcGyQos3hebym9Y",
  authDomain: "chatroomv2-2e2a1.firebaseapp.com",
  projectId: "chatroomv2-2e2a1",
  storageBucket: "chatroomv2-2e2a1.appspot.com",
  messagingSenderId: "538655746585",
  appId: "1:538655746585:web:0efc374c0d3b003736d888",
  measurementId: "G-RXT8VXH07B"
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
