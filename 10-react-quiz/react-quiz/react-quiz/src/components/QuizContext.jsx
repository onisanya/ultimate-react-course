import { createContext, useState } from "react";

export const QuizContext = createContext(null);

export function QuizProvider({ children }) {
  const [quizState, setQuizState] = useState({
    currQuestion: 0,
    score: 0,
    showResults: false,
    loading: true,
    lastQuestion: 0,
    answers: [],
    questions: [],
  });

  setQuizState((prevState) => ({
    ...prevState,
    lastQuestion: prevState.currQuestion,
  }));

  return (
    <QuizContext.Provider value={{ quizState, setQuizState }}>
      {children}
    </QuizContext.Provider>
  );
}
