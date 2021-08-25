import React from "react";
import {SearchWeather} from "./SearchWeather";

export const ForecastResults = (forecasts) => {
  return forecasts.map((item) => <ForecastResult forecast={forecasts} />);
};
