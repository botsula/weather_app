const NewYorkApiData = {
  request: {
    type: "City",
    query: "New York",
    language: "en",
    unit: "m",
  },
  location: {
    name: "New York",
    country: "United States of America",
    region: "New York",
    lat: "40.714",
    lon: "-74.006",
    timezone_id: "America/New_York",
    localtime: "2021-02-01 04:26",
    localtime_epoch: 1612153560,
    utc_offset: "-5.0",
  },
  current: {
    observation_time: "09:26 AM",
    temperature: -3,
    weather_code: 323,
    weather_icons: [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0027_light_snow_showers_night.png",
    ],
    weather_descriptions: ["Light Snow, Mist"],
    wind_speed: 19,
    wind_degree: 50,
    wind_dir: "NE",
    pressure: 1016,
    precip: 2,
    humidity: 89,
    cloudcover: 100,
    feelslike: -9,
    uv_index: 1,
    visibility: 2,
    is_day: "no",
  },
};

export default NewYorkApiData;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyCq_lxYpg3N6aAC2KbF_a0ryReMw3zfo2U",
//     authDomain: "weatherapp-880dc.firebaseapp.com",
//     projectId: "weatherapp-880dc",
//     storageBucket: "weatherapp-880dc.appspot.com",
//     messagingSenderId: "1073803393105",
//     appId: "1:1073803393105:web:bb10590282075d69d1e070",
//     measurementId: "G-C1BKTBJENM"
//   };s
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
