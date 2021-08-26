import React from "react";
import {ForecastResult} from "./ForecastResult";
import styles from "./WeatherForecast.module.css";

export const ForecastResults = (forecasts) => {
  return (
    <div className={styles.forecasts}>
      {forecasts.forecast.data.daily.map((forecast) => (
        <ForecastResult forecast={forecast} />
      ))}
    </div>
  );
};
