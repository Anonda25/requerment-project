import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast from "react-hot-toast";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const UserRegister = (email, password, Name )=>{
    
    alert("Successfully created!");
    toast.success('successfully creact')
    return createUserWithEmailAndPassword(auth, email, password, Name)
  }

const UserLogin = ( email , password)=>{
  return signInWithEmailAndPassword(auth, email, password);
}

const userSignOut = ()=>{
 return signOut(auth)
}


  const authInfo = {
   
    user,
    setUser,
    UserRegister,
    UserLogin,
    userSignOut,
  };

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth , (correntUser)=>{
      if(correntUser){
      setUser(correntUser)
      }
      else{
        setUser(null)
      }
    })
    return()=>{
      unsubcribe()
    }
  },[])
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
