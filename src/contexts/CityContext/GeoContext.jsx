import { useState } from "react";
import { createContext } from "react";

export const GeoContext = createContext();

export const GeoContextProvider = ({ children }) => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const handleLat = (data) => {
    setLat(data);
  };
  const handleLng = (data) => {
    setLng(data);
  };
  return (
    <GeoContext.Provider value={{ lat, lng, handleLat, handleLng }}>
      {children}
    </GeoContext.Provider>
  );
};
