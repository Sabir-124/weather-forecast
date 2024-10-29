import { createContext, useContext, useState, useEffect } from "react";
import WeatherContext from "./WeatherContext";

const DefaultContext = createContext();
const DEFAULT_KEY = 'defaultPlace';

function DefaultProvider ({children}) {
  const [isToggled, setIsToggled] = useState(true);
  const [isToggledMeasure, setIsToggledMeasure] = useState(true);
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');
  const {setPlace} = useContext(WeatherContext);

  const setDefault = (set) => {
    localStorage.setItem(DEFAULT_KEY, JSON.stringify(set));
  }

  useEffect(() => {
    const savedPlace = JSON.parse(localStorage.getItem(DEFAULT_KEY));
    if (savedPlace !== null) {
      setPlace(savedPlace);
      setCityName(savedPlace.name);
      setCountryName(savedPlace.country);
    }
  }, []);

  return (
    <DefaultContext.Provider value={{isToggled, setIsToggled, setDefault, cityName, setCityName, countryName, setCountryName, isToggledMeasure, setIsToggledMeasure}}>
      {children}
    </DefaultContext.Provider>
  )
}

export {DefaultProvider};
export default DefaultContext;