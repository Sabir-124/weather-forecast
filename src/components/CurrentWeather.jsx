import '../styles/currentWeather.css';
import Info from './Info';
import OtherInfo from './OtherInfo';

function CurrentWeather({data}) {

  return (
    <div className="current-weather-info">
      <Info data={data}/>
      <OtherInfo data={data}/>
    </div>
  )
}

export default CurrentWeather