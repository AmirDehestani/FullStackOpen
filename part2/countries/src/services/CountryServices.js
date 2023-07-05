import axios from 'axios';

// Returns the list of all countries' names
const getNames = () => {
  const request = axios.get(
    'https://studies.cs.helsinki.fi/restcountries/api/all'
  );
  return request.then((response) =>
    response.data.map((country) => country.name.common)
  );
};

// Return information about a country
const getCountry = (name) => {
  const request = axios.get(
    `https://studies.cs.helsinki.fi/restcountries/api/name/${name}`
  );
  return request;
};

const CountryServices = { getNames, getCountry };

export default CountryServices;
