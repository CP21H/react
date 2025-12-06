const PersonForm = ({ newName, nameHandler, newNumber, numberHandler, update }) => {

    return (
        <form>
            <div>name: <input value={newName} onChange={nameHandler}/></div>
            <div>number: <input value={newNumber} onChange={numberHandler}/></div>
            <div><button onClick={update} type="submit">add</button></div>
        </form>
    )
}


export default PersonForm