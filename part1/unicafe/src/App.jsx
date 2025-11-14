import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Header = () => {
  return (
    <h1>give feedback</h1>
  )
}

const Statistics = (props) => {
  return (
    <>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const setToGood = (newValue) => {
    setGood(newValue)
    setAll(all + 1)
  }
  const setToNeutral = (newValue) => {
    setNeutral(newValue)
    setAll(all + 1)
  }

  const setToBad = (newValue) => {
    setBad(newValue)
    setAll(all + 1)
  }

  return (
    <div>
      <Header />
      <Button onClick={() => setToGood(good + 1)} text="good" />
      <Button onClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setToBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App