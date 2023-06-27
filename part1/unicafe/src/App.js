import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const total = props.total;

  return (
    <>
      <h1>statistics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {(good - bad) / total}</p>
      <p>positive {(good / total) * 100} %</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const increaseByOne = (feedback) => {
    if (feedback === 'good') {
      setGood(good + 1);
    } else if (feedback === 'neutral') {
      setNeutral(neutral + 1);
    } else if (feedback === 'bad') {
      setBad(bad + 1);
    }
    setTotal(total + 1);
  };

  return (
    <>
      <h1>give feedback</h1>

      <Button handleClick={() => increaseByOne('good')} text={'good'} />
      <Button handleClick={() => increaseByOne('neutral')} text={'neutral'} />
      <Button handleClick={() => increaseByOne('bad')} text={'bad'} />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </>
  );
};

export default App;
