import React, {useState, useEffect} from "react";
import Button from './Button'
import WeatherScreen from './WeatherScreen'
import NewYorkApiData from '../keys/Data'
import Welcome from './Welcome'
import Geocoding from './Geocoding' 




const Form = () => {

  let numberOfApiCalls = 0;


  const [userCoordinates, setUserCoordinates] = useState([]);
  const [userCity, setUserCity] = useState('');

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [defaultCity, setDefaultCity] = useState('');


  // const [errorMessage, setErrorMessage] = useState(null);
  const handleChange = (e) => {
      setSearchTerm(e.target.value);
  };

  let defCity;
  let screenShow;

  // add "search"
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

    // Geocoding(apiResponse);

    // useEffect(() => {
      // dc = Geocoding();


    //   setDefaultCity(Geocoding(defaultCity));
      // console.log("DEFAULT CITY", dc);

    // })

    // console.log("DEF CITY:", bigCity);


    // useEffect(() => {
    //   console.log("DEF CITY", defCity);
    // }, [defCity])

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