export type Difficulty = "hard" | "medium" | "easy";
export type Category = "sports" | "history" | "computer_science" | "math"

export interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: Difficulty;
  category: Category;
}

export interface QuestionState extends Question {
    answers: string[];
}