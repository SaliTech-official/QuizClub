export type Difficulties = "hard" | "medium" | "easy";
export type Category = "sports" | "history" | "computer_science" | "math"

export interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: Difficulties;
  category: Category;
}

export interface QuestionState extends Question {
    answers: string[];
}