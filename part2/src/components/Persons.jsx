const Persons = ({ persons, remove }) => {
    return (
      <ul>
        {persons.map(person => 
          <li key={person.id}>{person.id} {person.name} {person.number} <button onClick={() => {
            remove(key)
          }}>delete</button></li>
        )}
      </ul>
    )
}

export default Persons