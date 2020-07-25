import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCr3ixH_O0XdiQN7Gn-ANiDH3Smf4xHai4",
    authDomain: "ninja-chat-ad4d9.firebaseapp.com",
    databaseURL: "https://ninja-chat-ad4d9.firebaseio.com",
    projectId: "ninja-chat-ad4d9",
    storageBucket: "ninja-chat-ad4d9.appspot.com",
    messagingSenderId: "964075435840",
    appId: "1:964075435840:web:e53f6c7b526c41a8466ca5",
    measurementId: "G-KVYYBP0M2E"
  };

  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.analytics();
  // firebaseApp.firestore().settings({timestampsInSnapshots: true}) << no longer needed

  export default firebaseApp.firestore();
