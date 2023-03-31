import React, { useState } from 'react';
import SearchBar from '../components/search-bar';
import WeatherCard from '../components/weather-card';
import { WeatherCardProps } from '../components/weather-card';

const Home: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [weather, setWeather] = useState<WeatherCardProps | null>(null);
  const [forecast, setForecast] = useState<WeatherForecastProps | null>(null);

  const url = "https://weather-app-backend-75safhsjp-rjrobben.vercel.app"



  const handleSearch = (query: string) => {
    fetch(url + '/weather?location=' + query)
      .then((response) => 
        response.ok? response.json(): response.text().then(data=> { alert(data); throw new Error(data) })
      )
      .then((data) => {
        console.log(data);
        setWeather(data);
      })
      .catch((error) => {console.log(error)});

    fetch(url + '/forecast?location=' + query)
      .then((response) => 
        response.ok? response.json(): response.text().then(data=> { alert(data); throw new Error(data) })
      )
      .then((data) => {
        console.log(data);
        setForecast(data.forecast);
      })
      .catch((error) => {console.log(error)});
  };

  return (
        </div>

      {/* after login search bar and weather card */}
      {loggedIn && <SearchBar onSubmit={handleSearch} />}
      {loggedIn && weather && <WeatherCard 
        location={weather.location}
        weather={weather.weather}
      />}
  );
};

export default Home;
