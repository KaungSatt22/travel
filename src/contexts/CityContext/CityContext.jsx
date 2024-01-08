import { useState } from "react";
import { createContext } from "react";

export const CityContext = createContext();

const initialState = [
  {
    cityName: "Yangon",
    country: "Myanmar",
    emoji: "MM",
    date: "2024-01-04T15:43:00.364Z",
    notes: "Home town",
    position: {
      lat: 21.916222,
      lng: 95.955971,
    },
    id: 1,
  },
  {
    cityName: "Bangkok",
    country: "Thailand",
    emoji: "TH",
    date: "2024-04-01T15:43:00.364Z",
    notes: "My favorite city so far!",
    position: {
      lat: 13.756331,
      lng: 100.501762,
    },
    id: 73930385,
  },
  {
    cityName: "Singapore",
    country: "Singapore",
    emoji: "SG",
    date: "2024-08-01T15:43:00.364Z",
    notes: "",
    position: {
      lat: 1.28944,
      lng: 103.849983,
    },
    id: 17806751,
  },
  {
    cityName: "Loikaw",
    country: "Myanmar",
    emoji: "MM",
    date: "2024-01-02T16:25:34.000Z",
    notes: "hhhh",
    position: {
      lat: 19.766703551716976,
      lng: 97.18505859375001,
    },
    id: "1e3998f8-2f2e-48a4-a17b-8b034b3a328e",
  },
];

export const CityContextProvider = ({ children }) => {
  const [data, setData] = useState(initialState);
  const [selected, setSelected] = useState("Yangon");

  const [geo, setGeo] = useState({
    lat: 21.916222,
    lng: 95.955971,
  });
  const handleGeo = (obj) => {
    setGeo(obj);
  };
  const handleData = (newData) => {
    setData([...data, newData]);
  };
  const handleSelected = (city) => {
    setSelected(city);
  };
  const handleDeletebyId = (id) => {
    setData((prev) => prev.filter((data) => data.id !== id));
  };
  return (
    <CityContext.Provider
      value={{
        data,
        geo,
        handleGeo,
        handleData,
        handleSelected,
        selected,
        handleDeletebyId,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};
