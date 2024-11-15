import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaClipboardList } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { LuPackagePlus } from "react-icons/lu";
import {
  MdAssignmentTurnedIn,
  MdEditCalendar,
  MdOutlineLogout,
  MdMenu,
} from "react-icons/md";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useGuide from "../hooks/useGuide";
import { TbPackages } from "react-icons/tb";

const DashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isGuide] = useGuide();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row p-2 md:p-0">
      <div className="md:hidden flex justify-between items-center bg-slate-400 p-4">
        <h1 className="text-white text-lg">Dashboard</h1>
        <button onClick={toggleSidebar}>
          <MdMenu className="text-white text-2xl" />
        </button>
      </div>
      <div
        className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:w-auto md:min-h-screen bg-slate-400 transition-transform duration-300 ease-in-out z-50`}
        id="sideBar"
      >
        <ul className="menu p-4 font-medium text-[#151515] font-cinzel text-xs md:text-lg space-y-1">
          <li>
            <NavLink to="/dashboard/profile" className="p-0 pt-1" onClick={closeSidebar}>
              <CgProfile />
              My Profile
            </NavLink>
          </li>
          {isGuide && (
            <>
              <li>
                <NavLink to="/dashboard/assignedTour" className="p-0 pt-1" onClick={closeSidebar}>
                  <MdAssignmentTurnedIn />
                  My Assigned Tours
                </NavLink>
              </li>
            </>
          )}
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/addPackage" className="p-0 pt-1" onClick={closeSidebar}>
                  <LuPackagePlus />
                  Add Package
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers" className="p-0 pt-1" onClick={closeSidebar}>
                  <HiUserGroup />
                  Manage users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/managePackages" className="p-0 pt-1" onClick={closeSidebar}>
                  <TbPackages />
                  Manage Packages
                </NavLink>
              </li>
            </>
          )}

          {!isAdmin && !isGuide && (
            <>
              <li>
                <NavLink to="/dashboard/bookings" className="p-0 pt-1" onClick={closeSidebar}>
                  <MdEditCalendar />
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/wishList" className="p-0 pt-1" onClick={closeSidebar}>
                  <FaClipboardList />
                  My WishList
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/requestAdmin" className="p-0 pt-1" onClick={closeSidebar}>
                  <FaCodePullRequest />
                  Request to Admin
                </NavLink>
              </li>
            </>
          )}

          {/* shared item for all */}
          <hr className="border mt-10" />
          <li>
            <NavLink to="/" className="p-0 pt-1" onClick={closeSidebar}>
              Home
            </NavLink>
          </li>
          <li>
            <button onClick={() => { handleLogout(); closeSidebar(); }} className="p-0 pt-1">
              <MdOutlineLogout />
              Logout
            </button>
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
