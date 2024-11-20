import "../styles/header.css";
import { useContext, useState } from "react";
import "../styles/setDefault.css";
import DefaultContext from "../context/DefaultContext";
import WeatherContext from "../context/WeatherContext";
import { DEFAULT_PLACE } from "../constants/index";
import { searchPlace } from "../data-API";

const SetDefaultCity = () => {
  const { isToggled, setIsToggled, setDefault, cityName, setCityName } =
    useContext(DefaultContext);
  const { place, setPlace } = useContext(WeatherContext);
  const [defaultResults, setDefaultResults] = useState([]);

  async function handleCityName(evt) {
    const input = evt.target.value;
    setCityName(input);

    if (input.trim() === "") {
      setDefaultResults([]);
      return;
    }

    try {
      const data = await searchPlace(input);
      if (Array.isArray(data)) {
        setDefaultResults(data);
      } else {
        setDefaultResults([]);
      }
    } catch (error) {
      console.error("Error fetching places: ", error);
      setDefaultResults([]);
    }
  }

  const hideDefaultOption = () => {
    setIsToggled(true);
  };

  const updateDefaultPlace = (place) => {
    const updatedPlace = {
      ...DEFAULT_PLACE,
      name: place.name,
      place_id: place.place_id.toLowerCase(),
      country: place.country,
    };

    setDefault(updatedPlace);
    setPlace(updatedPlace);
    setIsToggled(true);
    setCityName("");
  };

  return (
    <div className="default">
      <div className="default-options">
        <h2 className="text">Set your default place . . .</h2>
        <div className="enter-default-place">
          <div className="enter-city">
            <input
              className="name"
              placeholder="Enter your default place.."
              type="text"
              value={cityName}
              onChange={handleCityName}
            />
            <div
              className={`default-results ${
                cityName.length === 0 ? "hide" : "show"
              }`}
            >
              <div className="search-results">
                {defaultResults.map((place) => (
                  <div
                    className="result"
                    key={place.place_id}
                    onClick={() => updateDefaultPlace(place)}
                  >
                    {place.name}, {place.adm_area1}, {place.country}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="set-default">
          <button className="set-default-button" onClick={hideDefaultOption}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetDefaultCity;
