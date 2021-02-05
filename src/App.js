import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import React, {useState, useEffect} from 'react';
import Geocoding from './components/Geocoding'
import { BrowserRouter } from "react-router-dom";
const {Client} = require("@googlemaps/google-maps-services-js");

// const geolocationApiKey = 'AIzaSyCwxpANeKt8AeUyElYdGuzRpVvR6i-_NDE'

const App = () => {
  require('dotenv').config()
  
  return (
    <BrowserRouter basename="/">
    <div className="down-layer">
      <div className='container'>
        <div className='heading'>
        <Header />
        <Geocoding />
        </div>
        {/* <button onClick={Geocoding} className="search-button"> Click </button> */}
        <Form/>
      </div>
    </div>
    </BrowserRouter>
  ); 
}

export default App;
