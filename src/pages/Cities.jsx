import React from "react";
import { toast } from "react-toastify";
import { format } from "date-fns";

import useCity from "../hooks/useCity";
const Cities = () => {
  const { data, handleGeo, selected, handleSelected, handleDeletebyId } =
    useCity();
  let datFormat = (d) => {
    return format(d, "MMMM dd,yyyy");
  };

  const onClickHandler = (city) => {
    handleGeo(city.position);
    handleSelected(city.cityName);
  };
  const deleteHandler = (city) => {
    handleDeletebyId(city.id);
    if (city.cityName === selected) {
      handleSelected(data.filter((item) => item.id !== city.id)[0]?.cityName);
    }
    toast.error("Removed");
  };
  if (data?.length === 0) {
    return (
      <p className="mt-20 text-center p-3 bg-red-300 max-w-lg mx-auto text-white rounded-lg text-xl">
        Click To Map And Add Some Place 🚀
      </p>
    );
  }
  return (
    <div>
      {data.map((city) => (
        <div
          key={city.id}
          className={`flex justify-between items-center p-5 bg-[#D7E5CA] my-5 rounded-lg w-[75%] mx-auto cursor-pointer ${
            selected === city.cityName ? "border-2 border-blue-500" : ""
          }`}
        >
          <div onClick={() => onClickHandler(city)} className="flex-1">
            <p>{city.emoji}</p>
            <p>{city.cityName}</p>
            <p>{datFormat(city.date)}</p>
          </div>
          <p className="text-sm" onClick={() => deleteHandler(city)}>
            ❌
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cities;
