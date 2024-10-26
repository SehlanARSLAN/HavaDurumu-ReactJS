import React, { useContext } from "react";
import { WeatherContext } from "../contextWeather/WeatherContext";

const cities = ["İstanbul", "Ankara", "İzmir", "Antalya", "Bursa", "Adana"];

const WeatherDropDown = () => {
  const { setCity } = useContext(WeatherContext);
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <select
      onChange={handleCityChange}
      className="cityDropdown"
    >
      {cities.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default WeatherDropDown;
