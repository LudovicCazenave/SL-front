import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext.jsx';

function ProtectedRoute({ children }) {

  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Navigate to="/accueil" replace />;
  }

  return children;
};

export default ProtectedRoute;
