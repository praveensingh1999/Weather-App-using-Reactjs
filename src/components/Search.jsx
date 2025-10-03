import React, { useState } from "react";
import axios from "axios";


function Search({setweatherDetails}) {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
    setweatherDetails(null);
  }
  function handleEnter(e) {
    if (e.key == "Enter") {
     //console.log(import.meta.env.VITE_API_KEY);
      const API_KEY = import.meta.env.VITE_API_KEY;
      axios
        .get("http://api.weatherapi.com/v1/current.json", {
          params: {
            key: API_KEY,
            q: search, // location
            aqi: "no", // optional parameter (air quality index)
          },
        })
        .then((res) => {
          console.log(res.data);
          setweatherDetails(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
 
  return (
    <div className="search_conatiner">
      <div className="search_div">
        <img src="/src/assets/search.png" alt="search icon" />
        <input
          type="text"
          placeholder="Search for City Name"
          onChange={handleSearch}
          onKeyDown={handleEnter}
        />
      </div>
    </div>
  );
}

export default Search;
