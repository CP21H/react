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
  /*
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
  */

//==============================================
//
// Sub-section 3: Page re-rendering
//
// Notes: - Handled in main.jsx
//
//==============================================

/*
const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}
*/  

//==============================================
//
// Sub-section 4: Stateful Component
//
// Notes: - When setCounter is called, the react component is re-rendered
//
//==============================================

import { useState } from "react"

/*
const App = () => {
  // Array containing two items, counter, setCounter
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    // setCounter becomes a function that increments counter by 1
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}
*/

//==============================================
//
// Sub-section 5: Event handling
//
// Notes: - Event handlers are declared where we declare their onClick attributes
//        - They should, though, be declared as their own functions before use to just 
//          reference them
//
//==============================================


/* const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        subtract
      </button>
      <button onClick={() => setCounter(0)}>
        zero
      </button>
    </div>
  )
  

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
 
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
} 
*/

//==============================================
//
// Sub-section 6: Passing state to child components
//
// Notes: - Moving the counter div and separate buttons to their own components
//        - REACT CONVENTION: onSomething name for props which take functions
//        - REACT CONVENTION: handleSomething for the actual function which handles events
//        - Calling a function that changes the state causes the component to rerender
//
//==============================================

/*
const Display = ( {counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ( {onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)
 
  return (
    <div>
      <Display counter={counter}/>
      <Button 
        onClick = {increaseByOne}
        text = 'plus'
      />
      <Button 
        onClick = {setToZero}
        text = 'zero'
      />
      <Button 
        onClick = {decreaseByOne}
        text = 'minus'
      />
    </div>
  )
}
*/

//==============================================
//
// Part 1d: Complex state, debugging React Apps
// Sub-section 1: Complex state
//
// Notes: - For handling more complex state, we can use useState() multiple times
//        - OBJECT SPREAD SYNTAX: Adding ...objectName copies over properties of the object
//          then we can specify the particular ones we want to change
//        - REACT CONVENTION: It is forbidden to mutate state directly, ex: clicks.left++
//
//==============================================

/*
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => 
    setClicks({ ...clicks, left: clicks.left + 1})

  const handleRightClick = () => 
    setClicks({ ...clicks, right: clicks.right + 1})

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}
*/  

//==============================================
//
// Sub-section 2: Handling arrays
//
// Notes: - concat returns a new copy of the array as opposed to mutating the existing one
//
//==============================================

/*
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
  */

//==============================================
//
// Sub-section 3: Update of the state is asynchronous
//
// Notes: - State updates in React happen asynchronously, meaning not immediately but at
//          some point
//
//==============================================

/*
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    // OLD WAY
    //setLeft(left + 1)
    //setTotal(left + right)
    
    // NEW -- IMMEDIATE WAY TO REFLECT ASYNC
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    // OLD WAY
    //setRight(right + 1)
    //setTotal(left + right)

    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
    </div>
  )
}
*/

//==============================================
//
// Sub-section 4: Conditional Rendering
//
// Notes: - History here, through if statements, acts as a conditional renderer of state
//          in our application
//        - Refactored to include button component to handle clicks
//
//==============================================

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}

//==============================================
//
// Sub-section 5: Debugging
//
// Notes: - Having the console open is a must at all times
//        - Classic print statement testing for informative, line-by-line display
//        - If we write "debugger" somewhere in the app, the app will pause there 
//        - React developer tools extension can be used to debug in Chrome
//
//==============================================

//==============================================
//
// Sub-section 6: Rules of Hooks
//
// Notes: - useState and useEffect must not be called from inside of a loop or any place 
//          that is not a function which defines a component
//        - This is to ensure that hooks are called in the correect order
//
//==============================================

//==============================================
//
// Sub-section 7: Event-handling revisited
//
// Notes: - Event handlers must always be a function or a reference to a function
//
//==============================================

//==============================================
//
// Sub-section 8: Passing Event Handlers to Child Components
//
// Notes: - 
//
//==============================================

export default App