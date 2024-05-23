import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Spinenr from "../components/Spinenr";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Spinenr></Spinenr>;
  }
  if (user && isAdmin) {
    return children;
  }
  return (
    <Navigate to="/login" state={location?.pathname} replace={true}></Navigate>
  );
};

export default AdminRoute;
