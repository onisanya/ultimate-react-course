import { useState } from "react";
import "./Accordion_simple.css";

export default function AccordionSimple({
  textContent = "Default accordion content.",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion__simple">
      <div className="accordion__label">
        <h3 className="accordion__title">Accordion Title</h3>
        <button className="accordion__button" onClick={toggleAccordion}>
          {isOpen ? "-" : "+"}
        </button>
      </div>

      <div className={`accordion__content${isOpen ? "--expanded" : ""}`}>
        <p>{textContent}</p>
      </div>
    </div>
  );
}
