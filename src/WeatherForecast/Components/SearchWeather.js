import React, {useState} from "react";

export const SearchWeather = (handleSearch) => {
  const [place, setPlace] = useState(null);
  return (
    <>
      <label>
        Enter place
        <input name="place" type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
      </label>
      <button type="text" onClick={() => {handleSearch(place)}}>
        Search
      </button>
    </>
  );
};
