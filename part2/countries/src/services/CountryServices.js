import axios from 'axios';

const WEATHER_API_KEY = process.env.REACT_APP_API_KEY;

// Returns the list of all countries
const getAll = () => {
  const request = axios.get(
    'https://studies.cs.helsinki.fi/restcountries/api/all'
  );
  return request.then((response) => response.data);
};

// Returns a single country by name
const getCountry = (country) => {
  const request = axios.get(
    `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`
  );
  return request.then((response) => response.data);
};

const getWeather = (lat, lon) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );
  return request.then((response) => response.data);
};

const CountryServices = { getAll, getCountry, getWeather };

export default CountryServices;
