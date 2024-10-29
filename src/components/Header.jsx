import '../styles/header.css';
import SettingOptions from './SettingOptions';
import { searchPlace } from '../data-API';
import { useContext, useState } from 'react';
import WeatherContext from '../context/WeatherContext';

const Header = () => {
  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const {setPlace} = useContext(WeatherContext);

  async function onSearch (e) {
    setText(e.target.value);
    const data = await searchPlace(e.target.value);
    setSearchResults(Array.isArray(data) ? data : []);
  }

  const changePlace = (place) => {
    setPlace(place);
    setText('');
  }

  return (
    <div className="header">
      <div className="title">
        <b>WeatherSearch</b>
      </div>
      <div className="searchPlace">
        <input className="search" type="text" placeholder="Search the city" onChange={onSearch} />
        <div className="icon">
          <img className="search-icon" src="/logos/search-icon.png" />
        </div>
        <div className={`output-search ${text.length === 0 ? 'hide' : 'show'}`}>
          <div className="search-results">
            {Array.isArray(searchResults) && searchResults.map((place) => (
              <div className='result' key={place.place_id} 
              onClick={() => changePlace(place)}>
                {place.name}, {place.adm_area1}, {place.country}
              </div>
            ))}
          </div>
        </div>
      </div>
      <SettingOptions />
    </div>
  )
}

export default Header;