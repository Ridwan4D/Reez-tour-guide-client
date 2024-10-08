import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import PropType from "prop-types";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (isLoading || isAdminLoading) {
    return (
      <div className="w-full h-[60vh] flex justify-center items-center text-4xl">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};
AdminRoute.propTypes = {
  children: PropType.node,
};
export default AdminRoute;
