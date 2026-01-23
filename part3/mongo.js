const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give a password as argument')
    process.exit(1)
}

// Command is run as: node mongo.js yourPassword
const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.bafwnk8.mongodb.net/noteApp?appName=Cluster0`

mongoose.set('strictQuery', false)

// family: 4 specifies that the connection should always use IPv4 addressing
mongoose.connect(url, { family: 4 })

//====== NOTE SCHEME DEFINITION
// This tells Mongo how the note objects should be stored in the database
const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

// Model definition that allows us to create instances
// We can think of `models` as constructors that create new objects based on parameters
const Note = mongoose.model('Note', noteSchema)

// Note Generation code
/*
const note = new Note({
    content: 'Mongoose makes things easy',
    important: true,
})

note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})
*/


// Retrieves all of the notes that we have added and prints them to the console
// find({}) fetches us all notes
// We could restrict our search but instead of writing {}, we wrote { important: true }
Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})
