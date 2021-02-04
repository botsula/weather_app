import Geocode from "react-geocode";
import React, {useState, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';


function Geocoding(){

    const key = 'AIzaSyCwxpANeKt8AeUyElYdGuzRpVvR6i-_NDE';

    const [userCoordinates, setUserCoordinates] = useState([]);
    const [userCity, setUserCity] = useState('');


    // from https://medium.com/@almestaadmicadiab/how-to-parse-google-maps-address-components-geocoder-response-774d1f3375d
    function getAddressObject(address_components) {

        var ShouldBeComponent = {
        home: ["street_number"],
        postal_code: ["postal_code"],
        street: ["street_address", "route"],
        region: [
            "administrative_area_level_1",
            "administrative_area_level_2",
            "administrative_area_level_3",
            "administrative_area_level_4",
            "administrative_area_level_5"
        ],
        city: [
            "locality",
            "sublocality",
            "sublocality_level_1",
            "sublocality_level_2",
            "sublocality_level_3",
            "sublocality_level_4"
        ],
        country: ["country"]
        };

        var address = {
        home: "",
        postal_code: "",
        street: "",
        region: "",
        city: "",
        country: ""
        };


        address_components.map(component => {
        for (var shouldBe in ShouldBeComponent) {
            if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
            if (shouldBe === "country") {
                address[shouldBe] = component.short_name;
            } else {
                address[shouldBe] = component.long_name;
            }
            }
        }
        });

        return address;
    }
   

    const getCoordinates =() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setUserCoordinates([position.coords.latitude, position.coords.longitude]);
        });
        
        return userCoordinates;
    };
    // getCoordinates();
        // return userCoordinates;
    

    function getCity() {
        function geocodeWork(){
            Geocode.setApiKey('AIzaSyCwxpANeKt8AeUyElYdGuzRpVvR6i-_NDE');
            Geocode.setLanguage("en-GB");
          
            Geocode.fromLatLng(userCoordinates[0], userCoordinates[1]).then(setTimeout(10)).then(
              response => {
                const address = response.results[0];
                const city = getAddressObject(address.address_components).city;
                setUserCity(city);
                console.log(city);
              },
              error => {
                console.error(error);
              }
            );
        }
        geocodeWork();
    };

    // getCity();

    // getCoordinates();
    // getCity();
    useEffect(() => {

        getCoordinates();
        // console.log('LAT ', userCoordinates[0], userCoordinates[1]);
        
        // fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + userCoordinates[0] + ',' + userCoordinates[1] + '&key=' + key)
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     console.log(responseJson);
// })
        // console.log("USER CITY: ", userCity);
        // console.log("COORDS: ", userCoordinates);
    }, [])

    useEffect(() => {
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + userCoordinates[0] + ',' + userCoordinates[1] + '&key=' + key)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
        })
        console.log("USER CITY: ", userCity);
        console.log("COORDS: ", userCoordinates);
    })

    userCity === `L'viv` ? setUserCity('Lviv') : console.log('fine');
        // })

    return userCity;
}

export default Geocoding;
