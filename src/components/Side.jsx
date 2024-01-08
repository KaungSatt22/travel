import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import AppNav from "./AppNav";

const Side = () => {
  return (
    <div className="w-[50%] bg-[#F9F3CC] h-full overflow-y-scroll scroll-smooth no-scrollbar">
      <Logo />
      <AppNav />
      <Outlet />
    </div>
  );
};

export default Side;
