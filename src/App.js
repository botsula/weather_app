import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Geolocation from 'react-native-geolocation-service';
import React, {useState} from 'react';
import Geocoder from 'react-native-geocoding';
import Geocode from "react-geocode";
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


  // const [userCoordinates, setUserCoordinates] = useState([]);


  // navigator.geolocation.getCurrentPosition(function(position) {
  //   console.log("Latitude is :", position.coords.latitude);
  //   console.log("Longitude is :", position.coords.longitude);

  //   setUserCoordinates([position.coords.latitude, position.coords.longitude]);
  // });


  // Geocode.setApiKey('AIzaSyCwxpANeKt8AeUyElYdGuzRpVvR6i-_NDE');
  // Geocode.setLanguage("en");

  // Geocode.fromLatLng(userCoordinates[0], userCoordinates[1]).then(
  //   response => {
  //     const address = response.results[0].formatted_address;
  //     console.log(address);
  //   },
  //   error => {
  //     console.error(error);
  //   }
  // );
  Geocoding();
  
  return (
    <div className="down-layer">
      <div className='container'>
        <Header />
        <Form />
      </div>
    </div>
  ); 
}

export default App;
