import { createContext, useContext, useState, useEffect } from "react";
import { login, onUserStateChanged, logout } from "../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login: login, logout: logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthcontext() {
  return useContext(AuthContext);
}
