//==============================================
//
// Part 3: Programming a server with NodeJS and Express
// Part 3a: Node.js and Express
//
// Notes: - We can run the program using either:
//          > node index.js
//          > npm start (works because we defined it in the package.json file)
//
//==============================================

//==============================================
//
// Sub-section 1: Simple web server
//
// Notes: - Primary purpose of the backend will be to offer raw data in JSON format to 
//          the frontend
//
//==============================================

/*
const http = require('http')

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(notes))   // respond.end() expects either string or buffer
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
*/


//==============================================
//
// Sub-section 2: Express
// Sub-section 3: Web and Express
//
// Notes: - Implementing server code with Node's built in http web server is possible,
//          but it takes a lot of time
//        - Express is the most popular library used to make server-side dev. easier
//
//==============================================

/*
const express = require('express')
const app = express()

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

// Route 1
app.get('/', (request, response) => {
  response.send('<h1>Hello world!</h1>')
})

// Route 2: JSON stringifies the notes list
app.get('/api/notes', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
*/

//==============================================
//
// Sub-section 4: Automatic Change Tracking
//  
// Notes: - By adding `--watch` to our start command, we can force the server to restart
//          every time it gets updated, new command is: `node --watch index.js`
//        - Such command is now ran with `npm run dev` since we defined it in package.json
//
//==============================================

//==============================================
//
// Sub-section 5: REST
//  
// Notes: - Single things are called resources in REST
//        - Suppose you have a resource type `notes` and a note resource with identifier 10,
//          then it has the unique address: .../api/notes/10
//        - URL: notes/10 - GET - fetches a single resource
//        - URL: notes - GET - fetches all resources in collection
//        - URL: notes - POST - creates a new resource based on request data
//        - URL: notes/10 - DELETE - removes the identified resource
//        - URL: notes/10 - PUT - replaces the entire identified resource with the request data
//        - URL: notes/10 - PATCH - replaces a part of the identified resource with request data
//
//==============================================

//==============================================
//
// Sub-section 6: Fetching a single resource
//  
// Notes: - Parameters can be defined in Express using the colon syntax
//        - ID in routes can be accessed through the request parameter
//
//==============================================

const express = require('express')
const app = express()

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

// Route 1
app.get('/', (request, response) => {
  response.send('<h1>Hello world!</h1>')
})

// Route 2: JSON stringifies the notes list
app.get('/api/notes', (request, response) => {
  response.json(notes)
})

// Route 3: Notes individual resources
app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id
  const note = notes.find(note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})