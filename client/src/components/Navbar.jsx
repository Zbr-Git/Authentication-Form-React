import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 px-4 py-2 text-white shadow-md">
      <ul className="flex space-x-4">
        {" "}
        {/* Navigation links on the left */}
        <li>
          <NavLink to="/" className="text-gray-300 hover:text-white">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="text-gray-300 hover:text-white">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" className="text-gray-300 hover:text-white">
            Category
          </NavLink>
        </li>
      </ul>
      
      <NavLink to="/">
        <svg
          className="h-8 w-8 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
          />
        </svg>
      </NavLink>
    </nav>
  );
};

export default Navbar;
