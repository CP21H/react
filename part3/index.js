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