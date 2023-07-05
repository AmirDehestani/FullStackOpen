import CountryInformation from './CountryInformation';

const SearchResults = ({ countries }) => {
  if (countries.length === 1) {
    return <CountryInformation country={countries[0]} />;
  } else if (countries.length > 10) {
    return <div>Too many matches, specify another item.</div>;
  } else {
    return (
      <div>
        <ul>
          {countries.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default SearchResults;
