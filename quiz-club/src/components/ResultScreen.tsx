import React from 'react';

type Props = {
  score: number;
  totalQuestions: number;
  playAgain: () => void;
};

const ResultScreen: React.FC<Props> = ({ score, totalQuestions, playAgain }) => {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl text-center animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Finished!</h2>
      <p className="text-xl text-gray-600 mb-2">
        Your final score is:
        <span className="font-bold text-green-500 text-2xl mx-2"> {score} / {totalQuestions}</span>
      </p>
      <p className="text-lg text-blue-500 font-semibold mb-6">
        ({percentage}%)
      </p>
      <button onClick={playAgain} className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105">
        Play Again
      </button>
    </div>
  );
};

export default ResultScreen;