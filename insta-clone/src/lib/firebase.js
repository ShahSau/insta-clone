import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// eslint-disable-next-line prettier/prettier
// import {seedDatabase} from '../seed';

const config = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
console.log('firbase', firebase);

// seedDatabase(firebase);
export { firebase, FieldValue };
