import './App.css';
import {WeatherProvider} from './components/contextWeather/WeatherContext';
import WeatherApp from './components/weatherApp/WeatherApp';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <WeatherApp />
      </WeatherProvider>
    </div>
  );
}

export default App;
