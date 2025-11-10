import { react, Provider, useContext, useEffect, useState } from "react";
// import "./Question.css";
// import QuizContext from "./QuizContext";
import AnswersBlock from "./AnswersBlock";
import NavigationButton from "./NavigationButton";

export default function Question({ question, reducerNav }) {
  return (
    <div className="question_container">
      <h2 className="question">{question.question}</h2>
      <AnswersBlock answers={question.options} />
      <div className="answer_section">
        <NavigationButton
          id="previous"
          onClick={() => reducerNav({ type: "previous" })}
        />
        <NavigationButton
          id="submit"
          onClick={() => reducerNav({ type: "submit" })}
        />
        <NavigationButton
          id="next"
          onClick={() => reducerNav({ type: "next" })}
        />
      </div>
    </div>
  );
}
