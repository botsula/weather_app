import React, {useState, useEffect} from "react";
import Button from './Button'
import WeatherScreen from './WeatherScreen'
import Welcome from './Welcome'
import weatherApiKey from '../keys/api_keys'




const Form = () => {

  require('dotenv').config()
  let numberOfApiCalls = 0;


  const [userCoordinates, setUserCoordinates] = useState([]);
  const [userCity, setUserCity] = useState('');

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [defaultCity, setDefaultCity] = useState('');


  const handleChange = (e) => {
      setSearchTerm(e.target.value);
  };

  async function apiResponse(){
    // ========================================= API WORK ================================================================
    console.log("Pressed button");
    const setKson = await fetch(`http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${searchTerm}`).then(response => {return response.json()});
    console.log(setKson.current);
    
    setSearchResult(setKson);
    console.log(searchResult);

    // +++++++++++++++++++++++++++++++++++++++++ TEST WORK +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // setSearchResult(NewYorkApiData);
  }

    return (
        <div className="city-form" on>
          <div className="search-place">
            <input className='input-place'
            type="text"
            placeholder="Choose the city..."
            value={searchTerm}

            onChange={handleChange} />
            <Button city={searchTerm} onButton={apiResponse}/>
          </div>
          {searchResult ? <WeatherScreen apiRespons={searchResult}/> : <Welcome/>}
        </div>
    );
}

export default Form;