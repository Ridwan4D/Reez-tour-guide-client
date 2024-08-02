import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Nav = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allPackages">Packages</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      {user ? (
        <li className="relative">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
            onClick={toggleDropdown}
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src={user.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-slate-700 text-white ${isDropdownOpen ? "block" : "hidden"
              } lg:absolute lg:right-0 lg:mt-0 lg:bg-black/50`}
            style={{
              position: isDropdownOpen && window.innerWidth < 1024 ? "fixed" : "absolute",
              top: isDropdownOpen && window.innerWidth < 1024 ? "50%" : "auto",
              left: isDropdownOpen && window.innerWidth < 1024 ? "50%" : "auto",
              transform: isDropdownOpen && window.innerWidth < 1024 ? "translate(-50%, -50%)" : "none"
            }}
          >
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
            <li>
              <Link to="/dashboard/profile">Dashboard</Link>
            </li>
          </ul>
        </li>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-[#10b981] md:flex justify-between mb-10" id="navbar">
      <div className="navbar-start w-full lg:w-auto flex-row-reverse justify-between">
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex space-x-1">
          <img src="logo-white.png" alt="Logo" width="50" />
          <a href="/" className="text-xl font-bold">
            Reez <br />
            Tour Guide
          </a>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex md:w-auto">
        <ul className="menu menu-horizontal px-1 text-xl text-white font-semibold">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
