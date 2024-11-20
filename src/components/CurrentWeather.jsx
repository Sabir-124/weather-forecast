import "../styles/currentWeather.css";
import Info from "./Info";
import OtherInfo from "./OtherInfo";

function CurrentWeather({ data }) {
  const { icon_num } = data;

  const classMap = {
    2: "sunny",
    3: "light-cloudy",
    4: "light-cloudy",
    5: "medium-cloudy",
    8: "medium-cloudy",
    9: "medium-cloudy",
    6: "dark-cloudy",
    7: "dark-cloudy",
    10: "rainy",
    12: "rainy",
    11: "heavy-rain",
    14: "heavy-rain",
    23: "heavy-rain",
    13: "rainy-sunny",
    24: "rainy-sunny",
    15: "storm-sunny",
    16: "snowy",
    18: "snowy",
    17: "heavy-snow",
    25: "heavy-snow",
    19: "sunny-snowy",
    20: "rainy-snowy",
    21: "rainy-snowy",
    22: "rainy-snowy-sunny",
    26: "night",
    27: "night",
    28: "night-cloudy",
    29: "night-cloudy",
    30: "night-dark-cloudy",
    31: "night-dark-cloudy",
    32: "night-rainy",
    36: "night-rainy",
    33: "night-storm",
    34: "night-snow",
    35: "night-snow-rainy",
  };

  const className = classMap[icon_num] || "default-weather";

  return (
    <div className="current-weather-info">
      <Info data={data} className={className}/>
      <OtherInfo data={data} className={className}/>
    </div>
  );
}

export default CurrentWeather;
