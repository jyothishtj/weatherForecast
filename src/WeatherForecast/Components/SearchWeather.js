import React, {useState} from "react";

export const SearchWeather = ({handleSearch}) => {
  const [place, setPlace] = useState(null);
  return (
    <div style={{marginTop: "16px"}}>
      <label style={{marginRight: "5px"}}>
        Enter place
        <input name="place" type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
      </label>

      <button
        type="text"
        onClick={() => {
          handleSearch(place);
        }}
      >
        Search
      </button>
    </div>
  );
};
