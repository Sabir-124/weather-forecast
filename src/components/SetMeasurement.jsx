import { useContext } from "react";
import DefaultContext from "../context/DefaultContext";
import "../styles/setMeasure.css";
import { MEASUREMENT_SYSTEMS } from "../constants";
import WeatherContext from "../context/WeatherContext";

const SetMeasurement = () => {
  const { setIsToggledMeasure } = useContext(DefaultContext);
  const { measurementSystem, setMeasurementSystem } =
    useContext(WeatherContext);

  const hideMeasurementOption = () => {
    setIsToggledMeasure(true);
  };

  const changeMeasurementSystem = (system) => {
    setMeasurementSystem(system);
    setIsToggledMeasure(true);
  };

  return (
    <>
      <div className="whole-measurement">
        <div className="measurement-systems">
          <h2 className="set">Set measurement system . . .</h2>
          <div className="set-measurement-system">
            {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
              <button
                className={system === measurementSystem ? "active" : ""}
                key={system}
                onClick={() => changeMeasurementSystem(system)}
              >
                {" "}
                {system}
              </button>
            ))}
            <button onClick={hideMeasurementOption}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetMeasurement;
