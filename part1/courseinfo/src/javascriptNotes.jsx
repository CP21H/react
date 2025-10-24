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
// Notes: - 
//
//==============================================
