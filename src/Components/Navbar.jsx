import React, { useState } from "react";
import {
  Search,
  Menu,
  X,
  LogIn,
  CircleUserIcon,
  Library,
  Bookmark,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <ul className="hidden md:flex space-x-8 ml-12">
            {["Home", "My Library", "Explore", "About Us"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "")}`}
                  onClick={() => {
                    setMenu(item.toLowerCase());
                    window.scrollTo(0, 0);
                  }}
                  className={`text-sm font-medium text-gray-300 hover:text-white transition duration-300 ${
                    menu === item.toLowerCase() ? "border-b-2 border-blue-400" : ""
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="w-64 px-4 py-2 rounded-full text-sm bg-blue-800/40 text-white placeholder:text-blue-300/60 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-blue-300" />
            </div>
            <Link to="/authpage">
              <button className="flex items-center px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-md hover:shadow-lg transition-all">
                <CircleUserIcon className="h-5 w-5 mr-2" />
                Sign In
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-blue-300 hover:text-white transition"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-900/95 backdrop-blur-sm border-t border-blue-800 shadow-xl animate-slideDown">
          <div className="px-4 py-6 space-y-4">
            {["Home", "My Library", "Explore", "About Us"].map((item) => (
              <Link
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "")}`}
                className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-blue-800/50 hover:text-white transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full px-4 py-2 rounded-lg bg-blue-800/50 placeholder-blue-300/70 border border-blue-700 text-white focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-blue-300" />
            </div>

            <Link to="/authpage" className="block mt-4">
              <button className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300">
                <LogIn className="h-5 w-5 mr-2" />
                Sign In
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
