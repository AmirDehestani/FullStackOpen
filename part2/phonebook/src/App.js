import { useState } from 'react';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newPerson, setnewPerson] = useState({ name: '', number: '' });
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([
    { name: '', numebr: '' },
  ]);

  const handleNameChange = (event) => {
    setnewPerson({ name: event.target.value, number: newPerson.number });
  };

  const handleNumberChange = (event) => {
    setnewPerson({ name: newPerson.name, number: event.target.value });
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setSearchResults(
      persons.filter((person) =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    if (
      persons.find(
        (person) =>
          JSON.stringify(person.name) === JSON.stringify(newPerson.name)
      )
    ) {
      window.alert(`${newPerson.name} is already added to the phonebook.`);
    } else {
      setPersons(persons.concat(newPerson));
      setnewPerson({ name: '', number: '' });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleSearchChange} value={search} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={handleNameSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newPerson.name} />
        </div>
        <div>
          number:{' '}
          <input onChange={handleNumberChange} value={newPerson.number} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <Persons persons={!search ? persons : searchResults} />
    </div>
  );
};

export default App;
