//==============================================
//
// Part 1: Introduction to React
// Sub-section 1: Components
//
// Notes: - App.jsx now defines a React Component with the name App
//        - When using React, all content that needs to be rendered is usually defined 
//          inside React Components, so it's not like you're writing HTML directly  
//        - We can render dynamic content inside of a component
//        - Components MUST start with a Capitalized letter
//
//==============================================

/*
const App = () => {
  // Rendering dynamic content inside of a component
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}!</p>
      <p>{a} + {b} is {a+b}</p>
    </div>
  )
}
*/

//==============================================
//
// Sub-section 2: JSX
//
// Notes: - React components are written using JSX, a syntactical extension to JavaScript
//        - JSX turns our HTML-looking code into JavaScript pure that is then compiled by
//          Babel
//        - Curly braces { } are evaluated as JavaScript
//        - Every tag needs to be closed, <br> becomes <br />
//
//==============================================

//==============================================
//
// Sub-section 3: Multiple Components
//
// Notes: - Writing components and using them within other components is a core tenet of 
//          React philosophy, and makes it very easy to keep a maintainable application
//        - App is known as the 'Root Component' and is at the top of the component tree
//
//==============================================

/*
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}
*/

//==============================================
//
// Sub-section 4: Props
//
// Notes: - Props allow us to pass data to components
//        - Props are just passed in as a parameter to the component, defined in App
//        - Props can be defined as variables or the result of an expression
//
//==============================================

/*
const Hello = (props) => {
  console.log(props)
  return (
    <div> 
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  // Fragments let you group elemeents wiithout a wrapper node
  // Instead of having another <div> element added to the DOM, just use <> and </>
  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26+10} />
      <Hello name={name} age={age} />
    </>
  )
}
*/  

//==============================================
//
// Sub-section 5: Do not render objects
//
// Notes: - When rendering objects that might have "levels" to them, you can not render
//          the entire object itself, you need to render the primitives
//        - This is the difference betwee: friends[0] and friends[0].name
//        - React WILL, however, render arrays if the array contains values that are
//          themselves primitives and not objects
//
//==============================================

//==============================================
//
// Part 1C: Component state, event handlers
// Sub-section 1: Component helper functionss
//
// Notes: - In the bornYear() function we added to the component, we don't need to pass
//          in any parameters because it can already access props
//        - Defining functions within functions like this is common practice in JavaScript
//          and is how we create helper functions that make sense in terms of location
//
//==============================================

/*
const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  

  return (
    <div> 
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26+10} />
      <Hello name={name} age={age} />
    </>
  )
}
*/

//==============================================
//
// Sub-section 2: Destructuring
//
// Notes: - Streamline components by shortening what we have to write with destructuring
//        - Instead of using props.name every time, just store it as name, same with age
//
//==============================================

// You can even take it a step further and use the convention in the parameter list
// const Hello = ({name, age}) => {}
const Hello = (props) => {
  const name = props.name
  const age = props.age
  // CAN ALSO BE DONE LIKE THIS, AND STILL WORK THE SAME:
  // const {name, age} = props

  const bornYear = () => new Date().getFullYear() - age
  
  return (
    <div> 
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

//==============================================
//
// Sub-section 3: Page re-rendering
//
// Notes: - Handled in main.jsx
//
//==============================================

const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}

export default App