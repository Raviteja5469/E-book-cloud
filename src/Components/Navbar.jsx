import React, { useState } from "react";
import {
  Search,
  CircleUserIcon,
  Library,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <Library className="h-8 w-8 text-blue-300 group-hover:text-white transition-colors duration-300" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-pulse" />
            </div>
            <div className="ml-2 leading-tight">
              <h1 className="text-white font-bold text-lg group-hover:text-blue-100">
                EduLibrary
              </h1>
              <p className="text-blue-300 text-xs">Digital Knowledge Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="flex space-x-8 ml-auto">
            {["Home", "My Library", "Explore", "About Us"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${
                    item === "Home"
                      ? ""
                      : item.toLowerCase().replace(/\s+/g, "")
                  }`}
                  onClick={() => {
                    setMenu(item.toLowerCase());
                    window.scrollTo(0, 0);
                  }}
                  className={`text-sm font-medium text-gray-300 hover:text-white transition duration-300 ${
                    menu === item.toLowerCase()
                      ? "border-b-2 border-blue-400"
                      : ""
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Link to="/authpage">
              <button className="flex items-center ml-5 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-md hover:shadow-lg transition-all">
                <CircleUserIcon className="h-5 w-5 mr-2" />
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
