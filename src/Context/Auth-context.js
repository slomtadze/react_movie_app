import React, { useState } from "react";

const AuthContext = React.createContext({
  //  name: "",
  idToken: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  //const [name, setName] = useState("");

  const isLoggedIn = !!token;

  const loginHandler = (token, name) => {
    setToken(token);
    // setName(name);
  };

  const logoutHandler = () => {
    setToken(null);
    //setName("");
  };

  const contextValue = {
    // name: name,
    idToken: token,
    isLoggedIn: isLoggedIn,
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
