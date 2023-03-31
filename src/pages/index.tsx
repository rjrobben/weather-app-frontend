import React, { useState } from 'react';
import {SignUp, Login} from '../components/auth';
import SearchBar from '../components/search-bar';
import WeatherCard from '../components/weather-card';
import WeatherForecast from '../components/weather-forecast';
import { WeatherCardProps } from '../components/weather-card';
import { WeatherForecastProps } from '../components/weather-forecast';

const Home: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [weather, setWeather] = useState<WeatherCardProps | null>(null);
  const [forecast, setForecast] = useState<WeatherForecastProps | null>(null);

  const url = "https://weather-app-backend-75safhsjp-rjrobben.vercel.app"

  const postData = (endpoint: string, email: string, password: string, login: boolean) => {
    fetch(url + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then((response) => 
      response.ok ? response.json() : response.json().then(data=> { alert(data.message); throw new Error(data.message) })
    )
    .then((data) => {
      console.log(data)
      if (!login) {alert("Account created! Please log in.")}
      if (login) {setLoggedIn(true)}
    })
    .catch((error) => {console.error(error)})
    ;
  };

  const handleSignUp = (email: string, password: string) => {
    console.log(email, password)
    postData("/register", email, password, false)
    // setLoggedIn(true);
  };

  const handleLogin = (email: string, password: string) => {
    console.log(email, password)
    postData("/login", email, password, true)
    // setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

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
    <div className='py-2'> 
      <h1 className='text-4xl text-center'>Weather App</h1>
      <div className='flex flex-col items-center login-section mt-8'>
        <div className='mb-4'>
          {!loggedIn && <SignUp onSignUp={handleSignUp} />}
        </div>
        <div>
          {!loggedIn && <Login onLogin={handleLogin} />}
        </div>
        {loggedIn && <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleLogout}>Logout</button>}
      </div>

      {/* after login search bar and weather card */}
      {loggedIn && <SearchBar onSubmit={handleSearch} />}
      {loggedIn && weather && <WeatherCard 
        location={weather.location}
        weather={weather.weather}
      />}
      {/* forecast for three days WeatherCard */}
      {loggedIn && forecast && <WeatherForecast data={forecast} />}

    </div>
  );
};

export default Home;
