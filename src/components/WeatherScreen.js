import React, {useState, useEffect} from "react";

const WeatherScreen = ({apiRespons}) => {

    console.log("TEST: ", apiRespons, "LEN: ", Object.keys(apiRespons).length);
    return(
        <div>
    {/* //   <div className="weather-screen">
    //       <h2>{apiRespons.location.name}</h2>
    //       <p>{apiRespons.location.country}</p>
    //       <div className="weather-set">
    //           <p className="temperature">{apiRespons.current.temperature} &#176;C</p>
    //           <p>Feels like {apiRespons.current.feelslike} &#176;C</p>
    //           <p>Pressure {apiRespons.current.pressure} MB</p>
    //           <p>Humidity {apiRespons.current.humidity} %</p>
    //           <p>Cloud coverage {apiRespons.current.cloudcover} %</p>
    //           <p>Visibility {apiRespons.current.visibility} km</p>
    //       </div> */}
        {Object.keys(apiRespons).length === 3 ? (
            <div className="weather-screen">
                <h2>{apiRespons.location.name}</h2>
                <p>{apiRespons.location.country}</p>
                <div className="weather-set">
                    <p className="temperature">{apiRespons.current.temperature} &#176;C</p>
                    <p>Feels like {apiRespons.current.feelslike} &#176;C</p>
                    <p>Pressure {apiRespons.current.pressure} MB</p>
                    <p>Humidity {apiRespons.current.humidity} %</p>
                    <p>Cloud coverage {apiRespons.current.cloudcover} %</p>
                    <p>Visibility {apiRespons.current.visibility} km</p>
                </div>
            </div>
        
        // <p>Yes, Current temperature in {apiRespons.location.name}</p>
        
        ) : (
        
        <p className="no-result">No result 🤔</p>
        
        )}
      </div>
    )
  }

export default WeatherScreen;