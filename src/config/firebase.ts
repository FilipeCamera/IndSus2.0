import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

const firebaseCredentials = {
  apiKey: 'AIzaSyCmP6NsdghXu8SHdCkGB4YP-VD11FRry4c',
  databaseURL: 'https://indsus-6696a.firebaseio.com',
  authDomain: 'indsus-6696a.firebaseapp.com',
  projectId: 'indsus-6696a',
  storageBucket: 'indsus-6696a.appspot.com',
  messagingSenderId: '436172204652',
  appId: '1:436172204652:web:696c0d8841298bd122c649',
  measurementId: 'G-WD668P53X9',
};

const firebaseConfig = {
  name: 'IndSus',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseCredentials);
}

export {firebase, firestore, auth, storage};
