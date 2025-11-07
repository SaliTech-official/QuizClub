// src/components/SetupScreen.tsx
import React from 'react';
import type { Difficulty, Category } from '../types';
import SettingsAccordion from './SettingsAccordion';

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
  const categories: { value: Category; label: string }[] = [
    { value: 'sports', label: 'Sports' },
    { value: 'history', label: 'History' },
    { value: 'computer_science', label: 'Computer Science' },
    { value: 'mathematics', label: 'Mathematics' },
  ];

  const difficulties: { value: Difficulty; label: string }[] = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
  ];

  return (
    <div className="bg-transparent p-0 w-full animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Quiz Settings</h2>

      <SettingsAccordion
        title="Category"
        selectedValue={categories.find(c => c.value === selectedCategory)?.label || ''}
      >
        {({ close }) => categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => {
              setSelectedCategory(cat.value);
              close();
            }}
            className="w-full text-left p-3 rounded-md hover:bg-purple-50 transition-colors"
          >
            {cat.label}
          </button>
        ))}
      </SettingsAccordion>

      <SettingsAccordion
        title="Difficulty"
        selectedValue={difficulties.find(d => d.value === selectedDifficulty)?.label || ''}
      >
        {({ close }) => difficulties.map(diff => (
          <button
            key={diff.value}
            onClick={() => {
              setSelectedDifficulty(diff.value);
              close();
            }}
            className="w-full text-left p-3 rounded-md hover:bg-purple-50 transition-colors"
          >
            {diff.label}
          </button>
        ))}
      </SettingsAccordion>

      <button onClick={startQuiz} className='w-full mt-6 bg-purple-600 text-white font-bold py-3 rounded-full hover:bg-purple-700 transition-transform transform hover:scale-101 shadow-lg'>
        Start Quiz
      </button>
    </div>
  );
};

export default SetupScreen;