import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import CountryServices from './services/CountryServices';

const App = () => {
  // App component state
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (query) {
      CountryServices.getAll()
        .then((response) =>
          response.filter((r) =>
            r.name.common.toLowerCase().includes(query.toLowerCase())
          )
        )
        .then((response) => setCountry(response));
    } else {
      setCountry(null);
    }
  }, [query]);

  // Handle query change in the search bar
  const handleQueryChange = (event) => {
    const countryQuery = event.target.value;
    setQuery(countryQuery);
  };

  return (
    <>
      <SearchBar query={query} handleChange={handleQueryChange} />
      {country ? <SearchResults countries={country} /> : null}
    </>
  );
};

export default App;
