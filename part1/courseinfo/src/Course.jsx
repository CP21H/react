const Part = ({ pname, exercises, pid }) => {
  return (
    <>
      <p>{pname}: {exercises}</p>
    </>
  )
}

const Total = (props) => {
  const initialValue = 0;
  // reduce() allows us to do this sort of summation in a concise manner
  const total = props.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue,
  );

  return (
    <>
      <p><strong>Total Exercises: {total}</strong></p>
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

export default Course