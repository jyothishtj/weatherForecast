import React, {useState} from "react";
import {ForecastResults} from "./ForecastResults";
import {SearchWeather} from "./SearchWeather";
import styles from "./WeatherForecast.module.css";
import axios from "axios";

export const WeatherForecast = () => {
  const [forecast, setForecast] = useState(null);
  const [search, setSearch] = useState(false);

  const handleSearch = async (place) => {
    setSearch(true);
    setForecast(null);
    const latLongResult = await axios.get("https://eu1.locationiq.com/v1/search.php", {params: {key: "pk.293e9914e79907cf104752752cf30ab3", q: place, format: "json"}}); // search the place/building name entered and get the list of suggestions with lat and long
    if (latLongResult?.data?.length > 0) {
      const forcastResponse = await axios.get("https://api.openweathermap.org/data/2.5/onecall", {params: {lat: latLongResult.data[0].lat, lon: latLongResult.data[0].lon, units: "metric", appid: "9fcba578edc6bed9e3f357633bc962b6"}}); // use the lat and long (of the fiest suggested entry) to fetch the weather forecast for next 7 days
      setForecast(forcastResponse);
      setSearch(false);
    }
  };
  return (
    <>
      <SearchWeather handleSearch={handleSearch} />
      {forecast && <ForecastResults forecast={forecast} />}
      {/* show the loader if the search is performed and the forecast is not get fetched. */}
      {search && !forecast && <div className={styles.loader}></div>}
    </>
  );
};
