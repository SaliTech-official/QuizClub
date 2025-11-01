type Difficulties = "hard" | "medium" | "easy";

export interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: Difficulties
}

export interface QuestionState extends Question {
    answers: string[];
}