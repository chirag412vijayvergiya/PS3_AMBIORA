import { Navigate } from "react-router-dom";
import { useUser } from "./components/context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, isAuthenticated, loading } = useUser();

  if (loading) return <div>Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
