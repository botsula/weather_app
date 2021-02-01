import React, {useState, useEffect} from "react";
import Button from './Button'

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
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    // const [errorMessage, setErrorMessage] = useState(null);
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };


    const apiResponse = ({text}) => {
      console.log("Pressed button", text);
    }

    // useEffect(() => {
    //     const results = people.filter(person =>
    //       person.toLowerCase().includes(searchTerm));

    //     setSearchResults(results);
    //   }, [searchTerm]);

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