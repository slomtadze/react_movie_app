import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase.config";

const AuthContext = React.createContext({
  user: {},
  signUp: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const signUpHandler = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password);
    try {
      setDoc(doc(db, "users", email), {
        name: name,
        favorites: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logoutHandler = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  const contextValue = {
    user: user,
    signUp: signUpHandler,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
