import { createContext, ReactNode, useContext } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVB8Fa9mHc6v5MPQ-ASKUBJIutggCs81o",
  authDomain: "movie-night-6326e.firebaseapp.com",
  projectId: "movie-night-6326e",
  storageBucket: "movie-night-6326e.appspot.com",
  messagingSenderId: "773671473199",
  appId: "1:773671473199:web:e43adbbd037bfbe97ef6da",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface IFirebaseCtx {
  app: FirebaseApp;
  db: Firestore;
}

const firebaseCtx = createContext<IFirebaseCtx | null>(null);

interface FirebaseContextProps {
  children: ReactNode;
}

export const FirebaseContext = (props: FirebaseContextProps) => {
  return (
    <firebaseCtx.Provider
      value={{
        app,
        db,
      }}
    >
      {props.children}
    </firebaseCtx.Provider>
  );
};

export const useFirebase = () => {
  const firebaseContext = useContext(firebaseCtx);

  if (firebaseContext === null) {
    throw new Error("FirebaseContext has not been initialised. Value is null.");
  }

  return firebaseContext;
};
