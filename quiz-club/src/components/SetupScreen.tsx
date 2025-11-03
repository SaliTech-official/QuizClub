import React from 'react';
import type { Difficulty, Category } from '../types';

type Props = {
  startQuiz: () => void;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  selectedDifficulty: Difficulty;
  setSelectedDifficulty: (difficulty: Difficulty) => void;
};

const SetupScreen: React.FC<Props> = ({
  startQuiz,
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full text-left animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-center">Quiz Settings</h2>

      <div className="mb-4">
        <label htmlFor="category" className="block text-lg font-medium text-gray-700 mb-2">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as Category)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="sports">Sports</option>
          <option value="history">History</option>
          <option value="computer_science">Computer Science</option>
        </select>
      </div>

      <div className="mb-8">
        <label htmlFor="difficulty" className="block text-lg font-medium text-gray-700 mb-2">Difficulty:</label>
        <select
          id="difficulty"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button onClick={startQuiz} className='w-full bg-blue-500 text-white font-bold py-3 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105'>
        Start Quiz
      </button>
    </div>
  );
};

export default SetupScreen;