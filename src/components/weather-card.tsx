import React from 'react';
import moment from 'moment-timezone';

export interface WeatherCardProps {
  location: string;
  weather: {
    datetime: string;
    temperature: number;
    humidity: number;
    icon_code: string;
    weather_description: string;
  };
}


const WeatherCard: React.FC<WeatherCardProps> = ({location, weather}) => {
  const iconUrl = 'http://openweathermap.org/img/wn/';
  const icon = weather.icon_code;

  const isoDateString = weather.datetime;

  const defaultTimeZone = "Asia/Hong_Kong"; // get the time zone for the location
  const localDate = moment.utc(isoDateString).tz(defaultTimeZone); // create a moment object in the specified time zone
  const formattedDate = localDate.format('MMM DD, hh:mm A z'); // format the date and time

  return (
    <div className="shadow-md p-2 mt-8 bg-white mx-auto max-w-xs rounded-lg overflow-hidden w-46 flex flex-col items-center justify-around">
      <h2 className="text-lg font-bold">{location}</h2>
      <p className="text-gray-500 text-base mb-2">{formattedDate}</p>
      <img src={`${iconUrl}${icon}@2x.png`} alt="weather-icon" />
      <p className="text-gray-500">{weather.weather_description}</p>
      <p className="text-2xl font-bold mt-2">{weather.temperature.toFixed(0)}°C</p>
      <p className="text-2xl font-bold mt-2">{weather.humidity.toFixed(0)}%</p>
    </div>

  );
};

export default WeatherCard;
