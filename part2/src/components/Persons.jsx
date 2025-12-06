const Persons = ({ persons }) => {
    return (
        <ul>
        {persons.map(person => 
          <li>{person.name} {person.number}</li>
        )}
      </ul>
    )
}

export default Persons