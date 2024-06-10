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
      <div className="md:w-auto md:min-h-screen bg-[#10b981]" id="sideBar">
        <ul className="menu p-4 font-medium text-[#151515] font-cinzel text-lg space-y-1">
          <li>
            <NavLink to="/dashboard/profile">
              <CgProfile />
              My Profile
            </NavLink>
          </li>
          {isGuide && (
            <>
              <li>
                <NavLink to="/dashboard/assignedTour">
                  <MdAssignmentTurnedIn />
                  My Assigned Tours
                </NavLink>
              </li>
            </>
          )}
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/addPackage">
                  <LuPackagePlus />
                  Add Package
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">
                  <HiUserGroup />
                  All users
                </NavLink>
              </li>
            </>
          )}

          {!isAdmin && !isGuide && (
            <>
              <li>
                <NavLink to="/dashboard/bookings">
                  <MdEditCalendar />
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/wishList">
                  <FaClipboardList />
                  My WishList
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/requestAdmin">
                  <FaCodePullRequest />
                  Request to Admin
                </NavLink>
              </li>
            </>
          )}

          {/* sheared item for all */}
          <hr className="border mt-10" />
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>
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
