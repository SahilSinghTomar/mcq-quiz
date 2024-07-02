
import React from 'react';

function Score({ score, totalQuestions }) {
  return (
    <div>
      <h1>Your Score</h1>
      <p>{score} out of {totalQuestions}</p>
    </div>
  );
}

export default Score;
