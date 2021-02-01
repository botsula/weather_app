import React, {useState, useEffect} from "react";


const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
  ];
const Form = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = people.filter(person =>
          person.toLowerCase().includes(searchTerm));

        setSearchResults(results);
      }, [searchTerm]);

    return (
        <div className="city-form">
            <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
      />
            <ul className="down-form-list">
                {searchResults.map(item => (
                <li>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Form;