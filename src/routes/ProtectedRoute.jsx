import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext.jsx';

function ProtectedRoute({ children }) {
  // Retrieve the authentication state from the context.
  const { authenticated } = useContext(AuthContext);

  // If the user is not authenticated, redirect to the homepage.
  if (!authenticated) {
    return <Navigate to="/accueil" replace />;
  }

  // Otherwise, render the protected children.
  return children;
}

export default ProtectedRoute;