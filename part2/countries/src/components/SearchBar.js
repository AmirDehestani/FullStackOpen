const SearchBar = ({ query, handleChange }) => {
  return (
    <p>
      find countries <input value={query} onChange={handleChange} />
    </p>
  );
};

export default SearchBar;
