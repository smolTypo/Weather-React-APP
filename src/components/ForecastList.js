import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastList({ forecast }) {
  forecast.length = 6;
  const forecastWithoutToday = removeCurrentDay(forecast);

  return (
    <div className="columns-5 flex-auto mt-4">
      {forecastWithoutToday.map((item, index) => (
        <ForecastItem key={index} item={item} />
      ))}
    </div>
  );
}

function ForecastItem({ item }) {
  const day = unixTimestampToDay(item.dt);
  const [weather] = item.weather;
  const { icon, description } = weather;
  const max = Math.round(item.temp.max);
  const min = Math.round(item.temp.min);

  console.log(item);
  return (
    <div className="text-center">
      {day}
      <WeatherIcon icon={icon} description={description} />
      <p className="text-xs">
        {max}°C | {min}°C
      </p>
    </div>
  );
}

function unixTimestampToDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

function removeCurrentDay(data) {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  let filteredData = data.filter((item) => {
    let itemDate = new Date(item.dt * 1000);
    itemDate.setHours(0, 0, 0, 0);

    return itemDate.getTime() !== today.getTime();
  });

  return filteredData;
}
