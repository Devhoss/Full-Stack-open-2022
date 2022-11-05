import React from "react";

const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Content = ({ course }) => {
  let parts = course["parts"];
  const [part1, part2, part3] = parts;

  return (
    <>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
    </>
  );
};
const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Total = ({ course }) => {
  let total =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

/* COunter */

// import { useState } from "react";

// const Display = ({ counter }) => <div>{counter}</div>;

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const handleClick = () => {
//     setCounter(counter + 1);
//     console.log("rendering...", counter);
//   };

//   const reset = () => {
//     setCounter(0);
//   };

//   const minus = () => {
//     return setCounter(counter - 1);
//   };

//   // setTimeout(() => setCounter(counter + 1), 1000);

//   return (
//     <>
//       <Display counter={counter} />
//       <Button onClick={handleClick} text="Plus" />
//       <Button onClick={reset} text="Reset" />
//       <Button onClick={minus} text="minus" />
//     </>
//   );
// };
// import { useState } from "react";

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return <div>the app is used by pressing the buttons</div>;
//   }
//   return <div>button press history: {props.allClicks.join(" ")}</div>;
// };

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>{text}</button>
// );

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L"));
//     setLeft(left + 1);
//   };

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"));
//     setRight(right + 1);
//   };
//   const reset = () => {
//     setLeft(0);
//     setRight(0);
//     setAll([]);
//   };

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text="left" />
//       <Button handleClick={handleRightClick} text="right" />
//       {right}
//       <Button handleClick={reset} text="Reset" />
//       <History allClicks={allClicks} />
//       <p>{allClicks.join(" ")}</p>
//     </div>
//   );
// };

export default App;
