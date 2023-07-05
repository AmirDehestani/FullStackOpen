import axios from 'axios';

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

const CountryServices = { getAll, getCountry };

export default CountryServices;
