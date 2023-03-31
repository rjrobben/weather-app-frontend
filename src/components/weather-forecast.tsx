import React from 'react';
import WeatherCard from './weather-card';
import { WeatherCardProps } from './weather-card';

export interface WeatherForecastProps {
  [date: string]: WeatherCardProps;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({data}) => {
    if (!isValidData(data)) {
        throw new Error('Invalid weather data');
    }
    return (
        <div className='flex flex-wrap -mx-4'>
            {Object.keys(data).map((date) => {
                const weatherData = data[date];
                return (
                    <WeatherCard
                        location={weatherData.location}
                        weather={weatherData.weather}
                    />
                )
            })}
        </div>
    );
}

function isValidData(values: any): values is WeatherForecastProps {
  return Object.values(values).every(isValidWeatherData);
}

function isValidWeatherData(value: any): value is WeatherCardProps {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.location === 'string' &&
    typeof value.weather === 'object'
  );
}


export default WeatherForecast;
