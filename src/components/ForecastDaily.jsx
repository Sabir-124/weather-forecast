import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

function ForecastDaily({data}) {
  const {day, icon, temperature_min, temperature_max, precipitation, wind} = data;
  const {units} = useContext(WeatherContext);

  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    }).format(new Date())
  }
  
  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit'
    }).format(new Date(day))
  };

  if (weather_date.day === now_date.day) {
    weather_date.day = 'Today'
  } 

  return (
    <div className="forecast-hourly">
      <div className="day">{weather_date.day}</div>
      <div className="icon-temp">
        <div className="weather-icons">
          <img className="we-icon" src={`/weather-forecast/weather_icons/set03/big/${icon}.png`} alt="weather icon"/>
        </div>
        <div className="temp">{Math.round(temperature_max)}{units.temperature}</div>
        <div className="temp">{Math.round(temperature_min)}{units.temperature}</div>
      </div>
      <div className="wind">
        <img className="wind-icon" src="/weather-forecast/logos/wind.png" alt="wind icon"/>
        <div>{Math.round(wind.speed)}{units.wind_speed}</div>
      </div>
      <div className="precipitation">{Math.round(precipitation.total)} {units.precipitation}</div>
    </div>
  )
}

export default ForecastDaily