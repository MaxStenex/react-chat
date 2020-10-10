import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyD8O9CzUh5Ya_cHhYZuxU-9RFZdv-jWbo4',
  authDomain: 'react-chat-8b780.firebaseapp.com',
  databaseURL: 'https://react-chat-8b780.firebaseio.com',
  projectId: 'react-chat-8b780',
  storageBucket: 'react-chat-8b780.appspot.com',
  messagingSenderId: '644395982039',
  appId: '1:644395982039:web:a45d90002668b292cb6492',
  measurementId: 'G-40D2JMZ7V1',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
