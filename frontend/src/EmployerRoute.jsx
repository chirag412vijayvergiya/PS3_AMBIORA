import { Navigate } from "react-router-dom";
import { useUser } from "./components/context/AuthContext";

const EmployerRoute = ({ children }) => {
  const { user, isAuthenticated, loading } = useUser();

  if (loading) return <div>Loading...</div>;
  return isAuthenticated && user?.data?.data?.role === "employer" ? (
    children
  ) : (
    <Navigate to="/home" replace />
  );
};

export default EmployerRoute;
