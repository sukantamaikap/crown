import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCXwoR9rSD8zcfzcBAfz3thIX_WvzOCQVI",
  authDomain: "crwn-db-d1e3e.firebaseapp.com",
  databaseURL: "https://crwn-db-d1e3e.firebaseio.com",
  projectId: "crwn-db-d1e3e",
  storageBucket: "crwn-db-d1e3e.appspot.com",
  messagingSenderId: "791329383214",
  appId: "1:791329383214:web:9feed1666d4b58081a10bf",
  measurementId: "G-R2SX3V6QMV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
  
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
export default firebase;