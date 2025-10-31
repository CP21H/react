//==============================================
//
// Part 1b: JavaScript
// Sub-section 1: ECMAScript
//
// Notes: - Official name of JavaScript standard is ECMAScript
//        - Since browsers might not support all of JS's new features, a lot of code run in
//          browsers is transspiled from a newever version of JS to an older one
//        - Transpiling can be done via Babel, React automatically transpiles
//        - Node.js is a JS runtime environment where the latest versions of JS run on, so
//          code doesn't need to be transpiled
//        - Write to files in Node by using: `node name_of_file.js`
//
//==============================================

//==============================================
//
// Sub-section 2: Variables
//
// Notes: - const works as expected 
//        - let defines a normal variable
//        - var used to be the only way to define variables until ES6, where const and let
//          were introduced
//
//==============================================
const x = 1
let y = 5

console.log(x, y)   // 1 5
y += 10
console.log(x, y)   // 1 15
y = 'sometext'
console.log(x, y)   // 1 sometext
x = 4 

//==============================================
//
// Sub-section 3: Arrays
//
// Notes: - const on an array just means the position of the array in memory can not move
//          the contents of that array are mutable we can push or pop still
//        - forEach calls the function specified for each of the items in the array
//        - Instead of push, use concat to create a new array and push an item
//        - map can take in a function as a parameter and uses it to create items
//        - Destructuring assignment can be done with using ...rest, which collects items
//
//==============================================
const t = [1, -1, 3]

t.push(5)           

console.log(t.length)   // 4 is printed
console.log(t[1])       // -1 printed

t.forEach(value => {
    console.log(value)  // 1, -1, 3, 5 printed on new lines
})

// Concat as opposed to push
const t2 = t.concat(5)  // creates new array

// Maps
const w = [1, 2, 3]
const m1 = t.map(value => value * 2)
console.log(m1)         // [2, 4, 6]

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)         // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]  

// ...rest
const t10 = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t10

console.log(first, second)  // 1 2 printed
console.log(rest)           // 3, 4, 5 printed

//==============================================
//
// Sub-section 4: Objects
//
// Notes: - One way to define objects is through 'Object Literals', by listing properties
//          in braces {}
//        - Values of these properties can be any type
//        - Object properties are referenced via dot operator or brackets
//        - Properties can also be dynamically added by using dot notation or brackets
//
//==============================================

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies', 
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan', 
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(object1.name)       // Arto Hellas printed
const fieldName = 'age'
console.log(object1[fieldName]) // 35 printed

// Dynamic property addition
object1.address = 'Helsinki'
object1['secret number'] = 12341

//==============================================
//
// Sub-section 5: Functions
//
// Notes: - One line arrow functions can be useful for when we use map()
//        - Arrow function was added in 2015, ES6
//        - Before arrow functions, you had to write functions using 'function'
//
//==============================================

// Arrow Function, multi-parameter, Standard
const sum = (p1, p2) => {
   console.log(p1)
   console.log(p2)
   return p1 + p2 
}

const result = sum(1, 5)
console.log(result)

// Arrow Function, single-parameter, Standard
const square = p => {
    console.log(p)
    return p * p 
}

const square_on_one_line = p => p * p

const t_new = [1, 2, 3]
const tSquared = t.map(p => p * p)

// Old, pre-ES6, function declaration
function product(a, b) {
    return a * b
}

const result_new = product(2, 6)

// Old, pre-ES6, funnction expression
const average = function(a, b) {
    return (a + b) / 2
}

const result_again = average(2, 5)

//==============================================
//
// Sub-section 6: Object methods and "this"
//
// Notes: - React Hooks actually make it so that we don't need to define objects with
//          methods
//        - We can assign methods to an object by defining props that are functions
//        - Methods can be assigned to objects even after creation
//
//==============================================

const arto = {
    name: 'Arto Hellas', 
    age: 35,
    education: 'PhD',
    greet: function() {
        console.log('hello, my name is ' + this.name)
    },
}

arto.greet()

arto.growOlder = function() {
    this.age += 1
}

console.log(arto.age)   // 35
arto.growOlder()
console.log(arto.age)   // 36

//==============================================
//
// Sub-section 7: Classes
//
// Notes: - ES6 simplified class definition for JS which usually has no class mechanism
//        - In React, we typically won't use classes because we can use Hooks
//
//==============================================
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hello, my name is' + this.name)
    }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()

const janja = new Person('Janja Garnbret', 23)
janja.greet()