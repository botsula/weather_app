import React, {useState, useEffect} from "react";
import Button from './Button'
import weatherApiKey from '../keys/api_keys'
import WeatherScreen from './WeatherScreen'

const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
  ];

  // const axios = require('axios');
  // const params = {
  //   access_key: weatherApiKey,
  //   query: 'New York'
  // }

  // axios.get('https://api.weatherstack.com/current', {params})
  //   .then(response => {
  //     const apiResponse = response.data;
  //     console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  //   }).catch(error => {
  //     console.log(error);
  //   });



const Form = () => {

  let numberOfApiCalls = 0;

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState(false);
    const [showWeather, setShowWeather] = useState(false);
    // const [errorMessage, setErrorMessage] = useState(null);
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    

    // async function Res(){
//   // const res = await fetch('http://api.weatherstack.com/current?access_key=c055844d5901b82f492d20b14950d9b7&query=New%20York')
//   // const data = await res.json();
//   // console.log(data.current);
// }
  let screenShow;


    async function apiResponse(){
      console.log("Pressed button");
      const url = 'http://api.weatherstack.com/current?access_key=c055844d5901b82f492d20b14950d9b7&query=' + searchTerm;
      const setKson = await fetch(url).then(response => {return response.json()});
      console.log(setKson.current);
      
      setSearchResult(setKson);
      // if (setKson.success == undefined) {
      //   setSearchResult([]);
      // } else {
      //   setSearchResult(setKson);
      //   numberOfApiCalls ++;
      // }

      // if (numberOfApiCalls == 0) {
      //   screenShow = <p> Hello Screen!</p>
      // } else if (searchResult.success !== false){
      //   screenShow = <p> We have a result</p>
      // }
    

      // setSearchResult(setKson);
      // newJson = setKson;
      // console.log(newJson.current);

      // const data = await res.json();

      // setSearchResult(data);
      console.log(searchResult);

      // setSearchResult(res.json());
      // console.log(searchResult.current);
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
            <input
            type="text"
            placeholder="City"
            value={searchTerm}
            onChange={handleChange} />
            <Button city={searchTerm} onButton={apiResponse}/>
            {/* {searchResult.length > 0 && (<p>JHO</p>)}; */}
            <p>Hello </p>
            {searchResult && <Test apiRespons={searchResult}/>}

            {/* {numberOfApiCalls > 0 && <WeatherScreen weatherApiResult={searchResult} countOfRequests={numberOfApiCalls}/>} */}

            {/* {searchResult.success == false ? (<p> Nooooo result!</p>) : (<p> Yesss result!</p>)} */}
            

            {/* {typeof searchResult[0] !== 'undefined' ? (<p> ${searchResult.current.humidity}</p>) : (<p> Nooooo result!</p>)}; */}

            {/* <ul className="down-form-list">
                {searchResults.map(item => (
                <li>{item}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default Form;