import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className=" shadow-md py-2">
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
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
               <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favourites"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                }
              >
                Favourites
              </NavLink>
            </li>
            </ul>
          </div>
          <Link to={`/`}>
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favourites"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                }
              >
                Favourites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                }
              >
                Cart
              </NavLink>
            </li>
            
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn" to={`/login`}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
