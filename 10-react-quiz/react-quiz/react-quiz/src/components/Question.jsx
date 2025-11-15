import { useRef, useEffect } from "react";
import AnswersBlock from "./AnswersBlock";
import NavigationButton from "./NavigationButton";
import { useQuestionContext } from "./QuestionContext";

export default function Question({ question, reducerNav }) {
  const { quizState } = useQuestionContext();
  const answersBlockRef = useRef();

  // Reset styles when question changes
  useEffect(() => {
    if (answersBlockRef.current) {
      answersBlockRef.current.resetAllStyles();
    }
  }, [question]);

  if (!question) return null;

  // Call method on all Answer children conditionally
  const handleSubmit = () => {
    if (answersBlockRef.current && quizState.selectedAnswer !== null) {
      // Highlight selected answer
      answersBlockRef.current.setSelectedAnswer(quizState.selectedAnswer);

      // Optionally highlight correct answer
      // answersBlockRef.current.highlightCorrect(question.correctOption);
    }
  };

  return (
    <div className="question_container">
      <div className="question">
        <h2>{question.question}</h2>
      </div>
      <AnswersBlock ref={answersBlockRef} question={question} />
      <div className="nav_section">
        <NavigationButton
          id="previous"
          caption="◀ Previous"
          onClick={() => reducerNav({ type: "previous" })}
        />
        <NavigationButton
          id="submit"
          caption="Submit"
          onClick={() => {
            handleSubmit();
            reducerNav({ type: "submit" });
          }}
        />
        <NavigationButton
          id="next"
          caption="Next ▶"
          onClick={() => reducerNav({ type: "next" })}
        />
      </div>
    </div>
  );
}
