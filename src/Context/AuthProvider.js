import { Spin } from "antd";
import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../components/firebase/config";

export const AuthContext = createContext();

function AuthProvider({children}) {
 
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const unSubprise = auth.onAuthStateChanged((users) => {
      if (users) {
        const { displayName, email, uid, photoURL } = users;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        history.push("/");
      } else { 
        setIsLoading(false);
        history.push('/login');
      }
      console.log(users);
    });

    //cleanup
    return () => {
      unSubprise();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={{user}}>
      { isLoading ? <Spin></Spin> : children }
    </AuthContext.Provider>
  );

}

export default AuthProvider;
