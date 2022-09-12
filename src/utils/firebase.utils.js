// TODO: Add SDKs for Firebase produx`cts that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(firebaseApp);

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  snapshotEqual,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJQOXhTn00KG1Set1TcSrQmn6F7u9Io38",
  authDomain: "crwn-db-72040.firebaseapp.com",
  projectId: "crwn-db-72040",
  storageBucket: "crwn-db-72040.appspot.com",
  messagingSenderId: "152481319647",
  appId: "1:152481319647:web:b4f7e6bad5f05b592eb76a",
  measurementId: "G-C0S7M17FEN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    // create / set the document with the data from userauth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user ", error.message);
    }
  }

  return userDocRef;
};
