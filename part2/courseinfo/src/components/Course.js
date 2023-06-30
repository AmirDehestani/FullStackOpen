const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part} />);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      <b>total of {totalExercises} exercises</b>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
