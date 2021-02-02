import React, {useState, useEffect} from "react";
import Button from './Button'
import weatherApiKey from '../keys/api_keys'
import WeatherScreen from './WeatherScreen'
import NewYorkApiData from '../keys/Data'

const Form = () => {

  let numberOfApiCalls = 0;

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState(false);
    const [showWeather, setShowWeather] = useState(false);
    // const [errorMessage, setErrorMessage] = useState(null);
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

  let screenShow;

    async function apiResponse(){

      

      // ========================================= API WORK ================================================================
      console.log("Pressed button");
      // const setKson = await fetch(`http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${searchTerm}`).then(response => {return response.json()});
      // console.log(setKson.current);
      
      // setSearchResult(setKson);
      // console.log(searchResult);

      // +++++++++++++++++++++++++++++++++++++++++ TEST WORK +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      setSearchResult(NewYorkApiData);
    }

    const Test = ({apiRespons}) => {

      console.log("TEST: ", apiRespons, "LEN: ", Object.keys(apiRespons).length);
      return(
        <div>
          {Object.keys(apiRespons).length === 3 ? (<p>Yes, Current temperature in {apiRespons.location.name}</p>) : (<p>Noooo</p>)}
        </div>
      )
    }


    return (
        <div className="city-form">
          <div className="search-place">
            <input className='input-place'
            type="text"
            placeholder="Choose the city..."
            value={searchTerm}
            onChange={handleChange} />
            <Button city={searchTerm} onButton={apiResponse}/>
          </div>
          {searchResult ? <WeatherScreen apiRespons={searchResult}/> : <p>Hello!</p>}
        </div>
    );
}

export default Form;