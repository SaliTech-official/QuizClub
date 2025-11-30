# Quiz Club

Quiz Club is a clean and responsive quiz web application built with React, TypeScript, and Tailwind CSS. It enables users to select a quiz category and difficulty, answer timed questions with instant visual feedback, and view their final score. This project is a practical demonstration of building a feature-rich, type-safe, and interactive application.

## Features

- Customizable Quiz Setup: Select both the quiz **category** and **difficulty** before starting.
- Challenging Countdown Timer: Each question is timed, adding a layer of excitement and urgency.
- Immediate Answer Feedback: Get instant visual confirmation for correct (green) and incorrect (red) answers.
- User-Paced Progression: A "Next Question" button appears after each answer, giving users full control over the pace of the quiz.
- Comprehensive Results Screen: View your final score, percentage, and options to "Play Again" or return to the "Settings" screen.
- Fully responsive design optimized for desktop and mobile.
- Clean and modular codebase with React Hooks for state management.
- Styled elegantly using Tailwind CSS utility classes.

## Installation and Setup

To run Quiz Club locally, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your system.
2. Clone the repository:
   ```bash
    git clone https://github.com/SaliTech-official/QuizClub.git
   ```
3. Navigate to the project directory:
   ```bash
   cd quiz-club
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and visit http://localhost:5173 (or the port shown in your terminal) to see the app in action.

## State Management

The application uses React's built-in Hooks (`useState` and `useEffect`) for managing the state in a simple and straightforward manner, handling everything from the current game phase (`'not_started'`, `'playing'`, `'finished'`) to the user's score and timer.

## Preview

![Quiz Club Setup Screen](/Previews/Preview1.png)

![Quiz Club Question Screen](/Previews/Preview2.png)

![Quiz Club Answer Feedback](/Previews/Preview4.png)

![Quiz Club Results Screen](/Previews/Preview3.png)

## Future Updates

Future enhancements are planned, including adding more animations and fetching questions from a live API to provide a limitless supply of quizzes.

## Technical Highlights

- **Strongly-Typed Architecture**: TypeScript is used throughout to ensure type safety, from defining data structures with `interfaces` and `type` aliases (`Question`, `GameState`) to typing component props and state.
- **Complex Side Effect Management**: The `useEffect` hook is expertly used to manage the countdown timer, including crucial cleanup logic (`clearInterval`) to prevent memory leaks and ensure stable performance.
- **Clean Componentization**: The UI is broken down into single-responsibility components (`SetupScreen`, `QuizScreen`, `ResultScreen`), promoting code reusability and maintainability.
- **Modern Development Workflow**: The project is built using Vite, providing a blazing-fast development server and an optimized production build.
- **Utility-First Styling**: The entire UI is built with Tailwind CSS, demonstrating a modern and efficient approach to styling without the need for traditional CSS files.

---

Feel free to explore the code, contribute, or report any issues!
