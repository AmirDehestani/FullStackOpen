import { useState, useEffect } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import axios from 'axios';

const App = () => {
  // App compontent state
  const [persons, setPersons] = useState([]);
  const [newPerson, setnewPerson] = useState({ name: '', number: '' });
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([
    { name: '', numebr: '' },
  ]);

  // Load the data from database
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((respond) => setPersons(respond.data));
  }, []);

  // Handlers
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
      <Filter searchQuery={search} handleChange={handleSearchChange} />

      <h2>add a new</h2>
      <PersonForm
        handleSubmit={handleNameSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        person={newPerson}
      />

      <h2>Numbers</h2>
      <Persons persons={!search ? persons : searchResults} />
    </div>
  );
};

export default App;
