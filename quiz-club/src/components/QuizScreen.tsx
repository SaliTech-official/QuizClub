import React from 'react';
import QuestionCard from './QuestionCard';
import type { QuestionState } from '../types';

type Props = {
  score: number;
  questionNumber: number;
  totalQuestions: number;
  question: QuestionState;
  checkAnswer: (answer: string) => void;
  userAnswer: string | undefined;
  nextQuestion: () => void;
};

const QuizScreen: React.FC<Props> = ({ 
  score, 
  questionNumber, 
  totalQuestions, 
  question, 
  checkAnswer, 
  userAnswer, 
  nextQuestion 
}) => {
  return (
    <div className="w-full animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-bold text-gray-800">Score: {score}</p>
        <p className="text-lg text-gray-500">
          Question: {questionNumber} / {totalQuestions}
        </p>
      </div>
      
      <QuestionCard 
        question={question}
        checkAnswer={checkAnswer}
        userAnswer={userAnswer}
      />

      {userAnswer && (
        <button onClick={nextQuestion} className="mt-8 bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-transform transform hover:scale-105 animate-fade-in">
          Next Question
        </button>
      )}
    </div>
  );
};

export default QuizScreen;