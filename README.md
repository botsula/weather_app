# WeatherNow
### JS + React

![alt text](https://github.com/botsula/weather_app/blob/master/src/pictures/Screenshot%20from%202021-02-05%2014-22-52.png?raw=true)


**This app can:**
- show current weather in a specified by user city
- geolocate user position and detect city name

**Tech Stack**:
- HTML, CSS, JS, REACT
- [ Weather API ](https://weatherstack.com/http:// "weatherstack.com") 
- [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview "Geocoding API")

## Set Up & Run

App is build using `create-react-app`, so its quite easy to run it locally.

1. Clone this repository from **master** branch : `git clone https://github.com/botsula/weather_app`

2.  `npm install` - install preferences.

3. `npm start` - run locally.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### How to use?

When app started, it will ask your geolocation detecting permission. Than if you update the page `F5`, at the up-right corner you will see your current location. If you don't allow - nothing changes.

> **Issue** : tried a lot, but didn't managed to create response in a moment to search weather right away user allowed to use location. So app only shows user location, but input user has to do by himself. Hope, you will give some tips about it.

Then you just need to input the city to get current weather for it.
> **Why not forecast?** API for weather I used in a Free Plan allowed only to get current weather situation in time with no forecast.

**Thanks for reaching this code, hope to hear from you soon!** 

Anna Botsula
