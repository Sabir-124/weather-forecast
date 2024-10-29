import { useContext, useState } from "react"
import '../styles/header.css';
import SetDefaultCity from "./SetDefault";
import DefaultContext from "../context/DefaultContext";
import ThemeContext from "../context/ThemeContext";
import SetMeasurement from "./SetMeasurement";

function SettingOptions() {
  const { dark, setDark, saveTheme } = useContext(ThemeContext);
  const [openSettings, setOpenSettings] = useState(false);
  const {isToggled, setIsToggled, isToggledMeasure, setIsToggledMeasure} = useContext(DefaultContext);

  const lightMode = "/logos/light-icon.png";
  const darkMode = "/logos/dark-icon.png";
  const lightMeasure = '/logos/measurement-icon.png';
  const lightDefault = '/logos/default-option-icon.png';
  const darkMeasure = '/logos/measurement-icon-dark.png'
  const darkDefault = "/logos/light-icon.png";

  const handleDefaultButton = () => {
    setOpenSettings(false);
    setIsToggled(false);
  }

  const handleMeasureButton = () => {
    setOpenSettings(false);
    setIsToggledMeasure(false);
  }

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
    saveTheme(!dark);
  };

  return (
    <>
      <div className="Settings">
        <div className={`slide-button`}>
          <img onClick={toggleTheme} src={dark ? darkMode : lightMode} className='setting-icon' />
        </div>
        <div>
          <div>
            <img className='setting-icon' src="/logos/setting-icon.png"
              onClick={() => setOpenSettings((prev) => !prev)} />
          </div>
          <div className={`setting-options ${openSettings ? 'open' : ''} ${!openSettings ? 'close' : ''}`}>
            <div className={`options ${dark ? 'dark' : ''}`} 
              onClick={handleMeasureButton}>
              <div className="icons">
                <img className="option-icon1" src={dark ? darkMeasure : lightMeasure} />
              </div>
              <div className="option-name">
                <span>Set measurement system</span>
              </div>
            </div>

            <div className={`options ${dark ? 'dark' : ''}`}
              onClick={handleDefaultButton}>
              <div className="icons">
                <img className="option-icon2" src={dark ? darkDefault : lightDefault} />
              </div>
              <div className="option-name">
                <span>Set default city</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isToggled ? <SetDefaultCity/> : null}
      {!isToggledMeasure ? <SetMeasurement/> : null}
    </>
  )
}

export default SettingOptions