import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';

const questions = [
  {
    questionText: 'What is React?',
    answerOptions: [
      { answerText: 'A server-side framework', isCorrect: false },
      { answerText: 'A front-end JavaScript library', isCorrect: true },
      { answerText: 'A database', isCorrect: false },
      { answerText: 'A programming language', isCorrect: false },
    ],
  },
  {
    questionText: 'Who developed React?',
    answerOptions: [
      { answerText: 'Google', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
      { answerText: 'Facebook', isCorrect: true },
      { answerText: 'Twitter', isCorrect: false },
    ],
  },
  {
    questionText: 'What is JSX?',
    answerOptions: [
      { answerText: 'A templating engine', isCorrect: false },
      { answerText: 'A CSS preprocessor', isCorrect: false },
      { answerText: 'A syntax extension for JavaScript', isCorrect: true },
      { answerText: 'A database query language', isCorrect: false },
    ],
  },
  {
    questionText: 'What is a React component?',
    answerOptions: [
      { answerText: 'A function or class that optionally accepts input and returns a React element', isCorrect: true },
      { answerText: 'A piece of server-side logic', isCorrect: false },
      { answerText: 'A configuration file', isCorrect: false },
      { answerText: 'A type of data structure', isCorrect: false },
    ],
  },
  {
    questionText: 'How do you create a React component?',
    answerOptions: [
      { answerText: 'Using the `new` keyword', isCorrect: false },
      { answerText: 'By extending a base class or creating a function', isCorrect: true },
      { answerText: 'Using the `create` method', isCorrect: false },
      { answerText: 'By defining a schema', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the purpose of state in React?',
    answerOptions: [
      { answerText: 'To store global variables', isCorrect: false },
      { answerText: 'To handle asynchronous operations', isCorrect: false },
      { answerText: 'To manage dynamic data within a component', isCorrect: true },
      { answerText: 'To define the component’s styles', isCorrect: false },
    ],
  },
  {
    questionText: 'How do you pass data to a React component?',
    answerOptions: [
      { answerText: 'Using props', isCorrect: true },
      { answerText: 'Using state', isCorrect: false },
      { answerText: 'Using context', isCorrect: false },
      { answerText: 'Using hooks', isCorrect: false },
    ],
  },
  {
    questionText: 'What is a React hook?',
    answerOptions: [
      { answerText: 'A feature that lets you hook into the lifecycle of a component', isCorrect: false },
      { answerText: 'A function that lets you use state and other React features in functional components', isCorrect: true },
      { answerText: 'A special method for managing props', isCorrect: false },
      { answerText: 'A way to fetch data from an API', isCorrect: false },
    ],
  },
  {
    questionText: 'What does the `useEffect` hook do?',
    answerOptions: [
      { answerText: 'Fetches data from an API', isCorrect: false },
      { answerText: 'Lets you perform side effects in function components', isCorrect: true },
      { answerText: 'Updates the state of a component', isCorrect: false },
      { answerText: 'Handles user input', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the virtual DOM?',
    answerOptions: [
      { answerText: 'A copy of the real DOM kept in memory', isCorrect: true },
      { answerText: 'A method for routing in React applications', isCorrect: false },
      { answerText: 'A server-side feature', isCorrect: false },
      { answerText: 'A styling mechanism', isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          handleAnswerButtonClick={handleAnswerButtonClick}
        />
      )}
    </div>
  );
}

export default App;
