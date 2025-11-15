import { createContext, useState, useContext } from "react";

// 1. CREATE CONTEXT - This is the "container" for your shared data
export const QuestionContext = createContext(null);

// 2. PROVIDE CONTEXT - This component wraps your app and provides the data
export function QuestionProvider({ children }) {
  // const [maxQuestions, setMaxQuestions] = useState(maxQuestions);

  const [quizState, setQuizState] = useState({
    score: 0,
    showResults: false,
    loading: false,
    selectedAnswer: null,
  });

  const selectAnswer = (option) => {
    setQuizState((prevState) => ({
      ...prevState,
      selectedAnswer: option,
    }));
    console.log("Selected answer: ", quizState.selectedAnswer);
  };

  // The "value" prop contains all data and functions you want to share

  return (
    <QuestionContext.Provider value={{ quizState, selectAnswer }}>
      {children}
    </QuestionContext.Provider>
  );
}

// 3. CUSTOM HOOK - Makes it easier to consume the context
export function useQuestionContext() {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("useQuestionContext must be used within QuestionProvider");
  }
  return context;
}
