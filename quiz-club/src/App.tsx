import React, { useState } from 'react';
import { quizQuestions } from './data';
import QuestionCard from './components/QuestionCard';
import type { QuestionState } from './types';

const shuffleArray = (array: string[]) => [...array].sort(() => Math.random() - 0.5)

type GameState = 'not_started' | 'playing' | 'finished';

function App() {
  const [gameState, setGameState] = useState<GameState>('not_started')
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string | undefined>(undefined);

  const startQuiz = () => {
    const preparedQuestions = quizQuestions.map(
      (question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
      })
    );

    setQuestions(preparedQuestions)
    setGameState('playing')
    setScore(0)
    setCurrentQuestionIndex(0)
    setUserAnswer(undefined)
  }

  const checkAnswer = (answer: string) => {
      if (userAnswer) return;

      const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
      if (isCorrect) {
        setScore(prevScore => prevScore + 1);
      }

      setUserAnswer(answer);
    };

  const nextQuestion = () => {
      const nextQuestionIndex = currentQuestionIndex + 1;

      if (nextQuestionIndex === questions.length) {
        setGameState('finished')
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
            <button onClick={startQuiz} className='bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105'>
              Start Quiz
            </button>
          )}
          {gameState === 'playing' && questions.length > 0 && (
            <>
              <p className="text-2xl font-bold text-gray-800 mb-4">Score: {score}</p>
              <QuestionCard 
                question={questions[currentQuestionIndex]}
                checkAnswer={checkAnswer}
                userAnswer={userAnswer}
              />
              {userAnswer && (
                <button onClick={nextQuestion} className="mt-8 bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-transform transform hover:scale-105.">
                  Next Question
                </button>
              )}
            </>
          )}
          {gameState === 'finished' && (
            <div className="bg-white p-8 rounded-xl shadow-2xl text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Finished!</h2>
              <p className="text-xl text-gray-600 mb-6">
                Your final score is: 
                <span className="font-bold text-green-500 text-2xl"> {score} / {questions.length}</span>
              </p>
              <button onClick={startQuiz} className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105">
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    );
}

export default App;