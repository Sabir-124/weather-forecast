import CurrentWeather from "./CurrentWeather"
import Forecast from "./Forecast"
import { useContext } from "react"
import WeatherContext from "../context/WeatherContext"
import Loader from "./Loader"

function Body() {
  const { loading, currentWeather, dailyForecast, hourlyForecast } = useContext(WeatherContext);

  return (
    <div className="body">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather data={currentWeather}/>
          <Forecast title={'Hourly Forecast'} type={'Hourly'} data={hourlyForecast} />
          <Forecast title={'Daily Forecast'} type={'Daily'} data={dailyForecast}/>
        </>
      )}
    </div>
  )
}

export default Body;