import React, {useState} from "react";
import {ForecastResults} from "./ForecastResults";
import {SearchWeather} from "./SearchWeather";
import styles from "./WeatherForecast.module.css";
import axios from "axios";

export const WeatherForecast = () => {
  const [forecast, setForecast] = useState(null);

  const handleSearch = (place) => {
    setForecast([{temp: 11.2}, {temp: 12.3}]);
  };
  return (
    <>
      <SearchWeather handleSearch={handleSearch} />
      {forecast ? <ForecastResults forecast={forecast} /> : <div className={styles.loader}></div>}
    </>
  );
};
