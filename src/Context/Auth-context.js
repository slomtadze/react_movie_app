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

  const signUpHandler = async (email, password, name, navigate, setError) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("..");
      })
      .catch((error) => {
        setError(error.code);
      });
    try {
      setDoc(doc(db, "users", email), {
        name: name,
        favorites: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async (email, password, navigate, setError) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("..");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const logoutHandler = () => {
    signOut(auth);
    setUser(null);
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
