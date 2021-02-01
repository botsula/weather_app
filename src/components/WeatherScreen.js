import React, {useState, useEffect} from "react";


const welcomeScreen = () => {
    return (
        <div>
            <h2>Welcome to the Weather App!</h2>
        </div>
    )
}

const weatherScreen = ({apiResponse}) => {
    return (
        <div>
            <h2>Current temperature in {apiResponse.location.name} is {apiResponse.current.temperature}℃</h2>
        </div>
    )
}

const errorScreen = () => {
    return (
        <div>
            <h2>No respond to your request!</h2>
        </div>
    )
}



const WeatherScreen = ({weatherApiResult, countOfRequests}) => {

    const [showWeather, setShowWeather] = useState(false);
    let res;

    const dealWithWeather = () => {
        if (countOfRequests > 0) {
            if (weatherApiResult.success !== false) {
                setShowWeather(weatherScreen(weatherApiResult));
            } else {
                setShowWeather(errorScreen())
            }
        } else {
            setShowWeather(welcomeScreen());
        };
    };

    dealWithWeather();

    return (
        <div>
        <showWeather />
        </div>
    )
}

export default WeatherScreen;