import React, { useState } from 'react';
import { quizQuestions } from './data';
import QuestionCard from './components/QuestionCard';
import type { QuestionState } from './types';

const shuffleArray = (array: string[]) => [...array].sort(() => Math.random() - 0.5)

function App() {
  const [isQuizActive, setIsQuizActive] = useState(false);
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
    setIsQuizActive(true)
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
        alert(`Quiz Finished! Your final score is: ${score}/${questions.length}`);
        setIsQuizActive(false);
      } else {
        setCurrentQuestionIndex(nextQuestionIndex);
        setUserAnswer(undefined);
      }
    };


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-5xl font-extrabold text-blue-600 my-8">Quiz Club</h1>
      {!isQuizActive ? (
        <button
          onClick={startQuiz}
          className='bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105'
        >
          Start Quiz
        </button>
      ) : (
        <>
          <p className="text-2xl font-bold text-gray-800 mb-4">Score: {score}</p>
          <QuestionCard 
            question={questions[currentQuestionIndex]}
            checkAnswer={checkAnswer}
            userAnswer={userAnswer}
          />

          {userAnswer && (
            <button
              onClick={nextQuestion}
              className="mt-8 bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-transform transform hover:scale-105"
            >
              Next Question
            </button>
          )}
        </>
      )}
      
    </div>
  );
}

export default App;