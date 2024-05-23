import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Spinenr from "../components/Spinenr";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{from:location}} ></Navigate>;
  }
  if (loading) {
    return <Spinenr></Spinenr>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
