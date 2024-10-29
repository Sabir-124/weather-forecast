import ForecastDaily from "./ForecastDaily"
import ForecastHourly from "./ForecastHourly"
import '../styles/forecast.css';
import HorizontallyScroll from "./HorizontallyScroll";

function Forecast({ title, type, data }) {
  return (
    <div className="forecast">
      <div className="forecast-container">
        <h3>{title}</h3>
        <HorizontallyScroll className="widget-container">
          {data.map((singleData) => (
            <div>
              {
                type === 'Hourly' ?( <ForecastHourly data={singleData} />) : (<ForecastDaily data={singleData} />)
              }
            </div>
          ))}
        </HorizontallyScroll>
      </div>
    </div>
  )
}

export default Forecast