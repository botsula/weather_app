import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import React, {useState, useEffect} from 'react';
import Geocoding from './components/Geocoding'

// import {Client} from "@googlemaps/google-maps-services-js";
// import geolocationApiKey from './keys/api_keys'

const {Client} = require("@googlemaps/google-maps-services-js");

const geolocationApiKey = 'AIzaSyCwxpANeKt8AeUyElYdGuzRpVvR6i-_NDE'


// const firebaseConfig = {
//   apiKey: "AIzaSyCq_lxYpg3N6aAC2KbF_a0ryReMw3zfo2U",
//   authDomain: "weatherapp-880dc.firebaseapp.com",
//   projectId: "weatherapp-880dc",
//   storageBucket: "weatherapp-880dc.appspot.com",
//   messagingSenderId: "1073803393105",
//   appId: "1:1073803393105:web:bb10590282075d69d1e070",
//   measurementId: "G-C1BKTBJENM"
// };


const App = () => {
  require('dotenv').config()

  // const [cityD, setCityD] = useState('');

  // let city = Geocoding();
  // let count = 0; 


    // setCityD(Geocoding());

  // console.log("The city is", city === '', city);
  
  return (
    <div className="down-layer">
      <div className='container'>
        <Header />
        <Geocoding />
        {/* <button onClick={Geocoding} className="search-button"> Click </button> */}
        <Form/>
      </div>
    </div>
  ); 
}

export default App;
