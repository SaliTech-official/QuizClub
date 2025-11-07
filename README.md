# ⚛️ Quiz Club

Quiz Club is a modern and responsive quiz web application built with **React**, **TypeScript**, and **Tailwind CSS**. It allows users to test their knowledge by selecting a quiz category and difficulty, answering timed questions, and receiving instant feedback on their performance. The project is a practical demonstration of building a feature-rich, type-safe, and interactive front-end application.

## Features

- **Customizable Quiz Setup**: Select both the quiz **category** and **difficulty** before starting.
- **Challenging Countdown Timer**: Each question is timed, adding a layer of excitement and urgency.
- **Immediate Answer Feedback**: Get instant visual confirmation for correct (green) and incorrect (red) answers.
- **User-Paced Progression**: A "Next Question" button appears after each answer, giving users full control over the pace of the quiz.
- **Comprehensive Results Screen**: View your final score, percentage, and options to "Play Again" or return to the "Settings" screen.
- **Fully Responsive Design**: Enjoy a seamless and visually appealing experience on any device, from small mobile screens to large desktops.
- **Clean Component-Based Architecture**: The UI is structured into logical, reusable components (`SetupScreen`, `QuizScreen`, `ResultScreen`, etc.).
- **Elegantly Styled with Tailwind CSS**: A clean, modern interface built entirely with utility-first classes, requiring no custom CSS files.

## Installation and Setup

To run Quiz Club locally, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your system.
2. Clone the repository:
   ```bash
   git clone https://github.com/SaliTech-official/QuizClub.git
   ```
Navigate to the project directory:
   ```bash
   cd quiz-club
   ```
Install dependencies:
   ```bash
   npm install
   ```
Start the development server:
   ```bash
   npm run dev
   ```
Open your browser and visit http://localhost:5173 (or the port shown in your terminal) to see the app in action.
State Management
The application's state is managed using React's built-in useState hook. This approach keeps the state management localized and straightforward, handling everything from the current game phase ('not_started', 'playing', 'finished') to the user's score, selected answers, and timer.

Preview

Quiz Club Setup Screen
Quiz Club Question Screen
Quiz Club Answer Feedback
Quiz Club Results Screen

Future Updates
Future enhancements are planned, including adding more animations and fetching questions from a live API to provide a limitless supply of quizzes.

Technical Highlights
Strongly-Typed Architecture: TypeScript is used throughout the project to ensure type safety, from defining data structures with interfaces and type aliases (Question, GameState) to typing component props and state.
Complex Side Effect Management: The useEffect hook is expertly used to manage the countdown timer, including crucial cleanup logic (clearInterval) to prevent memory leaks and ensure stable performance.
Clean Componentization: The UI is broken down into single-responsibility components (SetupScreen, QuizScreen, ResultScreen), promoting code reusability, scalability, and maintainability.
Modern Development Workflow: The project is built using Vite, providing a blazing-fast development server and an optimized production build.
Utility-First Styling: The entire UI is built with Tailwind CSS, demonstrating a modern and efficient approach to styling without the need for traditional CSS files.
