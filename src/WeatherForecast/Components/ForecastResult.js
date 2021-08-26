import React from "react";
import styles from "./WeatherForecast.module.css";
import moment from "moment";

export const ForecastResult = ({forecast}) => {
  // use moment to format the unix epoch timestamp to readable date and day
  const convertedDate = moment.unix(forecast.dt);
  const formattedDate = convertedDate.format("DD/MM/YYYY");
  const dayOfWeek = convertedDate.format("dddd");
  return (
    <div className={styles.forecast}>
      <div>
        <label>{`Date: ${formattedDate}, ${dayOfWeek} `}</label>
      </div>
      <div>
        <label>{`Maximum Temp: ${forecast.temp.max}`}</label>
      </div>
      <div>
        <label>{`Minimum Temp: ${forecast.temp.min}`}</label>
      </div>
      <div>
        <label>{`Weather condition: ${forecast.weather[0].description}`}</label>
      </div>
    </div>
  );
};
