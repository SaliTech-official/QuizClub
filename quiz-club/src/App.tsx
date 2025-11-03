import React, { useState } from 'react';
import { quizQuestions } from './data';
import SetupScreen from './components/SetupScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import type { QuestionState, Difficulty, Category } from './types';

type GameState = 'not_started' | 'playing' | 'finished';

const shuffleArray = (array: string[]) => [...array].sort(() => Math.random() - 0.5);

function App() {
  const [gameState, setGameState] = useState<GameState>('not_started');
  const [selectedCategory, setSelectedCategory] = useState<Category>('sports');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('easy');
  
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string | undefined>(undefined);

  const startQuiz = () => {
    const filteredQuestions = quizQuestions.filter(
      q => q.category === selectedCategory && q.difficulty === selectedDifficulty
    );

    if (filteredQuestions.length === 0) {
      alert("Sorry, no questions found with the selected settings. Please try a different combination.");
      return;
    }

    const preparedQuestions = filteredQuestions.map(q => ({
      ...q,
      answers: shuffleArray([...q.incorrect_answers, q.correct_answer]),
    }));

    setQuestions(preparedQuestions);
    setGameState('playing');
    setScore(0);
    setCurrentQuestionIndex(0);
    setUserAnswer(undefined);
  };

  const checkAnswer = (answer: string) => {
    if (userAnswer) return; // Do nothing if an answer has already been submitted
    const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
    if (isCorrect) setScore(prevScore => prevScore + 1);
    setUserAnswer(answer);
  };

  const nextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex === questions.length) {
      setGameState('finished');
    } else {
      setCurrentQuestionIndex(nextQuestionIndex);
      setUserAnswer(undefined);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-600 my-8">Quiz Club</h1>
                
        {gameState === 'not_started' && (
          <SetupScreen
            startQuiz={startQuiz}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
          />
        )}

        {gameState === 'playing' && questions.length > 0 && (
          <QuizScreen
            score={score}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            question={questions[currentQuestionIndex]}
            checkAnswer={checkAnswer}
            userAnswer={userAnswer}
            nextQuestion={nextQuestion}
          />
        )}

        {gameState === 'finished' && (
          <ResultScreen
            score={score}
            totalQuestions={questions.length}
            playAgain={startQuiz} 
          />
        )}
      </div>
    </div>
  );
}

export default App;