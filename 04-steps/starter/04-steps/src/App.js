import "./index.css";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 💸",
];

// our main app component

function App() {
  const [step, setStep] = useState(1);
  console.log("setStep: ", setStep);

  function handlePrevious() {
    setStep((step) => (step > 1 ? step - 1 : messages.length));
    console.log("Previous");
  }

  function handleNext() {
    setStep((step) => (step < messages.length ? step + 1 : 1));
    console.log("Next");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step === 1 ? "active" : ""}`}>1</div>
        <div className={`${step === 2 ? "active" : ""}`}>2</div>
        <div className={`${step === 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">{messages[step - 1]}</p>
      <div className="buttons">
        <button
          className="button"
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="button"
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
