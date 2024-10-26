import React, { useContext } from "react";
import { WeatherContext } from "../contextWeather/WeatherContext";
import WeatherCard from "./WeatherCard";
import WeatherDropDown from "./WeatherDropDown";


const WeatherApp = () => {
  const { weather, error } = useContext(WeatherContext);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weather || weather.length === 0) {
    return <div>Loading...</div>;
  }

  const dailyForecasts = [];
  for (let i = 0; i < weather.length; i += 8) {
    dailyForecasts.push(weather.slice(i, i + 8));
  }

  return (
    <div className="weatherApp">
      <WeatherDropDown />
      <div className="weatherAppCards">
        {dailyForecasts.slice(0, 7).map((dayData, index) => {
          const { max, min } = dayData.reduce(
            (acc, current) => {
              acc.max = Math.max(acc.max, current.main.temp_max);
              acc.min = Math.min(acc.min, current.main.temp_min);
              return acc;
            },
            { max: -Infinity, min: Infinity }
          );

          return (
            <WeatherCard
              key={index}
              day={new Date(dayData[0].dt * 1000).toLocaleDateString('tr-TR', { weekday: 'long' })}
              icon={dayData[0].weather[0].icon || '01d'}
              maxTemp={Math.round(max)}
              minTemp={Math.round(min)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeatherApp;
