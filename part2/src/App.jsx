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

/*
import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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
        number: newNumber,
      }

      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const filteredPersons = persons.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} setSearch={setSearch}/>

      <h3>Add a New Person</h3>

      <PersonForm 
        newName={newName}
        nameHandler={handleNameChange}
        newNumber={newNumber}
        numberHandler={handleNumberChange}
        update={updatePhonebook}
      />

      <h3>Numbers</h3>

      <Persons persons={filteredPersons}/>
    </div>
  )
}

*/

//==============================================
//
// Part 2c: Getting data from the server
// Sub-section 1: Browser as a runtime environment
//
// Notes: - JavaScript runtime environments follow the asynchronous model
//        - Requires all I/O operations to be executed as non-blocking, meaning you don't
//          wait for it to return, you just move on to the next line
//        - JavaScript engines are inherently single-threaded, so non-block model is 
//          very necessary to avoid freezes
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
// Sub-section 2: Axios and promises
//
// Notes: - To run the server so that we can access db.json, run ```npm run server```
//        - A promise is an object representing the eventual completionn or failure 
//          of an async operation
//        - A promise can have 3 states: fulfilled, pending, rejected
//        - If we want to access the result of the operation, we must register an event
//          handler to the promise, using the method 'then'
//        - 'response' has all the HTTP GET data
//
//==============================================

/*
import axios from 'axios'

// This gets 'fulfilled' since it exists
// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise)

// Storing the promise as a variable isn't common convention, usually just chain it
axios.get('http://localhost:3001/notes').then(response => {
  console.log(response)
})

// This gets 'rejected' since it does not exist
// const promise2 = axios.get('https://localhost:3001/foobar')
// console.log(promise2)
*/

//==============================================
//
// Sub-section 3: Effect-hooks
//
// Notes: - Effects let a component connect to and sync with external systems -- includes
//          dealing with network, browser DOM, animations, widgets, etc. written by a 
//          different UII library and otther non-React code
//        - Good for fetching data from a server
//
//==============================================

/*
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from "./components/Note"

const App = () => {
  const [notes, setNotes] = useState([])  // changed to an array, no props
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  //*=======* EFFECT ADDITION START *=======*
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes') // fetch data from our json server
      .then(response => {                 // after data arrives, execute event handler
        console.log('promise fulfilled')  
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')
  //*=======* EFFECT ADDITION END *=======*

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
// Sub-section 4: Development Runtime Environment
//
// Notes: - Suppose we have four areas to deal with: Browser, Data, React-Dev-Server, and
//          the JSON-Server
//        - Browser: Holds the React app and is where we run the app
//        - React-Dev-Server: Sends the JavaScript to the browser via `npm run dev`, Gets
//                            app.js and index.js from data
//        - JSON-Server: Sends JSON to the Browser, Gets db.json from data
//
//==============================================

//==============================================
//
// Sub-section 2.11->: Exercises
//
// Notes: - `useEffect` here properly allows us to store the phonebook information
//          somewhere else, which here is db.json, and then just update a state array
//          with its information when needed
//
//==============================================

/*
import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  //*=======* EFFECT ADDITION START *=======*
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons') // fetch data from our json server
      .then(response => {                 // after data arrives, execute event handler
        console.log('promise fulfilled')  
        setPersons(response.data)
      })
  }, [])
  //*=======* EFFECT ADDITION END *=======*

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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
        number: newNumber,
      }

      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const filteredPersons = persons.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} setSearch={setSearch}/>

      <h3>Add a New Person</h3>

      <PersonForm 
        newName={newName}
        nameHandler={handleNameChange}
        newNumber={newNumber}
        numberHandler={handleNumberChange}
        update={updatePhonebook}
      />

      <h3>Numbers</h3>

      <Persons persons={filteredPersons}/>
    </div>
  )
}
*/

//==============================================
//
// Part 2d: Altering data in server
// Sub-section 1: REST
//
// Notes: - Resources: Individual data objects, such as our notes or phonebook
//                  > Every resource has a unique address associated with it - its URL
//        - Resources are fetched from the server with HTTP GET requests
//        - Creating a new resource for storing a note is done through an HTTP POST request
//        - JSON-Server requires data to be sent in JSON format
//
//==============================================

//==============================================
//
// Sub-section 2: Sending Data to Server
//
// Notes: - We can modify data within the JSON-Server by either using:
//          1. HTTP PUT - to replace the note or object here
//          2. HTTP PATCH - to change only some of  the note's properties
//
//==============================================

/*
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from "./components/Note"

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}` // defines URL for each resource
    const note = notes.find(n => n.id === id)       // find the note we want to modify
    // create an exact copy of the note we found, except for the important property
    const changedNote = { ...note, important: !note.important }

    axios.put(url, changedNote).then(response => {
      // update notes array (if the curr notes id is the same as the id of the note
      // we want to change the importance of, then add the new note to the array, 
      // if it's note, add the old note to the new array)
      setNotes(notes.map(note => note.id === id ? response.data : note))
    })
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes') // fetch data from our json server
      .then(response => {                 // after data arrives, execute event handler
        console.log('promise fulfilled')  
        setNotes(response.data)
      })
  }, [])

  // Event handler to the form element, called when form is submitted
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    axios 
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
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
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
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
// Sub-section 3: Extracting Communication with the Backend into a Separate Module
//
// Notes: - Created src/services and notes.js
//
//==============================================

/*
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from "./components/Note"
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  // *========= REVISED VERSION USING NOTESERVICE
  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)       // find the note we want to modify
    // create an exact copy of the note we found, except for the important property
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id == id ? returnedNote : note))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from the server`
        )
        // update notes, keeping the ones on the server and removing the non-existant one
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  // *========= REVISED VERSION USING NOTESERVICE
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  // *========= REVISED VERSION USING NOTESERVICE
  // Event handler to the form element, called when form is submitted
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
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
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
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
// Sub-section 5: Promises and Errors
//
// Notes: - Error 404 (Not Found) appears if we display a non-existing note and try to
//          change its importance when it doesn't exist on the server
//        - Handling rejected promises can be done through using `catch` method as an error
//          handler
//          - It is just added after the .then as a .catch handle
//          - If we have multiple .thens, creating a chain, if any single one of them results
//            in an error, the .catch is ran
//
//==============================================

//==============================================
//
// Sub-section 2.12->: Exercises
//
// Notes: - 
//
//==============================================

/*
import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import personService from './services/persons'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  //*=======* EFFECT ADDITION START *=======*
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons') // fetch data from our json server
      .then(response => {                 // after data arrives, execute event handler
        console.log('promise fulfilled')  
        setPersons(response.data)
      })
  }, [])
  //*=======* EFFECT ADDITION END *=======*

  const removePerson = (id) => {
    personService
      .remove(id)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id == id ? returnedPerson : person))
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const updatePhonebook = (event) => {
    event.preventDefault()
    let flag = true
    
    persons.forEach(person => {
      if (person.name == newName) {
        if (confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
          const personObject = {
            id: String(person.id),
            name: person.name,
            number: newNumber,
          }

          personService
            .update(person.id, personObject)
        }

        // can stay so that the new person logic continues
        flag = false
      }
    })

    if (flag == true) {
      const personObject = {
        id: String(persons.length + 1),
        name: newName,
        number: newNumber,
      }

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
      })
    }
  }

  const filteredPersons = persons.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} setSearch={setSearch}/>

      <h3>Add a New Person</h3>

      <PersonForm 
        newName={newName}
        nameHandler={handleNameChange}
        newNumber={newNumber}
        numberHandler={handleNumberChange}
        update={updatePhonebook}
      />

      <h3>Numbers</h3>

      <ul>
        {filteredPersons.map(person => 
          <Person key={person.id} person={person} remove={() => {removePerson(person.id)}}/>
        )}
      </ul>
    </div>
  )
}
*/


//==============================================
//
// Part 2e: Adding styles to React app
// Sub-section 1: ...
//
// Notes: - Handled in index.css
//
//==============================================

import './index.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from "./components/Note"
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  // *========= REVISED VERSION USING NOTESERVICE
  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)       // find the note we want to modify
    // create an exact copy of the note we found, except for the important property
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id == id ? returnedNote : note))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from the server`
        )
        // update notes, keeping the ones on the server and removing the non-existant one
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  // *========= REVISED VERSION USING NOTESERVICE
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  // *========= REVISED VERSION USING NOTESERVICE
  // Event handler to the form element, called when form is submitted
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
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
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
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


export default App
