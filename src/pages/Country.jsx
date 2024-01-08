import React from "react";
import useCity from "../hooks/useCity";

const Country = () => {
  const { data } = useCity();
  const dupCity = data.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <div className="grid grid-cols-2">
      {dupCity.map((country) => (
        <div
          key={country.emoji}
          className="w-[75%] mx-auto mt-5 bg-slate-700 p-5 text-white text-center space-y-3"
        >
          <p className="text-xs">{country.emoji}</p>
          <p className="">{country.country}</p>
        </div>
      ))}
    </div>
  );
};

export default Country;
