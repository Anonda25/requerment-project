import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const UserRegister = (email, password, Name )=>{
    return createUserWithEmailAndPassword(auth, email, password, Name)
  }

const UserLogin = ( email , password)=>{
  return signInWithEmailAndPassword(auth, email, password);
}


  const [user, setUser] = useState({
    name: "Anonda Biswas",
  });
  const authInfo = {
    user,
    setUser,
    UserRegister,
    UserLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
