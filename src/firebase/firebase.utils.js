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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user record", error.message);
    }
  }

  return userRef;
}
  
export default firebase;