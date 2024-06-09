import { CgProfile } from "react-icons/cg";
import { FaClipboardList } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { LuPackagePlus } from "react-icons/lu";
import { MdAssignmentTurnedIn, MdEditCalendar } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const isAdmin = true;
  const guide = false;
  const isUser = false;
  return (
    <div className="flex">
      <div className="md:w-auto md:min-h-screen bg-[#10b981]" id="sideBar">
        <ul className="menu p-4 font-medium text-[#151515] font-cinzel text-lg space-y-1">
          <li>
            <NavLink to="/dashboard">
              <CgProfile />
              My Profile
            </NavLink>
          </li>
          {guide && (
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
                <NavLink to="/dashboard/addItems">
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

          {isUser && (
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
        </ul>
      </div>
      <div className="flex-1 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
