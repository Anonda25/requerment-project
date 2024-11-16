import React, { useCallback, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetsRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
   return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivetsRoutes;
