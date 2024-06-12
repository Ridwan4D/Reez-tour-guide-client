import { CgProfile } from "react-icons/cg";
import { FaClipboardList } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { LuPackagePlus } from "react-icons/lu";
import {
  MdAssignmentTurnedIn,
  MdEditCalendar,
  MdOutlineLogout,
} from "react-icons/md";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useGuide from "../hooks/useGuide";

const DashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isGuide] = useGuide();
  // console.log(isAdmin);
  // console.log(isGuide);

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };
  return (
    <div className="flex">
      <div
        className="w-1/4 md:w-auto md:min-h-screen bg-[#10b981]"
        id="sideBar"
      >
        <ul className="menu p-0 md:p-4 font-medium text-[#151515] font-cinzel text-xs md:text-lg space-y-1">
          <li>
            <NavLink to="/dashboard/profile" className="p-0 pt-1">
              <CgProfile />
              My Profile
            </NavLink>
          </li>
          {isGuide && (
            <>
              <li>
                <NavLink to="/dashboard/assignedTour" className="p-0 pt-1">
                  <MdAssignmentTurnedIn />
                  My Assigned Tours
                </NavLink>
              </li>
            </>
          )}
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/addPackage" className="p-0 pt-1">
                  <LuPackagePlus />
                  Add Package
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers" className="p-0 pt-1">
                  <HiUserGroup />
                  All users
                </NavLink>
              </li>
            </>
          )}

          {!isAdmin && !isGuide && (
            <>
              <li>
                <NavLink to="/dashboard/bookings" className="p-0 pt-1">
                  <MdEditCalendar />
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/wishList" className="p-0 pt-1">
                  <FaClipboardList />
                  My WishList
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/requestAdmin" className="p-0 pt-1" >
                  <FaCodePullRequest />
                  Request to Admin
                </NavLink>
              </li>
            </>
          )}

          {/* sheared item for all */}
          <hr className="border mt-10" />
          <li>
            <NavLink to="/" className="p-0 pt-1">Home</NavLink>
          </li>
          <li>
            <button onClick={handleLogout} className="p-0 pt-1">
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
