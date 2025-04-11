import React, { createContext, useState, useEffect } from "react";
import { authentificationUser } from "../api/api.js";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    async function verifyToken() {
      const isAuth = await authentificationUser();
      setAuthenticated(isAuth);
    }
    verifyToken();
  }, []);

  if (authenticated === null) {
    return <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}