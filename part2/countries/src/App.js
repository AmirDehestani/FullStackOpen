import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import CountryServices from './services/CountryServices';

const App = () => {
  // App component state
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState([]);

  useEffect(() => {
    CountryServices.getNames()
      .then((response) =>
        response.filter((r) => r.toLowerCase().includes(query.toLowerCase()))
      )
      .then((response) => setCountry(response));
  }, [query]);

  // Handle query change in the search bar
  const handleQueryChange = (event) => {
    const countryQuery = event.target.value;
    setQuery(countryQuery);
  };

  return (
    <>
      <SearchBar query={query} handleChange={handleQueryChange} />
      <SearchResults countries={country} />
    </>
  );
};

export default App;
