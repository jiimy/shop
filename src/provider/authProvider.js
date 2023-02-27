import { getAuth } from "@firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { auth } from "../firebase";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getAuth);
  
  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((fbUser) => {
      console.log(`구독 실행`, fbUser);
      setUser(fbUser);
    });
    return subscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
