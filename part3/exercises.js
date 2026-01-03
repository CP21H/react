//==============================================
//
// Part 3.1 - 3.6 Exercises
//  
// Notes: - 
//
//==============================================

const express = require('express')
const app = express()

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

// Route 1: Basic API Home
app.get('/', (request, response) => {
    response.send('<h1>Exercises 3.1 - 3.6</h1>')
})

// Route 2: API: JSON Data View
app.get('/api/persons', (request, response) => {
    response.json(persons)
})

// Route 3: Generic Info. 
app.get('/info', (request, response) => {
    const now = new Date()
    response.send(`<p>Phonebook has info for ${persons.length} people</p>
        <p>${now}</p>`)
})

// Route 4: API: Individual Person Data
app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

// Deletion: Required here as a way to handle deletions
app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

// Adding Data via POST
app.use(express.json())

const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(n => Number(n.id)))
        : 0
    return String(maxId + 1)
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name && !body.number) {
        return response.status(404).json({
            error: 'content missing'
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number,
    }

    persons = persons.concat(person)

    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})