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

//==============================================
//
// Sub-section 7: Deleting resources
//  
// Notes: - Deletion happens bby making an HTTP DELETE request to the URL of the resource
//        - No consensus on what status code should return on DELETE, only two options are 
//          204 and 404
//
//==============================================

app.delete('/api/notes/:id', (request, response) => {
  const id = request.params.id
  notes = notes.filter(note => note.id !== id)  // keep the non-id notes

  response.status(204).end()
})

//==============================================
//
// Sub-section 8: POSTMAN & REST client
//  
// Notes: - DELETE URL used: http://localhost:3001/api/notes/2
//        - REST client makes it super easy to visualize how we can get API information
//          and what exactly is being returned. This is stored in the requests folder
//          where we can store HTTP requests and run them to view output
//
//==============================================

//==============================================
//
// Sub-section 9: Receiving data
//  
// Notes: - Adding a note happens through making an HTTP POST request to the notes address
//        - Use the Express json-parser to access the data easily
//        - It is important when using POSTMAN to make sure that we set the Body Content-Type
//          to JSON instead of the default Text
//        - If I wanted multiple requests in one file for REST client, you can separate them
//          using `###` as a divider
//
//==============================================

app.use(express.json())

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => Number(n.id)))
    : 0
  return String(maxId + 1)
}

app.post('/api/notes', (request, response) => {   
  const body = request.body

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = {
    content: body.content,
    important: body.important || false, // default to false if missing
    id: generateId(),
  }

  notes = notes.concat(note)
 
  response.json(note)
})

//==============================================
//
// Exercises 3.1 -> 3.6 handled in exercises.js
// and POSTMAN
//
//==============================================

//==============================================
//
// Sub-section 10: Middleware
//  
// Notes: - The Express json-parser is a middleware
//        - Middleware are functions that can be used for handling request and response
//          objects
//        - next() function yields control to the next middleware
//        - Middleware is then used using app.use(x)
//
//==============================================

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

const unknownEndpoint = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint)