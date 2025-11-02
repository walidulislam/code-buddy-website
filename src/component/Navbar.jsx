import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "/logo.png";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);

  const handelLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("LogOut Successful..➜]");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-4 md:px-10 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-35 p-2 space-y-1 shadow font-semibold"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 border-1 border-blue-200" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 border-1 border-blue-200" : ""
                  }
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img className="w-11" src={logoImg} alt="" />
            <h2 className="font-bold text-lg md:text-xl pl-2 hidden md:block">
              Code<span className="text-[#2353ce]">Buddy</span>
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-1 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 border-1 border-blue-200" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 border-1 border-blue-200" : ""
                }
              >
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {user ? (
            <div className="flex items-center">
              <div className="relative group">
                <img
                  className="h-12 w-12 mx-auto rounded-full border-gray-300 border-2 shadow-md shadow-purple-800 "
                  src={
                    user.photoURL || "https://avatar.iran.liara.run/public/3"
                  }
                />
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-gray-800 text-white text-md text-nowrap font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg">
                  {user.displayName}
                </div>
              </div>
              <button
                onClick={handelLogOut}
                className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:from-[#ec612f] hover:to-[#f19736] text-white ml-3"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="btn  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:from-[#ec612f] hover:to-[#f19736] text-white"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:from-[#ec612f] hover:to-[#f19736] text-white"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
