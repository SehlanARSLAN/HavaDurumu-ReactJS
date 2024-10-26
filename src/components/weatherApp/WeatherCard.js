import React from "react";
import "./weatherCard.css";

const WeatherCard = ({ day, icon, maxTemp, minTemp, isToday }) => {


  return (
    <div className={`weatherCard ${isToday ? "today" : ""}`}>
      <h3>{day}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt="Weather icon"
      />
      <p>
        {Math.round(maxTemp)}° / {Math.round(minTemp)}°
      </p>
    </div>
  );
};

export default WeatherCard;
