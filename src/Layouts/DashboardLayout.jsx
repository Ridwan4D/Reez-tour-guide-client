import { AiFillHome } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const isAdmin = false;
  return (
    <div className="flex">
      <div className="md:w-auto md:min-h-screen bg-[#10b981]" id="sideBar">
        <ul className="menu p-4 font-medium text-[#151515] font-cinzel text-lg space-y-1">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <AiFillHome />
                  Admin Home
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <AiFillHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/wishList">
                  <FaClipboardList />
                  My WishList
                </NavLink>
              </li>
            </>
          )}

          {/* sheared item for all */}
          <hr className="border mt-10" />
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
