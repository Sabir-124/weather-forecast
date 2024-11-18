import { useContext, useState, useEffect, useRef } from "react";
import "../styles/header.css";
import SetDefaultCity from "./SetDefault";
import DefaultContext from "../context/DefaultContext";
import ThemeContext from "../context/ThemeContext";
import SetMeasurement from "./SetMeasurement";

function SettingOptions() {
  const { dark, setDark, saveTheme } = useContext(ThemeContext);
  const [openSettings, setOpenSettings] = useState(false);
  const { isToggled, setIsToggled, isToggledMeasure, setIsToggledMeasure } =
    useContext(DefaultContext);

  const lightMode = "/weather-forecast/logos/light-icon.png";
  const darkMode = "/weather-forecast/logos/dark-icon.png";
  const lightMeasure = "/weather-forecast/logos/measurement-icon.png";
  const lightDefault = "/weather-forecast/logos/default-option-icon.png";
  const darkMeasure = "/weather-forecast/logos/measurement-icon-dark.png";
  const darkDefault = "/weather-forecast/logos/light-icon.png";

  const settingRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      settingRef.current &&
      !settingRef.current.contains(event.target)
    ) {
      setOpenSettings(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSettings = () => {
    setOpenSettings((prev) => !prev);
  }

  const handleDefaultButton = () => {
    setOpenSettings(false);
    setIsToggled(false);
  };

  const handleMeasureButton = () => {
    setOpenSettings(false);
    setIsToggledMeasure(false);
  };

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
    saveTheme(!dark);
  };

  return (
    <>
      <div className="Settings" ref={settingRef}>
        <div className={`slide-button`}>
          <img
            onClick={toggleTheme}
            src={dark ? darkMode : lightMode}
            className="setting-icon"
            alt="toggle-icon"
          />
        </div>
        <div>
          <div>
            <img
              className="setting-icon"
              src="/weather-forecast/logos/setting-icon.png"
              alt="Setting-icon"
              onClick={handleSettings}
            />
          </div>
          <div
            className={`setting-options ${openSettings ? "open" : ""} ${
              !openSettings ? "close" : ""
            }`}
          >
            <div
              className={`options ${dark ? "dark" : ""}`}
              onClick={handleMeasureButton}
            >
              <div className="icons">
                <img
                  className="option-icon1"
                  src={dark ? darkMeasure : lightMeasure}
                  alt="measure-icon"
                />
              </div>
              <div className="option-name">
                <span>Measurement system</span>
              </div>
            </div>

            <div
              className={`options ${dark ? "dark" : ""}`}
              onClick={handleDefaultButton}
            >
              <div className="icons">
                <img
                  className="option-icon2"
                  src={dark ? darkDefault : lightDefault}
                  alt="default-icon"
                />
              </div>
              <div className="option-name">
                <span>Set default city</span>
              </div>
            </div>

            <div className={`appear-button`} onClick={toggleTheme}>
              <div className="icons">
                <img
                  src={dark ? darkMode : lightMode}
                  className="setting-icon"
                  alt="toggle-icon"
                />
              </div>
              {dark ? <span>Set Light mode</span> : <span>Set Dark mode</span>}
            </div>
          </div>
        </div>
      </div>

      {!isToggled ? <SetDefaultCity /> : null}
      {!isToggledMeasure ? <SetMeasurement /> : null}
    </>
  );
}

export default SettingOptions;
