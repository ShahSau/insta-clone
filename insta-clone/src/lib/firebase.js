import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// eslint-disable-next-line prettier/prettier
// import {seedDatabase} from '../seed';

const config = {
  apiKey: 'AIzaSyCaAM4b3uqeFa1S7M1DrPsOuy7KNRHuBgA',
  authDomain: 'insta-clone-fb.firebaseapp.com',
  projectId: 'insta-clone-fb',
  storageBucket: 'insta-clone-fb.appspot.com',
  messagingSenderId: '655288511165',
  appId: '1:655288511165:web:8a1007df012fa927e425d4'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
console.log('firbase', firebase);

// seedDatabase(firebase);
export { firebase, FieldValue };
