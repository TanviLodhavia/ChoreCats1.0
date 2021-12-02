import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBbnxNSVWwsSNH26wraxPj14nEQFcqOMy0",
    authDomain: "my-app-cd448.firebaseapp.com",
    projectId: "my-app-cd448",
    storageBucket: "my-app-cd448.appspot.com",
    messagingSenderId: "856847941613",
    appId: "1:856847941613:web:c3e1c4f72aeb41f7ecf1e4"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();