import React from "react";
import { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import AuthContext from "../Context/Auth-context";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  // const navigate = useNavigate();
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else if (isLoggedIn) {
    return children;
  }
};

export default ProtectedRoute;
