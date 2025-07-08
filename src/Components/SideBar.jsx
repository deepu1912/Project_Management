import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const { pathname } = useLocation();
  const links = ["Dashboard", "Spaces", "Projects", "Tasks"];

  return (
    <div className="mt-16 w-64 h-[calc(100vh-64px)] bg-white border-r shadow-sm flex flex-col">
      <nav className="flex-1 flex flex-col gap-2 px-4 py-6">
        {links.map((label) => {
          const to = `/${label.toLowerCase()}`;
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`block h-10 pl-4 flex items-center rounded-lg text-sm font-medium ${
                active
                  ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t">
        <Link
          to="/settings"
          className={`block h-10 pl-4 flex items-center rounded-lg text-sm font-medium w-full ${
            pathname === "/settings"
              ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
