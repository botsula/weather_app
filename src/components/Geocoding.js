import Geocode from "react-geocode";
import React, {useState} from 'react';
import Geolocation from 'react-native-geolocation-service';


const Geocoding = () => {

    const [userCoordinates, setUserCoordinates] = useState([]);


    function getCoordinates() {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setUserCoordinates([position.coords.latitude, position.coords.longitude]);
        });
    }

    function getCity() {
        Geocode.setApiKey('AIzaSyCwxpANeKt8AeUyElYdGuzRpVvR6i-_NDE');
        // Geocode.setLanguage("en");
      
        Geocode.fromLatLng(48.8588377, 2.2770202).then(
          response => {
            const address = response.results[0];
            console.log(address);
          },
          error => {
            console.error(error);
          }
        );
    }

    getCoordinates();
    getCity();
}

export default Geocoding;
