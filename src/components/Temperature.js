import React, { useState, useEffect } from "react";

export default function Temperature({ originalTemp }) {
  let [displayTemp, setDisplayTemp] = useState(originalTemp);

  useEffect(() => {
    setDisplayTemp(originalTemp);
  }, [originalTemp]);

  function showFahrenheit(event) {
    event.preventDefault();
    if (originalTemp !== null) {
      setDisplayTemp(Math.round((originalTemp * 9) / 5 + 32));
    }
  }

  function showCelsius(event) {
    event.preventDefault();
    setDisplayTemp(originalTemp);
  }

  return (
    <div className="flex space-x-1 text-xl text-white font-bold">
      <h2 className="font-bold text-7xl">{displayTemp}</h2>
      <a
        href="/"
        className="hover:text-white hover:underline cursor-pointer"
        onClick={showCelsius}
      >
        °C
      </a>
      <span>|</span>
      <a
        href="/"
        className="hover:text-white hover:underline cursor-pointer"
        onClick={showFahrenheit}
      >
        °F
      </a>
    </div>
  );
}
