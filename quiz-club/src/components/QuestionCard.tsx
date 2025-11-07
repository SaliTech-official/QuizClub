import React from "react";
import type { QuestionState } from "../types";

type Props = {
  question: QuestionState;
  checkAnswer: (answer: string) => void;
  userAnswer: string | undefined;
};

const QuestionCard: React.FC<Props> = ({ question, checkAnswer, userAnswer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <p className="text-2xl font-bold mb-6 text-center" dangerouslySetInnerHTML={{ __html: question.question }} />

      <div className="flex flex-col space-y-3">
        {question.answers.map((answer) => {
          const hasAnswered = userAnswer !== undefined;
          const isUserChoice = userAnswer === answer;
          const isCorrectAnswer = question.correct_answer === answer;

          let buttonClass = 'bg-gray-100 hover:bg-purple-100';
          if (hasAnswered) {
            if (isCorrectAnswer) {
              buttonClass = 'bg-purple-600 text-white';
            } else if (isUserChoice) {
              buttonClass = 'bg-purple-300 text-white';
            } else {
              buttonClass = 'bg-gray-200 text-gray-500';
            }
          }

          return (
            <button
              key={answer}
              onClick={() => checkAnswer(answer)}
              disabled={hasAnswered}
              className={`w-full p-3 rounded-lg border-2 text-lg transition-colors duration-300 ${buttonClass} ${hasAnswered ? 'cursor-not-allowed' : ''}`}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;