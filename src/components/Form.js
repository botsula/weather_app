import React, { useState } from "react";
import Button from "./Button";
import WeatherScreen from "./WeatherScreen";
import Welcome from "./Welcome";
import weatherApiKey from "../keys/api_keys";

const Form = () => {
  require("dotenv").config();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  async function apiResponse() {
    // ========================================= API WORK ================================================================
    console.log("Pressed button");
    const setKson = await fetch(
      `http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${searchTerm}`
    ).then((response) => {
      return response.json();
    });
    console.log(setKson.current);

    setSearchResult(setKson);
    console.log(searchResult);

    // +++++++++++++++++++++++++++++++++++++++++ TEST WORK +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // setSearchResult(NewYorkApiData);
  }

  return (
    <div className="city-form" on>
      <div className="search-place">
        <input
          className="input-place"
          type="text"
          placeholder="Choose the city..."
          value={searchTerm}
          onChange={handleChange}
        />
        <Button city={searchTerm} onButton={apiResponse} />
      </div>
      {searchResult ? <WeatherScreen apiRespons={searchResult} /> : <Welcome />}
    </div>
  );
};

export default Form;
