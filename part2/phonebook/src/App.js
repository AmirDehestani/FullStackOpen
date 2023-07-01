import { useState } from 'react';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState({ name: '' });

  const handleNameChange = (event) => setNewName({ name: event.target.value });
  const handleNameSubmit = (event) => {
    event.preventDefault();
    if (!persons.find((person) => person.name === newName.name)) {
      setPersons(persons.concat(newName));
      setNewName({ name: '' });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNameSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName.name} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
