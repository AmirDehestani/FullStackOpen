import { useState } from 'react';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
  ]);
  const [newPerson, setnewPerson] = useState({ name: '', number: '' });

  const handleNameChange = (event) => {
    setnewPerson({ name: event.target.value, number: newPerson.number });
  };

  const handleNumberChange = (event) => {
    setnewPerson({ name: newPerson.name, number: event.target.value });
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
      <Persons persons={persons} />
    </div>
  );
};

export default App;
