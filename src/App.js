
import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import './App.css';
import CurrentWeather from './components/curent-weather/current_weather';

import Search from './components/search/search';



function App() {

  const[currentWeather,setCurrentWeather] = useState(null);
  const[forecast,setForecast] =useState(null);

  const handleonSearchChange = (searchData) =>{
   const[lat,lon] =  searchData.value.split(" ");

    const currentWeatherFeth = fetch(`${WEATHER_API_URL}//weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}//forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    
    Promise.all([currentWeatherFeth,forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({city: searchData.label , ...weatherResponse})
        setForecast({city: searchData.label , ...forecastResponse})
      })
      .catch((err) =>console.log(err));

  }
  console.log(currentWeather); 
  console.log(forecast); 

  return (
   <div className="container">

    <Search onSearchChange={ handleonSearchChange}/>

    {currentWeather && <CurrentWeather data = {currentWeather} /> }

   </div>
    
  );
}

export default App;
