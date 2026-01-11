import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Bookmark, Menu } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-cyan-800 text-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer text-xl font-bold tracking-wide hover:text-cyan-200 transition"
          >
            JobFinder
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-cyan-200" : "hover:text-cyan-200 transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-cyan-200" : "hover:text-cyan-200 transition"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/saved-jobs"
              className={({ isActive }) =>
                isActive ? "text-cyan-200" : "hover:text-cyan-200 transition"
              }
            >
              <div className="flex items-center gap-1">
                <Bookmark size={16} />
                Saved Jobs
              </div>
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-cyan-700 transition">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
