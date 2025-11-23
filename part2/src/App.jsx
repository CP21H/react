import { useState } from 'react'
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

export default App
