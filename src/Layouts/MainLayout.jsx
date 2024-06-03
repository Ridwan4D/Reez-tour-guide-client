import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* navbar */}
      <Nav />
      {/* outlets */}
      <Outlet />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
