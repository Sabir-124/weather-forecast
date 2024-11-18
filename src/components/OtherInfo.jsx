import { useContext } from "react";
import EachInfo from "./EachInfo";
import WeatherContext from "../context/WeatherContext";

function OtherInfo({data}) {
  const { cloud_cover, feels_like, humidity, uv_index, visibility, wind } = data;
const {units} = useContext(WeatherContext);

  const otherInfos = [
    {
      id: 1,
      icon: '/weather-forecast/logos/cloud.png',
      name: 'Cloud Cover',
      value: Math.round(cloud_cover),
      unit: units.cloud_cover
    },
    {
      id: 2,
      icon: '/weather-forecast/logos/feels.png',
      name: 'Real feel',
      value: Math.round(feels_like),
      unit: units.temperature
    },
    {
      id: 3,
      icon: '/weather-forecast/logos/humidity.png',
      name: 'Humidity',
      value: Math.round(humidity),
      unit: units.humidity
    },
    {
      id: 4,
      icon: '/weather-forecast/logos/uv.png',
      name: 'UV Index',
      value: Math.round(uv_index),
      unit: units.uv_index
    },
    {
      id: 5,
      icon: '/weather-forecast/logos/visibility.png',
      name: 'Visibility',
      value: Math.round(visibility),
      unit: units.visibility
    },
    {
      id: 6,
      icon: '/weather-forecast/logos/wind.png',
      name: 'Wind speed',
      value: Math.round(wind.speed),
      unit: units.wind_speed
    },
  ]

  return (
    <div className="other-info">
      {otherInfos.map((info) => {
        return <EachInfo key={info.id} info={info}/>
      })}
    </div>
  )
}

export default OtherInfo