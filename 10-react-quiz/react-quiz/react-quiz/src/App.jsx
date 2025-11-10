import { react, useEffect, useState, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
// import { QuizContext, QuizProvider } from "./components/QuizContext";
import Question from "./components/Question";

function App() {
  const API_URL = "http://localhost:8000/questions";
  const [quizState, setQuizState] = useState({
    questions: [],
    lastQuestion: 0,
    score: 0,
    showResults: false,
    loading: false,
  });
  const [currAnswer, setCurrAnswer] = useState(0);

  // nav reducer
  function reducerNav(stateNav, action) {
    if (!stateNav) return;
    switch (action.type) {
      case "next": {
        return {
          ...stateNav,
          currQuestion:
            stateNav.currQuestion + 1 <= quizState.questions.length - 1
              ? stateNav.currQuestion + 1
              : stateNav.currQuestion,
        };
      }
      case "previous": {
        return {
          ...stateNav,
          currQuestion:
            stateNav.currQuestion - 1 >= 0 ? stateNav.currQuestion - 1 : 0,
        };
      }
      case "submit": {
        // Handle answer submission
        return {
          ...stateNav,
          answers: [...stateNav.answers, action.payload],
        };
      }
      default:
        return stateNav;
    }
  }

  const [stateNav, dispatchNav] = useReducer(reducerNav, {
    currQuestion: 0,
    answers: [],
  });

  useEffect(() => {
    const fetchQuestions = async () => {
      // Only fetch if questions haven't been loaded yet
      if (quizState.questions.length > 0) return;

      const response = await fetch(API_URL);
      console.log("res: ", response);
      const data = await response.json();
      console.log("data: ", data);
      setQuizState((prevState) => ({ ...prevState, questions: data }));
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    console.log(
      "Current Question: ",
      quizState.questions[stateNav.currQuestion]
    );
    console.log("Answers: ", stateNav.answers);
  }, [stateNav.currQuestion, stateNav.answers]);

  console.log("Current Question: ", quizState.questions[stateNav.currQuestion]);

  // mounted components
  return (
    <div className="App">
      <Header />
      {quizState.questions.length > 0 ? (
        <Question
          question={quizState.questions[stateNav.currQuestion]}
          reducerNav={dispatchNav}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
