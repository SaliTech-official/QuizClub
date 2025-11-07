import React from 'react';

type Props = {
  score: number;
  totalQuestions: number;
  playAgain: () => void;
  backToSetup: () => void;
};

const ResultScreen: React.FC<Props> = ({ score, totalQuestions, playAgain, backToSetup }) => {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl text-center animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-700 mb-4">Quiz Finished!</h2>
      <p className="text-xl text-gray-700 mb-2">
        Your final score is:
        <span className="font-bold text-yellow-500 text-2xl mx-2"> {score} / {totalQuestions}</span>
      </p>
      <p className="text-lg text-purple-600 font-semibold mb-8">
        ({percentage}%)
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={backToSetup} 
          className="w-full sm:w-auto bg-gray-500 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-600 transition-transform transform hover:scale-101"
        >
          Back to Settings
        </button>
        <button 
          onClick={playAgain} 
          className="w-full sm:w-auto bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition-transform transform hover:scale-101"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;