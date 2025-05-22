import { createContext, useState, useEffect } from "react";
import { authentificationUser } from "../api/api.js";
import Spinner from 'react-bootstrap/Spinner';
import Container from "react-bootstrap/Container";

// Create the authentication context to share the auth state across the app
export const AuthContext = createContext();

// AuthProvider component wraps parts of the app that need access to authentication data
export function AuthProvider({ children }) {
  // Initialize authentication state with default values
  const [authenticated, setAuthenticated] = useState(null);

  // When the component mounts, verify the user's authentication status
  useEffect(() => {
    async function verifyToken() {
      try {
        const isAuth = await authentificationUser(); // Call API to verify user token
        setAuthenticated(isAuth || { isAuthenticated: false, userId: null }); // Update auth state with the result from the API
      } catch (error) {
        console.error(error)
        setAuthenticated({ isAuthenticated: false, userId: null });
      }
      
    }
    verifyToken();
  }, []);

  // If the authentication state is null, show a loading indicator
  if (authenticated === null) {
    return (
      <Container className="text-center">
        <Spinner animation='border' role="status">
          <span className="visually-hidden">Chargement</span>
        </Spinner>
        <p>Chargement...</p>
      </Container> 
    );
  }

  // Provide the authentication state and its updater to the rest of the app
  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}