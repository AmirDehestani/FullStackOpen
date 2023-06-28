import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
);

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const total = props.total;

  // Show the statistics only if some feedback has been given
  return total ? (
    <>
      <table>
        <tbody>
          <StatisticLine text={'good'} value={good} />
          <StatisticLine text={'neutral'} value={neutral} />
          <StatisticLine text={'bad'} value={bad} />
          <StatisticLine text={'total'} value={total} />
          <StatisticLine text={'average'} value={(good - bad) / total} />
          <StatisticLine
            text={'positive'}
            value={`${(good / total) * 100} %`}
          />
        </tbody>
      </table>
    </>
  ) : (
    <p>No feedback given</p>
  );
};

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // Keep track of the total feedbacks
  const [total, setTotal] = useState(0);

  const giveFeedback = (feedback) => {
    // Determine what kind of feedback it is and increment it by 1
    if (feedback === 'good') {
      setGood(good + 1);
    } else if (feedback === 'neutral') {
      setNeutral(neutral + 1);
    } else if (feedback === 'bad') {
      setBad(bad + 1);
    }
    // Regardless of the type of feedback, increment total feedbacks by 1
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
