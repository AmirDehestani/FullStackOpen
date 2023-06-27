import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = (props) => (
  <p>
    {props.text} {props.value}
  </p>
);

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const total = props.total;

  return total ? (
    <>
      <StatisticLine text={'good'} value={good} />
      <StatisticLine text={'neutral'} value={neutral} />
      <StatisticLine text={'bad'} value={bad} />
      <StatisticLine text={'total'} value={total} />
      <StatisticLine text={'average'} value={(good - bad) / total} />
      <StatisticLine text={'positive'} value={`${(good / total) * 100} %`} />
    </>
  ) : (
    <p>No feedback given</p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const giveFeedback = (feedback) => {
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

      <Button handleClick={() => giveFeedback('good')} text={'good'} />
      <Button handleClick={() => giveFeedback('neutral')} text={'neutral'} />
      <Button handleClick={() => giveFeedback('bad')} text={'bad'} />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </>
  );
};

export default App;
