import { react, Provider, useContext, useEffect, useState } from "react";
// import "./Question.css";
// import QuizContext from "./QuizContext";
import AnswersBlock from "./AnswersBlock";
import NavigationButton from "./NavigationButton";

export default function Question({ question, reducerNav }) {
  return (
    <div className="question_container">
      <h2 className="question">{question.question}</h2>
      <div className="answer_section">
        <NavigationButton
          id="back"
          direction="previous"
          onClick={() => reducerNav({ type: "previous" })}
        />
        <AnswersBlock answers={question.options} />
        <NavigationButton
          id="next"
          direction="next"
          onClick={() => reducerNav({ type: "next" })}
        />
      </div>
    </div>
  );
}
