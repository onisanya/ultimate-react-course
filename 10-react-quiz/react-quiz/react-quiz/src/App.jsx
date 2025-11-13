import { react, useEffect, useState, useReducer, useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import {
  QuestionContext,
  QuestionProvider,
} from "./components/QuestionContext";
import Question from "./components/Question";

function App() {
  const API_URL = "http://localhost:8000/questions";
  const [quizState, setQuizState] = useState({
    currQuestion: 0,
    selectedAnswer: null,
    lastQuestion: 0,
    score: 0,
    showResults: false,
    loading: false,
    answers: [],
  });
  // const [currAnswer, setCurrAnswer] = useState(0);
  const [questions, setQuestions] = useState([]);

  // nav reducer

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
      // setQuizState((prevState) => ({ ...prevState, questions: data }));
      setQuestions(data);
    };
    fetchQuestions();
  }, []);

  console.log("Current Question: ", quizState.currQuestion);

  function reducerNav({ currQuestion, lastQuestion, maxQuestions }, action) {
    if (!stateNav) return;
    switch (action.type) {
      case "next": {
        return currQuestion + 1 <= maxQuestions - 1
          ? currQuestion + 1
          : currQuestion;
      }
      case "previous": {
        return currQuestion - 1 >= 0 ? currQuestion - 1 : 0;
      }

      default:
        return stateNav;
    }
  }

  const [stateNav, dispatchNav] = useReducer(reducerNav, {
    currQuestion: 0,
    answers: [],
  });

  // useEffect(() => {
  //   console.log(
  //     "Current Question: ",
  //     quizState.questions[quizState.currQuestion]
  //   );
  //   console.log("Answers: ", stateNav.answers);
  // }, [quizState]);

  // mounted components
  return (
    <QuestionProvider>
      <div className="App">
        <Header />
        {questions.length > 0 ? (
          <Question
            question={questions[quizState.currQuestion]}
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
