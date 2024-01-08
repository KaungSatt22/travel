import { useContext } from "react";
import { GeoContext } from "../contexts/CityContext/GeoContext";

const useGeo = () => {
  const data = useContext(GeoContext);
  return data;
};

export default useGeo;
