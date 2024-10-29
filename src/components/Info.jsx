import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

function Info({ data }) {
  const { icon_num, summary, temperature } = data;
  const {units} = useContext(WeatherContext);

  const day = new Intl.DateTimeFormat(navigator.language, {
    weekday: 'long'
  }).format(new Date())

  const {place} = useContext(WeatherContext);

  function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <div className="info">
      <div>
        <img className="weather-icon" src={`/weather_icons/set03/big/${icon_num}.png`} alt="current weather icon"/>
        <h1 className="day-name">{summary}</h1>
      </div>
      <div>
        <p className="city-name"><b>{capitalize(place.name)}</b>, {place.country}</p>
        <h1 className="day-name">{day}</h1>
        <h1 className="temperature">{Math.round(temperature)}{units.temperature}</h1>
      </div>
    </div>
  )
}

export default Info