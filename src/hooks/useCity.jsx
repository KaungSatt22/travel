import { useContext } from "react";
import { CityContext } from "../contexts/CityContext/CityContext";

const useCity = () => {
  const data = useContext(CityContext);
  return data;
};

export default useCity;
