import React from "react";
import { useState } from "react";

const Header = ({ header }) => {
  return <h1>{header}</h1>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Para = ({ text, votes }) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

const MostVoted = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes);
  const totalVotes = votes.indexOf(maxVotes);
  if (maxVotes === 0) {
    return (
      <div>
        <p>No votes yet</p>
      </div>
    );
  }
  return <Para text={anecdotes[totalVotes]} votes={maxVotes} />;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const randomSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const toVotes = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <Header header="Anecdote of the day" />
      <Para votes={votes[selected]} text={anecdotes[selected]} />
      <Button handleClick={toVotes} text="Vote" />
      <Button handleClick={randomSelected} text="Next Anecdote" />
      <Header header="Anecdote with most votes" />
      <MostVoted anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
