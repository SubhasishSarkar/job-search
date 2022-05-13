import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("myjob_auth"));
    auth?.token !== localData?.token &&
      localStorage.setItem("myjob_auth", JSON.stringify(auth));

    return () => {
      localStorage.setItem("myjob_auth", JSON.stringify({}));
    };
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
