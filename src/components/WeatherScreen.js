import React, {useState, useEffect} from "react";

const WeatherScreen = ({apiRespons}) => {

    console.log("TEST: ", apiRespons, "LEN: ", Object.keys(apiRespons).length);
    return(
        <div>
        {Object.keys(apiRespons).length === 3 ? (
            <div className="weather-screen">
                <h2>{apiRespons.location.name}</h2>
                <p>{apiRespons.location.country}</p>
                <p className="temperature">{apiRespons.current.temperature}&#176;C</p>
                <div className="weather-set">
                  <div className="set-1">
                    <p>Feels like <b>{apiRespons.current.feelslike}&#176;C</b></p>
                    <p>Pressure <b>{apiRespons.current.pressure} MB</b></p>
                    <p>Humidity <b>{apiRespons.current.humidity} %</b></p>
                  </div>
                  <div className="set-2">
                    <p>Cloud coverage <b>{apiRespons.current.cloudcover} %</b></p>
                    <p>Visibility <b>{apiRespons.current.visibility} km</b></p>
                  </div>
                </div>
            </div>
        
        // <p>Yes, Current temperature in {apiRespons.location.name}</p>
        
        ) : (
          <div className="no-result">
        <h1>No result 🤔</h1>
        <p>Maybe another city name?</p>
        </div>
        )}
      </div>
    )
  }

export default WeatherScreen;