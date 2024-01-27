import { toast } from "react-toastify";

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GetDate from "../components/GetDate";
import useCity from "../hooks/useCity";

const dateISOstrinformat = (d) => {
  const date = new Date(d);
  const isoString = date.toISOString();
  return isoString;
};

const Form = ({ city, onCity, location }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [note, setNote] = useState("");
  const { handleData, handleSelected, handleGeo } = useCity();
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
    toast.success(`Added ${city} `);
    if (city) {
      handleSelected(city);
      handleGeo({ lat: location.latitude, lng: location.longitude });
      handleData(data);
      onCity("");
      setNote("");
      setStartDate(new Date());
      navigate("/cities");
    }
  };

  return (
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
          onChange={(e) => onCity(e.target.value)}
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
  );
};

export default Form;
