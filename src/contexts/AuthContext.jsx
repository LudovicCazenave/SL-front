import React, { createContext, useState, useEffect } from "react";
import { authentificationUser } from "../api/api.js";

// Create the authentication context to share the auth state across the app
export const AuthContext = createContext();

// AuthProvider component wraps parts of the app that need access to authentication data
export function AuthProvider({ children }) {
  // Initialize authentication state with default values
  const [authenticated, setAuthenticated] = useState({
    isAuthenticated: false,
    userId: null,
  });

  // When the component mounts, verify the user's authentication status
  useEffect(() => {
    async function verifyToken() {
      const isAuth = await authentificationUser(); // Call API to verify user token
      setAuthenticated(isAuth); // Update auth state with the result from the API
    }
    verifyToken();
  }, []);

  // If the authentication state is null, show a loading indicator
  if (authenticated === null) {
    return <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>;
  }

  // Provide the authentication state and its updater to the rest of the app
  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}