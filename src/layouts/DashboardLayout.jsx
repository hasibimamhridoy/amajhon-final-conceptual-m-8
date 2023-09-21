import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {

  const location = useLocation()

  console.log(location);

  return (
    <div className="flex pl-5">
      <div className="w-[20%]  text-center shadow-md">
        <ul className=" space-y-3 py-5">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `${location.pathname === '/dashboard' ? 'bg-green-400' : ""}` : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/editProfile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Edit Profile
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="w-[80%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
