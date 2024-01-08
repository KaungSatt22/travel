import React from "react";
import Side from "../components/Side";
import Map from "../components/Map";

const AppLayout = () => {
  return (
    <div className=" w-full h-[100vh] flex justify-between overflow-hidden">
      <Side />
      <Map />
    </div>
  );
};

export default AppLayout;
