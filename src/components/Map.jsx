import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import useCity from "../hooks/useCity";
import { useNavigate } from "react-router-dom";
import useGeo from "../hooks/useGeo";
const Map = () => {
  const { data, geo } = useCity();
  const { handleLat, handleLng } = useGeo();

  return (
    <div className="w-[50%] h-full relative">
      <MapContainer
        center={[geo.lat, geo.lng]}
        zoom={6}
        scrollWheelZoom={true}
        className="h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {data.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>{city.notes ? city.notes : "No Note Found"}</Popup>
          </Marker>
        ))}
        <ChangeCenter pos={[geo.lat, geo.lng]} />
        <SelectGeo handleLat={handleLat} handleLng={handleLng} />
      </MapContainer>
    </div>
  );
};
const ChangeCenter = ({ pos }) => {
  const map = useMap();
  map.setView(pos);
  return null;
};
const SelectGeo = ({ handleLat, handleLng }) => {
  const navigate = useNavigate();
  useMapEvent("click", (e) => {
    const { lat, lng } = e.latlng;
    handleLat(lat);
    handleLng(lng);
    navigate("/form");
  });
  return null;
};
export default Map;
