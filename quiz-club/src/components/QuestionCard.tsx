import React from "react";
import type { QuestionState } from "../types";

type Props = {
    question: QuestionState;
    checkAnswer: (answer: string) => void;
};

const QuestionCard: React.FC<Props> = ({question, checkAnswer}) => {
    return(

        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <p className="text-2xl font-bold mb-6 text-center">
                {question.question}
            </p>

            <div className="flex flex-col apace-y-3">
                {question.answers.map((answer)=>(
                    <button
                        key={answer}
                        onClick={() => checkAnswer(answer)}
                        className="w-full p-3 rounded-lg border-2 text-lg bg-gray-100 hover:bg-blue-100 transition-colors"
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default QuestionCard;