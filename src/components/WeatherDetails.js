export default function WeatherDetails({ description, humidity, wind }) {
  return (
    <div>
      <p className="text-transform: capitalize">{description}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind: {wind} km/h</p>
    </div>
  );
}
