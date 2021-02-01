import './App.css';
import Header from './components/Header'
import Form from './components/Form'
// import weatherApiKey from './keys/api_keys';
import axios from 'axios';


// async function Res(){
//   // const res = await fetch('http://api.weatherstack.com/current?access_key=c055844d5901b82f492d20b14950d9b7&query=New%20York')
//   // const data = await res.json();
//   // console.log(data.current);
// }

const App = () => {
  // const axios = require('axios');

  // const weatherApiKey = 'c055844d5901b82f492d20b14950d9b7';
  // const params = {
  //   access_key: weatherApiKey,
  //   query: 'New York'
  // }

  // const getter = 'https://api.weatherstack.com/current

  // fetch("https://api.weatherstack.com/current?access_key=c055844d5901b82f492d20b14950d9b7&query=New York")
  //   .then(response => {
  //     const apiResponse = response.data;
  //     console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  //   }).catch(error => {
  //     console.log(error);
  //   });


    // fetch("https://api.weatherstack.com/current?access_key=c055844d5901b82f492d20b14950d9b7&query=New York")
    // .then(response => {
    //   const apiResp = response;
    //   console.log(apiResp.data);
    //   // console.log(`Current temperature in ${apiResp.location.name} is ${apiResp.current.temperature}℃`);
    // }).catch(error => {
    //     console.log(error);
    //   });

    // Res();

  // $.ajax({
  //   url: 'https://api.weatherstack.com/current',
  //   data: {
  //     access_key: 'c055844d5901b82f492d20b14950d9b7',
  //     query: 'New York'
  //   },
  //   dataType: 'json',
  //   success: function(apiResponse) {
  //     console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  //   }
  // });

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
