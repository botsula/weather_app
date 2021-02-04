import Geocode from "react-geocode";
import {useState, useEffect} from 'react';
import Button from './Button'

const Geocoding = ({apiResponse}) => {

    const key = 'AIzaSyA1kw9a2Y4T8krZTVHFhU70rgLkWOp3c6w';

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


    useEffect(() => {
        getCoordinates();
    }, [])

    useEffect(() => {

        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + userCoordinates[0] + ',' + userCoordinates[1] + '&key=' + key)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson.results);
                    setUserCity(getAddressObject(responseJson.results[0].address_components).city);
        })

    }, [userCity])

    // little help for api
    userCity === `L'viv` ? setUserCity('Lviv') : console.log('fine');
    console.log("USER CITY: ", userCity);

    // this magic city is a default for fetching, so also little help 
    return (
        <div  className="geolocation">
            
        { userCity !== 'Louisville' && (
            <p>You are in:<br/><b>{userCity}</b></p>)
        }
        </div>
    );
}

export default Geocoding;
