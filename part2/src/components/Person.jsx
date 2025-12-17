const Person = ({ person, remove, update }) => {
    return (
      <li>
        {person.id} {person.name} {person.number}
        <button onClick={remove}>delete</button>
      </li>
    )
}

export default Person