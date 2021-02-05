# WeatherNow
### JS + React -- Test Task

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
> **Why not forecast? ** API for weather I used in a Free Plan allowed only to get current weather situation in time with no forecast.

## Deploy

Currently hosted on https://botsula.github.io/weather_app.

> **Hosting Issues** : currently page on hosting looks really bad and is not usefull. But the evening before when I was regulating **css webkit**, </**BrowserRouter**> and **gh-pages** it was great. 

> The only thing I had a problem with was API weather call, which I planned to fix with adding web-page hostig URL to the request, but in the morning everything just failed and I tried to recreate all stf, but now I would really appreciate if you would help with it a bit. Thanks in advance and sorry for a lot of text.

> **Keys Issues** : `.env` doesn't work as it has to after default setup, i didn't managed to spend a lot of time with it, but hope you can advice something and tell what should be changed. So keys for API are imported in a freaky way.

** Thanks for reaching this code, hope to hear from you soon! ** 

Anna Botsula
