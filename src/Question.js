
import React from 'react';

function Question({ question, handleAnswerButtonClick }) {
  return (
    <div>
      <h2>{question.questionText}</h2>
      <div>
        {question.answerOptions.map((answerOption, index) => (
          <button
            key={index}
            onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
