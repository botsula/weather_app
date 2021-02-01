import React, {useState, useEffect} from "react";
import Button from './Button'
import weatherApiKey from '../keys/api_keys'

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
    let newJson = [];

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    // const [errorMessage, setErrorMessage] = useState(null);
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    

    // async function Res(){
//   // const res = await fetch('http://api.weatherstack.com/current?access_key=c055844d5901b82f492d20b14950d9b7&query=New%20York')
//   // const data = await res.json();
//   // console.log(data.current);
// }


    async function apiResponse(){
      console.log("Pressed button");
      const url = 'http://api.weatherstack.com/current?access_key=c055844d5901b82f492d20b14950d9b7&query=' + searchTerm;
      const setKson = await fetch(url).then(response => {return response.json()});
      console.log(setKson.current);
      setSearchResult(setKson);
      // newJson = setKson;
      // console.log(newJson.current);

      // const data = await res.json();

      // setSearchResult(data);
      console.log(searchResult.current);

      // setSearchResult(res.json());
      // console.log(searchResult.current);
    }

    return (
        <div className="city-form">
            <input
            type="text"
            placeholder="City"
            value={searchTerm}
            onChange={handleChange} />
            <Button city={searchTerm} onButton={apiResponse}/>


            {/* <ul className="down-form-list">
                {searchResults.map(item => (
                <li>{item}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default Form;