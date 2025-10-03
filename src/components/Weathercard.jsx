import React from "react";
import "./WeatherCard.css";

function WeatherCard({ weatherDetails }) {
  // Return null if no data yet
  if (!weatherDetails) return null;

  const { location, current } = weatherDetails;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>
          {location.name}, {location.country}
        </h2>
        <p>{current.condition.text}</p>
      </div>

      <div className="weather-main">
        <img
          src={current.condition.icon}
          alt={current.condition.text}
          className="weather-icon"
        />
        <h1>{current.temp_c}°C</h1>
      </div>

      <div className="weather-details">
        <div>
          <strong>Humidity:</strong> {current.humidity}%
        </div>
        <div>
          <strong>Wind:</strong> {current.wind_kph} km/h
        </div>
        <div>
          <strong>Feels like:</strong> {current.feelslike_c}°C
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
