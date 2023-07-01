const Persons = ({ persons }) =>
  persons.map((person) => <p key={person.name}>{person.name}</p>);

export default Persons;
