import { useRef } from "react";
import Answer from "./Answer";

function AnswersBlock({ question }, ref) {
  const answerRefs = useRef([]);

  function handleSelection(index) {
    answerRefs.current.forEach((childRef, i) => {
      if (childRef) {
        i === index ? childRef.setSelected() : childRef.setNotSelected();
      }
    });
  }

  // Expose methods to parent that operate on all children

  return (
    <div className="answers">
      {question.options.map((answer, index) => (
        <Answer
          key={index}
          index={index}
          answer={answer}
          onClick={handleSelection}
          ref={(el) => (answerRefs.current[index] = el)}
        />
      ))}
    </div>
  );
}

export default AnswersBlock;
