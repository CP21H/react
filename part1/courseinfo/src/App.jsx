const Part = ({ pname, exercises, pid }) => {
  return (
    <>
      <p>{pname}: {exercises}</p>
    </>
  )
}

const Course = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      {
        props.parts.map(part => 
          <Part key={part.id} pname={part.name} exercises={part.exercises} pid={part.id}/>
        )
      }
      <Total parts={props.parts}/>
    </>
  )
}

const Total = (props) => {
  let total = 0;
  for (const part of props.parts) {
    total += part.exercises;
  }
  return (
    <>
      <p><strong>Total Exercises: {total}</strong></p>
    </>
  )
}

const App = () => {
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {
      name: 'Redux',
      exercises: 11,
      id: 4
    }
  ]

  return (
    <div>
      <Course name={'Half Stack application development'} parts={parts} />
    </div>
  )
}

export default App