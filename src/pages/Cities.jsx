import React from "react";
import useCity from "../hooks/useCity";

const Cities = () => {
  const { data, handleGeo, selected, handleSelected, handleDeletebyId } =
    useCity();
  let datFormat = (d) => {
    const isoDate = d;
    const date = new Date(isoDate);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };
  const onClickHandler = (city) => {
    handleGeo(city.position);
    handleSelected(city.cityName);
  };

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
          <p className="text-sm" onClick={() => handleDeletebyId(city.id)}>
            ❌
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cities;
