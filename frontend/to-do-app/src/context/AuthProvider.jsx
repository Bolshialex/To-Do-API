import { useState, createContext, useEffect } from "react";

const AuthContext = createContext({});
const AUTH_STORAGE_KEY = "auth";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = sessionStorage.getItem(AUTH_STORAGE_KEY);
    return storedAuth ? JSON.parse(storedAuth) : null;
  });

  useEffect(() => {
    if (auth) {
      sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
    } else {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [auth]);

  const logout = () => {
    setAuth(null);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
