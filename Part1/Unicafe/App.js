import React from "react";
import { useState } from "react";

const Header = () => {
  return <h1>Give feedback</h1>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  } else
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text="Good" value={props.good} />
        <StatisticLine text="Neutral" value={props.neutral} />
        <StatisticLine text="Bad" value={props.bad} />
        <StatisticLine text="All" value={props.all} />
        <StatisticLine text="Average" value={props.average} />
        <StatisticLine text="Positive" value={props.positive + " %"} />
      </div>
    );
};

const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = ((good * 1 + neutral * 0 + bad * -1) / all).toFixed(1);
  const positive = ((good / all) * 100).toFixed(1);

  const plusFeed = () => {
    setGood(good + 1);
  };

  const neutralFeed = () => {
    setNeutral(neutral + 1);
  };

  const badFeed = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header />
      <Button handleClick={plusFeed} text="Good" />
      <Button handleClick={neutralFeed} text="Neutral" />
      <Button handleClick={badFeed} text="Bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
