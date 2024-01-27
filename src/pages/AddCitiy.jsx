import { useEffect } from "react";
import useGeo from "../hooks/useGeo";
import { useState } from "react";
import Loading from "../components/Loading";
import Form from "../components/Form";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const AddCity = () => {
  const { lat, lng } = useGeo();
  const [city, setCity] = useState("");
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleCity = (value) => {
    setCity(value);
  };
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
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : !city ? (
        <p className="text-xl mt-32 bg-red-300 px-4 py-5 mx-3 rounded-lg text-center text-white">
          👋 That doesn't seem to be a city. Click somewhere else 😉
        </p>
      ) : (
        <Form city={city} onCity={handleCity} location={location} />
      )}
    </div>
  );
};

export default AddCity;
