import React from "react";
import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <div className="flex justify-center items-center my-10 gap-10">
      <div>
        <NavLink
          to="cities"
          className={({ isActive }) =>
            isActive
              ? "bg-red-400 px-5 py-3 rounded-lg text-white"
              : "px-5 py-3"
          }
        >
          Cities
        </NavLink>
      </div>
      <div>
        <NavLink
          to="country"
          className={({ isActive }) =>
            isActive
              ? "bg-red-400 px-5 py-3 rounded-lg text-white"
              : "px-5 py-3"
          }
        >
          Country
        </NavLink>
      </div>
    </div>
  );
};

export default AppNav;
