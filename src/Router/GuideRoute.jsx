import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useGuide from "../hooks/useGuide";
import PropType from "prop-types";

const GuideRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const [isGuide, isGuideLoading] = useGuide();
  const location = useLocation();
  if (isLoading || isGuideLoading) {
    return (
      <div className="w-full h-[60vh] flex justify-center items-center text-4xl">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (user && isGuide) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};
GuideRoute.propTypes = {
  children: PropType.node,
};
export default GuideRoute;
