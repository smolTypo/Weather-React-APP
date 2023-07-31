import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import axios from "axios";
import CurrentWeather from "./components/CurrentWeather";
import "./App.css";
import ForecastList from "./components/ForecastList";

const API_KEY = "5f472b7acba333cd8a035ea85a0d4d4c";
const UNITS = "metric";
const BASE_API_URL = `https://api.openweathermap.org/data/2.5/weather`;

export default function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [searchValue, setSearchValue] = useState("Tampa");

  useEffect(() => {
    fetchCurrentWeather();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const fetchCurrentWeather = async () => {
    const url =
      BASE_API_URL + `?q=${searchValue}&appid=${API_KEY}&units=${UNITS}`;
    const weatherResponse = await axios.get(url);
    console.log(weatherResponse);
    setCurrentWeather({
      city: weatherResponse.data.name,
      coordinates: weatherResponse.data.coord,
      timezone: weatherResponse.data.timezone,
      temperature: Math.round(weatherResponse.data.main.temp),
      humidity: weatherResponse.data.main.humidity,
      description: weatherResponse.data.weather[0].description,
      wind: weatherResponse.data.wind.speed,
      icon: weatherResponse.data.weather[0].icon,
    });

    fetchForecast(weatherResponse.data.coord);
  };

  const fetchForecast = async (coordinates) => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

    const forecastResponse = await axios.get(apiUrl);
    console.log(forecastResponse);
    setForecast(forecastResponse.data.daily);
  };

  return (
    <div className="container mx-auto">
      <div className="container max-w-xl mt-40">
        <div className="rounded-xl border-slate-200 border-2 p-10 shadow-sm bg-blue-500 text-white tracking-wider">
          <SearchForm
            onChange={handleChange}
            searchValue={searchValue}
            onSubmit={fetchCurrentWeather}
          />
          {currentWeather && <CurrentWeather weatherData={currentWeather} />}
          <ForecastList forecast={forecast} />
        </div>
      </div>
    </div>
  );
}
