import React from "react";
import DateComponent from "./DateTime";
import Temperature from "./Temperature";
import WeatherDetails from "./WeatherDetails";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather({ weatherData }) {
  const timezoneOffset = weatherData.timezone * 1000;
  const localTimestamp = new Date().getTime() + timezoneOffset;
  const localDate = new Date(localTimestamp);
  return (
    <div>
      <div className="col-start-1 mb-10 mt-2 text-transform: capitalize">
        <h1 id="city" className="font-bold text-3xl leading-8 mb-3">
          {weatherData.city}
        </h1>
        <DateComponent date={localDate} />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Temperature originalTemp={weatherData.temperature} />
        <WeatherIcon
          icon={weatherData.icon}
          description={weatherData.description}
          dimensions={{ width: "80px", height: "80px" }}
        />
        <WeatherDetails
          description={weatherData.description}
          humidity={weatherData.humidity}
          wind={weatherData.wind}
        />
      </div>
    </div>
  );
}
