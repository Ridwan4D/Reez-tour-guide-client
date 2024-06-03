import { NavLink } from "react-router-dom";

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/community">Community</NavLink>
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
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#10b981] md:flex justify-between" id="navbar">
      <div className="navbar-start w-full md:w-auto flex-row-reverse justify-between">
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
            <img src="logo-white.png" alt="" width="50"/>
            <a href="#" className="text-xl font-bold">Reez <br />Tour Guide</a>
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
