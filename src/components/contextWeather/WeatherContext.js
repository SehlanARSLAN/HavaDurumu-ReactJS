import {createContext, useEffect, useState} from 'react'
import axios from 'axios'

const WeatherContext = createContext()



const WeatherProvider = ({children}) => {
    const [weather, setWeather] = useState([])
    const [city, setCity] = useState('Adana')
    const [error, setError] = useState(null);

    const fetchWeatherData = async (city) => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`

        try{
            const response = await axios.get(url);
            setWeather(response.data.list.slice(0, 7));
            setError(null);
        }catch(error){
            console.error("Error fetching weather data:", error.message);
            setError("Hava durumu verileri alınamadı.");
            setWeather([]);
        }
    };
    useEffect(() => {
        fetchWeatherData(city);
      }, [city]);
    
    return (
      <WeatherContext.Provider
        value={{
          weather,
          setCity,
          error,
        }}
      >
        {children}
      </WeatherContext.Provider>
    );
}

export {WeatherProvider, WeatherContext};