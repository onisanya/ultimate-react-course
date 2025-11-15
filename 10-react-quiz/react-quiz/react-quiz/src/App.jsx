import { useEffect, useState, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import { QuestionProvider } from "./components/QuestionContext";
import Question from "./components/Question";

function App() {
  const API_URL = "http://localhost:8000/questions";
  const [questions, setQuestions] = useState([]);

  // Reducer function must be defined before useReducer
  function reducerNav(state, action) {
    if (!state) return state;
    switch (action.type) {
      case "next": {
        console.log("Current Question", state.currQuestion);
        console.log("Next Question", state.currQuestion + 1);
        return {
          ...state,
          currQuestion:
            state.currQuestion + 1 <= state.lastQuestion
              ? state.currQuestion + 1
              : state.currQuestion,
        };
      }
      case "previous": {
        console.log("Current Question", state.currQuestion);
        console.log("Previous Question", state.currQuestion - 1);
        return {
          ...state,
          currQuestion:
            state.currQuestion - 1 >= 0 ? state.currQuestion - 1 : 0,
        };
      }
      case "setQuestions": {
        console.log("Setting lastQuestion to", action.payload.length - 1);
        return {
          ...state,
          lastQuestion: action.payload.length - 1,
        };
      }

      default:
        return state;
    }
  }

  const navState = {
    answers: [],
    currQuestion: 0,
    selectedAnswer: null,
    lastQuestion: 0,
    lastAnswered: 0,
    quizCompleted: false,
  };

  const [state, dispatchNav] = useReducer(reducerNav, navState);

  // Debug: log state changes
  useEffect(() => {
    console.log("State updated:", state);
  }, [state]);

  // Fetch questions

  useEffect(() => {
    console.log("Fetching questions... ");
    const fetchQuestions = async () => {
      // Only fetch if questions haven't been loaded yet
      if (questions.length > 0) {
        console.log("Questions already loaded, skipping fetch.");
        return;
      }

      const response = await fetch(API_URL);
      console.log("res: ", response);
      const data = await response.json();
      console.log("data: ", data);
      setQuestions(data);
      dispatchNav({ type: "setQuestions", payload: data });
      console.log("Init State: ", state);
    };
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log("Last question: ", state.lastQuestion);
  // console.log("Current question index: ", state.currQuestion);

  // mounted components
  return (
    <QuestionProvider>
      <div className="App">
        <Header />
        {questions.length > 0 ? (
          <Question
            question={questions[state.currQuestion]}
            reducerNav={dispatchNav}
          />
        ) : (
          <Loader />
        )}
      </div>
    </QuestionProvider>
  );
}

export default App;
