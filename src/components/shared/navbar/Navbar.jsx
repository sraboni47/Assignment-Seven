import React from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div>
          <img src="/images/logo.png" className="h-6 sm:h-8" />
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-3">
          {/* HOME */}
          <Link to="/">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium cursor-pointer ${
                location.pathname === "/"
                  ? "bg-[#244D3F] text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <img src="/images/Vector (2).png" className="h-4 w-4" />
              Home
            </div>
          </Link>

          {/* TIMELINE */}
          <Link to="/timeline">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium cursor-pointer ${
                location.pathname === "/timeline"
                  ? "bg-[#244D3F] text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <img src="/images/Clock.png" className="h-4 w-4" />
              Timeline
            </div>
          </Link>

          {/* STATS */}
          <Link to="/stats">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium cursor-pointer ${
                location.pathname === "/stats"
                  ? "bg-[#244D3F] text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <img src="/images/ChartLine.png" className="h-4 w-4" />
              Stats
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
