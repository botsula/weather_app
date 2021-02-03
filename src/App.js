import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Geolocation from 'react-native-geolocation-service';
import React from 'react';



const firebaseConfig = {
  apiKey: "AIzaSyCq_lxYpg3N6aAC2KbF_a0ryReMw3zfo2U",
  authDomain: "weatherapp-880dc.firebaseapp.com",
  projectId: "weatherapp-880dc",
  storageBucket: "weatherapp-880dc.appspot.com",
  messagingSenderId: "1073803393105",
  appId: "1:1073803393105:web:bb10590282075d69d1e070",
  measurementId: "G-C1BKTBJENM"
};



const App = () => {
  require('dotenv').config()


  if ("geolocation" in navigator) {
    console.log("Available");
  } else {
    console.log("Not Available");
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });

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
