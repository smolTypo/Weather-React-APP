export default function WeatherIcon({
  icon,
  description,
  dimensions = { width: "40px", height: "40px" },
}) {
  return icon ? (
    <img
      src={`http://openweathermap.org/img/wn/${icon}.png`}
      alt={description}
      style={dimensions}
      className="mx-auto"
    />
  ) : null;
}
