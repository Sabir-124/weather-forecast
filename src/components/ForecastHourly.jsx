import { useContext } from 'react';
import '../styles/forecastHourly.css';
import WeatherContext from '../context/WeatherContext';

function ForecastHourly({data}) {
  const {date, icon, temperature, precipitation, wind} = data;
  const {units} = useContext(WeatherContext);

  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    }).format(new Date()),

    time: new Intl.DateTimeFormat(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(new Date().setMinutes(0)),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit'
    }).format(new Date(date)),
    
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(new Date(date).setMinutes(0)),
  };
  /*
  weather_date.day = 
    weather_date.day === now_date.day && 
    weather_date.time === now_date.time 
      ? 'Today' 
      : weather_date.time === '12:00'
      ? weather_date.day
      : '';*/
  if (weather_date.day === now_date.day && weather_date.time === now_date.time) {
    weather_date.day = 'Now'
  } else if (weather_date.time === '00:00') {
    weather_date.day = weather_date.day
  } else {
    weather_date.day = ''
  }

  return (
    <div className="forecast-hourly">
      <div className="day">{weather_date.day}</div>
      <div className="time">{weather_date.time}</div>
      <div className="icon-temp">
        <div className="weather-icons">
          <img className="we-icon" src={`/weather_icons/set03/big/${icon}.png`} alt='weather-icon'/>
        </div>
        <div className="temp">{Math.round(temperature)}{units.temperature}</div>
      </div>
      <div className="wind">
        <img className="wind-icon" src="/logos/wind.png" alt='wind icon'/>
        <div>{Math.round(wind.speed)}{units.wind_speed}</div>
      </div>
      <div className="precipitation">{Math.round(precipitation.total)} {units.precipitation}</div>
    </div>
  )
}

export default ForecastHourly