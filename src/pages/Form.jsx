import React from "react";
import GetDate from "../components/GetDate";
import { useEffect } from "react";
import useGeo from "../hooks/useGeo";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../components/Loading";
import useCity from "../hooks/useCity";
import { useNavigate } from "react-router-dom";

const dateISOstrinformat = (d) => {
  console.log(d);
  const date = new Date(d);
  const isoString = date.toISOString();
  return isoString;
};

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const Form = () => {
  const { handleData, handleSelected, handleGeo } = useCity();
  const { lat, lng } = useGeo();
  const [city, setCity] = useState("");
  const [note, setNote] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if ((!lat, !lng)) return;
    const fetchGeoData = async () => {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
      const data = await res.json();
      setLocation(data);
      setCity(data.city);
      setIsLoading(false);
    };
    fetchGeoData();
  }, [lat, lng]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      cityName: city,
      country: location.countryName,
      emoji: location.countryCode,
      date: dateISOstrinformat(startDate),
      notes: note,
      position: {
        lat: location.latitude,
        lng: location.longitude,
      },
      id: crypto.randomUUID(),
    };
    const postCites = () => {
      handleData(data);
    };
    if (city) {
      handleSelected(city);
      handleGeo({ lat: location.latitude, lng: location.longitude });
      postCites();
      setCity("");
      setNote("");
      setStartDate(new Date());

      navigate("/cities");
    }
  };
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : !location.city ? (
        <p className="text-xl mt-32 bg-red-300 px-4 py-5 mx-3 rounded-lg text-center text-white">
          👋 That doesn't seem to be a city. Click somewhere else 😉
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mx-5 w-[90%] gap-5 p-5 bg-[#D7E5CA] rounded-lg"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="city" className="text-lg">
              City Name
            </label>
            <input
              id="city"
              type="text"
              placeholder="City Name"
              className="outline-none px-3 py-3 "
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-lg">
              When will you go to {city}
            </label>
            <GetDate startDate={startDate} setStartDate={setStartDate} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg" htmlFor="note">
              Notes about your trip to {city}
            </label>
            <textarea
              id="note"
              placeholder="Enter Note"
              className="outline-none px-3 py-3"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <button className="bg-green-200 px-5 py-3 text-lg rounded-lg">
              Add
            </button>
            <NavLink
              to="/cities"
              className="bg-[#F9F3CC] px-5 py-3 text-lg rounded-lg"
            >
              &larr; Back
            </NavLink>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
