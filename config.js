import firebase from 'firebase';
require('@firebase/firestore');

const config = {
  apiKey: "AIzaSyBpYzR24aZDXv3S5tUY9jerRdIutLW9OJY",
  authDomain: "bedtime-stories-d2251.firebaseapp.com",
  projectId: "bedtime-stories-d2251",
  storageBucket: "bedtime-stories-d2251.appspot.com",
  messagingSenderId: "78614194617",
  appId: "1:78614194617:web:2b5845f9574b88b8692e68"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
