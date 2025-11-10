import Answer from "./Answer";

export default function AnswersBlock({ answers }) {
  return (
    <div className="answers">
      {answers.map((answer, index) => (
        <Answer key={index} answer={answer} />
      ))}
    </div>
  );
}
