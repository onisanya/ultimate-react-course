import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { useQuestionContext } from "./QuestionContext";

const Answer = forwardRef(({ index, answer, onClick }, ref) => {
  const { selectAnswer } = useQuestionContext();
  const [style, setStyle] = useState("answer_button");
  function handleClick() {
    selectAnswer(index);

    onClick(index);
  }

  useImperativeHandle(ref, () => ({
    resetStyle: () => {
      setStyle("answer_button");
    },
    setSelected: () => {
      setStyle("answer_button answer_button-selected");
    },
    setNotSelected: () => {
      setStyle("answer_button answer_button-not_selected");
    },
    getIndex: () => index,
  }));

  // if (questionState.correctOption === index) {
  //       setStyle("answer_button:selected");
  //     }

  return (
    <button className={`${style}`} onClick={handleClick}>
      <p className="answer">{answer}</p>
    </button>
  );
});

export default Answer;
