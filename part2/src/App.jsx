import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


//==============================================
//
// Part 2a: Communicating with Server
// Sub-section 1: Rendering a Collection
//
// Notes: - Given a list of N elements, we can use a map to generate React elements
//        - Each element generated must have a unique key value
//        - Map
//          > Always creates a new array from the elements of the original array
//          > It 'maps' some input to become new output
//
//==============================================

/*
const App = (props) => {
  const { notes } = props

  return (
    <>
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map(note => 
            <li key={note.id}>
              {note.content}
            </li>)
          }
        </ul>
      </div>
    </>
  )
}
*/

//==============================================
//
// Sub-section 2: Anti-pattern: Array Indexes as Keys
//
// Notes: - We can use array indexes as keys instead of explicitly making a key / 
//          establishing an id for each
//        - This is NOT recommended
//
//==============================================

/*
const App = (props) => {
  const { notes } = props

  return (
    <>
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map((note, i) => 
            <li key={i}>
              {note.content}
            </li>)
          }
        </ul>
      </div>
    </>
  )
}
*/

//==============================================
//
// Sub-section 3: Refactoring Modules
//
// Notes: - Destructure props since we are only focusing on notes
//        - Separate single note creation into its own component
//
//==============================================

/*
import Note from "./components/Note"

const App = ( {notes} ) => {
  return (
    <>
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map(note => 
            <Note key={note.id} note={note} />
          )}
        </ul>
      </div>
    </>
  )
}
*/

//==============================================
//
// Part 2b: Forms
// Sub-section 1: Saving notes in the component state
//
// Notes: - How can we access the data that is stored in the input for the form?
//
//==============================================

/*
import { useState } from 'react'
import Note from "./components/Note"

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  // Event handler to the form element, called when form is submitted
  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  return (
    <>
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map(note => 
            <Note key={note.id} note={note} />
          )}
        </ul>
        <form onSubmit={addNote}>
          <input />
          <button type="submit">save</button>
        </form>
      </div>
    </>
  )
}
*/

//==============================================
//
// Sub-section 2: Controlled Component
//
// Notes: - target corresponds to the controlled input element
//        - event.target.value corresponds to the value of the input / how we access it
//        - setNotes is used here as the interface with which we interact with notes 
//          as a data structure passed in from main.jsx to manipulate its state
//        - But the original `notes` structure isn't mutated at all, we actually make
//          a copy of it since we never mutate state directly in React
//        - Conditional operator syntax shown in notesToShow
//
//==============================================

/*
import { useState } from 'react'
import Note from "./components/Note"

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  // Event handler to the form element, called when form is submitted
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  // Event handler that sets the new note content
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  // Show all functionality
  // const result = condition ? val1 : val2
  // If showAll is true, show all the notes, if false, show the important notes only
  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <>
      <div>
        <h1>Notes</h1>
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
          </button>
        </div>
        <ul>
          {notesToShow.map(note => 
            <Note key={note.id} note={note} />
          )}
        </ul>
        <form onSubmit={addNote}>
          <input 
            value={newNote}
            onChange={handleNoteChange}
          />
          <button type="submit">save</button>
        </form>
      </div>
    </>
  )
}
*/

//==============================================
//
// Sub-section 2.6->: Exercises
//
// Notes: - 

//==============================================

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const updatePhonebook = (event) => {
    event.preventDefault()
    const flag = true
    
    persons.forEach(person => {
      if (person.name == newName) {
        alert(`${newName} is in the phonebook`)
        flag = false
      }
    })

    if (flag == true) {
      const personObject = {
        id: String(persons.length + 1),
        name: newName,
      }

      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button onClick={updatePhonebook} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App
