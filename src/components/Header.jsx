import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar bg-cyan-800 shadow-sm text-white p-4">
        <div className="flex-1">
          <a
            className="cursor-pointer hover:bg-cyan-900 transition p-2 rounded-lg btn-ghost text-xl"
            onClick={() => navigate("/")}
          >
            Job Finder
          </a>
        </div>
        <div className="flex-none">
          <button
            className="btn bg-transparent ms-2 text-white"
            onClick={() => navigate("/saved-jobs")}
          >
            Saved Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
